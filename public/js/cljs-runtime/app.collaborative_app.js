goog.provide('app.collaborative_app');
var module$node_modules$$liveblocks$react$dist$index=shadow.js.require("module$node_modules$$liveblocks$react$dist$index", {});
app.collaborative_app.collaborative_app = (function app$collaborative_app$collaborative_app(){
var others = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$$liveblocks$react$dist$index.useOthers(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var user_count = others.length;
console.log(["others ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(others)].join(''));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["There are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_count)," other users online"].join('')], null);
});

//# sourceMappingURL=app.collaborative_app.js.map
