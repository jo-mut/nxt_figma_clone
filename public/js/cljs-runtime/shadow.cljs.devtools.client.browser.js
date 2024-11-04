goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21525 = arguments.length;
var i__5727__auto___21526 = (0);
while(true){
if((i__5727__auto___21526 < len__5726__auto___21525)){
args__5732__auto__.push((arguments[i__5727__auto___21526]));

var G__21527 = (i__5727__auto___21526 + (1));
i__5727__auto___21526 = G__21527;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20866){
var G__20868 = cljs.core.first(seq20866);
var seq20866__$1 = cljs.core.next(seq20866);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20868,seq20866__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20872 = cljs.core.seq(sources);
var chunk__20873 = null;
var count__20874 = (0);
var i__20875 = (0);
while(true){
if((i__20875 < count__20874)){
var map__20883 = chunk__20873.cljs$core$IIndexed$_nth$arity$2(null, i__20875);
var map__20883__$1 = cljs.core.__destructure_map(map__20883);
var src = map__20883__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20884){var e_21533 = e20884;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21533);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21533.message)].join('')));
}

var G__21534 = seq__20872;
var G__21535 = chunk__20873;
var G__21536 = count__20874;
var G__21537 = (i__20875 + (1));
seq__20872 = G__21534;
chunk__20873 = G__21535;
count__20874 = G__21536;
i__20875 = G__21537;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20872);
if(temp__5804__auto__){
var seq__20872__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20872__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20872__$1);
var G__21538 = cljs.core.chunk_rest(seq__20872__$1);
var G__21539 = c__5525__auto__;
var G__21540 = cljs.core.count(c__5525__auto__);
var G__21541 = (0);
seq__20872 = G__21538;
chunk__20873 = G__21539;
count__20874 = G__21540;
i__20875 = G__21541;
continue;
} else {
var map__20891 = cljs.core.first(seq__20872__$1);
var map__20891__$1 = cljs.core.__destructure_map(map__20891);
var src = map__20891__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20897){var e_21542 = e20897;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21542);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21542.message)].join('')));
}

var G__21543 = cljs.core.next(seq__20872__$1);
var G__21544 = null;
var G__21545 = (0);
var G__21546 = (0);
seq__20872 = G__21543;
chunk__20873 = G__21544;
count__20874 = G__21545;
i__20875 = G__21546;
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
var seq__20903 = cljs.core.seq(js_requires);
var chunk__20904 = null;
var count__20905 = (0);
var i__20906 = (0);
while(true){
if((i__20906 < count__20905)){
var js_ns = chunk__20904.cljs$core$IIndexed$_nth$arity$2(null, i__20906);
var require_str_21547 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21547);


var G__21548 = seq__20903;
var G__21549 = chunk__20904;
var G__21550 = count__20905;
var G__21551 = (i__20906 + (1));
seq__20903 = G__21548;
chunk__20904 = G__21549;
count__20905 = G__21550;
i__20906 = G__21551;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20903);
if(temp__5804__auto__){
var seq__20903__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20903__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20903__$1);
var G__21552 = cljs.core.chunk_rest(seq__20903__$1);
var G__21553 = c__5525__auto__;
var G__21554 = cljs.core.count(c__5525__auto__);
var G__21555 = (0);
seq__20903 = G__21552;
chunk__20904 = G__21553;
count__20905 = G__21554;
i__20906 = G__21555;
continue;
} else {
var js_ns = cljs.core.first(seq__20903__$1);
var require_str_21556 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21556);


