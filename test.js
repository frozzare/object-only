'use strict';

var test       = require('tape');
var objectOnly = require('./');

test('should get property from object', function (t) {
	t.plan(2);

	var obj = {
		foo: 'bar',
		bar: 'foo'
	};

	t.equal('bar', objectOnly(obj, 'foo').foo);
	t.equal('bar', objectOnly(obj, ['foo']).foo);
});

test('should get properties from object', function (t) {
	t.plan(3);

	var obj = {
		foo: 'bar',
		bar: 'foo'
	};

	var res = objectOnly(obj, ['foo', 'bar']);
	t.equal('foo', res.bar);
	t.equal('bar', res.foo);

	var obj = {
		foo: {
			bar: 'foo'
		}
	};

	var res = objectOnly(obj, ['foo', 'bar']);
	t.equal('foo', objectOnly(obj, ['foo.bar']).foo.bar);
});

test('should throw error with wrong arguments', function (t) {
	t.plan(2);

	try {
		objectOnly(null);
	} catch (e) {
		t.equal('`obj` should be object', e.message);
	}

	try {
		objectOnly({}, null);
	} catch (e) {
		t.equal('`keys` should be array', e.message);
	}
});
