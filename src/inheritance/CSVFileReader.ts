import fs from "fs";

//T is common practice for generic types
//makes CSVFileReader reusable because structure of row can be passed in
//depending on the CSV file
export abstract class CSVFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  //abstract method to allow any row type strcture
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
