//business logic
function romanNumeral() {

};


function romanNumeralConvertor(romanNumeral) {

    "romanNumeralString": {
        "get": romanNumeralString() {};
        "set": romanNumeralString() {
            if( typeof romanNumeral === 'string' || romanNumeral instanceof String) {
                
            }
        };
    };
    
    "_decimalNumber": {
        "get": decimalNumberNumber() {};
        "set": decimalNumberNumber() {
            if( typeof decimalNumber === Number) {
                
            }
        };
    };

    convertToDecimal() {
        if (romanNumeral === "i") {
            romanNumeral = 1;
            decimalNumber = romanNumeral;

        } else if (romanNumeral === "v") {
            romanNumeral = 5;
            decimalNumber = romanNumeral;

        } else if (romanNumeral === "x") {
            romanNumeral = 10;
            decimalNumber = romanNumeral;

        } else if (romanNumeral === "l") {
            romanNumeral = 50;
            decimalNumber = romanNumeral;

        } else if (romanNumeral === "c") {
            romanNumeral = 100;
            decimalNumber = romanNumeral;

        } else if (romanNumeral === "d") {
            romanNumeral = 500;
            decimalNumber = romanNumeral;

        } else {
            romanNumeral = 1000;
            decimalNumber = romanNumeral;

        }
        return decimalNumber;
    }

};
