QUnit.test("one is equal to one", function (assert) {
    let value = 1;
    assert.ok(1 === value, "Passed!");
});

QUnit.module("Roman Numeral");


QUnit.test("given i returns 1", function(assert) {
    const romanNumeral = "i";
    const convertor = new romanNumeralConvertor();
    const decimalNumber = convertor.convertToDecimal();
    assert.equal(decimalNumber, 1);
})

QUnit.test("given v returns 5", function(assert) {
    const romanNumeral = "v";
    const convertor = new romanNumeralConvertor();
    const decimalNumber = convertor.convertToDecimal();
    assert.equal(decimalNumber, 5);
})

QUnit.test("given x returns 10", function(assert) {
    const romanNumeral = "x";
    const convertor = new romanNumeralConvertor();
    const decimalNumber = convertor.convertToDecimal();
    assert.equal(decimalNumber, 10);
})

QUnit.test("given l returns 50", function(assert) {
    const romanNumeral = "l";
    const convertor = new romanNumeralConvertor();
    const decimalNumber = convertor.convertToDecimal();
    assert.equal(decimalNumber, 50);
})

QUnit.test("given c returns 100", function(assert) {
    const romanNumeral = "c";
    const convertor = new romanNumeralConvertor();
    const decimalNumber = convertor.convertToDecimal();
    assert.equal(decimalNumber, 100);
})

QUnit.test("given d returns 500", function(assert) {
    const romanNumeral = "d";
    const convertor = new romanNumeralConvertor();
    const decimalNumber = convertor.convertToDecimal();
    assert.equal(decimalNumber, 500);
})

QUnit.test("given m returns 1000", function(assert) {
    const romanNumeral = "m";
    const convertor = new romanNumeralConvertor();
    const decimalNumber = convertor.convertToDecimal();
    assert.equal(decimalNumber, 1000);
})

