// Defines type functions as well

let greet: Function;

greet = () => {
  console.log("Hello World");
};

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a - b;
};

// variable will become the type that is returned from function
let result = minus(3, 5);
