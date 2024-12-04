(ns react.core
  (:require
   ["react" :as react]))


(defn use-effect [handler deps]
  (react/useEffect handler deps))

(defn use-callback [callback deps]
  (let [state (atom {:callback callback
                     :deps deps
                     :memoized-fn (callback)})]
    (fn [new-deps]
      (if (not= (:deps @state) new-deps)
        (do 
          (swap! state assoc :deps new-deps)
          (swap! state assoc :memoized-fn (callback)))
        (:memoized-fn @state)))))