function _1(md){return(
md`# Sequential scales

[d3.scaleSequential](https://d3js.org/d3-scale/sequential#sequential-scales) creates a scale from an interpolator — a function *f* which maps the interval [0,1] to any arbitrary value:`
)}

function _interpolator(){return(
t => `hello ${t}`
)}

function _hello(d3,interpolator){return(
d3.scaleSequential(interpolator)
)}

function _4(hello){return(
hello(0.5)
)}

function _5(md){return(
md`*sequential*.domain sets or returns the domain:`
)}

function _hello200(d3,interpolator){return(
d3.scaleSequential(interpolator).domain([200, 100])
)}

function _7(hello200){return(
hello200(170)
)}

function _8(md){return(
md`In short, the scale takes the input value *v*, normalizes it linearly to a value *t* with respect to its domain (the start of the domain is mapped to *t*=0, the end mapped to *t*=1), and applies the interpolator function.`
)}

function _9(md){return(
md`A typical example, detailed below, is a color scale that circles the chromatic wheel. As a first approach, we can make a function that returns a color with a fixed saturation (1, *i.e.* 100% saturated) and luminance (0.5). The hue will be varying from 0° to 360°. [d3.hsl](https://d3js.org/d3-color#hsl) takes *h* (hue) as its first argument, in degrees:`
)}

function _angryRainbow(d3){return(
d3.scaleSequential(t => d3.hsl(t * 360, 1, 0.5).toString())
)}

function _11(angryRainbow,t0){return(
angryRainbow(t0)
)}

function _t0(ramp,angryRainbow){return(
ramp(angryRainbow)
)}

function _13(md){return(
md`_Note._ Besides demonstration purposes, this color scheme is not recommended. Its is not perceptually uniform (most people will see spikes around the yellow, light blue and pink colors — hence the “angry rainbow” nickname); [d3-scale-chromatic](https://d3js.org/d3-scale-chromatic) provides better alternatives for [cyclical color scales](https://d3js.org/d3-scale-chromatic/cyclical), such as [d3.interpolateSinebow](https://d3js.org/d3-scale-chromatic/cyclical#interpolateSinebow):`
)}

function _14(d3,t1){return(
d3.interpolateSinebow(t1)
)}

function _t1(ramp,d3){return(
ramp(d3.scaleSequential(d3.interpolateSinebow))
)}

function _16(md){return(
md`(All manners of sequential color scales are available in the d3-scale-chromatic module: [diverging](https://d3js.org/d3-scale-chromatic/diverging), [single-hue](https://d3js.org/d3-scale-chromatic/sequential#interpolateBlues), [multi-hue](https://d3js.org/d3-scale-chromatic/sequential#interpolateTurbo) and [cyclical](https://d3js.org/d3-scale-chromatic/cyclical).)`
)}

function _17(md){return(
md`[*sequential*.interpolator](https://d3js.org/d3-scale/sequential#sequential_interpolator) allows to read or modify the interpolator function *f* in an existing sequential scale. It can be useful to construct a scale iteratively… see [Curran Kelleher’s block](http://bl.ocks.org/curran/3094b37e63b918bab0a06787e161607b) for an example. We use it below to read a scale’s interpolator and create a mirror image (by applying it to 1–*t* instead of *t*):`
)}

function _18(d3,use_mirror,ramp)
{
  const scale = d3.scaleSequential(d3.interpolateSinebow); // same as t1
  const interpolator = scale.interpolator(); // read its interpolator
  const mirror = t => interpolator(1 - t); // creates a mirror image of the interpolator
  if (use_mirror) {
    scale.interpolator(mirror); // updates the scale’s interpolator
  }
  return ramp(scale);
}


function _use_mirror(Inputs){return(
Inputs.toggle({
  label: "mirror interpolator", 
  value: ["checked"]
})
)}

function _20(md){return(
md`[*sequential*.range](https://d3js.org/d3-scale/sequential#sequential_range) allows to read the values of the scale at the extreme points of its domain.`
)}

function _21(d3){return(
d3.scaleSequential(t => 10 - 2.5 * t).range()
)}

function _22(d3){return(
d3.scaleSequential(d3.interpolateCividis).range()
)}

function _23(md){return(
md`Setting the range will reset the interpolator to a linear [d3.interpolate](https://observablehq.com/@d3/d3-interpolate) (or [d3.interpolateRound](https://observablehq.com/@d3/d3-interpolatenumber) if using  [*sequential*.rangeRound](https://d3js.org/d3-scale/sequential#sequential_rangeRound)):`
)}

