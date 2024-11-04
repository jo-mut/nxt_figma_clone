goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14235 = (function (f,blockable,meta14236){
this.f = f;
this.blockable = blockable;
this.meta14236 = meta14236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14237,meta14236__$1){
var self__ = this;
var _14237__$1 = this;
return (new cljs.core.async.t_cljs$core$async14235(self__.f,self__.blockable,meta14236__$1));
}));

(cljs.core.async.t_cljs$core$async14235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14237){
var self__ = this;
var _14237__$1 = this;
return self__.meta14236;
}));

(cljs.core.async.t_cljs$core$async14235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14236","meta14236",794539569,null)], null);
}));

(cljs.core.async.t_cljs$core$async14235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14235");

(cljs.core.async.t_cljs$core$async14235.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14235.
 */
cljs.core.async.__GT_t_cljs$core$async14235 = (function cljs$core$async$__GT_t_cljs$core$async14235(f,blockable,meta14236){
return (new cljs.core.async.t_cljs$core$async14235(f,blockable,meta14236));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14231 = arguments.length;
switch (G__14231) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14235(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14314 = arguments.length;
switch (G__14314) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14339 = arguments.length;
switch (G__14339) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14347 = arguments.length;
switch (G__14347) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17933 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17933) : fn1.call(null, val_17933));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17933) : fn1.call(null, val_17933));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14350 = arguments.length;
switch (G__14350) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17937 = n;
var x_17938 = (0);
while(true){
if((x_17938 < n__5593__auto___17937)){
(a[x_17938] = x_17938);

var G__17939 = (x_17938 + (1));
x_17938 = G__17939;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14368 = (function (flag,meta14369){
this.flag = flag;
this.meta14369 = meta14369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14370,meta14369__$1){
var self__ = this;
var _14370__$1 = this;
return (new cljs.core.async.t_cljs$core$async14368(self__.flag,meta14369__$1));
}));

(cljs.core.async.t_cljs$core$async14368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14370){
var self__ = this;
var _14370__$1 = this;
return self__.meta14369;
}));

(cljs.core.async.t_cljs$core$async14368.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14368.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14369","meta14369",-422268398,null)], null);
}));

(cljs.core.async.t_cljs$core$async14368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14368");

(cljs.core.async.t_cljs$core$async14368.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14368.
 */
cljs.core.async.__GT_t_cljs$core$async14368 = (function cljs$core$async$__GT_t_cljs$core$async14368(flag,meta14369){
return (new cljs.core.async.t_cljs$core$async14368(flag,meta14369));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14368(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14410 = (function (flag,cb,meta14411){
this.flag = flag;
this.cb = cb;
this.meta14411 = meta14411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14412,meta14411__$1){
var self__ = this;
var _14412__$1 = this;
return (new cljs.core.async.t_cljs$core$async14410(self__.flag,self__.cb,meta14411__$1));
}));

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14412){
var self__ = this;
var _14412__$1 = this;
return self__.meta14411;
}));

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14411","meta14411",-1345906566,null)], null);
}));

