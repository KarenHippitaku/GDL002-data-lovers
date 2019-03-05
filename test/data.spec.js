//require('../src/data.js');


//describe('example', () => {
//  it('is a function', () => {
//    expect(typeof example).toBe('function');
//  });

//  it('returns `example`', () => {
//    expect(example()).toBe('example');
//  });
//});

require('../src/data.js');
const INJURIES = require('../src/data/injuries/injuries.json');

describe('injuries', () => {
  it('must be an object', () => {
    expect(typeof(INJURIES)).toBe('object');
  });
});

describe('fillElements', () => {
  it('must be a function', () => {
    expect(data.fillElements(INJURIES)).toBe('function');
  });
});