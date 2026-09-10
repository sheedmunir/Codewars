function positiveSum(arr) {
  
  const number = arr.length;
  let sum = 0;
  for (var i = 0;i<number;i++){
    if(arr[i]>0){
      sum+=arr[i];
    }
    else{
      //skip or do nothing
    }
    
    
  }
  return sum;
}