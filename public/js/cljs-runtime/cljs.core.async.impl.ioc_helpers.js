goog.provide('cljs.core.async.impl.ioc_helpers');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340 = (function (f,meta13341){
this.f = f;
this.meta13341 = meta13341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13342,meta13341__$1){
var self__ = this;
var _13342__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340(self__.f,meta13341__$1));
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13342){
var self__ = this;
var _13342__$1 = this;
return self__.meta13341;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta13341","meta13341",729959140,null)], null);
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.cljs$lang$type = true);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers13340");

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers13340");
}));

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers13340.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers13340 = (function cljs$core$async$impl$ioc_helpers$__GT_t_cljs$core$async$impl$ioc_helpers13340(f,meta13341){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340(f,meta13341));
});


cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13340(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__13369 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__13369.cljs$core$IFn$_invoke$arity$1 ? fexpr__13369.cljs$core$IFn$_invoke$arity$1(state) : fexpr__13369.call(null, state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e13375){if((e13375 instanceof Object)){
var ex = e13375;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null, );

throw ex;
} else {
throw e13375;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5802__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null, cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_13385_13433 = state;
(statearr_13385_13433[(2)] = x);

(statearr_13385_13433[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
var statearr_13389_13434 = state;
(statearr_13389_13434[(2)] = cljs.core.deref(cb));

(statearr_13389_13434[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5802__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null, val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_13395_13439 = state;
(statearr_13395_13439[(2)] = ret_val);

(statearr_13395_13439[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
var statearr_13411_13440 = state;
(statearr_13411_13440[(2)] = cljs.core.deref(cb));

(statearr_13411_13440[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null, value,cljs.core.async.impl.ioc_helpers.fn_handler((function (_){
return null;
})));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null, );

return c;
});

//# sourceMappingURL=cljs.core.async.impl.ioc_helpers.js.map
