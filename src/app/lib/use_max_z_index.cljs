(ns app.lib.use-max-z-index
  (:require
   ["react" :as react]
   ["@liveblocks/react/suspense" :refer [use-threads]]))

  ;; Returns the highest z-index of all threads
(defn use-max-z-index []
    ;; Get all threads
  (let [{:keys [threads]} (use-threads)]
      ;; Calculate the max z-index
    (react/useMemo
     (fn []
       (reduce (fn [max thread]
                 (let [z-index (:zIndex (:metadata thread))]
                   (if (> z-index max)
                     z-index
                     max)))
               0
               threads))
     [threads])))