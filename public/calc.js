$(document).ready(function(){
  var numbers = [];
  var operations = [];
  var newEntry = true;
  var noDecimal = true;

  $('.operator').click(handleOperator);
  $('.number').click(hadleNumber);
  $(document).keypress(handleKeypress);

  function handleKeypress(ev){
    if(!isNaN(ev.key)){
      console.log(ev.key);
      if(newEntry){
        $('#display').text("");
        newEntry = false;
        noDecimal = true;
      }
      var screenVal = $('#display').text();
      $('#display').text(screenVal + ev.key);
    }
  }
  function hadleNumber() {
    if(newEntry){
      $('#display').text("");
      newEntry = false;
      noDecimal = true;
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
        newEntry = true;
        operations.push("/")
        break;
      case 'multiply':
        addNumber();
        newEntry = true;
        operations.push("*");
        break;
      case 'subtract':
        addNumber();
        newEntry = true;
        operations.push("-");
        break;
      case 'add':
        addNumber();
        newEntry = true;
        operations.push("+");
        break;
      case 'decimal':
        if(!newEntry && noDecimal){
          var screenVal = $('#display').text();
          $('#display').text(screenVal + ".");
          noDecimal = false;
        }
        break;
      case 'equals':
        addNumber();
        operations.push("=");
        runOperations();
        numbers = [];
        operations = [];
        newEntry = true;
        noDecimal = true;
        break;

    }
  }
  function addNumber(){
    numbers.push(parseFloat($('#display').text()));
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
