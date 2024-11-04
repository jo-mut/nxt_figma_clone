goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18276){
var map__18277 = p__18276;
var map__18277__$1 = cljs.core.__destructure_map(map__18277);
var m = map__18277__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18277__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18277__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18289_18701 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18290_18702 = null;
var count__18291_18703 = (0);
var i__18292_18704 = (0);
while(true){
if((i__18292_18704 < count__18291_18703)){
var f_18710 = chunk__18290_18702.cljs$core$IIndexed$_nth$arity$2(null, i__18292_18704);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18710], 0));


var G__18711 = seq__18289_18701;
var G__18712 = chunk__18290_18702;
var G__18713 = count__18291_18703;
var G__18714 = (i__18292_18704 + (1));
seq__18289_18701 = G__18711;
chunk__18290_18702 = G__18712;
count__18291_18703 = G__18713;
i__18292_18704 = G__18714;
continue;
} else {
var temp__5804__auto___18715 = cljs.core.seq(seq__18289_18701);
if(temp__5804__auto___18715){
var seq__18289_18721__$1 = temp__5804__auto___18715;
if(cljs.core.chunked_seq_QMARK_(seq__18289_18721__$1)){
var c__5525__auto___18722 = cljs.core.chunk_first(seq__18289_18721__$1);
var G__18723 = cljs.core.chunk_rest(seq__18289_18721__$1);
var G__18724 = c__5525__auto___18722;
var G__18725 = cljs.core.count(c__5525__auto___18722);
var G__18726 = (0);
seq__18289_18701 = G__18723;
chunk__18290_18702 = G__18724;
count__18291_18703 = G__18725;
i__18292_18704 = G__18726;
continue;
} else {
var f_18727 = cljs.core.first(seq__18289_18721__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18727], 0));


var G__18729 = cljs.core.next(seq__18289_18721__$1);
var G__18730 = null;
var G__18731 = (0);
var G__18732 = (0);
seq__18289_18701 = G__18729;
chunk__18290_18702 = G__18730;
count__18291_18703 = G__18731;
i__18292_18704 = G__18732;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18733 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18733], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18733)))?cljs.core.second(arglists_18733):arglists_18733)], 0));
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
var seq__18314_18739 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18315_18740 = null;
var count__18316_18741 = (0);
var i__18317_18742 = (0);
while(true){
if((i__18317_18742 < count__18316_18741)){
var vec__18336_18743 = chunk__18315_18740.cljs$core$IIndexed$_nth$arity$2(null, i__18317_18742);
var name_18744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18336_18743,(0),null);
var map__18339_18745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18336_18743,(1),null);
var map__18339_18746__$1 = cljs.core.__destructure_map(map__18339_18745);
var doc_18747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339_18746__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339_18746__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18744], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18748], 0));

if(cljs.core.truth_(doc_18747)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18747], 0));
} else {
}


var G__18751 = seq__18314_18739;
var G__18752 = chunk__18315_18740;
var G__18753 = count__18316_18741;
var G__18754 = (i__18317_18742 + (1));
seq__18314_18739 = G__18751;
chunk__18315_18740 = G__18752;
count__18316_18741 = G__18753;
i__18317_18742 = G__18754;
continue;
} else {
var temp__5804__auto___18756 = cljs.core.seq(seq__18314_18739);
if(temp__5804__auto___18756){
var seq__18314_18757__$1 = temp__5804__auto___18756;
if(cljs.core.chunked_seq_QMARK_(seq__18314_18757__$1)){
var c__5525__auto___18758 = cljs.core.chunk_first(seq__18314_18757__$1);
var G__18759 = cljs.core.chunk_rest(seq__18314_18757__$1);
var G__18760 = c__5525__auto___18758;
var G__18761 = cljs.core.count(c__5525__auto___18758);
var G__18762 = (0);
seq__18314_18739 = G__18759;
chunk__18315_18740 = G__18760;
count__18316_18741 = G__18761;
i__18317_18742 = G__18762;
continue;
} else {
var vec__18361_18763 = cljs.core.first(seq__18314_18757__$1);
var name_18764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18361_18763,(0),null);
var map__18364_18765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18361_18763,(1),null);
var map__18364_18766__$1 = cljs.core.__destructure_map(map__18364_18765);
var doc_18767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18364_18766__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18364_18766__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18764], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18768], 0));

if(cljs.core.truth_(doc_18767)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18767], 0));
} else {
}


var G__18777 = cljs.core.next(seq__18314_18757__$1);
var G__18778 = null;
var G__18779 = (0);
var G__18780 = (0);
seq__18314_18739 = G__18777;
chunk__18315_18740 = G__18778;
count__18316_18741 = G__18779;
i__18317_18742 = G__18780;
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

var seq__18369 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18370 = null;
var count__18371 = (0);
var i__18372 = (0);
while(true){
if((i__18372 < count__18371)){
var role = chunk__18370.cljs$core$IIndexed$_nth$arity$2(null, i__18372);
var temp__5804__auto___18784__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18784__$1)){
var spec_18785 = temp__5804__auto___18784__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18785)], 0));
} else {
}


