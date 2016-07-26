//var string = "Hello";
//string += " World";
//console.log(string + "!");

//console.log(5+6/3);
//console.log(undefined/5);

// Kada se pojavi NAN (not a number) u consoli kao greska, velike su sanse da
// je izostavljen argument
//function test(a) {
//  console.log(a/5);
//}
//test();

//**** If statement (all false)
//Every statement that if will consider fallse (all false)
// Checking in console with Boolean(); wrapper object wich returns true or false
//if(false || null || undefined || "" || 0 || NaN) {
//  console.log("This line won't ever execute");
//}
//else{
//  console.log("All false");
//}
//
////**** If statement (all true)
//if(true && "hello" && 1 && -1 && "false") {
//  console.log("All true");
//}


// ***** Best practice for {} style
// Curly brace on the same or on the next line ...

//function a() 
//{
//  return 
//  {
//    name: "Novak"
//  };
//}
//
//function b() {
//  return {
//    name: "Novak"
//  };
//}
//console.log(a());
//console.log(b());
// BEST WAY IS ON THE SAME LINE.
// IF NOTHING IS AFTER RETURN IT AUTOMATICLY
//ADD SEMICOLON ; AND RETURNS NOTHING


// For loop
//var sum = 0;
//for(var i = 0; i < 10; i++){
//  console.log(i);
//  sum +=i;
//}
//console.log("sum of 0 through 9 is " + sum);

// Default values
//function orderChickenWith(sideDish){
//  sideDish = sideDish || "pasta";
//  //if(sideDish === undefined){
//  //  sideDish = "bread!";
//  //}
//  console.log("Chicken with " + sideDish);
//}
//orderChickenWith("noodles");
//orderChickenWith();

// Object creation
// var company = new Object();
// company.name = "Luq";
// company.ceo = new Object;
// company.ceo.firstName = "Novak";
// company.ceo.lastName = "Lukic";
// company.ceo.favColor = "red";
// var stockPropName = "stock of company";
// company[stockPropName] = 110;
// 
// console.log(company);
// console.log("Company CEO name is: " 
//   + company.ceo.firstName);
// console.log("Stock price is: " 
//   + company[stockPropName]);

// Better way: object literal
//  var facebook = {
//    name: "Facebook",
//    ceo: {
//      firstName: "Novak",
//      favColor: "red"
//    },
//    "stock of company": 110
//  };
//  
//  console.log(facebook);

//  Functions are First-Class Data Types
//  Functions ARE objects
//function multiply (x, y) {
//  return x * y;
//}
//multiply.version = "v.1.0.0";
//
////console.log(multiply(5,3));
//console.log(multiply.version);

// Function factory

//  function makeMultiplier(multiplier) {
//    var myFunc = function(x) {
//      return multiplier * x;
//    };
//    return myFunc;
//  }
//  
//  var multiplyBy3 = makeMultiplier(3);
//  console.log(multiplyBy3(10));
//  
//  var doubleAll = makeMultiplier(2);
//  console.log(doubleAll(100));
//  
//  // Passing functions as arguments
//  function doOperationOn(x, operation) {
//    return operation(x);
//  }
//  var result = doOperationOn(5, multiplyBy3);
//  result = doOperati//onOn(100, doubleAll);
//  console.log(result);

// Copy by Reference vs by Value
//** var a = 7;
//** var b = a;
//** console.log("a: " + a);
//** console.log("b: " + b);
//** 
//** b = 5;
//** console.log("After b update:");
//** console.log("a: " + a);
//** console.log("b: " + b);

//  var a = {x: 7};
//  var b = a;
//  
//  console.log(a);
//  console.log(b);
//  
//  b.x = 5;
//  console.log("After b.x update:");
//  console.log(a);
//  console.log(b);

// Pass by reference vs by value
// function changePrimitive(primValue) {
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(primValue);

//   primValue = 5;
//   console.log("after:");
//   console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig vale:");
// console.log(value);


// function changeObject(objValue) {
  // console.log("in changeObject...");
  // console.log("before:");
  // console.log(objValue);
// 
  // objValue.x = 5;
  // console.log("after:");
  // console.log(objValue);
// }
// 
// var value = {x: 7};
// changeObject(value);
// console.log("after changeObject, orig vale:");
// console.log(value);

// Function constructors
// function Circle (radius) {
  // this.radius = radius;
// }
// Circle.prototype.getArea =
    // function () {
      // return Math.PI * Math.pow(this.radius, 2);
    // }
// 
// var myCircle = new Circle(10);
// console.log(myCircle);
// 
// var myCircle2 = new Circle(20);
// console.log(myCircle2);

// Object literals and "this"
var literalCircle = {
  radius: 10,

  getArea: function(){
    var self = this;
    console.log(this);

    var increaseRadius = function() {
      self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);
    return Math.PI * Math.pow(this.radius, 2)
  }
};

console.log(literalCircle.getArea());