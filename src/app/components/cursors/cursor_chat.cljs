(ns app.components.cursors.cursor-chat
  (:require
   [reagent.core :as r]
   ["react" :as react]
   [app.lib.types :as custom]
   [app.components.cursors.cursor-svg :as cursor-svg]))

(defn handle-change
  [event update-my-presence cursor-state]
  (let [message (-> event .-target .-value)
        message message
        mode    (:Chat custom/cursor-mode)]
    (update-my-presence #js {:message message})
    (swap! cursor-state update :cursor-state
           (fn [state]
             (-> state
                 (assoc  :message message)
                 (assoc  :mode    mode))))))

(defn handle-key-down
  [event update-my-presence cursor-state]
  (let [message (-> event .-target .-value)
        mode    (:Hidden custom/cursor-mode)]
    (cond
      (= (-> event .-key) "Enter")
      (swap! cursor-state update :cursor-state
             (fn [state]
               (-> state
                   (assoc  :previous-message message)
                   (assoc  :message          "")
                   (assoc  :mode             mode))))

      (= (-> event .-key) "Escape")
      (swap! cursor-state update :cursor-state
             (fn [state]
               (-> state
                   (assoc  :mode    mode)))))))

(defn view
  []
  (fn [{:keys [cursor cursor-state update-my-presence]}]
    (let [{:keys [x y]} cursor
          input-ref (r/atom nil)
          {:keys [previous-message mode message]} (:cursor-state @cursor-state)]
      (r/after-render
       (fn []
         (when @input-ref
           (.focus @input-ref))))
      (r/as-element
       [:div {:className "absolute top-0 left-0"
              :style {:transform (str "translateX(" x "px) translateY(" y "px)")}}
        [cursor-svg/view {:color "#000"}]
        [:div {:className "absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm 
                          leading-relaxed text-white rounded-[20px]"}
         [:p {:className "text-white"} previous-message]
         [:input {:className "z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none"
                  :ref         #(reset! input-ref %)
                  :message     message
                  :on-key-down #(handle-key-down % update-my-presence cursor-state)
                  :on-change   #(handle-change % update-my-presence cursor-state)
                  :placeholder (if "previous-message"
                                 ""
                                 "Type a message...")}]]]))))