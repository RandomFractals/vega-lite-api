"use strict";
// To parse this data:
//
//   import { Convert, Spec } from "./file";
//
//   const spec = Convert.toSpec(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The alignment to apply to symbol legends rows and columns. The supported string values
 * are `"all"`, `"each"` (the default), and `none`. For more information, see the [grid
 * layout documentation](https://vega.github.io/vega/docs/layout).
 *
 * __Default value:__ `"each"`.
 */
var VGLayoutAlign;
(function (VGLayoutAlign) {
    VGLayoutAlign["All"] = "all";
    VGLayoutAlign["Each"] = "each";
    VGLayoutAlign["None"] = "none";
})(VGLayoutAlign = exports.VGLayoutAlign || (exports.VGLayoutAlign = {}));
/**
 * Determines how size calculation should be performed, one of `"content"` or `"padding"`.
 * The default setting (`"content"`) interprets the width and height settings as the data
 * rectangle (plotting) dimensions, to which padding is then added. In contrast, the
 * `"padding"` setting includes the padding within the view size calculations, such that the
 * width and height settings indicate the **total** intended size of the view.
 *
 * __Default value__: `"content"`
 */
var Contains;
(function (Contains) {
    Contains["Content"] = "content";
    Contains["Padding"] = "padding";
})(Contains = exports.Contains || (exports.Contains = {}));
/**
 * The sizing format type. One of `"pad"`, `"fit"` or `"none"`. See the [autosize
 * type](https://vega.github.io/vega-lite/docs/size.html#autosize) documentation for
 * descriptions of each.
 *
 * __Default value__: `"pad"`
 */
var AutosizeType;
(function (AutosizeType) {
    AutosizeType["Fit"] = "fit";
    AutosizeType["None"] = "none";
    AutosizeType["Pad"] = "pad";
})(AutosizeType = exports.AutosizeType || (exports.AutosizeType = {}));
/**
 * The bounds calculation method to use for determining the extent of a sub-plot. One of
 * `full` (the default) or `flush`.
 *
 * - If set to `full`, the entire calculated bounds (including axes, title, and legend) will
 * be used.
 * - If set to `flush`, only the specified width and height values for the sub-view will be
 * used. The `flush` setting can be useful when attempting to place sub-plots without axes
 * or legends into a uniform grid structure.
 *
 * __Default value:__ `"full"`
 */
var Bounds;
(function (Bounds) {
    Bounds["Flush"] = "flush";
    Bounds["Full"] = "full";
})(Bounds = exports.Bounds || (exports.Bounds = {}));
/**
 * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
 *
 * Horizontal text alignment of axis tick labels, overriding the default setting for the
 * current axis orientation.
 *
 * Horizontal text alignment of axis titles.
 *
 * The alignment of the legend label, can be left, center, or right.
 *
 * Horizontal text alignment for legend titles.
 *
 * __Default value:__ `"left"`.
 */
var Align;
(function (Align) {
    Align["Center"] = "center";
    Align["Left"] = "left";
    Align["Right"] = "right";
})(Align = exports.Align || (exports.Align = {}));
/**
 * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
 *
 * __Default value:__ `"middle"`
 *
 * Vertical text baseline of axis tick labels, overriding the default setting for the
 * current axis orientation. Can be `"top"`, `"middle"`, `"bottom"`, or `"alphabetic"`.
 *
 * Vertical text baseline for axis titles.
 *
 * Vertical text baseline for the header title. One of `"top"`, `"bottom"`, `"middle"`.
 *
 * __Default value:__ `"middle"`
 *
 * The position of the baseline of legend label, can be `"top"`, `"middle"`, `"bottom"`, or
 * `"alphabetic"`.
 *
 * __Default value:__ `"middle"`.
 *
 * Vertical text baseline for legend titles.
 *
 * __Default value:__ `"top"`.
 *
 * Vertical text baseline for title text. One of `"top"`, `"middle"`, `"bottom"`, or
 * `"alphabetic"`.
 */
var TextBaseline;
(function (TextBaseline) {
    TextBaseline["Alphabetic"] = "alphabetic";
    TextBaseline["Bottom"] = "bottom";
    TextBaseline["Middle"] = "middle";
    TextBaseline["Top"] = "top";
})(TextBaseline = exports.TextBaseline || (exports.TextBaseline = {}));
/**
 * The mouse cursor used over the mark. Any valid [CSS cursor
 * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
 */
var Cursor;
(function (Cursor) {
    Cursor["Alias"] = "alias";
    Cursor["AllScroll"] = "all-scroll";
    Cursor["Auto"] = "auto";
    Cursor["Cell"] = "cell";
    Cursor["ColResize"] = "col-resize";
    Cursor["ContextMenu"] = "context-menu";
    Cursor["Copy"] = "copy";
    Cursor["Crosshair"] = "crosshair";
    Cursor["Default"] = "default";
    Cursor["EResize"] = "e-resize";
    Cursor["EwResize"] = "ew-resize";
    Cursor["Grab"] = "grab";
    Cursor["Grabbing"] = "grabbing";
    Cursor["Help"] = "help";
    Cursor["Move"] = "move";
    Cursor["NResize"] = "n-resize";
    Cursor["NSResize"] = "ns-resize";
    Cursor["NeResize"] = "ne-resize";
    Cursor["NeswResize"] = "nesw-resize";
    Cursor["NoDrop"] = "no-drop";
    Cursor["None"] = "none";
    Cursor["NotAllowed"] = "not-allowed";
    Cursor["NwResize"] = "nw-resize";
    Cursor["NwseResize"] = "nwse-resize";
    Cursor["Pointer"] = "pointer";
    Cursor["Progress"] = "progress";
    Cursor["RowResize"] = "row-resize";
    Cursor["SEResize"] = "se-resize";
    Cursor["SResize"] = "s-resize";
    Cursor["SwResize"] = "sw-resize";
    Cursor["Text"] = "text";
    Cursor["VerticalText"] = "vertical-text";
    Cursor["WResize"] = "w-resize";
    Cursor["Wait"] = "wait";
    Cursor["ZoomIn"] = "zoom-in";
    Cursor["ZoomOut"] = "zoom-out";
})(Cursor = exports.Cursor || (exports.Cursor = {}));
/**
 * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
 * This property determines on which side is truncated in response to the limit parameter.
 *
 * __Default value:__ `"ltr"`
 */
var Dir;
(function (Dir) {
    Dir["LTR"] = "ltr";
    Dir["RTL"] = "rtl";
})(Dir = exports.Dir || (exports.Dir = {}));
/**
 * The font style (e.g., `"italic"`).
 */
var FontStyle;
(function (FontStyle) {
    FontStyle["Italic"] = "italic";
    FontStyle["Normal"] = "normal";
})(FontStyle = exports.FontStyle || (exports.FontStyle = {}));
var FontWeightEnum;
(function (FontWeightEnum) {
    FontWeightEnum["Bold"] = "bold";
    FontWeightEnum["Bolder"] = "bolder";
    FontWeightEnum["Lighter"] = "lighter";
    FontWeightEnum["Normal"] = "normal";
})(FontWeightEnum = exports.FontWeightEnum || (exports.FontWeightEnum = {}));
/**
 * The line interpolation method to use for line and area marks. One of the following:
 * - `"linear"`: piecewise linear segments, as in a polyline.
 * - `"linear-closed"`: close the linear segments to form a polygon.
 * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
 * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
 * function.
 * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
 * function.
 * - `"basis"`: a B-spline, with control point duplication on the ends.
 * - `"basis-open"`: an open B-spline; may not intersect the start or end.
 * - `"basis-closed"`: a closed B-spline, as in a loop.
 * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
 * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
 * will intersect other control points.
 * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
 * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
 * spline.
 * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
 *
 * The line interpolation method for the error band. One of the following:
 * - `"linear"`: piecewise linear segments, as in a polyline.
 * - `"linear-closed"`: close the linear segments to form a polygon.
 * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
 * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
 * function.
 * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
 * function.
 * - `"basis"`: a B-spline, with control point duplication on the ends.
 * - `"basis-open"`: an open B-spline; may not intersect the start or end.
 * - `"basis-closed"`: a closed B-spline, as in a loop.
 * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
 * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
 * will intersect other control points.
 * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
 * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
 * spline.
 * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
 */
var Interpolate;
(function (Interpolate) {
    Interpolate["Basis"] = "basis";
    Interpolate["BasisClosed"] = "basis-closed";
    Interpolate["BasisOpen"] = "basis-open";
    Interpolate["Bundle"] = "bundle";
    Interpolate["Cardinal"] = "cardinal";
    Interpolate["CardinalClosed"] = "cardinal-closed";
    Interpolate["CardinalOpen"] = "cardinal-open";
    Interpolate["Linear"] = "linear";
    Interpolate["LinearClosed"] = "linear-closed";
    Interpolate["Monotone"] = "monotone";
    Interpolate["Step"] = "step";
    Interpolate["StepAfter"] = "step-after";
    Interpolate["StepBefore"] = "step-before";
})(Interpolate = exports.Interpolate || (exports.Interpolate = {}));
/**
 * The orientation of a non-stacked bar, tick, area, and line charts.
 * The value is either horizontal (default) or vertical.
 * - For bar, rule and tick, this determines whether the size of the bar and tick
 * should be applied to x or y dimension.
 * - For area, this property determines the orient property of the Vega output.
 * - For line and trail marks, this property determines the sort order of the points in the
 * line
 * if `config.sortLineBy` is not specified.
 * For stacked charts, this is always determined by the orientation of the stack;
 * therefore explicitly specified value will be ignored.
 *
 * Orientation of the box plot.  This is normally automatically determined based on types of
 * fields on x and y channels. However, an explicit `orient` be specified when the
 * orientation is ambiguous.
 *
 * __Default value:__ `"vertical"`.
 *
 * Orientation of the error bar.  This is normally automatically determined, but can be
 * specified when the orientation is ambiguous and cannot be automatically determined.
 *
 * Orientation of the error band. This is normally automatically determined, but can be
 * specified when the orientation is ambiguous and cannot be automatically determined.
 *
 * The default direction (`"horizontal"` or `"vertical"`) for gradient legends.
 *
 * __Default value:__ `"vertical"`.
 *
 * The default direction (`"horizontal"` or `"vertical"`) for symbol legends.
 *
 * __Default value:__ `"vertical"`.
 *
 * The direction of the legend, one of `"vertical"` or `"horizontal"`.
 *
 * __Default value:__ "vertical"`
 * *
 */
var Orient;
(function (Orient) {
    Orient["Horizontal"] = "horizontal";
    Orient["Vertical"] = "vertical";
})(Orient = exports.Orient || (exports.Orient = {}));
/**
 * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
 *
 * __Default value:__ `"square"`
 */
var StrokeCap;
(function (StrokeCap) {
    StrokeCap["Butt"] = "butt";
    StrokeCap["Round"] = "round";
    StrokeCap["Square"] = "square";
})(StrokeCap = exports.StrokeCap || (exports.StrokeCap = {}));
/**
 * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
 *
 * __Default value:__ `"miter"`
 *
 * The stroke line join method. One of miter (default), round or bevel.
 *
 * __Default value:__ 'miter'
 */
var StrokeJoin;
(function (StrokeJoin) {
    StrokeJoin["Bevel"] = "bevel";
    StrokeJoin["Miter"] = "miter";
    StrokeJoin["Round"] = "round";
})(StrokeJoin = exports.StrokeJoin || (exports.StrokeJoin = {}));
var Content;
(function (Content) {
    Content["Data"] = "data";
    Content["Encoding"] = "encoding";
})(Content = exports.Content || (exports.Content = {}));
var PointEnum;
(function (PointEnum) {
    PointEnum["Transparent"] = "transparent";
})(PointEnum = exports.PointEnum || (exports.PointEnum = {}));
var LabelOverlapEnum;
(function (LabelOverlapEnum) {
    LabelOverlapEnum["Greedy"] = "greedy";
    LabelOverlapEnum["Parity"] = "parity";
})(LabelOverlapEnum = exports.LabelOverlapEnum || (exports.LabelOverlapEnum = {}));
var ExtentEnum;
(function (ExtentEnum) {
    ExtentEnum["MinMax"] = "min-max";
})(ExtentEnum = exports.ExtentEnum || (exports.ExtentEnum = {}));
/**
 * The extent of the band. Available options include:
 * - `"ci"`: Extend the band to the confidence interval of the mean.
 * - `"stderr"`: The size of band are set to the value of standard error, extending from the
 * mean.
 * - `"stdev"`: The size of band are set to the value of standard deviation, extending from
 * the mean.
 * - `"iqr"`: Extend the band to the q1 and q3.
 *
 * __Default value:__ `"stderr"`.
 *
 * The extent of the rule. Available options include:
 * - `"ci"`: Extend the rule to the confidence interval of the mean.
 * - `"stderr"`: The size of rule are set to the value of standard error, extending from the
 * mean.
 * - `"stdev"`: The size of rule are set to the value of standard deviation, extending from
 * the mean.
 * - `"iqr"`: Extend the rule to the q1 and q3.
 *
 * __Default value:__ `"stderr"`.
 */
var ErrorbandExtent;
(function (ErrorbandExtent) {
    ErrorbandExtent["Ci"] = "ci";
    ErrorbandExtent["Iqr"] = "iqr";
    ErrorbandExtent["Stderr"] = "stderr";
    ErrorbandExtent["Stdev"] = "stdev";
})(ErrorbandExtent = exports.ErrorbandExtent || (exports.ErrorbandExtent = {}));
/**
 * Defines how Vega-Lite generates title for fields.  There are three possible styles:
 * - `"verbal"` (Default) - displays function in a verbal style (e.g., "Sum of field",
 * "Year-month of date", "field (binned)").
 * - `"function"` - displays function using parentheses and capitalized texts (e.g.,
 * "SUM(field)", "YEARMONTH(date)", "BIN(field)").
 * - `"plain"` - displays only the field name without functions (e.g., "field", "date",
 * "field").
 */
var FieldTitle;
(function (FieldTitle) {
    FieldTitle["Functional"] = "functional";
    FieldTitle["Plain"] = "plain";
    FieldTitle["Verbal"] = "verbal";
})(FieldTitle = exports.FieldTitle || (exports.FieldTitle = {}));
var InvalidValues;
(function (InvalidValues) {
    InvalidValues["Filter"] = "filter";
})(InvalidValues = exports.InvalidValues || (exports.InvalidValues = {}));
/**
 * The orientation of the legend, which determines how the legend is positioned within the
 * scene. One of "left", "right", "top-left", "top-right", "bottom-left", "bottom-right",
 * "none".
 *
 * __Default value:__ `"right"`
 */
var LegendOrient;
(function (LegendOrient) {
    LegendOrient["Bottom"] = "bottom";
    LegendOrient["BottomLeft"] = "bottom-left";
    LegendOrient["BottomRight"] = "bottom-right";
    LegendOrient["Left"] = "left";
    LegendOrient["None"] = "none";
    LegendOrient["Right"] = "right";
    LegendOrient["Top"] = "top";
    LegendOrient["TopLeft"] = "top-left";
    LegendOrient["TopRight"] = "top-right";
})(LegendOrient = exports.LegendOrient || (exports.LegendOrient = {}));
/**
 * The cartographic projection to use. This value is case-insensitive, for example
 * `"albers"` and `"Albers"` indicate the same projection type. You can find all valid
 * projection types [in the
 * documentation](https://vega.github.io/vega-lite/docs/projection.html#projection-types).
 *
 * __Default value:__ `mercator`
 */
var VGProjectionType;
(function (VGProjectionType) {
    VGProjectionType["Albers"] = "albers";
    VGProjectionType["AlbersUsa"] = "albersUsa";
    VGProjectionType["AzimuthalEqualArea"] = "azimuthalEqualArea";
    VGProjectionType["AzimuthalEquidistant"] = "azimuthalEquidistant";
    VGProjectionType["ConicConformal"] = "conicConformal";
    VGProjectionType["ConicEqualArea"] = "conicEqualArea";
    VGProjectionType["ConicEquidistant"] = "conicEquidistant";
    VGProjectionType["Equirectangular"] = "equirectangular";
    VGProjectionType["Gnomonic"] = "gnomonic";
    VGProjectionType["Mercator"] = "mercator";
    VGProjectionType["Orthographic"] = "orthographic";
    VGProjectionType["Stereographic"] = "stereographic";
    VGProjectionType["TransverseMercator"] = "transverseMercator";
})(VGProjectionType = exports.VGProjectionType || (exports.VGProjectionType = {}));
/**
 * Establishes a two-way binding between the interval selection and the scales
 * used within the same view. This allows a user to interactively pan and
 * zoom the view.
 */
var BindEnum;
(function (BindEnum) {
    BindEnum["Scales"] = "scales";
})(BindEnum = exports.BindEnum || (exports.BindEnum = {}));
/**
 * By default, all data values are considered to lie within an empty selection.
 * When set to `none`, empty selections contain no data values.
 */
var Empty;
(function (Empty) {
    Empty["All"] = "all";
    Empty["None"] = "none";
})(Empty = exports.Empty || (exports.Empty = {}));
var SingleDefChannel;
(function (SingleDefChannel) {
    SingleDefChannel["Color"] = "color";
    SingleDefChannel["Column"] = "column";
    SingleDefChannel["Fill"] = "fill";
    SingleDefChannel["FillOpacity"] = "fillOpacity";
    SingleDefChannel["Href"] = "href";
    SingleDefChannel["Key"] = "key";
    SingleDefChannel["Latitude"] = "latitude";
    SingleDefChannel["Latitude2"] = "latitude2";
    SingleDefChannel["Longitude"] = "longitude";
    SingleDefChannel["Longitude2"] = "longitude2";
    SingleDefChannel["Opacity"] = "opacity";
    SingleDefChannel["Row"] = "row";
    SingleDefChannel["Shape"] = "shape";
    SingleDefChannel["Size"] = "size";
    SingleDefChannel["Stroke"] = "stroke";
    SingleDefChannel["StrokeOpacity"] = "strokeOpacity";
    SingleDefChannel["StrokeWidth"] = "strokeWidth";
    SingleDefChannel["Text"] = "text";
    SingleDefChannel["Tooltip"] = "tooltip";
    SingleDefChannel["X"] = "x";
    SingleDefChannel["X2"] = "x2";
    SingleDefChannel["XError"] = "xError";
    SingleDefChannel["XError2"] = "xError2";
    SingleDefChannel["Y"] = "y";
    SingleDefChannel["Y2"] = "y2";
    SingleDefChannel["YError"] = "yError";
    SingleDefChannel["YError2"] = "yError2";
})(SingleDefChannel = exports.SingleDefChannel || (exports.SingleDefChannel = {}));
/**
 * With layered and multi-view displays, a strategy that determines how
 * selections' data queries are resolved when applied in a filter transform,
 * conditional encoding rule, or scale domain.
 */
var SelectionResolution;
(function (SelectionResolution) {
    SelectionResolution["Global"] = "global";
    SelectionResolution["Intersect"] = "intersect";
    SelectionResolution["Union"] = "union";
})(SelectionResolution = exports.SelectionResolution || (exports.SelectionResolution = {}));
var InputEnum;
(function (InputEnum) {
    InputEnum["Checkbox"] = "checkbox";
    InputEnum["Radio"] = "radio";
    InputEnum["Range"] = "range";
    InputEnum["Select"] = "select";
})(InputEnum = exports.InputEnum || (exports.InputEnum = {}));
/**
 * Default stack offset for stackable mark.
 *
 * Mode for stacking marks.
 * __Default value:__ `"zero"`
 */
var StackOffset;
(function (StackOffset) {
    StackOffset["Center"] = "center";
    StackOffset["Normalize"] = "normalize";
    StackOffset["Zero"] = "zero";
})(StackOffset = exports.StackOffset || (exports.StackOffset = {}));
/**
 * The anchor position for placing the title. One of `"start"`, `"middle"`, or `"end"`. For
 * example, with an orientation of top these anchor positions map to a left-, center-, or
 * right-aligned title.
 *
 * The anchor position for placing the title. One of `"start"`, `"middle"`, or `"end"`. For
 * example, with an orientation of top these anchor positions map to a left-, center-, or
 * right-aligned title.
 *
 * __Default value:__ `"middle"` for
 * [single](https://vega.github.io/vega-lite/docs/spec.html) and
 * [layered](https://vega.github.io/vega-lite/docs/layer.html) views.
 * `"start"` for other composite views.
 *
 * __Note:__ [For now](https://github.com/vega/vega-lite/issues/2875), `anchor` is only
 * customizable only for [single](https://vega.github.io/vega-lite/docs/spec.html) and
 * [layered](https://vega.github.io/vega-lite/docs/layer.html) views.  For other composite
 * views, `anchor` is always `"start"`.
 */
var TitleAnchor;
(function (TitleAnchor) {
    TitleAnchor["End"] = "end";
    TitleAnchor["Middle"] = "middle";
    TitleAnchor["Start"] = "start";
})(TitleAnchor = exports.TitleAnchor || (exports.TitleAnchor = {}));
/**
 * The reference frame for the anchor position, one of `"bounds"` (to anchor relative to the
 * full bounding box) or `"group"` (to anchor relative to the group width or height).
 */
var TitleFrame;
(function (TitleFrame) {
    TitleFrame["Bounds"] = "bounds";
    TitleFrame["Group"] = "group";
})(TitleFrame = exports.TitleFrame || (exports.TitleFrame = {}));
/**
 * Default title orientation (`"top"`, `"bottom"`, `"left"`, or `"right"`)
 */
var TitleOrient;
(function (TitleOrient) {
    TitleOrient["Bottom"] = "bottom";
    TitleOrient["Left"] = "left";
    TitleOrient["None"] = "none";
    TitleOrient["Right"] = "right";
    TitleOrient["Top"] = "top";
})(TitleOrient = exports.TitleOrient || (exports.TitleOrient = {}));
/**
 * Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.
 * The default format type is determined by the extension of the file URL.
 * If no extension is detected, `"json"` will be used by default.
 */
var DataFormatType;
(function (DataFormatType) {
    DataFormatType["CSV"] = "csv";
    DataFormatType["Dsv"] = "dsv";
    DataFormatType["JSON"] = "json";
    DataFormatType["Topojson"] = "topojson";
    DataFormatType["Tsv"] = "tsv";
})(DataFormatType = exports.DataFormatType || (exports.DataFormatType = {}));
/**
 * Aggregation function for the field
 * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
 *
 * __Default value:__ `undefined` (None)
 *
 * An [aggregate operation](https://vega.github.io/vega-lite/docs/aggregate.html#ops) to
 * perform on the field prior to sorting (e.g., `"count"`, `"mean"` and `"median"`).
 * This property is required in cases where the sort field and the data reference field do
 * not match.
 * The input data objects will be aggregated, grouped by the encoded data field.
 *
 * For a full list of operations, please see the documentation for
 * [aggregate](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
 *
 * The aggregation operations to apply to the fields, such as sum, average or count.
 * See the [full list of supported aggregation
 * operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
 * for more information.
 */
var AggregateOp;
(function (AggregateOp) {
    AggregateOp["Argmax"] = "argmax";
    AggregateOp["Argmin"] = "argmin";
    AggregateOp["Average"] = "average";
    AggregateOp["Ci0"] = "ci0";
    AggregateOp["Ci1"] = "ci1";
    AggregateOp["Count"] = "count";
    AggregateOp["Distinct"] = "distinct";
    AggregateOp["Max"] = "max";
    AggregateOp["Mean"] = "mean";
    AggregateOp["Median"] = "median";
    AggregateOp["Min"] = "min";
    AggregateOp["Missing"] = "missing";
    AggregateOp["Q1"] = "q1";
    AggregateOp["Q3"] = "q3";
    AggregateOp["Stderr"] = "stderr";
    AggregateOp["Stdev"] = "stdev";
    AggregateOp["Stdevp"] = "stdevp";
    AggregateOp["Sum"] = "sum";
    AggregateOp["Valid"] = "valid";
    AggregateOp["Values"] = "values";
    AggregateOp["Variance"] = "variance";
    AggregateOp["Variancep"] = "variancep";
})(AggregateOp = exports.AggregateOp || (exports.AggregateOp = {}));
var BinEnum;
(function (BinEnum) {
    BinEnum["Binned"] = "binned";
})(BinEnum = exports.BinEnum || (exports.BinEnum = {}));
/**
 * Time unit for the field to be filtered.
 *
 * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
 * or [a temporal field that gets casted as
 * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
 *
 * __Default value:__ `undefined` (None)
 *
 * The timeUnit.
 */
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["Date"] = "date";
    TimeUnit["Day"] = "day";
    TimeUnit["Hours"] = "hours";
    TimeUnit["Hoursminutes"] = "hoursminutes";
    TimeUnit["Hoursminutesseconds"] = "hoursminutesseconds";
    TimeUnit["Milliseconds"] = "milliseconds";
    TimeUnit["Minutes"] = "minutes";
    TimeUnit["Minutesseconds"] = "minutesseconds";
    TimeUnit["Month"] = "month";
    TimeUnit["Monthdate"] = "monthdate";
    TimeUnit["Monthdatehours"] = "monthdatehours";
    TimeUnit["Quarter"] = "quarter";
    TimeUnit["Quartermonth"] = "quartermonth";
    TimeUnit["Seconds"] = "seconds";
    TimeUnit["Secondsmilliseconds"] = "secondsmilliseconds";
    TimeUnit["Utcdate"] = "utcdate";
    TimeUnit["Utcday"] = "utcday";
    TimeUnit["Utchours"] = "utchours";
    TimeUnit["Utchoursminutes"] = "utchoursminutes";
    TimeUnit["Utchoursminutesseconds"] = "utchoursminutesseconds";
    TimeUnit["Utcmilliseconds"] = "utcmilliseconds";
    TimeUnit["Utcminutes"] = "utcminutes";
    TimeUnit["Utcminutesseconds"] = "utcminutesseconds";
    TimeUnit["Utcmonth"] = "utcmonth";
    TimeUnit["Utcmonthdate"] = "utcmonthdate";
    TimeUnit["Utcmonthdatehours"] = "utcmonthdatehours";
    TimeUnit["Utcquarter"] = "utcquarter";
    TimeUnit["Utcquartermonth"] = "utcquartermonth";
    TimeUnit["Utcseconds"] = "utcseconds";
    TimeUnit["Utcsecondsmilliseconds"] = "utcsecondsmilliseconds";
    TimeUnit["Utcyear"] = "utcyear";
    TimeUnit["Utcyearmonth"] = "utcyearmonth";
    TimeUnit["Utcyearmonthdate"] = "utcyearmonthdate";
    TimeUnit["Utcyearmonthdatehours"] = "utcyearmonthdatehours";
    TimeUnit["Utcyearmonthdatehoursminutes"] = "utcyearmonthdatehoursminutes";
    TimeUnit["Utcyearmonthdatehoursminutesseconds"] = "utcyearmonthdatehoursminutesseconds";
    TimeUnit["Utcyearquarter"] = "utcyearquarter";
    TimeUnit["Utcyearquartermonth"] = "utcyearquartermonth";
    TimeUnit["Year"] = "year";
    TimeUnit["Yearmonth"] = "yearmonth";
    TimeUnit["Yearmonthdate"] = "yearmonthdate";
    TimeUnit["Yearmonthdatehours"] = "yearmonthdatehours";
    TimeUnit["Yearmonthdatehoursminutes"] = "yearmonthdatehoursminutes";
    TimeUnit["Yearmonthdatehoursminutesseconds"] = "yearmonthdatehoursminutesseconds";
    TimeUnit["Yearquarter"] = "yearquarter";
    TimeUnit["Yearquartermonth"] = "yearquartermonth";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
var RepeatEnum;
(function (RepeatEnum) {
    RepeatEnum["Column"] = "column";
    RepeatEnum["Row"] = "row";
})(RepeatEnum = exports.RepeatEnum || (exports.RepeatEnum = {}));
/**
 * The type of the legend. Use `"symbol"` to create a discrete legend and `"gradient"` for a
 * continuous color gradient.
 *
 * __Default value:__ `"gradient"` for non-binned quantitative fields and temporal fields;
 * `"symbol"` otherwise.
 */
var LegendType;
(function (LegendType) {
    LegendType["Gradient"] = "gradient";
    LegendType["Symbol"] = "symbol";
})(LegendType = exports.LegendType || (exports.LegendType = {}));
var Domain;
(function (Domain) {
    Domain["Unaggregated"] = "unaggregated";
})(Domain = exports.Domain || (exports.Domain = {}));
var ScaleInterpolateParamsType;
(function (ScaleInterpolateParamsType) {
    ScaleInterpolateParamsType["Cubehelix"] = "cubehelix";
    ScaleInterpolateParamsType["CubehelixLong"] = "cubehelix-long";
    ScaleInterpolateParamsType["RGB"] = "rgb";
})(ScaleInterpolateParamsType = exports.ScaleInterpolateParamsType || (exports.ScaleInterpolateParamsType = {}));
var ScaleInterpolate;
(function (ScaleInterpolate) {
    ScaleInterpolate["Cubehelix"] = "cubehelix";
    ScaleInterpolate["CubehelixLong"] = "cubehelix-long";
    ScaleInterpolate["HCL"] = "hcl";
    ScaleInterpolate["HCLLong"] = "hcl-long";
    ScaleInterpolate["Hsl"] = "hsl";
    ScaleInterpolate["HslLong"] = "hsl-long";
    ScaleInterpolate["Lab"] = "lab";
    ScaleInterpolate["RGB"] = "rgb";
})(ScaleInterpolate = exports.ScaleInterpolate || (exports.ScaleInterpolate = {}));
var NiceTime;
(function (NiceTime) {
    NiceTime["Day"] = "day";
    NiceTime["Hour"] = "hour";
    NiceTime["Minute"] = "minute";
    NiceTime["Month"] = "month";
    NiceTime["Second"] = "second";
    NiceTime["Week"] = "week";
    NiceTime["Year"] = "year";
})(NiceTime = exports.NiceTime || (exports.NiceTime = {}));
/**
 * The type of scale.  Vega-Lite supports the following categories of scale types:
 *
 * 1) [**Continuous Scales**](https://vega.github.io/vega-lite/docs/scale.html#continuous)
 * -- mapping continuous domains to continuous output ranges
 * ([`"linear"`](https://vega.github.io/vega-lite/docs/scale.html#linear),
 * [`"pow"`](https://vega.github.io/vega-lite/docs/scale.html#pow),
 * [`"sqrt"`](https://vega.github.io/vega-lite/docs/scale.html#sqrt),
 * [`"log"`](https://vega.github.io/vega-lite/docs/scale.html#log),
 * [`"time"`](https://vega.github.io/vega-lite/docs/scale.html#time),
 * [`"utc"`](https://vega.github.io/vega-lite/docs/scale.html#utc),
 * [`"sequential"`](https://vega.github.io/vega-lite/docs/scale.html#sequential)).
 *
 * 2) [**Discrete Scales**](https://vega.github.io/vega-lite/docs/scale.html#discrete) --
 * mapping discrete domains to discrete
 * ([`"ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#ordinal)) or continuous
 * ([`"band"`](https://vega.github.io/vega-lite/docs/scale.html#band) and
 * [`"point"`](https://vega.github.io/vega-lite/docs/scale.html#point)) output ranges.
 *
 * 3) [**Discretizing
 * Scales**](https://vega.github.io/vega-lite/docs/scale.html#discretizing) -- mapping
 * continuous domains to discrete output ranges
 * ([`"bin-linear"`](https://vega.github.io/vega-lite/docs/scale.html#bin-linear),
 * [`"bin-ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#bin-ordinal),
 * [`"quantile"`](https://vega.github.io/vega-lite/docs/scale.html#quantile),
 * [`"quantize"`](https://vega.github.io/vega-lite/docs/scale.html#quantize) and
 * [`"threshold"`](https://vega.github.io/vega-lite/docs/scale.html#threshold).
 *
 * __Default value:__ please see the [scale type
 * table](https://vega.github.io/vega-lite/docs/scale.html#type).
 */
var ScaleType;
(function (ScaleType) {
    ScaleType["Band"] = "band";
    ScaleType["BinLinear"] = "bin-linear";
    ScaleType["BinOrdinal"] = "bin-ordinal";
    ScaleType["Linear"] = "linear";
    ScaleType["Log"] = "log";
    ScaleType["Ordinal"] = "ordinal";
    ScaleType["Point"] = "point";
    ScaleType["Pow"] = "pow";
    ScaleType["Quantile"] = "quantile";
    ScaleType["Quantize"] = "quantize";
    ScaleType["Sequential"] = "sequential";
    ScaleType["Sqrt"] = "sqrt";
    ScaleType["Threshold"] = "threshold";
    ScaleType["Time"] = "time";
    ScaleType["UTC"] = "utc";
})(ScaleType = exports.ScaleType || (exports.ScaleType = {}));
/**
 * Whether to sort the field in ascending or descending order.
 */
var VGComparatorOrder;
(function (VGComparatorOrder) {
    VGComparatorOrder["Ascending"] = "ascending";
    VGComparatorOrder["Descending"] = "descending";
})(VGComparatorOrder = exports.VGComparatorOrder || (exports.VGComparatorOrder = {}));
/**
 * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
 * `"nominal"`).
 * It can also be a `"geojson"` type for encoding
 * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
 *
 * Constants and utilities for data type
 * Data type based on level of measurement
 */
var Type;
(function (Type) {
    Type["Geojson"] = "geojson";
    Type["Nominal"] = "nominal";
    Type["Ordinal"] = "ordinal";
    Type["Quantitative"] = "quantitative";
    Type["Temporal"] = "temporal";
})(Type = exports.Type || (exports.Type = {}));
/**
 * The orientation of the axis. One of `"top"`, `"bottom"`, `"left"` or `"right"`. The
 * orientation can be used to further specialize the axis type (e.g., a y axis oriented for
 * the right edge of the chart).
 *
 * __Default value:__ `"bottom"` for x-axes and `"left"` for y-axes.
 */
var AxisOrient;
(function (AxisOrient) {
    AxisOrient["Bottom"] = "bottom";
    AxisOrient["Left"] = "left";
    AxisOrient["Right"] = "right";
    AxisOrient["Top"] = "top";
})(AxisOrient = exports.AxisOrient || (exports.AxisOrient = {}));
/**
 * The imputation method to use for the field value of imputed data objects.
 * One of `value`, `mean`, `median`, `max` or `min`.
 *
 * __Default value:__  `"value"`
 */
var ImputeMethod;
(function (ImputeMethod) {
    ImputeMethod["Max"] = "max";
    ImputeMethod["Mean"] = "mean";
    ImputeMethod["Median"] = "median";
    ImputeMethod["Min"] = "min";
    ImputeMethod["Value"] = "value";
})(ImputeMethod = exports.ImputeMethod || (exports.ImputeMethod = {}));
/**
 * The extent of the band. Available options include:
 * - `"ci"`: Extend the band to the confidence interval of the mean.
 * - `"stderr"`: The size of band are set to the value of standard error, extending from the
 * mean.
 * - `"stdev"`: The size of band are set to the value of standard deviation, extending from
 * the mean.
 * - `"iqr"`: Extend the band to the q1 and q3.
 *
 * __Default value:__ `"stderr"`.
 *
 * The extent of the rule. Available options include:
 * - `"ci"`: Extend the rule to the confidence interval of the mean.
 * - `"stderr"`: The size of rule are set to the value of standard error, extending from the
 * mean.
 * - `"stdev"`: The size of rule are set to the value of standard deviation, extending from
 * the mean.
 * - `"iqr"`: Extend the rule to the q1 and q3.
 *
 * __Default value:__ `"stderr"`.
 */
var ExtentExtent;
(function (ExtentExtent) {
    ExtentExtent["Ci"] = "ci";
    ExtentExtent["Iqr"] = "iqr";
    ExtentExtent["MinMax"] = "min-max";
    ExtentExtent["Stderr"] = "stderr";
    ExtentExtent["Stdev"] = "stdev";
})(ExtentExtent = exports.ExtentExtent || (exports.ExtentExtent = {}));
/**
 * The mark type. This could a primitive mark type
 * (one of `"bar"`, `"circle"`, `"square"`, `"tick"`, `"line"`,
 * `"area"`, `"point"`, `"geoshape"`, `"rule"`, and `"text"`)
 * or a composite mark type (`"boxplot"`, `"errorband"`, `"errorbar"`).
 *
 * All types of primitive marks.
 *
 * The mark type.
 * One of `"bar"`, `"circle"`, `"square"`, `"tick"`, `"line"`,
 * `"area"`, `"point"`, `"geoshape"`, `"rule"`, and `"text"`.
 */
var BoxPlot;
(function (BoxPlot) {
    BoxPlot["Area"] = "area";
    BoxPlot["Bar"] = "bar";
    BoxPlot["Boxplot"] = "boxplot";
    BoxPlot["Circle"] = "circle";
    BoxPlot["Errorband"] = "errorband";
    BoxPlot["Errorbar"] = "errorbar";
    BoxPlot["Geoshape"] = "geoshape";
    BoxPlot["Line"] = "line";
    BoxPlot["Point"] = "point";
    BoxPlot["Rect"] = "rect";
    BoxPlot["Rule"] = "rule";
    BoxPlot["Square"] = "square";
    BoxPlot["Text"] = "text";
    BoxPlot["Tick"] = "tick";
    BoxPlot["Trail"] = "trail";
})(BoxPlot = exports.BoxPlot || (exports.BoxPlot = {}));
var ResolveMode;
(function (ResolveMode) {
    ResolveMode["Independent"] = "independent";
    ResolveMode["Shared"] = "shared";
})(ResolveMode = exports.ResolveMode || (exports.ResolveMode = {}));
var SelectionDefType;
(function (SelectionDefType) {
    SelectionDefType["Interval"] = "interval";
    SelectionDefType["Multi"] = "multi";
    SelectionDefType["Single"] = "single";
})(SelectionDefType = exports.SelectionDefType || (exports.SelectionDefType = {}));
/**
 * The window or aggregation operations to apply within a window, including `rank`, `lead`,
 * `sum`, `average` or `count`. See the list of all supported operations
 * [here](https://vega.github.io/vega-lite/docs/window.html#ops).
 *
 * Aggregation function for the field
 * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
 *
 * __Default value:__ `undefined` (None)
 *
 * An [aggregate operation](https://vega.github.io/vega-lite/docs/aggregate.html#ops) to
 * perform on the field prior to sorting (e.g., `"count"`, `"mean"` and `"median"`).
 * This property is required in cases where the sort field and the data reference field do
 * not match.
 * The input data objects will be aggregated, grouped by the encoded data field.
 *
 * For a full list of operations, please see the documentation for
 * [aggregate](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
 *
 * The aggregation operations to apply to the fields, such as sum, average or count.
 * See the [full list of supported aggregation
 * operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
 * for more information.
 */
var Op;
(function (Op) {
    Op["Argmax"] = "argmax";
    Op["Argmin"] = "argmin";
    Op["Average"] = "average";
    Op["Ci0"] = "ci0";
    Op["Ci1"] = "ci1";
    Op["Count"] = "count";
    Op["CumeDist"] = "cume_dist";
    Op["DenseRank"] = "dense_rank";
    Op["Distinct"] = "distinct";
    Op["FirstValue"] = "first_value";
    Op["Lag"] = "lag";
    Op["LastValue"] = "last_value";
    Op["Lead"] = "lead";
    Op["Max"] = "max";
    Op["Mean"] = "mean";
    Op["Median"] = "median";
    Op["Min"] = "min";
    Op["Missing"] = "missing";
    Op["NthValue"] = "nth_value";
    Op["Ntile"] = "ntile";
    Op["PercentRank"] = "percent_rank";
    Op["Q1"] = "q1";
    Op["Q3"] = "q3";
    Op["Rank"] = "rank";
    Op["RowNumber"] = "row_number";
    Op["Stderr"] = "stderr";
    Op["Stdev"] = "stdev";
    Op["Stdevp"] = "stdevp";
    Op["Sum"] = "sum";
    Op["Valid"] = "valid";
    Op["Values"] = "values";
    Op["Variance"] = "variance";
    Op["Variancep"] = "variancep";
})(Op = exports.Op || (exports.Op = {}));
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert;
(function (Convert) {
    function toSpec(json) {
        return cast(JSON.parse(json), r("Spec"));
    }
    Convert.toSpec = toSpec;
    function specToJson(value) {
        return JSON.stringify(uncast(value, r("Spec")), null, 2);
    }
    Convert.specToJson = specToJson;
    function invalidValue(typ, val) {
        throw Error("Invalid value " + JSON.stringify(val) + " for type " + JSON.stringify(typ));
    }
    function jsonToJSProps(typ) {
        if (typ.jsonToJS === undefined) {
            var map = {};
            typ.props.forEach(function (p) { return map[p.json] = { key: p.js, typ: p.typ }; });
            typ.jsonToJS = map;
        }
        return typ.jsonToJS;
    }
    function jsToJSONProps(typ) {
        if (typ.jsToJSON === undefined) {
            var map = {};
            typ.props.forEach(function (p) { return map[p.js] = { key: p.json, typ: p.typ }; });
            typ.jsToJSON = map;
        }
        return typ.jsToJSON;
    }
    function transform(val, typ, getProps) {
        function transformPrimitive(typ, val) {
            if (typeof typ === typeof val)
                return val;
            return invalidValue(typ, val);
        }
        function transformUnion(typs, val) {
            // val must validate against one typ in typs
            var l = typs.length;
            for (var i = 0; i < l; i++) {
                var typ = typs[i];
                try {
                    return transform(val, typ, getProps);
                }
                catch (_) { }
            }
            return invalidValue(typs, val);
        }
        function transformEnum(cases, val) {
            if (cases.indexOf(val) !== -1)
                return val;
            return invalidValue(cases, val);
        }
        function transformArray(typ, val) {
            // val must be an array with no invalid elements
            if (!Array.isArray(val))
                return invalidValue("array", val);
            return val.map(function (el) { return transform(el, typ, getProps); });
        }
        function transformObject(props, additional, val) {
            if (val === null || typeof val !== "object" || Array.isArray(val)) {
                return invalidValue("object", val);
            }
            var result = {};
            Object.getOwnPropertyNames(props).forEach(function (key) {
                var prop = props[key];
                var v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
                result[prop.key] = transform(v, prop.typ, getProps);
            });
            Object.getOwnPropertyNames(val).forEach(function (key) {
                if (!Object.prototype.hasOwnProperty.call(props, key)) {
                    result[key] = transform(val[key], additional, getProps);
                }
            });
            return result;
        }
        if (typ === "any")
            return val;
        if (typ === null) {
            if (val === null)
                return val;
            return invalidValue(typ, val);
        }
        if (typ === false)
            return invalidValue(typ, val);
        while (typeof typ === "object" && typ.ref !== undefined) {
            typ = typeMap[typ.ref];
        }
        if (Array.isArray(typ))
            return transformEnum(typ, val);
        if (typeof typ === "object") {
            return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
                : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                    : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                        : invalidValue(typ, val);
        }
        return transformPrimitive(typ, val);
    }
    function cast(val, typ) {
        return transform(val, typ, jsonToJSProps);
    }
    function uncast(val, typ) {
        return transform(val, typ, jsToJSONProps);
    }
    function a(typ) {
        return { arrayItems: typ };
    }
    function u() {
        var typs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            typs[_i] = arguments[_i];
        }
        return { unionMembers: typs };
    }
    function o(props, additional) {
        return { props: props, additional: additional };
    }
    function m(additional) {
        return { props: [], additional: additional };
    }
    function r(name) {
        return { ref: name };
    }
    var typeMap = {
        "Spec": o([
            { json: "$schema", js: "$schema", typ: u(undefined, "") },
            { json: "autosize", js: "autosize", typ: u(undefined, u(r("AutoSizeParams"), r("AutosizeType"))) },
            { json: "background", js: "background", typ: u(undefined, "") },
            { json: "config", js: "config", typ: u(undefined, r("Config")) },
            { json: "data", js: "data", typ: u(undefined, r("Data")) },
            { json: "datasets", js: "datasets", typ: u(undefined, m(u(a(u(true, 3.14, m("any"), "")), m("any"), ""))) },
            { json: "description", js: "description", typ: u(undefined, "") },
            { json: "encoding", js: "encoding", typ: u(undefined, r("Encoding")) },
            { json: "height", js: "height", typ: u(undefined, 3.14) },
            { json: "mark", js: "mark", typ: u(undefined, u(r("BoxPlotDefClass"), r("BoxPlot"))) },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "padding", js: "padding", typ: u(undefined, u(r("PaddingClass"), 3.14)) },
            { json: "projection", js: "projection", typ: u(undefined, r("Projection")) },
            { json: "selection", js: "selection", typ: u(undefined, m(r("SelectionDef"))) },
            { json: "title", js: "title", typ: u(undefined, u(r("TitleParams"), "")) },
            { json: "transform", js: "transform", typ: u(undefined, a(r("Transform"))) },
            { json: "usermeta", js: "usermeta", typ: u(undefined, m("any")) },
            { json: "width", js: "width", typ: u(undefined, 3.14) },
            { json: "align", js: "align", typ: u(undefined, u(r("RowColVGLayoutAlign"), r("VGLayoutAlign"))) },
            { json: "bounds", js: "bounds", typ: u(undefined, r("Bounds")) },
            { json: "center", js: "center", typ: u(undefined, u(true, r("RowColBoolean"))) },
            { json: "facet", js: "facet", typ: u(undefined, r("FacetMapping")) },
            { json: "resolve", js: "resolve", typ: u(undefined, r("Resolve")) },
            { json: "spacing", js: "spacing", typ: u(undefined, u(r("RowColNumber"), 3.14)) },
            { json: "spec", js: "spec", typ: u(undefined, r("SpecClass")) },
            { json: "layer", js: "layer", typ: u(undefined, a(r("LayerSpec"))) },
            { json: "repeat", js: "repeat", typ: u(undefined, r("Repeat")) },
            { json: "vconcat", js: "vconcat", typ: u(undefined, a(r("SpecElement"))) },
            { json: "hconcat", js: "hconcat", typ: u(undefined, a(r("SpecElement"))) },
        ], false),
        "RowColVGLayoutAlign": o([
            { json: "column", js: "column", typ: u(undefined, r("VGLayoutAlign")) },
            { json: "row", js: "row", typ: u(undefined, r("VGLayoutAlign")) },
        ], false),
        "AutoSizeParams": o([
            { json: "contains", js: "contains", typ: u(undefined, r("Contains")) },
            { json: "resize", js: "resize", typ: u(undefined, true) },
            { json: "type", js: "type", typ: u(undefined, r("AutosizeType")) },
        ], false),
        "RowColBoolean": o([
            { json: "column", js: "column", typ: u(undefined, true) },
            { json: "row", js: "row", typ: u(undefined, true) },
        ], false),
        "Config": o([
            { json: "area", js: "area", typ: u(undefined, r("AreaConfig")) },
            { json: "autosize", js: "autosize", typ: u(undefined, u(r("AutoSizeParams"), r("AutosizeType"))) },
            { json: "axis", js: "axis", typ: u(undefined, r("AxisConfig")) },
            { json: "axisBand", js: "axisBand", typ: u(undefined, r("AxisConfig")) },
            { json: "axisBottom", js: "axisBottom", typ: u(undefined, r("AxisConfig")) },
            { json: "axisLeft", js: "axisLeft", typ: u(undefined, r("AxisConfig")) },
            { json: "axisRight", js: "axisRight", typ: u(undefined, r("AxisConfig")) },
            { json: "axisTop", js: "axisTop", typ: u(undefined, r("AxisConfig")) },
            { json: "axisX", js: "axisX", typ: u(undefined, r("AxisConfig")) },
            { json: "axisY", js: "axisY", typ: u(undefined, r("AxisConfig")) },
            { json: "background", js: "background", typ: u(undefined, "") },
            { json: "bar", js: "bar", typ: u(undefined, r("BarConfig")) },
            { json: "boxplot", js: "boxplot", typ: u(undefined, r("BoxPlotConfig")) },
            { json: "circle", js: "circle", typ: u(undefined, r("MarkConfig")) },
            { json: "countTitle", js: "countTitle", typ: u(undefined, "") },
            { json: "errorband", js: "errorband", typ: u(undefined, r("ErrorBandConfig")) },
            { json: "errorbar", js: "errorbar", typ: u(undefined, r("ErrorBarConfig")) },
            { json: "fieldTitle", js: "fieldTitle", typ: u(undefined, r("FieldTitle")) },
            { json: "geoshape", js: "geoshape", typ: u(undefined, r("MarkConfig")) },
            { json: "header", js: "header", typ: u(undefined, r("HeaderConfig")) },
            { json: "invalidValues", js: "invalidValues", typ: u(undefined, u(r("InvalidValues"), null)) },
            { json: "legend", js: "legend", typ: u(undefined, r("LegendConfig")) },
            { json: "line", js: "line", typ: u(undefined, r("LineConfig")) },
            { json: "mark", js: "mark", typ: u(undefined, r("MarkConfig")) },
            { json: "numberFormat", js: "numberFormat", typ: u(undefined, "") },
            { json: "padding", js: "padding", typ: u(undefined, u(r("PaddingClass"), 3.14)) },
            { json: "point", js: "point", typ: u(undefined, r("MarkConfig")) },
            { json: "projection", js: "projection", typ: u(undefined, r("Projection")) },
            { json: "range", js: "range", typ: u(undefined, r("RangeConfig")) },
            { json: "rect", js: "rect", typ: u(undefined, r("MarkConfig")) },
            { json: "rule", js: "rule", typ: u(undefined, r("MarkConfig")) },
            { json: "scale", js: "scale", typ: u(undefined, r("ScaleConfig")) },
            { json: "selection", js: "selection", typ: u(undefined, r("SelectionConfig")) },
            { json: "square", js: "square", typ: u(undefined, r("MarkConfig")) },
            { json: "stack", js: "stack", typ: u(undefined, r("StackOffset")) },
            { json: "style", js: "style", typ: u(undefined, m(r("VGMarkConfig"))) },
            { json: "text", js: "text", typ: u(undefined, r("TextConfig")) },
            { json: "tick", js: "tick", typ: u(undefined, r("TickConfig")) },
            { json: "timeFormat", js: "timeFormat", typ: u(undefined, "") },
            { json: "title", js: "title", typ: u(undefined, r("VGTitleConfig")) },
            { json: "trail", js: "trail", typ: u(undefined, r("LineConfig")) },
            { json: "view", js: "view", typ: u(undefined, r("ViewConfig")) },
        ], false),
        "AreaConfig": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "cursor", js: "cursor", typ: u(undefined, r("Cursor")) },
            { json: "dir", js: "dir", typ: u(undefined, r("Dir")) },
            { json: "dx", js: "dx", typ: u(undefined, 3.14) },
            { json: "dy", js: "dy", typ: u(undefined, 3.14) },
            { json: "ellipsis", js: "ellipsis", typ: u(undefined, "") },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "filled", js: "filled", typ: u(undefined, true) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontStyle", js: "fontStyle", typ: u(undefined, r("FontStyle")) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "href", js: "href", typ: u(undefined, "") },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "line", js: "line", typ: u(undefined, u(true, r("OverlayMarkDef"))) },
            { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("Orient")) },
            { json: "point", js: "point", typ: u(undefined, u(true, r("OverlayMarkDef"), r("PointEnum"))) },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "shape", js: "shape", typ: u(undefined, "") },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeCap", js: "strokeCap", typ: u(undefined, r("StrokeCap")) },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "theta", js: "theta", typ: u(undefined, 3.14) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(r("TooltipContent"), "")) },
        ], false),
        "OverlayMarkDef": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "clip", js: "clip", typ: u(undefined, true) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "cursor", js: "cursor", typ: u(undefined, r("Cursor")) },
            { json: "dir", js: "dir", typ: u(undefined, r("Dir")) },
            { json: "dx", js: "dx", typ: u(undefined, 3.14) },
            { json: "dy", js: "dy", typ: u(undefined, 3.14) },
            { json: "ellipsis", js: "ellipsis", typ: u(undefined, "") },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "filled", js: "filled", typ: u(undefined, true) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontStyle", js: "fontStyle", typ: u(undefined, r("FontStyle")) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "href", js: "href", typ: u(undefined, "") },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("Orient")) },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "shape", js: "shape", typ: u(undefined, "") },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeCap", js: "strokeCap", typ: u(undefined, r("StrokeCap")) },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "style", js: "style", typ: u(undefined, u(a(""), "")) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "theta", js: "theta", typ: u(undefined, 3.14) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(r("TooltipContent"), "")) },
            { json: "x2Offset", js: "x2Offset", typ: u(undefined, 3.14) },
            { json: "xOffset", js: "xOffset", typ: u(undefined, 3.14) },
            { json: "y2Offset", js: "y2Offset", typ: u(undefined, 3.14) },
            { json: "yOffset", js: "yOffset", typ: u(undefined, 3.14) },
        ], false),
        "TooltipContent": o([
            { json: "content", js: "content", typ: r("Content") },
        ], false),
        "AxisConfig": o([
            { json: "bandPosition", js: "bandPosition", typ: u(undefined, 3.14) },
            { json: "domain", js: "domain", typ: u(undefined, true) },
            { json: "domainColor", js: "domainColor", typ: u(undefined, "") },
            { json: "domainOpacity", js: "domainOpacity", typ: u(undefined, 3.14) },
            { json: "domainWidth", js: "domainWidth", typ: u(undefined, 3.14) },
            { json: "grid", js: "grid", typ: u(undefined, true) },
            { json: "gridColor", js: "gridColor", typ: u(undefined, "") },
            { json: "gridDash", js: "gridDash", typ: u(undefined, a(3.14)) },
            { json: "gridOpacity", js: "gridOpacity", typ: u(undefined, 3.14) },
            { json: "gridWidth", js: "gridWidth", typ: u(undefined, 3.14) },
            { json: "labelAlign", js: "labelAlign", typ: u(undefined, r("Align")) },
            { json: "labelAngle", js: "labelAngle", typ: u(undefined, 3.14) },
            { json: "labelBaseline", js: "labelBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "labelBound", js: "labelBound", typ: u(undefined, u(true, 3.14)) },
            { json: "labelColor", js: "labelColor", typ: u(undefined, "") },
            { json: "labelFlush", js: "labelFlush", typ: u(undefined, u(true, 3.14)) },
            { json: "labelFlushOffset", js: "labelFlushOffset", typ: u(undefined, 3.14) },
            { json: "labelFont", js: "labelFont", typ: u(undefined, "") },
            { json: "labelFontSize", js: "labelFontSize", typ: u(undefined, 3.14) },
            { json: "labelFontWeight", js: "labelFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "labelLimit", js: "labelLimit", typ: u(undefined, 3.14) },
            { json: "labelOpacity", js: "labelOpacity", typ: u(undefined, 3.14) },
            { json: "labelOverlap", js: "labelOverlap", typ: u(undefined, u(true, r("LabelOverlapEnum"))) },
            { json: "labelPadding", js: "labelPadding", typ: u(undefined, 3.14) },
            { json: "labels", js: "labels", typ: u(undefined, true) },
            { json: "maxExtent", js: "maxExtent", typ: u(undefined, 3.14) },
            { json: "minExtent", js: "minExtent", typ: u(undefined, 3.14) },
            { json: "shortTimeLabels", js: "shortTimeLabels", typ: u(undefined, true) },
            { json: "tickColor", js: "tickColor", typ: u(undefined, "") },
            { json: "tickExtra", js: "tickExtra", typ: u(undefined, true) },
            { json: "tickOffset", js: "tickOffset", typ: u(undefined, 3.14) },
            { json: "tickOpacity", js: "tickOpacity", typ: u(undefined, 3.14) },
            { json: "tickRound", js: "tickRound", typ: u(undefined, true) },
            { json: "ticks", js: "ticks", typ: u(undefined, true) },
            { json: "tickSize", js: "tickSize", typ: u(undefined, 3.14) },
            { json: "tickWidth", js: "tickWidth", typ: u(undefined, 3.14) },
            { json: "titleAlign", js: "titleAlign", typ: u(undefined, r("Align")) },
            { json: "titleAngle", js: "titleAngle", typ: u(undefined, 3.14) },
            { json: "titleBaseline", js: "titleBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "titleColor", js: "titleColor", typ: u(undefined, "") },
            { json: "titleFont", js: "titleFont", typ: u(undefined, "") },
            { json: "titleFontSize", js: "titleFontSize", typ: u(undefined, 3.14) },
            { json: "titleFontWeight", js: "titleFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "titleLimit", js: "titleLimit", typ: u(undefined, 3.14) },
            { json: "titleOpacity", js: "titleOpacity", typ: u(undefined, 3.14) },
            { json: "titlePadding", js: "titlePadding", typ: u(undefined, 3.14) },
            { json: "titleX", js: "titleX", typ: u(undefined, 3.14) },
            { json: "titleY", js: "titleY", typ: u(undefined, 3.14) },
        ], false),
        "BarConfig": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "binSpacing", js: "binSpacing", typ: u(undefined, 3.14) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "continuousBandSize", js: "continuousBandSize", typ: u(undefined, 3.14) },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "cursor", js: "cursor", typ: u(undefined, r("Cursor")) },
            { json: "dir", js: "dir", typ: u(undefined, r("Dir")) },
            { json: "discreteBandSize", js: "discreteBandSize", typ: u(undefined, 3.14) },
            { json: "dx", js: "dx", typ: u(undefined, 3.14) },
            { json: "dy", js: "dy", typ: u(undefined, 3.14) },
            { json: "ellipsis", js: "ellipsis", typ: u(undefined, "") },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "filled", js: "filled", typ: u(undefined, true) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontStyle", js: "fontStyle", typ: u(undefined, r("FontStyle")) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "href", js: "href", typ: u(undefined, "") },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("Orient")) },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "shape", js: "shape", typ: u(undefined, "") },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeCap", js: "strokeCap", typ: u(undefined, r("StrokeCap")) },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "theta", js: "theta", typ: u(undefined, 3.14) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(r("TooltipContent"), "")) },
        ], false),
        "BoxPlotConfig": o([
            { json: "box", js: "box", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "extent", js: "extent", typ: u(undefined, u(3.14, r("ExtentEnum"))) },
            { json: "median", js: "median", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "outliers", js: "outliers", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "rule", js: "rule", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "ticks", js: "ticks", typ: u(undefined, u(true, r("MarkConfig"))) },
        ], false),
        "MarkConfig": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "cursor", js: "cursor", typ: u(undefined, r("Cursor")) },
            { json: "dir", js: "dir", typ: u(undefined, r("Dir")) },
            { json: "dx", js: "dx", typ: u(undefined, 3.14) },
            { json: "dy", js: "dy", typ: u(undefined, 3.14) },
            { json: "ellipsis", js: "ellipsis", typ: u(undefined, "") },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "filled", js: "filled", typ: u(undefined, true) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontStyle", js: "fontStyle", typ: u(undefined, r("FontStyle")) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "href", js: "href", typ: u(undefined, "") },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("Orient")) },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "shape", js: "shape", typ: u(undefined, "") },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeCap", js: "strokeCap", typ: u(undefined, r("StrokeCap")) },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "theta", js: "theta", typ: u(undefined, 3.14) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(r("TooltipContent"), "")) },
        ], false),
        "ErrorBandConfig": o([
            { json: "band", js: "band", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "borders", js: "borders", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "extent", js: "extent", typ: u(undefined, r("ErrorbandExtent")) },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
        ], false),
        "ErrorBarConfig": o([
            { json: "extent", js: "extent", typ: u(undefined, r("ErrorbandExtent")) },
            { json: "rule", js: "rule", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "ticks", js: "ticks", typ: u(undefined, u(true, r("MarkConfig"))) },
        ], false),
        "HeaderConfig": o([
            { json: "labelAngle", js: "labelAngle", typ: u(undefined, 3.14) },
            { json: "labelColor", js: "labelColor", typ: u(undefined, "") },
            { json: "labelFont", js: "labelFont", typ: u(undefined, "") },
            { json: "labelFontSize", js: "labelFontSize", typ: u(undefined, 3.14) },
            { json: "labelLimit", js: "labelLimit", typ: u(undefined, 3.14) },
            { json: "labelPadding", js: "labelPadding", typ: u(undefined, 3.14) },
            { json: "titleAnchor", js: "titleAnchor", typ: u(undefined, "") },
            { json: "titleAngle", js: "titleAngle", typ: u(undefined, 3.14) },
            { json: "titleBaseline", js: "titleBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "titleColor", js: "titleColor", typ: u(undefined, "") },
            { json: "titleFont", js: "titleFont", typ: u(undefined, "") },
            { json: "titleFontSize", js: "titleFontSize", typ: u(undefined, 3.14) },
            { json: "titleFontWeight", js: "titleFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "titleLimit", js: "titleLimit", typ: u(undefined, 3.14) },
            { json: "titlePadding", js: "titlePadding", typ: u(undefined, 3.14) },
        ], false),
        "LegendConfig": o([
            { json: "clipHeight", js: "clipHeight", typ: u(undefined, 3.14) },
            { json: "columnPadding", js: "columnPadding", typ: u(undefined, 3.14) },
            { json: "columns", js: "columns", typ: u(undefined, 3.14) },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "fillColor", js: "fillColor", typ: u(undefined, "") },
            { json: "gradientDirection", js: "gradientDirection", typ: u(undefined, r("Orient")) },
            { json: "gradientHorizontalMaxLength", js: "gradientHorizontalMaxLength", typ: u(undefined, 3.14) },
            { json: "gradientHorizontalMinLength", js: "gradientHorizontalMinLength", typ: u(undefined, 3.14) },
            { json: "gradientLabelLimit", js: "gradientLabelLimit", typ: u(undefined, 3.14) },
            { json: "gradientLabelOffset", js: "gradientLabelOffset", typ: u(undefined, 3.14) },
            { json: "gradientLength", js: "gradientLength", typ: u(undefined, 3.14) },
            { json: "gradientOpacity", js: "gradientOpacity", typ: u(undefined, 3.14) },
            { json: "gradientStrokeColor", js: "gradientStrokeColor", typ: u(undefined, "") },
            { json: "gradientStrokeWidth", js: "gradientStrokeWidth", typ: u(undefined, 3.14) },
            { json: "gradientThickness", js: "gradientThickness", typ: u(undefined, 3.14) },
            { json: "gradientVerticalMaxLength", js: "gradientVerticalMaxLength", typ: u(undefined, 3.14) },
            { json: "gradientVerticalMinLength", js: "gradientVerticalMinLength", typ: u(undefined, 3.14) },
            { json: "gridAlign", js: "gridAlign", typ: u(undefined, r("VGLayoutAlign")) },
            { json: "labelAlign", js: "labelAlign", typ: u(undefined, r("Align")) },
            { json: "labelBaseline", js: "labelBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "labelColor", js: "labelColor", typ: u(undefined, "") },
            { json: "labelFont", js: "labelFont", typ: u(undefined, "") },
            { json: "labelFontSize", js: "labelFontSize", typ: u(undefined, 3.14) },
            { json: "labelFontWeight", js: "labelFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "labelLimit", js: "labelLimit", typ: u(undefined, 3.14) },
            { json: "labelOffset", js: "labelOffset", typ: u(undefined, 3.14) },
            { json: "labelOpacity", js: "labelOpacity", typ: u(undefined, 3.14) },
            { json: "labelOverlap", js: "labelOverlap", typ: u(undefined, u(true, r("LabelOverlapEnum"))) },
            { json: "labelPadding", js: "labelPadding", typ: u(undefined, 3.14) },
            { json: "offset", js: "offset", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("LegendOrient")) },
            { json: "padding", js: "padding", typ: u(undefined, 3.14) },
            { json: "rowPadding", js: "rowPadding", typ: u(undefined, 3.14) },
            { json: "shortTimeLabels", js: "shortTimeLabels", typ: u(undefined, true) },
            { json: "strokeColor", js: "strokeColor", typ: u(undefined, "") },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "symbolBaseFillColor", js: "symbolBaseFillColor", typ: u(undefined, "") },
            { json: "symbolBaseStrokeColor", js: "symbolBaseStrokeColor", typ: u(undefined, "") },
            { json: "symbolDirection", js: "symbolDirection", typ: u(undefined, r("Orient")) },
            { json: "symbolFillColor", js: "symbolFillColor", typ: u(undefined, "") },
            { json: "symbolOffset", js: "symbolOffset", typ: u(undefined, 3.14) },
            { json: "symbolOpacity", js: "symbolOpacity", typ: u(undefined, 3.14) },
            { json: "symbolSize", js: "symbolSize", typ: u(undefined, 3.14) },
            { json: "symbolStrokeColor", js: "symbolStrokeColor", typ: u(undefined, "") },
            { json: "symbolStrokeWidth", js: "symbolStrokeWidth", typ: u(undefined, 3.14) },
            { json: "symbolType", js: "symbolType", typ: u(undefined, "") },
            { json: "titleAlign", js: "titleAlign", typ: u(undefined, r("Align")) },
            { json: "titleBaseline", js: "titleBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "titleColor", js: "titleColor", typ: u(undefined, "") },
            { json: "titleFont", js: "titleFont", typ: u(undefined, "") },
            { json: "titleFontSize", js: "titleFontSize", typ: u(undefined, 3.14) },
            { json: "titleFontWeight", js: "titleFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "titleLimit", js: "titleLimit", typ: u(undefined, 3.14) },
            { json: "titleOpacity", js: "titleOpacity", typ: u(undefined, 3.14) },
            { json: "titlePadding", js: "titlePadding", typ: u(undefined, 3.14) },
        ], false),
        "LineConfig": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "cursor", js: "cursor", typ: u(undefined, r("Cursor")) },
            { json: "dir", js: "dir", typ: u(undefined, r("Dir")) },
            { json: "dx", js: "dx", typ: u(undefined, 3.14) },
            { json: "dy", js: "dy", typ: u(undefined, 3.14) },
            { json: "ellipsis", js: "ellipsis", typ: u(undefined, "") },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "filled", js: "filled", typ: u(undefined, true) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontStyle", js: "fontStyle", typ: u(undefined, r("FontStyle")) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "href", js: "href", typ: u(undefined, "") },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("Orient")) },
            { json: "point", js: "point", typ: u(undefined, u(true, r("OverlayMarkDef"), r("PointEnum"))) },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "shape", js: "shape", typ: u(undefined, "") },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeCap", js: "strokeCap", typ: u(undefined, r("StrokeCap")) },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "theta", js: "theta", typ: u(undefined, 3.14) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(r("TooltipContent"), "")) },
        ], false),
        "PaddingClass": o([
            { json: "bottom", js: "bottom", typ: u(undefined, 3.14) },
            { json: "left", js: "left", typ: u(undefined, 3.14) },
            { json: "right", js: "right", typ: u(undefined, 3.14) },
            { json: "top", js: "top", typ: u(undefined, 3.14) },
        ], false),
        "Projection": o([
            { json: "center", js: "center", typ: u(undefined, a(3.14)) },
            { json: "clipAngle", js: "clipAngle", typ: u(undefined, 3.14) },
            { json: "clipExtent", js: "clipExtent", typ: u(undefined, a(a(3.14))) },
            { json: "coefficient", js: "coefficient", typ: u(undefined, 3.14) },
            { json: "distance", js: "distance", typ: u(undefined, 3.14) },
            { json: "fraction", js: "fraction", typ: u(undefined, 3.14) },
            { json: "lobes", js: "lobes", typ: u(undefined, 3.14) },
            { json: "parallel", js: "parallel", typ: u(undefined, 3.14) },
            { json: "precision", js: "precision", typ: u(undefined, "") },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "ratio", js: "ratio", typ: u(undefined, 3.14) },
            { json: "rotate", js: "rotate", typ: u(undefined, a(3.14)) },
            { json: "spacing", js: "spacing", typ: u(undefined, 3.14) },
            { json: "tilt", js: "tilt", typ: u(undefined, 3.14) },
            { json: "type", js: "type", typ: u(undefined, r("VGProjectionType")) },
        ], false),
        "RangeConfig": o([
            { json: "category", js: "category", typ: u(undefined, u(a(""), r("CategoryVGScheme"))) },
            { json: "diverging", js: "diverging", typ: u(undefined, u(a(""), r("CategoryVGScheme"))) },
            { json: "heatmap", js: "heatmap", typ: u(undefined, u(a(""), r("CategoryVGScheme"))) },
            { json: "ordinal", js: "ordinal", typ: u(undefined, u(a(""), r("CategoryVGScheme"))) },
            { json: "ramp", js: "ramp", typ: u(undefined, u(a(""), r("CategoryVGScheme"))) },
            { json: "symbol", js: "symbol", typ: u(undefined, a("")) },
        ], u(a(u(3.14, "")), r("RangeConfigValueVGScheme"))),
        "CategoryVGScheme": o([
            { json: "count", js: "count", typ: u(undefined, 3.14) },
            { json: "extent", js: "extent", typ: u(undefined, a(3.14)) },
            { json: "scheme", js: "scheme", typ: "" },
        ], false),
        "RangeConfigValueVGScheme": o([
            { json: "count", js: "count", typ: u(undefined, 3.14) },
            { json: "extent", js: "extent", typ: u(undefined, a(3.14)) },
            { json: "scheme", js: "scheme", typ: u(undefined, "") },
            { json: "step", js: "step", typ: u(undefined, 3.14) },
        ], false),
        "ScaleConfig": o([
            { json: "bandPaddingInner", js: "bandPaddingInner", typ: u(undefined, 3.14) },
            { json: "bandPaddingOuter", js: "bandPaddingOuter", typ: u(undefined, 3.14) },
            { json: "clamp", js: "clamp", typ: u(undefined, true) },
            { json: "continuousPadding", js: "continuousPadding", typ: u(undefined, 3.14) },
            { json: "maxBandSize", js: "maxBandSize", typ: u(undefined, 3.14) },
            { json: "maxFontSize", js: "maxFontSize", typ: u(undefined, 3.14) },
            { json: "maxOpacity", js: "maxOpacity", typ: u(undefined, 3.14) },
            { json: "maxSize", js: "maxSize", typ: u(undefined, 3.14) },
            { json: "maxStrokeWidth", js: "maxStrokeWidth", typ: u(undefined, 3.14) },
            { json: "minBandSize", js: "minBandSize", typ: u(undefined, 3.14) },
            { json: "minFontSize", js: "minFontSize", typ: u(undefined, 3.14) },
            { json: "minOpacity", js: "minOpacity", typ: u(undefined, 3.14) },
            { json: "minSize", js: "minSize", typ: u(undefined, 3.14) },
            { json: "minStrokeWidth", js: "minStrokeWidth", typ: u(undefined, 3.14) },
            { json: "pointPadding", js: "pointPadding", typ: u(undefined, 3.14) },
            { json: "quantileCount", js: "quantileCount", typ: u(undefined, 3.14) },
            { json: "quantizeCount", js: "quantizeCount", typ: u(undefined, 3.14) },
            { json: "rangeStep", js: "rangeStep", typ: u(undefined, u(3.14, null)) },
            { json: "round", js: "round", typ: u(undefined, true) },
            { json: "textXRangeStep", js: "textXRangeStep", typ: u(undefined, 3.14) },
            { json: "useUnaggregatedDomain", js: "useUnaggregatedDomain", typ: u(undefined, true) },
        ], false),
        "SelectionConfig": o([
            { json: "interval", js: "interval", typ: u(undefined, r("IntervalSelectionConfig")) },
            { json: "multi", js: "multi", typ: u(undefined, r("MultiSelectionConfig")) },
            { json: "single", js: "single", typ: u(undefined, r("SingleSelectionConfig")) },
        ], false),
        "IntervalSelectionConfig": o([
            { json: "bind", js: "bind", typ: u(undefined, r("BindEnum")) },
            { json: "empty", js: "empty", typ: u(undefined, r("Empty")) },
            { json: "encodings", js: "encodings", typ: u(undefined, a(r("SingleDefChannel"))) },
            { json: "fields", js: "fields", typ: u(undefined, a("")) },
            { json: "mark", js: "mark", typ: u(undefined, r("BrushConfig")) },
            { json: "on", js: "on", typ: u(undefined, "any") },
            { json: "resolve", js: "resolve", typ: u(undefined, r("SelectionResolution")) },
            { json: "translate", js: "translate", typ: u(undefined, u(true, "")) },
            { json: "zoom", js: "zoom", typ: u(undefined, u(true, "")) },
        ], false),
        "BrushConfig": o([
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
        ], false),
        "MultiSelectionConfig": o([
            { json: "empty", js: "empty", typ: u(undefined, r("Empty")) },
            { json: "encodings", js: "encodings", typ: u(undefined, a(r("SingleDefChannel"))) },
            { json: "fields", js: "fields", typ: u(undefined, a("")) },
            { json: "nearest", js: "nearest", typ: u(undefined, true) },
            { json: "on", js: "on", typ: u(undefined, "any") },
            { json: "resolve", js: "resolve", typ: u(undefined, r("SelectionResolution")) },
            { json: "toggle", js: "toggle", typ: u(undefined, u(true, "")) },
        ], false),
        "SingleSelectionConfig": o([
            { json: "bind", js: "bind", typ: u(undefined, r("SingleBind")) },
            { json: "empty", js: "empty", typ: u(undefined, r("Empty")) },
            { json: "encodings", js: "encodings", typ: u(undefined, a(r("SingleDefChannel"))) },
            { json: "fields", js: "fields", typ: u(undefined, a("")) },
            { json: "nearest", js: "nearest", typ: u(undefined, true) },
            { json: "on", js: "on", typ: u(undefined, "any") },
            { json: "resolve", js: "resolve", typ: u(undefined, r("SelectionResolution")) },
        ], false),
        "SingleBind": o([
            { json: "debounce", js: "debounce", typ: u(undefined, u(r("Binding"), 3.14)) },
            { json: "element", js: "element", typ: u(undefined, u(r("Binding"), "")) },
            { json: "name", js: "name", typ: u(undefined, u(r("Binding"), "")) },
            { json: "type", js: "type", typ: u(undefined, u(r("Binding"), "")) },
            { json: "input", js: "input", typ: u(undefined, u(r("Binding"), r("InputEnum"))) },
            { json: "options", js: "options", typ: u(undefined, u(a("any"), r("Binding"))) },
            { json: "max", js: "max", typ: u(undefined, u(r("Binding"), 3.14)) },
            { json: "min", js: "min", typ: u(undefined, u(r("Binding"), 3.14)) },
            { json: "step", js: "step", typ: u(undefined, u(r("Binding"), 3.14)) },
        ], r("Binding")),
        "Binding": o([
            { json: "debounce", js: "debounce", typ: u(undefined, 3.14) },
            { json: "element", js: "element", typ: u(undefined, "") },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "type", js: "type", typ: u(undefined, "") },
            { json: "input", js: "input", typ: u(undefined, r("InputEnum")) },
            { json: "options", js: "options", typ: u(undefined, a("any")) },
            { json: "max", js: "max", typ: u(undefined, 3.14) },
            { json: "min", js: "min", typ: u(undefined, 3.14) },
            { json: "step", js: "step", typ: u(undefined, 3.14) },
        ], false),
        "VGMarkConfig": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "cursor", js: "cursor", typ: u(undefined, r("Cursor")) },
            { json: "dir", js: "dir", typ: u(undefined, r("Dir")) },
            { json: "dx", js: "dx", typ: u(undefined, 3.14) },
            { json: "dy", js: "dy", typ: u(undefined, 3.14) },
            { json: "ellipsis", js: "ellipsis", typ: u(undefined, "") },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontStyle", js: "fontStyle", typ: u(undefined, r("FontStyle")) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "href", js: "href", typ: u(undefined, "") },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("Orient")) },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "shape", js: "shape", typ: u(undefined, "") },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeCap", js: "strokeCap", typ: u(undefined, r("StrokeCap")) },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "theta", js: "theta", typ: u(undefined, 3.14) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, "any") },
        ], false),
        "TextConfig": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "cursor", js: "cursor", typ: u(undefined, r("Cursor")) },
            { json: "dir", js: "dir", typ: u(undefined, r("Dir")) },
            { json: "dx", js: "dx", typ: u(undefined, 3.14) },
            { json: "dy", js: "dy", typ: u(undefined, 3.14) },
            { json: "ellipsis", js: "ellipsis", typ: u(undefined, "") },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "filled", js: "filled", typ: u(undefined, true) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontStyle", js: "fontStyle", typ: u(undefined, r("FontStyle")) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "href", js: "href", typ: u(undefined, "") },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("Orient")) },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "shape", js: "shape", typ: u(undefined, "") },
            { json: "shortTimeLabels", js: "shortTimeLabels", typ: u(undefined, true) },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeCap", js: "strokeCap", typ: u(undefined, r("StrokeCap")) },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "theta", js: "theta", typ: u(undefined, 3.14) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(r("TooltipContent"), "")) },
        ], false),
        "TickConfig": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "bandSize", js: "bandSize", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "cursor", js: "cursor", typ: u(undefined, r("Cursor")) },
            { json: "dir", js: "dir", typ: u(undefined, r("Dir")) },
            { json: "dx", js: "dx", typ: u(undefined, 3.14) },
            { json: "dy", js: "dy", typ: u(undefined, 3.14) },
            { json: "ellipsis", js: "ellipsis", typ: u(undefined, "") },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "filled", js: "filled", typ: u(undefined, true) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontStyle", js: "fontStyle", typ: u(undefined, r("FontStyle")) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "href", js: "href", typ: u(undefined, "") },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("Orient")) },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "shape", js: "shape", typ: u(undefined, "") },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeCap", js: "strokeCap", typ: u(undefined, r("StrokeCap")) },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "theta", js: "theta", typ: u(undefined, 3.14) },
            { json: "thickness", js: "thickness", typ: u(undefined, 3.14) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(r("TooltipContent"), "")) },
        ], false),
        "VGTitleConfig": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "anchor", js: "anchor", typ: u(undefined, r("TitleAnchor")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "frame", js: "frame", typ: u(undefined, r("TitleFrame")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "offset", js: "offset", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("TitleOrient")) },
        ], false),
        "ViewConfig": o([
            { json: "clip", js: "clip", typ: u(undefined, true) },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "height", js: "height", typ: u(undefined, 3.14) },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "width", js: "width", typ: u(undefined, 3.14) },
        ], false),
        "Data": o([
            { json: "format", js: "format", typ: u(undefined, r("DataFormat")) },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "url", js: "url", typ: u(undefined, "") },
            { json: "values", js: "values", typ: u(undefined, u(a(u(true, 3.14, m("any"), "")), m("any"), "")) },
        ], false),
        "DataFormat": o([
            { json: "parse", js: "parse", typ: u(undefined, u(m(u(null, "")), null)) },
            { json: "type", js: "type", typ: u(undefined, r("DataFormatType")) },
            { json: "delimiter", js: "delimiter", typ: u(undefined, "") },
            { json: "property", js: "property", typ: u(undefined, "") },
            { json: "feature", js: "feature", typ: u(undefined, "") },
            { json: "mesh", js: "mesh", typ: u(undefined, "") },
        ], false),
        "Encoding": o([
            { json: "color", js: "color", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "column", js: "column", typ: u(undefined, r("FacetFieldDef")) },
            { json: "detail", js: "detail", typ: u(undefined, u(a(r("FieldDef")), r("FieldDef"))) },
            { json: "fill", js: "fill", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "href", js: "href", typ: u(undefined, r("ValueDefWithCondition")) },
            { json: "key", js: "key", typ: u(undefined, r("FieldDef")) },
            { json: "latitude", js: "latitude", typ: u(undefined, r("FieldDef")) },
            { json: "latitude2", js: "latitude2", typ: u(undefined, r("FieldDef")) },
            { json: "longitude", js: "longitude", typ: u(undefined, r("FieldDef")) },
            { json: "longitude2", js: "longitude2", typ: u(undefined, r("FieldDef")) },
            { json: "opacity", js: "opacity", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "order", js: "order", typ: u(undefined, u(a(r("OrderFieldDef")), r("OrderFieldDefClass"))) },
            { json: "row", js: "row", typ: u(undefined, r("FacetFieldDef")) },
            { json: "shape", js: "shape", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "size", js: "size", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "stroke", js: "stroke", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "text", js: "text", typ: u(undefined, r("TextValueDefWithCondition")) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(a(r("TextFieldDef")), r("TextFieldDefWithCondition"))) },
            { json: "x", js: "x", typ: u(undefined, r("XClass")) },
            { json: "x2", js: "x2", typ: u(undefined, r("X2Class")) },
            { json: "xError", js: "xError", typ: u(undefined, r("X2Class")) },
            { json: "xError2", js: "xError2", typ: u(undefined, r("X2Class")) },
            { json: "y", js: "y", typ: u(undefined, r("XClass")) },
            { json: "y2", js: "y2", typ: u(undefined, r("X2Class")) },
            { json: "yError", js: "yError", typ: u(undefined, r("X2Class")) },
            { json: "yError2", js: "yError2", typ: u(undefined, r("X2Class")) },
        ], false),
        "MarkPropValueDefWithCondition": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "condition", js: "condition", typ: u(undefined, u(a(r("ConditionalValueDef")), r("ConditionalPredicateMarkPropFieldDefClass"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "legend", js: "legend", typ: u(undefined, u(r("Legend"), null)) },
            { json: "scale", js: "scale", typ: u(undefined, u(r("Scale"), null)) },
            { json: "sort", js: "sort", typ: u(undefined, u(a(u(true, r("DateTime"), 3.14, "")), r("EncodingSortField"), r("VGComparatorOrder"), null)) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
        ], false),
        "BinParams": o([
            { json: "anchor", js: "anchor", typ: u(undefined, 3.14) },
            { json: "base", js: "base", typ: u(undefined, 3.14) },
            { json: "divide", js: "divide", typ: u(undefined, a(3.14)) },
            { json: "extent", js: "extent", typ: u(undefined, a(3.14)) },
            { json: "maxbins", js: "maxbins", typ: u(undefined, 3.14) },
            { json: "minstep", js: "minstep", typ: u(undefined, 3.14) },
            { json: "nice", js: "nice", typ: u(undefined, true) },
            { json: "step", js: "step", typ: u(undefined, 3.14) },
            { json: "steps", js: "steps", typ: u(undefined, a(3.14)) },
        ], false),
        "ConditionalValueDef": o([
            { json: "test", js: "test", typ: u(undefined, u(r("Predicate"), "")) },
            { json: "value", js: "value", typ: u(true, 3.14, null, "") },
            { json: "selection", js: "selection", typ: u(undefined, u(r("Selection"), "")) },
        ], false),
        "Selection": o([
            { json: "not", js: "not", typ: u(undefined, u(r("Selection"), "")) },
            { json: "and", js: "and", typ: u(undefined, a(u(r("Selection"), ""))) },
            { json: "or", js: "or", typ: u(undefined, a(u(r("Selection"), ""))) },
        ], false),
        "Predicate": o([
            { json: "not", js: "not", typ: u(undefined, u(r("Predicate"), "")) },
            { json: "and", js: "and", typ: u(undefined, a(u(r("Predicate"), ""))) },
            { json: "or", js: "or", typ: u(undefined, a(u(r("Predicate"), ""))) },
            { json: "equal", js: "equal", typ: u(undefined, u(true, r("DateTime"), 3.14, "")) },
            { json: "field", js: "field", typ: u(undefined, "") },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "range", js: "range", typ: u(undefined, a(u(r("DateTime"), 3.14, null))) },
            { json: "oneOf", js: "oneOf", typ: u(undefined, a(u(true, r("DateTime"), 3.14, ""))) },
            { json: "lt", js: "lt", typ: u(undefined, u(r("DateTime"), 3.14, "")) },
            { json: "gt", js: "gt", typ: u(undefined, u(r("DateTime"), 3.14, "")) },
            { json: "lte", js: "lte", typ: u(undefined, u(r("DateTime"), 3.14, "")) },
            { json: "gte", js: "gte", typ: u(undefined, u(r("DateTime"), 3.14, "")) },
            { json: "valid", js: "valid", typ: u(undefined, true) },
            { json: "selection", js: "selection", typ: u(undefined, u(r("Selection"), "")) },
        ], false),
        "DateTime": o([
            { json: "date", js: "date", typ: u(undefined, 3.14) },
            { json: "day", js: "day", typ: u(undefined, u(3.14, "")) },
            { json: "hours", js: "hours", typ: u(undefined, 3.14) },
            { json: "milliseconds", js: "milliseconds", typ: u(undefined, 3.14) },
            { json: "minutes", js: "minutes", typ: u(undefined, 3.14) },
            { json: "month", js: "month", typ: u(undefined, u(3.14, "")) },
            { json: "quarter", js: "quarter", typ: u(undefined, 3.14) },
            { json: "seconds", js: "seconds", typ: u(undefined, 3.14) },
            { json: "utc", js: "utc", typ: u(undefined, true) },
            { json: "year", js: "year", typ: u(undefined, 3.14) },
        ], false),
        "ConditionalPredicateMarkPropFieldDefClass": o([
            { json: "test", js: "test", typ: u(undefined, u(r("Predicate"), "")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
            { json: "selection", js: "selection", typ: u(undefined, u(r("Selection"), "")) },
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "legend", js: "legend", typ: u(undefined, u(r("Legend"), null)) },
            { json: "scale", js: "scale", typ: u(undefined, u(r("Scale"), null)) },
            { json: "sort", js: "sort", typ: u(undefined, u(a(u(true, r("DateTime"), 3.14, "")), r("EncodingSortField"), r("VGComparatorOrder"), null)) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
        ], false),
        "RepeatRef": o([
            { json: "repeat", js: "repeat", typ: r("RepeatEnum") },
        ], false),
        "Legend": o([
            { json: "clipHeight", js: "clipHeight", typ: u(undefined, 3.14) },
            { json: "columnPadding", js: "columnPadding", typ: u(undefined, 3.14) },
            { json: "columns", js: "columns", typ: u(undefined, 3.14) },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "direction", js: "direction", typ: u(undefined, r("Orient")) },
            { json: "fillColor", js: "fillColor", typ: u(undefined, "") },
            { json: "format", js: "format", typ: u(undefined, "") },
            { json: "gradientLength", js: "gradientLength", typ: u(undefined, 3.14) },
            { json: "gradientOpacity", js: "gradientOpacity", typ: u(undefined, 3.14) },
            { json: "gradientStrokeColor", js: "gradientStrokeColor", typ: u(undefined, "") },
            { json: "gradientStrokeWidth", js: "gradientStrokeWidth", typ: u(undefined, 3.14) },
            { json: "gradientThickness", js: "gradientThickness", typ: u(undefined, 3.14) },
            { json: "gridAlign", js: "gridAlign", typ: u(undefined, r("VGLayoutAlign")) },
            { json: "labelAlign", js: "labelAlign", typ: u(undefined, r("Align")) },
            { json: "labelBaseline", js: "labelBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "labelColor", js: "labelColor", typ: u(undefined, "") },
            { json: "labelFont", js: "labelFont", typ: u(undefined, "") },
            { json: "labelFontSize", js: "labelFontSize", typ: u(undefined, 3.14) },
            { json: "labelFontWeight", js: "labelFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "labelLimit", js: "labelLimit", typ: u(undefined, 3.14) },
            { json: "labelOffset", js: "labelOffset", typ: u(undefined, 3.14) },
            { json: "labelOpacity", js: "labelOpacity", typ: u(undefined, 3.14) },
            { json: "labelOverlap", js: "labelOverlap", typ: u(undefined, u(true, r("LabelOverlapEnum"))) },
            { json: "labelPadding", js: "labelPadding", typ: u(undefined, 3.14) },
            { json: "offset", js: "offset", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("LegendOrient")) },
            { json: "padding", js: "padding", typ: u(undefined, 3.14) },
            { json: "rowPadding", js: "rowPadding", typ: u(undefined, 3.14) },
            { json: "strokeColor", js: "strokeColor", typ: u(undefined, "") },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "symbolFillColor", js: "symbolFillColor", typ: u(undefined, "") },
            { json: "symbolOffset", js: "symbolOffset", typ: u(undefined, 3.14) },
            { json: "symbolOpacity", js: "symbolOpacity", typ: u(undefined, 3.14) },
            { json: "symbolSize", js: "symbolSize", typ: u(undefined, 3.14) },
            { json: "symbolStrokeColor", js: "symbolStrokeColor", typ: u(undefined, "") },
            { json: "symbolStrokeWidth", js: "symbolStrokeWidth", typ: u(undefined, 3.14) },
            { json: "symbolType", js: "symbolType", typ: u(undefined, "") },
            { json: "tickCount", js: "tickCount", typ: u(undefined, 3.14) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "titleAlign", js: "titleAlign", typ: u(undefined, r("Align")) },
            { json: "titleBaseline", js: "titleBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "titleColor", js: "titleColor", typ: u(undefined, "") },
            { json: "titleFont", js: "titleFont", typ: u(undefined, "") },
            { json: "titleFontSize", js: "titleFontSize", typ: u(undefined, 3.14) },
            { json: "titleFontWeight", js: "titleFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "titleLimit", js: "titleLimit", typ: u(undefined, 3.14) },
            { json: "titleOpacity", js: "titleOpacity", typ: u(undefined, 3.14) },
            { json: "titlePadding", js: "titlePadding", typ: u(undefined, 3.14) },
            { json: "type", js: "type", typ: u(undefined, r("LegendType")) },
            { json: "values", js: "values", typ: u(undefined, a(u(true, r("DateTime"), 3.14, ""))) },
            { json: "zindex", js: "zindex", typ: u(undefined, 3.14) },
        ], false),
        "Scale": o([
            { json: "base", js: "base", typ: u(undefined, 3.14) },
            { json: "clamp", js: "clamp", typ: u(undefined, true) },
            { json: "domain", js: "domain", typ: u(undefined, u(a(u(true, r("DateTime"), 3.14, "")), r("DomainClass"), r("Domain"))) },
            { json: "exponent", js: "exponent", typ: u(undefined, 3.14) },
            { json: "interpolate", js: "interpolate", typ: u(undefined, u(r("ScaleInterpolateParams"), r("ScaleInterpolate"))) },
            { json: "nice", js: "nice", typ: u(undefined, u(true, r("NiceClass"), 3.14, r("NiceTime"))) },
            { json: "padding", js: "padding", typ: u(undefined, 3.14) },
            { json: "paddingInner", js: "paddingInner", typ: u(undefined, 3.14) },
            { json: "paddingOuter", js: "paddingOuter", typ: u(undefined, 3.14) },
            { json: "range", js: "range", typ: u(undefined, u(a(u(3.14, "")), "")) },
            { json: "rangeStep", js: "rangeStep", typ: u(undefined, u(3.14, null)) },
            { json: "round", js: "round", typ: u(undefined, true) },
            { json: "scheme", js: "scheme", typ: u(undefined, u(r("SchemeParams"), "")) },
            { json: "type", js: "type", typ: u(undefined, r("ScaleType")) },
            { json: "zero", js: "zero", typ: u(undefined, true) },
        ], false),
        "DomainClass": o([
            { json: "field", js: "field", typ: u(undefined, "") },
            { json: "selection", js: "selection", typ: "" },
            { json: "encoding", js: "encoding", typ: u(undefined, "") },
        ], false),
        "ScaleInterpolateParams": o([
            { json: "gamma", js: "gamma", typ: u(undefined, 3.14) },
            { json: "type", js: "type", typ: r("ScaleInterpolateParamsType") },
        ], false),
        "NiceClass": o([
            { json: "interval", js: "interval", typ: "" },
            { json: "step", js: "step", typ: 3.14 },
        ], false),
        "SchemeParams": o([
            { json: "count", js: "count", typ: u(undefined, 3.14) },
            { json: "extent", js: "extent", typ: u(undefined, a(3.14)) },
            { json: "name", js: "name", typ: "" },
        ], false),
        "EncodingSortField": o([
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "op", js: "op", typ: r("AggregateOp") },
            { json: "order", js: "order", typ: u(undefined, u(r("VGComparatorOrder"), null)) },
        ], false),
        "FacetFieldDef": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "header", js: "header", typ: u(undefined, r("Header")) },
            { json: "sort", js: "sort", typ: u(undefined, u(a(u(true, r("DateTime"), 3.14, "")), r("EncodingSortField"), r("VGComparatorOrder"), null)) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: r("Type") },
        ], false),
        "Header": o([
            { json: "format", js: "format", typ: u(undefined, "") },
            { json: "labelAngle", js: "labelAngle", typ: u(undefined, 3.14) },
            { json: "labelColor", js: "labelColor", typ: u(undefined, "") },
            { json: "labelFont", js: "labelFont", typ: u(undefined, "") },
            { json: "labelFontSize", js: "labelFontSize", typ: u(undefined, 3.14) },
            { json: "labelLimit", js: "labelLimit", typ: u(undefined, 3.14) },
            { json: "labelPadding", js: "labelPadding", typ: u(undefined, 3.14) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "titleAnchor", js: "titleAnchor", typ: u(undefined, "") },
            { json: "titleAngle", js: "titleAngle", typ: u(undefined, 3.14) },
            { json: "titleBaseline", js: "titleBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "titleColor", js: "titleColor", typ: u(undefined, "") },
            { json: "titleFont", js: "titleFont", typ: u(undefined, "") },
            { json: "titleFontSize", js: "titleFontSize", typ: u(undefined, 3.14) },
            { json: "titleFontWeight", js: "titleFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "titleLimit", js: "titleLimit", typ: u(undefined, 3.14) },
            { json: "titlePadding", js: "titlePadding", typ: u(undefined, 3.14) },
        ], false),
        "FieldDef": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: r("Type") },
        ], false),
        "ValueDefWithCondition": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "condition", js: "condition", typ: u(undefined, u(a(r("ConditionalValueDef")), r("ConditionalPredicateFieldDefClass"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
        ], false),
        "ConditionalPredicateFieldDefClass": o([
            { json: "test", js: "test", typ: u(undefined, u(r("Predicate"), "")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
            { json: "selection", js: "selection", typ: u(undefined, u(r("Selection"), "")) },
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
        ], false),
        "OrderFieldDef": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "sort", js: "sort", typ: u(undefined, u(r("VGComparatorOrder"), null)) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: r("Type") },
        ], false),
        "OrderFieldDefClass": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "sort", js: "sort", typ: u(undefined, u(r("VGComparatorOrder"), null)) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
        ], false),
        "TextValueDefWithCondition": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "condition", js: "condition", typ: u(undefined, u(a(r("ConditionalValueDef")), r("ConditionalPredicateTextFieldDefClass"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "format", js: "format", typ: u(undefined, "") },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
        ], false),
        "ConditionalPredicateTextFieldDefClass": o([
            { json: "test", js: "test", typ: u(undefined, u(r("Predicate"), "")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
            { json: "selection", js: "selection", typ: u(undefined, u(r("Selection"), "")) },
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "format", js: "format", typ: u(undefined, "") },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
        ], false),
        "TextFieldDef": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "format", js: "format", typ: u(undefined, "") },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: r("Type") },
        ], false),
        "TextFieldDefWithCondition": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "condition", js: "condition", typ: u(undefined, u(a(r("ConditionalValueDef")), r("ConditionalPredicateTextFieldDefClass"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "format", js: "format", typ: u(undefined, "") },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
        ], false),
        "XClass": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "axis", js: "axis", typ: u(undefined, u(r("Axis"), null)) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "impute", js: "impute", typ: u(undefined, r("ImputeParams")) },
            { json: "scale", js: "scale", typ: u(undefined, u(r("Scale"), null)) },
            { json: "sort", js: "sort", typ: u(undefined, u(a(u(true, r("DateTime"), 3.14, "")), r("EncodingSortField"), r("VGComparatorOrder"), null)) },
            { json: "stack", js: "stack", typ: u(undefined, u(r("StackOffset"), null)) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
        ], false),
        "Axis": o([
            { json: "bandPosition", js: "bandPosition", typ: u(undefined, 3.14) },
            { json: "domain", js: "domain", typ: u(undefined, true) },
            { json: "domainColor", js: "domainColor", typ: u(undefined, "") },
            { json: "domainOpacity", js: "domainOpacity", typ: u(undefined, 3.14) },
            { json: "domainWidth", js: "domainWidth", typ: u(undefined, 3.14) },
            { json: "format", js: "format", typ: u(undefined, "") },
            { json: "grid", js: "grid", typ: u(undefined, true) },
            { json: "gridColor", js: "gridColor", typ: u(undefined, "") },
            { json: "gridDash", js: "gridDash", typ: u(undefined, a(3.14)) },
            { json: "gridOpacity", js: "gridOpacity", typ: u(undefined, 3.14) },
            { json: "gridWidth", js: "gridWidth", typ: u(undefined, 3.14) },
            { json: "labelAlign", js: "labelAlign", typ: u(undefined, r("Align")) },
            { json: "labelAngle", js: "labelAngle", typ: u(undefined, 3.14) },
            { json: "labelBaseline", js: "labelBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "labelBound", js: "labelBound", typ: u(undefined, u(true, 3.14)) },
            { json: "labelColor", js: "labelColor", typ: u(undefined, "") },
            { json: "labelFlush", js: "labelFlush", typ: u(undefined, u(true, 3.14)) },
            { json: "labelFlushOffset", js: "labelFlushOffset", typ: u(undefined, 3.14) },
            { json: "labelFont", js: "labelFont", typ: u(undefined, "") },
            { json: "labelFontSize", js: "labelFontSize", typ: u(undefined, 3.14) },
            { json: "labelFontWeight", js: "labelFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "labelLimit", js: "labelLimit", typ: u(undefined, 3.14) },
            { json: "labelOpacity", js: "labelOpacity", typ: u(undefined, 3.14) },
            { json: "labelOverlap", js: "labelOverlap", typ: u(undefined, u(true, r("LabelOverlapEnum"))) },
            { json: "labelPadding", js: "labelPadding", typ: u(undefined, 3.14) },
            { json: "labels", js: "labels", typ: u(undefined, true) },
            { json: "maxExtent", js: "maxExtent", typ: u(undefined, 3.14) },
            { json: "minExtent", js: "minExtent", typ: u(undefined, 3.14) },
            { json: "offset", js: "offset", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("AxisOrient")) },
            { json: "position", js: "position", typ: u(undefined, 3.14) },
            { json: "tickColor", js: "tickColor", typ: u(undefined, "") },
            { json: "tickCount", js: "tickCount", typ: u(undefined, 3.14) },
            { json: "tickExtra", js: "tickExtra", typ: u(undefined, true) },
            { json: "tickOffset", js: "tickOffset", typ: u(undefined, 3.14) },
            { json: "tickOpacity", js: "tickOpacity", typ: u(undefined, 3.14) },
            { json: "tickRound", js: "tickRound", typ: u(undefined, true) },
            { json: "ticks", js: "ticks", typ: u(undefined, true) },
            { json: "tickSize", js: "tickSize", typ: u(undefined, 3.14) },
            { json: "tickStep", js: "tickStep", typ: u(undefined, 3.14) },
            { json: "tickWidth", js: "tickWidth", typ: u(undefined, 3.14) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "titleAlign", js: "titleAlign", typ: u(undefined, r("Align")) },
            { json: "titleAngle", js: "titleAngle", typ: u(undefined, 3.14) },
            { json: "titleBaseline", js: "titleBaseline", typ: u(undefined, r("TextBaseline")) },
            { json: "titleColor", js: "titleColor", typ: u(undefined, "") },
            { json: "titleFont", js: "titleFont", typ: u(undefined, "") },
            { json: "titleFontSize", js: "titleFontSize", typ: u(undefined, 3.14) },
            { json: "titleFontWeight", js: "titleFontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "titleLimit", js: "titleLimit", typ: u(undefined, 3.14) },
            { json: "titleOpacity", js: "titleOpacity", typ: u(undefined, 3.14) },
            { json: "titlePadding", js: "titlePadding", typ: u(undefined, 3.14) },
            { json: "titleX", js: "titleX", typ: u(undefined, 3.14) },
            { json: "titleY", js: "titleY", typ: u(undefined, 3.14) },
            { json: "values", js: "values", typ: u(undefined, a(u(true, r("DateTime"), 3.14, ""))) },
            { json: "zindex", js: "zindex", typ: u(undefined, 3.14) },
        ], false),
        "ImputeParams": o([
            { json: "frame", js: "frame", typ: u(undefined, a(u(3.14, null))) },
            { json: "keyvals", js: "keyvals", typ: u(undefined, u(a("any"), r("ImputeSequence"))) },
            { json: "method", js: "method", typ: u(undefined, r("ImputeMethod")) },
            { json: "value", js: "value", typ: u(undefined, "any") },
        ], false),
        "ImputeSequence": o([
            { json: "start", js: "start", typ: u(undefined, 3.14) },
            { json: "step", js: "step", typ: u(undefined, 3.14) },
            { json: "stop", js: "stop", typ: 3.14 },
        ], false),
        "X2Class": o([
            { json: "aggregate", js: "aggregate", typ: u(undefined, r("AggregateOp")) },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"), r("BinEnum"))) },
            { json: "field", js: "field", typ: u(undefined, u(r("RepeatRef"), "")) },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "title", js: "title", typ: u(undefined, u(null, "")) },
            { json: "type", js: "type", typ: u(undefined, r("Type")) },
            { json: "value", js: "value", typ: u(undefined, u(true, 3.14, null, "")) },
        ], false),
        "FacetMapping": o([
            { json: "column", js: "column", typ: u(undefined, r("FacetFieldDef")) },
            { json: "row", js: "row", typ: u(undefined, r("FacetFieldDef")) },
        ], false),
        "SpecClass": o([
            { json: "data", js: "data", typ: u(undefined, r("Data")) },
            { json: "description", js: "description", typ: u(undefined, "") },
            { json: "encoding", js: "encoding", typ: u(undefined, r("Encoding")) },
            { json: "height", js: "height", typ: u(undefined, 3.14) },
            { json: "layer", js: "layer", typ: u(undefined, a(r("LayerSpec"))) },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "projection", js: "projection", typ: u(undefined, r("Projection")) },
            { json: "resolve", js: "resolve", typ: u(undefined, r("Resolve")) },
            { json: "title", js: "title", typ: u(undefined, u(r("TitleParams"), "")) },
            { json: "transform", js: "transform", typ: u(undefined, a(r("Transform"))) },
            { json: "width", js: "width", typ: u(undefined, 3.14) },
            { json: "mark", js: "mark", typ: u(undefined, u(r("BoxPlotDefClass"), r("BoxPlot"))) },
            { json: "selection", js: "selection", typ: u(undefined, m(r("SelectionDef"))) },
            { json: "align", js: "align", typ: u(undefined, u(r("RowColVGLayoutAlign"), r("VGLayoutAlign"))) },
            { json: "bounds", js: "bounds", typ: u(undefined, r("Bounds")) },
            { json: "center", js: "center", typ: u(undefined, u(true, r("RowColBoolean"))) },
            { json: "facet", js: "facet", typ: u(undefined, r("FacetMapping")) },
            { json: "spacing", js: "spacing", typ: u(undefined, u(r("RowColNumber"), 3.14)) },
            { json: "spec", js: "spec", typ: u(undefined, r("SpecClass")) },
            { json: "repeat", js: "repeat", typ: u(undefined, r("Repeat")) },
            { json: "vconcat", js: "vconcat", typ: u(undefined, a(r("SpecElement"))) },
            { json: "hconcat", js: "hconcat", typ: u(undefined, a(r("SpecElement"))) },
        ], false),
        "SpecElement": o([
            { json: "data", js: "data", typ: u(undefined, r("Data")) },
            { json: "description", js: "description", typ: u(undefined, "") },
            { json: "encoding", js: "encoding", typ: u(undefined, r("Encoding")) },
            { json: "height", js: "height", typ: u(undefined, 3.14) },
            { json: "mark", js: "mark", typ: u(undefined, u(r("BoxPlotDefClass"), r("BoxPlot"))) },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "projection", js: "projection", typ: u(undefined, r("Projection")) },
            { json: "selection", js: "selection", typ: u(undefined, m(r("SelectionDef"))) },
            { json: "title", js: "title", typ: u(undefined, u(r("TitleParams"), "")) },
            { json: "transform", js: "transform", typ: u(undefined, a(r("Transform"))) },
            { json: "width", js: "width", typ: u(undefined, 3.14) },
            { json: "layer", js: "layer", typ: u(undefined, a(r("LayerSpec"))) },
            { json: "resolve", js: "resolve", typ: u(undefined, r("Resolve")) },
            { json: "align", js: "align", typ: u(undefined, u(r("RowColVGLayoutAlign"), r("VGLayoutAlign"))) },
            { json: "bounds", js: "bounds", typ: u(undefined, r("Bounds")) },
            { json: "center", js: "center", typ: u(undefined, u(true, r("RowColBoolean"))) },
            { json: "facet", js: "facet", typ: u(undefined, r("FacetMapping")) },
            { json: "spacing", js: "spacing", typ: u(undefined, u(r("RowColNumber"), 3.14)) },
            { json: "spec", js: "spec", typ: u(undefined, r("SpecClass")) },
            { json: "repeat", js: "repeat", typ: u(undefined, r("Repeat")) },
            { json: "vconcat", js: "vconcat", typ: u(undefined, a(r("SpecElement"))) },
            { json: "hconcat", js: "hconcat", typ: u(undefined, a(r("SpecElement"))) },
        ], false),
        "LayerSpec": o([
            { json: "data", js: "data", typ: u(undefined, r("Data")) },
            { json: "description", js: "description", typ: u(undefined, "") },
            { json: "encoding", js: "encoding", typ: u(undefined, r("LayerEncoding")) },
            { json: "height", js: "height", typ: u(undefined, 3.14) },
            { json: "layer", js: "layer", typ: u(undefined, a(r("LayerSpec"))) },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "projection", js: "projection", typ: u(undefined, r("Projection")) },
            { json: "resolve", js: "resolve", typ: u(undefined, r("Resolve")) },
            { json: "title", js: "title", typ: u(undefined, u(r("TitleParams"), "")) },
            { json: "transform", js: "transform", typ: u(undefined, a(r("Transform"))) },
            { json: "width", js: "width", typ: u(undefined, 3.14) },
            { json: "mark", js: "mark", typ: u(undefined, u(r("BoxPlotDefClass"), r("BoxPlot"))) },
            { json: "selection", js: "selection", typ: u(undefined, m(r("SelectionDef"))) },
        ], false),
        "LayerEncoding": o([
            { json: "color", js: "color", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "detail", js: "detail", typ: u(undefined, u(a(r("FieldDef")), r("FieldDef"))) },
            { json: "fill", js: "fill", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "href", js: "href", typ: u(undefined, r("ValueDefWithCondition")) },
            { json: "key", js: "key", typ: u(undefined, r("FieldDef")) },
            { json: "latitude", js: "latitude", typ: u(undefined, r("FieldDef")) },
            { json: "latitude2", js: "latitude2", typ: u(undefined, r("FieldDef")) },
            { json: "longitude", js: "longitude", typ: u(undefined, r("FieldDef")) },
            { json: "longitude2", js: "longitude2", typ: u(undefined, r("FieldDef")) },
            { json: "opacity", js: "opacity", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "order", js: "order", typ: u(undefined, u(a(r("OrderFieldDef")), r("OrderFieldDefClass"))) },
            { json: "shape", js: "shape", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "size", js: "size", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "stroke", js: "stroke", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, r("MarkPropValueDefWithCondition")) },
            { json: "text", js: "text", typ: u(undefined, r("TextValueDefWithCondition")) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(a(r("TextFieldDef")), r("TextFieldDefWithCondition"))) },
            { json: "x", js: "x", typ: u(undefined, r("XClass")) },
            { json: "x2", js: "x2", typ: u(undefined, r("X2Class")) },
            { json: "xError", js: "xError", typ: u(undefined, r("X2Class")) },
            { json: "xError2", js: "xError2", typ: u(undefined, r("X2Class")) },
            { json: "y", js: "y", typ: u(undefined, r("XClass")) },
            { json: "y2", js: "y2", typ: u(undefined, r("X2Class")) },
            { json: "yError", js: "yError", typ: u(undefined, r("X2Class")) },
            { json: "yError2", js: "yError2", typ: u(undefined, r("X2Class")) },
        ], false),
        "BoxPlotDefClass": o([
            { json: "box", js: "box", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "clip", js: "clip", typ: u(undefined, true) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "extent", js: "extent", typ: u(undefined, u(3.14, r("ExtentExtent"))) },
            { json: "median", js: "median", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "opacity", js: "opacity", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("Orient")) },
            { json: "outliers", js: "outliers", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "rule", js: "rule", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "ticks", js: "ticks", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "type", js: "type", typ: r("BoxPlot") },
            { json: "band", js: "band", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "borders", js: "borders", typ: u(undefined, u(true, r("MarkConfig"))) },
            { json: "interpolate", js: "interpolate", typ: u(undefined, r("Interpolate")) },
            { json: "tension", js: "tension", typ: u(undefined, 3.14) },
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "binSpacing", js: "binSpacing", typ: u(undefined, 3.14) },
            { json: "cornerRadius", js: "cornerRadius", typ: u(undefined, 3.14) },
            { json: "cursor", js: "cursor", typ: u(undefined, r("Cursor")) },
            { json: "dir", js: "dir", typ: u(undefined, r("Dir")) },
            { json: "dx", js: "dx", typ: u(undefined, 3.14) },
            { json: "dy", js: "dy", typ: u(undefined, 3.14) },
            { json: "ellipsis", js: "ellipsis", typ: u(undefined, "") },
            { json: "fill", js: "fill", typ: u(undefined, "") },
            { json: "filled", js: "filled", typ: u(undefined, true) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, 3.14) },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontStyle", js: "fontStyle", typ: u(undefined, r("FontStyle")) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "href", js: "href", typ: u(undefined, "") },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "line", js: "line", typ: u(undefined, u(true, r("OverlayMarkDef"))) },
            { json: "point", js: "point", typ: u(undefined, u(true, r("OverlayMarkDef"), r("PointEnum"))) },
            { json: "radius", js: "radius", typ: u(undefined, 3.14) },
            { json: "shape", js: "shape", typ: u(undefined, "") },
            { json: "stroke", js: "stroke", typ: u(undefined, "") },
            { json: "strokeCap", js: "strokeCap", typ: u(undefined, r("StrokeCap")) },
            { json: "strokeDash", js: "strokeDash", typ: u(undefined, a(3.14)) },
            { json: "strokeDashOffset", js: "strokeDashOffset", typ: u(undefined, 3.14) },
            { json: "strokeJoin", js: "strokeJoin", typ: u(undefined, r("StrokeJoin")) },
            { json: "strokeMiterLimit", js: "strokeMiterLimit", typ: u(undefined, 3.14) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, 3.14) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, 3.14) },
            { json: "style", js: "style", typ: u(undefined, u(a(""), "")) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "theta", js: "theta", typ: u(undefined, 3.14) },
            { json: "thickness", js: "thickness", typ: u(undefined, 3.14) },
            { json: "tooltip", js: "tooltip", typ: u(undefined, u(r("TooltipContent"), "")) },
            { json: "x2Offset", js: "x2Offset", typ: u(undefined, 3.14) },
            { json: "xOffset", js: "xOffset", typ: u(undefined, 3.14) },
            { json: "y2Offset", js: "y2Offset", typ: u(undefined, 3.14) },
            { json: "yOffset", js: "yOffset", typ: u(undefined, 3.14) },
        ], false),
        "Resolve": o([
            { json: "axis", js: "axis", typ: u(undefined, r("AxisResolveMap")) },
            { json: "legend", js: "legend", typ: u(undefined, r("LegendResolveMap")) },
            { json: "scale", js: "scale", typ: u(undefined, r("ScaleResolveMap")) },
        ], false),
        "AxisResolveMap": o([
            { json: "x", js: "x", typ: u(undefined, r("ResolveMode")) },
            { json: "y", js: "y", typ: u(undefined, r("ResolveMode")) },
        ], false),
        "LegendResolveMap": o([
            { json: "color", js: "color", typ: u(undefined, r("ResolveMode")) },
            { json: "fill", js: "fill", typ: u(undefined, r("ResolveMode")) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, r("ResolveMode")) },
            { json: "opacity", js: "opacity", typ: u(undefined, r("ResolveMode")) },
            { json: "shape", js: "shape", typ: u(undefined, r("ResolveMode")) },
            { json: "size", js: "size", typ: u(undefined, r("ResolveMode")) },
            { json: "stroke", js: "stroke", typ: u(undefined, r("ResolveMode")) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, r("ResolveMode")) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, r("ResolveMode")) },
        ], false),
        "ScaleResolveMap": o([
            { json: "color", js: "color", typ: u(undefined, r("ResolveMode")) },
            { json: "fill", js: "fill", typ: u(undefined, r("ResolveMode")) },
            { json: "fillOpacity", js: "fillOpacity", typ: u(undefined, r("ResolveMode")) },
            { json: "opacity", js: "opacity", typ: u(undefined, r("ResolveMode")) },
            { json: "shape", js: "shape", typ: u(undefined, r("ResolveMode")) },
            { json: "size", js: "size", typ: u(undefined, r("ResolveMode")) },
            { json: "stroke", js: "stroke", typ: u(undefined, r("ResolveMode")) },
            { json: "strokeOpacity", js: "strokeOpacity", typ: u(undefined, r("ResolveMode")) },
            { json: "strokeWidth", js: "strokeWidth", typ: u(undefined, r("ResolveMode")) },
            { json: "x", js: "x", typ: u(undefined, r("ResolveMode")) },
            { json: "y", js: "y", typ: u(undefined, r("ResolveMode")) },
        ], false),
        "SelectionDef": o([
            { json: "bind", js: "bind", typ: u(undefined, u(r("BindEnum"), r("BindBind"))) },
            { json: "empty", js: "empty", typ: u(undefined, r("Empty")) },
            { json: "encodings", js: "encodings", typ: u(undefined, a(r("SingleDefChannel"))) },
            { json: "fields", js: "fields", typ: u(undefined, a("")) },
            { json: "nearest", js: "nearest", typ: u(undefined, true) },
            { json: "on", js: "on", typ: u(undefined, "any") },
            { json: "resolve", js: "resolve", typ: u(undefined, r("SelectionResolution")) },
            { json: "type", js: "type", typ: r("SelectionDefType") },
            { json: "toggle", js: "toggle", typ: u(undefined, u(true, "")) },
            { json: "mark", js: "mark", typ: u(undefined, r("BrushConfig")) },
            { json: "translate", js: "translate", typ: u(undefined, u(true, "")) },
            { json: "zoom", js: "zoom", typ: u(undefined, u(true, "")) },
        ], false),
        "BindBind": o([
            { json: "debounce", js: "debounce", typ: u(undefined, u(r("Binding"), 3.14)) },
            { json: "element", js: "element", typ: u(undefined, u(r("Binding"), "")) },
            { json: "name", js: "name", typ: u(undefined, u(r("Binding"), "")) },
            { json: "type", js: "type", typ: u(undefined, u(r("Binding"), "")) },
            { json: "input", js: "input", typ: u(undefined, u(r("Binding"), r("InputEnum"))) },
            { json: "options", js: "options", typ: u(undefined, u(a("any"), r("Binding"))) },
            { json: "max", js: "max", typ: u(undefined, u(r("Binding"), 3.14)) },
            { json: "min", js: "min", typ: u(undefined, u(r("Binding"), 3.14)) },
            { json: "step", js: "step", typ: u(undefined, u(r("Binding"), 3.14)) },
        ], r("Binding")),
        "TitleParams": o([
            { json: "align", js: "align", typ: u(undefined, r("Align")) },
            { json: "anchor", js: "anchor", typ: u(undefined, r("TitleAnchor")) },
            { json: "angle", js: "angle", typ: u(undefined, 3.14) },
            { json: "baseline", js: "baseline", typ: u(undefined, r("TextBaseline")) },
            { json: "color", js: "color", typ: u(undefined, "") },
            { json: "font", js: "font", typ: u(undefined, "") },
            { json: "fontSize", js: "fontSize", typ: u(undefined, 3.14) },
            { json: "fontWeight", js: "fontWeight", typ: u(undefined, u(3.14, r("FontWeightEnum"))) },
            { json: "frame", js: "frame", typ: u(undefined, r("TitleFrame")) },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "offset", js: "offset", typ: u(undefined, 3.14) },
            { json: "orient", js: "orient", typ: u(undefined, r("TitleOrient")) },
            { json: "style", js: "style", typ: u(undefined, u(a(""), "")) },
            { json: "text", js: "text", typ: "" },
            { json: "zindex", js: "zindex", typ: u(undefined, 3.14) },
        ], false),
        "Transform": o([
            { json: "filter", js: "filter", typ: u(undefined, u(r("Predicate"), "")) },
            { json: "as", js: "as", typ: u(undefined, u(a(""), "")) },
            { json: "calculate", js: "calculate", typ: u(undefined, "") },
            { json: "default", js: "default", typ: u(undefined, "") },
            { json: "from", js: "from", typ: u(undefined, r("LookupData")) },
            { json: "lookup", js: "lookup", typ: u(undefined, "") },
            { json: "bin", js: "bin", typ: u(undefined, u(true, r("BinParams"))) },
            { json: "field", js: "field", typ: u(undefined, "") },
            { json: "timeUnit", js: "timeUnit", typ: u(undefined, r("TimeUnit")) },
            { json: "frame", js: "frame", typ: u(undefined, a(u(3.14, null))) },
            { json: "groupby", js: "groupby", typ: u(undefined, a("")) },
            { json: "impute", js: "impute", typ: u(undefined, "") },
            { json: "key", js: "key", typ: u(undefined, "") },
            { json: "keyvals", js: "keyvals", typ: u(undefined, u(a("any"), r("ImputeSequence"))) },
            { json: "method", js: "method", typ: u(undefined, r("ImputeMethod")) },
            { json: "value", js: "value", typ: u(undefined, "any") },
            { json: "aggregate", js: "aggregate", typ: u(undefined, a(r("AggregatedFieldDef"))) },
            { json: "ignorePeers", js: "ignorePeers", typ: u(undefined, true) },
            { json: "sort", js: "sort", typ: u(undefined, a(r("SortField"))) },
            { json: "window", js: "window", typ: u(undefined, a(r("WindowFieldDef"))) },
            { json: "offset", js: "offset", typ: u(undefined, r("StackOffset")) },
            { json: "stack", js: "stack", typ: u(undefined, "") },
            { json: "flatten", js: "flatten", typ: u(undefined, a("")) },
            { json: "fold", js: "fold", typ: u(undefined, a("")) },
            { json: "sample", js: "sample", typ: u(undefined, 3.14) },
        ], false),
        "AggregatedFieldDef": o([
            { json: "as", js: "as", typ: "" },
            { json: "field", js: "field", typ: u(undefined, "") },
            { json: "op", js: "op", typ: r("AggregateOp") },
        ], false),
        "LookupData": o([
            { json: "data", js: "data", typ: r("Data") },
            { json: "fields", js: "fields", typ: u(undefined, a("")) },
            { json: "key", js: "key", typ: "" },
        ], false),
        "SortField": o([
            { json: "field", js: "field", typ: "" },
            { json: "order", js: "order", typ: u(undefined, r("VGComparatorOrder")) },
        ], false),
        "WindowFieldDef": o([
            { json: "as", js: "as", typ: "" },
            { json: "field", js: "field", typ: u(undefined, "") },
            { json: "op", js: "op", typ: r("Op") },
            { json: "param", js: "param", typ: u(undefined, 3.14) },
        ], false),
        "Repeat": o([
            { json: "column", js: "column", typ: u(undefined, a("")) },
            { json: "row", js: "row", typ: u(undefined, a("")) },
        ], false),
        "RowColNumber": o([
            { json: "column", js: "column", typ: u(undefined, 3.14) },
            { json: "row", js: "row", typ: u(undefined, 3.14) },
        ], false),
        "VGLayoutAlign": [
            "all",
            "each",
            "none",
        ],
        "Contains": [
            "content",
            "padding",
        ],
        "AutosizeType": [
            "fit",
            "none",
            "pad",
        ],
        "Bounds": [
            "flush",
            "full",
        ],
        "Align": [
            "center",
            "left",
            "right",
        ],
        "TextBaseline": [
            "alphabetic",
            "bottom",
            "middle",
            "top",
        ],
        "Cursor": [
            "alias",
            "all-scroll",
            "auto",
            "cell",
            "col-resize",
            "context-menu",
            "copy",
            "crosshair",
            "default",
            "e-resize",
            "ew-resize",
            "grab",
            "grabbing",
            "help",
            "move",
            "n-resize",
            "ns-resize",
            "ne-resize",
            "nesw-resize",
            "no-drop",
            "none",
            "not-allowed",
            "nw-resize",
            "nwse-resize",
            "pointer",
            "progress",
            "row-resize",
            "se-resize",
            "s-resize",
            "sw-resize",
            "text",
            "vertical-text",
            "w-resize",
            "wait",
            "zoom-in",
            "zoom-out",
        ],
        "Dir": [
            "ltr",
            "rtl",
        ],
        "FontStyle": [
            "italic",
            "normal",
        ],
        "FontWeightEnum": [
            "bold",
            "bolder",
            "lighter",
            "normal",
        ],
        "Interpolate": [
            "basis",
            "basis-closed",
            "basis-open",
            "bundle",
            "cardinal",
            "cardinal-closed",
            "cardinal-open",
            "linear",
            "linear-closed",
            "monotone",
            "step",
            "step-after",
            "step-before",
        ],
        "Orient": [
            "horizontal",
            "vertical",
        ],
        "StrokeCap": [
            "butt",
            "round",
            "square",
        ],
        "StrokeJoin": [
            "bevel",
            "miter",
            "round",
        ],
        "Content": [
            "data",
            "encoding",
        ],
        "PointEnum": [
            "transparent",
        ],
        "LabelOverlapEnum": [
            "greedy",
            "parity",
        ],
        "ExtentEnum": [
            "min-max",
        ],
        "ErrorbandExtent": [
            "ci",
            "iqr",
            "stderr",
            "stdev",
        ],
        "FieldTitle": [
            "functional",
            "plain",
            "verbal",
        ],
        "InvalidValues": [
            "filter",
        ],
        "LegendOrient": [
            "bottom",
            "bottom-left",
            "bottom-right",
            "left",
            "none",
            "right",
            "top",
            "top-left",
            "top-right",
        ],
        "VGProjectionType": [
            "albers",
            "albersUsa",
            "azimuthalEqualArea",
            "azimuthalEquidistant",
            "conicConformal",
            "conicEqualArea",
            "conicEquidistant",
            "equirectangular",
            "gnomonic",
            "mercator",
            "orthographic",
            "stereographic",
            "transverseMercator",
        ],
        "BindEnum": [
            "scales",
        ],
        "Empty": [
            "all",
            "none",
        ],
        "SingleDefChannel": [
            "color",
            "column",
            "fill",
            "fillOpacity",
            "href",
            "key",
            "latitude",
            "latitude2",
            "longitude",
            "longitude2",
            "opacity",
            "row",
            "shape",
            "size",
            "stroke",
            "strokeOpacity",
            "strokeWidth",
            "text",
            "tooltip",
            "x",
            "x2",
            "xError",
            "xError2",
            "y",
            "y2",
            "yError",
            "yError2",
        ],
        "SelectionResolution": [
            "global",
            "intersect",
            "union",
        ],
        "InputEnum": [
            "checkbox",
            "radio",
            "range",
            "select",
        ],
        "StackOffset": [
            "center",
            "normalize",
            "zero",
        ],
        "TitleAnchor": [
            "end",
            "middle",
            "start",
        ],
        "TitleFrame": [
            "bounds",
            "group",
        ],
        "TitleOrient": [
            "bottom",
            "left",
            "none",
            "right",
            "top",
        ],
        "DataFormatType": [
            "csv",
            "dsv",
            "json",
            "topojson",
            "tsv",
        ],
        "AggregateOp": [
            "argmax",
            "argmin",
            "average",
            "ci0",
            "ci1",
            "count",
            "distinct",
            "max",
            "mean",
            "median",
            "min",
            "missing",
            "q1",
            "q3",
            "stderr",
            "stdev",
            "stdevp",
            "sum",
            "valid",
            "values",
            "variance",
            "variancep",
        ],
        "BinEnum": [
            "binned",
        ],
        "TimeUnit": [
            "date",
            "day",
            "hours",
            "hoursminutes",
            "hoursminutesseconds",
            "milliseconds",
            "minutes",
            "minutesseconds",
            "month",
            "monthdate",
            "monthdatehours",
            "quarter",
            "quartermonth",
            "seconds",
            "secondsmilliseconds",
            "utcdate",
            "utcday",
            "utchours",
            "utchoursminutes",
            "utchoursminutesseconds",
            "utcmilliseconds",
            "utcminutes",
            "utcminutesseconds",
            "utcmonth",
            "utcmonthdate",
            "utcmonthdatehours",
            "utcquarter",
            "utcquartermonth",
            "utcseconds",
            "utcsecondsmilliseconds",
            "utcyear",
            "utcyearmonth",
            "utcyearmonthdate",
            "utcyearmonthdatehours",
            "utcyearmonthdatehoursminutes",
            "utcyearmonthdatehoursminutesseconds",
            "utcyearquarter",
            "utcyearquartermonth",
            "year",
            "yearmonth",
            "yearmonthdate",
            "yearmonthdatehours",
            "yearmonthdatehoursminutes",
            "yearmonthdatehoursminutesseconds",
            "yearquarter",
            "yearquartermonth",
        ],
        "RepeatEnum": [
            "column",
            "row",
        ],
        "LegendType": [
            "gradient",
            "symbol",
        ],
        "Domain": [
            "unaggregated",
        ],
        "ScaleInterpolateParamsType": [
            "cubehelix",
            "cubehelix-long",
            "rgb",
        ],
        "ScaleInterpolate": [
            "cubehelix",
            "cubehelix-long",
            "hcl",
            "hcl-long",
            "hsl",
            "hsl-long",
            "lab",
            "rgb",
        ],
        "NiceTime": [
            "day",
            "hour",
            "minute",
            "month",
            "second",
            "week",
            "year",
        ],
        "ScaleType": [
            "band",
            "bin-linear",
            "bin-ordinal",
            "linear",
            "log",
            "ordinal",
            "point",
            "pow",
            "quantile",
            "quantize",
            "sequential",
            "sqrt",
            "threshold",
            "time",
            "utc",
        ],
        "VGComparatorOrder": [
            "ascending",
            "descending",
        ],
        "Type": [
            "geojson",
            "nominal",
            "ordinal",
            "quantitative",
            "temporal",
        ],
        "AxisOrient": [
            "bottom",
            "left",
            "right",
            "top",
        ],
        "ImputeMethod": [
            "max",
            "mean",
            "median",
            "min",
            "value",
        ],
        "ExtentExtent": [
            "ci",
            "iqr",
            "min-max",
            "stderr",
            "stdev",
        ],
        "BoxPlot": [
            "area",
            "bar",
            "boxplot",
            "circle",
            "errorband",
            "errorbar",
            "geoshape",
            "line",
            "point",
            "rect",
            "rule",
            "square",
            "text",
            "tick",
            "trail",
        ],
        "ResolveMode": [
            "independent",
            "shared",
        ],
        "SelectionDefType": [
            "interval",
            "multi",
            "single",
        ],
        "Op": [
            "argmax",
            "argmin",
            "average",
            "ci0",
            "ci1",
            "count",
            "cume_dist",
            "dense_rank",
            "distinct",
            "first_value",
            "lag",
            "last_value",
            "lead",
            "max",
            "mean",
            "median",
            "min",
            "missing",
            "nth_value",
            "ntile",
            "percent_rank",
            "q1",
            "q3",
            "rank",
            "row_number",
            "stderr",
            "stdev",
            "stdevp",
            "sum",
            "valid",
            "values",
            "variance",
            "variancep",
        ],
    };
})(Convert = exports.Convert || (exports.Convert = {}));
