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

function merge(arr1, arr2) {
  var pointer1 = 0;
  var pointer2 = 0;
  var tempArray = [];

  while(pointer1 < arr1.length || pointer2 < arr2.length) {
    if (!!arr1[pointer1] || !!arr2[pointer2]) {
      if (arr1[pointer1] > arr2[pointer2]) {
        tempArray.push(arr2[pointer2]);
        pointer2++;
      }

      if (arr1[pointer1] <= arr2[pointer2]){
        tempArray.push(arr1[pointer1]);
        pointer1++;
      }
    }
    //
    // if(!arr1[pointer1] || !arr2[pointer2]) {
    //
    // }


  }

  return tempArray;
}
