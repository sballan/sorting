

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
    it('is able to merge two sorted arrays', function(){
      expect( merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
