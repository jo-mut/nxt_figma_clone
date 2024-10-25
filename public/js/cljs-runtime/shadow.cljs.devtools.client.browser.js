goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21248 = arguments.length;
var i__5727__auto___21249 = (0);
while(true){
if((i__5727__auto___21249 < len__5726__auto___21248)){
args__5732__auto__.push((arguments[i__5727__auto___21249]));

var G__21250 = (i__5727__auto___21249 + (1));
i__5727__auto___21249 = G__21250;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20812){
var G__20813 = cljs.core.first(seq20812);
var seq20812__$1 = cljs.core.next(seq20812);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20813,seq20812__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20814 = cljs.core.seq(sources);
var chunk__20815 = null;
var count__20816 = (0);
var i__20817 = (0);
while(true){
if((i__20817 < count__20816)){
var map__20822 = chunk__20815.cljs$core$IIndexed$_nth$arity$2(null, i__20817);
var map__20822__$1 = cljs.core.__destructure_map(map__20822);
var src = map__20822__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20823){var e_21251 = e20823;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21251);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21251.message)].join('')));
}

var G__21252 = seq__20814;
var G__21253 = chunk__20815;
var G__21254 = count__20816;
var G__21255 = (i__20817 + (1));
seq__20814 = G__21252;
chunk__20815 = G__21253;
count__20816 = G__21254;
i__20817 = G__21255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20814);
if(temp__5804__auto__){
var seq__20814__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20814__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20814__$1);
var G__21256 = cljs.core.chunk_rest(seq__20814__$1);
var G__21257 = c__5525__auto__;
var G__21258 = cljs.core.count(c__5525__auto__);
var G__21259 = (0);
seq__20814 = G__21256;
chunk__20815 = G__21257;
count__20816 = G__21258;
i__20817 = G__21259;
continue;
} else {
var map__20824 = cljs.core.first(seq__20814__$1);
var map__20824__$1 = cljs.core.__destructure_map(map__20824);
var src = map__20824__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20824__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20824__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20824__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20824__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20825){var e_21260 = e20825;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21260);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21260.message)].join('')));
}

var G__21261 = cljs.core.next(seq__20814__$1);
var G__21262 = null;
var G__21263 = (0);
var G__21264 = (0);
seq__20814 = G__21261;
chunk__20815 = G__21262;
count__20816 = G__21263;
i__20817 = G__21264;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20826 = cljs.core.seq(js_requires);
var chunk__20827 = null;
var count__20828 = (0);
var i__20829 = (0);
while(true){
if((i__20829 < count__20828)){
var js_ns = chunk__20827.cljs$core$IIndexed$_nth$arity$2(null, i__20829);
var require_str_21265 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21265);


var G__21266 = seq__20826;
var G__21267 = chunk__20827;
var G__21268 = count__20828;
var G__21269 = (i__20829 + (1));
seq__20826 = G__21266;
chunk__20827 = G__21267;
count__20828 = G__21268;
i__20829 = G__21269;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20826);
if(temp__5804__auto__){
var seq__20826__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20826__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20826__$1);
var G__21270 = cljs.core.chunk_rest(seq__20826__$1);
var G__21271 = c__5525__auto__;
var G__21272 = cljs.core.count(c__5525__auto__);
var G__21273 = (0);
seq__20826 = G__21270;
chunk__20827 = G__21271;
count__20828 = G__21272;
i__20829 = G__21273;
continue;
} else {
var js_ns = cljs.core.first(seq__20826__$1);
var require_str_21274 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21274);


