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

describe('ShowNumbers', () => {
  it('must be a function', () => {
    expect( window.data.ShowNumbers(INJURIES, "2000-01-04") instanceof Array).toBe(true);
  });
});

describe('filterData', () => {
  it('must be a function of filter years', () => {
    expect(data.filterData(INJURIES)).toEqual([2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]);
  });
});

describe('filterElementsOrder', () => {
  it('must be a function of order years', () => {
    expect(data.fillElementsOrder(INJURIES)).toEqual([2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000]);
  });
});

describe('showNumbersOfCalculate', () => {
  it('must be a function of calculate averache', () => {
    expect(data.showNumbersOfCalculate(INJURIES, "2000-01-04") instanceof Number).toBe(false);
  });
});
