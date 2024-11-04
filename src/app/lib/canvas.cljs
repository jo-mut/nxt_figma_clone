(ns app.lib.canvas
  (:require
   ["fabric" :as fabric]
   [uuid :refer [v4]]
   [shapes :as shapes]
   [app.constants.index :as constants]))

(defn initialize-fabric
  [{:keys [fabric-ref canvas-ref]}]
  (let [canvas-element (js/document.getElementById "canvas")
        canvas (fabric/Canvas. (.-current canvas-ref)
                               {:width  (.-clientWidth canvas-element)
                                :height (.-clientHeight canvas-element)})]
    (set! (.-current fabric-ref) canvas)
    canvas))

(defn handle-canvas-mouse-down
  [{:keys [options canvas selected-shape-ref is-drawing shape-ref]}]
  (let [pointer (fabric/getPointer canvas (.-e options))
        target (fabric/findTarget canvas (.-e options) false)]
    (set! canvas.isDrawingMode false)
    (if (= (.-current selected-shape-ref) "freeform")
      (do
        (set! is-drawing.current true)
        (set! canvas.isDrawingMode true)
        (set! (.-width canvas.freeDrawingBrush) 5))
      (do
        (set! canvas.isDrawingMode false)
        (if (and target (or (= (.-type target) (.-current selected-shape-ref))
                            (= (.-type target) "activeSelection")))
          (do
            (set! is-drawing.current false)
            (fabric/setActiveObject canvas target)
            (fabric/setCoords target))
          (do
            (set! is-drawing.current true)
            (set! (.-current shape-ref)
                  (shapes/create-specific-shape (.-current selected-shape-ref) pointer))
            (when (.-current shape-ref)
              (fabric/add canvas (.-current shape-ref)))))))))

(defn handle-canvas-mouse-move
  [{:keys [options canvas is-drawing selected-shape-ref shape-ref sync-shape-in-storage]}]
  (when (and (.-current is-drawing) (not= (.-current selected-shape-ref) "freeform"))
    (set! canvas.isDrawingMode false)
    (let [pointer (fabric/getPointer canvas (.-e options))]
      (case (.-current selected-shape-ref)
        "rectangle" (fabric/set (.-current shape-ref)
                                {:width  (- (.-x pointer) (or (.-left (.-current shape-ref)) 0))
                                 :height (- (.-y pointer) (or (.-top (.-current shape-ref)) 0))})
        "circle"    (fabric/set (.-current shape-ref)
                                {:radius (/ (Math/abs (- (.-x pointer) (or (.-left (.-current shape-ref)) 0))) 2)})
        "triangle"  (fabric/set (.-current shape-ref)
                                {:width  (- (.-x pointer) (or (.-left (.-current shape-ref)) 0))
                                 :height (- (.-y pointer) (or (.-top (.-current shape-ref)) 0))})
        "line"      (fabric/set (.-current shape-ref)
                                {:x2 (.-x pointer)
                                 :y2 (.-y pointer)})
        "image"     (fabric/set (.-current shape-ref)
                                {:width  (- (.-x pointer) (or (.-left (.-current shape-ref)) 0))
                                 :height (- (.-y pointer) (or (.-top (.-current shape-ref)) 0))})
        nil))
    (fabric/renderAll canvas)
    (when (.-objectId (.-current shape-ref))
      (sync-shape-in-storage (.-current shape-ref)))))

