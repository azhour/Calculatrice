
var number = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('operator');
var result ="";
var resultInput = document.getElementById('resultInput');

function value(element){
  result += element;
  resultInput.value = result; // for display value of number on input
  // console.log(result);
}

for (var i = 0; i < number.length; i++) {
  number[i].onclick = function () {
    value(this.value);    // for display number
    // console.log(this.value);
  }
}

for (var i = 0; i < operator.length; i++) {
  operator[i].onclick = function () {
    value(this.value);   // for display operator
  };
}
