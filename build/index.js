"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
// enum - enumeration
// set of very closely related values
// follows very indentical syntax to normal objects
// when converted from TS to JS, creates an object with same keys and values
// primary goal is to signal to other engineers that theses are closely related values
// use whenever we have smalled fixed set of values that are closely realted and known at compile time
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === "H") {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
