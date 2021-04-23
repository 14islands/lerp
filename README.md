# Frame rate independent linear interpolation function

This is a frame rate independent linear interpolation function based on [this article](http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/). It uses [https://www.npmjs.com/package/lerp](https://www.npmjs.com/package/lerp) under the hood.

```js
var lerp = require('@14islands/lerp')

var res = lerp(a, b, t, frameDelta, targetFps);
```

## Usage

```js
// classic lerp - works as expected
lerp(start, end, progress)

// Interpolates and adjusts for the frame delta. Default target is 60fps.
const frameDelta = clock.getDelta()
lerp(start, end, alpha, frameDeltaMs)

// Adjust for frame delta targeting a 120fps refresh rate.
const frameDelta = clock.getDelta()
lerp(start, end, alpha, frameDelta, 120)
```

## Demo
[Sandbox demo](https://codesandbox.io/s/fps-independent-lerp-pdiq2)

## License

MIT, see [LICENSE.md](http://github.com/14islands/lerp/blob/master/LICENSE.md) for details.
