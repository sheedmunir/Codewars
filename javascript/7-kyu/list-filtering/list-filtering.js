function filter_list(l) {
  
  const newArr=[];
  l.forEach((key) => {
    if( typeof key === 'number' ){
      newArr.push(key);
    }
  })
​
​
  return newArr;
}