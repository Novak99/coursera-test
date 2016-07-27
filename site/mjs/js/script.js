var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits(){
  document.getElementById("fruits").innerHTML = fruits;
}

function addFruit() {
  var fruit = prompt("What is your favorite fruit?");
  //fruits[fruits.length] = fruit;
  fruits.push(fruit);
  //document.getElementById("fruits").innerHTML = fruits;
  loadFruits();
}
function removeFruit() {
  fruits.pop();
  loadFruits();
}
function removeFirstFruit() {
  fruits.shift();
  loadFruits();
}

var grades = [80, 87, ,'test' , , 98, 81, 81, 74, 91];
var sum = 0;
var count = 0;
if(grades.length>0){
  for(var i = 0; i < grades.length; i++) {
    //if(grades[i] != undefined){
    if(typeof grades[i] == "number"){
     sum += grades[i];
     count ++; 
    }
  }
  //alert(sum/count);
}
else{
  //alert("There is no numbers!");
}

var pass1= document.getElementById("pass1");
var pass2= document.getElementById("pass2");
function check(){
  if (pass1.value != pass2.value){
    alert("The password does not match");
    return false;
  }
}