function _24(d3)
{
  const scale = d3.scaleSequential(d3.interpolateCool);
  const before = scale(0.5);
  const range = scale.range();
  scale.range(range); // uses the same extrema, but resets the interpolator
  const after = scale(0.5);
  return { before, after, range };
}


function _25(d3){return(
d3.scaleSequential(t => t * t).rangeRound([0, 100])(1 / 3)
)}

function _26(md){return(
md`As a shortcut notation, one can pass a range array to the scale’s definition, in lieu of the interpolator:`
)}

function _27(ramp,d3){return(
ramp(d3.scaleSequential(["blue", "green"]))
)}

function _28(md){return(
md`## Other methods

d3.scaleSequential also exposes the following methods:
- [*sequential*.clamp](https://d3js.org/d3-scale/linear#linear_clamp) makes sure *t* is always between 0 and 1, even for values outside the domain); see [continuous scales](https://observablehq.com/@d3/continuous-scales).
- [*sequential*.copy](https://d3js.org/d3-scale/linear#linear_copy); returns a copy of the scale with the same parameters — any subsequent change to the copy does not mutate the original scale.

However, it does not expose invert (which would necessitate an inverse function to its interpolator *f*), nor interpolate (this is served by the interpolator method).`
)}

function _29(md){return(
md`## Non-linear domains

As with other continuous scales, the input domain of sequential scales can be transformed by a square-root, logarithmic, or power function before being fed to the interpolator. For example, the following scale interpolates 16 orders of magnitude into a diverging (Purple-Blue-Green) color scale:`
)}

function _magnitude(d3){return(
d3.scaleSequentialLog(d3.interpolatePuBuGn).domain([1e-8, 1e8])
)}

function _31(d3,t3,md){return(
md`Hover on the ramp to show value: ${d3.format("~s")(t3)}`
)}

function _t3(ramp,magnitude,d3){return(
ramp(magnitude, d3.scaleLog(), 16)
)}

function _33(d3,md){return(
md`Variants of this include:
- d3.**scaleSequentialLog**, applies a logarithmic transform to the domain before calling the interpolator — analogous to a [logarithmic scale](https://d3js.org/d3-scale/log) — see the example above.
- d3.**scaleSequentialPow**, applies an [exponential transform](https://d3js.org/d3-scale/pow); use *scale*.exponent() to set the exponent.
- d3.**scaleSequentialSqrt**, applies a [square-root transform](https://d3js.org/d3-scale/pow#scaleSqrt); equivalent to
  d3.scaleSequentialPow().exponent(${d3.scaleSequentialSqrt().exponent()}).
- d3.**scaleSequentialSymlog**, applies a [symlog transform](https://d3js.org/d3-scale/symlog); use *scale*.constant to set the constant.


See [continuous scales](https://observablehq.com/@d3/continuous-scales) for examples and charts describing these transformations.`
)}

function _34(md){return(
md`d3.**scaleSequentialQuantile** is a bit different; it applies a [*p*-quantile transform](https://d3js.org/d3-scale/quantile) to the domain. For demonstration purposes, let’s apply it to a very small dataset consisting of three numbers:`
)}

function _qu(d3){return(
d3.scaleSequentialQuantile().domain([100, 1, 13])
)}

function _36(qu){return(
[qu(1), qu(2), qu(13), qu(20), qu(99.99), qu(100)]
)}

function _37(md){return(
md`As this example shows, this scale sorts the *n* domain values and maps them to *n* uniformly-spaced values in the output range (named _quantiles_, as when you are above 10% of the domain values, the result is 0.1). When applied to a numerical value, the scale looks for the quantile corresponding to the smallest number in the domain immediately inferior or equal to it (using [d3.bisect](https://observablehq.com/d/8e91df5b8bf06458)), and finally applies the interpolator (in our case, the default interpolator *t* \\\`=>\\\` *t*).`
)}

function _38(md){return(
md`The sequential quantile scale does not expose the clamp method: values outside the domain’s extent are mapped to –1/(n-1) and 1 respectively:`
)}

function _39(qu){return(
[qu(0), qu(10000)]
)}

function _40(md){return(
md`Use it with a color interpolator to create specific step sizes:`
)}

function _41(ramp,d3){return(
ramp(d3.scaleSequentialQuantile(d3.interpolateRdYlBu).domain([0, 0.2, 0.5, 0.9]))
)}

function _42(md){return(
md`One can read quantiles from the scale by specifying the number of quantiles *q* (the function returns *q*+1 bounds):`
)}

