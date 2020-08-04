import { CSVFileReader } from "./CSVFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

//This utilizes an inheritance approach to solving the problem
//Inheritance follows an "IS A" relationship between the two classes

//structure of the row in CSV file after modify all types from string
type MatchData = [Date, string, string, number, number, MatchResult, string];

//passing MatchData types defined above as argument to class (generics)
export class MatchReader extends CSVFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // "H", "A", "D"
      row[6],
    ];
  }
}
