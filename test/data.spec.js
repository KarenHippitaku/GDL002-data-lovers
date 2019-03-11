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

describe('filterByYear', () => {
  it('must be a function', () => {
    expect(data.filterByYear(INJURIES)).toBe('function');
  });
});

describe('filterByInjurie', () => {
  it('must be a function', () => {
    expect(data.filterByInjurie(INJURIES)).toBe('function');
  });
});

describe('sortAlphabetically', () => {
  it('must be a function', () => {
    expect(data.sortAlphabetically(INJURIES)).toBe('function');
  });
});
