(ns app.lib.key-events
  (:require
    ["fabric" :as fabric]
    ["fabric/util/enlivenObjects" :as enlivened-obj]
    [cljs.uuid :as uuid]))

(defn handle-copy [canvas]
  (let [active-objects (.getActiveObjects canvas)]
    (when (pos? (count active-objects))
      (let [serialized-objects (map #(.toObject %) active-objects)]
        (.setItem js/localStorage "clipboard" (js/JSON.stringify serialized-objects))))
    active-objects))

(defn handle-paste [canvas sync-shape-in-storage]
  (when (and canvas (instance? fabric/Canvas canvas))
    (let [clipboard-data (.getItem js/localStorage "clipboard")]
      (when clipboard-data
        (try
          (let [parsed-objects (js->clj (js/JSON.parse clipboard-data) :keywordize-keys true)]
            (doseq [obj-data parsed-objects]
              (enlivened-obj 
                (clj->js [obj-data])
                (fn [enlivened-objects]
                  (doseq [enlivened-obj enlivened-objects]
                    ;; Offset the pasted objects to avoid overlap with existing objects
                    (.set enlivened-obj (clj->js {:left      (+ (or (.-left enlivened-obj) 0) 20)
                                                    :top       (+ (or (.-top enlivened-obj) 0) 20)
                                                    :objectId  (str (uuid/v4))
                                                    :fill      "#aabbcc"}))
                    (.add canvas enlivened-obj)
                    (sync-shape-in-storage enlivened-obj)))
                "fabric")))
          (catch :default error
            (js/console.error "Error parsing clipboard data:" error)))))))

(defn handle-delete [canvas delete-shape-from-storage]
  (let [active-objects (.getActiveObjects canvas)]
    (when (seq active-objects)
      (doseq [obj active-objects]
        (when (.-objectId obj)
          (.remove canvas obj)
          (delete-shape-from-storage (.-objectId obj))))
      (.discardActiveObject canvas)
      (.requestRenderAll canvas))))

(defn handle-key-down [{:keys [e canvas undo redo sync-shape-in-storage delete-shape-from-storage]}]
  ;; Check if the key pressed is ctrl/cmd + c (copy)
  (when (and (or (.-ctrlKey e) (.-metaKey e)) (= (.-keyCode e) 67))
    (handle-copy canvas))

  ;; Check if the key pressed is ctrl/cmd + v (paste)
  (when (and (or (.-ctrlKey e) (.-metaKey e)) (= (.-keyCode e) 86))
    (handle-paste canvas sync-shape-in-storage))

  ;; Check if the key pressed is ctrl/cmd + x (cut)
  (when (and (or (.-ctrlKey e) (.-metaKey e)) (= (.-keyCode e) 88))
    (handle-copy canvas)
    (handle-delete canvas delete-shape-from-storage))

  ;; Check if the key pressed is ctrl/cmd + z (undo)
  (when (and (or (.-ctrlKey e) (.-metaKey e)) (= (.-keyCode e) 90))
    (undo))

  ;; Check if the key pressed is ctrl/cmd + y (redo)
  (when (and (or (.-ctrlKey e) (.-metaKey e)) (= (.-keyCode e) 89))
    (redo))

  ;; Prevent default action for keycode 191 (?)
  (when (and (= (.-keyCode e) 191) (not (.-shiftKey e)))
    (.preventDefault e)))