function bubbleSort(arr) {
  if(arr.length <= 1) {
    return arr.length === 1 ? arr : [];
  }

  var counter = arr.length-1;
  while(counter > 0) {
    for(var i = 0; i < arr.length-1; i++) {
      if(arr[i] > arr[i+1]) {
        var num = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = num;
      }
    }
    counter--;
  }
  return arr;
}
