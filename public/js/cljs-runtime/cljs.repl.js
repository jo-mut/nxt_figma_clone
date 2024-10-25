goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18960){
var map__18961 = p__18960;
var map__18961__$1 = cljs.core.__destructure_map(map__18961);
var m = map__18961__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18965_19283 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18966_19284 = null;
var count__18967_19285 = (0);
var i__18968_19286 = (0);
while(true){
if((i__18968_19286 < count__18967_19285)){
var f_19287 = chunk__18966_19284.cljs$core$IIndexed$_nth$arity$2(null, i__18968_19286);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19287], 0));


var G__19288 = seq__18965_19283;
var G__19289 = chunk__18966_19284;
var G__19290 = count__18967_19285;
var G__19291 = (i__18968_19286 + (1));
seq__18965_19283 = G__19288;
chunk__18966_19284 = G__19289;
count__18967_19285 = G__19290;
i__18968_19286 = G__19291;
continue;
} else {
var temp__5804__auto___19296 = cljs.core.seq(seq__18965_19283);
if(temp__5804__auto___19296){
var seq__18965_19297__$1 = temp__5804__auto___19296;
if(cljs.core.chunked_seq_QMARK_(seq__18965_19297__$1)){
var c__5525__auto___19298 = cljs.core.chunk_first(seq__18965_19297__$1);
var G__19299 = cljs.core.chunk_rest(seq__18965_19297__$1);
var G__19300 = c__5525__auto___19298;
var G__19301 = cljs.core.count(c__5525__auto___19298);
var G__19302 = (0);
seq__18965_19283 = G__19299;
chunk__18966_19284 = G__19300;
count__18967_19285 = G__19301;
i__18968_19286 = G__19302;
continue;
} else {
var f_19303 = cljs.core.first(seq__18965_19297__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19303], 0));


var G__19304 = cljs.core.next(seq__18965_19297__$1);
var G__19305 = null;
var G__19306 = (0);
var G__19307 = (0);
seq__18965_19283 = G__19304;
chunk__18966_19284 = G__19305;
count__18967_19285 = G__19306;
i__18968_19286 = G__19307;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19308 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19308], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19308)))?cljs.core.second(arglists_19308):arglists_19308)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18987_19312 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18988_19313 = null;
var count__18989_19314 = (0);
var i__18990_19315 = (0);
while(true){
if((i__18990_19315 < count__18989_19314)){
var vec__19018_19316 = chunk__18988_19313.cljs$core$IIndexed$_nth$arity$2(null, i__18990_19315);
var name_19317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19018_19316,(0),null);
var map__19021_19318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19018_19316,(1),null);
var map__19021_19319__$1 = cljs.core.__destructure_map(map__19021_19318);
var doc_19320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19021_19319__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19021_19319__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19317], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19321], 0));

if(cljs.core.truth_(doc_19320)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19320], 0));
} else {
}


var G__19326 = seq__18987_19312;
var G__19327 = chunk__18988_19313;
var G__19328 = count__18989_19314;
var G__19329 = (i__18990_19315 + (1));
seq__18987_19312 = G__19326;
chunk__18988_19313 = G__19327;
count__18989_19314 = G__19328;
i__18990_19315 = G__19329;
continue;
} else {
var temp__5804__auto___19330 = cljs.core.seq(seq__18987_19312);
if(temp__5804__auto___19330){
var seq__18987_19331__$1 = temp__5804__auto___19330;
if(cljs.core.chunked_seq_QMARK_(seq__18987_19331__$1)){
var c__5525__auto___19332 = cljs.core.chunk_first(seq__18987_19331__$1);
var G__19333 = cljs.core.chunk_rest(seq__18987_19331__$1);
var G__19334 = c__5525__auto___19332;
var G__19335 = cljs.core.count(c__5525__auto___19332);
var G__19336 = (0);
seq__18987_19312 = G__19333;
chunk__18988_19313 = G__19334;
count__18989_19314 = G__19335;
i__18990_19315 = G__19336;
continue;
} else {
var vec__19034_19337 = cljs.core.first(seq__18987_19331__$1);
var name_19338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034_19337,(0),null);
var map__19037_19339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034_19337,(1),null);
var map__19037_19340__$1 = cljs.core.__destructure_map(map__19037_19339);
var doc_19341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037_19340__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037_19340__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19338], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19342], 0));

if(cljs.core.truth_(doc_19341)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19341], 0));
} else {
}


var G__19347 = cljs.core.next(seq__18987_19331__$1);
var G__19348 = null;
var G__19349 = (0);
var G__19350 = (0);
seq__18987_19312 = G__19347;
chunk__18988_19313 = G__19348;
count__18989_19314 = G__19349;
i__18990_19315 = G__19350;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19050 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19051 = null;
var count__19052 = (0);
var i__19053 = (0);
while(true){
if((i__19053 < count__19052)){
var role = chunk__19051.cljs$core$IIndexed$_nth$arity$2(null, i__19053);
var temp__5804__auto___19355__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19355__$1)){
var spec_19356 = temp__5804__auto___19355__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19356)], 0));
} else {
}


