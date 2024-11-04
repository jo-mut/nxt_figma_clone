(ns liveblocks.core
  (:require
   ["@liveblocks/react/suspense" :as lvb]))


(defn room-provider [props children]
  [(.-RoomProvider lvb) (clj->js props) children])

(defn liveblocks-provider [props children]
  [(.-LiveblocksProvider lvb) (clj->js props) children])

(defn client-side-suspense [props children]
  [(.-ClientSideSuspense lvb) (clj->js props) children])


(defn use-others []
  (let [hook-result (.-useOthers lvb)]
    (js/console.log "live users :" hook-result)
    hook-result))
