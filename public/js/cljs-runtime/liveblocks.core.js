goog.provide('liveblocks.core');
var module$node_modules$$liveblocks$react$dist$suspense=shadow.js.require("module$node_modules$$liveblocks$react$dist$suspense", {});
liveblocks.core.room_provider = (function liveblocks$core$room_provider(props,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$liveblocks$react$dist$suspense.RoomProvider,cljs.core.clj__GT_js(props),children], null);
});
liveblocks.core.liveblocks_provider = (function liveblocks$core$liveblocks_provider(props,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$liveblocks$react$dist$suspense.LiveblocksProvider,cljs.core.clj__GT_js(props),children], null);
});
liveblocks.core.client_side_suspense = (function liveblocks$core$client_side_suspense(props,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$liveblocks$react$dist$suspense.ClientSideSuspense,cljs.core.clj__GT_js(props),children], null);
});
liveblocks.core.use_others = (function liveblocks$core$use_others(){
var hook_result = module$node_modules$$liveblocks$react$dist$suspense.useOthers;
console.log("live users :",hook_result);

return hook_result;
});

//# sourceMappingURL=liveblocks.core.js.map
