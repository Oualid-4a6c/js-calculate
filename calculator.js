function bereken() {
  var nummer = document.getElementById('numbers').value;
  var split = nummer.split(",");
  var operator = document.getElementById('operation').value;
  var result = "";

  for (i = 0; i < split.length; i++) {
    split[i] = parseFloat(split[i])
  };

  var result = split[0];
  for (var i=1; i < split.length; i++) {
      result = reken(result, split[i], operator);
  };

  function calculate(nbrOne, nbrTwo, operator) {
      if (operator == '+') {
          result = nbrOne + nbrTwo;
      } else if (operator == '-') {
          result = nbrOne - nbrTwo;
      } else if (operator == '*') {
          result = nbrOne * nbrTwo;
      } else if (operator == '/') {
          result = nbrOne / nbrTwo;
      }
      return result;
    }
      document.getElementById('result').innerHTML = result;

};
