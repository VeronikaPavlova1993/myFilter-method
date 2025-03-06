function myFilter(arr, callbackFunction) {
 let newFilterArray = [];

 arr.map((item) => {
  if (callbackFunction(item)) {
   newFilterArray.push(item);
  }
 });

 return newFilterArray;
};
