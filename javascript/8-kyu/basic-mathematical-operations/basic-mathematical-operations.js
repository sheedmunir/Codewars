function basicOp(operation, value1, value2){
  
  let resultValue;
  switch(operation){
      case '+':
        resultValue = value1 + value2;
      break;
      case '-':
      resultValue = value1 - value2;
      break;
      case '*':
     resultValue = value1 * value2;
      break;
      case '/':
     resultValue = value1 / value2;
      break;
      default:
      return "invalid";
​
  }
​
  
  
  return resultValue;
  
}