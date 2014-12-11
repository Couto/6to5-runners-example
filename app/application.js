/* jshint esnext: true */
require('6to5/runtime');
require('6to5/polyfill');



import Joe from './Joe.js';

var joe = new Joe();
joe.run();

var nums = [1, 2, 3, 4, 5, 6];
var multiples = (for (i of nums) if (i % 2) i * i);

//
// assert.equal(multiples.next().value, 1);
// assert.equal(multiples.next().value, 9);
// assert.equal(multiples.next().value, 25);
//
alert('wtf?');
