goog.provide('app.components.live');
var module$node_modules$$liveblocks$react$dist$suspense=shadow.js.require("module$node_modules$$liveblocks$react$dist$suspense", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
app.components.live.cursor_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),cljs.core.PersistentArrayMap.EMPTY], null));
app.components.live.pointer_move = (function app$components$live$pointer_move(update_my_presence){
return module$node_modules$react$index.useCallback((function (e){
var rect = e.currentTarget.getBoundingClientRect();
var x = (e.clientX - rect.x);
var y = (e.clientY - rect.y);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.components.live.cursor_state,cljs.core.update,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"chat","chat",-518268339));
}));

var G__12466 = ({"cursor": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)});
return (update_my_presence.cljs$core$IFn$_invoke$arity$1 ? update_my_presence.cljs$core$IFn$_invoke$arity$1(G__12466) : update_my_presence.call(null, G__12466));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [update_my_presence], null));
});
app.components.live.pointer_leave = (function app$components$live$pointer_leave(update_my_presence){
return module$node_modules$react$index.useCallback((function (e){
e.preventDefault();

var G__12467 = ({"cursor": cljs.core.PersistentArrayMap.EMPTY, "message": cljs.core.PersistentArrayMap.EMPTY});
return (update_my_presence.cljs$core$IFn$_invoke$arity$1 ? update_my_presence.cljs$core$IFn$_invoke$arity$1(G__12467) : update_my_presence.call(null, G__12467));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [update_my_presence], null));
});
app.components.live.pointer_down = (function app$components$live$pointer_down(update_my_presence){
return module$node_modules$react$index.useCallback((function (e){
var rect = e.currentTarget.getBoundingClientRect();
var x = (e.clientX - rect.x);
var y = (e.clientY - rect.y);
var G__12468 = ({"cursor": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)});
return (update_my_presence.cljs$core$IFn$_invoke$arity$1 ? update_my_presence.cljs$core$IFn$_invoke$arity$1(G__12468) : update_my_presence.call(null, G__12468));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [update_my_presence], null));
});
app.components.live.view = (function app$components$live$view(){
var others = module$node_modules$$liveblocks$react$dist$suspense.useOthers();
var vec__12469 = module$node_modules$$liveblocks$react$dist$suspense.useMyPresence();
var my_presence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12469,(0),null);
var update_my_presence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12469,(1),null);
var presence = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(my_presence,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var handlePointerMove = app.components.live.pointer_move(update_my_presence);
var handlePointerLeave = app.components.live.pointer_leave(update_my_presence);
var handlePointerDown = app.components.live.pointer_down(update_my_presence);
var cursor = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(presence,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null));
module$node_modules$react$index.useEffect((function (){
var on_key_up = (function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"/")){
return console.log(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.components.live.cursor_state,cljs.core.update,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"previous-message","previous-message",-622297400),null),new cljs.core.Keyword(null,"message","message",-406056002),""),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"chat","chat",-518268339));
})),"cursor mode: ",cljs.core.deref(app.components.live.cursor_state));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Escape")){
return (function (){
var G__12472_12473 = ({"message": ""});
(update_my_presence.cljs$core$IFn$_invoke$arity$1 ? update_my_presence.cljs$core$IFn$_invoke$arity$1(G__12472_12473) : update_my_presence.call(null, G__12472_12473));

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

return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),handlePointerMove,new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380),handlePointerLeave,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),handlePointerDown,new cljs.core.Keyword(null,"className","className",-1983287057),"h-[100vh] w-full flex justify-center items-center \n                                        text-center border border-2 border-cyan-500"], null),(cljs.core.truth_(cursor)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.cursors.cursor_chat.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),app.components.live.cursor_state,new cljs.core.Keyword(null,"update-my-presence","update-my-presence",898181752),update_my_presence], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.cursors.live_cursors.live_cursors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"others","others",2084874583),others], null)], null)], null));
});

//# sourceMappingURL=app.components.live.js.map
