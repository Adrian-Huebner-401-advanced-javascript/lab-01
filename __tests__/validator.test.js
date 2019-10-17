'use strict';

const Validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  const validator = new Validator();

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    expect(validator.isString(str)).toBeTruthy();
  });

  it('numbers', () => {
    let num = 1;
    expect(validator.isNumber(num)).toBeTruthy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isArray(arr)).toBeTruthy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isObject(obj)).toBeTruthy();
  });

  it('booleans', () => {
    let bool = false;
    expect(validator.isBool(bool)).toBeTruthy();
  });

  it('functions', () => {
    let func = () => {};
    expect(validator.isFunc(func)).toBeTruthy();
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    let arr = ['a', 'b', 'c', 'd'];
    let badArr = ['a', 3, 'c', 18]
    //check that array is array
    //Thankks to Julie for helping me with this
    expect(validator.isArray(arr)).toBeTruthy(); //if true, passes.
    expect(validator.isArray(badArr)).toBeTruthy(); //if true, passes.
    
    expect(validator.typeArray(arr)).toBeTruthy();
    expect(validator.typeArray(badArr)).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});