var G__21557 = cljs.core.next(seq__20903__$1);
var G__21558 = null;
var G__21559 = (0);
var G__21560 = (0);
seq__20903 = G__21557;
chunk__20904 = G__21558;
count__20905 = G__21559;
i__20906 = G__21560;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20911){
var map__20912 = p__20911;
var map__20912__$1 = cljs.core.__destructure_map(map__20912);
var msg = map__20912__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20912__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20912__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20913(s__20914){
return (new cljs.core.LazySeq(null,(function (){
var s__20914__$1 = s__20914;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20914__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20926 = cljs.core.first(xs__6360__auto__);
var map__20926__$1 = cljs.core.__destructure_map(map__20926);
var src = map__20926__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20914__$1,map__20926,map__20926__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20912,map__20912__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20913_$_iter__20915(s__20916){
return (new cljs.core.LazySeq(null,((function (s__20914__$1,map__20926,map__20926__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20912,map__20912__$1,msg,info,reload_info){
return (function (){
var s__20916__$1 = s__20916;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20916__$1);
if(temp__5804__auto____$1){
var s__20916__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20916__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20916__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20918 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20917 = (0);
while(true){
if((i__20917 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20917);
cljs.core.chunk_append(b__20918,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21566 = (i__20917 + (1));
i__20917 = G__21566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20918),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20913_$_iter__20915(cljs.core.chunk_rest(s__20916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20918),null);
}
} else {
var warning = cljs.core.first(s__20916__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20913_$_iter__20915(cljs.core.rest(s__20916__$2)));
}
} else {
return null;
}
break;
}
});})(s__20914__$1,map__20926,map__20926__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20912,map__20912__$1,msg,info,reload_info))
,null,null));
});})(s__20914__$1,map__20926,map__20926__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20912,map__20912__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20913(cljs.core.rest(s__20914__$1)));
} else {
var G__21567 = cljs.core.rest(s__20914__$1);
s__20914__$1 = G__21567;
continue;
}
} else {
var G__21568 = cljs.core.rest(s__20914__$1);
s__20914__$1 = G__21568;
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
var seq__20930_21569 = cljs.core.seq(warnings);
var chunk__20931_21570 = null;
var count__20932_21571 = (0);
var i__20933_21572 = (0);
while(true){
if((i__20933_21572 < count__20932_21571)){
var map__20936_21573 = chunk__20931_21570.cljs$core$IIndexed$_nth$arity$2(null, i__20933_21572);
var map__20936_21574__$1 = cljs.core.__destructure_map(map__20936_21573);
var w_21575 = map__20936_21574__$1;
var msg_21576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21574__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21574__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21574__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21574__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21579)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21577),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21578),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21576__$1)].join(''));


var G__21582 = seq__20930_21569;
var G__21583 = chunk__20931_21570;
var G__21584 = count__20932_21571;
var G__21585 = (i__20933_21572 + (1));
seq__20930_21569 = G__21582;
chunk__20931_21570 = G__21583;
count__20932_21571 = G__21584;
i__20933_21572 = G__21585;
continue;
} else {
var temp__5804__auto___21586 = cljs.core.seq(seq__20930_21569);
if(temp__5804__auto___21586){
var seq__20930_21587__$1 = temp__5804__auto___21586;
if(cljs.core.chunked_seq_QMARK_(seq__20930_21587__$1)){
var c__5525__auto___21589 = cljs.core.chunk_first(seq__20930_21587__$1);
var G__21591 = cljs.core.chunk_rest(seq__20930_21587__$1);
var G__21592 = c__5525__auto___21589;
var G__21593 = cljs.core.count(c__5525__auto___21589);
var G__21594 = (0);
seq__20930_21569 = G__21591;
chunk__20931_21570 = G__21592;
count__20932_21571 = G__21593;
i__20933_21572 = G__21594;
continue;
} else {
var map__20939_21595 = cljs.core.first(seq__20930_21587__$1);
var map__20939_21596__$1 = cljs.core.__destructure_map(map__20939_21595);
var w_21597 = map__20939_21596__$1;
var msg_21598__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939_21596__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939_21596__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939_21596__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939_21596__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21601)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21599),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21600),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21598__$1)].join(''));


