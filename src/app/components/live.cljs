(ns app.components.live
  (:require
   [app.components.cursors.live-cursors :as cursors]
   [reagent.core :as r]
   ["@liveblocks/react/suspense" :as lvb]
   ["../UseOthersWrapper" :default UseOthersWrapper]))


(defn view []
  [:> UseOthersWrapper
   (fn [others]
     (r/as-element [cursors/live-cursors {:others others}]))])