function _seq(d3){return(
d3.scaleSequentialQuantile(d3.interpolateRdYlBu)
  .domain(Float32Array.from({ length: 1000 }, d3.randomNormal(0.5, 0.15)))
)}

function _44(ramp,seq){return(
ramp(seq)
)}

function _45(seq){return(
seq.quantiles(4)
)}

function _46(md){return(
md`See [Quantile Choropleth](https://observablehq.com/@d3/quantile-choropleth) for an example application of d3.scaleSequentialQuantile to a choropleth map.`
)}

function _47(md){return(
md`---

## Appendix`
)}

function _ramp(DOM,width,d3){return(
function ramp(color, numscale, n = 512) {
  const canvas = DOM.canvas(n, 1);
  const context = canvas.getContext("2d"),
    w = width + 28;
  canvas.style.margin = "0 -14px";
  canvas.style.width = `${w}px`;
  canvas.style.height = "40px";
  canvas.style.imageRendering = "pixelated";

  // companion numerical scale, to define the axis.
  if (numscale === undefined) numscale = d3.scaleLinear();
  if (color.domain) numscale.domain(color.domain());
  numscale.range([0, n]);
  const t = color.ticks ? color.ticks(n) : d3.range(n).map(i => i / (n - 1));

  for (let i = 0; i < t.length; ++i) {
    context.fillStyle = color(t[i]);
    context.fillRect((i * n) / t.length, 0, 100, 1);
  }

  d3.select(canvas).on("mousemove click", function(event) {
    const t = numscale.invert((d3.pointer(event)[0] / w) * n);
    canvas.value = t;
    canvas.dispatchEvent(new CustomEvent("input"));
  });
  canvas.value = 0;

  return canvas;
}
)}

function _thanks(md){return(
md`Thanks to [pabloesm](/@pabloesm) for proofreading.`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("interpolator")).define("interpolator", _interpolator);
  main.variable(observer("hello")).define("hello", ["d3","interpolator"], _hello);
  main.variable(observer()).define(["hello"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("hello200")).define("hello200", ["d3","interpolator"], _hello200);
  main.variable(observer()).define(["hello200"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("angryRainbow")).define("angryRainbow", ["d3"], _angryRainbow);
  main.variable(observer()).define(["angryRainbow","t0"], _11);
  main.variable(observer("viewof t0")).define("viewof t0", ["ramp","angryRainbow"], _t0);
  main.variable(observer("t0")).define("t0", ["Generators", "viewof t0"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _13);
  main.variable(observer()).define(["d3","t1"], _14);
  main.variable(observer("viewof t1")).define("viewof t1", ["ramp","d3"], _t1);
  main.variable(observer("t1")).define("t1", ["Generators", "viewof t1"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer()).define(["d3","use_mirror","ramp"], _18);
  main.variable(observer("viewof use_mirror")).define("viewof use_mirror", ["Inputs"], _use_mirror);
  main.variable(observer("use_mirror")).define("use_mirror", ["Generators", "viewof use_mirror"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["d3"], _21);
  main.variable(observer()).define(["d3"], _22);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["d3"], _24);
  main.variable(observer()).define(["d3"], _25);
  main.variable(observer()).define(["md"], _26);
  main.variable(observer()).define(["ramp","d3"], _27);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer("magnitude")).define("magnitude", ["d3"], _magnitude);
  main.variable(observer()).define(["d3","t3","md"], _31);
  main.variable(observer("viewof t3")).define("viewof t3", ["ramp","magnitude","d3"], _t3);
  main.variable(observer("t3")).define("t3", ["Generators", "viewof t3"], (G, _) => G.input(_));
  main.variable(observer()).define(["d3","md"], _33);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer("qu")).define("qu", ["d3"], _qu);
  main.variable(observer()).define(["qu"], _36);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer()).define(["md"], _38);
  main.variable(observer()).define(["qu"], _39);
  main.variable(observer()).define(["md"], _40);
  main.variable(observer()).define(["ramp","d3"], _41);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer("seq")).define("seq", ["d3"], _seq);
  main.variable(observer()).define(["ramp","seq"], _44);
  main.variable(observer()).define(["seq"], _45);
  main.variable(observer()).define(["md"], _46);
  main.variable(observer()).define(["md"], _47);
  main.variable(observer("ramp")).define("ramp", ["DOM","width","d3"], _ramp);
  main.variable(observer("thanks")).define("thanks", ["md"], _thanks);
  return main;
}
