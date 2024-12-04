(ns app.collaborative-app
  (:require [liveblocks.core :as liveblocks]
            [reagent.core :as r]
            ["react" :refer [createElement]]
            ["@liveblocks/react/suspense" :refer [useOthers]]))

(defn react-collaborative-app []
  (let [others (useOthers)]
    (createElement "p" nil (str "There are " (.-length others) " other users online"))))

(defn collaborative-app []
  [:> react-collaborative-app])