(ns app.components.cursors.live-cursors
  (:require
   [app.components.cursors.cursor :as cursor]
   [app.constants.index :as colors]))

(defn live-cursors
  [props]
  (fn [{:keys [others]}]
    (js/console.log "others ******"  others)
    (into []
          (map (fn [{:keys [connectionId presence] :as item}]
                 (when presence
                   (js/console.log "presence ******"  presence)
                   (js/console.log "connectionId ******"  connectionId)
                   (let [color-count (count colors/colors)
                         random-color (take (mod connectionId color-count) colors/colors)
                         {:keys [cursor message]} presence]
                     [cursor/cursor {:key           connectionId
                                     :color         random-color
                                     :x             (:x cursor)
                                     :y             (:y cursor)
                                     :message       message}])))
               (js->clj others :keywordize-keys true)))))


;; (defn live-cursors
;;   [props]
;;   (fn [{:keys [others]}]
;;     (js/console.log "others ******"  others)
;;     (reduce (fn [acc {:keys [connectionId presence]}]
;;               (when presence
;;                 (js/console.log "presence ******"  presence)
;;                 (js/console.log "connectionId ******"  connectionId))
;;               (if (some? (:cursor presence))
;;                 (let [color-count (count colors/colors)
;;                       random-color (take (mod connectionId color-count) colors/colors)]
;;                   (conj acc [cursor/cursor {:key           connectionId
;;                                             :color         random-color
;;                                             :x             (-> presence .-cursor .-x)
;;                                             :y             (-> presence .-cursor .-y)
;;                                             :message       (-> presence .-message)}]))
;;                 acc))
;;             []
;;             others)))