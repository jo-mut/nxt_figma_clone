(ns app.core
  (:require
   [reagent.dom :as rdom]
   [app.room :as room]
   [app.components.live :as live]))


(defn app []
  [room/room
   [:div {:className "h-[100vh] w-full flex justify-center items-center text-center"}
    [:h1 {:className "text-5xl text-white"} "Liveblock works"]
    [live/view]]])

;; Reagent render function for Next.js
(defn ^:export init []
  (rdom/render [app] (.getElementById js/document "app")))
