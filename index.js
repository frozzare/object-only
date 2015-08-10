'use strict';

/**
 * Require modules.
 */

var isObject = require('is-object');

/**
 * Pick values from object.
 *
 * @param {object} obj
 * @param {array|string}
 *
 * @return {object}
 */

module.exports = function only(obj, keys) {
  var result = {};

  if (!isObject(obj)) {
    throw new Error('`obj` should be object');
  }

  if (typeof keys === 'string') {
    keys = [keys];
  }

  if (keys instanceof Array === false) {
    throw new Error('`keys` should be array');
  }

  for (var i = 0, l = keys.length; i < l; i++) {
    var parts = keys[i].split('.');
    var first = parts.shift();
    var value = obj[first];

    if (isObject(value) && parts.length > 0) {
      result[first] = only(obj[first], parts);
    } else {
      result[first] = obj[first];
    }
  }

  return result;
};
