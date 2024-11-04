(ns app.lib.utils
  (:require ["tailwind-merge" :as tw-merge]
            ["clsx" :as clsx]
            ["jsPDF" :as jsPDF]))

(def adjectives
  ["Happy"
   "Creative"
   "Energetic"
   "Lively"
   "Dynamic"
   "Radiant"
   "Joyful"
   "Vibrant"
   "Cheerful"
   "Sunny"
   "Sparkling"
   "Bright"
   "Shining"])

(def animals
  ["Dolphin"
   "Tiger"
   "Elephant"
   "Penguin"
   "Kangaroo"
   "Panther"
   "Lion"
   "Cheetah"
   "Giraffe"
   "Hippopotamus"
   "Monkey"
   "Panda"
   "Crocodile"])

(defn cn [& inputs]
  (tw-merge (clsx inputs)))

(defn generate-random-name
  []
  (let [random-adjective (nth adjectives (rand-nth (range (count adjectives))))
        random-animal (nth animals (rand-nth (range (count animals))))]
    (str random-adjective " " random-animal)))

(defn get-shape-info [shape-type]
  (case shape-type
    "rect"     {:icon "/assets/rectangle.svg"
                :name "Rectangle"}
    "circle"   {:icon "/assets/circle.svg"
                :name "Circle"}
    "triangle" {:icon "/assets/triangle.svg"
                :name "Triangle"}
    "line"     {:icon "/assets/line.svg"
                :name "Line"}
    "i-text"   {:icon "/assets/text.svg"
                :name "Text"}
    "image"    {:icon "/assets/image.svg"
                :name "Image"}
    "freeform" {:icon "/assets/freeform.svg"
                :name "Free Drawing"}
    {:icon "/assets/rectangle.svg"
     :name shape-type})) ;; Default case


(defn export-to-pdf 
  []
  (let [canvas (.querySelector js/document "canvas")] 
    (when canvas                               
      (let [doc (jsPDF.               
                 (clj->js {:orientation "landscape"
                           :unit "px"
                           :format [(.-width canvas) (.-height canvas)]}))
            data (.toDataURL canvas)]         
        (.addImage doc data "PNG" 0 0 (.-width canvas) (.-height canvas)) 
        (.save doc "canvas.pdf")))))    