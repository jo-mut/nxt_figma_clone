goog.provide('app.components.cursors.live_cursors');
app.components.cursors.live_cursors.live_cursors = (function app$components$cursors$live_cursors$live_cursors(props){
return (function (p__14206){
var map__14207 = p__14206;
var map__14207__$1 = cljs.core.__destructure_map(map__14207);
var others = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14207__$1,new cljs.core.Keyword(null,"others","others",2084874583));
console.log("others ******",others);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14208){
var map__14209 = p__14208;
var map__14209__$1 = cljs.core.__destructure_map(map__14209);
var item = map__14209__$1;
var connectionId = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14209__$1,new cljs.core.Keyword(null,"connectionId","connectionId",-1424742717));
var presence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14209__$1,new cljs.core.Keyword(null,"presence","presence",-1580756953));
if(cljs.core.truth_(presence)){
console.log("presence ******",presence);

console.log("connectionId ******",connectionId);

var color_count = cljs.core.count(app.constants.index.colors);
var random_color = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(connectionId,color_count),app.constants.index.colors);
var map__14210 = presence;
var map__14210__$1 = cljs.core.__destructure_map(map__14210);
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14210__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14210__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.cursors.cursor.cursor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),connectionId,new cljs.core.Keyword(null,"color","color",1011675173),random_color,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null);
} else {
return null;
}
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(others,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
});
});

//# sourceMappingURL=app.components.cursors.live_cursors.js.map
