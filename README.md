# object-only [![Build Status](https://secure.travis-ci.org/frozzare/object-only.png?branch=master)](http://travis-ci.org/frozzare/object-only)

Extract a copy of the object containing the specified properties.

## Install

```
$ npm install --save object-only
```

## Example

```javascript
var objectOnly = require('object-only');
var obj = {
	bar: 'foo',
	foo: {
		bar: 'foo'
	},
	foobar: 'foobar'
};

console.log(objectOnly(obj, ['bar', 'foo.bar']));
// { bar: 'foo', foo: { bar: 'foo' } }
```

## License
Copyright (c) 2015 Fredrik Forsmo  
Licensed under the MIT license.
