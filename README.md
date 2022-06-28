# TypeScript 101

- Alternative to JavaScript (superset - extends language)
- Gets compiled to JS for browsers
- Allows us to use strict types
- Supports modern features (arrow functions, let, const)
- Extra features (generics, interfaces, tuples, etc)

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
