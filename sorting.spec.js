//In the spec Omni did, he has all sorts of specs to make sure that the way the Bubble sort happens is actually how Bubble sort is supposed to work, for instance tests to see how many swaps happen.

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array of one item', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });
    it('handles an array with multiple items', function(){
        expect( bubbleSort([1, 7, 4, 9, 2]) ).toEqual( [1, 2, 4, 7, 9] );
    });

    it('handles an array with multiple items', function(){
        expect( bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9] );
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays of same size', function(){
      expect( merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('is able to merge two sorted arrays; first one larger', function(){
      expect( merge([1, 3, 5, 7, 9], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
    });

    it('is able to merge two sorted arrays; second one larger', function(){
      expect( merge([1, 3, 5, 7], [0, 2, 4, 6, 8])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
});

describe('Split Array function', function() {
  it('is able to split an array of even length into two halves', function() {
    expect( split([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([[1, 2, 3, 4], [5, 6, 7, 8]]);
  });
  it('is able to split an array of odd length into two halves', function() {
    expect( split([1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3, 4], [5, 6, 7]]);
  });

});

describe('Merge Sort', function() {
  it('Should work?', function() {
    expect( merge_sort([8, 6, 5, 4, 3, 2, 7, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

for(var i=12; i <= 17; i++) {
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

    console.time(num_items + " bubble");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + " bubble");

    console.time(num_items + " merge");
    merge_sort(m_test_array);
    console.timeEnd(num_items + " merge");
}