var G__21602 = cljs.core.next(seq__20930_21587__$1);
var G__21603 = null;
var G__21604 = (0);
var G__21605 = (0);
seq__20930_21569 = G__21602;
chunk__20931_21570 = G__21603;
count__20932_21571 = G__21604;
i__20933_21572 = G__21605;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20910_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20910_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20947){
var map__20948 = p__20947;
var map__20948__$1 = cljs.core.__destructure_map(map__20948);
var msg = map__20948__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20951 = cljs.core.seq(updates);
var chunk__20953 = null;
var count__20954 = (0);
var i__20955 = (0);
while(true){
if((i__20955 < count__20954)){
var path = chunk__20953.cljs$core$IIndexed$_nth$arity$2(null, i__20955);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21279_21608 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21283_21609 = null;
var count__21284_21610 = (0);
var i__21285_21611 = (0);
while(true){
if((i__21285_21611 < count__21284_21610)){
var node_21613 = chunk__21283_21609.cljs$core$IIndexed$_nth$arity$2(null, i__21285_21611);
if(cljs.core.not(node_21613.shadow$old)){
var path_match_21614 = shadow.cljs.devtools.client.browser.match_paths(node_21613.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21614)){
var new_link_21615 = (function (){var G__21359 = node_21613.cloneNode(true);
G__21359.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21614),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21359;
})();
(node_21613.shadow$old = true);

(new_link_21615.onload = ((function (seq__21279_21608,chunk__21283_21609,count__21284_21610,i__21285_21611,seq__20951,chunk__20953,count__20954,i__20955,new_link_21615,path_match_21614,node_21613,path,map__20948,map__20948__$1,msg,updates,reload_info){
return (function (e){
var seq__21360_21616 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21362_21617 = null;
var count__21363_21618 = (0);
var i__21364_21619 = (0);
while(true){
if((i__21364_21619 < count__21363_21618)){
var map__21368_21620 = chunk__21362_21617.cljs$core$IIndexed$_nth$arity$2(null, i__21364_21619);
var map__21368_21621__$1 = cljs.core.__destructure_map(map__21368_21620);
var task_21622 = map__21368_21621__$1;
var fn_str_21623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21368_21621__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21368_21621__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21627 = goog.getObjectByName(fn_str_21623,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21624)].join(''));

(fn_obj_21627.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21627.cljs$core$IFn$_invoke$arity$2(path,new_link_21615) : fn_obj_21627.call(null, path,new_link_21615));


var G__21629 = seq__21360_21616;
var G__21630 = chunk__21362_21617;
var G__21631 = count__21363_21618;
var G__21632 = (i__21364_21619 + (1));
seq__21360_21616 = G__21629;
chunk__21362_21617 = G__21630;
count__21363_21618 = G__21631;
i__21364_21619 = G__21632;
continue;
} else {
var temp__5804__auto___21633 = cljs.core.seq(seq__21360_21616);
if(temp__5804__auto___21633){
var seq__21360_21634__$1 = temp__5804__auto___21633;
if(cljs.core.chunked_seq_QMARK_(seq__21360_21634__$1)){
var c__5525__auto___21635 = cljs.core.chunk_first(seq__21360_21634__$1);
var G__21636 = cljs.core.chunk_rest(seq__21360_21634__$1);
var G__21637 = c__5525__auto___21635;
var G__21638 = cljs.core.count(c__5525__auto___21635);
var G__21639 = (0);
seq__21360_21616 = G__21636;
chunk__21362_21617 = G__21637;
count__21363_21618 = G__21638;
i__21364_21619 = G__21639;
continue;
} else {
var map__21369_21640 = cljs.core.first(seq__21360_21634__$1);
var map__21369_21641__$1 = cljs.core.__destructure_map(map__21369_21640);
var task_21642 = map__21369_21641__$1;
var fn_str_21643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369_21641__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369_21641__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21645 = goog.getObjectByName(fn_str_21643,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21644)].join(''));

(fn_obj_21645.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21645.cljs$core$IFn$_invoke$arity$2(path,new_link_21615) : fn_obj_21645.call(null, path,new_link_21615));


var G__21646 = cljs.core.next(seq__21360_21634__$1);
var G__21647 = null;
var G__21648 = (0);
var G__21649 = (0);
seq__21360_21616 = G__21646;
chunk__21362_21617 = G__21647;
count__21363_21618 = G__21648;
i__21364_21619 = G__21649;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21613);
});})(seq__21279_21608,chunk__21283_21609,count__21284_21610,i__21285_21611,seq__20951,chunk__20953,count__20954,i__20955,new_link_21615,path_match_21614,node_21613,path,map__20948,map__20948__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21614], 0));

goog.dom.insertSiblingAfter(new_link_21615,node_21613);


var G__21651 = seq__21279_21608;
var G__21652 = chunk__21283_21609;
var G__21653 = count__21284_21610;
var G__21654 = (i__21285_21611 + (1));
seq__21279_21608 = G__21651;
chunk__21283_21609 = G__21652;
count__21284_21610 = G__21653;
i__21285_21611 = G__21654;
continue;
} else {
var G__21657 = seq__21279_21608;
var G__21658 = chunk__21283_21609;
var G__21659 = count__21284_21610;
var G__21660 = (i__21285_21611 + (1));
seq__21279_21608 = G__21657;
chunk__21283_21609 = G__21658;
count__21284_21610 = G__21659;
i__21285_21611 = G__21660;
continue;
}
} else {
var G__21661 = seq__21279_21608;
var G__21662 = chunk__21283_21609;
var G__21663 = count__21284_21610;
var G__21664 = (i__21285_21611 + (1));
seq__21279_21608 = G__21661;
chunk__21283_21609 = G__21662;
count__21284_21610 = G__21663;
i__21285_21611 = G__21664;
continue;
}
} else {
var temp__5804__auto___21666 = cljs.core.seq(seq__21279_21608);
if(temp__5804__auto___21666){
var seq__21279_21667__$1 = temp__5804__auto___21666;
if(cljs.core.chunked_seq_QMARK_(seq__21279_21667__$1)){
var c__5525__auto___21668 = cljs.core.chunk_first(seq__21279_21667__$1);
var G__21669 = cljs.core.chunk_rest(seq__21279_21667__$1);
var G__21670 = c__5525__auto___21668;
var G__21671 = cljs.core.count(c__5525__auto___21668);
var G__21672 = (0);
seq__21279_21608 = G__21669;
chunk__21283_21609 = G__21670;
count__21284_21610 = G__21671;
i__21285_21611 = G__21672;
continue;
} else {
var node_21673 = cljs.core.first(seq__21279_21667__$1);
if(cljs.core.not(node_21673.shadow$old)){
var path_match_21674 = shadow.cljs.devtools.client.browser.match_paths(node_21673.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21674)){
var new_link_21675 = (function (){var G__21370 = node_21673.cloneNode(true);
G__21370.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21674),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21370;
})();
(node_21673.shadow$old = true);

(new_link_21675.onload = ((function (seq__21279_21608,chunk__21283_21609,count__21284_21610,i__21285_21611,seq__20951,chunk__20953,count__20954,i__20955,new_link_21675,path_match_21674,node_21673,seq__21279_21667__$1,temp__5804__auto___21666,path,map__20948,map__20948__$1,msg,updates,reload_info){
return (function (e){
var seq__21371_21676 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21373_21677 = null;
var count__21374_21678 = (0);
var i__21375_21679 = (0);
while(true){
if((i__21375_21679 < count__21374_21678)){
var map__21393_21680 = chunk__21373_21677.cljs$core$IIndexed$_nth$arity$2(null, i__21375_21679);
var map__21393_21681__$1 = cljs.core.__destructure_map(map__21393_21680);
var task_21682 = map__21393_21681__$1;
var fn_str_21683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21393_21681__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21393_21681__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21685 = goog.getObjectByName(fn_str_21683,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21684)].join(''));

(fn_obj_21685.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21685.cljs$core$IFn$_invoke$arity$2(path,new_link_21675) : fn_obj_21685.call(null, path,new_link_21675));


var G__21686 = seq__21371_21676;
var G__21687 = chunk__21373_21677;
var G__21688 = count__21374_21678;
var G__21689 = (i__21375_21679 + (1));
seq__21371_21676 = G__21686;
chunk__21373_21677 = G__21687;
count__21374_21678 = G__21688;
i__21375_21679 = G__21689;
continue;
} else {
var temp__5804__auto___21690__$1 = cljs.core.seq(seq__21371_21676);
if(temp__5804__auto___21690__$1){
var seq__21371_21692__$1 = temp__5804__auto___21690__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21371_21692__$1)){
var c__5525__auto___21693 = cljs.core.chunk_first(seq__21371_21692__$1);
var G__21694 = cljs.core.chunk_rest(seq__21371_21692__$1);
var G__21695 = c__5525__auto___21693;
var G__21696 = cljs.core.count(c__5525__auto___21693);
var G__21697 = (0);
seq__21371_21676 = G__21694;
chunk__21373_21677 = G__21695;
count__21374_21678 = G__21696;
i__21375_21679 = G__21697;
continue;
} else {
var map__21394_21698 = cljs.core.first(seq__21371_21692__$1);
var map__21394_21699__$1 = cljs.core.__destructure_map(map__21394_21698);
var task_21700 = map__21394_21699__$1;
var fn_str_21701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394_21699__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394_21699__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21703 = goog.getObjectByName(fn_str_21701,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21702)].join(''));

(fn_obj_21703.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21703.cljs$core$IFn$_invoke$arity$2(path,new_link_21675) : fn_obj_21703.call(null, path,new_link_21675));


var G__21704 = cljs.core.next(seq__21371_21692__$1);
var G__21705 = null;
var G__21706 = (0);
var G__21707 = (0);
seq__21371_21676 = G__21704;
chunk__21373_21677 = G__21705;
count__21374_21678 = G__21706;
i__21375_21679 = G__21707;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21673);
});})(seq__21279_21608,chunk__21283_21609,count__21284_21610,i__21285_21611,seq__20951,chunk__20953,count__20954,i__20955,new_link_21675,path_match_21674,node_21673,seq__21279_21667__$1,temp__5804__auto___21666,path,map__20948,map__20948__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21674], 0));

goog.dom.insertSiblingAfter(new_link_21675,node_21673);


var G__21708 = cljs.core.next(seq__21279_21667__$1);
var G__21709 = null;
var G__21710 = (0);
var G__21711 = (0);
seq__21279_21608 = G__21708;
chunk__21283_21609 = G__21709;
count__21284_21610 = G__21710;
i__21285_21611 = G__21711;
continue;
} else {
var G__21712 = cljs.core.next(seq__21279_21667__$1);
var G__21713 = null;
var G__21714 = (0);
var G__21715 = (0);
seq__21279_21608 = G__21712;
chunk__21283_21609 = G__21713;
count__21284_21610 = G__21714;
i__21285_21611 = G__21715;
continue;
}
} else {
var G__21716 = cljs.core.next(seq__21279_21667__$1);
var G__21717 = null;
var G__21718 = (0);
var G__21719 = (0);
seq__21279_21608 = G__21716;
chunk__21283_21609 = G__21717;
count__21284_21610 = G__21718;
i__21285_21611 = G__21719;
continue;
}
}
} else {
}
}
break;
}


