function arrayPlusArray(arr1, arr2) {
  
  let sum = 0;
  
  arr1.forEach((element) => sum += element );
  arr2.forEach((element) => sum += element );
​
  return sum;
  
  }