(cljs.core.async.t_cljs$core$async14410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14410");

(cljs.core.async.t_cljs$core$async14410.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14410.
 */
cljs.core.async.__GT_t_cljs$core$async14410 = (function cljs$core$async$__GT_t_cljs$core$async14410(flag,cb,meta14411){
return (new cljs.core.async.t_cljs$core$async14410(flag,cb,meta14411));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14410(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14433_SHARP_){
var G__14453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14433_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14453) : fret.call(null, G__14453));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14436_SHARP_){
var G__14464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14436_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14464) : fret.call(null, G__14464));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17966 = (i + (1));
i = G__17966;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17974 = arguments.length;
var i__5727__auto___17975 = (0);
while(true){
if((i__5727__auto___17975 < len__5726__auto___17974)){
args__5732__auto__.push((arguments[i__5727__auto___17975]));

var G__17976 = (i__5727__auto___17975 + (1));
i__5727__auto___17975 = G__17976;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14489){
var map__14490 = p__14489;
var map__14490__$1 = cljs.core.__destructure_map(map__14490);
var opts = map__14490__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14478){
var G__14479 = cljs.core.first(seq14478);
var seq14478__$1 = cljs.core.next(seq14478);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14479,seq14478__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14503 = arguments.length;
switch (G__14503) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14096__auto___17981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_14584){
var state_val_14586 = (state_14584[(1)]);
if((state_val_14586 === (7))){
var inst_14570 = (state_14584[(2)]);
var state_14584__$1 = state_14584;
var statearr_14613_17982 = state_14584__$1;
(statearr_14613_17982[(2)] = inst_14570);

(statearr_14613_17982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (1))){
var state_14584__$1 = state_14584;
var statearr_14614_17986 = state_14584__$1;
(statearr_14614_17986[(2)] = null);

(statearr_14614_17986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (4))){
var inst_14539 = (state_14584[(7)]);
var inst_14539__$1 = (state_14584[(2)]);
var inst_14546 = (inst_14539__$1 == null);
var state_14584__$1 = (function (){var statearr_14615 = state_14584;
(statearr_14615[(7)] = inst_14539__$1);

return statearr_14615;
})();
if(cljs.core.truth_(inst_14546)){
var statearr_14616_17987 = state_14584__$1;
(statearr_14616_17987[(1)] = (5));

} else {
var statearr_14617_17988 = state_14584__$1;
(statearr_14617_17988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (13))){
var state_14584__$1 = state_14584;
var statearr_14618_17990 = state_14584__$1;
(statearr_14618_17990[(2)] = null);

(statearr_14618_17990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (6))){
var inst_14539 = (state_14584[(7)]);
var state_14584__$1 = state_14584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14584__$1,(11),to,inst_14539);
} else {
if((state_val_14586 === (3))){
var inst_14573 = (state_14584[(2)]);
var state_14584__$1 = state_14584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14584__$1,inst_14573);
} else {
if((state_val_14586 === (12))){
var state_14584__$1 = state_14584;
var statearr_14621_17994 = state_14584__$1;
(statearr_14621_17994[(2)] = null);

(statearr_14621_17994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (2))){
var state_14584__$1 = state_14584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14584__$1,(4),from);
} else {
if((state_val_14586 === (11))){
var inst_14563 = (state_14584[(2)]);
var state_14584__$1 = state_14584;
if(cljs.core.truth_(inst_14563)){
var statearr_14625_17996 = state_14584__$1;
(statearr_14625_17996[(1)] = (12));

} else {
var statearr_14626_17997 = state_14584__$1;
(statearr_14626_17997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (9))){
var state_14584__$1 = state_14584;
var statearr_14627_17998 = state_14584__$1;
(statearr_14627_17998[(2)] = null);

(statearr_14627_17998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (5))){
var state_14584__$1 = state_14584;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14628_17999 = state_14584__$1;
(statearr_14628_17999[(1)] = (8));

} else {
var statearr_14629_18000 = state_14584__$1;
(statearr_14629_18000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (14))){
var inst_14568 = (state_14584[(2)]);
var state_14584__$1 = state_14584;
var statearr_14630_18001 = state_14584__$1;
(statearr_14630_18001[(2)] = inst_14568);

(statearr_14630_18001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (10))){
var inst_14559 = (state_14584[(2)]);
var state_14584__$1 = state_14584;
var statearr_14634_18002 = state_14584__$1;
(statearr_14634_18002[(2)] = inst_14559);

(statearr_14634_18002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (8))){
var inst_14553 = cljs.core.async.close_BANG_(to);
var state_14584__$1 = state_14584;
var statearr_14635_18003 = state_14584__$1;
(statearr_14635_18003[(2)] = inst_14553);

(statearr_14635_18003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_14636 = [null,null,null,null,null,null,null,null];
(statearr_14636[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_14636[(1)] = (1));

return statearr_14636;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_14584){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_14584);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e14639){var ex__13301__auto__ = e14639;
var statearr_14640_18014 = state_14584;
(statearr_14640_18014[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_14584[(4)]))){
var statearr_14643_18015 = state_14584;
(statearr_14643_18015[(1)] = cljs.core.first((state_14584[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18016 = state_14584;
state_14584 = G__18016;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_14584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_14584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_14646 = f__14097__auto__();
(statearr_14646[(6)] = c__14096__auto___17981);

return statearr_14646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14677){
var vec__14681 = p__14677;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14681,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14681,(1),null);
var job = vec__14681;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14096__auto___18021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_14692){
var state_val_14693 = (state_14692[(1)]);
if((state_val_14693 === (1))){
var state_14692__$1 = state_14692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14692__$1,(2),res,v);
} else {
if((state_val_14693 === (2))){
var inst_14689 = (state_14692[(2)]);
var inst_14690 = cljs.core.async.close_BANG_(res);
var state_14692__$1 = (function (){var statearr_14701 = state_14692;
(statearr_14701[(7)] = inst_14689);

return statearr_14701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14692__$1,inst_14690);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0 = (function (){
var statearr_14708 = [null,null,null,null,null,null,null,null];
(statearr_14708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__);

(statearr_14708[(1)] = (1));

return statearr_14708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1 = (function (state_14692){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_14692);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e14709){var ex__13301__auto__ = e14709;
var statearr_14710_18024 = state_14692;
(statearr_14710_18024[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_14692[(4)]))){
var statearr_14711_18029 = state_14692;
(statearr_14711_18029[(1)] = cljs.core.first((state_14692[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18031 = state_14692;
state_14692 = G__18031;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = function(state_14692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1.call(this,state_14692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_14722 = f__14097__auto__();
(statearr_14722[(6)] = c__14096__auto___18021);

return statearr_14722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14725){
var vec__14726 = p__14725;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(1),null);
var job = vec__14726;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18032 = n;
var __18033 = (0);
while(true){
if((__18033 < n__5593__auto___18032)){
var G__14738_18034 = type;
var G__14738_18035__$1 = (((G__14738_18034 instanceof cljs.core.Keyword))?G__14738_18034.fqn:null);
switch (G__14738_18035__$1) {
case "compute":
var c__14096__auto___18037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18033,c__14096__auto___18037,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async){
return (function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = ((function (__18033,c__14096__auto___18037,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async){
return (function (state_14757){
var state_val_14758 = (state_14757[(1)]);
if((state_val_14758 === (1))){
var state_14757__$1 = state_14757;
var statearr_14767_18039 = state_14757__$1;
(statearr_14767_18039[(2)] = null);

(statearr_14767_18039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (2))){
var state_14757__$1 = state_14757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14757__$1,(4),jobs);
} else {
if((state_val_14758 === (3))){
var inst_14755 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14757__$1,inst_14755);
} else {
if((state_val_14758 === (4))){
var inst_14747 = (state_14757[(2)]);
var inst_14748 = process__$1(inst_14747);
var state_14757__$1 = state_14757;
if(cljs.core.truth_(inst_14748)){
var statearr_14775_18049 = state_14757__$1;
(statearr_14775_18049[(1)] = (5));

} else {
var statearr_14776_18050 = state_14757__$1;
(statearr_14776_18050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (5))){
var state_14757__$1 = state_14757;
var statearr_14780_18052 = state_14757__$1;
(statearr_14780_18052[(2)] = null);

(statearr_14780_18052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (6))){
var state_14757__$1 = state_14757;
var statearr_14793_18054 = state_14757__$1;
(statearr_14793_18054[(2)] = null);

(statearr_14793_18054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (7))){
var inst_14753 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
var statearr_14794_18055 = state_14757__$1;
(statearr_14794_18055[(2)] = inst_14753);

(statearr_14794_18055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18033,c__14096__auto___18037,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async))
;
return ((function (__18033,switch__13297__auto__,c__14096__auto___18037,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0 = (function (){
var statearr_14801 = [null,null,null,null,null,null,null];
(statearr_14801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__);

(statearr_14801[(1)] = (1));

return statearr_14801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1 = (function (state_14757){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_14757);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e14802){var ex__13301__auto__ = e14802;
var statearr_14807_18056 = state_14757;
(statearr_14807_18056[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_14757[(4)]))){
var statearr_14808_18057 = state_14757;
(statearr_14808_18057[(1)] = cljs.core.first((state_14757[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18058 = state_14757;
state_14757 = G__18058;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = function(state_14757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1.call(this,state_14757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__;
})()
;})(__18033,switch__13297__auto__,c__14096__auto___18037,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async))
})();
var state__14098__auto__ = (function (){var statearr_14809 = f__14097__auto__();
(statearr_14809[(6)] = c__14096__auto___18037);

return statearr_14809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
});})(__18033,c__14096__auto___18037,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async))
);


break;
case "async":
var c__14096__auto___18061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18033,c__14096__auto___18061,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async){
return (function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = ((function (__18033,c__14096__auto___18061,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async){
return (function (state_14826){
var state_val_14827 = (state_14826[(1)]);
if((state_val_14827 === (1))){
var state_14826__$1 = state_14826;
var statearr_14831_18062 = state_14826__$1;
(statearr_14831_18062[(2)] = null);

(statearr_14831_18062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14827 === (2))){
var state_14826__$1 = state_14826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14826__$1,(4),jobs);
} else {
if((state_val_14827 === (3))){
var inst_14824 = (state_14826[(2)]);
var state_14826__$1 = state_14826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14826__$1,inst_14824);
} else {
if((state_val_14827 === (4))){
var inst_14816 = (state_14826[(2)]);
var inst_14817 = async(inst_14816);
var state_14826__$1 = state_14826;
if(cljs.core.truth_(inst_14817)){
var statearr_14832_18065 = state_14826__$1;
(statearr_14832_18065[(1)] = (5));

} else {
var statearr_14833_18066 = state_14826__$1;
(statearr_14833_18066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14827 === (5))){
var state_14826__$1 = state_14826;
var statearr_14834_18067 = state_14826__$1;
(statearr_14834_18067[(2)] = null);

(statearr_14834_18067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14827 === (6))){
var state_14826__$1 = state_14826;
var statearr_14841_18069 = state_14826__$1;
(statearr_14841_18069[(2)] = null);

(statearr_14841_18069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14827 === (7))){
var inst_14822 = (state_14826[(2)]);
var state_14826__$1 = state_14826;
var statearr_14842_18070 = state_14826__$1;
(statearr_14842_18070[(2)] = inst_14822);

(statearr_14842_18070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18033,c__14096__auto___18061,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async))
;
return ((function (__18033,switch__13297__auto__,c__14096__auto___18061,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0 = (function (){
var statearr_14844 = [null,null,null,null,null,null,null];
(statearr_14844[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__);

(statearr_14844[(1)] = (1));

return statearr_14844;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1 = (function (state_14826){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_14826);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e14845){var ex__13301__auto__ = e14845;
var statearr_14846_18071 = state_14826;
(statearr_14846_18071[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_14826[(4)]))){
var statearr_14847_18075 = state_14826;
(statearr_14847_18075[(1)] = cljs.core.first((state_14826[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18076 = state_14826;
state_14826 = G__18076;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = function(state_14826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1.call(this,state_14826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__;
})()
;})(__18033,switch__13297__auto__,c__14096__auto___18061,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async))
})();
var state__14098__auto__ = (function (){var statearr_14848 = f__14097__auto__();
(statearr_14848[(6)] = c__14096__auto___18061);

return statearr_14848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
});})(__18033,c__14096__auto___18061,G__14738_18034,G__14738_18035__$1,n__5593__auto___18032,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14738_18035__$1)].join('')));

}

var G__18077 = (__18033 + (1));
__18033 = G__18077;
continue;
} else {
}
break;
}

var c__14096__auto___18078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_14872){
var state_val_14873 = (state_14872[(1)]);
if((state_val_14873 === (7))){
var inst_14867 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
var statearr_14880_18079 = state_14872__$1;
(statearr_14880_18079[(2)] = inst_14867);

(statearr_14880_18079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (1))){
var state_14872__$1 = state_14872;
var statearr_14881_18080 = state_14872__$1;
(statearr_14881_18080[(2)] = null);

(statearr_14881_18080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (4))){
var inst_14851 = (state_14872[(7)]);
var inst_14851__$1 = (state_14872[(2)]);
var inst_14852 = (inst_14851__$1 == null);
var state_14872__$1 = (function (){var statearr_14882 = state_14872;
(statearr_14882[(7)] = inst_14851__$1);

return statearr_14882;
})();
if(cljs.core.truth_(inst_14852)){
var statearr_14883_18082 = state_14872__$1;
(statearr_14883_18082[(1)] = (5));

} else {
var statearr_14884_18083 = state_14872__$1;
(statearr_14884_18083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (6))){
var inst_14851 = (state_14872[(7)]);
var inst_14856 = (state_14872[(8)]);
var inst_14856__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14859 = [inst_14851,inst_14856__$1];
var inst_14860 = (new cljs.core.PersistentVector(null,2,(5),inst_14857,inst_14859,null));
var state_14872__$1 = (function (){var statearr_14887 = state_14872;
(statearr_14887[(8)] = inst_14856__$1);

return statearr_14887;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14872__$1,(8),jobs,inst_14860);
} else {
if((state_val_14873 === (3))){
var inst_14869 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14872__$1,inst_14869);
} else {
if((state_val_14873 === (2))){
var state_14872__$1 = state_14872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14872__$1,(4),from);
} else {
if((state_val_14873 === (9))){
var inst_14864 = (state_14872[(2)]);
var state_14872__$1 = (function (){var statearr_14888 = state_14872;
(statearr_14888[(9)] = inst_14864);

return statearr_14888;
})();
var statearr_14889_18087 = state_14872__$1;
(statearr_14889_18087[(2)] = null);

(statearr_14889_18087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (5))){
var inst_14854 = cljs.core.async.close_BANG_(jobs);
var state_14872__$1 = state_14872;
var statearr_14890_18088 = state_14872__$1;
(statearr_14890_18088[(2)] = inst_14854);

(statearr_14890_18088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (8))){
var inst_14856 = (state_14872[(8)]);
var inst_14862 = (state_14872[(2)]);
var state_14872__$1 = (function (){var statearr_14897 = state_14872;
(statearr_14897[(10)] = inst_14862);

return statearr_14897;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14872__$1,(9),results,inst_14856);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0 = (function (){
var statearr_14899 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__);

(statearr_14899[(1)] = (1));

return statearr_14899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1 = (function (state_14872){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_14872);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e14901){var ex__13301__auto__ = e14901;
var statearr_14902_18091 = state_14872;
(statearr_14902_18091[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_14872[(4)]))){
var statearr_14903_18093 = state_14872;
(statearr_14903_18093[(1)] = cljs.core.first((state_14872[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18097 = state_14872;
state_14872 = G__18097;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = function(state_14872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1.call(this,state_14872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_14904 = f__14097__auto__();
(statearr_14904[(6)] = c__14096__auto___18078);

return statearr_14904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


var c__14096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_14942){
var state_val_14943 = (state_14942[(1)]);
if((state_val_14943 === (7))){
var inst_14938 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14946_18103 = state_14942__$1;
(statearr_14946_18103[(2)] = inst_14938);

(statearr_14946_18103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (20))){
var state_14942__$1 = state_14942;
var statearr_14947_18105 = state_14942__$1;
(statearr_14947_18105[(2)] = null);

(statearr_14947_18105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (1))){
var state_14942__$1 = state_14942;
var statearr_14949_18108 = state_14942__$1;
(statearr_14949_18108[(2)] = null);

(statearr_14949_18108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (4))){
var inst_14907 = (state_14942[(7)]);
var inst_14907__$1 = (state_14942[(2)]);
var inst_14908 = (inst_14907__$1 == null);
var state_14942__$1 = (function (){var statearr_14951 = state_14942;
(statearr_14951[(7)] = inst_14907__$1);

return statearr_14951;
})();
if(cljs.core.truth_(inst_14908)){
var statearr_14952_18112 = state_14942__$1;
(statearr_14952_18112[(1)] = (5));

} else {
var statearr_14953_18113 = state_14942__$1;
(statearr_14953_18113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (15))){
var inst_14920 = (state_14942[(8)]);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14942__$1,(18),to,inst_14920);
} else {
if((state_val_14943 === (21))){
var inst_14933 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14954_18117 = state_14942__$1;
(statearr_14954_18117[(2)] = inst_14933);

(statearr_14954_18117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (13))){
var inst_14935 = (state_14942[(2)]);
var state_14942__$1 = (function (){var statearr_14960 = state_14942;
(statearr_14960[(9)] = inst_14935);

return statearr_14960;
})();
var statearr_14961_18121 = state_14942__$1;
(statearr_14961_18121[(2)] = null);

(statearr_14961_18121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (6))){
var inst_14907 = (state_14942[(7)]);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14942__$1,(11),inst_14907);
} else {
if((state_val_14943 === (17))){
var inst_14928 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
if(cljs.core.truth_(inst_14928)){
var statearr_14963_18125 = state_14942__$1;
(statearr_14963_18125[(1)] = (19));

} else {
var statearr_14964_18130 = state_14942__$1;
(statearr_14964_18130[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (3))){
var inst_14940 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14942__$1,inst_14940);
} else {
if((state_val_14943 === (12))){
var inst_14917 = (state_14942[(10)]);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14942__$1,(14),inst_14917);
} else {
if((state_val_14943 === (2))){
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14942__$1,(4),results);
} else {
if((state_val_14943 === (19))){
var state_14942__$1 = state_14942;
var statearr_14965_18135 = state_14942__$1;
(statearr_14965_18135[(2)] = null);

(statearr_14965_18135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (11))){
var inst_14917 = (state_14942[(2)]);
var state_14942__$1 = (function (){var statearr_14969 = state_14942;
(statearr_14969[(10)] = inst_14917);

return statearr_14969;
})();
var statearr_14970_18142 = state_14942__$1;
(statearr_14970_18142[(2)] = null);

(statearr_14970_18142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (9))){
var state_14942__$1 = state_14942;
var statearr_14972_18143 = state_14942__$1;
(statearr_14972_18143[(2)] = null);

(statearr_14972_18143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (5))){
var state_14942__$1 = state_14942;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14973_18144 = state_14942__$1;
(statearr_14973_18144[(1)] = (8));

} else {
var statearr_14974_18145 = state_14942__$1;
(statearr_14974_18145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (14))){
var inst_14920 = (state_14942[(8)]);
var inst_14922 = (state_14942[(11)]);
var inst_14920__$1 = (state_14942[(2)]);
var inst_14921 = (inst_14920__$1 == null);
var inst_14922__$1 = cljs.core.not(inst_14921);
var state_14942__$1 = (function (){var statearr_14977 = state_14942;
(statearr_14977[(8)] = inst_14920__$1);

(statearr_14977[(11)] = inst_14922__$1);

return statearr_14977;
})();
if(inst_14922__$1){
var statearr_14979_18146 = state_14942__$1;
(statearr_14979_18146[(1)] = (15));

} else {
var statearr_14980_18147 = state_14942__$1;
(statearr_14980_18147[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (16))){
var inst_14922 = (state_14942[(11)]);
var state_14942__$1 = state_14942;
var statearr_14982_18148 = state_14942__$1;
(statearr_14982_18148[(2)] = inst_14922);

(statearr_14982_18148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (10))){
var inst_14914 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14985_18149 = state_14942__$1;
(statearr_14985_18149[(2)] = inst_14914);

(statearr_14985_18149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (18))){
var inst_14925 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14987_18150 = state_14942__$1;
(statearr_14987_18150[(2)] = inst_14925);

(statearr_14987_18150[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (8))){
var inst_14911 = cljs.core.async.close_BANG_(to);
var state_14942__$1 = state_14942;
var statearr_14989_18151 = state_14942__$1;
(statearr_14989_18151[(2)] = inst_14911);

(statearr_14989_18151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0 = (function (){
var statearr_14994 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__);

(statearr_14994[(1)] = (1));

return statearr_14994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1 = (function (state_14942){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_14942);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e14996){var ex__13301__auto__ = e14996;
var statearr_14997_18152 = state_14942;
(statearr_14997_18152[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_14942[(4)]))){
var statearr_14999_18165 = state_14942;
(statearr_14999_18165[(1)] = cljs.core.first((state_14942[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18166 = state_14942;
state_14942 = G__18166;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__ = function(state_14942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1.call(this,state_14942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_15000 = f__14097__auto__();
(statearr_15000[(6)] = c__14096__auto__);

return statearr_15000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));

return c__14096__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15003 = arguments.length;
switch (G__15003) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15018 = arguments.length;
switch (G__15018) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15023 = arguments.length;
switch (G__15023) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14096__auto___18178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_15055){
var state_val_15056 = (state_15055[(1)]);
if((state_val_15056 === (7))){
var inst_15051 = (state_15055[(2)]);
var state_15055__$1 = state_15055;
var statearr_15073_18182 = state_15055__$1;
(statearr_15073_18182[(2)] = inst_15051);

(statearr_15073_18182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (1))){
var state_15055__$1 = state_15055;
var statearr_15074_18183 = state_15055__$1;
(statearr_15074_18183[(2)] = null);

(statearr_15074_18183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (4))){
var inst_15032 = (state_15055[(7)]);
var inst_15032__$1 = (state_15055[(2)]);
var inst_15033 = (inst_15032__$1 == null);
var state_15055__$1 = (function (){var statearr_15075 = state_15055;
(statearr_15075[(7)] = inst_15032__$1);

return statearr_15075;
})();
if(cljs.core.truth_(inst_15033)){
var statearr_15076_18188 = state_15055__$1;
(statearr_15076_18188[(1)] = (5));

} else {
var statearr_15077_18189 = state_15055__$1;
(statearr_15077_18189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (13))){
var state_15055__$1 = state_15055;
var statearr_15079_18190 = state_15055__$1;
(statearr_15079_18190[(2)] = null);

(statearr_15079_18190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (6))){
var inst_15032 = (state_15055[(7)]);
var inst_15038 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15032) : p.call(null, inst_15032));
var state_15055__$1 = state_15055;
if(cljs.core.truth_(inst_15038)){
var statearr_15088_18191 = state_15055__$1;
(statearr_15088_18191[(1)] = (9));

} else {
var statearr_15089_18192 = state_15055__$1;
(statearr_15089_18192[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (3))){
var inst_15053 = (state_15055[(2)]);
var state_15055__$1 = state_15055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15055__$1,inst_15053);
} else {
if((state_val_15056 === (12))){
var state_15055__$1 = state_15055;
var statearr_15094_18197 = state_15055__$1;
(statearr_15094_18197[(2)] = null);

(statearr_15094_18197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (2))){
var state_15055__$1 = state_15055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15055__$1,(4),ch);
} else {
if((state_val_15056 === (11))){
var inst_15032 = (state_15055[(7)]);
var inst_15042 = (state_15055[(2)]);
var state_15055__$1 = state_15055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15055__$1,(8),inst_15042,inst_15032);
} else {
if((state_val_15056 === (9))){
var state_15055__$1 = state_15055;
var statearr_15103_18198 = state_15055__$1;
(statearr_15103_18198[(2)] = tc);

(statearr_15103_18198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (5))){
var inst_15035 = cljs.core.async.close_BANG_(tc);
var inst_15036 = cljs.core.async.close_BANG_(fc);
var state_15055__$1 = (function (){var statearr_15109 = state_15055;
(statearr_15109[(8)] = inst_15035);

return statearr_15109;
})();
var statearr_15112_18199 = state_15055__$1;
(statearr_15112_18199[(2)] = inst_15036);

(statearr_15112_18199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (14))){
var inst_15049 = (state_15055[(2)]);
var state_15055__$1 = state_15055;
var statearr_15114_18203 = state_15055__$1;
(statearr_15114_18203[(2)] = inst_15049);

(statearr_15114_18203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (10))){
var state_15055__$1 = state_15055;
var statearr_15115_18204 = state_15055__$1;
(statearr_15115_18204[(2)] = fc);

(statearr_15115_18204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (8))){
var inst_15044 = (state_15055[(2)]);
var state_15055__$1 = state_15055;
if(cljs.core.truth_(inst_15044)){
var statearr_15116_18205 = state_15055__$1;
(statearr_15116_18205[(1)] = (12));

} else {
var statearr_15117_18206 = state_15055__$1;
(statearr_15117_18206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_15119 = [null,null,null,null,null,null,null,null,null];
(statearr_15119[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_15119[(1)] = (1));

return statearr_15119;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_15055){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_15055);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e15120){var ex__13301__auto__ = e15120;
var statearr_15121_18207 = state_15055;
(statearr_15121_18207[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_15055[(4)]))){
var statearr_15122_18208 = state_15055;
(statearr_15122_18208[(1)] = cljs.core.first((state_15055[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18209 = state_15055;
state_15055 = G__18209;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_15055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_15055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_15124 = f__14097__auto__();
(statearr_15124[(6)] = c__14096__auto___18178);

return statearr_15124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_15156){
var state_val_15157 = (state_15156[(1)]);
if((state_val_15157 === (7))){
var inst_15152 = (state_15156[(2)]);
var state_15156__$1 = state_15156;
var statearr_15159_18210 = state_15156__$1;
(statearr_15159_18210[(2)] = inst_15152);

(statearr_15159_18210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (1))){
var inst_15130 = init;
var inst_15131 = inst_15130;
var state_15156__$1 = (function (){var statearr_15160 = state_15156;
(statearr_15160[(7)] = inst_15131);

return statearr_15160;
})();
var statearr_15161_18217 = state_15156__$1;
(statearr_15161_18217[(2)] = null);

(statearr_15161_18217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (4))){
var inst_15134 = (state_15156[(8)]);
var inst_15134__$1 = (state_15156[(2)]);
var inst_15135 = (inst_15134__$1 == null);
var state_15156__$1 = (function (){var statearr_15162 = state_15156;
(statearr_15162[(8)] = inst_15134__$1);

return statearr_15162;
})();
if(cljs.core.truth_(inst_15135)){
var statearr_15163_18218 = state_15156__$1;
(statearr_15163_18218[(1)] = (5));

} else {
var statearr_15165_18219 = state_15156__$1;
(statearr_15165_18219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (6))){
var inst_15139 = (state_15156[(9)]);
var inst_15131 = (state_15156[(7)]);
var inst_15134 = (state_15156[(8)]);
var inst_15139__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15131,inst_15134) : f.call(null, inst_15131,inst_15134));
var inst_15140 = cljs.core.reduced_QMARK_(inst_15139__$1);
var state_15156__$1 = (function (){var statearr_15176 = state_15156;
(statearr_15176[(9)] = inst_15139__$1);

return statearr_15176;
})();
if(inst_15140){
var statearr_15179_18221 = state_15156__$1;
(statearr_15179_18221[(1)] = (8));

} else {
var statearr_15188_18222 = state_15156__$1;
(statearr_15188_18222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (3))){
var inst_15154 = (state_15156[(2)]);
var state_15156__$1 = state_15156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15156__$1,inst_15154);
} else {
if((state_val_15157 === (2))){
var state_15156__$1 = state_15156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15156__$1,(4),ch);
} else {
if((state_val_15157 === (9))){
var inst_15139 = (state_15156[(9)]);
var inst_15131 = inst_15139;
var state_15156__$1 = (function (){var statearr_15207 = state_15156;
(statearr_15207[(7)] = inst_15131);

return statearr_15207;
})();
var statearr_15211_18226 = state_15156__$1;
(statearr_15211_18226[(2)] = null);

(statearr_15211_18226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (5))){
var inst_15131 = (state_15156[(7)]);
var state_15156__$1 = state_15156;
var statearr_15217_18227 = state_15156__$1;
(statearr_15217_18227[(2)] = inst_15131);

(statearr_15217_18227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (10))){
var inst_15150 = (state_15156[(2)]);
var state_15156__$1 = state_15156;
var statearr_15224_18228 = state_15156__$1;
(statearr_15224_18228[(2)] = inst_15150);

(statearr_15224_18228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (8))){
var inst_15139 = (state_15156[(9)]);
var inst_15146 = cljs.core.deref(inst_15139);
var state_15156__$1 = state_15156;
var statearr_15231_18229 = state_15156__$1;
(statearr_15231_18229[(2)] = inst_15146);

(statearr_15231_18229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13298__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13298__auto____0 = (function (){
var statearr_15238 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15238[(0)] = cljs$core$async$reduce_$_state_machine__13298__auto__);

(statearr_15238[(1)] = (1));

return statearr_15238;
});
var cljs$core$async$reduce_$_state_machine__13298__auto____1 = (function (state_15156){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_15156);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e15244){var ex__13301__auto__ = e15244;
var statearr_15246_18230 = state_15156;
(statearr_15246_18230[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_15156[(4)]))){
var statearr_15252_18231 = state_15156;
(statearr_15252_18231[(1)] = cljs.core.first((state_15156[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18232 = state_15156;
state_15156 = G__18232;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13298__auto__ = function(state_15156){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13298__auto____1.call(this,state_15156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13298__auto____0;
cljs$core$async$reduce_$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13298__auto____1;
return cljs$core$async$reduce_$_state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_15262 = f__14097__auto__();
(statearr_15262[(6)] = c__14096__auto__);

return statearr_15262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));

return c__14096__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_15277){
var state_val_15278 = (state_15277[(1)]);
if((state_val_15278 === (1))){
var inst_15272 = cljs.core.async.reduce(f__$1,init,ch);
var state_15277__$1 = state_15277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15277__$1,(2),inst_15272);
} else {
if((state_val_15278 === (2))){
var inst_15274 = (state_15277[(2)]);
var inst_15275 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15274) : f__$1.call(null, inst_15274));
var state_15277__$1 = state_15277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15277__$1,inst_15275);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13298__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13298__auto____0 = (function (){
var statearr_15285 = [null,null,null,null,null,null,null];
(statearr_15285[(0)] = cljs$core$async$transduce_$_state_machine__13298__auto__);

(statearr_15285[(1)] = (1));

return statearr_15285;
});
var cljs$core$async$transduce_$_state_machine__13298__auto____1 = (function (state_15277){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_15277);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e15291){var ex__13301__auto__ = e15291;
var statearr_15292_18236 = state_15277;
(statearr_15292_18236[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_15277[(4)]))){
var statearr_15296_18237 = state_15277;
(statearr_15296_18237[(1)] = cljs.core.first((state_15277[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18238 = state_15277;
state_15277 = G__18238;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13298__auto__ = function(state_15277){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13298__auto____1.call(this,state_15277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13298__auto____0;
cljs$core$async$transduce_$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13298__auto____1;
return cljs$core$async$transduce_$_state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_15308 = f__14097__auto__();
(statearr_15308[(6)] = c__14096__auto__);

return statearr_15308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));

return c__14096__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15314 = arguments.length;
switch (G__15314) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_15347){
var state_val_15348 = (state_15347[(1)]);
if((state_val_15348 === (7))){
var inst_15327 = (state_15347[(2)]);
var state_15347__$1 = state_15347;
var statearr_15351_18243 = state_15347__$1;
(statearr_15351_18243[(2)] = inst_15327);

(statearr_15351_18243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (1))){
var inst_15321 = cljs.core.seq(coll);
var inst_15322 = inst_15321;
var state_15347__$1 = (function (){var statearr_15353 = state_15347;
(statearr_15353[(7)] = inst_15322);

return statearr_15353;
})();
var statearr_15354_18246 = state_15347__$1;
(statearr_15354_18246[(2)] = null);

(statearr_15354_18246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (4))){
var inst_15322 = (state_15347[(7)]);
var inst_15325 = cljs.core.first(inst_15322);
var state_15347__$1 = state_15347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15347__$1,(7),ch,inst_15325);
} else {
if((state_val_15348 === (13))){
var inst_15339 = (state_15347[(2)]);
var state_15347__$1 = state_15347;
var statearr_15356_18247 = state_15347__$1;
(statearr_15356_18247[(2)] = inst_15339);

(statearr_15356_18247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (6))){
var inst_15330 = (state_15347[(2)]);
var state_15347__$1 = state_15347;
if(cljs.core.truth_(inst_15330)){
var statearr_15359_18249 = state_15347__$1;
(statearr_15359_18249[(1)] = (8));

} else {
var statearr_15360_18251 = state_15347__$1;
(statearr_15360_18251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (3))){
var inst_15344 = (state_15347[(2)]);
var state_15347__$1 = state_15347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15347__$1,inst_15344);
} else {
if((state_val_15348 === (12))){
var state_15347__$1 = state_15347;
var statearr_15363_18253 = state_15347__$1;
(statearr_15363_18253[(2)] = null);

(statearr_15363_18253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (2))){
var inst_15322 = (state_15347[(7)]);
var state_15347__$1 = state_15347;
if(cljs.core.truth_(inst_15322)){
var statearr_15366_18254 = state_15347__$1;
(statearr_15366_18254[(1)] = (4));

} else {
var statearr_15368_18255 = state_15347__$1;
(statearr_15368_18255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (11))){
var inst_15336 = cljs.core.async.close_BANG_(ch);
var state_15347__$1 = state_15347;
var statearr_15369_18256 = state_15347__$1;
(statearr_15369_18256[(2)] = inst_15336);

(statearr_15369_18256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (9))){
var state_15347__$1 = state_15347;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15370_18258 = state_15347__$1;
(statearr_15370_18258[(1)] = (11));

} else {
var statearr_15371_18259 = state_15347__$1;
(statearr_15371_18259[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (5))){
var inst_15322 = (state_15347[(7)]);
var state_15347__$1 = state_15347;
var statearr_15376_18260 = state_15347__$1;
(statearr_15376_18260[(2)] = inst_15322);

(statearr_15376_18260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (10))){
var inst_15342 = (state_15347[(2)]);
var state_15347__$1 = state_15347;
var statearr_15378_18265 = state_15347__$1;
(statearr_15378_18265[(2)] = inst_15342);

(statearr_15378_18265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (8))){
var inst_15322 = (state_15347[(7)]);
var inst_15332 = cljs.core.next(inst_15322);
var inst_15322__$1 = inst_15332;
var state_15347__$1 = (function (){var statearr_15387 = state_15347;
(statearr_15387[(7)] = inst_15322__$1);

return statearr_15387;
})();
var statearr_15388_18275 = state_15347__$1;
(statearr_15388_18275[(2)] = null);

(statearr_15388_18275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_15397 = [null,null,null,null,null,null,null,null];
(statearr_15397[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_15397[(1)] = (1));

return statearr_15397;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_15347){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_15347);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e15406){var ex__13301__auto__ = e15406;
var statearr_15407_18285 = state_15347;
(statearr_15407_18285[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_15347[(4)]))){
var statearr_15409_18286 = state_15347;
(statearr_15409_18286[(1)] = cljs.core.first((state_15347[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18288 = state_15347;
state_15347 = G__18288;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_15347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_15347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_15418 = f__14097__auto__();
(statearr_15418[(6)] = c__14096__auto__);

return statearr_15418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));

return c__14096__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15441 = arguments.length;
switch (G__15441) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18303 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18303(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18308 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18308(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18313 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18313(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18322 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18322(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15518 = (function (ch,cs,meta15519){
this.ch = ch;
this.cs = cs;
this.meta15519 = meta15519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15520,meta15519__$1){
var self__ = this;
var _15520__$1 = this;
return (new cljs.core.async.t_cljs$core$async15518(self__.ch,self__.cs,meta15519__$1));
}));

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15520){
var self__ = this;
var _15520__$1 = this;
return self__.meta15519;
}));

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15519","meta15519",-1013782379,null)], null);
}));

(cljs.core.async.t_cljs$core$async15518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15518");

(cljs.core.async.t_cljs$core$async15518.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15518.
 */
cljs.core.async.__GT_t_cljs$core$async15518 = (function cljs$core$async$__GT_t_cljs$core$async15518(ch,cs,meta15519){
return (new cljs.core.async.t_cljs$core$async15518(ch,cs,meta15519));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15518(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14096__auto___18340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_15678){
var state_val_15679 = (state_15678[(1)]);
if((state_val_15679 === (7))){
var inst_15674 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15689_18345 = state_15678__$1;
(statearr_15689_18345[(2)] = inst_15674);

(statearr_15689_18345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (20))){
var inst_15571 = (state_15678[(7)]);
var inst_15587 = cljs.core.first(inst_15571);
var inst_15588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15587,(0),null);
var inst_15589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15587,(1),null);
var state_15678__$1 = (function (){var statearr_15690 = state_15678;
(statearr_15690[(8)] = inst_15588);

return statearr_15690;
})();
if(cljs.core.truth_(inst_15589)){
var statearr_15691_18357 = state_15678__$1;
(statearr_15691_18357[(1)] = (22));

} else {
var statearr_15696_18360 = state_15678__$1;
(statearr_15696_18360[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (27))){
var inst_15536 = (state_15678[(9)]);
var inst_15620 = (state_15678[(10)]);
var inst_15622 = (state_15678[(11)]);
var inst_15627 = (state_15678[(12)]);
var inst_15627__$1 = cljs.core._nth(inst_15620,inst_15622);
var inst_15629 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15627__$1,inst_15536,done);
var state_15678__$1 = (function (){var statearr_15698 = state_15678;
(statearr_15698[(12)] = inst_15627__$1);

return statearr_15698;
})();
if(cljs.core.truth_(inst_15629)){
var statearr_15699_18365 = state_15678__$1;
(statearr_15699_18365[(1)] = (30));

} else {
var statearr_15700_18366 = state_15678__$1;
(statearr_15700_18366[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (1))){
var state_15678__$1 = state_15678;
var statearr_15702_18368 = state_15678__$1;
(statearr_15702_18368[(2)] = null);

(statearr_15702_18368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (24))){
var inst_15571 = (state_15678[(7)]);
var inst_15594 = (state_15678[(2)]);
var inst_15595 = cljs.core.next(inst_15571);
var inst_15546 = inst_15595;
var inst_15547 = null;
var inst_15548 = (0);
var inst_15549 = (0);
var state_15678__$1 = (function (){var statearr_15704 = state_15678;
(statearr_15704[(13)] = inst_15594);

(statearr_15704[(14)] = inst_15546);

(statearr_15704[(15)] = inst_15548);

(statearr_15704[(16)] = inst_15549);

(statearr_15704[(17)] = inst_15547);

return statearr_15704;
})();
var statearr_15709_18376 = state_15678__$1;
(statearr_15709_18376[(2)] = null);

(statearr_15709_18376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (39))){
var state_15678__$1 = state_15678;
var statearr_15736_18377 = state_15678__$1;
(statearr_15736_18377[(2)] = null);

(statearr_15736_18377[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (4))){
var inst_15536 = (state_15678[(9)]);
var inst_15536__$1 = (state_15678[(2)]);
var inst_15537 = (inst_15536__$1 == null);
var state_15678__$1 = (function (){var statearr_15737 = state_15678;
(statearr_15737[(9)] = inst_15536__$1);

return statearr_15737;
})();
if(cljs.core.truth_(inst_15537)){
var statearr_15742_18381 = state_15678__$1;
(statearr_15742_18381[(1)] = (5));

} else {
var statearr_15743_18383 = state_15678__$1;
(statearr_15743_18383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (15))){
var inst_15546 = (state_15678[(14)]);
var inst_15548 = (state_15678[(15)]);
var inst_15549 = (state_15678[(16)]);
var inst_15547 = (state_15678[(17)]);
var inst_15565 = (state_15678[(2)]);
var inst_15567 = (inst_15549 + (1));
var tmp15730 = inst_15546;
var tmp15731 = inst_15548;
var tmp15732 = inst_15547;
var inst_15546__$1 = tmp15730;
var inst_15547__$1 = tmp15732;
var inst_15548__$1 = tmp15731;
var inst_15549__$1 = inst_15567;
var state_15678__$1 = (function (){var statearr_15750 = state_15678;
(statearr_15750[(14)] = inst_15546__$1);

(statearr_15750[(18)] = inst_15565);

(statearr_15750[(15)] = inst_15548__$1);

(statearr_15750[(16)] = inst_15549__$1);

(statearr_15750[(17)] = inst_15547__$1);

return statearr_15750;
})();
var statearr_15752_18389 = state_15678__$1;
(statearr_15752_18389[(2)] = null);

(statearr_15752_18389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (21))){
var inst_15598 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15758_18392 = state_15678__$1;
(statearr_15758_18392[(2)] = inst_15598);

(statearr_15758_18392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (31))){
var inst_15627 = (state_15678[(12)]);
var inst_15632 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15627);
var state_15678__$1 = state_15678;
var statearr_15761_18397 = state_15678__$1;
(statearr_15761_18397[(2)] = inst_15632);

(statearr_15761_18397[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (32))){
var inst_15621 = (state_15678[(19)]);
var inst_15620 = (state_15678[(10)]);
var inst_15622 = (state_15678[(11)]);
var inst_15619 = (state_15678[(20)]);
var inst_15634 = (state_15678[(2)]);
var inst_15635 = (inst_15622 + (1));
var tmp15755 = inst_15621;
var tmp15756 = inst_15620;
var tmp15757 = inst_15619;
var inst_15619__$1 = tmp15757;
var inst_15620__$1 = tmp15756;
var inst_15621__$1 = tmp15755;
var inst_15622__$1 = inst_15635;
var state_15678__$1 = (function (){var statearr_15766 = state_15678;
(statearr_15766[(19)] = inst_15621__$1);

(statearr_15766[(10)] = inst_15620__$1);

(statearr_15766[(11)] = inst_15622__$1);

(statearr_15766[(21)] = inst_15634);

(statearr_15766[(20)] = inst_15619__$1);

return statearr_15766;
})();
var statearr_15768_18402 = state_15678__$1;
(statearr_15768_18402[(2)] = null);

(statearr_15768_18402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (40))){
var inst_15647 = (state_15678[(22)]);
var inst_15651 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15647);
var state_15678__$1 = state_15678;
var statearr_15769_18405 = state_15678__$1;
(statearr_15769_18405[(2)] = inst_15651);

(statearr_15769_18405[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (33))){
var inst_15638 = (state_15678[(23)]);
var inst_15640 = cljs.core.chunked_seq_QMARK_(inst_15638);
var state_15678__$1 = state_15678;
if(inst_15640){
var statearr_15771_18411 = state_15678__$1;
(statearr_15771_18411[(1)] = (36));

} else {
var statearr_15775_18413 = state_15678__$1;
(statearr_15775_18413[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (13))){
var inst_15559 = (state_15678[(24)]);
var inst_15562 = cljs.core.async.close_BANG_(inst_15559);
var state_15678__$1 = state_15678;
var statearr_15782_18416 = state_15678__$1;
(statearr_15782_18416[(2)] = inst_15562);

(statearr_15782_18416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (22))){
var inst_15588 = (state_15678[(8)]);
var inst_15591 = cljs.core.async.close_BANG_(inst_15588);
var state_15678__$1 = state_15678;
var statearr_15785_18421 = state_15678__$1;
(statearr_15785_18421[(2)] = inst_15591);

(statearr_15785_18421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (36))){
var inst_15638 = (state_15678[(23)]);
var inst_15642 = cljs.core.chunk_first(inst_15638);
var inst_15643 = cljs.core.chunk_rest(inst_15638);
var inst_15644 = cljs.core.count(inst_15642);
var inst_15619 = inst_15643;
var inst_15620 = inst_15642;
var inst_15621 = inst_15644;
var inst_15622 = (0);
var state_15678__$1 = (function (){var statearr_15792 = state_15678;
(statearr_15792[(19)] = inst_15621);

(statearr_15792[(10)] = inst_15620);

(statearr_15792[(11)] = inst_15622);

(statearr_15792[(20)] = inst_15619);

return statearr_15792;
})();
var statearr_15795_18442 = state_15678__$1;
(statearr_15795_18442[(2)] = null);

(statearr_15795_18442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (41))){
var inst_15638 = (state_15678[(23)]);
var inst_15653 = (state_15678[(2)]);
var inst_15654 = cljs.core.next(inst_15638);
var inst_15619 = inst_15654;
var inst_15620 = null;
var inst_15621 = (0);
var inst_15622 = (0);
var state_15678__$1 = (function (){var statearr_15802 = state_15678;
(statearr_15802[(19)] = inst_15621);

(statearr_15802[(10)] = inst_15620);

(statearr_15802[(25)] = inst_15653);

(statearr_15802[(11)] = inst_15622);

(statearr_15802[(20)] = inst_15619);

return statearr_15802;
})();
var statearr_15806_18454 = state_15678__$1;
(statearr_15806_18454[(2)] = null);

(statearr_15806_18454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (43))){
var state_15678__$1 = state_15678;
var statearr_15809_18459 = state_15678__$1;
(statearr_15809_18459[(2)] = null);

(statearr_15809_18459[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (29))){
var inst_15662 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15811_18460 = state_15678__$1;
(statearr_15811_18460[(2)] = inst_15662);

(statearr_15811_18460[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (44))){
var inst_15671 = (state_15678[(2)]);
var state_15678__$1 = (function (){var statearr_15817 = state_15678;
(statearr_15817[(26)] = inst_15671);

return statearr_15817;
})();
var statearr_15818_18466 = state_15678__$1;
(statearr_15818_18466[(2)] = null);

(statearr_15818_18466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (6))){
var inst_15608 = (state_15678[(27)]);
var inst_15607 = cljs.core.deref(cs);
var inst_15608__$1 = cljs.core.keys(inst_15607);
var inst_15610 = cljs.core.count(inst_15608__$1);
var inst_15611 = cljs.core.reset_BANG_(dctr,inst_15610);
var inst_15617 = cljs.core.seq(inst_15608__$1);
var inst_15619 = inst_15617;
var inst_15620 = null;
var inst_15621 = (0);
var inst_15622 = (0);
var state_15678__$1 = (function (){var statearr_15822 = state_15678;
(statearr_15822[(19)] = inst_15621);

(statearr_15822[(10)] = inst_15620);

(statearr_15822[(11)] = inst_15622);

(statearr_15822[(20)] = inst_15619);

(statearr_15822[(27)] = inst_15608__$1);

(statearr_15822[(28)] = inst_15611);

return statearr_15822;
})();
var statearr_15824_18486 = state_15678__$1;
(statearr_15824_18486[(2)] = null);

(statearr_15824_18486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (28))){
var inst_15638 = (state_15678[(23)]);
var inst_15619 = (state_15678[(20)]);
var inst_15638__$1 = cljs.core.seq(inst_15619);
var state_15678__$1 = (function (){var statearr_15825 = state_15678;
(statearr_15825[(23)] = inst_15638__$1);

return statearr_15825;
})();
if(inst_15638__$1){
var statearr_15827_18495 = state_15678__$1;
(statearr_15827_18495[(1)] = (33));

} else {
var statearr_15832_18500 = state_15678__$1;
(statearr_15832_18500[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (25))){
var inst_15621 = (state_15678[(19)]);
var inst_15622 = (state_15678[(11)]);
var inst_15624 = (inst_15622 < inst_15621);
var inst_15625 = inst_15624;
var state_15678__$1 = state_15678;
if(cljs.core.truth_(inst_15625)){
var statearr_15838_18509 = state_15678__$1;
(statearr_15838_18509[(1)] = (27));

} else {
var statearr_15839_18519 = state_15678__$1;
(statearr_15839_18519[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (34))){
var state_15678__$1 = state_15678;
var statearr_15859_18525 = state_15678__$1;
(statearr_15859_18525[(2)] = null);

(statearr_15859_18525[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (17))){
var state_15678__$1 = state_15678;
var statearr_15864_18526 = state_15678__$1;
(statearr_15864_18526[(2)] = null);

(statearr_15864_18526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (3))){
var inst_15676 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15678__$1,inst_15676);
} else {
if((state_val_15679 === (12))){
var inst_15603 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15871_18532 = state_15678__$1;
(statearr_15871_18532[(2)] = inst_15603);

(statearr_15871_18532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (2))){
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15678__$1,(4),ch);
} else {
if((state_val_15679 === (23))){
var state_15678__$1 = state_15678;
var statearr_15878_18547 = state_15678__$1;
(statearr_15878_18547[(2)] = null);

(statearr_15878_18547[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (35))){
var inst_15660 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15887_18554 = state_15678__$1;
(statearr_15887_18554[(2)] = inst_15660);

(statearr_15887_18554[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (19))){
var inst_15571 = (state_15678[(7)]);
var inst_15579 = cljs.core.chunk_first(inst_15571);
var inst_15580 = cljs.core.chunk_rest(inst_15571);
var inst_15581 = cljs.core.count(inst_15579);
var inst_15546 = inst_15580;
var inst_15547 = inst_15579;
var inst_15548 = inst_15581;
var inst_15549 = (0);
var state_15678__$1 = (function (){var statearr_15901 = state_15678;
(statearr_15901[(14)] = inst_15546);

(statearr_15901[(15)] = inst_15548);

(statearr_15901[(16)] = inst_15549);

(statearr_15901[(17)] = inst_15547);

return statearr_15901;
})();
var statearr_15910_18562 = state_15678__$1;
(statearr_15910_18562[(2)] = null);

(statearr_15910_18562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (11))){
var inst_15546 = (state_15678[(14)]);
var inst_15571 = (state_15678[(7)]);
var inst_15571__$1 = cljs.core.seq(inst_15546);
var state_15678__$1 = (function (){var statearr_15924 = state_15678;
(statearr_15924[(7)] = inst_15571__$1);

return statearr_15924;
})();
if(inst_15571__$1){
var statearr_15927_18586 = state_15678__$1;
(statearr_15927_18586[(1)] = (16));

} else {
var statearr_15933_18587 = state_15678__$1;
(statearr_15933_18587[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (9))){
var inst_15605 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15939_18593 = state_15678__$1;
(statearr_15939_18593[(2)] = inst_15605);

(statearr_15939_18593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (5))){
var inst_15544 = cljs.core.deref(cs);
var inst_15545 = cljs.core.seq(inst_15544);
var inst_15546 = inst_15545;
var inst_15547 = null;
var inst_15548 = (0);
var inst_15549 = (0);
var state_15678__$1 = (function (){var statearr_15948 = state_15678;
(statearr_15948[(14)] = inst_15546);

(statearr_15948[(15)] = inst_15548);

(statearr_15948[(16)] = inst_15549);

(statearr_15948[(17)] = inst_15547);

return statearr_15948;
})();
var statearr_15959_18598 = state_15678__$1;
(statearr_15959_18598[(2)] = null);

(statearr_15959_18598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (14))){
var state_15678__$1 = state_15678;
var statearr_15967_18599 = state_15678__$1;
(statearr_15967_18599[(2)] = null);

(statearr_15967_18599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (45))){
var inst_15668 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15981_18606 = state_15678__$1;
(statearr_15981_18606[(2)] = inst_15668);

(statearr_15981_18606[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (26))){
var inst_15608 = (state_15678[(27)]);
var inst_15664 = (state_15678[(2)]);
var inst_15665 = cljs.core.seq(inst_15608);
var state_15678__$1 = (function (){var statearr_15991 = state_15678;
(statearr_15991[(29)] = inst_15664);

return statearr_15991;
})();
if(inst_15665){
var statearr_15997_18611 = state_15678__$1;
(statearr_15997_18611[(1)] = (42));

} else {
var statearr_15998_18612 = state_15678__$1;
(statearr_15998_18612[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (16))){
var inst_15571 = (state_15678[(7)]);
var inst_15574 = cljs.core.chunked_seq_QMARK_(inst_15571);
var state_15678__$1 = state_15678;
if(inst_15574){
var statearr_16001_18613 = state_15678__$1;
(statearr_16001_18613[(1)] = (19));

} else {
var statearr_16004_18614 = state_15678__$1;
(statearr_16004_18614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (38))){
var inst_15657 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_16023_18619 = state_15678__$1;
(statearr_16023_18619[(2)] = inst_15657);

(statearr_16023_18619[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (30))){
var state_15678__$1 = state_15678;
var statearr_16033_18625 = state_15678__$1;
(statearr_16033_18625[(2)] = null);

(statearr_16033_18625[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (10))){
var inst_15549 = (state_15678[(16)]);
var inst_15547 = (state_15678[(17)]);
var inst_15558 = cljs.core._nth(inst_15547,inst_15549);
var inst_15559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15558,(0),null);
var inst_15560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15558,(1),null);
var state_15678__$1 = (function (){var statearr_16042 = state_15678;
(statearr_16042[(24)] = inst_15559);

return statearr_16042;
})();
if(cljs.core.truth_(inst_15560)){
var statearr_16044_18639 = state_15678__$1;
(statearr_16044_18639[(1)] = (13));

} else {
var statearr_16047_18640 = state_15678__$1;
(statearr_16047_18640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (18))){
var inst_15601 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_16049_18641 = state_15678__$1;
(statearr_16049_18641[(2)] = inst_15601);

(statearr_16049_18641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (42))){
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15678__$1,(45),dchan);
} else {
if((state_val_15679 === (37))){
var inst_15536 = (state_15678[(9)]);
var inst_15647 = (state_15678[(22)]);
var inst_15638 = (state_15678[(23)]);
var inst_15647__$1 = cljs.core.first(inst_15638);
var inst_15648 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15647__$1,inst_15536,done);
var state_15678__$1 = (function (){var statearr_16056 = state_15678;
(statearr_16056[(22)] = inst_15647__$1);

return statearr_16056;
})();
if(cljs.core.truth_(inst_15648)){
var statearr_16057_18657 = state_15678__$1;
(statearr_16057_18657[(1)] = (39));

} else {
var statearr_16061_18663 = state_15678__$1;
(statearr_16061_18663[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (8))){
var inst_15548 = (state_15678[(15)]);
var inst_15549 = (state_15678[(16)]);
var inst_15551 = (inst_15549 < inst_15548);
var inst_15552 = inst_15551;
var state_15678__$1 = state_15678;
if(cljs.core.truth_(inst_15552)){
var statearr_16064_18670 = state_15678__$1;
(statearr_16064_18670[(1)] = (10));

} else {
var statearr_16065_18671 = state_15678__$1;
(statearr_16065_18671[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13298__auto__ = null;
var cljs$core$async$mult_$_state_machine__13298__auto____0 = (function (){
var statearr_16073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16073[(0)] = cljs$core$async$mult_$_state_machine__13298__auto__);

(statearr_16073[(1)] = (1));

return statearr_16073;
});
var cljs$core$async$mult_$_state_machine__13298__auto____1 = (function (state_15678){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_15678);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e16075){var ex__13301__auto__ = e16075;
var statearr_16076_18680 = state_15678;
(statearr_16076_18680[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_15678[(4)]))){
var statearr_16078_18684 = state_15678;
(statearr_16078_18684[(1)] = cljs.core.first((state_15678[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18685 = state_15678;
state_15678 = G__18685;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13298__auto__ = function(state_15678){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13298__auto____1.call(this,state_15678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13298__auto____0;
cljs$core$async$mult_$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13298__auto____1;
return cljs$core$async$mult_$_state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_16083 = f__14097__auto__();
(statearr_16083[(6)] = c__14096__auto___18340);

return statearr_16083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16090 = arguments.length;
switch (G__16090) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18693 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18693(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18696 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18696(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18709 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18709(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18728 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18728(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18738 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18738(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18749 = arguments.length;
var i__5727__auto___18750 = (0);
while(true){
if((i__5727__auto___18750 < len__5726__auto___18749)){
args__5732__auto__.push((arguments[i__5727__auto___18750]));

var G__18755 = (i__5727__auto___18750 + (1));
i__5727__auto___18750 = G__18755;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16193){
var map__16194 = p__16193;
var map__16194__$1 = cljs.core.__destructure_map(map__16194);
var opts = map__16194__$1;
var statearr_16195_18774 = state;
(statearr_16195_18774[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16199_18776 = state;
(statearr_16199_18776[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16208_18781 = state;
(statearr_16208_18781[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16181){
var G__16182 = cljs.core.first(seq16181);
var seq16181__$1 = cljs.core.next(seq16181);
var G__16183 = cljs.core.first(seq16181__$1);
var seq16181__$2 = cljs.core.next(seq16181__$1);
var G__16184 = cljs.core.first(seq16181__$2);
var seq16181__$3 = cljs.core.next(seq16181__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16182,G__16183,G__16184,seq16181__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16245 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16246){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16246 = meta16246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16247,meta16246__$1){
var self__ = this;
var _16247__$1 = this;
return (new cljs.core.async.t_cljs$core$async16245(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16246__$1));
}));

(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16247){
var self__ = this;
var _16247__$1 = this;
return self__.meta16246;
}));

(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16245.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16246","meta16246",-727642142,null)], null);
}));

(cljs.core.async.t_cljs$core$async16245.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16245");

(cljs.core.async.t_cljs$core$async16245.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16245");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16245.
 */
cljs.core.async.__GT_t_cljs$core$async16245 = (function cljs$core$async$__GT_t_cljs$core$async16245(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16246){
return (new cljs.core.async.t_cljs$core$async16245(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16246));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16245(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14096__auto___18835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_16353){
var state_val_16354 = (state_16353[(1)]);
if((state_val_16354 === (7))){
var inst_16307 = (state_16353[(2)]);
var state_16353__$1 = state_16353;
if(cljs.core.truth_(inst_16307)){
var statearr_16358_18836 = state_16353__$1;
(statearr_16358_18836[(1)] = (8));

} else {
var statearr_16359_18837 = state_16353__$1;
(statearr_16359_18837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (20))){
var inst_16299 = (state_16353[(7)]);
var state_16353__$1 = state_16353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16353__$1,(23),out,inst_16299);
} else {
if((state_val_16354 === (1))){
var inst_16280 = calc_state();
var inst_16282 = cljs.core.__destructure_map(inst_16280);
var inst_16283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16282,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16282,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16282,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16286 = inst_16280;
var state_16353__$1 = (function (){var statearr_16364 = state_16353;
(statearr_16364[(8)] = inst_16283);

(statearr_16364[(9)] = inst_16284);

(statearr_16364[(10)] = inst_16286);

(statearr_16364[(11)] = inst_16285);

return statearr_16364;
})();
var statearr_16365_18838 = state_16353__$1;
(statearr_16365_18838[(2)] = null);

(statearr_16365_18838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (24))){
var inst_16290 = (state_16353[(12)]);
var inst_16286 = inst_16290;
var state_16353__$1 = (function (){var statearr_16369 = state_16353;
(statearr_16369[(10)] = inst_16286);

return statearr_16369;
})();
var statearr_16370_18840 = state_16353__$1;
(statearr_16370_18840[(2)] = null);

(statearr_16370_18840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (4))){
var inst_16301 = (state_16353[(13)]);
var inst_16299 = (state_16353[(7)]);
var inst_16298 = (state_16353[(2)]);
var inst_16299__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16298,(0),null);
var inst_16300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16298,(1),null);
var inst_16301__$1 = (inst_16299__$1 == null);
var state_16353__$1 = (function (){var statearr_16372 = state_16353;
(statearr_16372[(13)] = inst_16301__$1);

(statearr_16372[(14)] = inst_16300);

(statearr_16372[(7)] = inst_16299__$1);

return statearr_16372;
})();
if(cljs.core.truth_(inst_16301__$1)){
var statearr_16374_18842 = state_16353__$1;
(statearr_16374_18842[(1)] = (5));

} else {
var statearr_16375_18843 = state_16353__$1;
(statearr_16375_18843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (15))){
var inst_16322 = (state_16353[(15)]);
var inst_16291 = (state_16353[(16)]);
var inst_16322__$1 = cljs.core.empty_QMARK_(inst_16291);
var state_16353__$1 = (function (){var statearr_16376 = state_16353;
(statearr_16376[(15)] = inst_16322__$1);

return statearr_16376;
})();
if(inst_16322__$1){
var statearr_16378_18844 = state_16353__$1;
(statearr_16378_18844[(1)] = (17));

} else {
var statearr_16379_18845 = state_16353__$1;
(statearr_16379_18845[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (21))){
var inst_16290 = (state_16353[(12)]);
var inst_16286 = inst_16290;
var state_16353__$1 = (function (){var statearr_16380 = state_16353;
(statearr_16380[(10)] = inst_16286);

return statearr_16380;
})();
var statearr_16382_18847 = state_16353__$1;
(statearr_16382_18847[(2)] = null);

(statearr_16382_18847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (13))){
var inst_16315 = (state_16353[(2)]);
var inst_16316 = calc_state();
var inst_16286 = inst_16316;
var state_16353__$1 = (function (){var statearr_16386 = state_16353;
(statearr_16386[(17)] = inst_16315);

(statearr_16386[(10)] = inst_16286);

return statearr_16386;
})();
var statearr_16387_18856 = state_16353__$1;
(statearr_16387_18856[(2)] = null);

(statearr_16387_18856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (22))){
var inst_16346 = (state_16353[(2)]);
var state_16353__$1 = state_16353;
var statearr_16390_18857 = state_16353__$1;
(statearr_16390_18857[(2)] = inst_16346);

(statearr_16390_18857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (6))){
var inst_16300 = (state_16353[(14)]);
var inst_16305 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16300,change);
var state_16353__$1 = state_16353;
var statearr_16394_18858 = state_16353__$1;
(statearr_16394_18858[(2)] = inst_16305);

(statearr_16394_18858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (25))){
var state_16353__$1 = state_16353;
var statearr_16395_18859 = state_16353__$1;
(statearr_16395_18859[(2)] = null);

(statearr_16395_18859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (17))){
var inst_16300 = (state_16353[(14)]);
var inst_16292 = (state_16353[(18)]);
var inst_16324 = (inst_16292.cljs$core$IFn$_invoke$arity$1 ? inst_16292.cljs$core$IFn$_invoke$arity$1(inst_16300) : inst_16292.call(null, inst_16300));
var inst_16325 = cljs.core.not(inst_16324);
var state_16353__$1 = state_16353;
var statearr_16398_18864 = state_16353__$1;
(statearr_16398_18864[(2)] = inst_16325);

(statearr_16398_18864[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (3))){
var inst_16350 = (state_16353[(2)]);
var state_16353__$1 = state_16353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16353__$1,inst_16350);
} else {
if((state_val_16354 === (12))){
var state_16353__$1 = state_16353;
var statearr_16401_18870 = state_16353__$1;
(statearr_16401_18870[(2)] = null);

(statearr_16401_18870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (2))){
var inst_16286 = (state_16353[(10)]);
var inst_16290 = (state_16353[(12)]);
var inst_16290__$1 = cljs.core.__destructure_map(inst_16286);
var inst_16291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16290__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16290__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16290__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16353__$1 = (function (){var statearr_16403 = state_16353;
(statearr_16403[(12)] = inst_16290__$1);

(statearr_16403[(16)] = inst_16291);

(statearr_16403[(18)] = inst_16292);

return statearr_16403;
})();
return cljs.core.async.ioc_alts_BANG_(state_16353__$1,(4),inst_16293);
} else {
if((state_val_16354 === (23))){
var inst_16335 = (state_16353[(2)]);
var state_16353__$1 = state_16353;
if(cljs.core.truth_(inst_16335)){
var statearr_16407_18872 = state_16353__$1;
(statearr_16407_18872[(1)] = (24));

} else {
var statearr_16408_18873 = state_16353__$1;
(statearr_16408_18873[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (19))){
var inst_16329 = (state_16353[(2)]);
var state_16353__$1 = state_16353;
var statearr_16409_18874 = state_16353__$1;
(statearr_16409_18874[(2)] = inst_16329);

(statearr_16409_18874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (11))){
var inst_16300 = (state_16353[(14)]);
var inst_16312 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16300);
var state_16353__$1 = state_16353;
var statearr_16413_18875 = state_16353__$1;
(statearr_16413_18875[(2)] = inst_16312);

(statearr_16413_18875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (9))){
var inst_16300 = (state_16353[(14)]);
var inst_16319 = (state_16353[(19)]);
var inst_16291 = (state_16353[(16)]);
var inst_16319__$1 = (inst_16291.cljs$core$IFn$_invoke$arity$1 ? inst_16291.cljs$core$IFn$_invoke$arity$1(inst_16300) : inst_16291.call(null, inst_16300));
var state_16353__$1 = (function (){var statearr_16414 = state_16353;
(statearr_16414[(19)] = inst_16319__$1);

return statearr_16414;
})();
if(cljs.core.truth_(inst_16319__$1)){
var statearr_16415_18877 = state_16353__$1;
(statearr_16415_18877[(1)] = (14));

} else {
var statearr_16417_18878 = state_16353__$1;
(statearr_16417_18878[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (5))){
var inst_16301 = (state_16353[(13)]);
var state_16353__$1 = state_16353;
var statearr_16419_18879 = state_16353__$1;
(statearr_16419_18879[(2)] = inst_16301);

(statearr_16419_18879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (14))){
var inst_16319 = (state_16353[(19)]);
var state_16353__$1 = state_16353;
var statearr_16421_18888 = state_16353__$1;
(statearr_16421_18888[(2)] = inst_16319);

(statearr_16421_18888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (26))){
var inst_16341 = (state_16353[(2)]);
var state_16353__$1 = state_16353;
var statearr_16426_18889 = state_16353__$1;
(statearr_16426_18889[(2)] = inst_16341);

(statearr_16426_18889[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (16))){
var inst_16331 = (state_16353[(2)]);
var state_16353__$1 = state_16353;
if(cljs.core.truth_(inst_16331)){
var statearr_16428_18893 = state_16353__$1;
(statearr_16428_18893[(1)] = (20));

} else {
var statearr_16429_18894 = state_16353__$1;
(statearr_16429_18894[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (10))){
var inst_16348 = (state_16353[(2)]);
var state_16353__$1 = state_16353;
var statearr_16431_18896 = state_16353__$1;
(statearr_16431_18896[(2)] = inst_16348);

(statearr_16431_18896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (18))){
var inst_16322 = (state_16353[(15)]);
var state_16353__$1 = state_16353;
var statearr_16433_18897 = state_16353__$1;
(statearr_16433_18897[(2)] = inst_16322);

(statearr_16433_18897[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16354 === (8))){
var inst_16299 = (state_16353[(7)]);
var inst_16310 = (inst_16299 == null);
var state_16353__$1 = state_16353;
if(cljs.core.truth_(inst_16310)){
var statearr_16434_18898 = state_16353__$1;
(statearr_16434_18898[(1)] = (11));

} else {
var statearr_16437_18899 = state_16353__$1;
(statearr_16437_18899[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13298__auto__ = null;
var cljs$core$async$mix_$_state_machine__13298__auto____0 = (function (){
var statearr_16442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16442[(0)] = cljs$core$async$mix_$_state_machine__13298__auto__);

(statearr_16442[(1)] = (1));

return statearr_16442;
});
var cljs$core$async$mix_$_state_machine__13298__auto____1 = (function (state_16353){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_16353);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e16444){var ex__13301__auto__ = e16444;
var statearr_16445_18900 = state_16353;
(statearr_16445_18900[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_16353[(4)]))){
var statearr_16446_18901 = state_16353;
(statearr_16446_18901[(1)] = cljs.core.first((state_16353[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18902 = state_16353;
state_16353 = G__18902;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13298__auto__ = function(state_16353){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13298__auto____1.call(this,state_16353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13298__auto____0;
cljs$core$async$mix_$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13298__auto____1;
return cljs$core$async$mix_$_state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_16451 = f__14097__auto__();
(statearr_16451[(6)] = c__14096__auto___18835);

return statearr_16451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18905 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18905(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18908 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18908(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18916 = (function() {
var G__18917 = null;
var G__18917__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18917__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18917 = function(p,v){
switch(arguments.length){
case 1:
return G__18917__1.call(this,p);
case 2:
return G__18917__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18917.cljs$core$IFn$_invoke$arity$1 = G__18917__1;
G__18917.cljs$core$IFn$_invoke$arity$2 = G__18917__2;
return G__18917;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16495 = arguments.length;
switch (G__16495) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18916(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18916(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16512 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16513){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16513 = meta16513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16514,meta16513__$1){
var self__ = this;
var _16514__$1 = this;
return (new cljs.core.async.t_cljs$core$async16512(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16513__$1));
}));

(cljs.core.async.t_cljs$core$async16512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16514){
var self__ = this;
var _16514__$1 = this;
return self__.meta16513;
}));

(cljs.core.async.t_cljs$core$async16512.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16512.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16512.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16512.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16513","meta16513",-1262121404,null)], null);
}));

(cljs.core.async.t_cljs$core$async16512.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16512");

(cljs.core.async.t_cljs$core$async16512.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16512");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16512.
 */
cljs.core.async.__GT_t_cljs$core$async16512 = (function cljs$core$async$__GT_t_cljs$core$async16512(ch,topic_fn,buf_fn,mults,ensure_mult,meta16513){
return (new cljs.core.async.t_cljs$core$async16512(ch,topic_fn,buf_fn,mults,ensure_mult,meta16513));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16506 = arguments.length;
switch (G__16506) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16503_SHARP_){
if(cljs.core.truth_((p1__16503_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16503_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16503_SHARP_.call(null, topic)))){
return p1__16503_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16503_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16512(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14096__auto___18935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_16633){
var state_val_16634 = (state_16633[(1)]);
if((state_val_16634 === (7))){
var inst_16625 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16636_18938 = state_16633__$1;
(statearr_16636_18938[(2)] = inst_16625);

(statearr_16636_18938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (20))){
var state_16633__$1 = state_16633;
var statearr_16637_18939 = state_16633__$1;
(statearr_16637_18939[(2)] = null);

(statearr_16637_18939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (1))){
var state_16633__$1 = state_16633;
var statearr_16638_18945 = state_16633__$1;
(statearr_16638_18945[(2)] = null);

(statearr_16638_18945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (24))){
var inst_16608 = (state_16633[(7)]);
var inst_16617 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16608);
var state_16633__$1 = state_16633;
var statearr_16639_18948 = state_16633__$1;
(statearr_16639_18948[(2)] = inst_16617);

(statearr_16639_18948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (4))){
var inst_16559 = (state_16633[(8)]);
var inst_16559__$1 = (state_16633[(2)]);
var inst_16560 = (inst_16559__$1 == null);
var state_16633__$1 = (function (){var statearr_16640 = state_16633;
(statearr_16640[(8)] = inst_16559__$1);

return statearr_16640;
})();
if(cljs.core.truth_(inst_16560)){
var statearr_16643_18949 = state_16633__$1;
(statearr_16643_18949[(1)] = (5));

} else {
var statearr_16644_18950 = state_16633__$1;
(statearr_16644_18950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (15))){
var inst_16602 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16645_18952 = state_16633__$1;
(statearr_16645_18952[(2)] = inst_16602);

(statearr_16645_18952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (21))){
var inst_16622 = (state_16633[(2)]);
var state_16633__$1 = (function (){var statearr_16652 = state_16633;
(statearr_16652[(9)] = inst_16622);

return statearr_16652;
})();
var statearr_16653_18954 = state_16633__$1;
(statearr_16653_18954[(2)] = null);

(statearr_16653_18954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (13))){
var inst_16583 = (state_16633[(10)]);
var inst_16585 = cljs.core.chunked_seq_QMARK_(inst_16583);
var state_16633__$1 = state_16633;
if(inst_16585){
var statearr_16654_18960 = state_16633__$1;
(statearr_16654_18960[(1)] = (16));

} else {
var statearr_16655_18961 = state_16633__$1;
(statearr_16655_18961[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (22))){
var inst_16614 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16614)){
var statearr_16658_18962 = state_16633__$1;
(statearr_16658_18962[(1)] = (23));

} else {
var statearr_16659_18966 = state_16633__$1;
(statearr_16659_18966[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (6))){
var inst_16610 = (state_16633[(11)]);
var inst_16608 = (state_16633[(7)]);
var inst_16559 = (state_16633[(8)]);
var inst_16608__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16559) : topic_fn.call(null, inst_16559));
var inst_16609 = cljs.core.deref(mults);
var inst_16610__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16609,inst_16608__$1);
var state_16633__$1 = (function (){var statearr_16661 = state_16633;
(statearr_16661[(11)] = inst_16610__$1);

(statearr_16661[(7)] = inst_16608__$1);

return statearr_16661;
})();
if(cljs.core.truth_(inst_16610__$1)){
var statearr_16662_18967 = state_16633__$1;
(statearr_16662_18967[(1)] = (19));

} else {
var statearr_16663_18970 = state_16633__$1;
(statearr_16663_18970[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (25))){
var inst_16619 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16666_18971 = state_16633__$1;
(statearr_16666_18971[(2)] = inst_16619);

(statearr_16666_18971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (17))){
var inst_16583 = (state_16633[(10)]);
var inst_16592 = cljs.core.first(inst_16583);
var inst_16594 = cljs.core.async.muxch_STAR_(inst_16592);
var inst_16595 = cljs.core.async.close_BANG_(inst_16594);
var inst_16596 = cljs.core.next(inst_16583);
var inst_16569 = inst_16596;
var inst_16570 = null;
var inst_16571 = (0);
var inst_16572 = (0);
var state_16633__$1 = (function (){var statearr_16670 = state_16633;
(statearr_16670[(12)] = inst_16570);

(statearr_16670[(13)] = inst_16569);

(statearr_16670[(14)] = inst_16595);

(statearr_16670[(15)] = inst_16571);

(statearr_16670[(16)] = inst_16572);

return statearr_16670;
})();
var statearr_16671_18978 = state_16633__$1;
(statearr_16671_18978[(2)] = null);

(statearr_16671_18978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (3))){
var inst_16627 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16633__$1,inst_16627);
} else {
if((state_val_16634 === (12))){
var inst_16604 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16672_18984 = state_16633__$1;
(statearr_16672_18984[(2)] = inst_16604);

(statearr_16672_18984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (2))){
var state_16633__$1 = state_16633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16633__$1,(4),ch);
} else {
if((state_val_16634 === (23))){
var state_16633__$1 = state_16633;
var statearr_16673_18988 = state_16633__$1;
(statearr_16673_18988[(2)] = null);

(statearr_16673_18988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (19))){
var inst_16610 = (state_16633[(11)]);
var inst_16559 = (state_16633[(8)]);
var inst_16612 = cljs.core.async.muxch_STAR_(inst_16610);
var state_16633__$1 = state_16633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16633__$1,(22),inst_16612,inst_16559);
} else {
if((state_val_16634 === (11))){
var inst_16569 = (state_16633[(13)]);
var inst_16583 = (state_16633[(10)]);
var inst_16583__$1 = cljs.core.seq(inst_16569);
var state_16633__$1 = (function (){var statearr_16678 = state_16633;
(statearr_16678[(10)] = inst_16583__$1);

return statearr_16678;
})();
if(inst_16583__$1){
var statearr_16679_18996 = state_16633__$1;
(statearr_16679_18996[(1)] = (13));

} else {
var statearr_16681_18997 = state_16633__$1;
(statearr_16681_18997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (9))){
var inst_16606 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16682_18998 = state_16633__$1;
(statearr_16682_18998[(2)] = inst_16606);

(statearr_16682_18998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (5))){
var inst_16566 = cljs.core.deref(mults);
var inst_16567 = cljs.core.vals(inst_16566);
var inst_16568 = cljs.core.seq(inst_16567);
var inst_16569 = inst_16568;
var inst_16570 = null;
var inst_16571 = (0);
var inst_16572 = (0);
var state_16633__$1 = (function (){var statearr_16684 = state_16633;
(statearr_16684[(12)] = inst_16570);

(statearr_16684[(13)] = inst_16569);

(statearr_16684[(15)] = inst_16571);

(statearr_16684[(16)] = inst_16572);

return statearr_16684;
})();
var statearr_16686_19002 = state_16633__$1;
(statearr_16686_19002[(2)] = null);

(statearr_16686_19002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (14))){
var state_16633__$1 = state_16633;
var statearr_16693_19003 = state_16633__$1;
(statearr_16693_19003[(2)] = null);

(statearr_16693_19003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (16))){
var inst_16583 = (state_16633[(10)]);
var inst_16587 = cljs.core.chunk_first(inst_16583);
var inst_16588 = cljs.core.chunk_rest(inst_16583);
var inst_16589 = cljs.core.count(inst_16587);
var inst_16569 = inst_16588;
var inst_16570 = inst_16587;
var inst_16571 = inst_16589;
var inst_16572 = (0);
var state_16633__$1 = (function (){var statearr_16698 = state_16633;
(statearr_16698[(12)] = inst_16570);

(statearr_16698[(13)] = inst_16569);

(statearr_16698[(15)] = inst_16571);

(statearr_16698[(16)] = inst_16572);

return statearr_16698;
})();
var statearr_16700_19008 = state_16633__$1;
(statearr_16700_19008[(2)] = null);

(statearr_16700_19008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (10))){
var inst_16570 = (state_16633[(12)]);
var inst_16569 = (state_16633[(13)]);
var inst_16571 = (state_16633[(15)]);
var inst_16572 = (state_16633[(16)]);
var inst_16577 = cljs.core._nth(inst_16570,inst_16572);
var inst_16578 = cljs.core.async.muxch_STAR_(inst_16577);
var inst_16579 = cljs.core.async.close_BANG_(inst_16578);
var inst_16580 = (inst_16572 + (1));
var tmp16687 = inst_16570;
var tmp16688 = inst_16569;
var tmp16689 = inst_16571;
var inst_16569__$1 = tmp16688;
var inst_16570__$1 = tmp16687;
var inst_16571__$1 = tmp16689;
var inst_16572__$1 = inst_16580;
var state_16633__$1 = (function (){var statearr_16706 = state_16633;
(statearr_16706[(12)] = inst_16570__$1);

(statearr_16706[(17)] = inst_16579);

(statearr_16706[(13)] = inst_16569__$1);

(statearr_16706[(15)] = inst_16571__$1);

(statearr_16706[(16)] = inst_16572__$1);

return statearr_16706;
})();
var statearr_16708_19020 = state_16633__$1;
(statearr_16708_19020[(2)] = null);

(statearr_16708_19020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (18))){
var inst_16599 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16709_19023 = state_16633__$1;
(statearr_16709_19023[(2)] = inst_16599);

(statearr_16709_19023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (8))){
var inst_16571 = (state_16633[(15)]);
var inst_16572 = (state_16633[(16)]);
var inst_16574 = (inst_16572 < inst_16571);
var inst_16575 = inst_16574;
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16575)){
var statearr_16710_19031 = state_16633__$1;
(statearr_16710_19031[(1)] = (10));

} else {
var statearr_16711_19032 = state_16633__$1;
(statearr_16711_19032[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_16715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16715[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_16715[(1)] = (1));

return statearr_16715;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_16633){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_16633);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e16716){var ex__13301__auto__ = e16716;
var statearr_16717_19035 = state_16633;
(statearr_16717_19035[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_16633[(4)]))){
var statearr_16719_19036 = state_16633;
(statearr_16719_19036[(1)] = cljs.core.first((state_16633[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19038 = state_16633;
state_16633 = G__19038;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_16633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_16633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_16720 = f__14097__auto__();
(statearr_16720[(6)] = c__14096__auto___18935);

return statearr_16720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16723 = arguments.length;
switch (G__16723) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16734 = arguments.length;
switch (G__16734) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16739 = arguments.length;
switch (G__16739) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14096__auto___19064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_16794){
var state_val_16795 = (state_16794[(1)]);
if((state_val_16795 === (7))){
var state_16794__$1 = state_16794;
var statearr_16797_19066 = state_16794__$1;
(statearr_16797_19066[(2)] = null);

(statearr_16797_19066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (1))){
var state_16794__$1 = state_16794;
var statearr_16798_19073 = state_16794__$1;
(statearr_16798_19073[(2)] = null);

(statearr_16798_19073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (4))){
var inst_16750 = (state_16794[(7)]);
var inst_16749 = (state_16794[(8)]);
var inst_16752 = (inst_16750 < inst_16749);
var state_16794__$1 = state_16794;
if(cljs.core.truth_(inst_16752)){
var statearr_16809_19075 = state_16794__$1;
(statearr_16809_19075[(1)] = (6));

} else {
var statearr_16810_19076 = state_16794__$1;
(statearr_16810_19076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (15))){
var inst_16780 = (state_16794[(9)]);
var inst_16785 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16780);
var state_16794__$1 = state_16794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16794__$1,(17),out,inst_16785);
} else {
if((state_val_16795 === (13))){
var inst_16780 = (state_16794[(9)]);
var inst_16780__$1 = (state_16794[(2)]);
var inst_16781 = cljs.core.some(cljs.core.nil_QMARK_,inst_16780__$1);
var state_16794__$1 = (function (){var statearr_16811 = state_16794;
(statearr_16811[(9)] = inst_16780__$1);

return statearr_16811;
})();
if(cljs.core.truth_(inst_16781)){
var statearr_16812_19078 = state_16794__$1;
(statearr_16812_19078[(1)] = (14));

} else {
var statearr_16817_19080 = state_16794__$1;
(statearr_16817_19080[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (6))){
var state_16794__$1 = state_16794;
var statearr_16818_19081 = state_16794__$1;
(statearr_16818_19081[(2)] = null);

(statearr_16818_19081[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (17))){
var inst_16787 = (state_16794[(2)]);
var state_16794__$1 = (function (){var statearr_16821 = state_16794;
(statearr_16821[(10)] = inst_16787);

return statearr_16821;
})();
var statearr_16822_19083 = state_16794__$1;
(statearr_16822_19083[(2)] = null);

(statearr_16822_19083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (3))){
var inst_16792 = (state_16794[(2)]);
var state_16794__$1 = state_16794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16794__$1,inst_16792);
} else {
if((state_val_16795 === (12))){
var _ = (function (){var statearr_16824 = state_16794;
(statearr_16824[(4)] = cljs.core.rest((state_16794[(4)])));

return statearr_16824;
})();
var state_16794__$1 = state_16794;
var ex16820 = (state_16794__$1[(2)]);
var statearr_16826_19085 = state_16794__$1;
(statearr_16826_19085[(5)] = ex16820);


if((ex16820 instanceof Object)){
var statearr_16829_19090 = state_16794__$1;
(statearr_16829_19090[(1)] = (11));

(statearr_16829_19090[(5)] = null);

} else {
throw ex16820;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (2))){
var inst_16748 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16749 = cnt;
var inst_16750 = (0);
var state_16794__$1 = (function (){var statearr_16833 = state_16794;
(statearr_16833[(7)] = inst_16750);

(statearr_16833[(8)] = inst_16749);

(statearr_16833[(11)] = inst_16748);

return statearr_16833;
})();
var statearr_16834_19102 = state_16794__$1;
(statearr_16834_19102[(2)] = null);

(statearr_16834_19102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (11))){
var inst_16756 = (state_16794[(2)]);
var inst_16757 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16794__$1 = (function (){var statearr_16838 = state_16794;
(statearr_16838[(12)] = inst_16756);

return statearr_16838;
})();
var statearr_16839_19108 = state_16794__$1;
(statearr_16839_19108[(2)] = inst_16757);

(statearr_16839_19108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (9))){
var inst_16750 = (state_16794[(7)]);
var _ = (function (){var statearr_16840 = state_16794;
(statearr_16840[(4)] = cljs.core.cons((12),(state_16794[(4)])));

return statearr_16840;
})();
var inst_16766 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16750) : chs__$1.call(null, inst_16750));
var inst_16767 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16750) : done.call(null, inst_16750));
var inst_16768 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16766,inst_16767);
var ___$1 = (function (){var statearr_16841 = state_16794;
(statearr_16841[(4)] = cljs.core.rest((state_16794[(4)])));

return statearr_16841;
})();
var state_16794__$1 = state_16794;
var statearr_16842_19113 = state_16794__$1;
(statearr_16842_19113[(2)] = inst_16768);

(statearr_16842_19113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (5))){
var inst_16778 = (state_16794[(2)]);
var state_16794__$1 = (function (){var statearr_16843 = state_16794;
(statearr_16843[(13)] = inst_16778);

return statearr_16843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16794__$1,(13),dchan);
} else {
if((state_val_16795 === (14))){
var inst_16783 = cljs.core.async.close_BANG_(out);
var state_16794__$1 = state_16794;
var statearr_16846_19114 = state_16794__$1;
(statearr_16846_19114[(2)] = inst_16783);

(statearr_16846_19114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (16))){
var inst_16790 = (state_16794[(2)]);
var state_16794__$1 = state_16794;
var statearr_16882_19115 = state_16794__$1;
(statearr_16882_19115[(2)] = inst_16790);

(statearr_16882_19115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (10))){
var inst_16750 = (state_16794[(7)]);
var inst_16771 = (state_16794[(2)]);
var inst_16772 = (inst_16750 + (1));
var inst_16750__$1 = inst_16772;
var state_16794__$1 = (function (){var statearr_16885 = state_16794;
(statearr_16885[(7)] = inst_16750__$1);

(statearr_16885[(14)] = inst_16771);

return statearr_16885;
})();
var statearr_16889_19116 = state_16794__$1;
(statearr_16889_19116[(2)] = null);

(statearr_16889_19116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (8))){
var inst_16776 = (state_16794[(2)]);
var state_16794__$1 = state_16794;
var statearr_16890_19118 = state_16794__$1;
(statearr_16890_19118[(2)] = inst_16776);

(statearr_16890_19118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_16891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16891[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_16891[(1)] = (1));

return statearr_16891;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_16794){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_16794);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e16892){var ex__13301__auto__ = e16892;
var statearr_16893_19122 = state_16794;
(statearr_16893_19122[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_16794[(4)]))){
var statearr_16894_19123 = state_16794;
(statearr_16894_19123[(1)] = cljs.core.first((state_16794[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19124 = state_16794;
state_16794 = G__19124;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_16794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_16794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_16895 = f__14097__auto__();
(statearr_16895[(6)] = c__14096__auto___19064);

return statearr_16895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16911 = arguments.length;
switch (G__16911) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14096__auto___19136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_16946){
var state_val_16947 = (state_16946[(1)]);
if((state_val_16947 === (7))){
var inst_16926 = (state_16946[(7)]);
var inst_16925 = (state_16946[(8)]);
var inst_16925__$1 = (state_16946[(2)]);
var inst_16926__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16925__$1,(0),null);
var inst_16927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16925__$1,(1),null);
var inst_16928 = (inst_16926__$1 == null);
var state_16946__$1 = (function (){var statearr_16956 = state_16946;
(statearr_16956[(7)] = inst_16926__$1);

(statearr_16956[(9)] = inst_16927);

(statearr_16956[(8)] = inst_16925__$1);

return statearr_16956;
})();
if(cljs.core.truth_(inst_16928)){
var statearr_16957_19137 = state_16946__$1;
(statearr_16957_19137[(1)] = (8));

} else {
var statearr_16958_19138 = state_16946__$1;
(statearr_16958_19138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (1))){
var inst_16913 = cljs.core.vec(chs);
var inst_16914 = inst_16913;
var state_16946__$1 = (function (){var statearr_16959 = state_16946;
(statearr_16959[(10)] = inst_16914);

return statearr_16959;
})();
var statearr_16960_19139 = state_16946__$1;
(statearr_16960_19139[(2)] = null);

(statearr_16960_19139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (4))){
var inst_16914 = (state_16946[(10)]);
var state_16946__$1 = state_16946;
return cljs.core.async.ioc_alts_BANG_(state_16946__$1,(7),inst_16914);
} else {
if((state_val_16947 === (6))){
var inst_16942 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
var statearr_16963_19140 = state_16946__$1;
(statearr_16963_19140[(2)] = inst_16942);

(statearr_16963_19140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (3))){
var inst_16944 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16946__$1,inst_16944);
} else {
if((state_val_16947 === (2))){
var inst_16914 = (state_16946[(10)]);
var inst_16917 = cljs.core.count(inst_16914);
var inst_16919 = (inst_16917 > (0));
var state_16946__$1 = state_16946;
if(cljs.core.truth_(inst_16919)){
var statearr_16980_19147 = state_16946__$1;
(statearr_16980_19147[(1)] = (4));

} else {
var statearr_16981_19148 = state_16946__$1;
(statearr_16981_19148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (11))){
var inst_16914 = (state_16946[(10)]);
var inst_16935 = (state_16946[(2)]);
var tmp16965 = inst_16914;
var inst_16914__$1 = tmp16965;
var state_16946__$1 = (function (){var statearr_16989 = state_16946;
(statearr_16989[(11)] = inst_16935);

(statearr_16989[(10)] = inst_16914__$1);

return statearr_16989;
})();
var statearr_16990_19149 = state_16946__$1;
(statearr_16990_19149[(2)] = null);

(statearr_16990_19149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (9))){
var inst_16926 = (state_16946[(7)]);
var state_16946__$1 = state_16946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16946__$1,(11),out,inst_16926);
} else {
if((state_val_16947 === (5))){
var inst_16940 = cljs.core.async.close_BANG_(out);
var state_16946__$1 = state_16946;
var statearr_16991_19158 = state_16946__$1;
(statearr_16991_19158[(2)] = inst_16940);

(statearr_16991_19158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (10))){
var inst_16938 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
var statearr_16992_19167 = state_16946__$1;
(statearr_16992_19167[(2)] = inst_16938);

(statearr_16992_19167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (8))){
var inst_16926 = (state_16946[(7)]);
var inst_16927 = (state_16946[(9)]);
var inst_16925 = (state_16946[(8)]);
var inst_16914 = (state_16946[(10)]);
var inst_16930 = (function (){var cs = inst_16914;
var vec__16921 = inst_16925;
var v = inst_16926;
var c = inst_16927;
return (function (p1__16896_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16896_SHARP_);
});
})();
var inst_16931 = cljs.core.filterv(inst_16930,inst_16914);
var inst_16914__$1 = inst_16931;
var state_16946__$1 = (function (){var statearr_17009 = state_16946;
(statearr_17009[(10)] = inst_16914__$1);

return statearr_17009;
})();
var statearr_17016_19169 = state_16946__$1;
(statearr_17016_19169[(2)] = null);

(statearr_17016_19169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_17018 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17018[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_17018[(1)] = (1));

return statearr_17018;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_16946){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_16946);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e17021){var ex__13301__auto__ = e17021;
var statearr_17022_19177 = state_16946;
(statearr_17022_19177[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_16946[(4)]))){
var statearr_17023_19178 = state_16946;
(statearr_17023_19178[(1)] = cljs.core.first((state_16946[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19183 = state_16946;
state_16946 = G__19183;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_16946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_16946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_17024 = f__14097__auto__();
(statearr_17024[(6)] = c__14096__auto___19136);

return statearr_17024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17031 = arguments.length;
switch (G__17031) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14096__auto___19194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_17061){
var state_val_17062 = (state_17061[(1)]);
if((state_val_17062 === (7))){
var inst_17040 = (state_17061[(7)]);
var inst_17040__$1 = (state_17061[(2)]);
var inst_17041 = (inst_17040__$1 == null);
var inst_17042 = cljs.core.not(inst_17041);
var state_17061__$1 = (function (){var statearr_17063 = state_17061;
(statearr_17063[(7)] = inst_17040__$1);

return statearr_17063;
})();
if(inst_17042){
var statearr_17064_19198 = state_17061__$1;
(statearr_17064_19198[(1)] = (8));

} else {
var statearr_17065_19202 = state_17061__$1;
(statearr_17065_19202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (1))){
var inst_17035 = (0);
var state_17061__$1 = (function (){var statearr_17066 = state_17061;
(statearr_17066[(8)] = inst_17035);

return statearr_17066;
})();
var statearr_17067_19207 = state_17061__$1;
(statearr_17067_19207[(2)] = null);

(statearr_17067_19207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (4))){
var state_17061__$1 = state_17061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17061__$1,(7),ch);
} else {
if((state_val_17062 === (6))){
var inst_17053 = (state_17061[(2)]);
var state_17061__$1 = state_17061;
var statearr_17069_19208 = state_17061__$1;
(statearr_17069_19208[(2)] = inst_17053);

(statearr_17069_19208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (3))){
var inst_17058 = (state_17061[(2)]);
var inst_17059 = cljs.core.async.close_BANG_(out);
var state_17061__$1 = (function (){var statearr_17070 = state_17061;
(statearr_17070[(9)] = inst_17058);

return statearr_17070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17061__$1,inst_17059);
} else {
if((state_val_17062 === (2))){
var inst_17035 = (state_17061[(8)]);
var inst_17037 = (inst_17035 < n);
var state_17061__$1 = state_17061;
if(cljs.core.truth_(inst_17037)){
var statearr_17075_19209 = state_17061__$1;
(statearr_17075_19209[(1)] = (4));

} else {
var statearr_17076_19210 = state_17061__$1;
(statearr_17076_19210[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (11))){
var inst_17035 = (state_17061[(8)]);
var inst_17045 = (state_17061[(2)]);
var inst_17046 = (inst_17035 + (1));
var inst_17035__$1 = inst_17046;
var state_17061__$1 = (function (){var statearr_17078 = state_17061;
(statearr_17078[(10)] = inst_17045);

(statearr_17078[(8)] = inst_17035__$1);

return statearr_17078;
})();
var statearr_17079_19217 = state_17061__$1;
(statearr_17079_19217[(2)] = null);

(statearr_17079_19217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (9))){
var state_17061__$1 = state_17061;
var statearr_17081_19219 = state_17061__$1;
(statearr_17081_19219[(2)] = null);

(statearr_17081_19219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (5))){
var state_17061__$1 = state_17061;
var statearr_17083_19220 = state_17061__$1;
(statearr_17083_19220[(2)] = null);

(statearr_17083_19220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (10))){
var inst_17050 = (state_17061[(2)]);
var state_17061__$1 = state_17061;
var statearr_17085_19222 = state_17061__$1;
(statearr_17085_19222[(2)] = inst_17050);

(statearr_17085_19222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (8))){
var inst_17040 = (state_17061[(7)]);
var state_17061__$1 = state_17061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17061__$1,(11),out,inst_17040);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_17089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17089[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_17089[(1)] = (1));

return statearr_17089;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_17061){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_17061);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e17094){var ex__13301__auto__ = e17094;
var statearr_17095_19223 = state_17061;
(statearr_17095_19223[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_17061[(4)]))){
var statearr_17096_19226 = state_17061;
(statearr_17096_19226[(1)] = cljs.core.first((state_17061[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19227 = state_17061;
state_17061 = G__19227;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_17061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_17061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_17097 = f__14097__auto__();
(statearr_17097[(6)] = c__14096__auto___19194);

return statearr_17097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17102 = (function (f,ch,meta17100,_,fn1,meta17103){
this.f = f;
this.ch = ch;
this.meta17100 = meta17100;
this._ = _;
this.fn1 = fn1;
this.meta17103 = meta17103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17104,meta17103__$1){
var self__ = this;
var _17104__$1 = this;
return (new cljs.core.async.t_cljs$core$async17102(self__.f,self__.ch,self__.meta17100,self__._,self__.fn1,meta17103__$1));
}));

(cljs.core.async.t_cljs$core$async17102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17104){
var self__ = this;
var _17104__$1 = this;
return self__.meta17103;
}));

(cljs.core.async.t_cljs$core$async17102.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17102.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17098_SHARP_){
var G__17111 = (((p1__17098_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17098_SHARP_) : self__.f.call(null, p1__17098_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17111) : f1.call(null, G__17111));
});
}));

(cljs.core.async.t_cljs$core$async17102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17100","meta17100",-814962217,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17099","cljs.core.async/t_cljs$core$async17099",1742595027,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17103","meta17103",2080348132,null)], null);
}));

(cljs.core.async.t_cljs$core$async17102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17102");

(cljs.core.async.t_cljs$core$async17102.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17102.
 */
cljs.core.async.__GT_t_cljs$core$async17102 = (function cljs$core$async$__GT_t_cljs$core$async17102(f,ch,meta17100,_,fn1,meta17103){
return (new cljs.core.async.t_cljs$core$async17102(f,ch,meta17100,_,fn1,meta17103));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17099 = (function (f,ch,meta17100){
this.f = f;
this.ch = ch;
this.meta17100 = meta17100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17101,meta17100__$1){
var self__ = this;
var _17101__$1 = this;
return (new cljs.core.async.t_cljs$core$async17099(self__.f,self__.ch,meta17100__$1));
}));

(cljs.core.async.t_cljs$core$async17099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17101){
var self__ = this;
var _17101__$1 = this;
return self__.meta17100;
}));

(cljs.core.async.t_cljs$core$async17099.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17099.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17099.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17102(self__.f,self__.ch,self__.meta17100,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17127 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17127) : self__.f.call(null, G__17127));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17099.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17100","meta17100",-814962217,null)], null);
}));

(cljs.core.async.t_cljs$core$async17099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17099");

(cljs.core.async.t_cljs$core$async17099.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17099.
 */
cljs.core.async.__GT_t_cljs$core$async17099 = (function cljs$core$async$__GT_t_cljs$core$async17099(f,ch,meta17100){
return (new cljs.core.async.t_cljs$core$async17099(f,ch,meta17100));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17099(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17129 = (function (f,ch,meta17130){
this.f = f;
this.ch = ch;
this.meta17130 = meta17130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17131,meta17130__$1){
var self__ = this;
var _17131__$1 = this;
return (new cljs.core.async.t_cljs$core$async17129(self__.f,self__.ch,meta17130__$1));
}));

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17131){
var self__ = this;
var _17131__$1 = this;
return self__.meta17130;
}));

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17130","meta17130",1796893147,null)], null);
}));

(cljs.core.async.t_cljs$core$async17129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17129");

(cljs.core.async.t_cljs$core$async17129.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17129.
 */
cljs.core.async.__GT_t_cljs$core$async17129 = (function cljs$core$async$__GT_t_cljs$core$async17129(f,ch,meta17130){
return (new cljs.core.async.t_cljs$core$async17129(f,ch,meta17130));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17129(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17142 = (function (p,ch,meta17143){
this.p = p;
this.ch = ch;
this.meta17143 = meta17143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17144,meta17143__$1){
var self__ = this;
var _17144__$1 = this;
return (new cljs.core.async.t_cljs$core$async17142(self__.p,self__.ch,meta17143__$1));
}));

(cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17144){
var self__ = this;
var _17144__$1 = this;
return self__.meta17143;
}));

(cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17143","meta17143",1560594162,null)], null);
}));

(cljs.core.async.t_cljs$core$async17142.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17142");

(cljs.core.async.t_cljs$core$async17142.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17142");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17142.
 */
cljs.core.async.__GT_t_cljs$core$async17142 = (function cljs$core$async$__GT_t_cljs$core$async17142(p,ch,meta17143){
return (new cljs.core.async.t_cljs$core$async17142(p,ch,meta17143));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17142(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17165 = arguments.length;
switch (G__17165) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14096__auto___19244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_17191){
var state_val_17192 = (state_17191[(1)]);
if((state_val_17192 === (7))){
var inst_17187 = (state_17191[(2)]);
var state_17191__$1 = state_17191;
var statearr_17197_19251 = state_17191__$1;
(statearr_17197_19251[(2)] = inst_17187);

(statearr_17197_19251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (1))){
var state_17191__$1 = state_17191;
var statearr_17198_19253 = state_17191__$1;
(statearr_17198_19253[(2)] = null);

(statearr_17198_19253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (4))){
var inst_17173 = (state_17191[(7)]);
var inst_17173__$1 = (state_17191[(2)]);
var inst_17174 = (inst_17173__$1 == null);
var state_17191__$1 = (function (){var statearr_17209 = state_17191;
(statearr_17209[(7)] = inst_17173__$1);

return statearr_17209;
})();
if(cljs.core.truth_(inst_17174)){
var statearr_17210_19257 = state_17191__$1;
(statearr_17210_19257[(1)] = (5));

} else {
var statearr_17214_19258 = state_17191__$1;
(statearr_17214_19258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (6))){
var inst_17173 = (state_17191[(7)]);
var inst_17178 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17173) : p.call(null, inst_17173));
var state_17191__$1 = state_17191;
if(cljs.core.truth_(inst_17178)){
var statearr_17215_19261 = state_17191__$1;
(statearr_17215_19261[(1)] = (8));

} else {
var statearr_17216_19263 = state_17191__$1;
(statearr_17216_19263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (3))){
var inst_17189 = (state_17191[(2)]);
var state_17191__$1 = state_17191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17191__$1,inst_17189);
} else {
if((state_val_17192 === (2))){
var state_17191__$1 = state_17191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17191__$1,(4),ch);
} else {
if((state_val_17192 === (11))){
var inst_17181 = (state_17191[(2)]);
var state_17191__$1 = state_17191;
var statearr_17229_19268 = state_17191__$1;
(statearr_17229_19268[(2)] = inst_17181);

(statearr_17229_19268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (9))){
var state_17191__$1 = state_17191;
var statearr_17232_19270 = state_17191__$1;
(statearr_17232_19270[(2)] = null);

(statearr_17232_19270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (5))){
var inst_17176 = cljs.core.async.close_BANG_(out);
var state_17191__$1 = state_17191;
var statearr_17236_19272 = state_17191__$1;
(statearr_17236_19272[(2)] = inst_17176);

(statearr_17236_19272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (10))){
var inst_17184 = (state_17191[(2)]);
var state_17191__$1 = (function (){var statearr_17244 = state_17191;
(statearr_17244[(8)] = inst_17184);

return statearr_17244;
})();
var statearr_17255_19277 = state_17191__$1;
(statearr_17255_19277[(2)] = null);

(statearr_17255_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (8))){
var inst_17173 = (state_17191[(7)]);
var state_17191__$1 = state_17191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17191__$1,(11),out,inst_17173);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_17268 = [null,null,null,null,null,null,null,null,null];
(statearr_17268[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_17268[(1)] = (1));

return statearr_17268;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_17191){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_17191);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e17272){var ex__13301__auto__ = e17272;
var statearr_17273_19278 = state_17191;
(statearr_17273_19278[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_17191[(4)]))){
var statearr_17276_19283 = state_17191;
(statearr_17276_19283[(1)] = cljs.core.first((state_17191[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19286 = state_17191;
state_17191 = G__19286;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_17191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_17191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_17277 = f__14097__auto__();
(statearr_17277[(6)] = c__14096__auto___19244);

return statearr_17277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17279 = arguments.length;
switch (G__17279) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_17350){
var state_val_17351 = (state_17350[(1)]);
if((state_val_17351 === (7))){
var inst_17345 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17357_19296 = state_17350__$1;
(statearr_17357_19296[(2)] = inst_17345);

(statearr_17357_19296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (20))){
var inst_17313 = (state_17350[(7)]);
var inst_17325 = (state_17350[(2)]);
var inst_17326 = cljs.core.next(inst_17313);
var inst_17298 = inst_17326;
var inst_17299 = null;
var inst_17300 = (0);
var inst_17301 = (0);
var state_17350__$1 = (function (){var statearr_17361 = state_17350;
(statearr_17361[(8)] = inst_17298);

(statearr_17361[(9)] = inst_17300);

(statearr_17361[(10)] = inst_17325);

(statearr_17361[(11)] = inst_17301);

(statearr_17361[(12)] = inst_17299);

return statearr_17361;
})();
var statearr_17374_19297 = state_17350__$1;
(statearr_17374_19297[(2)] = null);

(statearr_17374_19297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (1))){
var state_17350__$1 = state_17350;
var statearr_17379_19304 = state_17350__$1;
(statearr_17379_19304[(2)] = null);

(statearr_17379_19304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (4))){
var inst_17286 = (state_17350[(13)]);
var inst_17286__$1 = (state_17350[(2)]);
var inst_17287 = (inst_17286__$1 == null);
var state_17350__$1 = (function (){var statearr_17380 = state_17350;
(statearr_17380[(13)] = inst_17286__$1);

return statearr_17380;
})();
if(cljs.core.truth_(inst_17287)){
var statearr_17382_19309 = state_17350__$1;
(statearr_17382_19309[(1)] = (5));

} else {
var statearr_17383_19311 = state_17350__$1;
(statearr_17383_19311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (15))){
var state_17350__$1 = state_17350;
var statearr_17388_19316 = state_17350__$1;
(statearr_17388_19316[(2)] = null);

(statearr_17388_19316[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (21))){
var state_17350__$1 = state_17350;
var statearr_17389_19321 = state_17350__$1;
(statearr_17389_19321[(2)] = null);

(statearr_17389_19321[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (13))){
var inst_17298 = (state_17350[(8)]);
var inst_17300 = (state_17350[(9)]);
var inst_17301 = (state_17350[(11)]);
var inst_17299 = (state_17350[(12)]);
var inst_17308 = (state_17350[(2)]);
var inst_17309 = (inst_17301 + (1));
var tmp17384 = inst_17298;
var tmp17385 = inst_17300;
var tmp17386 = inst_17299;
var inst_17298__$1 = tmp17384;
var inst_17299__$1 = tmp17386;
var inst_17300__$1 = tmp17385;
var inst_17301__$1 = inst_17309;
var state_17350__$1 = (function (){var statearr_17390 = state_17350;
(statearr_17390[(8)] = inst_17298__$1);

(statearr_17390[(14)] = inst_17308);

(statearr_17390[(9)] = inst_17300__$1);

(statearr_17390[(11)] = inst_17301__$1);

(statearr_17390[(12)] = inst_17299__$1);

return statearr_17390;
})();
var statearr_17392_19325 = state_17350__$1;
(statearr_17392_19325[(2)] = null);

(statearr_17392_19325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (22))){
var state_17350__$1 = state_17350;
var statearr_17393_19326 = state_17350__$1;
(statearr_17393_19326[(2)] = null);

(statearr_17393_19326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (6))){
var inst_17286 = (state_17350[(13)]);
var inst_17296 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17286) : f.call(null, inst_17286));
var inst_17297 = cljs.core.seq(inst_17296);
var inst_17298 = inst_17297;
var inst_17299 = null;
var inst_17300 = (0);
var inst_17301 = (0);
var state_17350__$1 = (function (){var statearr_17394 = state_17350;
(statearr_17394[(8)] = inst_17298);

(statearr_17394[(9)] = inst_17300);

(statearr_17394[(11)] = inst_17301);

(statearr_17394[(12)] = inst_17299);

return statearr_17394;
})();
var statearr_17396_19330 = state_17350__$1;
(statearr_17396_19330[(2)] = null);

(statearr_17396_19330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (17))){
var inst_17313 = (state_17350[(7)]);
var inst_17317 = cljs.core.chunk_first(inst_17313);
var inst_17319 = cljs.core.chunk_rest(inst_17313);
var inst_17320 = cljs.core.count(inst_17317);
var inst_17298 = inst_17319;
var inst_17299 = inst_17317;
var inst_17300 = inst_17320;
var inst_17301 = (0);
var state_17350__$1 = (function (){var statearr_17398 = state_17350;
(statearr_17398[(8)] = inst_17298);

(statearr_17398[(9)] = inst_17300);

(statearr_17398[(11)] = inst_17301);

(statearr_17398[(12)] = inst_17299);

return statearr_17398;
})();
var statearr_17399_19332 = state_17350__$1;
(statearr_17399_19332[(2)] = null);

(statearr_17399_19332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (3))){
var inst_17347 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17350__$1,inst_17347);
} else {
if((state_val_17351 === (12))){
var inst_17334 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17402_19334 = state_17350__$1;
(statearr_17402_19334[(2)] = inst_17334);

(statearr_17402_19334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (2))){
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17350__$1,(4),in$);
} else {
if((state_val_17351 === (23))){
var inst_17343 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17404_19339 = state_17350__$1;
(statearr_17404_19339[(2)] = inst_17343);

(statearr_17404_19339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (19))){
var inst_17329 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17405_19343 = state_17350__$1;
(statearr_17405_19343[(2)] = inst_17329);

(statearr_17405_19343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (11))){
var inst_17298 = (state_17350[(8)]);
var inst_17313 = (state_17350[(7)]);
var inst_17313__$1 = cljs.core.seq(inst_17298);
var state_17350__$1 = (function (){var statearr_17406 = state_17350;
(statearr_17406[(7)] = inst_17313__$1);

return statearr_17406;
})();
if(inst_17313__$1){
var statearr_17407_19345 = state_17350__$1;
(statearr_17407_19345[(1)] = (14));

} else {
var statearr_17408_19364 = state_17350__$1;
(statearr_17408_19364[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (9))){
var inst_17336 = (state_17350[(2)]);
var inst_17338 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17350__$1 = (function (){var statearr_17418 = state_17350;
(statearr_17418[(15)] = inst_17336);

return statearr_17418;
})();
if(cljs.core.truth_(inst_17338)){
var statearr_17419_19365 = state_17350__$1;
(statearr_17419_19365[(1)] = (21));

} else {
var statearr_17420_19366 = state_17350__$1;
(statearr_17420_19366[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (5))){
var inst_17290 = cljs.core.async.close_BANG_(out);
var state_17350__$1 = state_17350;
var statearr_17430_19372 = state_17350__$1;
(statearr_17430_19372[(2)] = inst_17290);

(statearr_17430_19372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (14))){
var inst_17313 = (state_17350[(7)]);
var inst_17315 = cljs.core.chunked_seq_QMARK_(inst_17313);
var state_17350__$1 = state_17350;
if(inst_17315){
var statearr_17435_19379 = state_17350__$1;
(statearr_17435_19379[(1)] = (17));

} else {
var statearr_17436_19381 = state_17350__$1;
(statearr_17436_19381[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (16))){
var inst_17332 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17439_19396 = state_17350__$1;
(statearr_17439_19396[(2)] = inst_17332);

(statearr_17439_19396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (10))){
var inst_17301 = (state_17350[(11)]);
var inst_17299 = (state_17350[(12)]);
var inst_17306 = cljs.core._nth(inst_17299,inst_17301);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17350__$1,(13),out,inst_17306);
} else {
if((state_val_17351 === (18))){
var inst_17313 = (state_17350[(7)]);
var inst_17323 = cljs.core.first(inst_17313);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17350__$1,(20),out,inst_17323);
} else {
if((state_val_17351 === (8))){
var inst_17300 = (state_17350[(9)]);
var inst_17301 = (state_17350[(11)]);
var inst_17303 = (inst_17301 < inst_17300);
var inst_17304 = inst_17303;
var state_17350__$1 = state_17350;
if(cljs.core.truth_(inst_17304)){
var statearr_17441_19413 = state_17350__$1;
(statearr_17441_19413[(1)] = (10));

} else {
var statearr_17442_19414 = state_17350__$1;
(statearr_17442_19414[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13298__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13298__auto____0 = (function (){
var statearr_17449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17449[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13298__auto__);

(statearr_17449[(1)] = (1));

return statearr_17449;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13298__auto____1 = (function (state_17350){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_17350);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e17450){var ex__13301__auto__ = e17450;
var statearr_17454_19416 = state_17350;
(statearr_17454_19416[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_17350[(4)]))){
var statearr_17455_19421 = state_17350;
(statearr_17455_19421[(1)] = cljs.core.first((state_17350[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19429 = state_17350;
state_17350 = G__19429;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13298__auto__ = function(state_17350){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13298__auto____1.call(this,state_17350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13298__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13298__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_17460 = f__14097__auto__();
(statearr_17460[(6)] = c__14096__auto__);

return statearr_17460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));

return c__14096__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17463 = arguments.length;
switch (G__17463) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17496 = arguments.length;
switch (G__17496) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17524 = arguments.length;
switch (G__17524) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14096__auto___19454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_17567){
var state_val_17568 = (state_17567[(1)]);
if((state_val_17568 === (7))){
var inst_17562 = (state_17567[(2)]);
var state_17567__$1 = state_17567;
var statearr_17569_19457 = state_17567__$1;
(statearr_17569_19457[(2)] = inst_17562);

(statearr_17569_19457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (1))){
var inst_17537 = null;
var state_17567__$1 = (function (){var statearr_17572 = state_17567;
(statearr_17572[(7)] = inst_17537);

return statearr_17572;
})();
var statearr_17573_19462 = state_17567__$1;
(statearr_17573_19462[(2)] = null);

(statearr_17573_19462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (4))){
var inst_17540 = (state_17567[(8)]);
var inst_17540__$1 = (state_17567[(2)]);
var inst_17548 = (inst_17540__$1 == null);
var inst_17549 = cljs.core.not(inst_17548);
var state_17567__$1 = (function (){var statearr_17574 = state_17567;
(statearr_17574[(8)] = inst_17540__$1);

return statearr_17574;
})();
if(inst_17549){
var statearr_17575_19465 = state_17567__$1;
(statearr_17575_19465[(1)] = (5));

} else {
var statearr_17576_19467 = state_17567__$1;
(statearr_17576_19467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (6))){
var state_17567__$1 = state_17567;
var statearr_17582_19470 = state_17567__$1;
(statearr_17582_19470[(2)] = null);

(statearr_17582_19470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (3))){
var inst_17564 = (state_17567[(2)]);
var inst_17565 = cljs.core.async.close_BANG_(out);
var state_17567__$1 = (function (){var statearr_17583 = state_17567;
(statearr_17583[(9)] = inst_17564);

return statearr_17583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17567__$1,inst_17565);
} else {
if((state_val_17568 === (2))){
var state_17567__$1 = state_17567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17567__$1,(4),ch);
} else {
if((state_val_17568 === (11))){
var inst_17540 = (state_17567[(8)]);
var inst_17556 = (state_17567[(2)]);
var inst_17537 = inst_17540;
var state_17567__$1 = (function (){var statearr_17591 = state_17567;
(statearr_17591[(10)] = inst_17556);

(statearr_17591[(7)] = inst_17537);

return statearr_17591;
})();
var statearr_17592_19481 = state_17567__$1;
(statearr_17592_19481[(2)] = null);

(statearr_17592_19481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (9))){
var inst_17540 = (state_17567[(8)]);
var state_17567__$1 = state_17567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17567__$1,(11),out,inst_17540);
} else {
if((state_val_17568 === (5))){
var inst_17540 = (state_17567[(8)]);
var inst_17537 = (state_17567[(7)]);
var inst_17551 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17540,inst_17537);
var state_17567__$1 = state_17567;
if(inst_17551){
var statearr_17595_19487 = state_17567__$1;
(statearr_17595_19487[(1)] = (8));

} else {
var statearr_17596_19488 = state_17567__$1;
(statearr_17596_19488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (10))){
var inst_17559 = (state_17567[(2)]);
var state_17567__$1 = state_17567;
var statearr_17597_19489 = state_17567__$1;
(statearr_17597_19489[(2)] = inst_17559);

(statearr_17597_19489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (8))){
var inst_17537 = (state_17567[(7)]);
var tmp17594 = inst_17537;
var inst_17537__$1 = tmp17594;
var state_17567__$1 = (function (){var statearr_17599 = state_17567;
(statearr_17599[(7)] = inst_17537__$1);

return statearr_17599;
})();
var statearr_17600_19511 = state_17567__$1;
(statearr_17600_19511[(2)] = null);

(statearr_17600_19511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_17603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17603[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_17603[(1)] = (1));

return statearr_17603;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_17567){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_17567);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e17604){var ex__13301__auto__ = e17604;
var statearr_17605_19518 = state_17567;
(statearr_17605_19518[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_17567[(4)]))){
var statearr_17606_19521 = state_17567;
(statearr_17606_19521[(1)] = cljs.core.first((state_17567[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19523 = state_17567;
state_17567 = G__19523;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_17567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_17567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_17609 = f__14097__auto__();
(statearr_17609[(6)] = c__14096__auto___19454);

return statearr_17609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17617 = arguments.length;
switch (G__17617) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14096__auto___19537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_17669){
var state_val_17670 = (state_17669[(1)]);
if((state_val_17670 === (7))){
var inst_17665 = (state_17669[(2)]);
var state_17669__$1 = state_17669;
var statearr_17671_19547 = state_17669__$1;
(statearr_17671_19547[(2)] = inst_17665);

(statearr_17671_19547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (1))){
var inst_17629 = (new Array(n));
var inst_17630 = inst_17629;
var inst_17631 = (0);
var state_17669__$1 = (function (){var statearr_17672 = state_17669;
(statearr_17672[(7)] = inst_17630);

(statearr_17672[(8)] = inst_17631);

return statearr_17672;
})();
var statearr_17673_19551 = state_17669__$1;
(statearr_17673_19551[(2)] = null);

(statearr_17673_19551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (4))){
var inst_17634 = (state_17669[(9)]);
var inst_17634__$1 = (state_17669[(2)]);
var inst_17635 = (inst_17634__$1 == null);
var inst_17636 = cljs.core.not(inst_17635);
var state_17669__$1 = (function (){var statearr_17674 = state_17669;
(statearr_17674[(9)] = inst_17634__$1);

return statearr_17674;
})();
if(inst_17636){
var statearr_17675_19557 = state_17669__$1;
(statearr_17675_19557[(1)] = (5));

} else {
var statearr_17676_19558 = state_17669__$1;
(statearr_17676_19558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (15))){
var inst_17659 = (state_17669[(2)]);
var state_17669__$1 = state_17669;
var statearr_17683_19559 = state_17669__$1;
(statearr_17683_19559[(2)] = inst_17659);

(statearr_17683_19559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (13))){
var state_17669__$1 = state_17669;
var statearr_17684_19563 = state_17669__$1;
(statearr_17684_19563[(2)] = null);

(statearr_17684_19563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (6))){
var inst_17631 = (state_17669[(8)]);
var inst_17655 = (inst_17631 > (0));
var state_17669__$1 = state_17669;
if(cljs.core.truth_(inst_17655)){
var statearr_17689_19568 = state_17669__$1;
(statearr_17689_19568[(1)] = (12));

} else {
var statearr_17690_19569 = state_17669__$1;
(statearr_17690_19569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (3))){
var inst_17667 = (state_17669[(2)]);
var state_17669__$1 = state_17669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17669__$1,inst_17667);
} else {
if((state_val_17670 === (12))){
var inst_17630 = (state_17669[(7)]);
var inst_17657 = cljs.core.vec(inst_17630);
var state_17669__$1 = state_17669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17669__$1,(15),out,inst_17657);
} else {
if((state_val_17670 === (2))){
var state_17669__$1 = state_17669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17669__$1,(4),ch);
} else {
if((state_val_17670 === (11))){
var inst_17646 = (state_17669[(2)]);
var inst_17650 = (new Array(n));
var inst_17630 = inst_17650;
var inst_17631 = (0);
var state_17669__$1 = (function (){var statearr_17692 = state_17669;
(statearr_17692[(7)] = inst_17630);

(statearr_17692[(8)] = inst_17631);

(statearr_17692[(10)] = inst_17646);

return statearr_17692;
})();
var statearr_17693_19573 = state_17669__$1;
(statearr_17693_19573[(2)] = null);

(statearr_17693_19573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (9))){
var inst_17630 = (state_17669[(7)]);
var inst_17644 = cljs.core.vec(inst_17630);
var state_17669__$1 = state_17669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17669__$1,(11),out,inst_17644);
} else {
if((state_val_17670 === (5))){
var inst_17630 = (state_17669[(7)]);
var inst_17631 = (state_17669[(8)]);
var inst_17639 = (state_17669[(11)]);
var inst_17634 = (state_17669[(9)]);
var inst_17638 = (inst_17630[inst_17631] = inst_17634);
var inst_17639__$1 = (inst_17631 + (1));
var inst_17640 = (inst_17639__$1 < n);
var state_17669__$1 = (function (){var statearr_17704 = state_17669;
(statearr_17704[(11)] = inst_17639__$1);

(statearr_17704[(12)] = inst_17638);

return statearr_17704;
})();
if(cljs.core.truth_(inst_17640)){
var statearr_17707_19576 = state_17669__$1;
(statearr_17707_19576[(1)] = (8));

} else {
var statearr_17708_19577 = state_17669__$1;
(statearr_17708_19577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (14))){
var inst_17662 = (state_17669[(2)]);
var inst_17663 = cljs.core.async.close_BANG_(out);
var state_17669__$1 = (function (){var statearr_17713 = state_17669;
(statearr_17713[(13)] = inst_17662);

return statearr_17713;
})();
var statearr_17714_19582 = state_17669__$1;
(statearr_17714_19582[(2)] = inst_17663);

(statearr_17714_19582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (10))){
var inst_17653 = (state_17669[(2)]);
var state_17669__$1 = state_17669;
var statearr_17719_19583 = state_17669__$1;
(statearr_17719_19583[(2)] = inst_17653);

(statearr_17719_19583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (8))){
var inst_17630 = (state_17669[(7)]);
var inst_17639 = (state_17669[(11)]);
var tmp17712 = inst_17630;
var inst_17630__$1 = tmp17712;
var inst_17631 = inst_17639;
var state_17669__$1 = (function (){var statearr_17723 = state_17669;
(statearr_17723[(7)] = inst_17630__$1);

(statearr_17723[(8)] = inst_17631);

return statearr_17723;
})();
var statearr_17724_19592 = state_17669__$1;
(statearr_17724_19592[(2)] = null);

(statearr_17724_19592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_17725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17725[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_17725[(1)] = (1));

return statearr_17725;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_17669){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_17669);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e17726){var ex__13301__auto__ = e17726;
var statearr_17733_19596 = state_17669;
(statearr_17733_19596[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_17669[(4)]))){
var statearr_17734_19597 = state_17669;
(statearr_17734_19597[(1)] = cljs.core.first((state_17669[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19598 = state_17669;
state_17669 = G__19598;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_17669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_17669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_17739 = f__14097__auto__();
(statearr_17739[(6)] = c__14096__auto___19537);

return statearr_17739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17749 = arguments.length;
switch (G__17749) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14096__auto___19600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14097__auto__ = (function (){var switch__13297__auto__ = (function (state_17799){
var state_val_17800 = (state_17799[(1)]);
if((state_val_17800 === (7))){
var inst_17795 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
var statearr_17807_19603 = state_17799__$1;
(statearr_17807_19603[(2)] = inst_17795);

(statearr_17807_19603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (1))){
var inst_17751 = [];
var inst_17755 = inst_17751;
var inst_17756 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17799__$1 = (function (){var statearr_17813 = state_17799;
(statearr_17813[(7)] = inst_17755);

(statearr_17813[(8)] = inst_17756);

return statearr_17813;
})();
var statearr_17814_19612 = state_17799__$1;
(statearr_17814_19612[(2)] = null);

(statearr_17814_19612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (4))){
var inst_17759 = (state_17799[(9)]);
var inst_17759__$1 = (state_17799[(2)]);
var inst_17760 = (inst_17759__$1 == null);
var inst_17761 = cljs.core.not(inst_17760);
var state_17799__$1 = (function (){var statearr_17823 = state_17799;
(statearr_17823[(9)] = inst_17759__$1);

return statearr_17823;
})();
if(inst_17761){
var statearr_17824_19617 = state_17799__$1;
(statearr_17824_19617[(1)] = (5));

} else {
var statearr_17825_19618 = state_17799__$1;
(statearr_17825_19618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (15))){
var inst_17755 = (state_17799[(7)]);
var inst_17787 = cljs.core.vec(inst_17755);
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17799__$1,(18),out,inst_17787);
} else {
if((state_val_17800 === (13))){
var inst_17782 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
var statearr_17826_19624 = state_17799__$1;
(statearr_17826_19624[(2)] = inst_17782);

(statearr_17826_19624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (6))){
var inst_17755 = (state_17799[(7)]);
var inst_17784 = inst_17755.length;
var inst_17785 = (inst_17784 > (0));
var state_17799__$1 = state_17799;
if(cljs.core.truth_(inst_17785)){
var statearr_17828_19625 = state_17799__$1;
(statearr_17828_19625[(1)] = (15));

} else {
var statearr_17829_19631 = state_17799__$1;
(statearr_17829_19631[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (17))){
var inst_17792 = (state_17799[(2)]);
var inst_17793 = cljs.core.async.close_BANG_(out);
var state_17799__$1 = (function (){var statearr_17834 = state_17799;
(statearr_17834[(10)] = inst_17792);

return statearr_17834;
})();
var statearr_17835_19634 = state_17799__$1;
(statearr_17835_19634[(2)] = inst_17793);

(statearr_17835_19634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (3))){
var inst_17797 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17799__$1,inst_17797);
} else {
if((state_val_17800 === (12))){
var inst_17755 = (state_17799[(7)]);
var inst_17775 = cljs.core.vec(inst_17755);
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17799__$1,(14),out,inst_17775);
} else {
if((state_val_17800 === (2))){
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17799__$1,(4),ch);
} else {
if((state_val_17800 === (11))){
var inst_17763 = (state_17799[(11)]);
var inst_17755 = (state_17799[(7)]);
var inst_17759 = (state_17799[(9)]);
var inst_17772 = inst_17755.push(inst_17759);
var tmp17837 = inst_17755;
var inst_17755__$1 = tmp17837;
var inst_17756 = inst_17763;
var state_17799__$1 = (function (){var statearr_17843 = state_17799;
(statearr_17843[(12)] = inst_17772);

(statearr_17843[(7)] = inst_17755__$1);

(statearr_17843[(8)] = inst_17756);

return statearr_17843;
})();
var statearr_17844_19645 = state_17799__$1;
(statearr_17844_19645[(2)] = null);

(statearr_17844_19645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (9))){
var inst_17756 = (state_17799[(8)]);
var inst_17768 = cljs.core.keyword_identical_QMARK_(inst_17756,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17799__$1 = state_17799;
var statearr_17845_19646 = state_17799__$1;
(statearr_17845_19646[(2)] = inst_17768);

(statearr_17845_19646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (5))){
var inst_17763 = (state_17799[(11)]);
var inst_17764 = (state_17799[(13)]);
var inst_17756 = (state_17799[(8)]);
var inst_17759 = (state_17799[(9)]);
var inst_17763__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17759) : f.call(null, inst_17759));
var inst_17764__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17763__$1,inst_17756);
var state_17799__$1 = (function (){var statearr_17846 = state_17799;
(statearr_17846[(11)] = inst_17763__$1);

(statearr_17846[(13)] = inst_17764__$1);

return statearr_17846;
})();
if(inst_17764__$1){
var statearr_17847_19647 = state_17799__$1;
(statearr_17847_19647[(1)] = (8));

} else {
var statearr_17848_19649 = state_17799__$1;
(statearr_17848_19649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (14))){
var inst_17763 = (state_17799[(11)]);
var inst_17759 = (state_17799[(9)]);
var inst_17777 = (state_17799[(2)]);
var inst_17778 = [];
var inst_17779 = inst_17778.push(inst_17759);
var inst_17755 = inst_17778;
var inst_17756 = inst_17763;
var state_17799__$1 = (function (){var statearr_17849 = state_17799;
(statearr_17849[(14)] = inst_17777);

(statearr_17849[(7)] = inst_17755);

(statearr_17849[(8)] = inst_17756);

(statearr_17849[(15)] = inst_17779);

return statearr_17849;
})();
var statearr_17850_19652 = state_17799__$1;
(statearr_17850_19652[(2)] = null);

(statearr_17850_19652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (16))){
var state_17799__$1 = state_17799;
var statearr_17852_19657 = state_17799__$1;
(statearr_17852_19657[(2)] = null);

(statearr_17852_19657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (10))){
var inst_17770 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
if(cljs.core.truth_(inst_17770)){
var statearr_17857_19660 = state_17799__$1;
(statearr_17857_19660[(1)] = (11));

} else {
var statearr_17858_19662 = state_17799__$1;
(statearr_17858_19662[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (18))){
var inst_17789 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
var statearr_17865_19663 = state_17799__$1;
(statearr_17865_19663[(2)] = inst_17789);

(statearr_17865_19663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (8))){
var inst_17764 = (state_17799[(13)]);
var state_17799__$1 = state_17799;
var statearr_17872_19669 = state_17799__$1;
(statearr_17872_19669[(2)] = inst_17764);

(statearr_17872_19669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13298__auto__ = null;
var cljs$core$async$state_machine__13298__auto____0 = (function (){
var statearr_17873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17873[(0)] = cljs$core$async$state_machine__13298__auto__);

(statearr_17873[(1)] = (1));

return statearr_17873;
});
var cljs$core$async$state_machine__13298__auto____1 = (function (state_17799){
while(true){
var ret_value__13299__auto__ = (function (){try{while(true){
var result__13300__auto__ = switch__13297__auto__(state_17799);
if(cljs.core.keyword_identical_QMARK_(result__13300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13300__auto__;
}
break;
}
}catch (e17874){var ex__13301__auto__ = e17874;
var statearr_17875_19676 = state_17799;
(statearr_17875_19676[(2)] = ex__13301__auto__);


if(cljs.core.seq((state_17799[(4)]))){
var statearr_17880_19677 = state_17799;
(statearr_17880_19677[(1)] = cljs.core.first((state_17799[(4)])));

} else {
throw ex__13301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19678 = state_17799;
state_17799 = G__19678;
continue;
} else {
return ret_value__13299__auto__;
}
break;
}
});
cljs$core$async$state_machine__13298__auto__ = function(state_17799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13298__auto____1.call(this,state_17799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13298__auto____0;
cljs$core$async$state_machine__13298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13298__auto____1;
return cljs$core$async$state_machine__13298__auto__;
})()
})();
var state__14098__auto__ = (function (){var statearr_17887 = f__14097__auto__();
(statearr_17887[(6)] = c__14096__auto___19600);

return statearr_17887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14098__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