var G__21720 = seq__20951;
var G__21721 = chunk__20953;
var G__21722 = count__20954;
var G__21723 = (i__20955 + (1));
seq__20951 = G__21720;
chunk__20953 = G__21721;
count__20954 = G__21722;
i__20955 = G__21723;
continue;
} else {
var G__21724 = seq__20951;
var G__21725 = chunk__20953;
var G__21726 = count__20954;
var G__21727 = (i__20955 + (1));
seq__20951 = G__21724;
chunk__20953 = G__21725;
count__20954 = G__21726;
i__20955 = G__21727;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20951);
if(temp__5804__auto__){
var seq__20951__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20951__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20951__$1);
var G__21728 = cljs.core.chunk_rest(seq__20951__$1);
var G__21729 = c__5525__auto__;
var G__21730 = cljs.core.count(c__5525__auto__);
var G__21731 = (0);
seq__20951 = G__21728;
chunk__20953 = G__21729;
count__20954 = G__21730;
i__20955 = G__21731;
continue;
} else {
var path = cljs.core.first(seq__20951__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21395_21732 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21399_21733 = null;
var count__21400_21734 = (0);
var i__21401_21735 = (0);
while(true){
if((i__21401_21735 < count__21400_21734)){
var node_21736 = chunk__21399_21733.cljs$core$IIndexed$_nth$arity$2(null, i__21401_21735);
if(cljs.core.not(node_21736.shadow$old)){
var path_match_21737 = shadow.cljs.devtools.client.browser.match_paths(node_21736.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21737)){
var new_link_21738 = (function (){var G__21441 = node_21736.cloneNode(true);
G__21441.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21737),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21441;
})();
(node_21736.shadow$old = true);

(new_link_21738.onload = ((function (seq__21395_21732,chunk__21399_21733,count__21400_21734,i__21401_21735,seq__20951,chunk__20953,count__20954,i__20955,new_link_21738,path_match_21737,node_21736,path,seq__20951__$1,temp__5804__auto__,map__20948,map__20948__$1,msg,updates,reload_info){
return (function (e){
var seq__21442_21739 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21444_21740 = null;
var count__21445_21741 = (0);
var i__21446_21742 = (0);
while(true){
if((i__21446_21742 < count__21445_21741)){
var map__21452_21743 = chunk__21444_21740.cljs$core$IIndexed$_nth$arity$2(null, i__21446_21742);
var map__21452_21744__$1 = cljs.core.__destructure_map(map__21452_21743);
var task_21745 = map__21452_21744__$1;
var fn_str_21746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21452_21744__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21452_21744__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21748 = goog.getObjectByName(fn_str_21746,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21747)].join(''));

(fn_obj_21748.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21748.cljs$core$IFn$_invoke$arity$2(path,new_link_21738) : fn_obj_21748.call(null, path,new_link_21738));


var G__21749 = seq__21442_21739;
var G__21750 = chunk__21444_21740;
var G__21751 = count__21445_21741;
var G__21752 = (i__21446_21742 + (1));
seq__21442_21739 = G__21749;
chunk__21444_21740 = G__21750;
count__21445_21741 = G__21751;
i__21446_21742 = G__21752;
continue;
} else {
var temp__5804__auto___21753__$1 = cljs.core.seq(seq__21442_21739);
if(temp__5804__auto___21753__$1){
var seq__21442_21754__$1 = temp__5804__auto___21753__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21442_21754__$1)){
var c__5525__auto___21755 = cljs.core.chunk_first(seq__21442_21754__$1);
var G__21756 = cljs.core.chunk_rest(seq__21442_21754__$1);
var G__21757 = c__5525__auto___21755;
var G__21758 = cljs.core.count(c__5525__auto___21755);
var G__21759 = (0);
seq__21442_21739 = G__21756;
chunk__21444_21740 = G__21757;
count__21445_21741 = G__21758;
i__21446_21742 = G__21759;
continue;
} else {
var map__21453_21760 = cljs.core.first(seq__21442_21754__$1);
var map__21453_21761__$1 = cljs.core.__destructure_map(map__21453_21760);
var task_21762 = map__21453_21761__$1;
var fn_str_21763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21453_21761__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21453_21761__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21765 = goog.getObjectByName(fn_str_21763,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21764)].join(''));

(fn_obj_21765.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21765.cljs$core$IFn$_invoke$arity$2(path,new_link_21738) : fn_obj_21765.call(null, path,new_link_21738));


var G__21766 = cljs.core.next(seq__21442_21754__$1);
var G__21767 = null;
var G__21768 = (0);
var G__21769 = (0);
seq__21442_21739 = G__21766;
chunk__21444_21740 = G__21767;
count__21445_21741 = G__21768;
i__21446_21742 = G__21769;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21736);
});})(seq__21395_21732,chunk__21399_21733,count__21400_21734,i__21401_21735,seq__20951,chunk__20953,count__20954,i__20955,new_link_21738,path_match_21737,node_21736,path,seq__20951__$1,temp__5804__auto__,map__20948,map__20948__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21737], 0));

goog.dom.insertSiblingAfter(new_link_21738,node_21736);


var G__21770 = seq__21395_21732;
var G__21771 = chunk__21399_21733;
var G__21772 = count__21400_21734;
var G__21773 = (i__21401_21735 + (1));
seq__21395_21732 = G__21770;
chunk__21399_21733 = G__21771;
count__21400_21734 = G__21772;
i__21401_21735 = G__21773;
continue;
} else {
var G__21774 = seq__21395_21732;
var G__21775 = chunk__21399_21733;
var G__21776 = count__21400_21734;
var G__21777 = (i__21401_21735 + (1));
seq__21395_21732 = G__21774;
chunk__21399_21733 = G__21775;
count__21400_21734 = G__21776;
i__21401_21735 = G__21777;
continue;
}
} else {
var G__21778 = seq__21395_21732;
var G__21779 = chunk__21399_21733;
var G__21780 = count__21400_21734;
var G__21781 = (i__21401_21735 + (1));
seq__21395_21732 = G__21778;
chunk__21399_21733 = G__21779;
count__21400_21734 = G__21780;
i__21401_21735 = G__21781;
continue;
}
} else {
var temp__5804__auto___21782__$1 = cljs.core.seq(seq__21395_21732);
if(temp__5804__auto___21782__$1){
var seq__21395_21783__$1 = temp__5804__auto___21782__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21395_21783__$1)){
var c__5525__auto___21784 = cljs.core.chunk_first(seq__21395_21783__$1);
var G__21785 = cljs.core.chunk_rest(seq__21395_21783__$1);
var G__21786 = c__5525__auto___21784;
var G__21787 = cljs.core.count(c__5525__auto___21784);
var G__21788 = (0);
seq__21395_21732 = G__21785;
chunk__21399_21733 = G__21786;
count__21400_21734 = G__21787;
i__21401_21735 = G__21788;
continue;
} else {
var node_21789 = cljs.core.first(seq__21395_21783__$1);
if(cljs.core.not(node_21789.shadow$old)){
var path_match_21790 = shadow.cljs.devtools.client.browser.match_paths(node_21789.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21790)){
var new_link_21791 = (function (){var G__21454 = node_21789.cloneNode(true);
G__21454.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21790),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21454;
})();
(node_21789.shadow$old = true);

(new_link_21791.onload = ((function (seq__21395_21732,chunk__21399_21733,count__21400_21734,i__21401_21735,seq__20951,chunk__20953,count__20954,i__20955,new_link_21791,path_match_21790,node_21789,seq__21395_21783__$1,temp__5804__auto___21782__$1,path,seq__20951__$1,temp__5804__auto__,map__20948,map__20948__$1,msg,updates,reload_info){
return (function (e){
var seq__21457_21792 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21459_21793 = null;
var count__21460_21794 = (0);
var i__21461_21795 = (0);
while(true){
if((i__21461_21795 < count__21460_21794)){
var map__21465_21796 = chunk__21459_21793.cljs$core$IIndexed$_nth$arity$2(null, i__21461_21795);
var map__21465_21797__$1 = cljs.core.__destructure_map(map__21465_21796);
var task_21798 = map__21465_21797__$1;
var fn_str_21799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465_21797__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465_21797__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21802 = goog.getObjectByName(fn_str_21799,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21800)].join(''));

(fn_obj_21802.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21802.cljs$core$IFn$_invoke$arity$2(path,new_link_21791) : fn_obj_21802.call(null, path,new_link_21791));


var G__21803 = seq__21457_21792;
var G__21804 = chunk__21459_21793;
var G__21805 = count__21460_21794;
var G__21806 = (i__21461_21795 + (1));
seq__21457_21792 = G__21803;
chunk__21459_21793 = G__21804;
count__21460_21794 = G__21805;
i__21461_21795 = G__21806;
continue;
} else {
var temp__5804__auto___21807__$2 = cljs.core.seq(seq__21457_21792);
if(temp__5804__auto___21807__$2){
var seq__21457_21808__$1 = temp__5804__auto___21807__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21457_21808__$1)){
var c__5525__auto___21809 = cljs.core.chunk_first(seq__21457_21808__$1);
var G__21811 = cljs.core.chunk_rest(seq__21457_21808__$1);
var G__21812 = c__5525__auto___21809;
var G__21813 = cljs.core.count(c__5525__auto___21809);
var G__21814 = (0);
seq__21457_21792 = G__21811;
chunk__21459_21793 = G__21812;
count__21460_21794 = G__21813;
i__21461_21795 = G__21814;
continue;
} else {
var map__21467_21815 = cljs.core.first(seq__21457_21808__$1);
var map__21467_21816__$1 = cljs.core.__destructure_map(map__21467_21815);
var task_21817 = map__21467_21816__$1;
var fn_str_21818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467_21816__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467_21816__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21820 = goog.getObjectByName(fn_str_21818,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21819)].join(''));

(fn_obj_21820.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21820.cljs$core$IFn$_invoke$arity$2(path,new_link_21791) : fn_obj_21820.call(null, path,new_link_21791));


var G__21821 = cljs.core.next(seq__21457_21808__$1);
var G__21822 = null;
var G__21823 = (0);
var G__21824 = (0);
seq__21457_21792 = G__21821;
chunk__21459_21793 = G__21822;
count__21460_21794 = G__21823;
i__21461_21795 = G__21824;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21789);
});})(seq__21395_21732,chunk__21399_21733,count__21400_21734,i__21401_21735,seq__20951,chunk__20953,count__20954,i__20955,new_link_21791,path_match_21790,node_21789,seq__21395_21783__$1,temp__5804__auto___21782__$1,path,seq__20951__$1,temp__5804__auto__,map__20948,map__20948__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21790], 0));

