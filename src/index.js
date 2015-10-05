(function(object) {

  if (typeof module === 'object' && module && typeof module.exports === 'object') {
    // CommonJS
    module.exports = Queue;

  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function() {
      return Queue;
    });
  } else {
    // Standard Browser and other cases
    object.Queue = Queue;
  }

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  function Queue(options) {
    options = options || {};
    this.head = null;
    this.tail = null;
    this.name = options.name || '';
    this.cap = options.cap || -1;
    this.count = 0;
  }

  Queue.prototype.enqueueOne = function(data) {
    var node = new Node(data);

    if (this.count === this.cap && this.cap >= 0) {
      throw new Error(
        'Queue ' + options.name + ' has reached its cap');
    }

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.count += 1;
  }

  Queue.prototype.enqueue = function(data) {
    if (data.constructor !== Array) {
      data = [data];
    }
    var self = this;
    data.map(function (x) {
      self.enqueueOne(x);
    });
  }

  Queue.prototype.dequeue = function() {
    var data, node;
    // We don't throw underflow error
    if (this.head !== null) {
      data = this.head.data;
      node = this.head;
      delete node;
      this.head = this.head.next;
    }
    return data;
  }

  Queue.prototype.top = function() {
    var value = null;
    if (this.head !== null) {
      value = this.head.data;
    }
    return value;
  }

  Queue.prototype.count = function() {
    return this.count;
  }

  // Dumps the whole queue
  Queue.prototype.dump = function() {
    var node = this.head;
    var dump = [];
    while (node !== null) {
      dump.push(node.data);
      node = node.next;
    }
    return dump;
  }
})(this);
