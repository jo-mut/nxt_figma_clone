(ns app.constants.index)

;; Define COLORS as a vector
(def colors ["#DC2626" "#D97706" "#059669" "#7C3AED" "#DB2777"])

;; Define shapeElements as a vector of maps
(def shape-elements
  [{:icon "/assets/rectangle.svg" :name "Rectangle" :value "rectangle"}
   {:icon "/assets/circle.svg" :name "Circle" :value "circle"}
   {:icon "/assets/triangle.svg" :name "Triangle" :value "triangle"}
   {:icon "/assets/line.svg" :name "Line" :value "line"}
   {:icon "/assets/image.svg" :name "Image" :value "image"}
   {:icon "/assets/freeform.svg" :name "Free Drawing" :value "freeform"}])

;; Define navElements as a vector of maps
(def nav-elements
  [{:icon "/assets/select.svg" :name "Select" :value "select"}
   {:icon "/assets/rectangle.svg" :name "Rectangle" :value shape-elements}
   {:icon "/assets/text.svg" :name "Text" :value "text"}
   {:icon "/assets/delete.svg" :name "Delete" :value "delete"}
   {:icon "/assets/reset.svg" :name "Reset" :value "reset"}
   {:icon "/assets/comments.svg" :name "Comments" :value "comments"}])

;; Define defaultNavElement as a map
(def default-nav-element
  {:icon "/assets/select.svg" :name "Select" :value "select"})

;; Define directionOptions as a vector of maps
(def direction-options
  [{:label "Bring to Front" :value "front" :icon "/assets/front.svg"}
   {:label "Send to Back" :value "back" :icon "/assets/back.svg"}])

;; Define fontFamilyOptions as a vector of maps
(def font-family-options
  [{:value "Helvetica" :label "Helvetica"}
   {:value "Times New Roman" :label "Times New Roman"}
   {:value "Comic Sans MS" :label "Comic Sans MS"}
   {:value "Brush Script MT" :label "Brush Script MT"}])

;; Define fontSizeOptions as a vector of maps
(def font-size-options
  (map (fn [size] {:value (str size) :label (str size)}) (range 10 37)))

;; Define fontWeightOptions as a vector of maps
(def font-weight-options
  [{:value "400" :label "Normal"}
   {:value "500" :label "Semibold"}
   {:value "600" :label "Bold"}])

;; Define alignmentOptions as a vector of maps
(def alignment-options
  [{:value "left" :label "Align Left" :icon "/assets/align-left.svg"}
   {:value "horizontalCenter" :label "Align Horizontal Center" :icon "/assets/align-horizontal-center.svg"}
   {:value "right" :label "Align Right" :icon "/assets/align-right.svg"}
   {:value "top" :label "Align Top" :icon "/assets/align-top.svg"}
   {:value "verticalCenter" :label "Align Vertical Center" :icon "/assets/align-vertical-center.svg"}
   {:value "bottom" :label "Align Bottom" :icon "/assets/align-bottom.svg"}])

;; Define shortcuts as a vector of maps
(def shortcuts
  [{:key "1" :name "Chat" :shortcut "/"}
   {:key "2" :name "Undo" :shortcut "⌘ + Z"}
   {:key "3" :name "Redo" :shortcut "⌘ + Y"}
   {:key "4" :name "Reactions" :shortcut "E"}])