(defn handle-canvas-mouse-up
  [{:keys [canvas is-drawing shape-ref active-object-ref selected-shape-ref sync-shape-in-storage set-active-element]}]
  (set! (.-current is-drawing) false)
  (when (not= (.-current selected-shape-ref) "freeform")
    (sync-shape-in-storage (.-current shape-ref))
    (set! (.-current shape-ref) nil)
    (set! (.-current active-object-ref) nil)
    (set! (.-current selected-shape-ref) nil)
    (when (not canvas.isDrawingMode)
      (js/setTimeout #(set-active-element constants/default-nav-element) 700))))

(defn handle-canvas-object-modified
  [{:keys [options sync-shape-in-storage]}]
  (let [target (.-target options)]
    (when target
      (if (= (.-type target) "activeSelection")
        ;; handle active selection case if needed
        nil
        (sync-shape-in-storage target)))))

(defn handle-path-created
  [{:keys [options sync-shape-in-storage]}]
  (let [path (.-path options)]
    (when path
      (fabric/set path {:objectId (v4)})
      (sync-shape-in-storage path))))

(defn handle-canvas-object-moving
  [{:keys [options]}]
  (let [target (.-target options)
        canvas (.-canvas target)]
    (fabric/setCoords target)
    (when (.-left target)
      (set! (.-left target)
            (-> (Math/max 0 (Math/min (.-left target)
                                      (- (.-width canvas) (fabric/getScaledWidth target))))
                (Math/min (.-width canvas)))))
    (when (.-top target)
      (set! (.-top target)
            (-> (Math/max 0 (Math/min (.-top target)
                                      (- (.-height canvas) (fabric/getScaledHeight target))))
                (Math/min (.-height canvas)))))))

(defn handle-canvas-selection-created
  [{:keys [options is-editing-ref set-element-attributes]}]
  (when (and (not (.-current is-editing-ref)) (.-selected options))
    (let [selected-element (first (.-selected options))]
      (when (and selected-element (= 1 (count (.-selected options))))
        (let [scaled-width  (if (.-scaleX selected-element)
                              (* (.-width selected-element) (.-scaleX selected-element))
                              (.-width selected-element))
              scaled-height (if (.-scaleY selected-element)
                              (* (.-height selected-element) (.-scaleY selected-element))
                              (.-height selected-element))]
          (set-element-attributes {:width  (str (.-toFixed scaled-width 0))
                                   :height (str (.-toFixed scaled-height 0))
                                   :fill   (str (.-fill selected-element))
                                   :stroke (.-stroke selected-element)
                                   :fontSize (.-fontSize selected-element)
                                   :fontFamily (.-fontFamily selected-element)
                                   :fontWeight (.-fontWeight selected-element)}))))))

(defn handle-canvas-object-scaling
  [{:keys [options set-element-attributes]}]
  (let [selected-element (.-target options)
        scaled-width  (if (.-scaleX selected-element)
                        (* (.-width selected-element) (.-scaleX selected-element))
                        (.-width selected-element))
        scaled-height (if (.-scaleY selected-element)
                        (* (.-height selected-element) (.-scaleY selected-element))
                        (.-height selected-element))]
    (set-element-attributes (fn [prev]
                              (merge prev {:width  (str (.-toFixed scaled-width 0))
                                           :height (str (.-toFixed scaled-height 0))})))))

(defn render-canvas
  [{:keys [fabric-ref canvas-objects active-object-ref]}]
  (when-let [canvas (.-current fabric-ref)]
    (fabric/clear canvas)
    (doseq [[object-id object-data] canvas-objects]
      (fabric/enlivenObjects [object-data]
                             (fn [enlivened-objects]
                               (doseq [enlivened-obj enlivened-objects]
                                 (when (= (.-objectId active-object-ref) object-id)
                                   (fabric/setActiveObject canvas enlivened-obj))
                                 (fabric/add canvas enlivened-obj)))
                             "fabric"))
    (fabric/renderAll canvas)))

(defn handle-resize
  [{:keys [canvas]}]
  (let [canvas-element (js/document.getElementById "canvas")]
    (when canvas
      (fabric/setDimensions canvas
                            {:width  (.-clientWidth canvas-element)
                             :height (.-clientHeight canvas-element)}))))

(defn handle-canvas-zoom
  [{:keys [options canvas]}]
  (let [delta (.-deltaY (.-e options))
        zoom (fabric/getZoom canvas)
        min-zoom 0.2
        max-zoom 1
        zoom-step 0.001
        new-zoom (-> zoom
                     (+ (* delta zoom-step))
                     (Math/max min-zoom)
                     (Math/min max-zoom))]
    (fabric/zoomToPoint canvas (js-obj "x" (.-offsetX (.-e options)) "y" (.-offsetY (.-e options))) new-zoom)
    (set! (.-e options) (.-preventDefault (.-e options)))
    (set! (.-e options) (.-stopPropagation (.-e options)))))