var G__21275 = cljs.core.next(seq__20826__$1);
var G__21276 = null;
var G__21277 = (0);
var G__21278 = (0);
seq__20826 = G__21275;
chunk__20827 = G__21276;
count__20828 = G__21277;
i__20829 = G__21278;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20831){
var map__20832 = p__20831;
var map__20832__$1 = cljs.core.__destructure_map(map__20832);
var msg = map__20832__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20833(s__20834){
return (new cljs.core.LazySeq(null,(function (){
var s__20834__$1 = s__20834;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20834__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20839 = cljs.core.first(xs__6360__auto__);
var map__20839__$1 = cljs.core.__destructure_map(map__20839);
var src = map__20839__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20834__$1,map__20839,map__20839__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20832,map__20832__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20833_$_iter__20835(s__20836){
return (new cljs.core.LazySeq(null,((function (s__20834__$1,map__20839,map__20839__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20832,map__20832__$1,msg,info,reload_info){
return (function (){
var s__20836__$1 = s__20836;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20836__$1);
if(temp__5804__auto____$1){
var s__20836__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20836__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20836__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20838 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20837 = (0);
while(true){
if((i__20837 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20837);
cljs.core.chunk_append(b__20838,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21279 = (i__20837 + (1));
i__20837 = G__21279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20838),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20833_$_iter__20835(cljs.core.chunk_rest(s__20836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20838),null);
}
} else {
var warning = cljs.core.first(s__20836__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20833_$_iter__20835(cljs.core.rest(s__20836__$2)));
}
} else {
return null;
}
break;
}
});})(s__20834__$1,map__20839,map__20839__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20832,map__20832__$1,msg,info,reload_info))
,null,null));
});})(s__20834__$1,map__20839,map__20839__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20832,map__20832__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20833(cljs.core.rest(s__20834__$1)));
} else {
var G__21280 = cljs.core.rest(s__20834__$1);
s__20834__$1 = G__21280;
continue;
}
} else {
var G__21281 = cljs.core.rest(s__20834__$1);
s__20834__$1 = G__21281;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20840_21282 = cljs.core.seq(warnings);
var chunk__20841_21283 = null;
var count__20842_21284 = (0);
var i__20843_21285 = (0);
while(true){
if((i__20843_21285 < count__20842_21284)){
var map__20846_21286 = chunk__20841_21283.cljs$core$IIndexed$_nth$arity$2(null, i__20843_21285);
var map__20846_21287__$1 = cljs.core.__destructure_map(map__20846_21286);
var w_21288 = map__20846_21287__$1;
var msg_21289__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846_21287__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846_21287__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846_21287__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846_21287__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21292)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21290),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21291),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21289__$1)].join(''));


var G__21293 = seq__20840_21282;
var G__21294 = chunk__20841_21283;
var G__21295 = count__20842_21284;
var G__21296 = (i__20843_21285 + (1));
seq__20840_21282 = G__21293;
chunk__20841_21283 = G__21294;
count__20842_21284 = G__21295;
i__20843_21285 = G__21296;
continue;
} else {
var temp__5804__auto___21297 = cljs.core.seq(seq__20840_21282);
if(temp__5804__auto___21297){
var seq__20840_21298__$1 = temp__5804__auto___21297;
if(cljs.core.chunked_seq_QMARK_(seq__20840_21298__$1)){
var c__5525__auto___21299 = cljs.core.chunk_first(seq__20840_21298__$1);
var G__21300 = cljs.core.chunk_rest(seq__20840_21298__$1);
var G__21301 = c__5525__auto___21299;
var G__21302 = cljs.core.count(c__5525__auto___21299);
var G__21303 = (0);
seq__20840_21282 = G__21300;
chunk__20841_21283 = G__21301;
count__20842_21284 = G__21302;
i__20843_21285 = G__21303;
continue;
} else {
var map__20847_21304 = cljs.core.first(seq__20840_21298__$1);
var map__20847_21305__$1 = cljs.core.__destructure_map(map__20847_21304);
var w_21306 = map__20847_21305__$1;
var msg_21307__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20847_21305__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20847_21305__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20847_21305__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20847_21305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21310)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21308),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21309),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21307__$1)].join(''));


