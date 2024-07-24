'use strict';

var foo = 42;
foo = 43;


let bar = 42;

const baz = 42;

//  var is used in global or function scope
//  let and const are used in block scope
//  block scope is the space between curly brackets {}
// prefer let or const
// using global scope can cause horrible debugging challenges
// Primitive datatypes: number, string, boolean, undefined, null, symbol

let number = 1;
let oct = 0o77; // 63
let hex = 0x0011; // 17
let bin = 0b1100; // 12

let string = 'hello';
let quotes = '"Hello", said the man';
let escaped = '"Oh no you didn\'t, said the woman"'
let joined = 'wait, ' + 'what?';

let multiline = `this
string
has
linebreaks`;

let inefficientMultiline = 'this\nstring\nhas\nlinebreaks';

console.log(multiline);
console.log(inefficientMultiline);

let yes = true;

let mySymbol = Symbol('My symbol');
let sym1 = symbol('x');
let sym2 = Symbol('x');
console.log(sym1 === sym2);
//  Symbols are always unique

let array = [5, 'something', true];
let array2 = new Array();

array[0]; //5
let obj = {
    num: 5,
    str: 'Whoohoo'
}

// composites are arrays and objects

