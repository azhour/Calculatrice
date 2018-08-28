// var number1 = document.getElementsByClassName("number");
// var result1 = document.getElementById("result");
// var operator= document.getElementsByClassName("operator");
// var number2 = "";
//
//
// function functionName(element) {
// result1.innerHTML = element.value;
// }
//
//
//
// for (var i = 0; i < number1.length; i++) {
// return number1[i]
// }
//
// for (var i = 0; i < operator.length; i++) {
//   return operator[i]
// }

var number = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('operator');
var result ="";
var resultInput = document.getElementById('resultInput');

function value(element){
  result += element.innerHTML;
  resultInput.innerHTML = result;
}

for (var i = 0; i < number.length; i++) {
  number[i].onclick = function () {
    value(element);
  };
}

for (var i = 0; i < operator.length; i++) {
  operator[i].onclick = function () {
    value(element);
  };
}






// number1[0].onclick = function(){
//   functionName(this);
// };
//
// number1[1].onclick = function(){
//   functionName(this);
// };
//
// number1[2].onclick = function(){
//   functionName(this);
// };
