var Queue = require('../src/index');
var assert = require('assert');


describe('Main module', function () {
	var queue;
	before(function() {
		queue = new Queue();
	});

	it('should be a valid construct', function() {
		assert.ok(queue instanceof Queue);
	});

	it('should enqueue and dequeue properly', function() {
		queue.enqueue(1);
		assert.equal(queue.dequeue(), 1);
		queue.enqueue(1);
		queue.enqueue([2, 3, 4]);
		assert.equal(queue.dequeue(), 1);
		assert.equal(queue.dequeue(), 2);
		assert.equal(queue.dequeue(), 3);
		assert.equal(queue.dequeue(), 4);
	});

	it('should return correct top', function() {
		queue.enqueue(1);
		assert.equal(queue.top(), 1);
		queue.enqueue([2, 3, 4]);
		assert.equal(queue.top(), 1);
		queue.dequeue();
		assert.equal(queue.top(), 2);
		queue.dequeue();
		assert.equal(queue.top(), 3);
		queue.dequeue();
		assert.equal(queue.top(), 4);
		queue.dequeue();
		assert.equal(queue.top(), null);
	});

	it('should dump properly', function() {
		queue.enqueue(1);
		assert.deepEqual(queue.dump(), [1]);
		queue.enqueue([2, 3, 4]);
		assert.deepEqual(queue.dump(), [1, 2, 3, 4]);
	});

	it('should throw proper error on overflow', function() {
		queue = new Queue({name: 'test', cap: 2});
		queue.enqueue([1, 2]);
		
		try {
			queue.enqueue(1);
		} catch (e) {
			assert.deepEqual(e, 
				new Error('Queue ' + 'test' + ' has reached its cap'));
		}
	});
});
