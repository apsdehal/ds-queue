# DS Queue [![Build Status](https://travis-ci.org/apsdehal/ds-queue.svg?branch=master)](https://travis-ci.org/apsdehal/ds-queue)

A simple queue implementation. Used by [QUnit Migrate](http://github.com/apsdehal/qunit-migrate)

## Install

`npm install --save dsq`

## Usage

```js
var Queue = require('dsq');
var queue = new Queue();

queue.enqueue([1, 2, 3]); // [1, 2, 3]
queue.enqueue(4); // [1, 2, 3, 4]
var top = queue.top(); // top == 1; 
var first = queue.dequeue(); // first == 1, [2, 3, 4]
var dump = queue.dump(); // [2, 3, 4]
```

## License

MIT © [Amanpreet Singh](https://apsdehal.in)