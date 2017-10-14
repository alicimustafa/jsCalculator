$(document).ready(function(){
  var numbers = [];
  var operations = [];
  var newEntry = true;

  $('.operator').click(handleOperator);
  $('.number').click(hadleNumber);

  function hadleNumber() {
    console.log(newEntry);
    if(newEntry){
      $('#display').text("");
      newEntry = false;
    }
    var screenVal = $('#display').text();
    $('#display').text(screenVal + this.id);
  }
  function handleOperator() {
    switch (this.id) {
      case 'clear':
        $('#display').text("");
        numbers = [];
        operations = [];
        break;
      case 'divide':
        addNumber();
        $('#display').text("");
        operations.push("/")
        break;
      case 'multiply':
        addNumber();
        $('#display').text("");
        operations.push("*");
        break;
      case 'subtract':
        addNumber();
        $('#display').text("");
        operations.push("-");
        break;
      case 'add':
        addNumber();
        $('#display').text("");
        operations.push("+");
        break;
      case 'equals':
        addNumber();
        operations.push("=");
        runOperations();
        numbers = [];
        operations = [];
        newEntry = true;
        break;

    }
  }
  function addNumber(){
    numbers.push(parseInt($('#display').text()));
  }
  function runOperations(){
    var total = numbers[0];
    for (var i = 0; i < numbers.length-1; i++) {
      total = doMath(total, numbers[i+1],operations[i]);
    }
    $('#display').text(total);
  }

  function doMath(num1, num2, op){
    var total;
    switch (op) {
      case '-':
        total = num1 - num2;
        break;
      case '+':
        total = num1 + num2;
        break;
      case '/':
        total = num1 / num2;
        break;
      case '*':
        total = num1 * num2;
        break;
    }
    return total;
  }

});
