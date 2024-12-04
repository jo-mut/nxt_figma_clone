(ns liveblocks.core
  (:require
   [react.core :as r]
   ["@liveblocks/react/suspense" :as lvb]))


(defn room-provider [props children]
  [(.-RoomProvider lvb) (clj->js props) children])

(defn liveblocks-provider [props children]
  [(.-LiveblocksProvider lvb) (clj->js props) children])

(defn client-side-suspense [props children]
  [(.-ClientSideSuspense lvb) (clj->js props) children])


(defn use-others []
   (.-useOthers lvb))

(defn use-my-presence []
  (let [hook-result (.useMyPresence lvb)]
    (js/console.log "use my presence :" hook-result)
    (println "use my presence " hook-result)
    hook-result))