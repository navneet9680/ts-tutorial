// let id: number = 5;
// console.log("ID:", id);

let id: number = 5;
let company: string = "traversy media";
let ispublished: boolean = true;
let x: any[] = [1, true, "hello"];

let ids: number[] = [5, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];
// tuple
let person: [number, string, boolean] = [1, "brad", true];
// tuple array
let employee: [number, string][];
employee = [
  [1, "brad"],
  [2, "blad"],
  [3, "byad"],
];
// union
let pid: string | number;
pid = 22;
// enum
enum direction {
  up,
  down,
  left,
  right,
}

//objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "irfan",
};

// type assertion
let cid: any = 1;
let customerid = cid as number;

// functions
function addnum(x: number, y: number): number {
  return x + y;
}
console.log(addnum(1, 2));

// interfaces
interface userinterface {
  id: number;
  name: string;
}
const user1: userinterface = {
  id: 1,
  name: "jp",
};
// clASSES
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
const brad = new Person(1, "brad");
// brad.id = 5;
console.log(brad);

// generics
function getarray(items: any[]): any[] {
  return new Array().concat(items);
}
// let numarray : any[]
let numarray = getarray([1, 2, 3, 4]);
let strarray = getarray(["brad", "mona", "jill"]);
numarray.push("hello");
