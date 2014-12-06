var lib = require('../');

var assert = require("assert")

describe('lib', function() {
	describe('add', function() {
		it('should return 3 when args are 1 and 2', function() {
			assert.equal(3, lib.add(1,2));
		})
	})
})
