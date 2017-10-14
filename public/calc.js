$(document).ready(function(){
  var numbers = [];
  var operations = [];
  $('.operator').click(handleOperator);
  $('.number').click(hadleNumber);

  function hadleNumber() {
    console.log(this.id);
    var screenVal = $('#display').text();
    $('#display').text(screenVal + this.id);
  }
  function handleOperator() {
    console.log(this.id);
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
        break;

    }
  }
  function addNumber(){
    numbers.push(parseInt($('#display').text()));
    console.log(numbers);
  }
  function runOperations(){
    var total = numbers[0];
    console.log(total);
    for (var i = 0; i < numbers.length-1; i++) {
      total = doMath(total, numbers[i+1],operations[i]);
    }
    console.log(total);
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
