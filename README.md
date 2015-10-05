# DS Queue [![Build Status](https://travis-ci.org/apsdehal/ds-queue.svg?branch=master)](https://travis-ci.org/apsdehal/ds-queue)

A simple queue implementation. Used by [QUnit Migrate](http://github.com/apsdehal/qunit-migrate)

## Install

`npm install --save ds-queue`

## Usage

```js
var Queue = require('ds-queue');
var queue = new Queue();

queue.enqueue([1, 2, 3]); // [3, 2, 1]
queue.enqueue(4); // [4, 3, 2, 1]
var top = queue.top(); // top == 4; 
var first = queue.dequeue(); // first == 1, [4, 3, 2]
```

## License

MIT © [Amanpreet Singh](https://apsdehal.in)