# TypeScript 101

- Alternative to JavaScript (superset - extends language)
- Gets compiled to JS for browsers
- Allows us to use strict types
- Supports modern features (arrow functions, let, const)
- Extra features (generics, interfaces, tuples, etc)
- cleaner & more predictable

**Install**

`npm install -g typescript`

## Compiling

1. file extension `.ts`
2. terminal - `tsc nameOfFile.ts nameOfJSFile.js` (to compile to `JS`)
   - if names of files are identical can leave off `JS` file entirely
   - if `JS` file does not excist it will create for you
3. Error will show if both `JS` & `TS` files are open at same time (close `JS` file)

**run compiler on watched changes for set file**

`tsc nameOfFile.ts -w`

## Syntax

- basically the same as `JS`
- only one Numnber type
- types can not change
- uses type inference (assumes type)
- has access to all methods that `JS` has

**defining types**

- similar to `Swift`
- `diameter: number`

1.  `number`
2.  `string`
3.  `boolean`

```ts
const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));
```

### Mixed Arrays

- can contain mixed arrays if defined that way

```ts
let mixed = ["ken", 4, "chun li", 8, 9, false];
mixed.push("ryan");
mixed.push(true);
mixed[0] = 35;
```

### Objects

- properties can not change types

```ts
let ninja = {
  name: "Steve",
  belt: "black",
  age: 30,
};
```

- can re-assign object but **all** properties must match
- same as `Swift`
- can not add a new properties to initial structure

```ts
ninja = {
  name: "John",
  belt: "orange",
  age: 40,
};
```

### Explicit Types

- defining types

```ts
let character: string;
let age: number;
let isLoggedIn: boolean;
```

**Arrays**

```ts
let ninjas: string[];
let cooks: boolean[];

// ------------------------ Initializing arrays
let friends: number[] = [];

friends.push(4);
```

**Union Types**

```ts
let mixedArray: (string | number | boolean)[] = [];
```

```ts
let uid: string | number;
uid = "John";
uid = 123;
```

**Objects**

```ts
let ninjaOne: object;
ninjaOne = { name: "Bob", age: 30 };
// can be re-assigned as Array
ninjaOne = [];
```

**other method / more secure**

- same as `Swift`

```ts
let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};
```

### Dynamic Types (any)

- type `any`
- reverts TypeScript back to JavaScript
- think twice before using

```ts
let age: any = 25;
age = "String";
age = true;

age = { name: "Tim" };
```

**Arrays**

```ts
let mixedArray: any[] = [];
mixedArray.push("Masrio");
mixedArray.push(34);
mixedArray.push(false);
```

**Objects**

```ts
let ninja: { name: any; age: any };
```

### Functions

- Defining Function types

```ts
let greet: Function;

greet = () => {
  console.log("Hello World");
};
```

#### Optionals

- optionals and defaults should always be at the end of parameters

- `?` at end of parameter name

```ts
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};

add(5, 10);
```

**Default Param**

```ts
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

// returns type (void)
add(5, 10);
```

**Type Inference**

```ts
const minus = (a: number, b: number) => {
  return a - b;
};

// variable will become the type that is returned from function
let result = minus(3, 5);
```

**can explicitly define return type**

```ts
const minus = (a: number, b: number): number => {
  return a - b;
};
```

## Workflow - tsconfig

- `tsc -init`
- set root directory in [tsconfig.json](tsconfig.json) `"rootDir": "./src"`
- set out directory in [tsconfig.json](tsconfig.json) `"outDir": "./public"`

**watch **ALL** files**

`tsc -w`

- if added to very end of `tsconfig` file, will only compile `TS` files found in src folder

```json
  },
    "include": ["src"]
}
```
