import { Convert, Spec, MarkConfig } from "./src/Spec";

const jsonSpec = `{
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "description": "A simple bar chart with embedded data.",
  "data": {
    "values": [
      {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
      {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
      {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative"}
  }
}`;

console.log('spec JSON string:', jsonSpec);

const spec = Convert.toSpec(jsonSpec);
console.log('spec Object:', spec);

// let's add a vis name
spec.name = 'test bar chart';

// Note: spec.mark w/ hints:
console.log(spec.mark);

console.log('specToJson result', Convert.specToJson(spec));
