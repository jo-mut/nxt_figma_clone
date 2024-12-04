(ns app.components.cursors.cursor
  (:require 
   [app.components.cursors.cursor-svg :as cursor-svg]))

(defn cursor
  [{:keys [x y color message]}]
  [:div {:className "point-events-none absolute top-0 left-0"
         :style {:transform (str "translateX(" x "px) translateY(" y "px)")}}
   [cursor-svg/view {:color color}
    [:div {:className "absolute left-2 top-5 rounded-3xl px-4 py-2"
           :style {:backgroundColor color}}
     [:p {:className "text-white whitespace-nowrap text-sm leading-relaxed"} message]]]])