var G__21311 = cljs.core.next(seq__20840_21298__$1);
var G__21312 = null;
var G__21313 = (0);
var G__21314 = (0);
seq__20840_21282 = G__21311;
chunk__20841_21283 = G__21312;
count__20842_21284 = G__21313;
i__20843_21285 = G__21314;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20830_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20830_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20848){
var map__20849 = p__20848;
var map__20849__$1 = cljs.core.__destructure_map(map__20849);
var msg = map__20849__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20850 = cljs.core.seq(updates);
var chunk__20852 = null;
var count__20853 = (0);
var i__20854 = (0);
while(true){
if((i__20854 < count__20853)){
var path = chunk__20852.cljs$core$IIndexed$_nth$arity$2(null, i__20854);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21110_21315 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21114_21316 = null;
var count__21115_21317 = (0);
var i__21116_21318 = (0);
while(true){
if((i__21116_21318 < count__21115_21317)){
var node_21319 = chunk__21114_21316.cljs$core$IIndexed$_nth$arity$2(null, i__21116_21318);
if(cljs.core.not(node_21319.shadow$old)){
var path_match_21320 = shadow.cljs.devtools.client.browser.match_paths(node_21319.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21320)){
var new_link_21321 = (function (){var G__21154 = node_21319.cloneNode(true);
G__21154.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21320),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21154;
})();
(node_21319.shadow$old = true);

(new_link_21321.onload = ((function (seq__21110_21315,chunk__21114_21316,count__21115_21317,i__21116_21318,seq__20850,chunk__20852,count__20853,i__20854,new_link_21321,path_match_21320,node_21319,path,map__20849,map__20849__$1,msg,updates,reload_info){
return (function (e){
var seq__21155_21322 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21157_21323 = null;
var count__21158_21324 = (0);
var i__21159_21325 = (0);
while(true){
if((i__21159_21325 < count__21158_21324)){
var map__21163_21326 = chunk__21157_21323.cljs$core$IIndexed$_nth$arity$2(null, i__21159_21325);
var map__21163_21327__$1 = cljs.core.__destructure_map(map__21163_21326);
var task_21328 = map__21163_21327__$1;
var fn_str_21329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21163_21327__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21163_21327__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21331 = goog.getObjectByName(fn_str_21329,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21330)].join(''));

(fn_obj_21331.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21331.cljs$core$IFn$_invoke$arity$2(path,new_link_21321) : fn_obj_21331.call(null, path,new_link_21321));


var G__21332 = seq__21155_21322;
var G__21333 = chunk__21157_21323;
var G__21334 = count__21158_21324;
var G__21335 = (i__21159_21325 + (1));
seq__21155_21322 = G__21332;
chunk__21157_21323 = G__21333;
count__21158_21324 = G__21334;
i__21159_21325 = G__21335;
continue;
} else {
var temp__5804__auto___21336 = cljs.core.seq(seq__21155_21322);
if(temp__5804__auto___21336){
var seq__21155_21337__$1 = temp__5804__auto___21336;
if(cljs.core.chunked_seq_QMARK_(seq__21155_21337__$1)){
var c__5525__auto___21338 = cljs.core.chunk_first(seq__21155_21337__$1);
var G__21339 = cljs.core.chunk_rest(seq__21155_21337__$1);
var G__21340 = c__5525__auto___21338;
var G__21341 = cljs.core.count(c__5525__auto___21338);
var G__21342 = (0);
seq__21155_21322 = G__21339;
chunk__21157_21323 = G__21340;
count__21158_21324 = G__21341;
i__21159_21325 = G__21342;
continue;
} else {
var map__21164_21343 = cljs.core.first(seq__21155_21337__$1);
var map__21164_21344__$1 = cljs.core.__destructure_map(map__21164_21343);
var task_21345 = map__21164_21344__$1;
var fn_str_21346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21164_21344__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21164_21344__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21348 = goog.getObjectByName(fn_str_21346,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21347)].join(''));

(fn_obj_21348.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21348.cljs$core$IFn$_invoke$arity$2(path,new_link_21321) : fn_obj_21348.call(null, path,new_link_21321));


var G__21349 = cljs.core.next(seq__21155_21337__$1);
var G__21350 = null;
var G__21351 = (0);
var G__21352 = (0);
seq__21155_21322 = G__21349;
chunk__21157_21323 = G__21350;
count__21158_21324 = G__21351;
i__21159_21325 = G__21352;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21319);
});})(seq__21110_21315,chunk__21114_21316,count__21115_21317,i__21116_21318,seq__20850,chunk__20852,count__20853,i__20854,new_link_21321,path_match_21320,node_21319,path,map__20849,map__20849__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21320], 0));

goog.dom.insertSiblingAfter(new_link_21321,node_21319);


var G__21353 = seq__21110_21315;
var G__21354 = chunk__21114_21316;
var G__21355 = count__21115_21317;
var G__21356 = (i__21116_21318 + (1));
seq__21110_21315 = G__21353;
chunk__21114_21316 = G__21354;
count__21115_21317 = G__21355;
i__21116_21318 = G__21356;
continue;
} else {
var G__21357 = seq__21110_21315;
var G__21358 = chunk__21114_21316;
var G__21359 = count__21115_21317;
var G__21360 = (i__21116_21318 + (1));
seq__21110_21315 = G__21357;
chunk__21114_21316 = G__21358;
count__21115_21317 = G__21359;
i__21116_21318 = G__21360;
continue;
}
} else {
var G__21361 = seq__21110_21315;
var G__21362 = chunk__21114_21316;
var G__21363 = count__21115_21317;
var G__21364 = (i__21116_21318 + (1));
seq__21110_21315 = G__21361;
chunk__21114_21316 = G__21362;
count__21115_21317 = G__21363;
i__21116_21318 = G__21364;
continue;
}
} else {
var temp__5804__auto___21365 = cljs.core.seq(seq__21110_21315);
if(temp__5804__auto___21365){
var seq__21110_21366__$1 = temp__5804__auto___21365;
if(cljs.core.chunked_seq_QMARK_(seq__21110_21366__$1)){
var c__5525__auto___21367 = cljs.core.chunk_first(seq__21110_21366__$1);
var G__21368 = cljs.core.chunk_rest(seq__21110_21366__$1);
var G__21369 = c__5525__auto___21367;
var G__21370 = cljs.core.count(c__5525__auto___21367);
var G__21371 = (0);
seq__21110_21315 = G__21368;
chunk__21114_21316 = G__21369;
count__21115_21317 = G__21370;
i__21116_21318 = G__21371;
continue;
} else {
var node_21372 = cljs.core.first(seq__21110_21366__$1);
if(cljs.core.not(node_21372.shadow$old)){
var path_match_21373 = shadow.cljs.devtools.client.browser.match_paths(node_21372.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21373)){
var new_link_21374 = (function (){var G__21165 = node_21372.cloneNode(true);
G__21165.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21373),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21165;
})();
(node_21372.shadow$old = true);

(new_link_21374.onload = ((function (seq__21110_21315,chunk__21114_21316,count__21115_21317,i__21116_21318,seq__20850,chunk__20852,count__20853,i__20854,new_link_21374,path_match_21373,node_21372,seq__21110_21366__$1,temp__5804__auto___21365,path,map__20849,map__20849__$1,msg,updates,reload_info){
return (function (e){
var seq__21166_21375 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21168_21376 = null;
var count__21169_21377 = (0);
var i__21170_21378 = (0);
while(true){
if((i__21170_21378 < count__21169_21377)){
var map__21174_21379 = chunk__21168_21376.cljs$core$IIndexed$_nth$arity$2(null, i__21170_21378);
var map__21174_21380__$1 = cljs.core.__destructure_map(map__21174_21379);
var task_21381 = map__21174_21380__$1;
var fn_str_21382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174_21380__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174_21380__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21384 = goog.getObjectByName(fn_str_21382,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21383)].join(''));

(fn_obj_21384.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21384.cljs$core$IFn$_invoke$arity$2(path,new_link_21374) : fn_obj_21384.call(null, path,new_link_21374));


var G__21385 = seq__21166_21375;
var G__21386 = chunk__21168_21376;
var G__21387 = count__21169_21377;
var G__21388 = (i__21170_21378 + (1));
seq__21166_21375 = G__21385;
chunk__21168_21376 = G__21386;
count__21169_21377 = G__21387;
i__21170_21378 = G__21388;
continue;
} else {
var temp__5804__auto___21389__$1 = cljs.core.seq(seq__21166_21375);
if(temp__5804__auto___21389__$1){
var seq__21166_21390__$1 = temp__5804__auto___21389__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21166_21390__$1)){
var c__5525__auto___21391 = cljs.core.chunk_first(seq__21166_21390__$1);
var G__21392 = cljs.core.chunk_rest(seq__21166_21390__$1);
var G__21393 = c__5525__auto___21391;
var G__21394 = cljs.core.count(c__5525__auto___21391);
var G__21395 = (0);
seq__21166_21375 = G__21392;
chunk__21168_21376 = G__21393;
count__21169_21377 = G__21394;
i__21170_21378 = G__21395;
continue;
} else {
var map__21175_21396 = cljs.core.first(seq__21166_21390__$1);
var map__21175_21397__$1 = cljs.core.__destructure_map(map__21175_21396);
var task_21398 = map__21175_21397__$1;
var fn_str_21399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175_21397__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175_21397__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21401 = goog.getObjectByName(fn_str_21399,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21400)].join(''));

(fn_obj_21401.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21401.cljs$core$IFn$_invoke$arity$2(path,new_link_21374) : fn_obj_21401.call(null, path,new_link_21374));


var G__21402 = cljs.core.next(seq__21166_21390__$1);
var G__21403 = null;
var G__21404 = (0);
var G__21405 = (0);
seq__21166_21375 = G__21402;
chunk__21168_21376 = G__21403;
count__21169_21377 = G__21404;
i__21170_21378 = G__21405;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21372);
});})(seq__21110_21315,chunk__21114_21316,count__21115_21317,i__21116_21318,seq__20850,chunk__20852,count__20853,i__20854,new_link_21374,path_match_21373,node_21372,seq__21110_21366__$1,temp__5804__auto___21365,path,map__20849,map__20849__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21373], 0));

goog.dom.insertSiblingAfter(new_link_21374,node_21372);


var G__21406 = cljs.core.next(seq__21110_21366__$1);
var G__21407 = null;
var G__21408 = (0);
var G__21409 = (0);
seq__21110_21315 = G__21406;
chunk__21114_21316 = G__21407;
count__21115_21317 = G__21408;
i__21116_21318 = G__21409;
continue;
} else {
var G__21410 = cljs.core.next(seq__21110_21366__$1);
var G__21411 = null;
var G__21412 = (0);
var G__21413 = (0);
seq__21110_21315 = G__21410;
chunk__21114_21316 = G__21411;
count__21115_21317 = G__21412;
i__21116_21318 = G__21413;
continue;
}
} else {
var G__21414 = cljs.core.next(seq__21110_21366__$1);
var G__21415 = null;
var G__21416 = (0);
var G__21417 = (0);
seq__21110_21315 = G__21414;
chunk__21114_21316 = G__21415;
count__21115_21317 = G__21416;
i__21116_21318 = G__21417;
continue;
}
}
} else {
}
}
break;
}


