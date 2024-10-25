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
cljs.core.async.t_cljs$core$async15330 = (function (f,blockable,meta15331){
this.f = f;
this.blockable = blockable;
this.meta15331 = meta15331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15332,meta15331__$1){
var self__ = this;
var _15332__$1 = this;
return (new cljs.core.async.t_cljs$core$async15330(self__.f,self__.blockable,meta15331__$1));
}));

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15332){
var self__ = this;
var _15332__$1 = this;
return self__.meta15331;
}));

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15331","meta15331",-458586899,null)], null);
}));

(cljs.core.async.t_cljs$core$async15330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15330");

(cljs.core.async.t_cljs$core$async15330.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15330.
 */
cljs.core.async.__GT_t_cljs$core$async15330 = (function cljs$core$async$__GT_t_cljs$core$async15330(f,blockable,meta15331){
return (new cljs.core.async.t_cljs$core$async15330(f,blockable,meta15331));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15320 = arguments.length;
switch (G__15320) {
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
return (new cljs.core.async.t_cljs$core$async15330(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15365 = arguments.length;
switch (G__15365) {
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
var G__15380 = arguments.length;
switch (G__15380) {
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
var G__15392 = arguments.length;
switch (G__15392) {
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
var val_18572 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18572) : fn1.call(null, val_18572));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18572) : fn1.call(null, val_18572));
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
var G__15407 = arguments.length;
switch (G__15407) {
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
var n__5593__auto___18574 = n;
var x_18575 = (0);
while(true){
if((x_18575 < n__5593__auto___18574)){
(a[x_18575] = x_18575);

var G__18576 = (x_18575 + (1));
x_18575 = G__18576;
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
cljs.core.async.t_cljs$core$async15415 = (function (flag,meta15416){
this.flag = flag;
this.meta15416 = meta15416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15417,meta15416__$1){
var self__ = this;
var _15417__$1 = this;
return (new cljs.core.async.t_cljs$core$async15415(self__.flag,meta15416__$1));
}));

(cljs.core.async.t_cljs$core$async15415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15417){
var self__ = this;
var _15417__$1 = this;
return self__.meta15416;
}));

(cljs.core.async.t_cljs$core$async15415.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15415.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15416","meta15416",-964877285,null)], null);
}));

(cljs.core.async.t_cljs$core$async15415.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15415");

(cljs.core.async.t_cljs$core$async15415.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15415");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15415.
 */
cljs.core.async.__GT_t_cljs$core$async15415 = (function cljs$core$async$__GT_t_cljs$core$async15415(flag,meta15416){
return (new cljs.core.async.t_cljs$core$async15415(flag,meta15416));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15415(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15434 = (function (flag,cb,meta15435){
this.flag = flag;
this.cb = cb;
this.meta15435 = meta15435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15436,meta15435__$1){
var self__ = this;
var _15436__$1 = this;
return (new cljs.core.async.t_cljs$core$async15434(self__.flag,self__.cb,meta15435__$1));
}));

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15436){
var self__ = this;
var _15436__$1 = this;
return self__.meta15435;
}));

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15435","meta15435",-784967419,null)], null);
}));

(cljs.core.async.t_cljs$core$async15434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15434");

(cljs.core.async.t_cljs$core$async15434.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15434.
 */
cljs.core.async.__GT_t_cljs$core$async15434 = (function cljs$core$async$__GT_t_cljs$core$async15434(flag,cb,meta15435){
return (new cljs.core.async.t_cljs$core$async15434(flag,cb,meta15435));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15434(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15444_SHARP_){
var G__15453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15444_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15453) : fret.call(null, G__15453));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15445_SHARP_){
var G__15454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15445_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15454) : fret.call(null, G__15454));
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
var G__18590 = (i + (1));
i = G__18590;
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
var len__5726__auto___18591 = arguments.length;
var i__5727__auto___18592 = (0);
while(true){
if((i__5727__auto___18592 < len__5726__auto___18591)){
args__5732__auto__.push((arguments[i__5727__auto___18592]));

var G__18593 = (i__5727__auto___18592 + (1));
i__5727__auto___18592 = G__18593;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15460){
var map__15461 = p__15460;
var map__15461__$1 = cljs.core.__destructure_map(map__15461);
var opts = map__15461__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15456){
var G__15457 = cljs.core.first(seq15456);
var seq15456__$1 = cljs.core.next(seq15456);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15457,seq15456__$1);
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
var G__15477 = arguments.length;
switch (G__15477) {
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
var c__15237__auto___18595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_15519){
var state_val_15520 = (state_15519[(1)]);
if((state_val_15520 === (7))){
var inst_15511 = (state_15519[(2)]);
var state_15519__$1 = state_15519;
var statearr_15523_18596 = state_15519__$1;
(statearr_15523_18596[(2)] = inst_15511);

(statearr_15523_18596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (1))){
var state_15519__$1 = state_15519;
var statearr_15524_18600 = state_15519__$1;
(statearr_15524_18600[(2)] = null);

(statearr_15524_18600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (4))){
var inst_15491 = (state_15519[(7)]);
var inst_15491__$1 = (state_15519[(2)]);
var inst_15492 = (inst_15491__$1 == null);
var state_15519__$1 = (function (){var statearr_15525 = state_15519;
(statearr_15525[(7)] = inst_15491__$1);

return statearr_15525;
})();
if(cljs.core.truth_(inst_15492)){
var statearr_15526_18601 = state_15519__$1;
(statearr_15526_18601[(1)] = (5));

} else {
var statearr_15527_18602 = state_15519__$1;
(statearr_15527_18602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (13))){
var state_15519__$1 = state_15519;
var statearr_15529_18603 = state_15519__$1;
(statearr_15529_18603[(2)] = null);

(statearr_15529_18603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (6))){
var inst_15491 = (state_15519[(7)]);
var state_15519__$1 = state_15519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15519__$1,(11),to,inst_15491);
} else {
if((state_val_15520 === (3))){
var inst_15513 = (state_15519[(2)]);
var state_15519__$1 = state_15519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15519__$1,inst_15513);
} else {
if((state_val_15520 === (12))){
var state_15519__$1 = state_15519;
var statearr_15530_18604 = state_15519__$1;
(statearr_15530_18604[(2)] = null);

(statearr_15530_18604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (2))){
var state_15519__$1 = state_15519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15519__$1,(4),from);
} else {
if((state_val_15520 === (11))){
var inst_15504 = (state_15519[(2)]);
var state_15519__$1 = state_15519;
if(cljs.core.truth_(inst_15504)){
var statearr_15532_18606 = state_15519__$1;
(statearr_15532_18606[(1)] = (12));

} else {
var statearr_15533_18607 = state_15519__$1;
(statearr_15533_18607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (9))){
var state_15519__$1 = state_15519;
var statearr_15534_18608 = state_15519__$1;
(statearr_15534_18608[(2)] = null);

(statearr_15534_18608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (5))){
var state_15519__$1 = state_15519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15535_18610 = state_15519__$1;
(statearr_15535_18610[(1)] = (8));

} else {
var statearr_15536_18611 = state_15519__$1;
(statearr_15536_18611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (14))){
var inst_15509 = (state_15519[(2)]);
var state_15519__$1 = state_15519;
var statearr_15537_18614 = state_15519__$1;
(statearr_15537_18614[(2)] = inst_15509);

(statearr_15537_18614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (10))){
var inst_15500 = (state_15519[(2)]);
var state_15519__$1 = state_15519;
var statearr_15538_18615 = state_15519__$1;
(statearr_15538_18615[(2)] = inst_15500);

(statearr_15538_18615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (8))){
var inst_15497 = cljs.core.async.close_BANG_(to);
var state_15519__$1 = state_15519;
var statearr_15539_18616 = state_15519__$1;
(statearr_15539_18616[(2)] = inst_15497);

(statearr_15539_18616[(1)] = (10));


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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_15541 = [null,null,null,null,null,null,null,null];
(statearr_15541[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_15541[(1)] = (1));

return statearr_15541;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_15519){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_15519);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e15542){var ex__14299__auto__ = e15542;
var statearr_15543_18621 = state_15519;
(statearr_15543_18621[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_15519[(4)]))){
var statearr_15544_18622 = state_15519;
(statearr_15544_18622[(1)] = cljs.core.first((state_15519[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18623 = state_15519;
state_15519 = G__18623;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_15519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_15519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_15551 = f__15238__auto__();
(statearr_15551[(6)] = c__15237__auto___18595);

return statearr_15551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
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
var process__$1 = (function (p__15561){
var vec__15563 = p__15561;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15563,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15563,(1),null);
var job = vec__15563;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15237__auto___18625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_15574){
var state_val_15575 = (state_15574[(1)]);
if((state_val_15575 === (1))){
var state_15574__$1 = state_15574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15574__$1,(2),res,v);
} else {
if((state_val_15575 === (2))){
var inst_15568 = (state_15574[(2)]);
var inst_15572 = cljs.core.async.close_BANG_(res);
var state_15574__$1 = (function (){var statearr_15576 = state_15574;
(statearr_15576[(7)] = inst_15568);

return statearr_15576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15574__$1,inst_15572);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0 = (function (){
var statearr_15577 = [null,null,null,null,null,null,null,null];
(statearr_15577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__);

(statearr_15577[(1)] = (1));

return statearr_15577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1 = (function (state_15574){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_15574);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e15579){var ex__14299__auto__ = e15579;
var statearr_15580_18626 = state_15574;
(statearr_15580_18626[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_15574[(4)]))){
var statearr_15581_18627 = state_15574;
(statearr_15581_18627[(1)] = cljs.core.first((state_15574[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18628 = state_15574;
state_15574 = G__18628;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = function(state_15574){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1.call(this,state_15574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_15582 = f__15238__auto__();
(statearr_15582[(6)] = c__15237__auto___18625);

return statearr_15582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15583){
var vec__15584 = p__15583;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15584,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15584,(1),null);
var job = vec__15584;
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
var n__5593__auto___18632 = n;
var __18633 = (0);
while(true){
if((__18633 < n__5593__auto___18632)){
var G__15587_18634 = type;
var G__15587_18635__$1 = (((G__15587_18634 instanceof cljs.core.Keyword))?G__15587_18634.fqn:null);
switch (G__15587_18635__$1) {
case "compute":
var c__15237__auto___18637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18633,c__15237__auto___18637,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async){
return (function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = ((function (__18633,c__15237__auto___18637,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async){
return (function (state_15600){
var state_val_15601 = (state_15600[(1)]);
if((state_val_15601 === (1))){
var state_15600__$1 = state_15600;
var statearr_15602_18639 = state_15600__$1;
(statearr_15602_18639[(2)] = null);

(statearr_15602_18639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15601 === (2))){
var state_15600__$1 = state_15600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15600__$1,(4),jobs);
} else {
if((state_val_15601 === (3))){
var inst_15598 = (state_15600[(2)]);
var state_15600__$1 = state_15600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15600__$1,inst_15598);
} else {
if((state_val_15601 === (4))){
var inst_15590 = (state_15600[(2)]);
var inst_15591 = process__$1(inst_15590);
var state_15600__$1 = state_15600;
if(cljs.core.truth_(inst_15591)){
var statearr_15603_18645 = state_15600__$1;
(statearr_15603_18645[(1)] = (5));

} else {
var statearr_15604_18646 = state_15600__$1;
(statearr_15604_18646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15601 === (5))){
var state_15600__$1 = state_15600;
var statearr_15605_18647 = state_15600__$1;
(statearr_15605_18647[(2)] = null);

(statearr_15605_18647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15601 === (6))){
var state_15600__$1 = state_15600;
var statearr_15606_18654 = state_15600__$1;
(statearr_15606_18654[(2)] = null);

(statearr_15606_18654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15601 === (7))){
var inst_15596 = (state_15600[(2)]);
var state_15600__$1 = state_15600;
var statearr_15607_18655 = state_15600__$1;
(statearr_15607_18655[(2)] = inst_15596);

(statearr_15607_18655[(1)] = (3));


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
});})(__18633,c__15237__auto___18637,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async))
;
return ((function (__18633,switch__14295__auto__,c__15237__auto___18637,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0 = (function (){
var statearr_15609 = [null,null,null,null,null,null,null];
(statearr_15609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__);

(statearr_15609[(1)] = (1));

return statearr_15609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1 = (function (state_15600){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_15600);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e15611){var ex__14299__auto__ = e15611;
var statearr_15612_18656 = state_15600;
(statearr_15612_18656[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_15600[(4)]))){
var statearr_15613_18657 = state_15600;
(statearr_15613_18657[(1)] = cljs.core.first((state_15600[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18664 = state_15600;
state_15600 = G__18664;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = function(state_15600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1.call(this,state_15600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__;
})()
;})(__18633,switch__14295__auto__,c__15237__auto___18637,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async))
})();
var state__15239__auto__ = (function (){var statearr_15614 = f__15238__auto__();
(statearr_15614[(6)] = c__15237__auto___18637);

return statearr_15614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
});})(__18633,c__15237__auto___18637,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async))
);


break;
case "async":
var c__15237__auto___18665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18633,c__15237__auto___18665,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async){
return (function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = ((function (__18633,c__15237__auto___18665,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async){
return (function (state_15628){
var state_val_15629 = (state_15628[(1)]);
if((state_val_15629 === (1))){
var state_15628__$1 = state_15628;
var statearr_15635_18667 = state_15628__$1;
(statearr_15635_18667[(2)] = null);

(statearr_15635_18667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15629 === (2))){
var state_15628__$1 = state_15628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15628__$1,(4),jobs);
} else {
if((state_val_15629 === (3))){
var inst_15626 = (state_15628[(2)]);
var state_15628__$1 = state_15628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15628__$1,inst_15626);
} else {
if((state_val_15629 === (4))){
var inst_15618 = (state_15628[(2)]);
var inst_15619 = async(inst_15618);
var state_15628__$1 = state_15628;
if(cljs.core.truth_(inst_15619)){
var statearr_15638_18668 = state_15628__$1;
(statearr_15638_18668[(1)] = (5));

} else {
var statearr_15640_18669 = state_15628__$1;
(statearr_15640_18669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15629 === (5))){
var state_15628__$1 = state_15628;
var statearr_15641_18670 = state_15628__$1;
(statearr_15641_18670[(2)] = null);

(statearr_15641_18670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15629 === (6))){
var state_15628__$1 = state_15628;
var statearr_15642_18671 = state_15628__$1;
(statearr_15642_18671[(2)] = null);

(statearr_15642_18671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15629 === (7))){
var inst_15624 = (state_15628[(2)]);
var state_15628__$1 = state_15628;
var statearr_15643_18673 = state_15628__$1;
(statearr_15643_18673[(2)] = inst_15624);

(statearr_15643_18673[(1)] = (3));


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
});})(__18633,c__15237__auto___18665,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async))
;
return ((function (__18633,switch__14295__auto__,c__15237__auto___18665,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0 = (function (){
var statearr_15645 = [null,null,null,null,null,null,null];
(statearr_15645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__);

(statearr_15645[(1)] = (1));

return statearr_15645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1 = (function (state_15628){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_15628);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e15646){var ex__14299__auto__ = e15646;
var statearr_15647_18676 = state_15628;
(statearr_15647_18676[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_15628[(4)]))){
var statearr_15649_18677 = state_15628;
(statearr_15649_18677[(1)] = cljs.core.first((state_15628[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18678 = state_15628;
state_15628 = G__18678;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = function(state_15628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1.call(this,state_15628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__;
})()
;})(__18633,switch__14295__auto__,c__15237__auto___18665,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async))
})();
var state__15239__auto__ = (function (){var statearr_15650 = f__15238__auto__();
(statearr_15650[(6)] = c__15237__auto___18665);

return statearr_15650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
});})(__18633,c__15237__auto___18665,G__15587_18634,G__15587_18635__$1,n__5593__auto___18632,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15587_18635__$1)].join('')));

}

var G__18679 = (__18633 + (1));
__18633 = G__18679;
continue;
} else {
}
break;
}

var c__15237__auto___18680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_15691){
var state_val_15692 = (state_15691[(1)]);
if((state_val_15692 === (7))){
var inst_15686 = (state_15691[(2)]);
var state_15691__$1 = state_15691;
var statearr_15701_18682 = state_15691__$1;
(statearr_15701_18682[(2)] = inst_15686);

(statearr_15701_18682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15692 === (1))){
var state_15691__$1 = state_15691;
var statearr_15706_18687 = state_15691__$1;
(statearr_15706_18687[(2)] = null);

(statearr_15706_18687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15692 === (4))){
var inst_15658 = (state_15691[(7)]);
var inst_15658__$1 = (state_15691[(2)]);
var inst_15659 = (inst_15658__$1 == null);
var state_15691__$1 = (function (){var statearr_15707 = state_15691;
(statearr_15707[(7)] = inst_15658__$1);

return statearr_15707;
})();
if(cljs.core.truth_(inst_15659)){
var statearr_15708_18689 = state_15691__$1;
(statearr_15708_18689[(1)] = (5));

} else {
var statearr_15709_18691 = state_15691__$1;
(statearr_15709_18691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15692 === (6))){
var inst_15658 = (state_15691[(7)]);
var inst_15663 = (state_15691[(8)]);
var inst_15663__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15678 = [inst_15658,inst_15663__$1];
var inst_15679 = (new cljs.core.PersistentVector(null,2,(5),inst_15673,inst_15678,null));
var state_15691__$1 = (function (){var statearr_15713 = state_15691;
(statearr_15713[(8)] = inst_15663__$1);

return statearr_15713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15691__$1,(8),jobs,inst_15679);
} else {
if((state_val_15692 === (3))){
var inst_15688 = (state_15691[(2)]);
var state_15691__$1 = state_15691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15691__$1,inst_15688);
} else {
if((state_val_15692 === (2))){
var state_15691__$1 = state_15691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15691__$1,(4),from);
} else {
if((state_val_15692 === (9))){
var inst_15683 = (state_15691[(2)]);
var state_15691__$1 = (function (){var statearr_15715 = state_15691;
(statearr_15715[(9)] = inst_15683);

return statearr_15715;
})();
var statearr_15716_18693 = state_15691__$1;
(statearr_15716_18693[(2)] = null);

(statearr_15716_18693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15692 === (5))){
var inst_15661 = cljs.core.async.close_BANG_(jobs);
var state_15691__$1 = state_15691;
var statearr_15721_18695 = state_15691__$1;
(statearr_15721_18695[(2)] = inst_15661);

(statearr_15721_18695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15692 === (8))){
var inst_15663 = (state_15691[(8)]);
var inst_15681 = (state_15691[(2)]);
var state_15691__$1 = (function (){var statearr_15723 = state_15691;
(statearr_15723[(10)] = inst_15681);

return statearr_15723;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15691__$1,(9),results,inst_15663);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0 = (function (){
var statearr_15730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__);

(statearr_15730[(1)] = (1));

return statearr_15730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1 = (function (state_15691){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_15691);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e15732){var ex__14299__auto__ = e15732;
var statearr_15733_18698 = state_15691;
(statearr_15733_18698[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_15691[(4)]))){
var statearr_15736_18700 = state_15691;
(statearr_15736_18700[(1)] = cljs.core.first((state_15691[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18702 = state_15691;
state_15691 = G__18702;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = function(state_15691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1.call(this,state_15691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_15744 = f__15238__auto__();
(statearr_15744[(6)] = c__15237__auto___18680);

return statearr_15744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));


var c__15237__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_15796){
var state_val_15797 = (state_15796[(1)]);
if((state_val_15797 === (7))){
var inst_15791 = (state_15796[(2)]);
var state_15796__$1 = state_15796;
var statearr_15798_18703 = state_15796__$1;
(statearr_15798_18703[(2)] = inst_15791);

(statearr_15798_18703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (20))){
var state_15796__$1 = state_15796;
var statearr_15800_18704 = state_15796__$1;
(statearr_15800_18704[(2)] = null);

(statearr_15800_18704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (1))){
var state_15796__$1 = state_15796;
var statearr_15803_18705 = state_15796__$1;
(statearr_15803_18705[(2)] = null);

(statearr_15803_18705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (4))){
var inst_15749 = (state_15796[(7)]);
var inst_15749__$1 = (state_15796[(2)]);
var inst_15750 = (inst_15749__$1 == null);
var state_15796__$1 = (function (){var statearr_15804 = state_15796;
(statearr_15804[(7)] = inst_15749__$1);

return statearr_15804;
})();
if(cljs.core.truth_(inst_15750)){
var statearr_15805_18708 = state_15796__$1;
(statearr_15805_18708[(1)] = (5));

} else {
var statearr_15806_18711 = state_15796__$1;
(statearr_15806_18711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (15))){
var inst_15767 = (state_15796[(8)]);
var state_15796__$1 = state_15796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15796__$1,(18),to,inst_15767);
} else {
if((state_val_15797 === (21))){
var inst_15786 = (state_15796[(2)]);
var state_15796__$1 = state_15796;
var statearr_15808_18713 = state_15796__$1;
(statearr_15808_18713[(2)] = inst_15786);

(statearr_15808_18713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (13))){
var inst_15788 = (state_15796[(2)]);
var state_15796__$1 = (function (){var statearr_15814 = state_15796;
(statearr_15814[(9)] = inst_15788);

return statearr_15814;
})();
var statearr_15815_18714 = state_15796__$1;
(statearr_15815_18714[(2)] = null);

(statearr_15815_18714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (6))){
var inst_15749 = (state_15796[(7)]);
var state_15796__$1 = state_15796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15796__$1,(11),inst_15749);
} else {
if((state_val_15797 === (17))){
var inst_15781 = (state_15796[(2)]);
var state_15796__$1 = state_15796;
if(cljs.core.truth_(inst_15781)){
var statearr_15817_18715 = state_15796__$1;
(statearr_15817_18715[(1)] = (19));

} else {
var statearr_15818_18716 = state_15796__$1;
(statearr_15818_18716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (3))){
var inst_15793 = (state_15796[(2)]);
var state_15796__$1 = state_15796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15796__$1,inst_15793);
} else {
if((state_val_15797 === (12))){
var inst_15763 = (state_15796[(10)]);
var state_15796__$1 = state_15796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15796__$1,(14),inst_15763);
} else {
if((state_val_15797 === (2))){
var state_15796__$1 = state_15796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15796__$1,(4),results);
} else {
if((state_val_15797 === (19))){
var state_15796__$1 = state_15796;
var statearr_15821_18720 = state_15796__$1;
(statearr_15821_18720[(2)] = null);

(statearr_15821_18720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (11))){
var inst_15763 = (state_15796[(2)]);
var state_15796__$1 = (function (){var statearr_15824 = state_15796;
(statearr_15824[(10)] = inst_15763);

return statearr_15824;
})();
var statearr_15825_18721 = state_15796__$1;
(statearr_15825_18721[(2)] = null);

(statearr_15825_18721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (9))){
var state_15796__$1 = state_15796;
var statearr_15826_18722 = state_15796__$1;
(statearr_15826_18722[(2)] = null);

(statearr_15826_18722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (5))){
var state_15796__$1 = state_15796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15827_18723 = state_15796__$1;
(statearr_15827_18723[(1)] = (8));

} else {
var statearr_15828_18724 = state_15796__$1;
(statearr_15828_18724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (14))){
var inst_15767 = (state_15796[(8)]);
var inst_15770 = (state_15796[(11)]);
var inst_15767__$1 = (state_15796[(2)]);
var inst_15769 = (inst_15767__$1 == null);
var inst_15770__$1 = cljs.core.not(inst_15769);
var state_15796__$1 = (function (){var statearr_15829 = state_15796;
(statearr_15829[(8)] = inst_15767__$1);

(statearr_15829[(11)] = inst_15770__$1);

return statearr_15829;
})();
if(inst_15770__$1){
var statearr_15830_18728 = state_15796__$1;
(statearr_15830_18728[(1)] = (15));

} else {
var statearr_15831_18729 = state_15796__$1;
(statearr_15831_18729[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (16))){
var inst_15770 = (state_15796[(11)]);
var state_15796__$1 = state_15796;
var statearr_15832_18734 = state_15796__$1;
(statearr_15832_18734[(2)] = inst_15770);

(statearr_15832_18734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (10))){
var inst_15759 = (state_15796[(2)]);
var state_15796__$1 = state_15796;
var statearr_15833_18735 = state_15796__$1;
(statearr_15833_18735[(2)] = inst_15759);

(statearr_15833_18735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (18))){
var inst_15778 = (state_15796[(2)]);
var state_15796__$1 = state_15796;
var statearr_15834_18737 = state_15796__$1;
(statearr_15834_18737[(2)] = inst_15778);

(statearr_15834_18737[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15797 === (8))){
var inst_15756 = cljs.core.async.close_BANG_(to);
var state_15796__$1 = state_15796;
var statearr_15835_18738 = state_15796__$1;
(statearr_15835_18738[(2)] = inst_15756);

(statearr_15835_18738[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0 = (function (){
var statearr_15839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__);

(statearr_15839[(1)] = (1));

return statearr_15839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1 = (function (state_15796){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_15796);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e15843){var ex__14299__auto__ = e15843;
var statearr_15845_18743 = state_15796;
(statearr_15845_18743[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_15796[(4)]))){
var statearr_15846_18744 = state_15796;
(statearr_15846_18744[(1)] = cljs.core.first((state_15796[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18745 = state_15796;
state_15796 = G__18745;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__ = function(state_15796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1.call(this,state_15796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_15847 = f__15238__auto__();
(statearr_15847[(6)] = c__15237__auto__);

return statearr_15847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));

return c__15237__auto__;
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
var G__15851 = arguments.length;
switch (G__15851) {
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
var G__15855 = arguments.length;
switch (G__15855) {
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
var G__15864 = arguments.length;
switch (G__15864) {
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
var c__15237__auto___18765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_15903){
var state_val_15904 = (state_15903[(1)]);
if((state_val_15904 === (7))){
var inst_15898 = (state_15903[(2)]);
var state_15903__$1 = state_15903;
var statearr_15914_18766 = state_15903__$1;
(statearr_15914_18766[(2)] = inst_15898);

(statearr_15914_18766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (1))){
var state_15903__$1 = state_15903;
var statearr_15917_18767 = state_15903__$1;
(statearr_15917_18767[(2)] = null);

(statearr_15917_18767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (4))){
var inst_15879 = (state_15903[(7)]);
var inst_15879__$1 = (state_15903[(2)]);
var inst_15880 = (inst_15879__$1 == null);
var state_15903__$1 = (function (){var statearr_15922 = state_15903;
(statearr_15922[(7)] = inst_15879__$1);

return statearr_15922;
})();
if(cljs.core.truth_(inst_15880)){
var statearr_15923_18768 = state_15903__$1;
(statearr_15923_18768[(1)] = (5));

} else {
var statearr_15924_18769 = state_15903__$1;
(statearr_15924_18769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (13))){
var state_15903__$1 = state_15903;
var statearr_15928_18770 = state_15903__$1;
(statearr_15928_18770[(2)] = null);

(statearr_15928_18770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (6))){
var inst_15879 = (state_15903[(7)]);
var inst_15885 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15879) : p.call(null, inst_15879));
var state_15903__$1 = state_15903;
if(cljs.core.truth_(inst_15885)){
var statearr_15930_18771 = state_15903__$1;
(statearr_15930_18771[(1)] = (9));

} else {
var statearr_15931_18772 = state_15903__$1;
(statearr_15931_18772[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (3))){
var inst_15900 = (state_15903[(2)]);
var state_15903__$1 = state_15903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15903__$1,inst_15900);
} else {
if((state_val_15904 === (12))){
var state_15903__$1 = state_15903;
var statearr_15935_18773 = state_15903__$1;
(statearr_15935_18773[(2)] = null);

(statearr_15935_18773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (2))){
var state_15903__$1 = state_15903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15903__$1,(4),ch);
} else {
if((state_val_15904 === (11))){
var inst_15879 = (state_15903[(7)]);
var inst_15889 = (state_15903[(2)]);
var state_15903__$1 = state_15903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15903__$1,(8),inst_15889,inst_15879);
} else {
if((state_val_15904 === (9))){
var state_15903__$1 = state_15903;
var statearr_15942_18778 = state_15903__$1;
(statearr_15942_18778[(2)] = tc);

(statearr_15942_18778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (5))){
var inst_15882 = cljs.core.async.close_BANG_(tc);
var inst_15883 = cljs.core.async.close_BANG_(fc);
var state_15903__$1 = (function (){var statearr_15948 = state_15903;
(statearr_15948[(8)] = inst_15882);

return statearr_15948;
})();
var statearr_15949_18780 = state_15903__$1;
(statearr_15949_18780[(2)] = inst_15883);

(statearr_15949_18780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (14))){
var inst_15896 = (state_15903[(2)]);
var state_15903__$1 = state_15903;
var statearr_15951_18783 = state_15903__$1;
(statearr_15951_18783[(2)] = inst_15896);

(statearr_15951_18783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (10))){
var state_15903__$1 = state_15903;
var statearr_15958_18786 = state_15903__$1;
(statearr_15958_18786[(2)] = fc);

(statearr_15958_18786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15904 === (8))){
var inst_15891 = (state_15903[(2)]);
var state_15903__$1 = state_15903;
if(cljs.core.truth_(inst_15891)){
var statearr_15962_18787 = state_15903__$1;
(statearr_15962_18787[(1)] = (12));

} else {
var statearr_15964_18788 = state_15903__$1;
(statearr_15964_18788[(1)] = (13));

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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_15968 = [null,null,null,null,null,null,null,null,null];
(statearr_15968[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_15968[(1)] = (1));

return statearr_15968;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_15903){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_15903);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e15970){var ex__14299__auto__ = e15970;
var statearr_15971_18789 = state_15903;
(statearr_15971_18789[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_15903[(4)]))){
var statearr_15972_18790 = state_15903;
(statearr_15972_18790[(1)] = cljs.core.first((state_15903[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18791 = state_15903;
state_15903 = G__18791;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_15903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_15903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_15976 = f__15238__auto__();
(statearr_15976[(6)] = c__15237__auto___18765);

return statearr_15976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
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
var c__15237__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_16013){
var state_val_16015 = (state_16013[(1)]);
if((state_val_16015 === (7))){
var inst_16009 = (state_16013[(2)]);
var state_16013__$1 = state_16013;
var statearr_16019_18793 = state_16013__$1;
(statearr_16019_18793[(2)] = inst_16009);

(statearr_16019_18793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16015 === (1))){
var inst_15982 = init;
var inst_15983 = inst_15982;
var state_16013__$1 = (function (){var statearr_16021 = state_16013;
(statearr_16021[(7)] = inst_15983);

return statearr_16021;
})();
var statearr_16022_18797 = state_16013__$1;
(statearr_16022_18797[(2)] = null);

(statearr_16022_18797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16015 === (4))){
var inst_15990 = (state_16013[(8)]);
var inst_15990__$1 = (state_16013[(2)]);
var inst_15993 = (inst_15990__$1 == null);
var state_16013__$1 = (function (){var statearr_16026 = state_16013;
(statearr_16026[(8)] = inst_15990__$1);

return statearr_16026;
})();
if(cljs.core.truth_(inst_15993)){
var statearr_16027_18801 = state_16013__$1;
(statearr_16027_18801[(1)] = (5));

} else {
var statearr_16029_18802 = state_16013__$1;
(statearr_16029_18802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16015 === (6))){
var inst_15983 = (state_16013[(7)]);
var inst_15990 = (state_16013[(8)]);
var inst_15997 = (state_16013[(9)]);
var inst_15997__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15983,inst_15990) : f.call(null, inst_15983,inst_15990));
var inst_15998 = cljs.core.reduced_QMARK_(inst_15997__$1);
var state_16013__$1 = (function (){var statearr_16030 = state_16013;
(statearr_16030[(9)] = inst_15997__$1);

return statearr_16030;
})();
if(inst_15998){
var statearr_16031_18804 = state_16013__$1;
(statearr_16031_18804[(1)] = (8));

} else {
var statearr_16032_18805 = state_16013__$1;
(statearr_16032_18805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16015 === (3))){
var inst_16011 = (state_16013[(2)]);
var state_16013__$1 = state_16013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16013__$1,inst_16011);
} else {
if((state_val_16015 === (2))){
var state_16013__$1 = state_16013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16013__$1,(4),ch);
} else {
if((state_val_16015 === (9))){
var inst_15997 = (state_16013[(9)]);
var inst_15983 = inst_15997;
var state_16013__$1 = (function (){var statearr_16040 = state_16013;
(statearr_16040[(7)] = inst_15983);

return statearr_16040;
})();
var statearr_16046_18806 = state_16013__$1;
(statearr_16046_18806[(2)] = null);

(statearr_16046_18806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16015 === (5))){
var inst_15983 = (state_16013[(7)]);
var state_16013__$1 = state_16013;
var statearr_16048_18807 = state_16013__$1;
(statearr_16048_18807[(2)] = inst_15983);

(statearr_16048_18807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16015 === (10))){
var inst_16004 = (state_16013[(2)]);
var state_16013__$1 = state_16013;
var statearr_16050_18811 = state_16013__$1;
(statearr_16050_18811[(2)] = inst_16004);

(statearr_16050_18811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16015 === (8))){
var inst_15997 = (state_16013[(9)]);
var inst_16000 = cljs.core.deref(inst_15997);
var state_16013__$1 = state_16013;
var statearr_16053_18812 = state_16013__$1;
(statearr_16053_18812[(2)] = inst_16000);

(statearr_16053_18812[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14296__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14296__auto____0 = (function (){
var statearr_16055 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16055[(0)] = cljs$core$async$reduce_$_state_machine__14296__auto__);

(statearr_16055[(1)] = (1));

return statearr_16055;
});
var cljs$core$async$reduce_$_state_machine__14296__auto____1 = (function (state_16013){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_16013);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e16059){var ex__14299__auto__ = e16059;
var statearr_16060_18813 = state_16013;
(statearr_16060_18813[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_16013[(4)]))){
var statearr_16061_18814 = state_16013;
(statearr_16061_18814[(1)] = cljs.core.first((state_16013[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18821 = state_16013;
state_16013 = G__18821;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14296__auto__ = function(state_16013){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14296__auto____1.call(this,state_16013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14296__auto____0;
cljs$core$async$reduce_$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14296__auto____1;
return cljs$core$async$reduce_$_state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_16070 = f__15238__auto__();
(statearr_16070[(6)] = c__15237__auto__);

return statearr_16070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));

return c__15237__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__15237__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_16092){
var state_val_16094 = (state_16092[(1)]);
if((state_val_16094 === (1))){
var inst_16085 = cljs.core.async.reduce(f__$1,init,ch);
var state_16092__$1 = state_16092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16092__$1,(2),inst_16085);
} else {
if((state_val_16094 === (2))){
var inst_16087 = (state_16092[(2)]);
var inst_16089 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16087) : f__$1.call(null, inst_16087));
var state_16092__$1 = state_16092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16092__$1,inst_16089);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14296__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14296__auto____0 = (function (){
var statearr_16104 = [null,null,null,null,null,null,null];
(statearr_16104[(0)] = cljs$core$async$transduce_$_state_machine__14296__auto__);

(statearr_16104[(1)] = (1));

return statearr_16104;
});
var cljs$core$async$transduce_$_state_machine__14296__auto____1 = (function (state_16092){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_16092);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e16106){var ex__14299__auto__ = e16106;
var statearr_16107_18826 = state_16092;
(statearr_16107_18826[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_16092[(4)]))){
var statearr_16108_18827 = state_16092;
(statearr_16108_18827[(1)] = cljs.core.first((state_16092[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18831 = state_16092;
state_16092 = G__18831;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14296__auto__ = function(state_16092){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14296__auto____1.call(this,state_16092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14296__auto____0;
cljs$core$async$transduce_$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14296__auto____1;
return cljs$core$async$transduce_$_state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_16112 = f__15238__auto__();
(statearr_16112[(6)] = c__15237__auto__);

return statearr_16112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));

return c__15237__auto__;
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
var G__16118 = arguments.length;
switch (G__16118) {
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
var c__15237__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_16156){
var state_val_16157 = (state_16156[(1)]);
if((state_val_16157 === (7))){
var inst_16133 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
var statearr_16164_18842 = state_16156__$1;
(statearr_16164_18842[(2)] = inst_16133);

(statearr_16164_18842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (1))){
var inst_16126 = cljs.core.seq(coll);
var inst_16127 = inst_16126;
var state_16156__$1 = (function (){var statearr_16168 = state_16156;
(statearr_16168[(7)] = inst_16127);

return statearr_16168;
})();
var statearr_16169_18846 = state_16156__$1;
(statearr_16169_18846[(2)] = null);

(statearr_16169_18846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (4))){
var inst_16127 = (state_16156[(7)]);
var inst_16131 = cljs.core.first(inst_16127);
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16156__$1,(7),ch,inst_16131);
} else {
if((state_val_16157 === (13))){
var inst_16148 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
var statearr_16171_18848 = state_16156__$1;
(statearr_16171_18848[(2)] = inst_16148);

(statearr_16171_18848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (6))){
var inst_16137 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
if(cljs.core.truth_(inst_16137)){
var statearr_16172_18850 = state_16156__$1;
(statearr_16172_18850[(1)] = (8));

} else {
var statearr_16173_18851 = state_16156__$1;
(statearr_16173_18851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (3))){
var inst_16152 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16156__$1,inst_16152);
} else {
if((state_val_16157 === (12))){
var state_16156__$1 = state_16156;
var statearr_16175_18852 = state_16156__$1;
(statearr_16175_18852[(2)] = null);

(statearr_16175_18852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (2))){
var inst_16127 = (state_16156[(7)]);
var state_16156__$1 = state_16156;
if(cljs.core.truth_(inst_16127)){
var statearr_16176_18853 = state_16156__$1;
(statearr_16176_18853[(1)] = (4));

} else {
var statearr_16177_18854 = state_16156__$1;
(statearr_16177_18854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (11))){
var inst_16145 = cljs.core.async.close_BANG_(ch);
var state_16156__$1 = state_16156;
var statearr_16178_18855 = state_16156__$1;
(statearr_16178_18855[(2)] = inst_16145);

(statearr_16178_18855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (9))){
var state_16156__$1 = state_16156;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16179_18856 = state_16156__$1;
(statearr_16179_18856[(1)] = (11));

} else {
var statearr_16180_18857 = state_16156__$1;
(statearr_16180_18857[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (5))){
var inst_16127 = (state_16156[(7)]);
var state_16156__$1 = state_16156;
var statearr_16181_18858 = state_16156__$1;
(statearr_16181_18858[(2)] = inst_16127);

(statearr_16181_18858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (10))){
var inst_16150 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
var statearr_16182_18859 = state_16156__$1;
(statearr_16182_18859[(2)] = inst_16150);

(statearr_16182_18859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (8))){
var inst_16127 = (state_16156[(7)]);
var inst_16139 = cljs.core.next(inst_16127);
var inst_16127__$1 = inst_16139;
var state_16156__$1 = (function (){var statearr_16183 = state_16156;
(statearr_16183[(7)] = inst_16127__$1);

return statearr_16183;
})();
var statearr_16184_18867 = state_16156__$1;
(statearr_16184_18867[(2)] = null);

(statearr_16184_18867[(1)] = (2));


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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_16185 = [null,null,null,null,null,null,null,null];
(statearr_16185[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_16185[(1)] = (1));

return statearr_16185;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_16156){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_16156);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e16186){var ex__14299__auto__ = e16186;
var statearr_16187_18868 = state_16156;
(statearr_16187_18868[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_16156[(4)]))){
var statearr_16188_18869 = state_16156;
(statearr_16188_18869[(1)] = cljs.core.first((state_16156[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18879 = state_16156;
state_16156 = G__18879;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_16156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_16156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_16190 = f__15238__auto__();
(statearr_16190[(6)] = c__15237__auto__);

return statearr_16190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));

return c__15237__auto__;
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
var G__16198 = arguments.length;
switch (G__16198) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18888 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_18888(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18889 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18889(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18901 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18901(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18902 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18902(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16203 = (function (ch,cs,meta16204){
this.ch = ch;
this.cs = cs;
this.meta16204 = meta16204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16205,meta16204__$1){
var self__ = this;
var _16205__$1 = this;
return (new cljs.core.async.t_cljs$core$async16203(self__.ch,self__.cs,meta16204__$1));
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16205){
var self__ = this;
var _16205__$1 = this;
return self__.meta16204;
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16204","meta16204",459537759,null)], null);
}));

(cljs.core.async.t_cljs$core$async16203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16203");

(cljs.core.async.t_cljs$core$async16203.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16203.
 */
cljs.core.async.__GT_t_cljs$core$async16203 = (function cljs$core$async$__GT_t_cljs$core$async16203(ch,cs,meta16204){
return (new cljs.core.async.t_cljs$core$async16203(ch,cs,meta16204));
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
var m = (new cljs.core.async.t_cljs$core$async16203(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15237__auto___18910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_16383){
var state_val_16384 = (state_16383[(1)]);
if((state_val_16384 === (7))){
var inst_16366 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
var statearr_16390_18911 = state_16383__$1;
(statearr_16390_18911[(2)] = inst_16366);

(statearr_16390_18911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (20))){
var inst_16248 = (state_16383[(7)]);
var inst_16260 = cljs.core.first(inst_16248);
var inst_16261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16260,(0),null);
var inst_16262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16260,(1),null);
var state_16383__$1 = (function (){var statearr_16394 = state_16383;
(statearr_16394[(8)] = inst_16261);

return statearr_16394;
})();
if(cljs.core.truth_(inst_16262)){
var statearr_16395_18912 = state_16383__$1;
(statearr_16395_18912[(1)] = (22));

} else {
var statearr_16396_18913 = state_16383__$1;
(statearr_16396_18913[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (27))){
var inst_16211 = (state_16383[(9)]);
var inst_16300 = (state_16383[(10)]);
var inst_16291 = (state_16383[(11)]);
var inst_16293 = (state_16383[(12)]);
var inst_16300__$1 = cljs.core._nth(inst_16291,inst_16293);
var inst_16301 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16300__$1,inst_16211,done);
var state_16383__$1 = (function (){var statearr_16402 = state_16383;
(statearr_16402[(10)] = inst_16300__$1);

return statearr_16402;
})();
if(cljs.core.truth_(inst_16301)){
var statearr_16403_18914 = state_16383__$1;
(statearr_16403_18914[(1)] = (30));

} else {
var statearr_16406_18915 = state_16383__$1;
(statearr_16406_18915[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (1))){
var state_16383__$1 = state_16383;
var statearr_16408_18916 = state_16383__$1;
(statearr_16408_18916[(2)] = null);

(statearr_16408_18916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (24))){
var inst_16248 = (state_16383[(7)]);
var inst_16267 = (state_16383[(2)]);
var inst_16269 = cljs.core.next(inst_16248);
var inst_16220 = inst_16269;
var inst_16221 = null;
var inst_16222 = (0);
var inst_16223 = (0);
var state_16383__$1 = (function (){var statearr_16410 = state_16383;
(statearr_16410[(13)] = inst_16267);

(statearr_16410[(14)] = inst_16221);

(statearr_16410[(15)] = inst_16220);

(statearr_16410[(16)] = inst_16222);

(statearr_16410[(17)] = inst_16223);

return statearr_16410;
})();
var statearr_16414_18926 = state_16383__$1;
(statearr_16414_18926[(2)] = null);

(statearr_16414_18926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (39))){
var state_16383__$1 = state_16383;
var statearr_16422_18927 = state_16383__$1;
(statearr_16422_18927[(2)] = null);

(statearr_16422_18927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (4))){
var inst_16211 = (state_16383[(9)]);
var inst_16211__$1 = (state_16383[(2)]);
var inst_16212 = (inst_16211__$1 == null);
var state_16383__$1 = (function (){var statearr_16426 = state_16383;
(statearr_16426[(9)] = inst_16211__$1);

return statearr_16426;
})();
if(cljs.core.truth_(inst_16212)){
var statearr_16430_18932 = state_16383__$1;
(statearr_16430_18932[(1)] = (5));

} else {
var statearr_16432_18933 = state_16383__$1;
(statearr_16432_18933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (15))){
var inst_16221 = (state_16383[(14)]);
var inst_16220 = (state_16383[(15)]);
var inst_16222 = (state_16383[(16)]);
var inst_16223 = (state_16383[(17)]);
var inst_16244 = (state_16383[(2)]);
var inst_16245 = (inst_16223 + (1));
var tmp16416 = inst_16221;
var tmp16417 = inst_16220;
var tmp16418 = inst_16222;
var inst_16220__$1 = tmp16417;
var inst_16221__$1 = tmp16416;
var inst_16222__$1 = tmp16418;
var inst_16223__$1 = inst_16245;
var state_16383__$1 = (function (){var statearr_16436 = state_16383;
(statearr_16436[(14)] = inst_16221__$1);

(statearr_16436[(15)] = inst_16220__$1);

(statearr_16436[(16)] = inst_16222__$1);

(statearr_16436[(17)] = inst_16223__$1);

(statearr_16436[(18)] = inst_16244);

return statearr_16436;
})();
var statearr_16439_18936 = state_16383__$1;
(statearr_16439_18936[(2)] = null);

(statearr_16439_18936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (21))){
var inst_16272 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
var statearr_16446_18937 = state_16383__$1;
(statearr_16446_18937[(2)] = inst_16272);

(statearr_16446_18937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (31))){
var inst_16300 = (state_16383[(10)]);
var inst_16306 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16300);
var state_16383__$1 = state_16383;
var statearr_16447_18939 = state_16383__$1;
(statearr_16447_18939[(2)] = inst_16306);

(statearr_16447_18939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (32))){
var inst_16290 = (state_16383[(19)]);
var inst_16291 = (state_16383[(11)]);
var inst_16292 = (state_16383[(20)]);
var inst_16293 = (state_16383[(12)]);
var inst_16308 = (state_16383[(2)]);
var inst_16309 = (inst_16293 + (1));
var tmp16441 = inst_16290;
var tmp16442 = inst_16291;
var tmp16443 = inst_16292;
var inst_16290__$1 = tmp16441;
var inst_16291__$1 = tmp16442;
var inst_16292__$1 = tmp16443;
var inst_16293__$1 = inst_16309;
var state_16383__$1 = (function (){var statearr_16451 = state_16383;
(statearr_16451[(19)] = inst_16290__$1);

(statearr_16451[(21)] = inst_16308);

(statearr_16451[(11)] = inst_16291__$1);

(statearr_16451[(20)] = inst_16292__$1);

(statearr_16451[(12)] = inst_16293__$1);

return statearr_16451;
})();
var statearr_16453_18942 = state_16383__$1;
(statearr_16453_18942[(2)] = null);

(statearr_16453_18942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (40))){
var inst_16332 = (state_16383[(22)]);
var inst_16338 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16332);
var state_16383__$1 = state_16383;
var statearr_16454_18948 = state_16383__$1;
(statearr_16454_18948[(2)] = inst_16338);

(statearr_16454_18948[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (33))){
var inst_16314 = (state_16383[(23)]);
var inst_16323 = cljs.core.chunked_seq_QMARK_(inst_16314);
var state_16383__$1 = state_16383;
if(inst_16323){
var statearr_16457_18950 = state_16383__$1;
(statearr_16457_18950[(1)] = (36));

} else {
var statearr_16458_18951 = state_16383__$1;
(statearr_16458_18951[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (13))){
var inst_16232 = (state_16383[(24)]);
var inst_16241 = cljs.core.async.close_BANG_(inst_16232);
var state_16383__$1 = state_16383;
var statearr_16466_18957 = state_16383__$1;
(statearr_16466_18957[(2)] = inst_16241);

(statearr_16466_18957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (22))){
var inst_16261 = (state_16383[(8)]);
var inst_16264 = cljs.core.async.close_BANG_(inst_16261);
var state_16383__$1 = state_16383;
var statearr_16494_18958 = state_16383__$1;
(statearr_16494_18958[(2)] = inst_16264);

(statearr_16494_18958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (36))){
var inst_16314 = (state_16383[(23)]);
var inst_16326 = cljs.core.chunk_first(inst_16314);
var inst_16327 = cljs.core.chunk_rest(inst_16314);
var inst_16328 = cljs.core.count(inst_16326);
var inst_16290 = inst_16327;
var inst_16291 = inst_16326;
var inst_16292 = inst_16328;
var inst_16293 = (0);
var state_16383__$1 = (function (){var statearr_16498 = state_16383;
(statearr_16498[(19)] = inst_16290);

(statearr_16498[(11)] = inst_16291);

(statearr_16498[(20)] = inst_16292);

(statearr_16498[(12)] = inst_16293);

return statearr_16498;
})();
var statearr_16500_18962 = state_16383__$1;
(statearr_16500_18962[(2)] = null);

(statearr_16500_18962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (41))){
var inst_16314 = (state_16383[(23)]);
var inst_16340 = (state_16383[(2)]);
var inst_16341 = cljs.core.next(inst_16314);
var inst_16290 = inst_16341;
var inst_16291 = null;
var inst_16292 = (0);
var inst_16293 = (0);
var state_16383__$1 = (function (){var statearr_16503 = state_16383;
(statearr_16503[(19)] = inst_16290);

(statearr_16503[(25)] = inst_16340);

(statearr_16503[(11)] = inst_16291);

(statearr_16503[(20)] = inst_16292);

(statearr_16503[(12)] = inst_16293);

return statearr_16503;
})();
var statearr_16505_18964 = state_16383__$1;
(statearr_16505_18964[(2)] = null);

(statearr_16505_18964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (43))){
var state_16383__$1 = state_16383;
var statearr_16506_18969 = state_16383__$1;
(statearr_16506_18969[(2)] = null);

(statearr_16506_18969[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (29))){
var inst_16349 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
var statearr_16507_18975 = state_16383__$1;
(statearr_16507_18975[(2)] = inst_16349);

(statearr_16507_18975[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (44))){
var inst_16362 = (state_16383[(2)]);
var state_16383__$1 = (function (){var statearr_16508 = state_16383;
(statearr_16508[(26)] = inst_16362);

return statearr_16508;
})();
var statearr_16513_18976 = state_16383__$1;
(statearr_16513_18976[(2)] = null);

(statearr_16513_18976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (6))){
var inst_16282 = (state_16383[(27)]);
var inst_16281 = cljs.core.deref(cs);
var inst_16282__$1 = cljs.core.keys(inst_16281);
var inst_16283 = cljs.core.count(inst_16282__$1);
var inst_16284 = cljs.core.reset_BANG_(dctr,inst_16283);
var inst_16289 = cljs.core.seq(inst_16282__$1);
var inst_16290 = inst_16289;
var inst_16291 = null;
var inst_16292 = (0);
var inst_16293 = (0);
var state_16383__$1 = (function (){var statearr_16542 = state_16383;
(statearr_16542[(28)] = inst_16284);

(statearr_16542[(27)] = inst_16282__$1);

(statearr_16542[(19)] = inst_16290);

(statearr_16542[(11)] = inst_16291);

(statearr_16542[(20)] = inst_16292);

(statearr_16542[(12)] = inst_16293);

return statearr_16542;
})();
var statearr_16543_18977 = state_16383__$1;
(statearr_16543_18977[(2)] = null);

(statearr_16543_18977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (28))){
var inst_16314 = (state_16383[(23)]);
var inst_16290 = (state_16383[(19)]);
var inst_16314__$1 = cljs.core.seq(inst_16290);
var state_16383__$1 = (function (){var statearr_16547 = state_16383;
(statearr_16547[(23)] = inst_16314__$1);

return statearr_16547;
})();
if(inst_16314__$1){
var statearr_16549_18978 = state_16383__$1;
(statearr_16549_18978[(1)] = (33));

} else {
var statearr_16554_18979 = state_16383__$1;
(statearr_16554_18979[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (25))){
var inst_16292 = (state_16383[(20)]);
var inst_16293 = (state_16383[(12)]);
var inst_16297 = (inst_16293 < inst_16292);
var inst_16298 = inst_16297;
var state_16383__$1 = state_16383;
if(cljs.core.truth_(inst_16298)){
var statearr_16555_18981 = state_16383__$1;
(statearr_16555_18981[(1)] = (27));

} else {
var statearr_16556_18982 = state_16383__$1;
(statearr_16556_18982[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (34))){
var state_16383__$1 = state_16383;
var statearr_16561_18984 = state_16383__$1;
(statearr_16561_18984[(2)] = null);

(statearr_16561_18984[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (17))){
var state_16383__$1 = state_16383;
var statearr_16564_18985 = state_16383__$1;
(statearr_16564_18985[(2)] = null);

(statearr_16564_18985[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (3))){
var inst_16368 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16383__$1,inst_16368);
} else {
if((state_val_16384 === (12))){
var inst_16277 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
var statearr_16569_18992 = state_16383__$1;
(statearr_16569_18992[(2)] = inst_16277);

(statearr_16569_18992[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (2))){
var state_16383__$1 = state_16383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16383__$1,(4),ch);
} else {
if((state_val_16384 === (23))){
var state_16383__$1 = state_16383;
var statearr_16576_19001 = state_16383__$1;
(statearr_16576_19001[(2)] = null);

(statearr_16576_19001[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (35))){
var inst_16347 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
var statearr_16581_19002 = state_16383__$1;
(statearr_16581_19002[(2)] = inst_16347);

(statearr_16581_19002[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (19))){
var inst_16248 = (state_16383[(7)]);
var inst_16252 = cljs.core.chunk_first(inst_16248);
var inst_16253 = cljs.core.chunk_rest(inst_16248);
var inst_16254 = cljs.core.count(inst_16252);
var inst_16220 = inst_16253;
var inst_16221 = inst_16252;
var inst_16222 = inst_16254;
var inst_16223 = (0);
var state_16383__$1 = (function (){var statearr_16584 = state_16383;
(statearr_16584[(14)] = inst_16221);

(statearr_16584[(15)] = inst_16220);

(statearr_16584[(16)] = inst_16222);

(statearr_16584[(17)] = inst_16223);

return statearr_16584;
})();
var statearr_16585_19009 = state_16383__$1;
(statearr_16585_19009[(2)] = null);

(statearr_16585_19009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (11))){
var inst_16220 = (state_16383[(15)]);
var inst_16248 = (state_16383[(7)]);
var inst_16248__$1 = cljs.core.seq(inst_16220);
var state_16383__$1 = (function (){var statearr_16592 = state_16383;
(statearr_16592[(7)] = inst_16248__$1);

return statearr_16592;
})();
if(inst_16248__$1){
var statearr_16593_19015 = state_16383__$1;
(statearr_16593_19015[(1)] = (16));

} else {
var statearr_16594_19016 = state_16383__$1;
(statearr_16594_19016[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (9))){
var inst_16279 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
var statearr_16598_19017 = state_16383__$1;
(statearr_16598_19017[(2)] = inst_16279);

(statearr_16598_19017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (5))){
var inst_16218 = cljs.core.deref(cs);
var inst_16219 = cljs.core.seq(inst_16218);
var inst_16220 = inst_16219;
var inst_16221 = null;
var inst_16222 = (0);
var inst_16223 = (0);
var state_16383__$1 = (function (){var statearr_16604 = state_16383;
(statearr_16604[(14)] = inst_16221);

(statearr_16604[(15)] = inst_16220);

(statearr_16604[(16)] = inst_16222);

(statearr_16604[(17)] = inst_16223);

return statearr_16604;
})();
var statearr_16605_19022 = state_16383__$1;
(statearr_16605_19022[(2)] = null);

(statearr_16605_19022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (14))){
var state_16383__$1 = state_16383;
var statearr_16606_19027 = state_16383__$1;
(statearr_16606_19027[(2)] = null);

(statearr_16606_19027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (45))){
var inst_16359 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
var statearr_16608_19029 = state_16383__$1;
(statearr_16608_19029[(2)] = inst_16359);

(statearr_16608_19029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (26))){
var inst_16282 = (state_16383[(27)]);
var inst_16351 = (state_16383[(2)]);
var inst_16356 = cljs.core.seq(inst_16282);
var state_16383__$1 = (function (){var statearr_16609 = state_16383;
(statearr_16609[(29)] = inst_16351);

return statearr_16609;
})();
if(inst_16356){
var statearr_16610_19040 = state_16383__$1;
(statearr_16610_19040[(1)] = (42));

} else {
var statearr_16611_19041 = state_16383__$1;
(statearr_16611_19041[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (16))){
var inst_16248 = (state_16383[(7)]);
var inst_16250 = cljs.core.chunked_seq_QMARK_(inst_16248);
var state_16383__$1 = state_16383;
if(inst_16250){
var statearr_16612_19042 = state_16383__$1;
(statearr_16612_19042[(1)] = (19));

} else {
var statearr_16613_19043 = state_16383__$1;
(statearr_16613_19043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (38))){
var inst_16344 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
var statearr_16616_19049 = state_16383__$1;
(statearr_16616_19049[(2)] = inst_16344);

(statearr_16616_19049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (30))){
var state_16383__$1 = state_16383;
var statearr_16618_19054 = state_16383__$1;
(statearr_16618_19054[(2)] = null);

(statearr_16618_19054[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (10))){
var inst_16221 = (state_16383[(14)]);
var inst_16223 = (state_16383[(17)]);
var inst_16231 = cljs.core._nth(inst_16221,inst_16223);
var inst_16232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16231,(0),null);
var inst_16233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16231,(1),null);
var state_16383__$1 = (function (){var statearr_16622 = state_16383;
(statearr_16622[(24)] = inst_16232);

return statearr_16622;
})();
if(cljs.core.truth_(inst_16233)){
var statearr_16624_19055 = state_16383__$1;
(statearr_16624_19055[(1)] = (13));

} else {
var statearr_16625_19056 = state_16383__$1;
(statearr_16625_19056[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (18))){
var inst_16275 = (state_16383[(2)]);
var state_16383__$1 = state_16383;
var statearr_16626_19058 = state_16383__$1;
(statearr_16626_19058[(2)] = inst_16275);

(statearr_16626_19058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (42))){
var state_16383__$1 = state_16383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16383__$1,(45),dchan);
} else {
if((state_val_16384 === (37))){
var inst_16211 = (state_16383[(9)]);
var inst_16314 = (state_16383[(23)]);
var inst_16332 = (state_16383[(22)]);
var inst_16332__$1 = cljs.core.first(inst_16314);
var inst_16334 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16332__$1,inst_16211,done);
var state_16383__$1 = (function (){var statearr_16628 = state_16383;
(statearr_16628[(22)] = inst_16332__$1);

return statearr_16628;
})();
if(cljs.core.truth_(inst_16334)){
var statearr_16629_19059 = state_16383__$1;
(statearr_16629_19059[(1)] = (39));

} else {
var statearr_16630_19060 = state_16383__$1;
(statearr_16630_19060[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16384 === (8))){
var inst_16222 = (state_16383[(16)]);
var inst_16223 = (state_16383[(17)]);
var inst_16225 = (inst_16223 < inst_16222);
var inst_16226 = inst_16225;
var state_16383__$1 = state_16383;
if(cljs.core.truth_(inst_16226)){
var statearr_16631_19063 = state_16383__$1;
(statearr_16631_19063[(1)] = (10));

} else {
var statearr_16632_19065 = state_16383__$1;
(statearr_16632_19065[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14296__auto__ = null;
var cljs$core$async$mult_$_state_machine__14296__auto____0 = (function (){
var statearr_16633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16633[(0)] = cljs$core$async$mult_$_state_machine__14296__auto__);

(statearr_16633[(1)] = (1));

return statearr_16633;
});
var cljs$core$async$mult_$_state_machine__14296__auto____1 = (function (state_16383){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_16383);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e16634){var ex__14299__auto__ = e16634;
var statearr_16635_19079 = state_16383;
(statearr_16635_19079[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_16383[(4)]))){
var statearr_16636_19089 = state_16383;
(statearr_16636_19089[(1)] = cljs.core.first((state_16383[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19090 = state_16383;
state_16383 = G__19090;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14296__auto__ = function(state_16383){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14296__auto____1.call(this,state_16383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14296__auto____0;
cljs$core$async$mult_$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14296__auto____1;
return cljs$core$async$mult_$_state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_16637 = f__15238__auto__();
(statearr_16637[(6)] = c__15237__auto___18910);

return statearr_16637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
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
var G__16640 = arguments.length;
switch (G__16640) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19099 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19099(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19118 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19118(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19134 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19134(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19156 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19156(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19167 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19167(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19184 = arguments.length;
var i__5727__auto___19185 = (0);
while(true){
if((i__5727__auto___19185 < len__5726__auto___19184)){
args__5732__auto__.push((arguments[i__5727__auto___19185]));

var G__19189 = (i__5727__auto___19185 + (1));
i__5727__auto___19185 = G__19189;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16718){
var map__16719 = p__16718;
var map__16719__$1 = cljs.core.__destructure_map(map__16719);
var opts = map__16719__$1;
var statearr_16721_19201 = state;
(statearr_16721_19201[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16722_19202 = state;
(statearr_16722_19202[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16728_19206 = state;
(statearr_16728_19206[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16709){
var G__16710 = cljs.core.first(seq16709);
var seq16709__$1 = cljs.core.next(seq16709);
var G__16711 = cljs.core.first(seq16709__$1);
var seq16709__$2 = cljs.core.next(seq16709__$1);
var G__16712 = cljs.core.first(seq16709__$2);
var seq16709__$3 = cljs.core.next(seq16709__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16710,G__16711,G__16712,seq16709__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16746 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16747){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16747 = meta16747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16748,meta16747__$1){
var self__ = this;
var _16748__$1 = this;
return (new cljs.core.async.t_cljs$core$async16746(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16747__$1));
}));

(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16748){
var self__ = this;
var _16748__$1 = this;
return self__.meta16747;
}));

(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16747","meta16747",-1416344946,null)], null);
}));

(cljs.core.async.t_cljs$core$async16746.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16746");

(cljs.core.async.t_cljs$core$async16746.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16746");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16746.
 */
cljs.core.async.__GT_t_cljs$core$async16746 = (function cljs$core$async$__GT_t_cljs$core$async16746(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16747){
return (new cljs.core.async.t_cljs$core$async16746(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16747));
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
var m = (new cljs.core.async.t_cljs$core$async16746(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15237__auto___19357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_16892){
var state_val_16893 = (state_16892[(1)]);
if((state_val_16893 === (7))){
var inst_16838 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
if(cljs.core.truth_(inst_16838)){
var statearr_16897_19367 = state_16892__$1;
(statearr_16897_19367[(1)] = (8));

} else {
var statearr_16898_19369 = state_16892__$1;
(statearr_16898_19369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (20))){
var inst_16798 = (state_16892[(7)]);
var state_16892__$1 = state_16892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16892__$1,(23),out,inst_16798);
} else {
if((state_val_16893 === (1))){
var inst_16778 = calc_state();
var inst_16779 = cljs.core.__destructure_map(inst_16778);
var inst_16780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16779,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16779,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16779,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16784 = inst_16778;
var state_16892__$1 = (function (){var statearr_16905 = state_16892;
(statearr_16905[(8)] = inst_16783);

(statearr_16905[(9)] = inst_16782);

(statearr_16905[(10)] = inst_16784);

(statearr_16905[(11)] = inst_16780);

return statearr_16905;
})();
var statearr_16910_19376 = state_16892__$1;
(statearr_16910_19376[(2)] = null);

(statearr_16910_19376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (24))){
var inst_16787 = (state_16892[(12)]);
var inst_16784 = inst_16787;
var state_16892__$1 = (function (){var statearr_16915 = state_16892;
(statearr_16915[(10)] = inst_16784);

return statearr_16915;
})();
var statearr_16920_19379 = state_16892__$1;
(statearr_16920_19379[(2)] = null);

(statearr_16920_19379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (4))){
var inst_16832 = (state_16892[(13)]);
var inst_16798 = (state_16892[(7)]);
var inst_16796 = (state_16892[(2)]);
var inst_16798__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16796,(0),null);
var inst_16829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16796,(1),null);
var inst_16832__$1 = (inst_16798__$1 == null);
var state_16892__$1 = (function (){var statearr_16921 = state_16892;
(statearr_16921[(13)] = inst_16832__$1);

(statearr_16921[(14)] = inst_16829);

(statearr_16921[(7)] = inst_16798__$1);

return statearr_16921;
})();
if(cljs.core.truth_(inst_16832__$1)){
var statearr_16922_19384 = state_16892__$1;
(statearr_16922_19384[(1)] = (5));

} else {
var statearr_16923_19385 = state_16892__$1;
(statearr_16923_19385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (15))){
var inst_16788 = (state_16892[(15)]);
var inst_16856 = (state_16892[(16)]);
var inst_16856__$1 = cljs.core.empty_QMARK_(inst_16788);
var state_16892__$1 = (function (){var statearr_16924 = state_16892;
(statearr_16924[(16)] = inst_16856__$1);

return statearr_16924;
})();
if(inst_16856__$1){
var statearr_16925_19390 = state_16892__$1;
(statearr_16925_19390[(1)] = (17));

} else {
var statearr_16926_19391 = state_16892__$1;
(statearr_16926_19391[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (21))){
var inst_16787 = (state_16892[(12)]);
var inst_16784 = inst_16787;
var state_16892__$1 = (function (){var statearr_16934 = state_16892;
(statearr_16934[(10)] = inst_16784);

return statearr_16934;
})();
var statearr_16935_19393 = state_16892__$1;
(statearr_16935_19393[(2)] = null);

(statearr_16935_19393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (13))){
var inst_16849 = (state_16892[(2)]);
var inst_16850 = calc_state();
var inst_16784 = inst_16850;
var state_16892__$1 = (function (){var statearr_16942 = state_16892;
(statearr_16942[(17)] = inst_16849);

(statearr_16942[(10)] = inst_16784);

return statearr_16942;
})();
var statearr_16946_19394 = state_16892__$1;
(statearr_16946_19394[(2)] = null);

(statearr_16946_19394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (22))){
var inst_16878 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
var statearr_16948_19395 = state_16892__$1;
(statearr_16948_19395[(2)] = inst_16878);

(statearr_16948_19395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (6))){
var inst_16829 = (state_16892[(14)]);
var inst_16836 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16829,change);
var state_16892__$1 = state_16892;
var statearr_16955_19400 = state_16892__$1;
(statearr_16955_19400[(2)] = inst_16836);

(statearr_16955_19400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (25))){
var state_16892__$1 = state_16892;
var statearr_16956_19401 = state_16892__$1;
(statearr_16956_19401[(2)] = null);

(statearr_16956_19401[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (17))){
var inst_16829 = (state_16892[(14)]);
var inst_16789 = (state_16892[(18)]);
var inst_16859 = (inst_16789.cljs$core$IFn$_invoke$arity$1 ? inst_16789.cljs$core$IFn$_invoke$arity$1(inst_16829) : inst_16789.call(null, inst_16829));
var inst_16860 = cljs.core.not(inst_16859);
var state_16892__$1 = state_16892;
var statearr_16957_19402 = state_16892__$1;
(statearr_16957_19402[(2)] = inst_16860);

(statearr_16957_19402[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (3))){
var inst_16883 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16892__$1,inst_16883);
} else {
if((state_val_16893 === (12))){
var state_16892__$1 = state_16892;
var statearr_16963_19403 = state_16892__$1;
(statearr_16963_19403[(2)] = null);

(statearr_16963_19403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (2))){
var inst_16787 = (state_16892[(12)]);
var inst_16784 = (state_16892[(10)]);
var inst_16787__$1 = cljs.core.__destructure_map(inst_16784);
var inst_16788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16787__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16787__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16787__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16892__$1 = (function (){var statearr_16971 = state_16892;
(statearr_16971[(15)] = inst_16788);

(statearr_16971[(18)] = inst_16789);

(statearr_16971[(12)] = inst_16787__$1);

return statearr_16971;
})();
return cljs.core.async.ioc_alts_BANG_(state_16892__$1,(4),inst_16791);
} else {
if((state_val_16893 === (23))){
var inst_16869 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
if(cljs.core.truth_(inst_16869)){
var statearr_16980_19404 = state_16892__$1;
(statearr_16980_19404[(1)] = (24));

} else {
var statearr_16984_19405 = state_16892__$1;
(statearr_16984_19405[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (19))){
var inst_16864 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
var statearr_16988_19406 = state_16892__$1;
(statearr_16988_19406[(2)] = inst_16864);

(statearr_16988_19406[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (11))){
var inst_16829 = (state_16892[(14)]);
var inst_16846 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16829);
var state_16892__$1 = state_16892;
var statearr_17022_19407 = state_16892__$1;
(statearr_17022_19407[(2)] = inst_16846);

(statearr_17022_19407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (9))){
var inst_16788 = (state_16892[(15)]);
var inst_16829 = (state_16892[(14)]);
var inst_16853 = (state_16892[(19)]);
var inst_16853__$1 = (inst_16788.cljs$core$IFn$_invoke$arity$1 ? inst_16788.cljs$core$IFn$_invoke$arity$1(inst_16829) : inst_16788.call(null, inst_16829));
var state_16892__$1 = (function (){var statearr_17025 = state_16892;
(statearr_17025[(19)] = inst_16853__$1);

return statearr_17025;
})();
if(cljs.core.truth_(inst_16853__$1)){
var statearr_17026_19408 = state_16892__$1;
(statearr_17026_19408[(1)] = (14));

} else {
var statearr_17027_19409 = state_16892__$1;
(statearr_17027_19409[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (5))){
var inst_16832 = (state_16892[(13)]);
var state_16892__$1 = state_16892;
var statearr_17032_19410 = state_16892__$1;
(statearr_17032_19410[(2)] = inst_16832);

(statearr_17032_19410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (14))){
var inst_16853 = (state_16892[(19)]);
var state_16892__$1 = state_16892;
var statearr_17033_19411 = state_16892__$1;
(statearr_17033_19411[(2)] = inst_16853);

(statearr_17033_19411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (26))){
var inst_16874 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
var statearr_17034_19412 = state_16892__$1;
(statearr_17034_19412[(2)] = inst_16874);

(statearr_17034_19412[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (16))){
var inst_16866 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
if(cljs.core.truth_(inst_16866)){
var statearr_17035_19413 = state_16892__$1;
(statearr_17035_19413[(1)] = (20));

} else {
var statearr_17036_19414 = state_16892__$1;
(statearr_17036_19414[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (10))){
var inst_16880 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
var statearr_17037_19415 = state_16892__$1;
(statearr_17037_19415[(2)] = inst_16880);

(statearr_17037_19415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (18))){
var inst_16856 = (state_16892[(16)]);
var state_16892__$1 = state_16892;
var statearr_17038_19416 = state_16892__$1;
(statearr_17038_19416[(2)] = inst_16856);

(statearr_17038_19416[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (8))){
var inst_16798 = (state_16892[(7)]);
var inst_16843 = (inst_16798 == null);
var state_16892__$1 = state_16892;
if(cljs.core.truth_(inst_16843)){
var statearr_17039_19422 = state_16892__$1;
(statearr_17039_19422[(1)] = (11));

} else {
var statearr_17041_19423 = state_16892__$1;
(statearr_17041_19423[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14296__auto__ = null;
var cljs$core$async$mix_$_state_machine__14296__auto____0 = (function (){
var statearr_17043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17043[(0)] = cljs$core$async$mix_$_state_machine__14296__auto__);

(statearr_17043[(1)] = (1));

return statearr_17043;
});
var cljs$core$async$mix_$_state_machine__14296__auto____1 = (function (state_16892){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_16892);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e17045){var ex__14299__auto__ = e17045;
var statearr_17049_19426 = state_16892;
(statearr_17049_19426[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_16892[(4)]))){
var statearr_17050_19427 = state_16892;
(statearr_17050_19427[(1)] = cljs.core.first((state_16892[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19428 = state_16892;
state_16892 = G__19428;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14296__auto__ = function(state_16892){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14296__auto____1.call(this,state_16892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14296__auto____0;
cljs$core$async$mix_$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14296__auto____1;
return cljs$core$async$mix_$_state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_17051 = f__15238__auto__();
(statearr_17051[(6)] = c__15237__auto___19357);

return statearr_17051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19441 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19441(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19454 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19454(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19464 = (function() {
var G__19465 = null;
var G__19465__1 = (function (p){
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
var G__19465__2 = (function (p,v){
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
G__19465 = function(p,v){
switch(arguments.length){
case 1:
return G__19465__1.call(this,p);
case 2:
return G__19465__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19465.cljs$core$IFn$_invoke$arity$1 = G__19465__1;
G__19465.cljs$core$IFn$_invoke$arity$2 = G__19465__2;
return G__19465;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17070 = arguments.length;
switch (G__17070) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19464(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19464(p,v);
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
cljs.core.async.t_cljs$core$async17084 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17085){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17085 = meta17085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17086,meta17085__$1){
var self__ = this;
var _17086__$1 = this;
return (new cljs.core.async.t_cljs$core$async17084(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17085__$1));
}));

(cljs.core.async.t_cljs$core$async17084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17086){
var self__ = this;
var _17086__$1 = this;
return self__.meta17085;
}));

(cljs.core.async.t_cljs$core$async17084.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17084.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17084.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17084.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async17084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17085","meta17085",2074606216,null)], null);
}));

(cljs.core.async.t_cljs$core$async17084.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17084");

(cljs.core.async.t_cljs$core$async17084.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17084");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17084.
 */
cljs.core.async.__GT_t_cljs$core$async17084 = (function cljs$core$async$__GT_t_cljs$core$async17084(ch,topic_fn,buf_fn,mults,ensure_mult,meta17085){
return (new cljs.core.async.t_cljs$core$async17084(ch,topic_fn,buf_fn,mults,ensure_mult,meta17085));
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
var G__17081 = arguments.length;
switch (G__17081) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17079_SHARP_){
if(cljs.core.truth_((p1__17079_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17079_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17079_SHARP_.call(null, topic)))){
return p1__17079_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17079_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17084(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15237__auto___19520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_17190){
var state_val_17191 = (state_17190[(1)]);
if((state_val_17191 === (7))){
var inst_17184 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
var statearr_17199_19522 = state_17190__$1;
(statearr_17199_19522[(2)] = inst_17184);

(statearr_17199_19522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (20))){
var state_17190__$1 = state_17190;
var statearr_17201_19523 = state_17190__$1;
(statearr_17201_19523[(2)] = null);

(statearr_17201_19523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (1))){
var state_17190__$1 = state_17190;
var statearr_17202_19527 = state_17190__$1;
(statearr_17202_19527[(2)] = null);

(statearr_17202_19527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (24))){
var inst_17166 = (state_17190[(7)]);
var inst_17176 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17166);
var state_17190__$1 = state_17190;
var statearr_17204_19529 = state_17190__$1;
(statearr_17204_19529[(2)] = inst_17176);

(statearr_17204_19529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (4))){
var inst_17107 = (state_17190[(8)]);
var inst_17107__$1 = (state_17190[(2)]);
var inst_17108 = (inst_17107__$1 == null);
var state_17190__$1 = (function (){var statearr_17209 = state_17190;
(statearr_17209[(8)] = inst_17107__$1);

return statearr_17209;
})();
if(cljs.core.truth_(inst_17108)){
var statearr_17210_19530 = state_17190__$1;
(statearr_17210_19530[(1)] = (5));

} else {
var statearr_17211_19531 = state_17190__$1;
(statearr_17211_19531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (15))){
var inst_17160 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
var statearr_17212_19533 = state_17190__$1;
(statearr_17212_19533[(2)] = inst_17160);

(statearr_17212_19533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (21))){
var inst_17181 = (state_17190[(2)]);
var state_17190__$1 = (function (){var statearr_17214 = state_17190;
(statearr_17214[(9)] = inst_17181);

return statearr_17214;
})();
var statearr_17215_19534 = state_17190__$1;
(statearr_17215_19534[(2)] = null);

(statearr_17215_19534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (13))){
var inst_17134 = (state_17190[(10)]);
var inst_17138 = cljs.core.chunked_seq_QMARK_(inst_17134);
var state_17190__$1 = state_17190;
if(inst_17138){
var statearr_17223_19535 = state_17190__$1;
(statearr_17223_19535[(1)] = (16));

} else {
var statearr_17224_19537 = state_17190__$1;
(statearr_17224_19537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (22))){
var inst_17173 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
if(cljs.core.truth_(inst_17173)){
var statearr_17225_19539 = state_17190__$1;
(statearr_17225_19539[(1)] = (23));

} else {
var statearr_17226_19540 = state_17190__$1;
(statearr_17226_19540[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (6))){
var inst_17107 = (state_17190[(8)]);
var inst_17166 = (state_17190[(7)]);
var inst_17168 = (state_17190[(11)]);
var inst_17166__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17107) : topic_fn.call(null, inst_17107));
var inst_17167 = cljs.core.deref(mults);
var inst_17168__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17167,inst_17166__$1);
var state_17190__$1 = (function (){var statearr_17234 = state_17190;
(statearr_17234[(7)] = inst_17166__$1);

(statearr_17234[(11)] = inst_17168__$1);

return statearr_17234;
})();
if(cljs.core.truth_(inst_17168__$1)){
var statearr_17238_19542 = state_17190__$1;
(statearr_17238_19542[(1)] = (19));

} else {
var statearr_17239_19543 = state_17190__$1;
(statearr_17239_19543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (25))){
var inst_17178 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
var statearr_17242_19544 = state_17190__$1;
(statearr_17242_19544[(2)] = inst_17178);

(statearr_17242_19544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (17))){
var inst_17134 = (state_17190[(10)]);
var inst_17147 = cljs.core.first(inst_17134);
var inst_17152 = cljs.core.async.muxch_STAR_(inst_17147);
var inst_17153 = cljs.core.async.close_BANG_(inst_17152);
var inst_17154 = cljs.core.next(inst_17134);
var inst_17118 = inst_17154;
var inst_17119 = null;
var inst_17120 = (0);
var inst_17121 = (0);
var state_17190__$1 = (function (){var statearr_17249 = state_17190;
(statearr_17249[(12)] = inst_17153);

(statearr_17249[(13)] = inst_17120);

(statearr_17249[(14)] = inst_17119);

(statearr_17249[(15)] = inst_17121);

(statearr_17249[(16)] = inst_17118);

return statearr_17249;
})();
var statearr_17250_19545 = state_17190__$1;
(statearr_17250_19545[(2)] = null);

(statearr_17250_19545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (3))){
var inst_17186 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17190__$1,inst_17186);
} else {
if((state_val_17191 === (12))){
var inst_17162 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
var statearr_17254_19550 = state_17190__$1;
(statearr_17254_19550[(2)] = inst_17162);

(statearr_17254_19550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (2))){
var state_17190__$1 = state_17190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17190__$1,(4),ch);
} else {
if((state_val_17191 === (23))){
var state_17190__$1 = state_17190;
var statearr_17255_19551 = state_17190__$1;
(statearr_17255_19551[(2)] = null);

(statearr_17255_19551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (19))){
var inst_17107 = (state_17190[(8)]);
var inst_17168 = (state_17190[(11)]);
var inst_17170 = cljs.core.async.muxch_STAR_(inst_17168);
var state_17190__$1 = state_17190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17190__$1,(22),inst_17170,inst_17107);
} else {
if((state_val_17191 === (11))){
var inst_17118 = (state_17190[(16)]);
var inst_17134 = (state_17190[(10)]);
var inst_17134__$1 = cljs.core.seq(inst_17118);
var state_17190__$1 = (function (){var statearr_17261 = state_17190;
(statearr_17261[(10)] = inst_17134__$1);

return statearr_17261;
})();
if(inst_17134__$1){
var statearr_17265_19553 = state_17190__$1;
(statearr_17265_19553[(1)] = (13));

} else {
var statearr_17266_19557 = state_17190__$1;
(statearr_17266_19557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (9))){
var inst_17164 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
var statearr_17269_19558 = state_17190__$1;
(statearr_17269_19558[(2)] = inst_17164);

(statearr_17269_19558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (5))){
var inst_17114 = cljs.core.deref(mults);
var inst_17116 = cljs.core.vals(inst_17114);
var inst_17117 = cljs.core.seq(inst_17116);
var inst_17118 = inst_17117;
var inst_17119 = null;
var inst_17120 = (0);
var inst_17121 = (0);
var state_17190__$1 = (function (){var statearr_17270 = state_17190;
(statearr_17270[(13)] = inst_17120);

(statearr_17270[(14)] = inst_17119);

(statearr_17270[(15)] = inst_17121);

(statearr_17270[(16)] = inst_17118);

return statearr_17270;
})();
var statearr_17280_19566 = state_17190__$1;
(statearr_17280_19566[(2)] = null);

(statearr_17280_19566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (14))){
var state_17190__$1 = state_17190;
var statearr_17284_19568 = state_17190__$1;
(statearr_17284_19568[(2)] = null);

(statearr_17284_19568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (16))){
var inst_17134 = (state_17190[(10)]);
var inst_17140 = cljs.core.chunk_first(inst_17134);
var inst_17142 = cljs.core.chunk_rest(inst_17134);
var inst_17144 = cljs.core.count(inst_17140);
var inst_17118 = inst_17142;
var inst_17119 = inst_17140;
var inst_17120 = inst_17144;
var inst_17121 = (0);
var state_17190__$1 = (function (){var statearr_17294 = state_17190;
(statearr_17294[(13)] = inst_17120);

(statearr_17294[(14)] = inst_17119);

(statearr_17294[(15)] = inst_17121);

(statearr_17294[(16)] = inst_17118);

return statearr_17294;
})();
var statearr_17300_19570 = state_17190__$1;
(statearr_17300_19570[(2)] = null);

(statearr_17300_19570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (10))){
var inst_17120 = (state_17190[(13)]);
var inst_17119 = (state_17190[(14)]);
var inst_17121 = (state_17190[(15)]);
var inst_17118 = (state_17190[(16)]);
var inst_17127 = cljs.core._nth(inst_17119,inst_17121);
var inst_17128 = cljs.core.async.muxch_STAR_(inst_17127);
var inst_17129 = cljs.core.async.close_BANG_(inst_17128);
var inst_17131 = (inst_17121 + (1));
var tmp17281 = inst_17120;
var tmp17282 = inst_17119;
var tmp17283 = inst_17118;
var inst_17118__$1 = tmp17283;
var inst_17119__$1 = tmp17282;
var inst_17120__$1 = tmp17281;
var inst_17121__$1 = inst_17131;
var state_17190__$1 = (function (){var statearr_17301 = state_17190;
(statearr_17301[(13)] = inst_17120__$1);

(statearr_17301[(17)] = inst_17129);

(statearr_17301[(14)] = inst_17119__$1);

(statearr_17301[(15)] = inst_17121__$1);

(statearr_17301[(16)] = inst_17118__$1);

return statearr_17301;
})();
var statearr_17305_19573 = state_17190__$1;
(statearr_17305_19573[(2)] = null);

(statearr_17305_19573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (18))){
var inst_17157 = (state_17190[(2)]);
var state_17190__$1 = state_17190;
var statearr_17309_19574 = state_17190__$1;
(statearr_17309_19574[(2)] = inst_17157);

(statearr_17309_19574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17191 === (8))){
var inst_17120 = (state_17190[(13)]);
var inst_17121 = (state_17190[(15)]);
var inst_17123 = (inst_17121 < inst_17120);
var inst_17124 = inst_17123;
var state_17190__$1 = state_17190;
if(cljs.core.truth_(inst_17124)){
var statearr_17313_19576 = state_17190__$1;
(statearr_17313_19576[(1)] = (10));

} else {
var statearr_17314_19577 = state_17190__$1;
(statearr_17314_19577[(1)] = (11));

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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_17315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17315[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_17315[(1)] = (1));

return statearr_17315;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_17190){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_17190);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e17316){var ex__14299__auto__ = e17316;
var statearr_17318_19580 = state_17190;
(statearr_17318_19580[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_17190[(4)]))){
var statearr_17319_19581 = state_17190;
(statearr_17319_19581[(1)] = cljs.core.first((state_17190[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19582 = state_17190;
state_17190 = G__19582;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_17190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_17190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_17320 = f__15238__auto__();
(statearr_17320[(6)] = c__15237__auto___19520);

return statearr_17320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
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
var G__17329 = arguments.length;
switch (G__17329) {
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
var G__17340 = arguments.length;
switch (G__17340) {
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
var G__17352 = arguments.length;
switch (G__17352) {
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
var c__15237__auto___19599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_17424){
var state_val_17425 = (state_17424[(1)]);
if((state_val_17425 === (7))){
var state_17424__$1 = state_17424;
var statearr_17429_19603 = state_17424__$1;
(statearr_17429_19603[(2)] = null);

(statearr_17429_19603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (1))){
var state_17424__$1 = state_17424;
var statearr_17430_19604 = state_17424__$1;
(statearr_17430_19604[(2)] = null);

(statearr_17430_19604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (4))){
var inst_17364 = (state_17424[(7)]);
var inst_17365 = (state_17424[(8)]);
var inst_17368 = (inst_17365 < inst_17364);
var state_17424__$1 = state_17424;
if(cljs.core.truth_(inst_17368)){
var statearr_17431_19605 = state_17424__$1;
(statearr_17431_19605[(1)] = (6));

} else {
var statearr_17435_19607 = state_17424__$1;
(statearr_17435_19607[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (15))){
var inst_17397 = (state_17424[(9)]);
var inst_17415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17397);
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17424__$1,(17),out,inst_17415);
} else {
if((state_val_17425 === (13))){
var inst_17397 = (state_17424[(9)]);
var inst_17397__$1 = (state_17424[(2)]);
var inst_17398 = cljs.core.some(cljs.core.nil_QMARK_,inst_17397__$1);
var state_17424__$1 = (function (){var statearr_17439 = state_17424;
(statearr_17439[(9)] = inst_17397__$1);

return statearr_17439;
})();
if(cljs.core.truth_(inst_17398)){
var statearr_17443_19611 = state_17424__$1;
(statearr_17443_19611[(1)] = (14));

} else {
var statearr_17445_19612 = state_17424__$1;
(statearr_17445_19612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (6))){
var state_17424__$1 = state_17424;
var statearr_17449_19614 = state_17424__$1;
(statearr_17449_19614[(2)] = null);

(statearr_17449_19614[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (17))){
var inst_17417 = (state_17424[(2)]);
var state_17424__$1 = (function (){var statearr_17451 = state_17424;
(statearr_17451[(10)] = inst_17417);

return statearr_17451;
})();
var statearr_17452_19618 = state_17424__$1;
(statearr_17452_19618[(2)] = null);

(statearr_17452_19618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (3))){
var inst_17422 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17424__$1,inst_17422);
} else {
if((state_val_17425 === (12))){
var _ = (function (){var statearr_17453 = state_17424;
(statearr_17453[(4)] = cljs.core.rest((state_17424[(4)])));

return statearr_17453;
})();
var state_17424__$1 = state_17424;
var ex17450 = (state_17424__$1[(2)]);
var statearr_17454_19619 = state_17424__$1;
(statearr_17454_19619[(5)] = ex17450);


if((ex17450 instanceof Object)){
var statearr_17462_19620 = state_17424__$1;
(statearr_17462_19620[(1)] = (11));

(statearr_17462_19620[(5)] = null);

} else {
throw ex17450;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (2))){
var inst_17361 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17364 = cnt;
var inst_17365 = (0);
var state_17424__$1 = (function (){var statearr_17472 = state_17424;
(statearr_17472[(11)] = inst_17361);

(statearr_17472[(7)] = inst_17364);

(statearr_17472[(8)] = inst_17365);

return statearr_17472;
})();
var statearr_17473_19625 = state_17424__$1;
(statearr_17473_19625[(2)] = null);

(statearr_17473_19625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (11))){
var inst_17374 = (state_17424[(2)]);
var inst_17375 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17424__$1 = (function (){var statearr_17474 = state_17424;
(statearr_17474[(12)] = inst_17374);

return statearr_17474;
})();
var statearr_17475_19627 = state_17424__$1;
(statearr_17475_19627[(2)] = inst_17375);

(statearr_17475_19627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (9))){
var inst_17365 = (state_17424[(8)]);
var _ = (function (){var statearr_17476 = state_17424;
(statearr_17476[(4)] = cljs.core.cons((12),(state_17424[(4)])));

return statearr_17476;
})();
var inst_17381 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17365) : chs__$1.call(null, inst_17365));
var inst_17382 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17365) : done.call(null, inst_17365));
var inst_17383 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17381,inst_17382);
var ___$1 = (function (){var statearr_17477 = state_17424;
(statearr_17477[(4)] = cljs.core.rest((state_17424[(4)])));

return statearr_17477;
})();
var state_17424__$1 = state_17424;
var statearr_17478_19628 = state_17424__$1;
(statearr_17478_19628[(2)] = inst_17383);

(statearr_17478_19628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (5))){
var inst_17393 = (state_17424[(2)]);
var state_17424__$1 = (function (){var statearr_17479 = state_17424;
(statearr_17479[(13)] = inst_17393);

return statearr_17479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17424__$1,(13),dchan);
} else {
if((state_val_17425 === (14))){
var inst_17400 = cljs.core.async.close_BANG_(out);
var state_17424__$1 = state_17424;
var statearr_17480_19630 = state_17424__$1;
(statearr_17480_19630[(2)] = inst_17400);

(statearr_17480_19630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (16))){
var inst_17420 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
var statearr_17489_19633 = state_17424__$1;
(statearr_17489_19633[(2)] = inst_17420);

(statearr_17489_19633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (10))){
var inst_17365 = (state_17424[(8)]);
var inst_17386 = (state_17424[(2)]);
var inst_17387 = (inst_17365 + (1));
var inst_17365__$1 = inst_17387;
var state_17424__$1 = (function (){var statearr_17496 = state_17424;
(statearr_17496[(14)] = inst_17386);

(statearr_17496[(8)] = inst_17365__$1);

return statearr_17496;
})();
var statearr_17497_19634 = state_17424__$1;
(statearr_17497_19634[(2)] = null);

(statearr_17497_19634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (8))){
var inst_17391 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
var statearr_17498_19635 = state_17424__$1;
(statearr_17498_19635[(2)] = inst_17391);

(statearr_17498_19635[(1)] = (5));


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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_17505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17505[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_17505[(1)] = (1));

return statearr_17505;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_17424){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_17424);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e17506){var ex__14299__auto__ = e17506;
var statearr_17507_19639 = state_17424;
(statearr_17507_19639[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_17424[(4)]))){
var statearr_17508_19640 = state_17424;
(statearr_17508_19640[(1)] = cljs.core.first((state_17424[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19641 = state_17424;
state_17424 = G__19641;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_17424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_17424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_17509 = f__15238__auto__();
(statearr_17509[(6)] = c__15237__auto___19599);

return statearr_17509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
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
var G__17532 = arguments.length;
switch (G__17532) {
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
var c__15237__auto___19644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_17573){
var state_val_17574 = (state_17573[(1)]);
if((state_val_17574 === (7))){
var inst_17552 = (state_17573[(7)]);
var inst_17551 = (state_17573[(8)]);
var inst_17551__$1 = (state_17573[(2)]);
var inst_17552__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17551__$1,(0),null);
var inst_17553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17551__$1,(1),null);
var inst_17554 = (inst_17552__$1 == null);
var state_17573__$1 = (function (){var statearr_17575 = state_17573;
(statearr_17575[(7)] = inst_17552__$1);

(statearr_17575[(9)] = inst_17553);

(statearr_17575[(8)] = inst_17551__$1);

return statearr_17575;
})();
if(cljs.core.truth_(inst_17554)){
var statearr_17579_19650 = state_17573__$1;
(statearr_17579_19650[(1)] = (8));

} else {
var statearr_17580_19651 = state_17573__$1;
(statearr_17580_19651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (1))){
var inst_17541 = cljs.core.vec(chs);
var inst_17542 = inst_17541;
var state_17573__$1 = (function (){var statearr_17590 = state_17573;
(statearr_17590[(10)] = inst_17542);

return statearr_17590;
})();
var statearr_17591_19652 = state_17573__$1;
(statearr_17591_19652[(2)] = null);

(statearr_17591_19652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (4))){
var inst_17542 = (state_17573[(10)]);
var state_17573__$1 = state_17573;
return cljs.core.async.ioc_alts_BANG_(state_17573__$1,(7),inst_17542);
} else {
if((state_val_17574 === (6))){
var inst_17569 = (state_17573[(2)]);
var state_17573__$1 = state_17573;
var statearr_17592_19653 = state_17573__$1;
(statearr_17592_19653[(2)] = inst_17569);

(statearr_17592_19653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (3))){
var inst_17571 = (state_17573[(2)]);
var state_17573__$1 = state_17573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17573__$1,inst_17571);
} else {
if((state_val_17574 === (2))){
var inst_17542 = (state_17573[(10)]);
var inst_17544 = cljs.core.count(inst_17542);
var inst_17545 = (inst_17544 > (0));
var state_17573__$1 = state_17573;
if(cljs.core.truth_(inst_17545)){
var statearr_17594_19661 = state_17573__$1;
(statearr_17594_19661[(1)] = (4));

} else {
var statearr_17595_19662 = state_17573__$1;
(statearr_17595_19662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (11))){
var inst_17542 = (state_17573[(10)]);
var inst_17562 = (state_17573[(2)]);
var tmp17593 = inst_17542;
var inst_17542__$1 = tmp17593;
var state_17573__$1 = (function (){var statearr_17597 = state_17573;
(statearr_17597[(10)] = inst_17542__$1);

(statearr_17597[(11)] = inst_17562);

return statearr_17597;
})();
var statearr_17599_19663 = state_17573__$1;
(statearr_17599_19663[(2)] = null);

(statearr_17599_19663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (9))){
var inst_17552 = (state_17573[(7)]);
var state_17573__$1 = state_17573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17573__$1,(11),out,inst_17552);
} else {
if((state_val_17574 === (5))){
var inst_17567 = cljs.core.async.close_BANG_(out);
var state_17573__$1 = state_17573;
var statearr_17602_19668 = state_17573__$1;
(statearr_17602_19668[(2)] = inst_17567);

(statearr_17602_19668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (10))){
var inst_17565 = (state_17573[(2)]);
var state_17573__$1 = state_17573;
var statearr_17603_19669 = state_17573__$1;
(statearr_17603_19669[(2)] = inst_17565);

(statearr_17603_19669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (8))){
var inst_17542 = (state_17573[(10)]);
var inst_17552 = (state_17573[(7)]);
var inst_17553 = (state_17573[(9)]);
var inst_17551 = (state_17573[(8)]);
var inst_17557 = (function (){var cs = inst_17542;
var vec__17547 = inst_17551;
var v = inst_17552;
var c = inst_17553;
return (function (p1__17524_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17524_SHARP_);
});
})();
var inst_17558 = cljs.core.filterv(inst_17557,inst_17542);
var inst_17542__$1 = inst_17558;
var state_17573__$1 = (function (){var statearr_17607 = state_17573;
(statearr_17607[(10)] = inst_17542__$1);

return statearr_17607;
})();
var statearr_17608_19670 = state_17573__$1;
(statearr_17608_19670[(2)] = null);

(statearr_17608_19670[(1)] = (2));


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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_17609 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17609[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_17609[(1)] = (1));

return statearr_17609;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_17573){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_17573);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e17610){var ex__14299__auto__ = e17610;
var statearr_17611_19671 = state_17573;
(statearr_17611_19671[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_17573[(4)]))){
var statearr_17615_19672 = state_17573;
(statearr_17615_19672[(1)] = cljs.core.first((state_17573[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19673 = state_17573;
state_17573 = G__19673;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_17573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_17573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_17617 = f__15238__auto__();
(statearr_17617[(6)] = c__15237__auto___19644);

return statearr_17617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
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
var G__17624 = arguments.length;
switch (G__17624) {
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
var c__15237__auto___19682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_17654){
var state_val_17655 = (state_17654[(1)]);
if((state_val_17655 === (7))){
var inst_17636 = (state_17654[(7)]);
var inst_17636__$1 = (state_17654[(2)]);
var inst_17637 = (inst_17636__$1 == null);
var inst_17638 = cljs.core.not(inst_17637);
var state_17654__$1 = (function (){var statearr_17666 = state_17654;
(statearr_17666[(7)] = inst_17636__$1);

return statearr_17666;
})();
if(inst_17638){
var statearr_17667_19684 = state_17654__$1;
(statearr_17667_19684[(1)] = (8));

} else {
var statearr_17671_19685 = state_17654__$1;
(statearr_17671_19685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (1))){
var inst_17631 = (0);
var state_17654__$1 = (function (){var statearr_17672 = state_17654;
(statearr_17672[(8)] = inst_17631);

return statearr_17672;
})();
var statearr_17674_19686 = state_17654__$1;
(statearr_17674_19686[(2)] = null);

(statearr_17674_19686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (4))){
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17654__$1,(7),ch);
} else {
if((state_val_17655 === (6))){
var inst_17649 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17675_19687 = state_17654__$1;
(statearr_17675_19687[(2)] = inst_17649);

(statearr_17675_19687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (3))){
var inst_17651 = (state_17654[(2)]);
var inst_17652 = cljs.core.async.close_BANG_(out);
var state_17654__$1 = (function (){var statearr_17677 = state_17654;
(statearr_17677[(9)] = inst_17651);

return statearr_17677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17654__$1,inst_17652);
} else {
if((state_val_17655 === (2))){
var inst_17631 = (state_17654[(8)]);
var inst_17633 = (inst_17631 < n);
var state_17654__$1 = state_17654;
if(cljs.core.truth_(inst_17633)){
var statearr_17679_19690 = state_17654__$1;
(statearr_17679_19690[(1)] = (4));

} else {
var statearr_17680_19691 = state_17654__$1;
(statearr_17680_19691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (11))){
var inst_17631 = (state_17654[(8)]);
var inst_17641 = (state_17654[(2)]);
var inst_17642 = (inst_17631 + (1));
var inst_17631__$1 = inst_17642;
var state_17654__$1 = (function (){var statearr_17687 = state_17654;
(statearr_17687[(8)] = inst_17631__$1);

(statearr_17687[(10)] = inst_17641);

return statearr_17687;
})();
var statearr_17688_19692 = state_17654__$1;
(statearr_17688_19692[(2)] = null);

(statearr_17688_19692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (9))){
var state_17654__$1 = state_17654;
var statearr_17689_19693 = state_17654__$1;
(statearr_17689_19693[(2)] = null);

(statearr_17689_19693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (5))){
var state_17654__$1 = state_17654;
var statearr_17690_19694 = state_17654__$1;
(statearr_17690_19694[(2)] = null);

(statearr_17690_19694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (10))){
var inst_17646 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17691_19695 = state_17654__$1;
(statearr_17691_19695[(2)] = inst_17646);

(statearr_17691_19695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (8))){
var inst_17636 = (state_17654[(7)]);
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17654__$1,(11),out,inst_17636);
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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_17694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17694[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_17694[(1)] = (1));

return statearr_17694;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_17654){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_17654);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e17696){var ex__14299__auto__ = e17696;
var statearr_17697_19696 = state_17654;
(statearr_17697_19696[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_17654[(4)]))){
var statearr_17698_19697 = state_17654;
(statearr_17698_19697[(1)] = cljs.core.first((state_17654[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19699 = state_17654;
state_17654 = G__19699;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_17654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_17654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_17699 = f__15238__auto__();
(statearr_17699[(6)] = c__15237__auto___19682);

return statearr_17699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
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
cljs.core.async.t_cljs$core$async17714 = (function (f,ch,meta17705,_,fn1,meta17716){
this.f = f;
this.ch = ch;
this.meta17705 = meta17705;
this._ = _;
this.fn1 = fn1;
this.meta17716 = meta17716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17717,meta17716__$1){
var self__ = this;
var _17717__$1 = this;
return (new cljs.core.async.t_cljs$core$async17714(self__.f,self__.ch,self__.meta17705,self__._,self__.fn1,meta17716__$1));
}));

(cljs.core.async.t_cljs$core$async17714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17717){
var self__ = this;
var _17717__$1 = this;
return self__.meta17716;
}));

(cljs.core.async.t_cljs$core$async17714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17700_SHARP_){
var G__17723 = (((p1__17700_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17700_SHARP_) : self__.f.call(null, p1__17700_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17723) : f1.call(null, G__17723));
});
}));

(cljs.core.async.t_cljs$core$async17714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17705","meta17705",-1516304561,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17704","cljs.core.async/t_cljs$core$async17704",940259166,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17716","meta17716",377089043,null)], null);
}));

(cljs.core.async.t_cljs$core$async17714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17714");

(cljs.core.async.t_cljs$core$async17714.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17714.
 */
cljs.core.async.__GT_t_cljs$core$async17714 = (function cljs$core$async$__GT_t_cljs$core$async17714(f,ch,meta17705,_,fn1,meta17716){
return (new cljs.core.async.t_cljs$core$async17714(f,ch,meta17705,_,fn1,meta17716));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17704 = (function (f,ch,meta17705){
this.f = f;
this.ch = ch;
this.meta17705 = meta17705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17706,meta17705__$1){
var self__ = this;
var _17706__$1 = this;
return (new cljs.core.async.t_cljs$core$async17704(self__.f,self__.ch,meta17705__$1));
}));

(cljs.core.async.t_cljs$core$async17704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17706){
var self__ = this;
var _17706__$1 = this;
return self__.meta17705;
}));

(cljs.core.async.t_cljs$core$async17704.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17704.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17714(self__.f,self__.ch,self__.meta17705,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17736 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17736) : self__.f.call(null, G__17736));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17704.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17705","meta17705",-1516304561,null)], null);
}));

(cljs.core.async.t_cljs$core$async17704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17704");

(cljs.core.async.t_cljs$core$async17704.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17704.
 */
cljs.core.async.__GT_t_cljs$core$async17704 = (function cljs$core$async$__GT_t_cljs$core$async17704(f,ch,meta17705){
return (new cljs.core.async.t_cljs$core$async17704(f,ch,meta17705));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17704(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17777 = (function (f,ch,meta17778){
this.f = f;
this.ch = ch;
this.meta17778 = meta17778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17779,meta17778__$1){
var self__ = this;
var _17779__$1 = this;
return (new cljs.core.async.t_cljs$core$async17777(self__.f,self__.ch,meta17778__$1));
}));

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17779){
var self__ = this;
var _17779__$1 = this;
return self__.meta17778;
}));

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17778","meta17778",-1781693570,null)], null);
}));

(cljs.core.async.t_cljs$core$async17777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17777");

(cljs.core.async.t_cljs$core$async17777.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17777.
 */
cljs.core.async.__GT_t_cljs$core$async17777 = (function cljs$core$async$__GT_t_cljs$core$async17777(f,ch,meta17778){
return (new cljs.core.async.t_cljs$core$async17777(f,ch,meta17778));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17777(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17808 = (function (p,ch,meta17809){
this.p = p;
this.ch = ch;
this.meta17809 = meta17809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17810,meta17809__$1){
var self__ = this;
var _17810__$1 = this;
return (new cljs.core.async.t_cljs$core$async17808(self__.p,self__.ch,meta17809__$1));
}));

(cljs.core.async.t_cljs$core$async17808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17810){
var self__ = this;
var _17810__$1 = this;
return self__.meta17809;
}));

(cljs.core.async.t_cljs$core$async17808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17809","meta17809",-1742729795,null)], null);
}));

(cljs.core.async.t_cljs$core$async17808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17808");

(cljs.core.async.t_cljs$core$async17808.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17808.
 */
cljs.core.async.__GT_t_cljs$core$async17808 = (function cljs$core$async$__GT_t_cljs$core$async17808(p,ch,meta17809){
return (new cljs.core.async.t_cljs$core$async17808(p,ch,meta17809));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17808(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17851 = arguments.length;
switch (G__17851) {
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
var c__15237__auto___19753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_17886){
var state_val_17887 = (state_17886[(1)]);
if((state_val_17887 === (7))){
var inst_17878 = (state_17886[(2)]);
var state_17886__$1 = state_17886;
var statearr_17888_19754 = state_17886__$1;
(statearr_17888_19754[(2)] = inst_17878);

(statearr_17888_19754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17887 === (1))){
var state_17886__$1 = state_17886;
var statearr_17892_19755 = state_17886__$1;
(statearr_17892_19755[(2)] = null);

(statearr_17892_19755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17887 === (4))){
var inst_17861 = (state_17886[(7)]);
var inst_17861__$1 = (state_17886[(2)]);
var inst_17862 = (inst_17861__$1 == null);
var state_17886__$1 = (function (){var statearr_17897 = state_17886;
(statearr_17897[(7)] = inst_17861__$1);

return statearr_17897;
})();
if(cljs.core.truth_(inst_17862)){
var statearr_17901_19756 = state_17886__$1;
(statearr_17901_19756[(1)] = (5));

} else {
var statearr_17905_19760 = state_17886__$1;
(statearr_17905_19760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17887 === (6))){
var inst_17861 = (state_17886[(7)]);
var inst_17869 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17861) : p.call(null, inst_17861));
var state_17886__$1 = state_17886;
if(cljs.core.truth_(inst_17869)){
var statearr_17909_19766 = state_17886__$1;
(statearr_17909_19766[(1)] = (8));

} else {
var statearr_17910_19767 = state_17886__$1;
(statearr_17910_19767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17887 === (3))){
var inst_17880 = (state_17886[(2)]);
var state_17886__$1 = state_17886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17886__$1,inst_17880);
} else {
if((state_val_17887 === (2))){
var state_17886__$1 = state_17886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17886__$1,(4),ch);
} else {
if((state_val_17887 === (11))){
var inst_17872 = (state_17886[(2)]);
var state_17886__$1 = state_17886;
var statearr_17915_19768 = state_17886__$1;
(statearr_17915_19768[(2)] = inst_17872);

(statearr_17915_19768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17887 === (9))){
var state_17886__$1 = state_17886;
var statearr_17916_19769 = state_17886__$1;
(statearr_17916_19769[(2)] = null);

(statearr_17916_19769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17887 === (5))){
var inst_17867 = cljs.core.async.close_BANG_(out);
var state_17886__$1 = state_17886;
var statearr_17922_19772 = state_17886__$1;
(statearr_17922_19772[(2)] = inst_17867);

(statearr_17922_19772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17887 === (10))){
var inst_17875 = (state_17886[(2)]);
var state_17886__$1 = (function (){var statearr_17924 = state_17886;
(statearr_17924[(8)] = inst_17875);

return statearr_17924;
})();
var statearr_17925_19773 = state_17886__$1;
(statearr_17925_19773[(2)] = null);

(statearr_17925_19773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17887 === (8))){
var inst_17861 = (state_17886[(7)]);
var state_17886__$1 = state_17886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17886__$1,(11),out,inst_17861);
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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_17926 = [null,null,null,null,null,null,null,null,null];
(statearr_17926[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_17926[(1)] = (1));

return statearr_17926;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_17886){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_17886);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e17927){var ex__14299__auto__ = e17927;
var statearr_17928_19774 = state_17886;
(statearr_17928_19774[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_17886[(4)]))){
var statearr_17929_19777 = state_17886;
(statearr_17929_19777[(1)] = cljs.core.first((state_17886[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19787 = state_17886;
state_17886 = G__19787;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_17886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_17886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_17930 = f__15238__auto__();
(statearr_17930[(6)] = c__15237__auto___19753);

return statearr_17930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17936 = arguments.length;
switch (G__17936) {
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
var c__15237__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_18008){
var state_val_18010 = (state_18008[(1)]);
if((state_val_18010 === (7))){
var inst_18002 = (state_18008[(2)]);
var state_18008__$1 = state_18008;
var statearr_18016_19794 = state_18008__$1;
(statearr_18016_19794[(2)] = inst_18002);

(statearr_18016_19794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (20))){
var inst_17971 = (state_18008[(7)]);
var inst_17983 = (state_18008[(2)]);
var inst_17984 = cljs.core.next(inst_17971);
var inst_17954 = inst_17984;
var inst_17955 = null;
var inst_17956 = (0);
var inst_17957 = (0);
var state_18008__$1 = (function (){var statearr_18022 = state_18008;
(statearr_18022[(8)] = inst_17954);

(statearr_18022[(9)] = inst_17957);

(statearr_18022[(10)] = inst_17983);

(statearr_18022[(11)] = inst_17955);

(statearr_18022[(12)] = inst_17956);

return statearr_18022;
})();
var statearr_18033_19797 = state_18008__$1;
(statearr_18033_19797[(2)] = null);

(statearr_18033_19797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (1))){
var state_18008__$1 = state_18008;
var statearr_18035_19798 = state_18008__$1;
(statearr_18035_19798[(2)] = null);

(statearr_18035_19798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (4))){
var inst_17943 = (state_18008[(13)]);
var inst_17943__$1 = (state_18008[(2)]);
var inst_17944 = (inst_17943__$1 == null);
var state_18008__$1 = (function (){var statearr_18036 = state_18008;
(statearr_18036[(13)] = inst_17943__$1);

return statearr_18036;
})();
if(cljs.core.truth_(inst_17944)){
var statearr_18037_19799 = state_18008__$1;
(statearr_18037_19799[(1)] = (5));

} else {
var statearr_18038_19800 = state_18008__$1;
(statearr_18038_19800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (15))){
var state_18008__$1 = state_18008;
var statearr_18043_19803 = state_18008__$1;
(statearr_18043_19803[(2)] = null);

(statearr_18043_19803[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (21))){
var state_18008__$1 = state_18008;
var statearr_18045_19804 = state_18008__$1;
(statearr_18045_19804[(2)] = null);

(statearr_18045_19804[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (13))){
var inst_17954 = (state_18008[(8)]);
var inst_17957 = (state_18008[(9)]);
var inst_17955 = (state_18008[(11)]);
var inst_17956 = (state_18008[(12)]);
var inst_17967 = (state_18008[(2)]);
var inst_17968 = (inst_17957 + (1));
var tmp18040 = inst_17954;
var tmp18041 = inst_17955;
var tmp18042 = inst_17956;
var inst_17954__$1 = tmp18040;
var inst_17955__$1 = tmp18041;
var inst_17956__$1 = tmp18042;
var inst_17957__$1 = inst_17968;
var state_18008__$1 = (function (){var statearr_18047 = state_18008;
(statearr_18047[(8)] = inst_17954__$1);

(statearr_18047[(9)] = inst_17957__$1);

(statearr_18047[(11)] = inst_17955__$1);

(statearr_18047[(14)] = inst_17967);

(statearr_18047[(12)] = inst_17956__$1);

return statearr_18047;
})();
var statearr_18048_19807 = state_18008__$1;
(statearr_18048_19807[(2)] = null);

(statearr_18048_19807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (22))){
var state_18008__$1 = state_18008;
var statearr_18049_19808 = state_18008__$1;
(statearr_18049_19808[(2)] = null);

(statearr_18049_19808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (6))){
var inst_17943 = (state_18008[(13)]);
var inst_17952 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17943) : f.call(null, inst_17943));
var inst_17953 = cljs.core.seq(inst_17952);
var inst_17954 = inst_17953;
var inst_17955 = null;
var inst_17956 = (0);
var inst_17957 = (0);
var state_18008__$1 = (function (){var statearr_18053 = state_18008;
(statearr_18053[(8)] = inst_17954);

(statearr_18053[(9)] = inst_17957);

(statearr_18053[(11)] = inst_17955);

(statearr_18053[(12)] = inst_17956);

return statearr_18053;
})();
var statearr_18054_19811 = state_18008__$1;
(statearr_18054_19811[(2)] = null);

(statearr_18054_19811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (17))){
var inst_17971 = (state_18008[(7)]);
var inst_17976 = cljs.core.chunk_first(inst_17971);
var inst_17977 = cljs.core.chunk_rest(inst_17971);
var inst_17978 = cljs.core.count(inst_17976);
var inst_17954 = inst_17977;
var inst_17955 = inst_17976;
var inst_17956 = inst_17978;
var inst_17957 = (0);
var state_18008__$1 = (function (){var statearr_18055 = state_18008;
(statearr_18055[(8)] = inst_17954);

(statearr_18055[(9)] = inst_17957);

(statearr_18055[(11)] = inst_17955);

(statearr_18055[(12)] = inst_17956);

return statearr_18055;
})();
var statearr_18056_19813 = state_18008__$1;
(statearr_18056_19813[(2)] = null);

(statearr_18056_19813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (3))){
var inst_18004 = (state_18008[(2)]);
var state_18008__$1 = state_18008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18008__$1,inst_18004);
} else {
if((state_val_18010 === (12))){
var inst_17992 = (state_18008[(2)]);
var state_18008__$1 = state_18008;
var statearr_18060_19814 = state_18008__$1;
(statearr_18060_19814[(2)] = inst_17992);

(statearr_18060_19814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (2))){
var state_18008__$1 = state_18008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18008__$1,(4),in$);
} else {
if((state_val_18010 === (23))){
var inst_18000 = (state_18008[(2)]);
var state_18008__$1 = state_18008;
var statearr_18061_19816 = state_18008__$1;
(statearr_18061_19816[(2)] = inst_18000);

(statearr_18061_19816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (19))){
var inst_17987 = (state_18008[(2)]);
var state_18008__$1 = state_18008;
var statearr_18062_19817 = state_18008__$1;
(statearr_18062_19817[(2)] = inst_17987);

(statearr_18062_19817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (11))){
var inst_17954 = (state_18008[(8)]);
var inst_17971 = (state_18008[(7)]);
var inst_17971__$1 = cljs.core.seq(inst_17954);
var state_18008__$1 = (function (){var statearr_18063 = state_18008;
(statearr_18063[(7)] = inst_17971__$1);

return statearr_18063;
})();
if(inst_17971__$1){
var statearr_18064_19818 = state_18008__$1;
(statearr_18064_19818[(1)] = (14));

} else {
var statearr_18065_19821 = state_18008__$1;
(statearr_18065_19821[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (9))){
var inst_17994 = (state_18008[(2)]);
var inst_17995 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18008__$1 = (function (){var statearr_18066 = state_18008;
(statearr_18066[(15)] = inst_17994);

return statearr_18066;
})();
if(cljs.core.truth_(inst_17995)){
var statearr_18067_19822 = state_18008__$1;
(statearr_18067_19822[(1)] = (21));

} else {
var statearr_18068_19823 = state_18008__$1;
(statearr_18068_19823[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (5))){
var inst_17946 = cljs.core.async.close_BANG_(out);
var state_18008__$1 = state_18008;
var statearr_18069_19826 = state_18008__$1;
(statearr_18069_19826[(2)] = inst_17946);

(statearr_18069_19826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (14))){
var inst_17971 = (state_18008[(7)]);
var inst_17973 = cljs.core.chunked_seq_QMARK_(inst_17971);
var state_18008__$1 = state_18008;
if(inst_17973){
var statearr_18070_19827 = state_18008__$1;
(statearr_18070_19827[(1)] = (17));

} else {
var statearr_18071_19829 = state_18008__$1;
(statearr_18071_19829[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (16))){
var inst_17990 = (state_18008[(2)]);
var state_18008__$1 = state_18008;
var statearr_18074_19830 = state_18008__$1;
(statearr_18074_19830[(2)] = inst_17990);

(statearr_18074_19830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (10))){
var inst_17957 = (state_18008[(9)]);
var inst_17955 = (state_18008[(11)]);
var inst_17965 = cljs.core._nth(inst_17955,inst_17957);
var state_18008__$1 = state_18008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18008__$1,(13),out,inst_17965);
} else {
if((state_val_18010 === (18))){
var inst_17971 = (state_18008[(7)]);
var inst_17981 = cljs.core.first(inst_17971);
var state_18008__$1 = state_18008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18008__$1,(20),out,inst_17981);
} else {
if((state_val_18010 === (8))){
var inst_17957 = (state_18008[(9)]);
var inst_17956 = (state_18008[(12)]);
var inst_17960 = (inst_17957 < inst_17956);
var inst_17961 = inst_17960;
var state_18008__$1 = state_18008;
if(cljs.core.truth_(inst_17961)){
var statearr_18078_19836 = state_18008__$1;
(statearr_18078_19836[(1)] = (10));

} else {
var statearr_18079_19837 = state_18008__$1;
(statearr_18079_19837[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14296__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14296__auto____0 = (function (){
var statearr_18080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18080[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14296__auto__);

(statearr_18080[(1)] = (1));

return statearr_18080;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14296__auto____1 = (function (state_18008){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_18008);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e18081){var ex__14299__auto__ = e18081;
var statearr_18082_19841 = state_18008;
(statearr_18082_19841[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_18008[(4)]))){
var statearr_18083_19842 = state_18008;
(statearr_18083_19842[(1)] = cljs.core.first((state_18008[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19844 = state_18008;
state_18008 = G__19844;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14296__auto__ = function(state_18008){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14296__auto____1.call(this,state_18008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14296__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14296__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_18084 = f__15238__auto__();
(statearr_18084[(6)] = c__15237__auto__);

return statearr_18084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));

return c__15237__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18096 = arguments.length;
switch (G__18096) {
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
var G__18099 = arguments.length;
switch (G__18099) {
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
var G__18101 = arguments.length;
switch (G__18101) {
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
var c__15237__auto___19853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_18128){
var state_val_18129 = (state_18128[(1)]);
if((state_val_18129 === (7))){
var inst_18123 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
var statearr_18130_19857 = state_18128__$1;
(statearr_18130_19857[(2)] = inst_18123);

(statearr_18130_19857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (1))){
var inst_18105 = null;
var state_18128__$1 = (function (){var statearr_18131 = state_18128;
(statearr_18131[(7)] = inst_18105);

return statearr_18131;
})();
var statearr_18132_19858 = state_18128__$1;
(statearr_18132_19858[(2)] = null);

(statearr_18132_19858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (4))){
var inst_18108 = (state_18128[(8)]);
var inst_18108__$1 = (state_18128[(2)]);
var inst_18109 = (inst_18108__$1 == null);
var inst_18110 = cljs.core.not(inst_18109);
var state_18128__$1 = (function (){var statearr_18133 = state_18128;
(statearr_18133[(8)] = inst_18108__$1);

return statearr_18133;
})();
if(inst_18110){
var statearr_18138_19862 = state_18128__$1;
(statearr_18138_19862[(1)] = (5));

} else {
var statearr_18141_19863 = state_18128__$1;
(statearr_18141_19863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (6))){
var state_18128__$1 = state_18128;
var statearr_18142_19865 = state_18128__$1;
(statearr_18142_19865[(2)] = null);

(statearr_18142_19865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (3))){
var inst_18125 = (state_18128[(2)]);
var inst_18126 = cljs.core.async.close_BANG_(out);
var state_18128__$1 = (function (){var statearr_18143 = state_18128;
(statearr_18143[(9)] = inst_18125);

return statearr_18143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18128__$1,inst_18126);
} else {
if((state_val_18129 === (2))){
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18128__$1,(4),ch);
} else {
if((state_val_18129 === (11))){
var inst_18108 = (state_18128[(8)]);
var inst_18117 = (state_18128[(2)]);
var inst_18105 = inst_18108;
var state_18128__$1 = (function (){var statearr_18145 = state_18128;
(statearr_18145[(7)] = inst_18105);

(statearr_18145[(10)] = inst_18117);

return statearr_18145;
})();
var statearr_18146_19872 = state_18128__$1;
(statearr_18146_19872[(2)] = null);

(statearr_18146_19872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (9))){
var inst_18108 = (state_18128[(8)]);
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18128__$1,(11),out,inst_18108);
} else {
if((state_val_18129 === (5))){
var inst_18108 = (state_18128[(8)]);
var inst_18105 = (state_18128[(7)]);
var inst_18112 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18108,inst_18105);
var state_18128__$1 = state_18128;
if(inst_18112){
var statearr_18149_19875 = state_18128__$1;
(statearr_18149_19875[(1)] = (8));

} else {
var statearr_18150_19876 = state_18128__$1;
(statearr_18150_19876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (10))){
var inst_18120 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
var statearr_18151_19878 = state_18128__$1;
(statearr_18151_19878[(2)] = inst_18120);

(statearr_18151_19878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (8))){
var inst_18105 = (state_18128[(7)]);
var tmp18148 = inst_18105;
var inst_18105__$1 = tmp18148;
var state_18128__$1 = (function (){var statearr_18155 = state_18128;
(statearr_18155[(7)] = inst_18105__$1);

return statearr_18155;
})();
var statearr_18156_19880 = state_18128__$1;
(statearr_18156_19880[(2)] = null);

(statearr_18156_19880[(1)] = (2));


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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_18157 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18157[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_18157[(1)] = (1));

return statearr_18157;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_18128){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_18128);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e18158){var ex__14299__auto__ = e18158;
var statearr_18159_19884 = state_18128;
(statearr_18159_19884[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_18128[(4)]))){
var statearr_18160_19887 = state_18128;
(statearr_18160_19887[(1)] = cljs.core.first((state_18128[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19891 = state_18128;
state_18128 = G__19891;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_18128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_18128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_18161 = f__15238__auto__();
(statearr_18161[(6)] = c__15237__auto___19853);

return statearr_18161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18163 = arguments.length;
switch (G__18163) {
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
var c__15237__auto___19903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_18232){
var state_val_18233 = (state_18232[(1)]);
if((state_val_18233 === (7))){
var inst_18228 = (state_18232[(2)]);
var state_18232__$1 = state_18232;
var statearr_18241_19908 = state_18232__$1;
(statearr_18241_19908[(2)] = inst_18228);

(statearr_18241_19908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (1))){
var inst_18168 = (new Array(n));
var inst_18169 = inst_18168;
var inst_18170 = (0);
var state_18232__$1 = (function (){var statearr_18245 = state_18232;
(statearr_18245[(7)] = inst_18169);

(statearr_18245[(8)] = inst_18170);

return statearr_18245;
})();
var statearr_18246_19922 = state_18232__$1;
(statearr_18246_19922[(2)] = null);

(statearr_18246_19922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (4))){
var inst_18176 = (state_18232[(9)]);
var inst_18176__$1 = (state_18232[(2)]);
var inst_18180 = (inst_18176__$1 == null);
var inst_18181 = cljs.core.not(inst_18180);
var state_18232__$1 = (function (){var statearr_18254 = state_18232;
(statearr_18254[(9)] = inst_18176__$1);

return statearr_18254;
})();
if(inst_18181){
var statearr_18255_19930 = state_18232__$1;
(statearr_18255_19930[(1)] = (5));

} else {
var statearr_18256_19936 = state_18232__$1;
(statearr_18256_19936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (15))){
var inst_18222 = (state_18232[(2)]);
var state_18232__$1 = state_18232;
var statearr_18257_19939 = state_18232__$1;
(statearr_18257_19939[(2)] = inst_18222);

(statearr_18257_19939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (13))){
var state_18232__$1 = state_18232;
var statearr_18261_19950 = state_18232__$1;
(statearr_18261_19950[(2)] = null);

(statearr_18261_19950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (6))){
var inst_18170 = (state_18232[(8)]);
var inst_18218 = (inst_18170 > (0));
var state_18232__$1 = state_18232;
if(cljs.core.truth_(inst_18218)){
var statearr_18262_19955 = state_18232__$1;
(statearr_18262_19955[(1)] = (12));

} else {
var statearr_18263_19957 = state_18232__$1;
(statearr_18263_19957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (3))){
var inst_18230 = (state_18232[(2)]);
var state_18232__$1 = state_18232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18232__$1,inst_18230);
} else {
if((state_val_18233 === (12))){
var inst_18169 = (state_18232[(7)]);
var inst_18220 = cljs.core.vec(inst_18169);
var state_18232__$1 = state_18232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18232__$1,(15),out,inst_18220);
} else {
if((state_val_18233 === (2))){
var state_18232__$1 = state_18232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18232__$1,(4),ch);
} else {
if((state_val_18233 === (11))){
var inst_18203 = (state_18232[(2)]);
var inst_18207 = (new Array(n));
var inst_18169 = inst_18207;
var inst_18170 = (0);
var state_18232__$1 = (function (){var statearr_18273 = state_18232;
(statearr_18273[(7)] = inst_18169);

(statearr_18273[(8)] = inst_18170);

(statearr_18273[(10)] = inst_18203);

return statearr_18273;
})();
var statearr_18274_19964 = state_18232__$1;
(statearr_18274_19964[(2)] = null);

(statearr_18274_19964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (9))){
var inst_18169 = (state_18232[(7)]);
var inst_18201 = cljs.core.vec(inst_18169);
var state_18232__$1 = state_18232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18232__$1,(11),out,inst_18201);
} else {
if((state_val_18233 === (5))){
var inst_18169 = (state_18232[(7)]);
var inst_18170 = (state_18232[(8)]);
var inst_18176 = (state_18232[(9)]);
var inst_18190 = (state_18232[(11)]);
var inst_18186 = (inst_18169[inst_18170] = inst_18176);
var inst_18190__$1 = (inst_18170 + (1));
var inst_18191 = (inst_18190__$1 < n);
var state_18232__$1 = (function (){var statearr_18286 = state_18232;
(statearr_18286[(12)] = inst_18186);

(statearr_18286[(11)] = inst_18190__$1);

return statearr_18286;
})();
if(cljs.core.truth_(inst_18191)){
var statearr_18288_19970 = state_18232__$1;
(statearr_18288_19970[(1)] = (8));

} else {
var statearr_18289_19972 = state_18232__$1;
(statearr_18289_19972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (14))){
var inst_18225 = (state_18232[(2)]);
var inst_18226 = cljs.core.async.close_BANG_(out);
var state_18232__$1 = (function (){var statearr_18291 = state_18232;
(statearr_18291[(13)] = inst_18225);

return statearr_18291;
})();
var statearr_18293_19973 = state_18232__$1;
(statearr_18293_19973[(2)] = inst_18226);

(statearr_18293_19973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (10))){
var inst_18213 = (state_18232[(2)]);
var state_18232__$1 = state_18232;
var statearr_18294_19976 = state_18232__$1;
(statearr_18294_19976[(2)] = inst_18213);

(statearr_18294_19976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18233 === (8))){
var inst_18169 = (state_18232[(7)]);
var inst_18190 = (state_18232[(11)]);
var tmp18290 = inst_18169;
var inst_18169__$1 = tmp18290;
var inst_18170 = inst_18190;
var state_18232__$1 = (function (){var statearr_18295 = state_18232;
(statearr_18295[(7)] = inst_18169__$1);

(statearr_18295[(8)] = inst_18170);

return statearr_18295;
})();
var statearr_18296_19980 = state_18232__$1;
(statearr_18296_19980[(2)] = null);

(statearr_18296_19980[(1)] = (2));


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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_18302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18302[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_18302[(1)] = (1));

return statearr_18302;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_18232){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_18232);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e18307){var ex__14299__auto__ = e18307;
var statearr_18308_19984 = state_18232;
(statearr_18308_19984[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_18232[(4)]))){
var statearr_18312_19985 = state_18232;
(statearr_18312_19985[(1)] = cljs.core.first((state_18232[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19987 = state_18232;
state_18232 = G__19987;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_18232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_18232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_18317 = f__15238__auto__();
(statearr_18317[(6)] = c__15237__auto___19903);

return statearr_18317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18326 = arguments.length;
switch (G__18326) {
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
var c__15237__auto___19989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15238__auto__ = (function (){var switch__14295__auto__ = (function (state_18394){
var state_val_18395 = (state_18394[(1)]);
if((state_val_18395 === (7))){
var inst_18390 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18401_19991 = state_18394__$1;
(statearr_18401_19991[(2)] = inst_18390);

(statearr_18401_19991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (1))){
var inst_18342 = [];
var inst_18343 = inst_18342;
var inst_18344 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18394__$1 = (function (){var statearr_18404 = state_18394;
(statearr_18404[(7)] = inst_18343);

(statearr_18404[(8)] = inst_18344);

return statearr_18404;
})();
var statearr_18405_19992 = state_18394__$1;
(statearr_18405_19992[(2)] = null);

(statearr_18405_19992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (4))){
var inst_18347 = (state_18394[(9)]);
var inst_18347__$1 = (state_18394[(2)]);
var inst_18349 = (inst_18347__$1 == null);
var inst_18350 = cljs.core.not(inst_18349);
var state_18394__$1 = (function (){var statearr_18406 = state_18394;
(statearr_18406[(9)] = inst_18347__$1);

return statearr_18406;
})();
if(inst_18350){
var statearr_18409_19994 = state_18394__$1;
(statearr_18409_19994[(1)] = (5));

} else {
var statearr_18410_19995 = state_18394__$1;
(statearr_18410_19995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (15))){
var inst_18343 = (state_18394[(7)]);
var inst_18382 = cljs.core.vec(inst_18343);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18394__$1,(18),out,inst_18382);
} else {
if((state_val_18395 === (13))){
var inst_18376 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18415_19997 = state_18394__$1;
(statearr_18415_19997[(2)] = inst_18376);

(statearr_18415_19997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (6))){
var inst_18343 = (state_18394[(7)]);
var inst_18379 = inst_18343.length;
var inst_18380 = (inst_18379 > (0));
var state_18394__$1 = state_18394;
if(cljs.core.truth_(inst_18380)){
var statearr_18422_19998 = state_18394__$1;
(statearr_18422_19998[(1)] = (15));

} else {
var statearr_18423_20005 = state_18394__$1;
(statearr_18423_20005[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (17))){
var inst_18387 = (state_18394[(2)]);
var inst_18388 = cljs.core.async.close_BANG_(out);
var state_18394__$1 = (function (){var statearr_18424 = state_18394;
(statearr_18424[(10)] = inst_18387);

return statearr_18424;
})();
var statearr_18425_20010 = state_18394__$1;
(statearr_18425_20010[(2)] = inst_18388);

(statearr_18425_20010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (3))){
var inst_18392 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18394__$1,inst_18392);
} else {
if((state_val_18395 === (12))){
var inst_18343 = (state_18394[(7)]);
var inst_18369 = cljs.core.vec(inst_18343);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18394__$1,(14),out,inst_18369);
} else {
if((state_val_18395 === (2))){
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18394__$1,(4),ch);
} else {
if((state_val_18395 === (11))){
var inst_18343 = (state_18394[(7)]);
var inst_18358 = (state_18394[(11)]);
var inst_18347 = (state_18394[(9)]);
var inst_18366 = inst_18343.push(inst_18347);
var tmp18427 = inst_18343;
var inst_18343__$1 = tmp18427;
var inst_18344 = inst_18358;
var state_18394__$1 = (function (){var statearr_18428 = state_18394;
(statearr_18428[(7)] = inst_18343__$1);

(statearr_18428[(8)] = inst_18344);

(statearr_18428[(12)] = inst_18366);

return statearr_18428;
})();
var statearr_18433_20025 = state_18394__$1;
(statearr_18433_20025[(2)] = null);

(statearr_18433_20025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (9))){
var inst_18344 = (state_18394[(8)]);
var inst_18362 = cljs.core.keyword_identical_QMARK_(inst_18344,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18394__$1 = state_18394;
var statearr_18434_20032 = state_18394__$1;
(statearr_18434_20032[(2)] = inst_18362);

(statearr_18434_20032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (5))){
var inst_18358 = (state_18394[(11)]);
var inst_18344 = (state_18394[(8)]);
var inst_18359 = (state_18394[(13)]);
var inst_18347 = (state_18394[(9)]);
var inst_18358__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18347) : f.call(null, inst_18347));
var inst_18359__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18358__$1,inst_18344);
var state_18394__$1 = (function (){var statearr_18436 = state_18394;
(statearr_18436[(11)] = inst_18358__$1);

(statearr_18436[(13)] = inst_18359__$1);

return statearr_18436;
})();
if(inst_18359__$1){
var statearr_18437_20043 = state_18394__$1;
(statearr_18437_20043[(1)] = (8));

} else {
var statearr_18438_20044 = state_18394__$1;
(statearr_18438_20044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (14))){
var inst_18358 = (state_18394[(11)]);
var inst_18347 = (state_18394[(9)]);
var inst_18371 = (state_18394[(2)]);
var inst_18372 = [];
var inst_18373 = inst_18372.push(inst_18347);
var inst_18343 = inst_18372;
var inst_18344 = inst_18358;
var state_18394__$1 = (function (){var statearr_18445 = state_18394;
(statearr_18445[(7)] = inst_18343);

(statearr_18445[(8)] = inst_18344);

(statearr_18445[(14)] = inst_18373);

(statearr_18445[(15)] = inst_18371);

return statearr_18445;
})();
var statearr_18449_20045 = state_18394__$1;
(statearr_18449_20045[(2)] = null);

(statearr_18449_20045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (16))){
var state_18394__$1 = state_18394;
var statearr_18450_20046 = state_18394__$1;
(statearr_18450_20046[(2)] = null);

(statearr_18450_20046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (10))){
var inst_18364 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
if(cljs.core.truth_(inst_18364)){
var statearr_18455_20047 = state_18394__$1;
(statearr_18455_20047[(1)] = (11));

} else {
var statearr_18456_20050 = state_18394__$1;
(statearr_18456_20050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (18))){
var inst_18384 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18460_20052 = state_18394__$1;
(statearr_18460_20052[(2)] = inst_18384);

(statearr_18460_20052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (8))){
var inst_18359 = (state_18394[(13)]);
var state_18394__$1 = state_18394;
var statearr_18461_20055 = state_18394__$1;
(statearr_18461_20055[(2)] = inst_18359);

(statearr_18461_20055[(1)] = (10));


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
var cljs$core$async$state_machine__14296__auto__ = null;
var cljs$core$async$state_machine__14296__auto____0 = (function (){
var statearr_18471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18471[(0)] = cljs$core$async$state_machine__14296__auto__);

(statearr_18471[(1)] = (1));

return statearr_18471;
});
var cljs$core$async$state_machine__14296__auto____1 = (function (state_18394){
while(true){
var ret_value__14297__auto__ = (function (){try{while(true){
var result__14298__auto__ = switch__14295__auto__(state_18394);
if(cljs.core.keyword_identical_QMARK_(result__14298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14298__auto__;
}
break;
}
}catch (e18472){var ex__14299__auto__ = e18472;
var statearr_18479_20058 = state_18394;
(statearr_18479_20058[(2)] = ex__14299__auto__);


if(cljs.core.seq((state_18394[(4)]))){
var statearr_18480_20059 = state_18394;
(statearr_18480_20059[(1)] = cljs.core.first((state_18394[(4)])));

} else {
throw ex__14299__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20060 = state_18394;
state_18394 = G__20060;
continue;
} else {
return ret_value__14297__auto__;
}
break;
}
});
cljs$core$async$state_machine__14296__auto__ = function(state_18394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14296__auto____1.call(this,state_18394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14296__auto____0;
cljs$core$async$state_machine__14296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14296__auto____1;
return cljs$core$async$state_machine__14296__auto__;
})()
})();
var state__15239__auto__ = (function (){var statearr_18481 = f__15238__auto__();
(statearr_18481[(6)] = c__15237__auto___19989);

return statearr_18481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15239__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
