goog.provide('app.constants.index');
app.constants.index.colors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#DC2626","#D97706","#059669","#7C3AED","#DB2777"], null);
app.constants.index.shape_elements = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/rectangle.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Rectangle",new cljs.core.Keyword(null,"value","value",305978217),"rectangle"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/circle.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Circle",new cljs.core.Keyword(null,"value","value",305978217),"circle"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/triangle.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Triangle",new cljs.core.Keyword(null,"value","value",305978217),"triangle"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/line.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Line",new cljs.core.Keyword(null,"value","value",305978217),"line"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/image.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Image",new cljs.core.Keyword(null,"value","value",305978217),"image"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/freeform.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Free Drawing",new cljs.core.Keyword(null,"value","value",305978217),"freeform"], null)], null);
app.constants.index.nav_elements = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/select.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Select",new cljs.core.Keyword(null,"value","value",305978217),"select"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/rectangle.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Rectangle",new cljs.core.Keyword(null,"value","value",305978217),app.constants.index.shape_elements], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/text.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Text",new cljs.core.Keyword(null,"value","value",305978217),"text"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/delete.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Delete",new cljs.core.Keyword(null,"value","value",305978217),"delete"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/reset.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Reset",new cljs.core.Keyword(null,"value","value",305978217),"reset"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/comments.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Comments",new cljs.core.Keyword(null,"value","value",305978217),"comments"], null)], null);
app.constants.index.default_nav_element = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/select.svg",new cljs.core.Keyword(null,"name","name",1843675177),"Select",new cljs.core.Keyword(null,"value","value",305978217),"select"], null);
app.constants.index.direction_options = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Bring to Front",new cljs.core.Keyword(null,"value","value",305978217),"front",new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/front.svg"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Send to Back",new cljs.core.Keyword(null,"value","value",305978217),"back",new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/back.svg"], null)], null);
app.constants.index.font_family_options = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"Helvetica",new cljs.core.Keyword(null,"label","label",1718410804),"Helvetica"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"Times New Roman",new cljs.core.Keyword(null,"label","label",1718410804),"Times New Roman"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"Comic Sans MS",new cljs.core.Keyword(null,"label","label",1718410804),"Comic Sans MS"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"Brush Script MT",new cljs.core.Keyword(null,"label","label",1718410804),"Brush Script MT"], null)], null);
app.constants.index.font_size_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (size){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((10),(37)));
app.constants.index.font_weight_options = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"400",new cljs.core.Keyword(null,"label","label",1718410804),"Normal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"500",new cljs.core.Keyword(null,"label","label",1718410804),"Semibold"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"600",new cljs.core.Keyword(null,"label","label",1718410804),"Bold"], null)], null);
app.constants.index.alignment_options = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"left",new cljs.core.Keyword(null,"label","label",1718410804),"Align Left",new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/align-left.svg"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"horizontalCenter",new cljs.core.Keyword(null,"label","label",1718410804),"Align Horizontal Center",new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/align-horizontal-center.svg"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"right",new cljs.core.Keyword(null,"label","label",1718410804),"Align Right",new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/align-right.svg"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"top",new cljs.core.Keyword(null,"label","label",1718410804),"Align Top",new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/align-top.svg"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"verticalCenter",new cljs.core.Keyword(null,"label","label",1718410804),"Align Vertical Center",new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/align-vertical-center.svg"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"bottom",new cljs.core.Keyword(null,"label","label",1718410804),"Align Bottom",new cljs.core.Keyword(null,"icon","icon",1679606541),"/assets/align-bottom.svg"], null)], null);
app.constants.index.shortcuts = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"1",new cljs.core.Keyword(null,"name","name",1843675177),"Chat",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"/"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"2",new cljs.core.Keyword(null,"name","name",1843675177),"Undo",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"\u2318 + Z"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"3",new cljs.core.Keyword(null,"name","name",1843675177),"Redo",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"\u2318 + Y"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"4",new cljs.core.Keyword(null,"name","name",1843675177),"Reactions",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"E"], null)], null);

//# sourceMappingURL=app.constants.index.js.map