var G__21418 = seq__20850;
var G__21419 = chunk__20852;
var G__21420 = count__20853;
var G__21421 = (i__20854 + (1));
seq__20850 = G__21418;
chunk__20852 = G__21419;
count__20853 = G__21420;
i__20854 = G__21421;
continue;
} else {
var G__21422 = seq__20850;
var G__21423 = chunk__20852;
var G__21424 = count__20853;
var G__21425 = (i__20854 + (1));
seq__20850 = G__21422;
chunk__20852 = G__21423;
count__20853 = G__21424;
i__20854 = G__21425;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20850);
if(temp__5804__auto__){
var seq__20850__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20850__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20850__$1);
var G__21426 = cljs.core.chunk_rest(seq__20850__$1);
var G__21427 = c__5525__auto__;
var G__21428 = cljs.core.count(c__5525__auto__);
var G__21429 = (0);
seq__20850 = G__21426;
chunk__20852 = G__21427;
count__20853 = G__21428;
i__20854 = G__21429;
continue;
} else {
var path = cljs.core.first(seq__20850__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21176_21430 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21180_21431 = null;
var count__21181_21432 = (0);
var i__21182_21433 = (0);
while(true){
if((i__21182_21433 < count__21181_21432)){
var node_21434 = chunk__21180_21431.cljs$core$IIndexed$_nth$arity$2(null, i__21182_21433);
if(cljs.core.not(node_21434.shadow$old)){
var path_match_21435 = shadow.cljs.devtools.client.browser.match_paths(node_21434.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21435)){
var new_link_21436 = (function (){var G__21208 = node_21434.cloneNode(true);
G__21208.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21435),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21208;
})();
(node_21434.shadow$old = true);

(new_link_21436.onload = ((function (seq__21176_21430,chunk__21180_21431,count__21181_21432,i__21182_21433,seq__20850,chunk__20852,count__20853,i__20854,new_link_21436,path_match_21435,node_21434,path,seq__20850__$1,temp__5804__auto__,map__20849,map__20849__$1,msg,updates,reload_info){
return (function (e){
var seq__21209_21437 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21211_21438 = null;
var count__21212_21439 = (0);
var i__21213_21440 = (0);
while(true){
if((i__21213_21440 < count__21212_21439)){
var map__21217_21441 = chunk__21211_21438.cljs$core$IIndexed$_nth$arity$2(null, i__21213_21440);
var map__21217_21442__$1 = cljs.core.__destructure_map(map__21217_21441);
var task_21443 = map__21217_21442__$1;
var fn_str_21444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21217_21442__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21217_21442__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21446 = goog.getObjectByName(fn_str_21444,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21445)].join(''));

(fn_obj_21446.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21446.cljs$core$IFn$_invoke$arity$2(path,new_link_21436) : fn_obj_21446.call(null, path,new_link_21436));


var G__21447 = seq__21209_21437;
var G__21448 = chunk__21211_21438;
var G__21449 = count__21212_21439;
var G__21450 = (i__21213_21440 + (1));
seq__21209_21437 = G__21447;
chunk__21211_21438 = G__21448;
count__21212_21439 = G__21449;
i__21213_21440 = G__21450;
continue;
} else {
var temp__5804__auto___21452__$1 = cljs.core.seq(seq__21209_21437);
if(temp__5804__auto___21452__$1){
var seq__21209_21453__$1 = temp__5804__auto___21452__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21209_21453__$1)){
var c__5525__auto___21454 = cljs.core.chunk_first(seq__21209_21453__$1);
var G__21455 = cljs.core.chunk_rest(seq__21209_21453__$1);
var G__21456 = c__5525__auto___21454;
var G__21457 = cljs.core.count(c__5525__auto___21454);
var G__21458 = (0);
seq__21209_21437 = G__21455;
chunk__21211_21438 = G__21456;
count__21212_21439 = G__21457;
i__21213_21440 = G__21458;
continue;
} else {
var map__21218_21459 = cljs.core.first(seq__21209_21453__$1);
var map__21218_21460__$1 = cljs.core.__destructure_map(map__21218_21459);
var task_21461 = map__21218_21460__$1;
var fn_str_21462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21218_21460__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21218_21460__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21464 = goog.getObjectByName(fn_str_21462,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21463)].join(''));

(fn_obj_21464.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21464.cljs$core$IFn$_invoke$arity$2(path,new_link_21436) : fn_obj_21464.call(null, path,new_link_21436));


var G__21465 = cljs.core.next(seq__21209_21453__$1);
var G__21466 = null;
var G__21467 = (0);
var G__21468 = (0);
seq__21209_21437 = G__21465;
chunk__21211_21438 = G__21466;
count__21212_21439 = G__21467;
i__21213_21440 = G__21468;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21434);
});})(seq__21176_21430,chunk__21180_21431,count__21181_21432,i__21182_21433,seq__20850,chunk__20852,count__20853,i__20854,new_link_21436,path_match_21435,node_21434,path,seq__20850__$1,temp__5804__auto__,map__20849,map__20849__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21435], 0));

goog.dom.insertSiblingAfter(new_link_21436,node_21434);


var G__21469 = seq__21176_21430;
var G__21470 = chunk__21180_21431;
var G__21471 = count__21181_21432;
var G__21472 = (i__21182_21433 + (1));
seq__21176_21430 = G__21469;
chunk__21180_21431 = G__21470;
count__21181_21432 = G__21471;
i__21182_21433 = G__21472;
continue;
} else {
var G__21473 = seq__21176_21430;
var G__21474 = chunk__21180_21431;
var G__21475 = count__21181_21432;
var G__21476 = (i__21182_21433 + (1));
seq__21176_21430 = G__21473;
chunk__21180_21431 = G__21474;
count__21181_21432 = G__21475;
i__21182_21433 = G__21476;
continue;
}
} else {
var G__21477 = seq__21176_21430;
var G__21478 = chunk__21180_21431;
var G__21479 = count__21181_21432;
var G__21480 = (i__21182_21433 + (1));
seq__21176_21430 = G__21477;
chunk__21180_21431 = G__21478;
count__21181_21432 = G__21479;
i__21182_21433 = G__21480;
continue;
}
} else {
var temp__5804__auto___21481__$1 = cljs.core.seq(seq__21176_21430);
if(temp__5804__auto___21481__$1){
var seq__21176_21482__$1 = temp__5804__auto___21481__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21176_21482__$1)){
var c__5525__auto___21483 = cljs.core.chunk_first(seq__21176_21482__$1);
var G__21484 = cljs.core.chunk_rest(seq__21176_21482__$1);
var G__21485 = c__5525__auto___21483;
var G__21486 = cljs.core.count(c__5525__auto___21483);
var G__21487 = (0);
seq__21176_21430 = G__21484;
chunk__21180_21431 = G__21485;
count__21181_21432 = G__21486;
i__21182_21433 = G__21487;
continue;
} else {
var node_21488 = cljs.core.first(seq__21176_21482__$1);
if(cljs.core.not(node_21488.shadow$old)){
var path_match_21489 = shadow.cljs.devtools.client.browser.match_paths(node_21488.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21489)){
var new_link_21490 = (function (){var G__21219 = node_21488.cloneNode(true);
G__21219.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21489),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21219;
})();
(node_21488.shadow$old = true);

(new_link_21490.onload = ((function (seq__21176_21430,chunk__21180_21431,count__21181_21432,i__21182_21433,seq__20850,chunk__20852,count__20853,i__20854,new_link_21490,path_match_21489,node_21488,seq__21176_21482__$1,temp__5804__auto___21481__$1,path,seq__20850__$1,temp__5804__auto__,map__20849,map__20849__$1,msg,updates,reload_info){
return (function (e){
var seq__21220_21492 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21222_21493 = null;
var count__21223_21494 = (0);
var i__21224_21495 = (0);
while(true){
if((i__21224_21495 < count__21223_21494)){
var map__21228_21496 = chunk__21222_21493.cljs$core$IIndexed$_nth$arity$2(null, i__21224_21495);
var map__21228_21497__$1 = cljs.core.__destructure_map(map__21228_21496);
var task_21498 = map__21228_21497__$1;
var fn_str_21499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21228_21497__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21228_21497__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21501 = goog.getObjectByName(fn_str_21499,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21500)].join(''));

(fn_obj_21501.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21501.cljs$core$IFn$_invoke$arity$2(path,new_link_21490) : fn_obj_21501.call(null, path,new_link_21490));


var G__21502 = seq__21220_21492;
var G__21503 = chunk__21222_21493;
var G__21504 = count__21223_21494;
var G__21505 = (i__21224_21495 + (1));
seq__21220_21492 = G__21502;
chunk__21222_21493 = G__21503;
count__21223_21494 = G__21504;
i__21224_21495 = G__21505;
continue;
} else {
var temp__5804__auto___21506__$2 = cljs.core.seq(seq__21220_21492);
if(temp__5804__auto___21506__$2){
var seq__21220_21507__$1 = temp__5804__auto___21506__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21220_21507__$1)){
var c__5525__auto___21508 = cljs.core.chunk_first(seq__21220_21507__$1);
var G__21509 = cljs.core.chunk_rest(seq__21220_21507__$1);
var G__21510 = c__5525__auto___21508;
var G__21511 = cljs.core.count(c__5525__auto___21508);
var G__21512 = (0);
seq__21220_21492 = G__21509;
chunk__21222_21493 = G__21510;
count__21223_21494 = G__21511;
i__21224_21495 = G__21512;
continue;
} else {
var map__21229_21513 = cljs.core.first(seq__21220_21507__$1);
var map__21229_21514__$1 = cljs.core.__destructure_map(map__21229_21513);
var task_21515 = map__21229_21514__$1;
var fn_str_21516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229_21514__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229_21514__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21522 = goog.getObjectByName(fn_str_21516,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21517)].join(''));

(fn_obj_21522.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21522.cljs$core$IFn$_invoke$arity$2(path,new_link_21490) : fn_obj_21522.call(null, path,new_link_21490));


var G__21523 = cljs.core.next(seq__21220_21507__$1);
var G__21524 = null;
var G__21525 = (0);
var G__21527 = (0);
seq__21220_21492 = G__21523;
chunk__21222_21493 = G__21524;
count__21223_21494 = G__21525;
i__21224_21495 = G__21527;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21488);
});})(seq__21176_21430,chunk__21180_21431,count__21181_21432,i__21182_21433,seq__20850,chunk__20852,count__20853,i__20854,new_link_21490,path_match_21489,node_21488,seq__21176_21482__$1,temp__5804__auto___21481__$1,path,seq__20850__$1,temp__5804__auto__,map__20849,map__20849__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21489], 0));