var G__18786 = seq__18369;
var G__18787 = chunk__18370;
var G__18788 = count__18371;
var G__18789 = (i__18372 + (1));
seq__18369 = G__18786;
chunk__18370 = G__18787;
count__18371 = G__18788;
i__18372 = G__18789;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18369);
if(temp__5804__auto____$1){
var seq__18369__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18369__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18369__$1);
var G__18791 = cljs.core.chunk_rest(seq__18369__$1);
var G__18792 = c__5525__auto__;
var G__18793 = cljs.core.count(c__5525__auto__);
var G__18794 = (0);
seq__18369 = G__18791;
chunk__18370 = G__18792;
count__18371 = G__18793;
i__18372 = G__18794;
continue;
} else {
var role = cljs.core.first(seq__18369__$1);
var temp__5804__auto___18795__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18795__$2)){
var spec_18796 = temp__5804__auto___18795__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18796)], 0));
} else {
}


var G__18797 = cljs.core.next(seq__18369__$1);
var G__18798 = null;
var G__18799 = (0);
var G__18800 = (0);
seq__18369 = G__18797;
chunk__18370 = G__18798;
count__18371 = G__18799;
i__18372 = G__18800;
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
var map__18417 = datafied_throwable;
var map__18417__$1 = cljs.core.__destructure_map(map__18417);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18417__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18417__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18417__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18418 = cljs.core.last(via);
var map__18418__$1 = cljs.core.__destructure_map(map__18418);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18418__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18418__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18418__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18419 = data;
var map__18419__$1 = cljs.core.__destructure_map(map__18419);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18420 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18420__$1 = cljs.core.__destructure_map(map__18420);
var top_data = map__18420__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18420__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18440 = phase;
var G__18440__$1 = (((G__18440 instanceof cljs.core.Keyword))?G__18440.fqn:null);
switch (G__18440__$1) {
case "read-source":
var map__18443 = data;
var map__18443__$1 = cljs.core.__destructure_map(map__18443);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18443__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18443__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18444 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18444__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18444,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18444);
var G__18444__$2 = (cljs.core.truth_((function (){var fexpr__18445 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18445.cljs$core$IFn$_invoke$arity$1 ? fexpr__18445.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18445.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18444__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18444__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18444__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18444__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18453 = top_data;
var G__18453__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18453,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18453);
var G__18453__$2 = (cljs.core.truth_((function (){var fexpr__18458 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18458.cljs$core$IFn$_invoke$arity$1 ? fexpr__18458.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18458.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18453__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18453__$1);
var G__18453__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18453__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18453__$2);
var G__18453__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18453__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18453__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18453__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18453__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18462 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18462,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18462,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18462,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18462,(3),null);
var G__18467 = top_data;
var G__18467__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18467);
var G__18467__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18467__$1);
var G__18467__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18467__$2);
var G__18467__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18467__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18467__$4;
}

break;
case "execution":
var vec__18487 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18410_SHARP_){
var or__5002__auto__ = (p1__18410_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18503 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18503.cljs$core$IFn$_invoke$arity$1 ? fexpr__18503.cljs$core$IFn$_invoke$arity$1(p1__18410_SHARP_) : fexpr__18503.call(null, p1__18410_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18520 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18520__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18520,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18520);
var G__18520__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18520__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18520__$1);
var G__18520__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18520__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18520__$2);
var G__18520__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18520__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18520__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18520__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18520__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18440__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18604){
var map__18605 = p__18604;
var map__18605__$1 = cljs.core.__destructure_map(map__18605);
var triage_data = map__18605__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__18629 = phase;
var G__18629__$1 = (((G__18629 instanceof cljs.core.Keyword))?G__18629.fqn:null);
switch (G__18629__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18631 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18632 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18633 = loc;
var G__18634 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18635_18852 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18636_18853 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18637_18854 = true;
var _STAR_print_fn_STAR__temp_val__18638_18855 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18637_18854);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18638_18855);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18580_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18580_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18636_18853);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18635_18852);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18631,G__18632,G__18633,G__18634) : format.call(null, G__18631,G__18632,G__18633,G__18634));

break;
case "macroexpansion":
var G__18649 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18650 = cause_type;
var G__18651 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18652 = loc;
var G__18653 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18649,G__18650,G__18651,G__18652,G__18653) : format.call(null, G__18649,G__18650,G__18651,G__18652,G__18653));

break;
case "compile-syntax-check":
var G__18658 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18659 = cause_type;
var G__18660 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18661 = loc;
var G__18662 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18658,G__18659,G__18660,G__18661,G__18662) : format.call(null, G__18658,G__18659,G__18660,G__18661,G__18662));

break;
case "compilation":
var G__18665 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18666 = cause_type;
var G__18667 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18668 = loc;
var G__18669 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18665,G__18666,G__18667,G__18668,G__18669) : format.call(null, G__18665,G__18666,G__18667,G__18668,G__18669));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18672 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18673 = symbol;
var G__18674 = loc;
var G__18675 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18676_18884 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18677_18885 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18678_18886 = true;
var _STAR_print_fn_STAR__temp_val__18679_18887 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18678_18886);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18679_18887);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18597_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18597_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18677_18885);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18676_18884);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18672,G__18673,G__18674,G__18675) : format.call(null, G__18672,G__18673,G__18674,G__18675));
} else {
var G__18687 = "Execution error%s at %s(%s).\n%s\n";
var G__18688 = cause_type;
var G__18689 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18690 = loc;
var G__18691 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18687,G__18688,G__18689,G__18690,G__18691) : format.call(null, G__18687,G__18688,G__18689,G__18690,G__18691));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18629__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
