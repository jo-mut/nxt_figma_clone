goog.provide('app.components.cursors.live_cursors');
app.components.cursors.live_cursors.live_cursors = (function app$components$cursors$live_cursors$live_cursors(props){
return (function (p__12132){
var map__12133 = p__12132;
var map__12133__$1 = cljs.core.__destructure_map(map__12133);
var others = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12133__$1,new cljs.core.Keyword(null,"others","others",2084874583));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
var connectionId = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connectionId","connectionId",-1424742717)], null));
var presence = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953)], null));
if(cljs.core.truth_(presence)){
var color_count = cljs.core.count(app.constants.index.colors);
var random_color = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(connectionId,color_count),app.constants.index.colors);
var cursor = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(presence,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null));
var message = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(presence,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.cursors.cursor.cursor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),random_color,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null);
} else {
return null;
}
}),others));
});
});

//# sourceMappingURL=app.components.cursors.live_cursors.js.map
