goog.provide('react.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
react.core.use_effect = (function react$core$use_effect(handler,deps){
return module$node_modules$react$index.useEffect(handler,deps);
});
react.core.use_callback = (function react$core$use_callback(callback,deps){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback,new cljs.core.Keyword(null,"deps","deps",1883360319),deps,new cljs.core.Keyword(null,"memoized-fn","memoized-fn",323008772),(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ))], null));
return (function (new_deps){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new_deps)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"deps","deps",1883360319),new_deps);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"memoized-fn","memoized-fn",323008772),(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, )));
} else {
return new cljs.core.Keyword(null,"memoized-fn","memoized-fn",323008772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}
});
});

//# sourceMappingURL=react.core.js.map
