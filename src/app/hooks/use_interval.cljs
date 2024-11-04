(ns app.hooks.use-interval
  (:require [react.core :as react]))

(defn use-interval [callback delay]
  (let [saved-callback (atom callback)]
    (react/use-effect
     (fn []
       (reset! saved-callback callback))
     [callback])

    (react/use-effect
     (fn []
       (let [tick ((@saved-callback))
             id (when (not (nil delay))
                  (js/setIterval tick delay))]
         (fn []
           (when id
             (js/clearInterval id)))))
     [delay])))