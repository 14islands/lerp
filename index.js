const _lerp = require('lerp')

/**
 * Drop-in replacement of standard lerp with optional frame delta and target fps
 * to maintain constant animation speed at various fps
 * 
 * Based on http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
 * 
 * @param {number} source Current value
 * @param {number} target Value to lerp towards
 * @param {number} rate Interpolation rate
 * @param {number} frameDeltaMs Optional frame delta time 0.016 for 60fps
 * @param {number} targetFps Optional, target is 60 by default
 * @returns {number} interpolated value
 */

function lerp(source, target, rate, frameDeltaMs, targetFps = 60){
  
  // return normal lerp if no delta was passed
  if (typeof frameDeltaMs === 'undefined') {
    return _lerp(source, target, rate)
  }

  const relativeDelta = frameDeltaMs / (1 / targetFps)
  const smoothing = 1 - rate
  return _lerp(source, target, 1 - Math.pow(smoothing, relativeDelta));
}

module.exports = lerp