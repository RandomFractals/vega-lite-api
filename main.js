"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spec_1 = require("./src/Spec");
var jsonSpec = "{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v3.json\",\n  \"description\": \"A simple bar chart with embedded data.\",\n  \"data\": {\n    \"values\": [\n      {\"a\": \"A\",\"b\": 28}, {\"a\": \"B\",\"b\": 55}, {\"a\": \"C\",\"b\": 43},\n      {\"a\": \"D\",\"b\": 91}, {\"a\": \"E\",\"b\": 81}, {\"a\": \"F\",\"b\": 53},\n      {\"a\": \"G\",\"b\": 19}, {\"a\": \"H\",\"b\": 87}, {\"a\": \"I\",\"b\": 52}\n    ]\n  },\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"a\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"b\", \"type\": \"quantitative\"}\n  }\n}";
console.log('spec JSON string:', jsonSpec);
var spec = Spec_1.Convert.toSpec(jsonSpec);
console.log('spec Object:', spec);
// Note: spec.mark w/ hints:
console.log(spec.mark);
console.log('specToJson result', Spec_1.Convert.specToJson(spec));
