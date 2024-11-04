(ns app.lib.shapes
  (:require
   [fabric.core :as fabric]
   [cljs.uuid :as uuid]))

(defn create-rectangle
  [pointer]
  (let [rect (fabric/Rect.
              (clj->js {:left  (.-x pointer)
                        :top   (.-y pointer)
                        :width 100
                        :height 100
                        :fill  "#aabbcc"
                        :objectId (str (uuid/v4))}))]
    rect))

(defn create-triangle
  [pointer]
  (fabric/Triangle.
   (clj->js {:left  (.-x pointer)
             :top   (.-y pointer)
             :width 100
             :height 100
             :fill  "#aabbcc"
             :objectId (str (uuid/v4))})))

(defn create-circle
  [pointer]
  (fabric/Circle.
   (clj->js {:left  (.-x pointer)
             :top   (.-y pointer)
             :radius 100
             :fill  "#aabbcc"
             :objectId (str (uuid/v4))})))

(defn create-line
  [pointer]
  (fabric/Line.
   (clj->js [(.-x pointer) (.-y pointer)
             (+ (.-x pointer) 100) (+ (.-y pointer) 100)]
            {:stroke      "#aabbcc"
             :strokeWidth 2
             :objectId    (str (uuid/v4))})))

(defn create-text
  [pointer text]
  (fabric/IText. text
                 (clj->js {:left       (.-x pointer)
                           :top        (.-y pointer)
                           :fill       "#aabbcc"
                           :fontFamily  "Helvetica"
                           :fontSize    36
                           :fontWeight  "400"
                           :objectId    (str (uuid/v4))})))

(defn create-specific-shape
  [shape-type pointer]
  (case shape-type
    "rectangle" (create-rectangle pointer)
    "triangle"  (create-triangle pointer)
    "circle"    (create-circle pointer)
    "line"      (create-line pointer)
    "text"      (create-text pointer "Tap to Type")
    nil))

(defn handle-image-upload [{:keys [file canvas shape-ref sync-shape-in-storage]}]
  (let [reader (js/FileReader.)]
    (set! (.-onload reader)
          (fn []
            (fabric/Image.fromURL (.. reader -result)
                                  (fn [img]
                                    (.scaleToWidth img 200)
                                    (.scaleToHeight img 200)
                                    (.add canvas img)
                                    (set! (.-objectId img) (str (uuid/v4)))
                                    (set! @shape-ref img)
                                    (sync-shape-in-storage img)
                                    (.requestRenderAll canvas))))
          (.readAsDataURL reader file))))

(defn create-shape
  [canvas pointer shape-type]
  (when-not (= shape-type "freeform")
    (create-specific-shape shape-type pointer)))

(defn modify-shape [{:keys [canvas property value active-object-ref sync-shape-in-storage]}]
  (let [selected-element (.getActiveObject canvas)]
    (when (and selected-element (not= (.type selected-element) "activeSelection"))
      (cond
        (= property "width")
        (do
          (.set selected-element "scaleX" 1)
          (.set selected-element "width" value))

        (= property "height")
        (do
          (.set selected-element "scaleY" 1)
          (.set selected-element "height" value))

        :else
        (when (not= (.get selected-element property) value)
          (.set selected-element property value)))

      (reset! active-object-ref selected-element)
      (sync-shape-in-storage selected-element))))

(defn bring-element [{:keys [canvas direction sync-shape-in-storage]}]
  (when canvas
    (let [selected-element (.getActiveObject canvas)]
      (when (and selected-element (not= (.type selected-element) "activeSelection"))
        (case direction
          "front" (.bringToFront canvas selected-element)
          "back"  (.sendToBack canvas selected-element))
        (sync-shape-in-storage selected-element)))))