goog.provide('app.components.live');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$liveblocks$react$dist$suspense=shadow.js.require("module$node_modules$$liveblocks$react$dist$suspense", {});
app.components.live.cursor_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"",new cljs.core.Keyword(null,"previous-message","previous-message",-622297400),"",new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null));
app.components.live.pointer_move = (function app$components$live$pointer_move(update_my_presence){
return module$node_modules$react$index.useCallback((function (e){
var rect = e.currentTarget.getBoundingClientRect();
var x = (e.clientX - rect.x);
var y = (e.clientY - rect.y);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.components.live.cursor_state,cljs.core.update,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(app.lib.types.cursor_mode));
}));

var G__14211 = ({"cursor": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)});
return (update_my_presence.cljs$core$IFn$_invoke$arity$1 ? update_my_presence.cljs$core$IFn$_invoke$arity$1(G__14211) : update_my_presence.call(null, G__14211));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [update_my_presence], null));
});
app.components.live.pointer_leave = (function app$components$live$pointer_leave(update_my_presence){
return module$node_modules$react$index.useCallback((function (e){
e.preventDefault();

var G__14212 = ({"cursor": null, "message": null});
return (update_my_presence.cljs$core$IFn$_invoke$arity$1 ? update_my_presence.cljs$core$IFn$_invoke$arity$1(G__14212) : update_my_presence.call(null, G__14212));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [update_my_presence], null));
});
app.components.live.pointer_down = (function app$components$live$pointer_down(update_my_presence){
return module$node_modules$react$index.useCallback((function (e){
var rect = e.currentTarget.getBoundingClientRect();
var x = (e.clientX - rect.x);
var y = (e.clientY - rect.y);
var G__14213 = ({"cursor": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)});
return (update_my_presence.cljs$core$IFn$_invoke$arity$1 ? update_my_presence.cljs$core$IFn$_invoke$arity$1(G__14213) : update_my_presence.call(null, G__14213));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [update_my_presence], null));
});
app.components.live.view = (function app$components$live$view(){
var others = module$node_modules$$liveblocks$react$dist$suspense.useOthers();
var vec__14214 = module$node_modules$$liveblocks$react$dist$suspense.useMyPresence();
var my_presence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14214,(0),null);
var update_my_presence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14214,(1),null);
var presence = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(my_presence,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var handlePointerMove = app.components.live.pointer_move(update_my_presence);
var handlePointerLeave = app.components.live.pointer_leave(update_my_presence);
var handlePointerDown = app.components.live.pointer_down(update_my_presence);
var cursor = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(presence,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null));
module$node_modules$react$index.useEffect((function (){
var on_key_up = (function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"/")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.components.live.cursor_state,cljs.core.update,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"previous-message","previous-message",-622297400),null),new cljs.core.Keyword(null,"message","message",-406056002),""),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"chat","chat",-518268339));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Escape")){
return (function (){
var G__14217_14218 = ({"message": ""});
(update_my_presence.cljs$core$IFn$_invoke$arity$1 ? update_my_presence.cljs$core$IFn$_invoke$arity$1(G__14217_14218) : update_my_presence.call(null, G__14217_14218));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.components.live.cursor_state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"hidden","hidden",-312506092));
});
} else {
return null;
}
}
});
var on_key_down = (function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"/")){
return event.preventDefault();
} else {
return null;
}
});
window.addEventListener("keyup",on_key_up);

window.addEventListener("keydown",on_key_down);

return (function (){
window.removeEventListener("keyup",on_key_up);

return window.removeEventListener("keydown",on_key_down);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [update_my_presence], null));

return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),handlePointerMove,new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380),handlePointerLeave,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),handlePointerDown,new cljs.core.Keyword(null,"className","className",-1983287057),"h-[100vh] w-full flex justify-center items-center \n                                        text-center border border-2 border-cyan-500"], null),(cljs.core.truth_(cursor)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.cursors.cursor_chat.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),app.components.live.cursor_state,new cljs.core.Keyword(null,"update-my-presence","update-my-presence",898181752),update_my_presence], null)], null):null),console.log("others lives ******",others),((cljs.core.seq(others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.cursors.live_cursors.live_cursors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"others","others",2084874583),others], null)], null):null)], null));
});

//# sourceMappingURL=app.components.live.js.map
