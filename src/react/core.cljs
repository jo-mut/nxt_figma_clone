(ns react.core
  (:require
   ["react" :as react]))


(defn use-effect [handler deps]
  (react/useEffect handler deps))