// Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean;

// Arrays
let ninjas: string[];
let cooks: boolean[];
let friends: number[] = [];

friends.push(4);

// Union Types
let mixedArray: (string | number | boolean)[];

let uid: string | number;
uid = "John";
uid = 123;

// Objects
let ninjaOne: object;
ninjaOne = { name: "Bob", age: 30 };
ninjaOne = [];

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};
