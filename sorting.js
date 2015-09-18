function bubbleSort(arr) {
  if(arr.length <= 1) { return arr; }

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
  var a1 = [].concat(arr1);
  var a2 = [].concat(arr2);
  var tempArray = [];

  while (a1.length) {
    if(a1[0] > a2[0]) tempArray.push(a2.shift());
    else tempArray.push(a1.shift());
  }
  return tempArray = tempArray.concat((a1 = a1.concat(a2)));
}

function split(wholeArray) {
  var firstHalf = [];
  var secondHalf = [];

  var halfWay = wholeArray.length / 2;
  for (var i = 0; i < wholeArray.length; i++) {
    if(i < halfWay) {
      firstHalf.push(wholeArray[i]);
    } else {
      secondHalf.push(wholeArray[i]);
    }
  }
  return [firstHalf, secondHalf];
}

function merge_sort (array) {

  if (array.length <= 1) { return array; }

  var leftList = split(array)[0];
  var rightList = split(array)[1];

  leftList = merge_sort(leftList);
  rightList = merge_sort(rightList);

  return merge(leftList, rightList);

}
