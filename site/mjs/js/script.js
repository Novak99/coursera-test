// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// function loadFruits(){
//   document.getElementById("fruits").innerHTML = fruits;
// }

// function addFruit() {
//   var fruit = prompt("What is your favorite fruit?");
//   //fruits[fruits.length] = fruit;
//   fruits.push(fruit);
//   //document.getElementById("fruits").innerHTML = fruits;
//   loadFruits();
// }
// function removeFruit() {
//   fruits.pop();
//   loadFruits();
// }
// function removeFirstFruit() {
//   fruits.shift();
//   loadFruits();
// }

// var grades = [80, 87, ,'test' , , 98, 81, 81, 74, 91];
// var sum = 0;
// var count = 0;
// if(grades.length>0){
//   for(var i = 0; i < grades.length; i++) {
//     //if(grades[i] != undefined){
//     if(typeof grades[i] == "number"){
//      sum += grades[i];
//      count ++; 
//     }
//   }
//   //alert(sum/count);
// }
// else{
//   //alert("There is no numbers!");
// }
// var pass1= document.getElementById("pass1");
// var pass2= document.getElementById("pass2");
// function check(){
//   if (pass1.value != pass2.value){
//     alert("The password does not match");
//     return false;
//   }
// }

// function nickName() {
//   if(document.getElementById('yesnick').checked){
//     document.getElementById('nick').style.display='inline-block';
//     document.getElementById('nickname').setAttribute('required', true);
//   }
//   else {
//     document.getElementById('nick').style.display='none';
//     document.getElementById('nickname').removeAttribute('required');
//   }
// }

function billingFunction() {
  var name = document.getElementById('shippingName').value;
  var zip = document.getElementById('shippingZip').value;
  if(document.getElementById('same').checked){
    document.getElementById('billingName').setAttribute('value', name);
    document.getElementById('billingZip').setAttribute('value', zip);
  }
  else {
    document.getElementById('billingName').removeAttribute('value');
    document.getElementById('billingZip').removeAttribute('value');
  }
}