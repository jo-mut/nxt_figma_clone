goog.provide('app.components.cursors.live_cursors');
app.components.cursors.live_cursors.live_cursors = (function app$components$cursors$live_cursors$live_cursors(others){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11922){
var map__11923 = p__11922;
var map__11923__$1 = cljs.core.__destructure_map(map__11923);
var connectionId = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11923__$1,new cljs.core.Keyword(null,"connectionId","connectionId",-1424742717));
var presence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11923__$1,new cljs.core.Keyword(null,"presence","presence",-1580756953));
if(cljs.core.truth_(presence)){
var color_count = cljs.core.count(app.constants.index.colors);
var random_color = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(connectionId,color_count),app.constants.index.colors);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.cursors.cursor.cursor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"connection-id","connection-id",1500693463),connectionId,new cljs.core.Keyword(null,"color","color",1011675173),random_color,new cljs.core.Keyword(null,"x","x",2099068185),presence.cursor.x,new cljs.core.Keyword(null,"y","y",-1757859776),presence.cursor.y,new cljs.core.Keyword(null,"message","message",-406056002),presence.message], null)], null);
} else {
return null;
}
}),others);
});

//# sourceMappingURL=app.components.cursors.live_cursors.js.map
