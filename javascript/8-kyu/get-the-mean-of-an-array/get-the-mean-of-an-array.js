function getAverage(marks){
  
  const total = marks.length;
  var mean = 0;
  for(var i = 0;i<total;i++){
    mean+=marks[i];
  }
  const average = mean/total;
  const rounded = Math.floor(average);
  return rounded;
      
}