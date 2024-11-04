var module$node_modules$$liveblocks$react$dist$suspense = shadow.js.require("module$node_modules$$liveblocks$react$dist$suspense", {});
var UseOthersWrapper$$module$app$UseOthersWrapper = ({children}) => {
  const others = (0,module$node_modules$$liveblocks$react$dist$suspense.useOthers)();
  console.log("others count ", others);
  return children(others);
};
var $jscompDefaultExport$$module$app$UseOthersWrapper = UseOthersWrapper$$module$app$UseOthersWrapper;
/** @const */ 
var module$app$UseOthersWrapper = {};
/** @const */ 
module$app$UseOthersWrapper.default = $jscompDefaultExport$$module$app$UseOthersWrapper;

$CLJS.module$app$UseOthersWrapper=module$app$UseOthersWrapper;
//# sourceMappingURL=module$app$UseOthersWrapper.js.map
