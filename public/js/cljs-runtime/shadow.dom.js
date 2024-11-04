goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_14988 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_14988(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_14995 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_14995(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13398 = coll;
var G__13399 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13398,G__13399) : shadow.dom.lazy_native_coll_seq.call(null, G__13398,G__13399));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13444 = arguments.length;
switch (G__13444) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13447 = arguments.length;
switch (G__13447) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13456 = arguments.length;
switch (G__13456) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13461 = arguments.length;
switch (G__13461) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13470 = arguments.length;
switch (G__13470) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13494 = arguments.length;
switch (G__13494) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e13508){if((e13508 instanceof Object)){
var e = e13508;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13508;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13515 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13516 = null;
var count__13517 = (0);
var i__13518 = (0);
while(true){
if((i__13518 < count__13517)){
var el = chunk__13516.cljs$core$IIndexed$_nth$arity$2(null, i__13518);
var handler_15057__$1 = ((function (seq__13515,chunk__13516,count__13517,i__13518,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__13515,chunk__13516,count__13517,i__13518,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15057__$1);


var G__15058 = seq__13515;
var G__15059 = chunk__13516;
var G__15060 = count__13517;
var G__15061 = (i__13518 + (1));
seq__13515 = G__15058;
chunk__13516 = G__15059;
count__13517 = G__15060;
i__13518 = G__15061;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13515);
if(temp__5804__auto__){
var seq__13515__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13515__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13515__$1);
var G__15063 = cljs.core.chunk_rest(seq__13515__$1);
var G__15064 = c__5525__auto__;
var G__15065 = cljs.core.count(c__5525__auto__);
var G__15066 = (0);
seq__13515 = G__15063;
chunk__13516 = G__15064;
count__13517 = G__15065;
i__13518 = G__15066;
continue;
} else {
var el = cljs.core.first(seq__13515__$1);
var handler_15067__$1 = ((function (seq__13515,chunk__13516,count__13517,i__13518,el,seq__13515__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__13515,chunk__13516,count__13517,i__13518,el,seq__13515__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15067__$1);


var G__15068 = cljs.core.next(seq__13515__$1);
var G__15069 = null;
var G__15070 = (0);
var G__15071 = (0);
seq__13515 = G__15068;
chunk__13516 = G__15069;
count__13517 = G__15070;
i__13518 = G__15071;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13530 = arguments.length;
switch (G__13530) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13559 = cljs.core.seq(events);
var chunk__13560 = null;
var count__13561 = (0);
var i__13562 = (0);
while(true){
if((i__13562 < count__13561)){
var vec__13581 = chunk__13560.cljs$core$IIndexed$_nth$arity$2(null, i__13562);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13581,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15080 = seq__13559;
var G__15081 = chunk__13560;
var G__15082 = count__13561;
var G__15083 = (i__13562 + (1));
seq__13559 = G__15080;
chunk__13560 = G__15081;
count__13561 = G__15082;
i__13562 = G__15083;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13559);
if(temp__5804__auto__){
var seq__13559__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13559__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13559__$1);
var G__15084 = cljs.core.chunk_rest(seq__13559__$1);
var G__15085 = c__5525__auto__;
var G__15086 = cljs.core.count(c__5525__auto__);
var G__15087 = (0);
seq__13559 = G__15084;
chunk__13560 = G__15085;
count__13561 = G__15086;
i__13562 = G__15087;
continue;
} else {
var vec__13588 = cljs.core.first(seq__13559__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13588,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15090 = cljs.core.next(seq__13559__$1);
var G__15091 = null;
var G__15092 = (0);
var G__15093 = (0);
seq__13559 = G__15090;
chunk__13560 = G__15091;
count__13561 = G__15092;
i__13562 = G__15093;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13596 = cljs.core.seq(styles);
var chunk__13597 = null;
var count__13598 = (0);
var i__13599 = (0);
while(true){
if((i__13599 < count__13598)){
var vec__13671 = chunk__13597.cljs$core$IIndexed$_nth$arity$2(null, i__13599);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13671,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13671,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15095 = seq__13596;
var G__15096 = chunk__13597;
var G__15097 = count__13598;
var G__15098 = (i__13599 + (1));
seq__13596 = G__15095;
chunk__13597 = G__15096;
count__13598 = G__15097;
i__13599 = G__15098;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13596);
if(temp__5804__auto__){
var seq__13596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13596__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13596__$1);
var G__15099 = cljs.core.chunk_rest(seq__13596__$1);
var G__15100 = c__5525__auto__;
var G__15101 = cljs.core.count(c__5525__auto__);
var G__15102 = (0);
seq__13596 = G__15099;
chunk__13597 = G__15100;
count__13598 = G__15101;
i__13599 = G__15102;
continue;
} else {
var vec__13677 = cljs.core.first(seq__13596__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13677,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13677,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15105 = cljs.core.next(seq__13596__$1);
var G__15106 = null;
var G__15107 = (0);
var G__15108 = (0);
seq__13596 = G__15105;
chunk__13597 = G__15106;
count__13598 = G__15107;
i__13599 = G__15108;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__13689_15110 = key;
var G__13689_15111__$1 = (((G__13689_15110 instanceof cljs.core.Keyword))?G__13689_15110.fqn:null);
switch (G__13689_15111__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15118 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15118,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15118,"aria-");
}
})())){
el.setAttribute(ks_15118,value);
} else {
(el[ks_15118] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13733){
var map__13734 = p__13733;
var map__13734__$1 = cljs.core.__destructure_map(map__13734);
var props = map__13734__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13734__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13737 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13737,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13737,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13737,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13741 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13741,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13741;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13749 = arguments.length;
switch (G__13749) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13751){
var vec__13752 = p__13751;
var seq__13753 = cljs.core.seq(vec__13752);
var first__13754 = cljs.core.first(seq__13753);
var seq__13753__$1 = cljs.core.next(seq__13753);
var nn = first__13754;
var first__13754__$1 = cljs.core.first(seq__13753__$1);
var seq__13753__$2 = cljs.core.next(seq__13753__$1);
var np = first__13754__$1;
var nc = seq__13753__$2;
var node = vec__13752;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13758 = nn;
var G__13759 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13758,G__13759) : create_fn.call(null, G__13758,G__13759));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13762 = nn;
var G__13763 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13762,G__13763) : create_fn.call(null, G__13762,G__13763));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13771 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771,(1),null);
var seq__13779_15166 = cljs.core.seq(node_children);
var chunk__13780_15167 = null;
var count__13781_15168 = (0);
var i__13782_15169 = (0);
while(true){
if((i__13782_15169 < count__13781_15168)){
var child_struct_15170 = chunk__13780_15167.cljs$core$IIndexed$_nth$arity$2(null, i__13782_15169);
var children_15171 = shadow.dom.dom_node(child_struct_15170);
if(cljs.core.seq_QMARK_(children_15171)){
var seq__13840_15172 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15171));
var chunk__13842_15173 = null;
var count__13843_15174 = (0);
var i__13844_15175 = (0);
while(true){
if((i__13844_15175 < count__13843_15174)){
var child_15177 = chunk__13842_15173.cljs$core$IIndexed$_nth$arity$2(null, i__13844_15175);
if(cljs.core.truth_(child_15177)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15177);


var G__15180 = seq__13840_15172;
var G__15181 = chunk__13842_15173;
var G__15182 = count__13843_15174;
var G__15183 = (i__13844_15175 + (1));
seq__13840_15172 = G__15180;
chunk__13842_15173 = G__15181;
count__13843_15174 = G__15182;
i__13844_15175 = G__15183;
continue;
} else {
var G__15184 = seq__13840_15172;
var G__15185 = chunk__13842_15173;
var G__15186 = count__13843_15174;
var G__15187 = (i__13844_15175 + (1));
seq__13840_15172 = G__15184;
chunk__13842_15173 = G__15185;
count__13843_15174 = G__15186;
i__13844_15175 = G__15187;
continue;
}
} else {
var temp__5804__auto___15189 = cljs.core.seq(seq__13840_15172);
if(temp__5804__auto___15189){
var seq__13840_15190__$1 = temp__5804__auto___15189;
if(cljs.core.chunked_seq_QMARK_(seq__13840_15190__$1)){
var c__5525__auto___15191 = cljs.core.chunk_first(seq__13840_15190__$1);
var G__15192 = cljs.core.chunk_rest(seq__13840_15190__$1);
var G__15193 = c__5525__auto___15191;
var G__15194 = cljs.core.count(c__5525__auto___15191);
var G__15195 = (0);
seq__13840_15172 = G__15192;
chunk__13842_15173 = G__15193;
count__13843_15174 = G__15194;
i__13844_15175 = G__15195;
continue;
} else {
var child_15196 = cljs.core.first(seq__13840_15190__$1);
if(cljs.core.truth_(child_15196)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15196);


var G__15198 = cljs.core.next(seq__13840_15190__$1);
var G__15199 = null;
var G__15200 = (0);
var G__15201 = (0);
seq__13840_15172 = G__15198;
chunk__13842_15173 = G__15199;
count__13843_15174 = G__15200;
i__13844_15175 = G__15201;
continue;
} else {
var G__15202 = cljs.core.next(seq__13840_15190__$1);
var G__15203 = null;
var G__15204 = (0);
var G__15205 = (0);
seq__13840_15172 = G__15202;
chunk__13842_15173 = G__15203;
count__13843_15174 = G__15204;
i__13844_15175 = G__15205;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15171);
}


var G__15209 = seq__13779_15166;
var G__15210 = chunk__13780_15167;
var G__15212 = count__13781_15168;
var G__15213 = (i__13782_15169 + (1));
seq__13779_15166 = G__15209;
chunk__13780_15167 = G__15210;
count__13781_15168 = G__15212;
i__13782_15169 = G__15213;
continue;
} else {
var temp__5804__auto___15215 = cljs.core.seq(seq__13779_15166);
if(temp__5804__auto___15215){
var seq__13779_15216__$1 = temp__5804__auto___15215;
if(cljs.core.chunked_seq_QMARK_(seq__13779_15216__$1)){
var c__5525__auto___15218 = cljs.core.chunk_first(seq__13779_15216__$1);
var G__15219 = cljs.core.chunk_rest(seq__13779_15216__$1);
var G__15221 = c__5525__auto___15218;
var G__15222 = cljs.core.count(c__5525__auto___15218);
var G__15223 = (0);
seq__13779_15166 = G__15219;
chunk__13780_15167 = G__15221;
count__13781_15168 = G__15222;
i__13782_15169 = G__15223;
continue;
} else {
var child_struct_15225 = cljs.core.first(seq__13779_15216__$1);
var children_15226 = shadow.dom.dom_node(child_struct_15225);
if(cljs.core.seq_QMARK_(children_15226)){
var seq__13873_15227 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15226));
var chunk__13875_15228 = null;
var count__13876_15229 = (0);
var i__13877_15230 = (0);
while(true){
if((i__13877_15230 < count__13876_15229)){
var child_15232 = chunk__13875_15228.cljs$core$IIndexed$_nth$arity$2(null, i__13877_15230);
if(cljs.core.truth_(child_15232)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15232);


var G__15234 = seq__13873_15227;
var G__15235 = chunk__13875_15228;
var G__15236 = count__13876_15229;
var G__15237 = (i__13877_15230 + (1));
seq__13873_15227 = G__15234;
chunk__13875_15228 = G__15235;
count__13876_15229 = G__15236;
i__13877_15230 = G__15237;
continue;
} else {
var G__15239 = seq__13873_15227;
var G__15240 = chunk__13875_15228;
var G__15241 = count__13876_15229;
var G__15242 = (i__13877_15230 + (1));
seq__13873_15227 = G__15239;
chunk__13875_15228 = G__15240;
count__13876_15229 = G__15241;
i__13877_15230 = G__15242;
continue;
}
} else {
var temp__5804__auto___15243__$1 = cljs.core.seq(seq__13873_15227);
if(temp__5804__auto___15243__$1){
var seq__13873_15245__$1 = temp__5804__auto___15243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13873_15245__$1)){
var c__5525__auto___15247 = cljs.core.chunk_first(seq__13873_15245__$1);
var G__15248 = cljs.core.chunk_rest(seq__13873_15245__$1);
var G__15249 = c__5525__auto___15247;
var G__15250 = cljs.core.count(c__5525__auto___15247);
var G__15251 = (0);
seq__13873_15227 = G__15248;
chunk__13875_15228 = G__15249;
count__13876_15229 = G__15250;
i__13877_15230 = G__15251;
continue;
} else {
var child_15253 = cljs.core.first(seq__13873_15245__$1);
if(cljs.core.truth_(child_15253)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15253);


var G__15254 = cljs.core.next(seq__13873_15245__$1);
var G__15255 = null;
var G__15256 = (0);
var G__15257 = (0);
seq__13873_15227 = G__15254;
chunk__13875_15228 = G__15255;
count__13876_15229 = G__15256;
i__13877_15230 = G__15257;
continue;
} else {
var G__15258 = cljs.core.next(seq__13873_15245__$1);
var G__15259 = null;
var G__15260 = (0);
var G__15261 = (0);
seq__13873_15227 = G__15258;
chunk__13875_15228 = G__15259;
count__13876_15229 = G__15260;
i__13877_15230 = G__15261;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15226);
}


var G__15265 = cljs.core.next(seq__13779_15216__$1);
var G__15266 = null;
var G__15267 = (0);
var G__15268 = (0);
seq__13779_15166 = G__15265;
chunk__13780_15167 = G__15266;
count__13781_15168 = G__15267;
i__13782_15169 = G__15268;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__13927 = cljs.core.seq(node);
var chunk__13928 = null;
var count__13929 = (0);
var i__13930 = (0);
while(true){
if((i__13930 < count__13929)){
var n = chunk__13928.cljs$core$IIndexed$_nth$arity$2(null, i__13930);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__15287 = seq__13927;
var G__15288 = chunk__13928;
var G__15289 = count__13929;
var G__15290 = (i__13930 + (1));
seq__13927 = G__15287;
chunk__13928 = G__15288;
count__13929 = G__15289;
i__13930 = G__15290;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13927);
if(temp__5804__auto__){
var seq__13927__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13927__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13927__$1);
var G__15297 = cljs.core.chunk_rest(seq__13927__$1);
var G__15298 = c__5525__auto__;
var G__15299 = cljs.core.count(c__5525__auto__);
var G__15300 = (0);
seq__13927 = G__15297;
chunk__13928 = G__15298;
count__13929 = G__15299;
i__13930 = G__15300;
continue;
} else {
var n = cljs.core.first(seq__13927__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__15302 = cljs.core.next(seq__13927__$1);
var G__15303 = null;
var G__15304 = (0);
var G__15305 = (0);
seq__13927 = G__15302;
chunk__13928 = G__15303;
count__13929 = G__15304;
i__13930 = G__15305;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__13983 = arguments.length;
switch (G__13983) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__13998 = arguments.length;
switch (G__13998) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14028 = arguments.length;
switch (G__14028) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15372 = arguments.length;
var i__5727__auto___15374 = (0);
while(true){
if((i__5727__auto___15374 < len__5726__auto___15372)){
args__5732__auto__.push((arguments[i__5727__auto___15374]));

var G__15377 = (i__5727__auto___15374 + (1));
i__5727__auto___15374 = G__15377;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14052_15383 = cljs.core.seq(nodes);
var chunk__14053_15384 = null;
var count__14054_15385 = (0);
var i__14055_15386 = (0);
while(true){
if((i__14055_15386 < count__14054_15385)){
var node_15389 = chunk__14053_15384.cljs$core$IIndexed$_nth$arity$2(null, i__14055_15386);
fragment.appendChild(shadow.dom._to_dom(node_15389));


var G__15391 = seq__14052_15383;
var G__15392 = chunk__14053_15384;
var G__15393 = count__14054_15385;
var G__15394 = (i__14055_15386 + (1));
seq__14052_15383 = G__15391;
chunk__14053_15384 = G__15392;
count__14054_15385 = G__15393;
i__14055_15386 = G__15394;
continue;
} else {
var temp__5804__auto___15396 = cljs.core.seq(seq__14052_15383);
if(temp__5804__auto___15396){
var seq__14052_15398__$1 = temp__5804__auto___15396;
if(cljs.core.chunked_seq_QMARK_(seq__14052_15398__$1)){
var c__5525__auto___15399 = cljs.core.chunk_first(seq__14052_15398__$1);
var G__15402 = cljs.core.chunk_rest(seq__14052_15398__$1);
var G__15403 = c__5525__auto___15399;
var G__15404 = cljs.core.count(c__5525__auto___15399);
var G__15405 = (0);
seq__14052_15383 = G__15402;
chunk__14053_15384 = G__15403;
count__14054_15385 = G__15404;
i__14055_15386 = G__15405;
continue;
} else {
var node_15408 = cljs.core.first(seq__14052_15398__$1);
fragment.appendChild(shadow.dom._to_dom(node_15408));


var G__15411 = cljs.core.next(seq__14052_15398__$1);
var G__15412 = null;
var G__15413 = (0);
var G__15414 = (0);
seq__14052_15383 = G__15411;
chunk__14053_15384 = G__15412;
count__14054_15385 = G__15413;
i__14055_15386 = G__15414;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14049){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14049));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14086_15421 = cljs.core.seq(scripts);
var chunk__14087_15422 = null;
var count__14088_15423 = (0);
var i__14089_15424 = (0);
while(true){
if((i__14089_15424 < count__14088_15423)){
var vec__14102_15425 = chunk__14087_15422.cljs$core$IIndexed$_nth$arity$2(null, i__14089_15424);
var script_tag_15426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102_15425,(0),null);
var script_body_15427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102_15425,(1),null);
eval(script_body_15427);


var G__15428 = seq__14086_15421;
var G__15429 = chunk__14087_15422;
var G__15430 = count__14088_15423;
var G__15431 = (i__14089_15424 + (1));
seq__14086_15421 = G__15428;
chunk__14087_15422 = G__15429;
count__14088_15423 = G__15430;
i__14089_15424 = G__15431;
continue;
} else {
var temp__5804__auto___15432 = cljs.core.seq(seq__14086_15421);
if(temp__5804__auto___15432){
var seq__14086_15434__$1 = temp__5804__auto___15432;
if(cljs.core.chunked_seq_QMARK_(seq__14086_15434__$1)){
var c__5525__auto___15436 = cljs.core.chunk_first(seq__14086_15434__$1);
var G__15437 = cljs.core.chunk_rest(seq__14086_15434__$1);
var G__15438 = c__5525__auto___15436;
var G__15439 = cljs.core.count(c__5525__auto___15436);
var G__15440 = (0);
seq__14086_15421 = G__15437;
chunk__14087_15422 = G__15438;
count__14088_15423 = G__15439;
i__14089_15424 = G__15440;
continue;
} else {
var vec__14108_15442 = cljs.core.first(seq__14086_15434__$1);
var script_tag_15443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14108_15442,(0),null);
var script_body_15444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14108_15442,(1),null);
eval(script_body_15444);


var G__15448 = cljs.core.next(seq__14086_15434__$1);
var G__15449 = null;
var G__15450 = (0);
var G__15451 = (0);
seq__14086_15421 = G__15448;
chunk__14087_15422 = G__15449;
count__14088_15423 = G__15450;
i__14089_15424 = G__15451;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14113){
var vec__14114 = p__14113;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14114,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14114,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14156 = arguments.length;
switch (G__14156) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14205 = cljs.core.seq(style_keys);
var chunk__14206 = null;
var count__14207 = (0);
var i__14208 = (0);
while(true){
if((i__14208 < count__14207)){
var it = chunk__14206.cljs$core$IIndexed$_nth$arity$2(null, i__14208);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15489 = seq__14205;
var G__15490 = chunk__14206;
var G__15491 = count__14207;
var G__15492 = (i__14208 + (1));
seq__14205 = G__15489;
chunk__14206 = G__15490;
count__14207 = G__15491;
i__14208 = G__15492;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14205);
if(temp__5804__auto__){
var seq__14205__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14205__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14205__$1);
var G__15495 = cljs.core.chunk_rest(seq__14205__$1);
var G__15496 = c__5525__auto__;
var G__15497 = cljs.core.count(c__5525__auto__);
var G__15498 = (0);
seq__14205 = G__15495;
chunk__14206 = G__15496;
count__14207 = G__15497;
i__14208 = G__15498;
continue;
} else {
var it = cljs.core.first(seq__14205__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15499 = cljs.core.next(seq__14205__$1);
var G__15500 = null;
var G__15501 = (0);
var G__15502 = (0);
seq__14205 = G__15499;
chunk__14206 = G__15500;
count__14207 = G__15501;
i__14208 = G__15502;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14217,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14249 = k14217;
var G__14249__$1 = (((G__14249 instanceof cljs.core.Keyword))?G__14249.fqn:null);
switch (G__14249__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14217,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14259){
var vec__14264 = p__14259;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14264,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14264,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14216){
var self__ = this;
var G__14216__$1 = this;
return (new cljs.core.RecordIter((0),G__14216__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14218,other14219){
var self__ = this;
var this14218__$1 = this;
return (((!((other14219 == null)))) && ((((this14218__$1.constructor === other14219.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14218__$1.x,other14219.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14218__$1.y,other14219.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14218__$1.__extmap,other14219.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14217){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14362 = k14217;
var G__14362__$1 = (((G__14362 instanceof cljs.core.Keyword))?G__14362.fqn:null);
switch (G__14362__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14217);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14216){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14363 = cljs.core.keyword_identical_QMARK_;
var expr__14364 = k__5309__auto__;
if(cljs.core.truth_((pred__14363.cljs$core$IFn$_invoke$arity$2 ? pred__14363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14364) : pred__14363.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__14364)))){
return (new shadow.dom.Coordinate(G__14216,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14363.cljs$core$IFn$_invoke$arity$2 ? pred__14363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14364) : pred__14363.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__14364)))){
return (new shadow.dom.Coordinate(self__.x,G__14216,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14216),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14216){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14216,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14229){
var extmap__5342__auto__ = (function (){var G__14392 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14229,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14229)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14392);
} else {
return G__14392;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14229),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14229),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14422,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14431 = k14422;
var G__14431__$1 = (((G__14431 instanceof cljs.core.Keyword))?G__14431.fqn:null);
switch (G__14431__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14422,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14437){
var vec__14440 = p__14437;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14440,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14440,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14421){
var self__ = this;
var G__14421__$1 = this;
return (new cljs.core.RecordIter((0),G__14421__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14423,other14424){
var self__ = this;
var this14423__$1 = this;
return (((!((other14424 == null)))) && ((((this14423__$1.constructor === other14424.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14423__$1.w,other14424.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14423__$1.h,other14424.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14423__$1.__extmap,other14424.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14422){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14495 = k14422;
var G__14495__$1 = (((G__14495 instanceof cljs.core.Keyword))?G__14495.fqn:null);
switch (G__14495__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14422);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14421){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14496 = cljs.core.keyword_identical_QMARK_;
var expr__14497 = k__5309__auto__;
if(cljs.core.truth_((pred__14496.cljs$core$IFn$_invoke$arity$2 ? pred__14496.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14497) : pred__14496.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__14497)))){
return (new shadow.dom.Size(G__14421,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14496.cljs$core$IFn$_invoke$arity$2 ? pred__14496.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14497) : pred__14496.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__14497)))){
return (new shadow.dom.Size(self__.w,G__14421,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14421),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14421){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14421,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14425){
var extmap__5342__auto__ = (function (){var G__14504 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14425,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14425)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14504);
} else {
return G__14504;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14425),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14425),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__15772 = (i + (1));
var G__15773 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15772;
ret = G__15773;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14587){
var vec__14588 = p__14587;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14588,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14602 = arguments.length;
switch (G__14602) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15814 = ps;
var G__15815 = (i + (1));
el__$1 = G__15814;
i = G__15815;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__14648 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14648,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14648,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14648,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14658_15828 = cljs.core.seq(props);
var chunk__14659_15829 = null;
var count__14660_15830 = (0);
var i__14661_15831 = (0);
while(true){
if((i__14661_15831 < count__14660_15830)){
var vec__14719_15833 = chunk__14659_15829.cljs$core$IIndexed$_nth$arity$2(null, i__14661_15831);
var k_15834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14719_15833,(0),null);
var v_15835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14719_15833,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15834);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15834),v_15835);


var G__15841 = seq__14658_15828;
var G__15842 = chunk__14659_15829;
var G__15843 = count__14660_15830;
var G__15844 = (i__14661_15831 + (1));
seq__14658_15828 = G__15841;
chunk__14659_15829 = G__15842;
count__14660_15830 = G__15843;
i__14661_15831 = G__15844;
continue;
} else {
var temp__5804__auto___15845 = cljs.core.seq(seq__14658_15828);
if(temp__5804__auto___15845){
var seq__14658_15847__$1 = temp__5804__auto___15845;
if(cljs.core.chunked_seq_QMARK_(seq__14658_15847__$1)){
var c__5525__auto___15848 = cljs.core.chunk_first(seq__14658_15847__$1);
var G__15849 = cljs.core.chunk_rest(seq__14658_15847__$1);
var G__15850 = c__5525__auto___15848;
var G__15851 = cljs.core.count(c__5525__auto___15848);
var G__15852 = (0);
seq__14658_15828 = G__15849;
chunk__14659_15829 = G__15850;
count__14660_15830 = G__15851;
i__14661_15831 = G__15852;
continue;
} else {
var vec__14735_15854 = cljs.core.first(seq__14658_15847__$1);
var k_15855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735_15854,(0),null);
var v_15856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735_15854,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15855);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15855),v_15856);


var G__15860 = cljs.core.next(seq__14658_15847__$1);
var G__15861 = null;
var G__15862 = (0);
var G__15863 = (0);
seq__14658_15828 = G__15860;
chunk__14659_15829 = G__15861;
count__14660_15830 = G__15862;
i__14661_15831 = G__15863;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__14777 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14777,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14777,(1),null);
var seq__14781_15872 = cljs.core.seq(node_children);
var chunk__14783_15873 = null;
var count__14784_15874 = (0);
var i__14785_15875 = (0);
while(true){
if((i__14785_15875 < count__14784_15874)){
var child_struct_15876 = chunk__14783_15873.cljs$core$IIndexed$_nth$arity$2(null, i__14785_15875);
if((!((child_struct_15876 == null)))){
if(typeof child_struct_15876 === 'string'){
var text_15879 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15879),child_struct_15876].join(''));
} else {
var children_15880 = shadow.dom.svg_node(child_struct_15876);
if(cljs.core.seq_QMARK_(children_15880)){
var seq__14874_15881 = cljs.core.seq(children_15880);
var chunk__14876_15882 = null;
var count__14877_15883 = (0);
var i__14878_15884 = (0);
while(true){
if((i__14878_15884 < count__14877_15883)){
var child_15888 = chunk__14876_15882.cljs$core$IIndexed$_nth$arity$2(null, i__14878_15884);
if(cljs.core.truth_(child_15888)){
node.appendChild(child_15888);


var G__15890 = seq__14874_15881;
var G__15891 = chunk__14876_15882;
var G__15892 = count__14877_15883;
var G__15893 = (i__14878_15884 + (1));
seq__14874_15881 = G__15890;
chunk__14876_15882 = G__15891;
count__14877_15883 = G__15892;
i__14878_15884 = G__15893;
continue;
} else {
var G__15894 = seq__14874_15881;
var G__15895 = chunk__14876_15882;
var G__15896 = count__14877_15883;
var G__15897 = (i__14878_15884 + (1));
seq__14874_15881 = G__15894;
chunk__14876_15882 = G__15895;
count__14877_15883 = G__15896;
i__14878_15884 = G__15897;
continue;
}
} else {
var temp__5804__auto___15899 = cljs.core.seq(seq__14874_15881);
if(temp__5804__auto___15899){
var seq__14874_15902__$1 = temp__5804__auto___15899;
if(cljs.core.chunked_seq_QMARK_(seq__14874_15902__$1)){
var c__5525__auto___15904 = cljs.core.chunk_first(seq__14874_15902__$1);
var G__15906 = cljs.core.chunk_rest(seq__14874_15902__$1);
var G__15907 = c__5525__auto___15904;
var G__15908 = cljs.core.count(c__5525__auto___15904);
var G__15909 = (0);
seq__14874_15881 = G__15906;
chunk__14876_15882 = G__15907;
count__14877_15883 = G__15908;
i__14878_15884 = G__15909;
continue;
} else {
var child_15911 = cljs.core.first(seq__14874_15902__$1);
if(cljs.core.truth_(child_15911)){
node.appendChild(child_15911);


var G__15915 = cljs.core.next(seq__14874_15902__$1);
var G__15916 = null;
var G__15917 = (0);
var G__15918 = (0);
seq__14874_15881 = G__15915;
chunk__14876_15882 = G__15916;
count__14877_15883 = G__15917;
i__14878_15884 = G__15918;
continue;
} else {
var G__15920 = cljs.core.next(seq__14874_15902__$1);
var G__15921 = null;
var G__15922 = (0);
var G__15923 = (0);
seq__14874_15881 = G__15920;
chunk__14876_15882 = G__15921;
count__14877_15883 = G__15922;
i__14878_15884 = G__15923;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15880);
}
}


var G__15928 = seq__14781_15872;
var G__15929 = chunk__14783_15873;
var G__15930 = count__14784_15874;
var G__15931 = (i__14785_15875 + (1));
seq__14781_15872 = G__15928;
chunk__14783_15873 = G__15929;
count__14784_15874 = G__15930;
i__14785_15875 = G__15931;
continue;
} else {
var G__15934 = seq__14781_15872;
var G__15935 = chunk__14783_15873;
var G__15936 = count__14784_15874;
var G__15937 = (i__14785_15875 + (1));
seq__14781_15872 = G__15934;
chunk__14783_15873 = G__15935;
count__14784_15874 = G__15936;
i__14785_15875 = G__15937;
continue;
}
} else {
var temp__5804__auto___15938 = cljs.core.seq(seq__14781_15872);
if(temp__5804__auto___15938){
var seq__14781_15940__$1 = temp__5804__auto___15938;
if(cljs.core.chunked_seq_QMARK_(seq__14781_15940__$1)){
var c__5525__auto___15941 = cljs.core.chunk_first(seq__14781_15940__$1);
var G__15942 = cljs.core.chunk_rest(seq__14781_15940__$1);
var G__15943 = c__5525__auto___15941;
var G__15944 = cljs.core.count(c__5525__auto___15941);
var G__15945 = (0);
seq__14781_15872 = G__15942;
chunk__14783_15873 = G__15943;
count__14784_15874 = G__15944;
i__14785_15875 = G__15945;
continue;
} else {
var child_struct_15947 = cljs.core.first(seq__14781_15940__$1);
if((!((child_struct_15947 == null)))){
if(typeof child_struct_15947 === 'string'){
var text_15949 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15949),child_struct_15947].join(''));
} else {
var children_15960 = shadow.dom.svg_node(child_struct_15947);
if(cljs.core.seq_QMARK_(children_15960)){
var seq__14891_15961 = cljs.core.seq(children_15960);
var chunk__14893_15962 = null;
var count__14894_15963 = (0);
var i__14895_15964 = (0);
while(true){
if((i__14895_15964 < count__14894_15963)){
var child_15968 = chunk__14893_15962.cljs$core$IIndexed$_nth$arity$2(null, i__14895_15964);
if(cljs.core.truth_(child_15968)){
node.appendChild(child_15968);


var G__15976 = seq__14891_15961;
var G__15977 = chunk__14893_15962;
var G__15978 = count__14894_15963;
var G__15979 = (i__14895_15964 + (1));
seq__14891_15961 = G__15976;
chunk__14893_15962 = G__15977;
count__14894_15963 = G__15978;
i__14895_15964 = G__15979;
continue;
} else {
var G__15982 = seq__14891_15961;
var G__15983 = chunk__14893_15962;
var G__15984 = count__14894_15963;
var G__15985 = (i__14895_15964 + (1));
seq__14891_15961 = G__15982;
chunk__14893_15962 = G__15983;
count__14894_15963 = G__15984;
i__14895_15964 = G__15985;
continue;
}
} else {
var temp__5804__auto___15988__$1 = cljs.core.seq(seq__14891_15961);
if(temp__5804__auto___15988__$1){
var seq__14891_15989__$1 = temp__5804__auto___15988__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14891_15989__$1)){
var c__5525__auto___15992 = cljs.core.chunk_first(seq__14891_15989__$1);
var G__15993 = cljs.core.chunk_rest(seq__14891_15989__$1);
var G__15994 = c__5525__auto___15992;
var G__15995 = cljs.core.count(c__5525__auto___15992);
var G__15996 = (0);
seq__14891_15961 = G__15993;
chunk__14893_15962 = G__15994;
count__14894_15963 = G__15995;
i__14895_15964 = G__15996;
continue;
} else {
var child_16000 = cljs.core.first(seq__14891_15989__$1);
if(cljs.core.truth_(child_16000)){
node.appendChild(child_16000);


var G__16005 = cljs.core.next(seq__14891_15989__$1);
var G__16006 = null;
var G__16007 = (0);
var G__16008 = (0);
seq__14891_15961 = G__16005;
chunk__14893_15962 = G__16006;
count__14894_15963 = G__16007;
i__14895_15964 = G__16008;
continue;
} else {
var G__16010 = cljs.core.next(seq__14891_15989__$1);
var G__16011 = null;
var G__16012 = (0);
var G__16013 = (0);
seq__14891_15961 = G__16010;
chunk__14893_15962 = G__16011;
count__14894_15963 = G__16012;
i__14895_15964 = G__16013;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15960);
}
}


var G__16014 = cljs.core.next(seq__14781_15940__$1);
var G__16015 = null;
var G__16016 = (0);
var G__16017 = (0);
seq__14781_15872 = G__16014;
chunk__14783_15873 = G__16015;
count__14784_15874 = G__16016;
i__14785_15875 = G__16017;
continue;
} else {
var G__16018 = cljs.core.next(seq__14781_15940__$1);
var G__16019 = null;
var G__16020 = (0);
var G__16021 = (0);
seq__14781_15872 = G__16018;
chunk__14783_15873 = G__16019;
count__14784_15874 = G__16020;
i__14785_15875 = G__16021;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16045 = arguments.length;
var i__5727__auto___16046 = (0);
while(true){
if((i__5727__auto___16046 < len__5726__auto___16045)){
args__5732__auto__.push((arguments[i__5727__auto___16046]));

var G__16048 = (i__5727__auto___16046 + (1));
i__5727__auto___16046 = G__16048;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq14958){
var G__14959 = cljs.core.first(seq14958);
var seq14958__$1 = cljs.core.next(seq14958);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14959,seq14958__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
