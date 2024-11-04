(ns app.room
  (:require
   [reagent.core :as r]
   [liveblocks.core :as liveblocks]
   ["@liveblocks/react/suspense" :refer [LiveblocksProvider RoomProvider ClientSideSuspense]]
   [app.components.cursors.live-cursors :as cursors]
   ["./UseOthersWrapper" :default UseOthersWrapper])) ; Ensure this path is correct


(defn room [children]
  [:> LiveblocksProvider {:publicApiKey "pk_dev_jORJVAI9FQNAkU96zmrJQwbfTrHzp8RqFycLzIYFj7MvARjS7R_7uEJZn5GF9h46"}
   [:> RoomProvider {:id "my-room"}
    [:> ClientSideSuspense {:fallback (r/as-element [:div "Loading…"])}
     children]]])

