(ns app.components.cursors.cursor
  (:require 
   [app.components.cursors.cursor-svg :as cursors]))

(defn cursor
  [{:keys [x y color message]}]
  [:div {:className "point-events-none absolute top-0 left-0"
         :style {:transform (str "translate(" x "px, " y "px)")}}
   [cursors/cursor-svg {:color color}]])