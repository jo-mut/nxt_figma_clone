goog.provide('app.components.cursors.cursor_chat');
app.components.cursors.cursor_chat.handle_change = (function app$components$cursors$cursor_chat$handle_change(event,update_my_presence,cursor_state){
var message = event.target.value;
var message__$1 = message;
var G__12393_12401 = ({"message": message__$1});
(update_my_presence.cljs$core$IFn$_invoke$arity$1 ? update_my_presence.cljs$core$IFn$_invoke$arity$1(G__12393_12401) : update_my_presence.call(null, G__12393_12401));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor_state,cljs.core.update,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"message","message",-406056002),message__$1),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"chat","chat",-518268339));
}));
});
app.components.cursors.cursor_chat.handle_key_down = (function app$components$cursors$cursor_chat$handle_key_down(event,cursor_state){
var message = event.target.value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Enter")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor_state,cljs.core.update,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"previous-message","previous-message",-622297400),message),new cljs.core.Keyword(null,"message","message",-406056002),""),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"hidden","hidden",-312506092));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Escape")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor_state,cljs.core.update,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"hidden","hidden",-312506092));
}));
} else {
return null;
}
}
});
app.components.cursors.cursor_chat.view = (function app$components$cursors$cursor_chat$view(){
return (function (p__12397){
var map__12398 = p__12397;
var map__12398__$1 = cljs.core.__destructure_map(map__12398);
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12398__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var cursor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12398__$1,new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671));
var update_my_presence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12398__$1,new cljs.core.Keyword(null,"update-my-presence","update-my-presence",898181752));
var map__12399 = cursor;
var map__12399__$1 = cljs.core.__destructure_map(map__12399);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12399__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12399__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var input_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var map__12400 = new cljs.core.Keyword(null,"cursor-state","cursor-state",1586993671).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor_state));
var map__12400__$1 = cljs.core.__destructure_map(map__12400);
var previous_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,new cljs.core.Keyword(null,"previous-message","previous-message",-622297400));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,new cljs.core.Keyword(null,"message","message",-406056002));
reagent.core.after_render((function (){
if(cljs.core.truth_(cljs.core.deref(input_ref))){
return cljs.core.deref(input_ref).focus();
} else {
return null;
}
}));

return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"absolute top-0 left-0",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px) translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join('')], null)], null),console.log("cursor mode changed: ",mode),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"chat","chat",-518268339)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.cursors.cursor_svg.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm \n                                     leading-relaxed text-white rounded-[20px]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-white"], null),previous_message], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"className","className",-1983287057),"z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__12394_SHARP_){
return cljs.core.reset_BANG_(input_ref,p1__12394_SHARP_);
}),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__12395_SHARP_){
return app.components.cursors.cursor_chat.handle_key_down(p1__12395_SHARP_,cursor_state);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12396_SHARP_){
return app.components.cursors.cursor_chat.handle_change(p1__12396_SHARP_,update_my_presence,cursor_state);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),""
], null)], null)], null)], null):null)], null));
});
});

//# sourceMappingURL=app.components.cursors.cursor_chat.js.map
