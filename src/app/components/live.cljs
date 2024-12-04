(ns app.components.live
  (:require
   [app.components.cursors.live-cursors :as cursors]
   [app.components.cursors.cursor-chat :as cursor-chat]
   [app.lib.types :as custom]
   [reagent.core :as r]
   ["react" :as react]
   ["@liveblocks/react/suspense" :refer [useOthers, useMyPresence]]))

(def cursor-state (atom {:cursor-state {:message          ""
                                        :previous-message ""
                                        :mode             :hidden}}))

(defn pointer-move
  [update-my-presence]
  (react/useCallback
   (fn [e]
     (let [rect (.getBoundingClientRect (.-currentTarget e))
           x (- (.-clientX e) (.-x rect))
           y (- (.-clientY e) (.-y rect))]
       (swap! cursor-state update :cursor-state
              (fn [state] (assoc state :mode (:hidden custom/cursor-mode))))
       (update-my-presence #js {:cursor {:x x :y y}})))
   [update-my-presence]))

(defn pointer-leave
  [update-my-presence]
  (react/useCallback
   (fn [e]
     (.preventDefault e)
     (update-my-presence #js {:cursor nil
                              :message nil}))
   [update-my-presence]))

(defn pointer-down
  [update-my-presence]
  (react/useCallback
   (fn [e]
     (let [rect (.getBoundingClientRect (.-currentTarget e))
           x (- (.-clientX e) (.-x rect))
           y (- (.-clientY e) (.-y rect))]
       (update-my-presence #js {:cursor {:x x :y y}})))
   [update-my-presence]))



(defn view []
  (let [others (useOthers)
        [my-presence update-my-presence] (useMyPresence)
        presence (js->clj my-presence :keywordize-keys true)
        handlePointerMove (pointer-move update-my-presence)
        handlePointerLeave (pointer-leave update-my-presence)
        handlePointerDown (pointer-down update-my-presence)
        cursor (get-in presence [:cursor])]

    (react/useEffect
     (fn []
       (let [on-key-up (fn [event]
                         (cond
                           (= (.-key event) "/")
                           (swap! cursor-state update :cursor-state
                                  (fn [state]
                                    (-> state
                                        (assoc  :previous-message nil)
                                        (assoc  :message          "")
                                        (assoc  :mode             :chat))))
                           (= (.-key event) "Escape")
                           (fn []
                             (update-my-presence #js {:message ""})
                             (swap! cursor-state :mode :hidden))))
             on-key-down (fn [event]
                           (when (= (-> event .-key) "/")
                             (-> event .preventDefault)))]

         (.addEventListener js/window "keyup" on-key-up)
         (.addEventListener js/window "keydown" on-key-down)


         (fn []
           (.removeEventListener js/window "keyup" on-key-up)
           (.removeEventListener js/window "keydown" on-key-down))))

     [update-my-presence])

    (r/as-element
     [:div {:on-pointer-move handlePointerMove
            :on-pointer-leave handlePointerLeave
            :on-pointer-down handlePointerDown
            :className "h-[100vh] w-full flex justify-center items-center 
                                        text-center border border-2 border-cyan-500"}
      (when cursor
        [cursor-chat/view
         {:cursor cursor
          :cursor-state cursor-state
          :update-my-presence update-my-presence}])
      (js/console.log "others lives ******"  others)
      (when (seq others)
        [cursors/live-cursors  {:others others}])])))