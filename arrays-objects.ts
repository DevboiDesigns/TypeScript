// ----------------------- Arrays
let names = ["luigi", "mario", "yoshi"];
names.push("toad");
//names.push(34)
//names[0] = false

//names = "Tim";

let numbers = [10, 20, 30, 40];
numbers.push(24);
//numbers.push('shaun')
//numbers[1] = false

// can contain mixed arrays if defined that way
let mixed = ["ken", 4, "chun li", 8, 9, false];
mixed.push("ryan");
mixed.push(true);
mixed[0] = 35;

// ----------------------- Objects
// properties can not change types
let ninja = {
  name: "Steve",
  belt: "black",
  age: 30,
};


// can re-assign object but all properties must match 
ninja = {
  name: 'John',
  belt: 'orange',
  age: 40
}