var G__19359 = seq__19050;
var G__19360 = chunk__19051;
var G__19361 = count__19052;
var G__19362 = (i__19053 + (1));
seq__19050 = G__19359;
chunk__19051 = G__19360;
count__19052 = G__19361;
i__19053 = G__19362;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19050);
if(temp__5804__auto____$1){
var seq__19050__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19050__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19050__$1);
var G__19363 = cljs.core.chunk_rest(seq__19050__$1);
var G__19364 = c__5525__auto__;
var G__19365 = cljs.core.count(c__5525__auto__);
var G__19366 = (0);
seq__19050 = G__19363;
chunk__19051 = G__19364;
count__19052 = G__19365;
i__19053 = G__19366;
continue;
} else {
var role = cljs.core.first(seq__19050__$1);
var temp__5804__auto___19368__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19368__$2)){
var spec_19370 = temp__5804__auto___19368__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19370)], 0));
} else {
}


var G__19371 = cljs.core.next(seq__19050__$1);
var G__19372 = null;
var G__19373 = (0);
var G__19374 = (0);
seq__19050 = G__19371;
chunk__19051 = G__19372;
count__19052 = G__19373;
i__19053 = G__19374;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19122 = datafied_throwable;
var map__19122__$1 = cljs.core.__destructure_map(map__19122);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19122__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19123 = cljs.core.last(via);
var map__19123__$1 = cljs.core.__destructure_map(map__19123);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19124 = data;
var map__19124__$1 = cljs.core.__destructure_map(map__19124);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19124__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19124__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19124__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19125 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19125__$1 = cljs.core.__destructure_map(map__19125);
var top_data = map__19125__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19125__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19151 = phase;
var G__19151__$1 = (((G__19151 instanceof cljs.core.Keyword))?G__19151.fqn:null);
switch (G__19151__$1) {
case "read-source":
var map__19157 = data;
var map__19157__$1 = cljs.core.__destructure_map(map__19157);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19157__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19157__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19158 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19158__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19158,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19158);
var G__19158__$2 = (cljs.core.truth_((function (){var fexpr__19166 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19166.cljs$core$IFn$_invoke$arity$1 ? fexpr__19166.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19166.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19158__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19158__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19158__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19168 = top_data;
var G__19168__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19168,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19168);
var G__19168__$2 = (cljs.core.truth_((function (){var fexpr__19169 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19169.cljs$core$IFn$_invoke$arity$1 ? fexpr__19169.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19169.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19168__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19168__$1);
var G__19168__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19168__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19168__$2);
var G__19168__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19168__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19168__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19168__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19168__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19186 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186,(3),null);
var G__19191 = top_data;
var G__19191__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19191);
var G__19191__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19191__$1);
var G__19191__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19191__$2);
var G__19191__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19191__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19191__$4;
}

break;
case "execution":
var vec__19214 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19214,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19214,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19214,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19214,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19105_SHARP_){
var or__5002__auto__ = (p1__19105_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19217 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19217.cljs$core$IFn$_invoke$arity$1 ? fexpr__19217.cljs$core$IFn$_invoke$arity$1(p1__19105_SHARP_) : fexpr__19217.call(null, p1__19105_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19218 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19218__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19218,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19218);
var G__19218__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19218__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19218__$1);
var G__19218__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19218__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19218__$2);
var G__19218__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19218__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19218__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19218__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19218__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19151__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19223){
var map__19224 = p__19223;
var map__19224__$1 = cljs.core.__destructure_map(map__19224);
var triage_data = map__19224__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19229 = phase;
var G__19229__$1 = (((G__19229 instanceof cljs.core.Keyword))?G__19229.fqn:null);
switch (G__19229__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19231 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19232 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19233 = loc;
var G__19234 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19235_19443 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19236_19444 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19237_19445 = true;
var _STAR_print_fn_STAR__temp_val__19238_19446 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19237_19445);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19238_19446);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19221_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19221_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19236_19444);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19235_19443);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19231,G__19232,G__19233,G__19234) : format.call(null, G__19231,G__19232,G__19233,G__19234));

break;
case "macroexpansion":
var G__19240 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19241 = cause_type;
var G__19242 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19243 = loc;
var G__19244 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19240,G__19241,G__19242,G__19243,G__19244) : format.call(null, G__19240,G__19241,G__19242,G__19243,G__19244));

break;
case "compile-syntax-check":
var G__19248 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19249 = cause_type;
var G__19250 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19251 = loc;
var G__19252 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19248,G__19249,G__19250,G__19251,G__19252) : format.call(null, G__19248,G__19249,G__19250,G__19251,G__19252));

break;
case "compilation":
var G__19253 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19254 = cause_type;
var G__19255 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19256 = loc;
var G__19257 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19253,G__19254,G__19255,G__19256,G__19257) : format.call(null, G__19253,G__19254,G__19255,G__19256,G__19257));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19259 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19260 = symbol;
var G__19261 = loc;
var G__19262 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19264_19469 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19265_19470 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19266_19471 = true;
var _STAR_print_fn_STAR__temp_val__19267_19472 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19266_19471);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19267_19472);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19222_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19222_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19265_19470);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19264_19469);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19259,G__19260,G__19261,G__19262) : format.call(null, G__19259,G__19260,G__19261,G__19262));
} else {
var G__19268 = "Execution error%s at %s(%s).\n%s\n";
var G__19269 = cause_type;
var G__19270 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19271 = loc;
var G__19272 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19268,G__19269,G__19270,G__19271,G__19272) : format.call(null, G__19268,G__19269,G__19270,G__19271,G__19272));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19229__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
