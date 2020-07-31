import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";

//Create an object that satifies the DataReader interface
const csvFileReader = new CSVFileReader("football.csv");

//Create new instance of MatchReader and pass in something that satisfies the
//"DataReader" interface
//Allows for customization of where MatchReader gets its information from
const matchReader = new MatchReader(csvFileReader);

// enum - enumeration
// set of very closely related values
// follows very indentical syntax to normal objects
// when converted from TS to JS, creates an object with same keys and values
// primary goal is to signal to other engineers that theses are closely related values
// use whenever we have smalled fixed set of values that are closely realted and known at compile time

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
