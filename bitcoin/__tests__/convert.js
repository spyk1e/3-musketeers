'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning a Number', () => {
    //convert(2, 'BTC', 'BTC');
    
    expect(convert(2, 'BTC', 'BTC')).isNumber;
});

test('should return a Number', () => {
    //convert(2, 'BTC', 'BTC', 'Number');
    
    expect(convert(2, 'BTC', 'BTC', 'Number')).isNumber;
});

test('should return a Big number', () => {
    //convert(2, 'BTC', 'BTC', 'Big');
    
    expect(convert(2, 'BTC', 'BTC', 'Big')).isBig;
});

test('should return a String', () => {
    //convert(2100, 'mBTC', 'BTC', 'String');
    
    expect(convert(2100, 'mBTC', 'BTC', 'String')).isString;
});

test('should convert an integer', () => {
    //convert(123456789012345, 'Satoshi', 'BTC', 'Number');
    
    expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).isInteger;
});

test('should convert a number', () => {
    //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
    
    expect(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).isNumber;
});

test('should convert a string', () => {
    //convert('2', 'BTC', 'BTC', 'Number');
    
    expect(convert('2', 'BTC', 'BTC', 'Number')).isString;
});

test('should convert a Big number', () => {
    //convert(new Big(2), 'BTC', 'BTC', 'Number');
    
    expect(convert('2', 'BTC', 'BTC', 'Number')).isBig;
});

test('should convert a NaN to a Number', () => {
    //convert(NaN, 'BTC', 'BTC', 'Number');
    //convert(NaN, 'BTC', 'mBTC', 'Number');
    
    expect(convert(NaN, 'BTC', 'BTC', 'Number')).isNumber;
    expect(convert(NaN, 'BTC', 'mBTC', 'Number')).isNumber;
});

test('should convert a NaN to a String', () => {
    //convert(NaN, 'BTC', 'BTC', 'String');
    //convert(NaN, 'BTC', 'mBTC', 'String');
    
    expect(convert(NaN, 'BTC', 'BTC', 'Number')).isString;
    expect(convert(NaN, 'BTC', 'mBTC', 'Number')).isString;
});

test('should not convert a NaN to a Big', () => {
    //convert(NaN, 'BTC', 'BTC', 'Big');
    expect(() => {
        convert(NaN, 'BTC', 'BTC', 'Big');
    }).toThrow();
});

test('should handle rounding errors', () => {
    //convert(4.6, 'Satoshi', 'BTC', 'Number');
    //convert(0.000000046, 'BTC', 'Satoshi', 'Number');

    expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).toBeCloseTo(0.000000046);
    expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBeCloseTo(4.6);
});

test('should throw when untest is undefined', () => {
    //convert(new Big(2), 'x', 'BTC', 'Number');
    //convert(new Big(2), 'BTC', 'x', 'Number');
    //convert(NaN, 'x', 'BTC', 'Number');
    //convert(NaN, 'BTC', 'x', 'Number');
    
    expect(() => {
        convert(new Big(2), 'x', 'BTC', 'Number');
    }).toThrow();
    expect(() => {
        convert(new Big(2), 'BTC', 'x', 'Number');
    }).toThrow();
    expect(() => {
        convert(NaN, 'x', 'BTC', 'Number');
    }).toThrow();
    expect(() => {
        convert(NaN, 'BTC', 'x', 'Number');
    }).toThrow();
});

test('should throw when representaion is undefined', () => {
    //convert(2, 'BTC', 'mBTC', 'x');
    //convert(NaN, 'BTC', 'mBTC', 'x');
    
    expect(() => {
        convert(2, 'BTC', 'mBTC', 'x');
    }).toThrow();
    expect(() => {
        convert(NaN, 'BTC', 'mBTC', 'x');
    }).toThrow();
});

test('should allow untest aliases', () => {
    //convert(4.6, 'Satoshi', 'sat');
    //convert(4.6, 'μBTC', 'btest');
    
    expect(convert(4.6, 'Satoshi', 'sat')).toBeCloseTo(4.6);
    expect(() => {
        convert(4.6, 'μBTC', 'btest');
    }).toThrow("'btest' is not a bitcoin unit");
});


//Added tests

test('should allow the add of an unit', () => {
    expect(convert.addUnit('unit', 1000)).isBig;
});

test('should throw when the unit already exist', () => {
    expect(() => {
        convert.addUnit('BTC', 1000);
    }).toThrow();
    
    expect(() => {
        convert.addUnit('unit', 0.001);
    }).toThrow();
});

test('should allow the removing of an unit', () => {
    convert.addUnit('unit', 1000);
    
    expect(convert.removeUnit('unit')).toBe(undefined);
});

test('should throw removing predefined unit', () => {
    expect(() => {
        convert.removeUnit('BTC');
    }).toThrow();
});

/*
test('should allow convert unit', () => {
    expect(convert.units()).isBig;
});
*/