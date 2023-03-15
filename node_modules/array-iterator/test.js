'use strict';

let assert = require('assert');
let iter = require('./');

describe('array-iterator', function(){
  it('works', function(){
    let arr = [1];
    for (let x of iter(arr)) {
      assert(x === 1);
    }
  });
});
