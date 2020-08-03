"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CSVFileReader_1 = require("./CSVFileReader");
//Create an object that satifies the DataReader interface
var csvFileReader = new CSVFileReader_1.CSVFileReader("football.csv");
//Create new instance of MatchReader and pass in something that satisfies the
//"DataReader" interface
//Allows for customization of where MatchReader gets its information from
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// enum - enumeration
// set of very closely related values
// follows very indentical syntax to normal objects
// when converted from TS to JS, creates an object with same keys and values
// primary goal is to signal to other engineers that theses are closely related values
// use whenever we have smalled fixed set of values that are closely realted and known at compile time
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === "H") {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
