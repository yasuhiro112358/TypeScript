"use strict";

{
  // TypeScript Types
  let greeting: string = "Hello, TypeScript!";
  let x: number = 5;
  let isLoggedIn: boolean = true;
  let y: undefined = undefined;
  let z: null = null;

  // Union Type
  let keyword: string | number; // Union Type
  keyword = "milk";
  keyword = 5;

  // Literal Type
  let taxRate: 0.1 | 0.2 | 0.3; // Literal Type
  let myEmail: "hiro@sample.com" | null; // Literal Type
  let result: "Pass" | "Fail"; // Literal Type

  // Type Alias
  type ResultStatus = "Pass" | "Fail"; // Type Alias
  let englishResult: ResultStatus;
  let mathResult: ResultStatus;

  // Array Type
  const scores: number[] = [80, 90, 100]; // Array Type
  scores[1] = 85; // OK
  // scores[1] = '85'; // Error
  scores.push(70); // OK
  // scores.push('60'); // Error

  const values: (string | number)[] = ["apple", 5, "orange", 10]; // Union Type

  // Readonly Array
  const languages: readonly string[] = [
    "JavaScript",
    "TypeScript",
    "Ruby",
    "Python",
  ]; // Readonly Array
  // languages[1] = 'Java'; // Error
  // languages.push('Go'); // Error

  // Tuple Type
  let book: [string, number, boolean]; // Tuple Type
  book = ["JavaScript", 200, true]; // OK
  // book = ['JavaScript', 200]; // Error
  // book = ['JavaScript', 200, true, 'TypeScript']; // Error

  // Object Type
  let user: { name: string; age: number }; // Object Type
  user = { name: "Hiro", age: 35 }; // OK

  // Nested Object Type
  let product: {
    id: number;
    name: string;
    price: number;
    details: { description: string; rating: number };
  }; // Nested Object Type
  product = {
    id: 1,
    name: "Book",
    price: 2000,
    details: { description: "This is a book.", rating: 4.5 },
  }; // OK

  // Optional Property
  let person: { name: string; age?: number }; // Optional Property
  person = { name: "Hiro" }; // OK
  person = { name: "Hiro", age: 35 }; // OK

  // Interface
  interface User {
    readonly name: string;
    age: number;
  }
  let customer: User;
  customer = { name: "Hiro", age: 35 }; // OK
  // customer.name = 'Ken'; // Error

  // Function Type
  function double(num: number): number {
    return num * 2;
    // return 'OK'; // Error
  }
  double(5); // OK
  // double('10'); // Error

  function printUserName(user: { name: string }): void {
    console.log(user.name);
    // return 'OK'; // Error
  }
  printUserName({ name: "Hiro" }); // OK
  // printUserName({ age: 35 }); // Error

  const triple = (num: number): number => {
    return num * 3;
    // return 'OK'; // Error
  };
  triple(5); // OK
  // triple('10'); // Error

  let greet: (name: string) => void; // Function Type
  greet = (name: string) => {
    console.log(`Hello, ${name}!`);
  }; // OK
  // greet = (age: number) => { // Error
  //   console.log(`Hello, ${age}!`);
  // };

  // Function Signature
  type Greet = (name: string) => void; // Function Signature
  let sayHello: Greet;
  sayHello = (name: string) => {
    console.log(`Hello, ${name}!`);
  }; // OK
  // sayHello = (age: number) => { // Error
  //   console.log(`Hello, ${age}!`);
  // };

  // Generics
  function printTwice<T>(value: T): void { // T is a type parameter
    console.log(value);
    console.log(value);
  }
  printTwice<string>("Hello, Generics!"); // OK
  printTwice<number>(100); // OK
  // printTwice<string>(100); // Error
}
