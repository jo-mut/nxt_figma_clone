(ns app.components.cursors.live-cursors
  (:require
   [app.components.cursors.cursor :as cursor]
   [app.constants.index :as colors]))

(defn live-cursors
  [others]
  (map (fn [{:keys [connectionId presence]}]
         (when presence
           (let [color-count (count colors/colors)
                 random-color (take (mod connectionId color-count) colors/colors)]
             [cursor/cursor {:connection-id connectionId
                             :color         random-color
                             :x             (-> presence .-cursor .-x)
                             :y             (-> presence .-cursor .-y)
                             :message       (-> presence .-message)}])))
       others))