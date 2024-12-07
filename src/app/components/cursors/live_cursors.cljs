(ns app.components.cursors.live-cursors
  (:require
   [app.components.cursors.cursor :as cursor]
   [app.constants.index :as colors]))

(defn live-cursors
  [props]
  (fn [{:keys [others]}]
    (into [:<>]
          (map (fn [item]
                 (let [connectionId (get-in item [:connectionId])
                       presence (get-in item [:presence])]
                   (when presence
                     (let [color-count (count colors/colors)
                           random-color (take (mod connectionId color-count) colors/colors)
                           cursor  (get-in presence [:cursor])
                           message (get-in presence [:message])]
                       [cursor/cursor {:color         random-color
                                       :x             (:x cursor)
                                       :y             (:y cursor)
                                       :message       message}]))))
               others))))