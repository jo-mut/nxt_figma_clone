["^ ","~:resource-id",["~:shadow.build.classpath/resource","app/UseOthersWrapper.js"],"~:compiled-at",1730722744727,"~:js","var module$node_modules$$liveblocks$react$dist$suspense = shadow.js.require(\"module$node_modules$$liveblocks$react$dist$suspense\", {});\nvar UseOthersWrapper$$module$app$UseOthersWrapper = ({children}) => {\n  const others = (0,module$node_modules$$liveblocks$react$dist$suspense.useOthers)();\n  console.log(\"others count \", others);\n  return children(others);\n};\nvar $jscompDefaultExport$$module$app$UseOthersWrapper = UseOthersWrapper$$module$app$UseOthersWrapper;\n/** @const */ \nvar module$app$UseOthersWrapper = {};\n/** @const */ \nmodule$app$UseOthersWrapper.default = $jscompDefaultExport$$module$app$UseOthersWrapper;\n\n$CLJS.module$app$UseOthersWrapper=module$app$UseOthersWrapper;","~:js-symbol-names",["~#set",["UseOthersWrapper$$module$app$UseOthersWrapper","$jscompDefaultExport$$module$app$UseOthersWrapper","module$app$UseOthersWrapper"]],"~:properties",["^5",["default"]],"~:source","// UseOthersWrapper.js\nimport { useOthers } from 'goog:module$node_modules$$liveblocks$react$dist$suspense';\n\nconst UseOthersWrapper = ({ children }) => {\n    const others = useOthers();\n    console.log(\"others count \", others)\n    return children(others);  // Call the children function with the data\n};\n\nexport default UseOthersWrapper;","~:source-map-json","{\n\"version\":3,\n\"file\":\"module$app$UseOthersWrapper.js\",\n\"lineCount\":12,\n\"mappings\":\"A;AAGA,IAAMA,gDAAmB,CAAC,CAAEC,QAAF,CAAD,CAAAD,IAAkB;AACvC,QAAME,SAAS,GAAAC,mDAAAA,CAAAA,SAAA,GAAf;AACAC,SAAQC,CAAAA,GAAR,CAAY,eAAZ,EAA6BH,MAA7B,CAAA;AACA,SAAOD,QAAA,CAASC,MAAT,CAAP;AAHuC,CAA3C;AAMA,IAAAI,oDAAeN,6CAAf;AATA;AAAA,IAAAO,8BAAA,EAAA;AASA;AAAA,2BAAA,CAAA,OAAA,GAAA,iDAAA;;\",\n\"sources\":[\"app/UseOthersWrapper.js\"],\n\"sourcesContent\":[\"// UseOthersWrapper.js\\nimport { useOthers } from 'goog:module$node_modules$$liveblocks$react$dist$suspense';\\n\\nconst UseOthersWrapper = ({ children }) => {\\n    const others = useOthers();\\n    console.log(\\\"others count \\\", others)\\n    return children(others);  // Call the children function with the data\\n};\\n\\nexport default UseOthersWrapper;\"],\n\"names\":[\"UseOthersWrapper\",\"children\",\"others\",\"useOthers\",\"console\",\"log\",\"$jscompDefaultExport\",\"$jscomp$tmp$exports$module$name\"]\n}\n"]