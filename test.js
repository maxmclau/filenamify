'use strict';
var test = require('ava');
var filenamify = require('./');

test(function (t) {
	t.assert(filenamify('foo/bar') === 'foo!bar');
	t.assert(filenamify('foo//bar') === 'foo!bar');
	t.assert(filenamify('//foo//bar//') === 'foo!bar');
	t.assert(filenamify('foo\\\\\\bar') === 'foo!bar');
	t.assert(filenamify('foo/bar', {replacement: '🐴🐴'}) === 'foo🐴🐴bar');
	t.assert(filenamify('////foo////bar////', {replacement: '(('}) === 'foo((bar');
	t.end();
});