goog.dom.insertSiblingAfter(new_link_21791,node_21789);


var G__21825 = cljs.core.next(seq__21395_21783__$1);
var G__21826 = null;
var G__21827 = (0);
var G__21828 = (0);
seq__21395_21732 = G__21825;
chunk__21399_21733 = G__21826;
count__21400_21734 = G__21827;
i__21401_21735 = G__21828;
continue;
} else {
var G__21830 = cljs.core.next(seq__21395_21783__$1);
var G__21831 = null;
var G__21832 = (0);
var G__21833 = (0);
seq__21395_21732 = G__21830;
chunk__21399_21733 = G__21831;
count__21400_21734 = G__21832;
i__21401_21735 = G__21833;
continue;
}
} else {
var G__21834 = cljs.core.next(seq__21395_21783__$1);
var G__21835 = null;
var G__21836 = (0);
var G__21837 = (0);
seq__21395_21732 = G__21834;
chunk__21399_21733 = G__21835;
count__21400_21734 = G__21836;
i__21401_21735 = G__21837;
continue;
}
}
} else {
}
}
break;
}


var G__21838 = cljs.core.next(seq__20951__$1);
var G__21839 = null;
var G__21840 = (0);
var G__21841 = (0);
seq__20951 = G__21838;
chunk__20953 = G__21839;
count__20954 = G__21840;
i__20955 = G__21841;
continue;
} else {
var G__21842 = cljs.core.next(seq__20951__$1);
var G__21843 = null;
var G__21844 = (0);
var G__21845 = (0);
seq__20951 = G__21842;
chunk__20953 = G__21843;
count__20954 = G__21844;
i__20955 = G__21845;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21506){
var map__21507 = p__21506;
var map__21507__$1 = cljs.core.__destructure_map(map__21507);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21507__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21508,done,error){
var map__21509 = p__21508;
var map__21509__$1 = cljs.core.__destructure_map(map__21509);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21509__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21510,done,error){
var map__21511 = p__21510;
var map__21511__$1 = cljs.core.__destructure_map(map__21511);
var msg = map__21511__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21511__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21511__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21511__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21512){
var map__21513 = p__21512;
var map__21513__$1 = cljs.core.__destructure_map(map__21513);
var src = map__21513__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21514 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21514) : done.call(null, G__21514));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21515){
var map__21516 = p__21515;
var map__21516__$1 = cljs.core.__destructure_map(map__21516);
var msg__$1 = map__21516__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21516__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21517){var ex = e21517;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21518){
var map__21519 = p__21518;
var map__21519__$1 = cljs.core.__destructure_map(map__21519);
var env = map__21519__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21519__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21520){
var map__21521 = p__21520;
var map__21521__$1 = cljs.core.__destructure_map(map__21521);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21521__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21521__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21522){
var map__21523 = p__21522;
var map__21523__$1 = cljs.core.__destructure_map(map__21523);
var svc = map__21523__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21523__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
