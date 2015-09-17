

describe('Bubble Sort', function(){
    xit('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    xit('handles an array of one item', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });
    xit('handles an array with multiple items', function(){
        expect( bubbleSort([1, 7, 4, 9, 2]) ).toEqual( [1, 2, 4, 7, 9] );
    });

    it('handles an array with multiple items', function(){
        expect( bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9] );
    });

    xit('Compare with native sort', function() {
      expect( ([9, 8, 7, 6, 5, 4, 3, 2, 1].sort()) ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9] );
    });
});
