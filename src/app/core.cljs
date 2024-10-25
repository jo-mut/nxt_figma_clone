(ns app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defn app []
  (r/as-element
   [:div {:style {:background-color "blue"
                  :height "100vh"
                  :width "100%"}}
    [:ul {:class "list"}
     [:li {:class "list-item"} "Item 1"]
     [:li {:class "list-item"} "Item 2"]
     [:li {:class "list-item"} "Item 3"]]
    [:ul {:class "list"}
     [:li {:class "list-item"} "Item 1"]
     [:li {:class "list-item"} "Item 2"]
     [:li {:class "list-item"} "Item 3"]]
    [:ul {:class "list"}
     [:li {:class "list-item"} "Item 1"]
     [:li {:class "list-item"} "Item 2"]
     [:li {:class "list-item"} "Item 3"]]]))

(defn init []
  (rdom/render [app] (.getElementById js/document "app")))

;; Attach init function to window and log for confirmation
(set! (.-init js/window) init)
(js/console.log "window.init is set to:" js/window.init)