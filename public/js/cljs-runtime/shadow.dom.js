goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12630 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_12630(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12632 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_12632(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11737 = coll;
var G__11738 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11737,G__11738) : shadow.dom.lazy_native_coll_seq.call(null, G__11737,G__11738));
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
var G__11778 = arguments.length;
switch (G__11778) {
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
var G__11784 = arguments.length;
switch (G__11784) {
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
var G__11788 = arguments.length;
switch (G__11788) {
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
var G__11798 = arguments.length;
switch (G__11798) {
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
var G__11810 = arguments.length;
switch (G__11810) {
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
var G__11826 = arguments.length;
switch (G__11826) {
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
}catch (e11836){if((e11836 instanceof Object)){
var e = e11836;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11836;

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
var seq__11845 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11846 = null;
var count__11847 = (0);
var i__11848 = (0);
while(true){
if((i__11848 < count__11847)){
var el = chunk__11846.cljs$core$IIndexed$_nth$arity$2(null, i__11848);
var handler_12661__$1 = ((function (seq__11845,chunk__11846,count__11847,i__11848,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11845,chunk__11846,count__11847,i__11848,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12661__$1);


var G__12663 = seq__11845;
var G__12664 = chunk__11846;
var G__12665 = count__11847;
var G__12666 = (i__11848 + (1));
seq__11845 = G__12663;
chunk__11846 = G__12664;
count__11847 = G__12665;
i__11848 = G__12666;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11845);
if(temp__5804__auto__){
var seq__11845__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11845__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11845__$1);
var G__12668 = cljs.core.chunk_rest(seq__11845__$1);
var G__12669 = c__5525__auto__;
var G__12670 = cljs.core.count(c__5525__auto__);
var G__12671 = (0);
seq__11845 = G__12668;
chunk__11846 = G__12669;
count__11847 = G__12670;
i__11848 = G__12671;
continue;
} else {
var el = cljs.core.first(seq__11845__$1);
var handler_12673__$1 = ((function (seq__11845,chunk__11846,count__11847,i__11848,el,seq__11845__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11845,chunk__11846,count__11847,i__11848,el,seq__11845__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12673__$1);


var G__12674 = cljs.core.next(seq__11845__$1);
var G__12675 = null;
var G__12676 = (0);
var G__12677 = (0);
seq__11845 = G__12674;
chunk__11846 = G__12675;
count__11847 = G__12676;
i__11848 = G__12677;
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
var G__11909 = arguments.length;
switch (G__11909) {
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
var seq__11942 = cljs.core.seq(events);
var chunk__11943 = null;
var count__11944 = (0);
var i__11945 = (0);
while(true){
if((i__11945 < count__11944)){
var vec__11960 = chunk__11943.cljs$core$IIndexed$_nth$arity$2(null, i__11945);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12687 = seq__11942;
var G__12688 = chunk__11943;
var G__12689 = count__11944;
var G__12690 = (i__11945 + (1));
seq__11942 = G__12687;
chunk__11943 = G__12688;
count__11944 = G__12689;
i__11945 = G__12690;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11942);
if(temp__5804__auto__){
var seq__11942__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11942__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11942__$1);
var G__12695 = cljs.core.chunk_rest(seq__11942__$1);
var G__12696 = c__5525__auto__;
var G__12697 = cljs.core.count(c__5525__auto__);
var G__12698 = (0);
seq__11942 = G__12695;
chunk__11943 = G__12696;
count__11944 = G__12697;
i__11945 = G__12698;
continue;
} else {
var vec__11965 = cljs.core.first(seq__11942__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12702 = cljs.core.next(seq__11942__$1);
var G__12703 = null;
var G__12704 = (0);
var G__12705 = (0);
seq__11942 = G__12702;
chunk__11943 = G__12703;
count__11944 = G__12704;
i__11945 = G__12705;
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
var seq__11968 = cljs.core.seq(styles);
var chunk__11969 = null;
var count__11970 = (0);
var i__11971 = (0);
while(true){
if((i__11971 < count__11970)){
var vec__11981 = chunk__11969.cljs$core$IIndexed$_nth$arity$2(null, i__11971);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11981,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12708 = seq__11968;
var G__12709 = chunk__11969;
var G__12710 = count__11970;
var G__12711 = (i__11971 + (1));
seq__11968 = G__12708;
chunk__11969 = G__12709;
count__11970 = G__12710;
i__11971 = G__12711;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11968);
if(temp__5804__auto__){
var seq__11968__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11968__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11968__$1);
var G__12712 = cljs.core.chunk_rest(seq__11968__$1);
var G__12713 = c__5525__auto__;
var G__12714 = cljs.core.count(c__5525__auto__);
var G__12715 = (0);
seq__11968 = G__12712;
chunk__11969 = G__12713;
count__11970 = G__12714;
i__11971 = G__12715;
continue;
} else {
var vec__11984 = cljs.core.first(seq__11968__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12716 = cljs.core.next(seq__11968__$1);
var G__12717 = null;
var G__12718 = (0);
var G__12719 = (0);
seq__11968 = G__12716;
chunk__11969 = G__12717;
count__11970 = G__12718;
i__11971 = G__12719;
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
var G__11993_12721 = key;
var G__11993_12722__$1 = (((G__11993_12721 instanceof cljs.core.Keyword))?G__11993_12721.fqn:null);
switch (G__11993_12722__$1) {
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
var ks_12728 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12728,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12728,"aria-");
}
})())){
el.setAttribute(ks_12728,value);
} else {
(el[ks_12728] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12016){
var map__12017 = p__12016;
var map__12017__$1 = cljs.core.__destructure_map(map__12017);
var props = map__12017__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12017__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12020 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12024 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12024,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12024;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12027 = arguments.length;
switch (G__12027) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12056){
var vec__12058 = p__12056;
var seq__12059 = cljs.core.seq(vec__12058);
var first__12060 = cljs.core.first(seq__12059);
var seq__12059__$1 = cljs.core.next(seq__12059);
var nn = first__12060;
var first__12060__$1 = cljs.core.first(seq__12059__$1);
var seq__12059__$2 = cljs.core.next(seq__12059__$1);
var np = first__12060__$1;
var nc = seq__12059__$2;
var node = vec__12058;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12063 = nn;
var G__12064 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12063,G__12064) : create_fn.call(null, G__12063,G__12064));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12065 = nn;
var G__12066 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12065,G__12066) : create_fn.call(null, G__12065,G__12066));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12068 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12068,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12068,(1),null);
var seq__12071_12743 = cljs.core.seq(node_children);
var chunk__12072_12744 = null;
var count__12073_12745 = (0);
var i__12074_12746 = (0);
while(true){
if((i__12074_12746 < count__12073_12745)){
var child_struct_12747 = chunk__12072_12744.cljs$core$IIndexed$_nth$arity$2(null, i__12074_12746);
var children_12748 = shadow.dom.dom_node(child_struct_12747);
if(cljs.core.seq_QMARK_(children_12748)){
var seq__12113_12750 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12748));
var chunk__12115_12751 = null;
var count__12116_12752 = (0);
var i__12117_12753 = (0);
while(true){
if((i__12117_12753 < count__12116_12752)){
var child_12758 = chunk__12115_12751.cljs$core$IIndexed$_nth$arity$2(null, i__12117_12753);
if(cljs.core.truth_(child_12758)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12758);


var G__12761 = seq__12113_12750;
var G__12762 = chunk__12115_12751;
var G__12763 = count__12116_12752;
var G__12764 = (i__12117_12753 + (1));
seq__12113_12750 = G__12761;
chunk__12115_12751 = G__12762;
count__12116_12752 = G__12763;
i__12117_12753 = G__12764;
continue;
} else {
var G__12766 = seq__12113_12750;
var G__12767 = chunk__12115_12751;
var G__12768 = count__12116_12752;
var G__12769 = (i__12117_12753 + (1));
seq__12113_12750 = G__12766;
chunk__12115_12751 = G__12767;
count__12116_12752 = G__12768;
i__12117_12753 = G__12769;
continue;
}
} else {
var temp__5804__auto___12770 = cljs.core.seq(seq__12113_12750);
if(temp__5804__auto___12770){
var seq__12113_12771__$1 = temp__5804__auto___12770;
if(cljs.core.chunked_seq_QMARK_(seq__12113_12771__$1)){
var c__5525__auto___12772 = cljs.core.chunk_first(seq__12113_12771__$1);
var G__12773 = cljs.core.chunk_rest(seq__12113_12771__$1);
var G__12774 = c__5525__auto___12772;
var G__12775 = cljs.core.count(c__5525__auto___12772);
var G__12776 = (0);
seq__12113_12750 = G__12773;
chunk__12115_12751 = G__12774;
count__12116_12752 = G__12775;
i__12117_12753 = G__12776;
continue;
} else {
var child_12777 = cljs.core.first(seq__12113_12771__$1);
if(cljs.core.truth_(child_12777)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12777);


var G__12778 = cljs.core.next(seq__12113_12771__$1);
var G__12779 = null;
var G__12780 = (0);
var G__12781 = (0);
seq__12113_12750 = G__12778;
chunk__12115_12751 = G__12779;
count__12116_12752 = G__12780;
i__12117_12753 = G__12781;
continue;
} else {
var G__12782 = cljs.core.next(seq__12113_12771__$1);
var G__12783 = null;
var G__12784 = (0);
var G__12785 = (0);
seq__12113_12750 = G__12782;
chunk__12115_12751 = G__12783;
count__12116_12752 = G__12784;
i__12117_12753 = G__12785;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12748);
}


var G__12786 = seq__12071_12743;
var G__12787 = chunk__12072_12744;
var G__12788 = count__12073_12745;
var G__12789 = (i__12074_12746 + (1));
seq__12071_12743 = G__12786;
chunk__12072_12744 = G__12787;
count__12073_12745 = G__12788;
i__12074_12746 = G__12789;
continue;
} else {
var temp__5804__auto___12790 = cljs.core.seq(seq__12071_12743);
if(temp__5804__auto___12790){
var seq__12071_12791__$1 = temp__5804__auto___12790;
if(cljs.core.chunked_seq_QMARK_(seq__12071_12791__$1)){
var c__5525__auto___12792 = cljs.core.chunk_first(seq__12071_12791__$1);
var G__12793 = cljs.core.chunk_rest(seq__12071_12791__$1);
var G__12794 = c__5525__auto___12792;
var G__12795 = cljs.core.count(c__5525__auto___12792);
var G__12796 = (0);
seq__12071_12743 = G__12793;
chunk__12072_12744 = G__12794;
count__12073_12745 = G__12795;
i__12074_12746 = G__12796;
continue;
} else {
var child_struct_12797 = cljs.core.first(seq__12071_12791__$1);
var children_12798 = shadow.dom.dom_node(child_struct_12797);
if(cljs.core.seq_QMARK_(children_12798)){
var seq__12120_12799 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12798));
var chunk__12122_12800 = null;
var count__12123_12801 = (0);
var i__12124_12802 = (0);
while(true){
if((i__12124_12802 < count__12123_12801)){
var child_12803 = chunk__12122_12800.cljs$core$IIndexed$_nth$arity$2(null, i__12124_12802);
if(cljs.core.truth_(child_12803)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12803);


var G__12805 = seq__12120_12799;
var G__12806 = chunk__12122_12800;
var G__12807 = count__12123_12801;
var G__12808 = (i__12124_12802 + (1));
seq__12120_12799 = G__12805;
chunk__12122_12800 = G__12806;
count__12123_12801 = G__12807;
i__12124_12802 = G__12808;
continue;
} else {
var G__12809 = seq__12120_12799;
var G__12810 = chunk__12122_12800;
var G__12811 = count__12123_12801;
var G__12812 = (i__12124_12802 + (1));
seq__12120_12799 = G__12809;
chunk__12122_12800 = G__12810;
count__12123_12801 = G__12811;
i__12124_12802 = G__12812;
continue;
}
} else {
var temp__5804__auto___12813__$1 = cljs.core.seq(seq__12120_12799);
if(temp__5804__auto___12813__$1){
var seq__12120_12814__$1 = temp__5804__auto___12813__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12120_12814__$1)){
var c__5525__auto___12815 = cljs.core.chunk_first(seq__12120_12814__$1);
var G__12817 = cljs.core.chunk_rest(seq__12120_12814__$1);
var G__12818 = c__5525__auto___12815;
var G__12819 = cljs.core.count(c__5525__auto___12815);
var G__12820 = (0);
seq__12120_12799 = G__12817;
chunk__12122_12800 = G__12818;
count__12123_12801 = G__12819;
i__12124_12802 = G__12820;
continue;
} else {
var child_12821 = cljs.core.first(seq__12120_12814__$1);
if(cljs.core.truth_(child_12821)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12821);


var G__12822 = cljs.core.next(seq__12120_12814__$1);
var G__12823 = null;
var G__12824 = (0);
var G__12825 = (0);
seq__12120_12799 = G__12822;
chunk__12122_12800 = G__12823;
count__12123_12801 = G__12824;
i__12124_12802 = G__12825;
continue;
} else {
var G__12826 = cljs.core.next(seq__12120_12814__$1);
var G__12827 = null;
var G__12828 = (0);
var G__12829 = (0);
seq__12120_12799 = G__12826;
chunk__12122_12800 = G__12827;
count__12123_12801 = G__12828;
i__12124_12802 = G__12829;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12798);
}


var G__12831 = cljs.core.next(seq__12071_12791__$1);
var G__12832 = null;
var G__12833 = (0);
var G__12834 = (0);
seq__12071_12743 = G__12831;
chunk__12072_12744 = G__12832;
count__12073_12745 = G__12833;
i__12074_12746 = G__12834;
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
var seq__12178 = cljs.core.seq(node);
var chunk__12179 = null;
var count__12180 = (0);
var i__12181 = (0);
while(true){
if((i__12181 < count__12180)){
var n = chunk__12179.cljs$core$IIndexed$_nth$arity$2(null, i__12181);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12839 = seq__12178;
var G__12840 = chunk__12179;
var G__12841 = count__12180;
var G__12842 = (i__12181 + (1));
seq__12178 = G__12839;
chunk__12179 = G__12840;
count__12180 = G__12841;
i__12181 = G__12842;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12178);
if(temp__5804__auto__){
var seq__12178__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12178__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12178__$1);
var G__12843 = cljs.core.chunk_rest(seq__12178__$1);
var G__12844 = c__5525__auto__;
var G__12845 = cljs.core.count(c__5525__auto__);
var G__12846 = (0);
seq__12178 = G__12843;
chunk__12179 = G__12844;
count__12180 = G__12845;
i__12181 = G__12846;
continue;
} else {
var n = cljs.core.first(seq__12178__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12847 = cljs.core.next(seq__12178__$1);
var G__12848 = null;
var G__12849 = (0);
var G__12850 = (0);
seq__12178 = G__12847;
chunk__12179 = G__12848;
count__12180 = G__12849;
i__12181 = G__12850;
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
var G__12201 = arguments.length;
switch (G__12201) {
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
var G__12211 = arguments.length;
switch (G__12211) {
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
var G__12227 = arguments.length;
switch (G__12227) {
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
var len__5726__auto___12856 = arguments.length;
var i__5727__auto___12857 = (0);
while(true){
if((i__5727__auto___12857 < len__5726__auto___12856)){
args__5732__auto__.push((arguments[i__5727__auto___12857]));

var G__12858 = (i__5727__auto___12857 + (1));
i__5727__auto___12857 = G__12858;
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
var seq__12267_12859 = cljs.core.seq(nodes);
var chunk__12268_12860 = null;
var count__12269_12861 = (0);
var i__12270_12862 = (0);
while(true){
if((i__12270_12862 < count__12269_12861)){
var node_12863 = chunk__12268_12860.cljs$core$IIndexed$_nth$arity$2(null, i__12270_12862);
fragment.appendChild(shadow.dom._to_dom(node_12863));


var G__12864 = seq__12267_12859;
var G__12865 = chunk__12268_12860;
var G__12866 = count__12269_12861;
var G__12867 = (i__12270_12862 + (1));
seq__12267_12859 = G__12864;
chunk__12268_12860 = G__12865;
count__12269_12861 = G__12866;
i__12270_12862 = G__12867;
continue;
} else {
var temp__5804__auto___12868 = cljs.core.seq(seq__12267_12859);
if(temp__5804__auto___12868){
var seq__12267_12869__$1 = temp__5804__auto___12868;
if(cljs.core.chunked_seq_QMARK_(seq__12267_12869__$1)){
var c__5525__auto___12870 = cljs.core.chunk_first(seq__12267_12869__$1);
var G__12871 = cljs.core.chunk_rest(seq__12267_12869__$1);
var G__12872 = c__5525__auto___12870;
var G__12873 = cljs.core.count(c__5525__auto___12870);
var G__12874 = (0);
seq__12267_12859 = G__12871;
chunk__12268_12860 = G__12872;
count__12269_12861 = G__12873;
i__12270_12862 = G__12874;
continue;
} else {
var node_12876 = cljs.core.first(seq__12267_12869__$1);
fragment.appendChild(shadow.dom._to_dom(node_12876));


var G__12877 = cljs.core.next(seq__12267_12869__$1);
var G__12878 = null;
var G__12879 = (0);
var G__12880 = (0);
seq__12267_12859 = G__12877;
chunk__12268_12860 = G__12878;
count__12269_12861 = G__12879;
i__12270_12862 = G__12880;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12261){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12261));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12275_12883 = cljs.core.seq(scripts);
var chunk__12276_12884 = null;
var count__12277_12885 = (0);
var i__12278_12886 = (0);
while(true){
if((i__12278_12886 < count__12277_12885)){
var vec__12285_12888 = chunk__12276_12884.cljs$core$IIndexed$_nth$arity$2(null, i__12278_12886);
var script_tag_12889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12285_12888,(0),null);
var script_body_12890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12285_12888,(1),null);
eval(script_body_12890);


var G__12892 = seq__12275_12883;
var G__12893 = chunk__12276_12884;
var G__12894 = count__12277_12885;
var G__12895 = (i__12278_12886 + (1));
seq__12275_12883 = G__12892;
chunk__12276_12884 = G__12893;
count__12277_12885 = G__12894;
i__12278_12886 = G__12895;
continue;
} else {
var temp__5804__auto___12896 = cljs.core.seq(seq__12275_12883);
if(temp__5804__auto___12896){
var seq__12275_12898__$1 = temp__5804__auto___12896;
if(cljs.core.chunked_seq_QMARK_(seq__12275_12898__$1)){
var c__5525__auto___12899 = cljs.core.chunk_first(seq__12275_12898__$1);
var G__12901 = cljs.core.chunk_rest(seq__12275_12898__$1);
var G__12902 = c__5525__auto___12899;
var G__12903 = cljs.core.count(c__5525__auto___12899);
var G__12904 = (0);
seq__12275_12883 = G__12901;
chunk__12276_12884 = G__12902;
count__12277_12885 = G__12903;
i__12278_12886 = G__12904;
continue;
} else {
var vec__12290_12905 = cljs.core.first(seq__12275_12898__$1);
var script_tag_12906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_12905,(0),null);
var script_body_12907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_12905,(1),null);
eval(script_body_12907);


var G__12909 = cljs.core.next(seq__12275_12898__$1);
var G__12910 = null;
var G__12911 = (0);
var G__12912 = (0);
seq__12275_12883 = G__12909;
chunk__12276_12884 = G__12910;
count__12277_12885 = G__12911;
i__12278_12886 = G__12912;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12294){
var vec__12295 = p__12294;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12295,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12295,(1),null);
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
var G__12311 = arguments.length;
switch (G__12311) {
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
var seq__12318 = cljs.core.seq(style_keys);
var chunk__12319 = null;
var count__12320 = (0);
var i__12321 = (0);
while(true){
if((i__12321 < count__12320)){
var it = chunk__12319.cljs$core$IIndexed$_nth$arity$2(null, i__12321);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12926 = seq__12318;
var G__12927 = chunk__12319;
var G__12928 = count__12320;
var G__12929 = (i__12321 + (1));
seq__12318 = G__12926;
chunk__12319 = G__12927;
count__12320 = G__12928;
i__12321 = G__12929;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12318);
if(temp__5804__auto__){
var seq__12318__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12318__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12318__$1);
var G__12931 = cljs.core.chunk_rest(seq__12318__$1);
var G__12932 = c__5525__auto__;
var G__12933 = cljs.core.count(c__5525__auto__);
var G__12934 = (0);
seq__12318 = G__12931;
chunk__12319 = G__12932;
count__12320 = G__12933;
i__12321 = G__12934;
continue;
} else {
var it = cljs.core.first(seq__12318__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12936 = cljs.core.next(seq__12318__$1);
var G__12937 = null;
var G__12938 = (0);
var G__12939 = (0);
seq__12318 = G__12936;
chunk__12319 = G__12937;
count__12320 = G__12938;
i__12321 = G__12939;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12328,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12348 = k12328;
var G__12348__$1 = (((G__12348 instanceof cljs.core.Keyword))?G__12348.fqn:null);
switch (G__12348__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12328,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12352){
var vec__12353 = p__12352;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12353,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12353,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12327){
var self__ = this;
var G__12327__$1 = this;
return (new cljs.core.RecordIter((0),G__12327__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12329,other12330){
var self__ = this;
var this12329__$1 = this;
return (((!((other12330 == null)))) && ((((this12329__$1.constructor === other12330.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12329__$1.x,other12330.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12329__$1.y,other12330.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12329__$1.__extmap,other12330.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12328){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12369 = k12328;
var G__12369__$1 = (((G__12369 instanceof cljs.core.Keyword))?G__12369.fqn:null);
switch (G__12369__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12328);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12327){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12370 = cljs.core.keyword_identical_QMARK_;
var expr__12371 = k__5309__auto__;
if(cljs.core.truth_((pred__12370.cljs$core$IFn$_invoke$arity$2 ? pred__12370.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12371) : pred__12370.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12371)))){
return (new shadow.dom.Coordinate(G__12327,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12370.cljs$core$IFn$_invoke$arity$2 ? pred__12370.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12371) : pred__12370.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12371)))){
return (new shadow.dom.Coordinate(self__.x,G__12327,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12327),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12327){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12327,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12335){
var extmap__5342__auto__ = (function (){var G__12381 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12335,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12335)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12381);
} else {
return G__12381;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12335),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12335),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12392,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12405 = k12392;
var G__12405__$1 = (((G__12405 instanceof cljs.core.Keyword))?G__12405.fqn:null);
switch (G__12405__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12392,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12415){
var vec__12416 = p__12415;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12416,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12416,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12391){
var self__ = this;
var G__12391__$1 = this;
return (new cljs.core.RecordIter((0),G__12391__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12393,other12394){
var self__ = this;
var this12393__$1 = this;
return (((!((other12394 == null)))) && ((((this12393__$1.constructor === other12394.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12393__$1.w,other12394.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12393__$1.h,other12394.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12393__$1.__extmap,other12394.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12392){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12438 = k12392;
var G__12438__$1 = (((G__12438 instanceof cljs.core.Keyword))?G__12438.fqn:null);
switch (G__12438__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12392);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12391){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12445 = cljs.core.keyword_identical_QMARK_;
var expr__12446 = k__5309__auto__;
if(cljs.core.truth_((pred__12445.cljs$core$IFn$_invoke$arity$2 ? pred__12445.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12446) : pred__12445.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12446)))){
return (new shadow.dom.Size(G__12391,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12445.cljs$core$IFn$_invoke$arity$2 ? pred__12445.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12446) : pred__12445.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12446)))){
return (new shadow.dom.Size(self__.w,G__12391,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12391),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12391){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12391,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12399){
var extmap__5342__auto__ = (function (){var G__12461 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12399,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12399)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12461);
} else {
return G__12461;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12399),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12399),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__13003 = (i + (1));
var G__13004 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13003;
ret = G__13004;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12490){
var vec__12491 = p__12490;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12506 = arguments.length;
switch (G__12506) {
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
var G__13018 = ps;
var G__13019 = (i + (1));
el__$1 = G__13018;
i = G__13019;
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
var vec__12521 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12521,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12521,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12521,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12524_13029 = cljs.core.seq(props);
var chunk__12525_13030 = null;
var count__12526_13031 = (0);
var i__12527_13032 = (0);
while(true){
if((i__12527_13032 < count__12526_13031)){
var vec__12534_13033 = chunk__12525_13030.cljs$core$IIndexed$_nth$arity$2(null, i__12527_13032);
var k_13034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534_13033,(0),null);
var v_13035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534_13033,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13034);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13034),v_13035);


var G__13038 = seq__12524_13029;
var G__13039 = chunk__12525_13030;
var G__13040 = count__12526_13031;
var G__13041 = (i__12527_13032 + (1));
seq__12524_13029 = G__13038;
chunk__12525_13030 = G__13039;
count__12526_13031 = G__13040;
i__12527_13032 = G__13041;
continue;
} else {
var temp__5804__auto___13042 = cljs.core.seq(seq__12524_13029);
if(temp__5804__auto___13042){
var seq__12524_13044__$1 = temp__5804__auto___13042;
if(cljs.core.chunked_seq_QMARK_(seq__12524_13044__$1)){
var c__5525__auto___13045 = cljs.core.chunk_first(seq__12524_13044__$1);
var G__13047 = cljs.core.chunk_rest(seq__12524_13044__$1);
var G__13048 = c__5525__auto___13045;
var G__13049 = cljs.core.count(c__5525__auto___13045);
var G__13050 = (0);
seq__12524_13029 = G__13047;
chunk__12525_13030 = G__13048;
count__12526_13031 = G__13049;
i__12527_13032 = G__13050;
continue;
} else {
var vec__12537_13051 = cljs.core.first(seq__12524_13044__$1);
var k_13052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537_13051,(0),null);
var v_13053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537_13051,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13052);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13052),v_13053);


var G__13059 = cljs.core.next(seq__12524_13044__$1);
var G__13060 = null;
var G__13061 = (0);
var G__13062 = (0);
seq__12524_13029 = G__13059;
chunk__12525_13030 = G__13060;
count__12526_13031 = G__13061;
i__12527_13032 = G__13062;
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
var vec__12541 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12541,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12541,(1),null);
var seq__12544_13066 = cljs.core.seq(node_children);
var chunk__12546_13067 = null;
var count__12547_13068 = (0);
var i__12548_13069 = (0);
while(true){
if((i__12548_13069 < count__12547_13068)){
var child_struct_13070 = chunk__12546_13067.cljs$core$IIndexed$_nth$arity$2(null, i__12548_13069);
if((!((child_struct_13070 == null)))){
if(typeof child_struct_13070 === 'string'){
var text_13072 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13072),child_struct_13070].join(''));
} else {
var children_13073 = shadow.dom.svg_node(child_struct_13070);
if(cljs.core.seq_QMARK_(children_13073)){
var seq__12562_13075 = cljs.core.seq(children_13073);
var chunk__12564_13076 = null;
var count__12565_13077 = (0);
var i__12566_13078 = (0);
while(true){
if((i__12566_13078 < count__12565_13077)){
var child_13081 = chunk__12564_13076.cljs$core$IIndexed$_nth$arity$2(null, i__12566_13078);
if(cljs.core.truth_(child_13081)){
node.appendChild(child_13081);


var G__13083 = seq__12562_13075;
var G__13084 = chunk__12564_13076;
var G__13085 = count__12565_13077;
var G__13086 = (i__12566_13078 + (1));
seq__12562_13075 = G__13083;
chunk__12564_13076 = G__13084;
count__12565_13077 = G__13085;
i__12566_13078 = G__13086;
continue;
} else {
var G__13088 = seq__12562_13075;
var G__13089 = chunk__12564_13076;
var G__13090 = count__12565_13077;
var G__13091 = (i__12566_13078 + (1));
seq__12562_13075 = G__13088;
chunk__12564_13076 = G__13089;
count__12565_13077 = G__13090;
i__12566_13078 = G__13091;
continue;
}
} else {
var temp__5804__auto___13092 = cljs.core.seq(seq__12562_13075);
if(temp__5804__auto___13092){
var seq__12562_13093__$1 = temp__5804__auto___13092;
if(cljs.core.chunked_seq_QMARK_(seq__12562_13093__$1)){
var c__5525__auto___13094 = cljs.core.chunk_first(seq__12562_13093__$1);
var G__13096 = cljs.core.chunk_rest(seq__12562_13093__$1);
var G__13097 = c__5525__auto___13094;
var G__13098 = cljs.core.count(c__5525__auto___13094);
var G__13099 = (0);
seq__12562_13075 = G__13096;
chunk__12564_13076 = G__13097;
count__12565_13077 = G__13098;
i__12566_13078 = G__13099;
continue;
} else {
var child_13100 = cljs.core.first(seq__12562_13093__$1);
if(cljs.core.truth_(child_13100)){
node.appendChild(child_13100);


var G__13102 = cljs.core.next(seq__12562_13093__$1);
var G__13103 = null;
var G__13104 = (0);
var G__13105 = (0);
seq__12562_13075 = G__13102;
chunk__12564_13076 = G__13103;
count__12565_13077 = G__13104;
i__12566_13078 = G__13105;
continue;
} else {
var G__13106 = cljs.core.next(seq__12562_13093__$1);
var G__13107 = null;
var G__13108 = (0);
var G__13109 = (0);
seq__12562_13075 = G__13106;
chunk__12564_13076 = G__13107;
count__12565_13077 = G__13108;
i__12566_13078 = G__13109;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13073);
}
}


var G__13111 = seq__12544_13066;
var G__13112 = chunk__12546_13067;
var G__13113 = count__12547_13068;
var G__13114 = (i__12548_13069 + (1));
seq__12544_13066 = G__13111;
chunk__12546_13067 = G__13112;
count__12547_13068 = G__13113;
i__12548_13069 = G__13114;
continue;
} else {
var G__13115 = seq__12544_13066;
var G__13116 = chunk__12546_13067;
var G__13117 = count__12547_13068;
var G__13118 = (i__12548_13069 + (1));
seq__12544_13066 = G__13115;
chunk__12546_13067 = G__13116;
count__12547_13068 = G__13117;
i__12548_13069 = G__13118;
continue;
}
} else {
var temp__5804__auto___13119 = cljs.core.seq(seq__12544_13066);
if(temp__5804__auto___13119){
var seq__12544_13120__$1 = temp__5804__auto___13119;
if(cljs.core.chunked_seq_QMARK_(seq__12544_13120__$1)){
var c__5525__auto___13121 = cljs.core.chunk_first(seq__12544_13120__$1);
var G__13122 = cljs.core.chunk_rest(seq__12544_13120__$1);
var G__13123 = c__5525__auto___13121;
var G__13124 = cljs.core.count(c__5525__auto___13121);
var G__13125 = (0);
seq__12544_13066 = G__13122;
chunk__12546_13067 = G__13123;
count__12547_13068 = G__13124;
i__12548_13069 = G__13125;
continue;
} else {
var child_struct_13126 = cljs.core.first(seq__12544_13120__$1);
if((!((child_struct_13126 == null)))){
if(typeof child_struct_13126 === 'string'){
var text_13129 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13129),child_struct_13126].join(''));
} else {
var children_13130 = shadow.dom.svg_node(child_struct_13126);
if(cljs.core.seq_QMARK_(children_13130)){
var seq__12575_13131 = cljs.core.seq(children_13130);
var chunk__12577_13132 = null;
var count__12578_13133 = (0);
var i__12579_13134 = (0);
while(true){
if((i__12579_13134 < count__12578_13133)){
var child_13135 = chunk__12577_13132.cljs$core$IIndexed$_nth$arity$2(null, i__12579_13134);
if(cljs.core.truth_(child_13135)){
node.appendChild(child_13135);


var G__13136 = seq__12575_13131;
var G__13137 = chunk__12577_13132;
var G__13138 = count__12578_13133;
var G__13139 = (i__12579_13134 + (1));
seq__12575_13131 = G__13136;
chunk__12577_13132 = G__13137;
count__12578_13133 = G__13138;
i__12579_13134 = G__13139;
continue;
} else {
var G__13140 = seq__12575_13131;
var G__13141 = chunk__12577_13132;
var G__13142 = count__12578_13133;
var G__13143 = (i__12579_13134 + (1));
seq__12575_13131 = G__13140;
chunk__12577_13132 = G__13141;
count__12578_13133 = G__13142;
i__12579_13134 = G__13143;
continue;
}
} else {
var temp__5804__auto___13144__$1 = cljs.core.seq(seq__12575_13131);
if(temp__5804__auto___13144__$1){
var seq__12575_13145__$1 = temp__5804__auto___13144__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12575_13145__$1)){
var c__5525__auto___13147 = cljs.core.chunk_first(seq__12575_13145__$1);
var G__13148 = cljs.core.chunk_rest(seq__12575_13145__$1);
var G__13149 = c__5525__auto___13147;
var G__13150 = cljs.core.count(c__5525__auto___13147);
var G__13151 = (0);
seq__12575_13131 = G__13148;
chunk__12577_13132 = G__13149;
count__12578_13133 = G__13150;
i__12579_13134 = G__13151;
continue;
} else {
var child_13153 = cljs.core.first(seq__12575_13145__$1);
if(cljs.core.truth_(child_13153)){
node.appendChild(child_13153);


var G__13155 = cljs.core.next(seq__12575_13145__$1);
var G__13156 = null;
var G__13157 = (0);
var G__13158 = (0);
seq__12575_13131 = G__13155;
chunk__12577_13132 = G__13156;
count__12578_13133 = G__13157;
i__12579_13134 = G__13158;
continue;
} else {
var G__13160 = cljs.core.next(seq__12575_13145__$1);
var G__13161 = null;
var G__13162 = (0);
var G__13163 = (0);
seq__12575_13131 = G__13160;
chunk__12577_13132 = G__13161;
count__12578_13133 = G__13162;
i__12579_13134 = G__13163;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13130);
}
}


var G__13164 = cljs.core.next(seq__12544_13120__$1);
var G__13165 = null;
var G__13166 = (0);
var G__13167 = (0);
seq__12544_13066 = G__13164;
chunk__12546_13067 = G__13165;
count__12547_13068 = G__13166;
i__12548_13069 = G__13167;
continue;
} else {
var G__13168 = cljs.core.next(seq__12544_13120__$1);
var G__13169 = null;
var G__13170 = (0);
var G__13171 = (0);
seq__12544_13066 = G__13168;
chunk__12546_13067 = G__13169;
count__12547_13068 = G__13170;
i__12548_13069 = G__13171;
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
var len__5726__auto___13179 = arguments.length;
var i__5727__auto___13180 = (0);
while(true){
if((i__5727__auto___13180 < len__5726__auto___13179)){
args__5732__auto__.push((arguments[i__5727__auto___13180]));

var G__13181 = (i__5727__auto___13180 + (1));
i__5727__auto___13180 = G__13181;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12606){
var G__12607 = cljs.core.first(seq12606);
var seq12606__$1 = cljs.core.next(seq12606);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12607,seq12606__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
