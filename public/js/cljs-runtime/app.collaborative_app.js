goog.provide('app.collaborative_app');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$liveblocks$react$dist$suspense=shadow.js.require("module$node_modules$$liveblocks$react$dist$suspense", {});
app.collaborative_app.ReactCollaborativeApp = (function app$collaborative_app$ReactCollaborativeApp(){
var others = module$node_modules$$liveblocks$react$dist$suspense.useOthers();
return module$node_modules$react$index.createElement("p",null,["There are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(others.length)," other users online"].join(''));
});
(module.exports.default = app.collaborative_app.ReactCollaborativeApp);

//# sourceMappingURL=app.collaborative_app.js.map
