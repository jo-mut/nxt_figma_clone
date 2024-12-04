;; src/app/core.cljs
(ns app.core
  (:require
   [reagent.dom :as rdom]
   [app.room :as room]
   [app.components.live :as live]))


(defn app []
  [room/room
   [:div
    [:> live/view]]])

(defn ^:export init []
  (rdom/render [app] (.getElementById js/document "app")))
