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
//Interesting method of BubbleSoring - using the
//boolean switch to see when the last swap happened.

/*
function FSbubbleSort(arr) {
  //***VERY CLEVER***
  //since we return arr, we can return other data along with it.

  //At the same time, as a general rule we should not change our
  //function just for the sake of testing it, and in this case
  //numSwaps is only useful for testing purposes.  FS2bubbleSort has
  //an interesting way to deal with this.
  arr.numSwaps = 0;
  var swapHappenedLastTime = true;

  while(swapHappenedLastTime) {
    swapHappenedLastTime = false;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]) {
        swapHappenedLastTime = true;
        var oldElem = arr[i];
        varr[i] = arr[i+1];
        arr[i+1] = oldElem;
        arr.numSwaps++;
      }
    }
  }
  return arr;
}
*/

// function swap(arr, index1, index2) {
//   var oldElem = arr[i];
//   arr[i] = arr[i+1];
//   arr[i+1] = oldElem;
// // }
// function FS2bubbleSort(arr) {
//
//   arr.numSwaps = 0;
//   var swapHappenedLastTime = true;
//
//   while(swapHappenedLastTime) {
//     swapHappenedLastTime = false;
//     for(var i = 0; i < arr.length; i++) {
//       if(arr[i] > arr[i+1]) {
//         swapHappenedLastTime = true;
//         swap(arr, i, i+1);
//       }
//     }
//   }
//   return arr;
// }

//******* This was the first Merge() that we made.  It was slow.*******
// function mergeOld(arr1, arr2) {
//   var a1 = [].concat(arr1);
//   var a2 = [].concat(arr2);
//   var tempArray = [];
//
//   while (a1.length) {
//     if(a1[0] > a2[0]) tempArray.push(a2.shift());
//     else tempArray.push(a1.shift());
//   }
//   return tempArray = tempArray.concat((a1 = a1.concat(a2)));
// }

function merge(arr1, arr2) {
  var tempArray = [];
  var p1 = 0, p2 = 0;

  while (p1 < arr1.length) {
    if(arr1[p1] > arr2[p2]) {
      tempArray.push(arr2[p2]);
      p2++;
    } else {
      tempArray.push(arr1[p1]);
      p1++;
    }
  }

  if(arr2.length >= p2) {
    for(var i = p2; i < arr2.length; i++) {
      tempArray.push(arr2[p2]);
    }
  }

  return tempArray;
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

function FSsplit(arr) {
  var middle = arr.length / 2;
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);
  for (var i = 0; i < arr.length; i++) {
    left.push(arr[i]);
  }
  return [left, right];
}

function merge_sort (array) {
  if (array.length <= 1) { return array; }

  var leftList = split(array)[0];
  var rightList = split(array)[1];

  leftList = merge_sort(leftList);
  rightList = merge_sort(rightList);

  return merge(leftList, rightList);

}

function FSmerge_sort(array) {
  var sorted = [];


  return sorted;
}



for(var i=20; i <= 50; i++) {
    var num_items = Math.pow(2,i);
    var native_test_array = [];
    var b_test_array = [];
    var m_test_array = [];
    for(var j=0; j < num_items; j++) {
        var rand = Math.floor(Math.random() * num_items);
        native_test_array.push(rand);
        b_test_array.push(rand);
        m_test_array.push(rand);
    }

    console.time(num_items + " native");
    native_test_array.sort(function(a,b){ return a-b; });
    console.timeEnd(num_items + " native");

    // console.time(num_items + " bubble");
    // bubbleSort(b_test_array);
    // console.timeEnd(num_items + " bubble");

    console.time(num_items + " merge");
    merge_sort(m_test_array);
    console.timeEnd(num_items + " merge");
}