goog.dom.insertSiblingAfter(new_link_21490,node_21488);


var G__21531 = cljs.core.next(seq__21176_21482__$1);
var G__21535 = null;
var G__21537 = (0);
var G__21538 = (0);
seq__21176_21430 = G__21531;
chunk__21180_21431 = G__21535;
count__21181_21432 = G__21537;
i__21182_21433 = G__21538;
continue;
} else {
var G__21539 = cljs.core.next(seq__21176_21482__$1);
var G__21540 = null;
var G__21541 = (0);
var G__21542 = (0);
seq__21176_21430 = G__21539;
chunk__21180_21431 = G__21540;
count__21181_21432 = G__21541;
i__21182_21433 = G__21542;
continue;
}
} else {
var G__21543 = cljs.core.next(seq__21176_21482__$1);
var G__21544 = null;
var G__21545 = (0);
var G__21546 = (0);
seq__21176_21430 = G__21543;
chunk__21180_21431 = G__21544;
count__21181_21432 = G__21545;
i__21182_21433 = G__21546;
continue;
}
}
} else {
}
}
break;
}


var G__21547 = cljs.core.next(seq__20850__$1);
var G__21548 = null;
var G__21549 = (0);
var G__21550 = (0);
seq__20850 = G__21547;
chunk__20852 = G__21548;
count__20853 = G__21549;
i__20854 = G__21550;
continue;
} else {
var G__21551 = cljs.core.next(seq__20850__$1);
var G__21552 = null;
var G__21553 = (0);
var G__21554 = (0);
seq__20850 = G__21551;
chunk__20852 = G__21552;
count__20853 = G__21553;
i__20854 = G__21554;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21230){
var map__21231 = p__21230;
var map__21231__$1 = cljs.core.__destructure_map(map__21231);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21232,done,error){
var map__21233 = p__21232;
var map__21233__$1 = cljs.core.__destructure_map(map__21233);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21233__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21234,done,error){
var map__21235 = p__21234;
var map__21235__$1 = cljs.core.__destructure_map(map__21235);
var msg = map__21235__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21236){
var map__21237 = p__21236;
var map__21237__$1 = cljs.core.__destructure_map(map__21237);
var src = map__21237__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21237__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21238 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21238) : done.call(null, G__21238));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21239){
var map__21240 = p__21239;
var map__21240__$1 = cljs.core.__destructure_map(map__21240);
var msg__$1 = map__21240__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21241){var ex = e21241;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21242){
var map__21243 = p__21242;
var map__21243__$1 = cljs.core.__destructure_map(map__21243);
var env = map__21243__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21243__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21244){
var map__21245 = p__21244;
var map__21245__$1 = cljs.core.__destructure_map(map__21245);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21246){
var map__21247 = p__21246;
var map__21247__$1 = cljs.core.__destructure_map(map__21247);
var svc = map__21247__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21247__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
