//1. Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    var maxNum = Math.max.apply(null,arr);

    var minNum = Math.min.apply(null, arr);

    var range = maxNum - minNum;

    var total = 0;

    for(var i=1; i<range; i++){
        total = total + minNum + i;
    }
    total = total + maxNum + minNum;
    
    return total;
  }
  
  sumAll([1, 4]);


  
//   2. Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.
function diff(arr1, arr2) {
    var holderArray = [];

      for(var i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1){
          holderArray.push(arr1[i]);
        }
      }
    
      for(var j = 0; j < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
          holderArray.push(arr2[j]);
        }
      }
    return holderArray;
   
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//   Bonfire: Where art thou
function where(collection, source){

    var arr = colelction.filter(function(item){

        for(var i in source){

            if(source[i]! =item[i]){
                return false;
            }
        }
        return true;
    });
    return arr;
}

where([{ first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null }, {first: "Tybalt", last: "Capulet" }], { last: "Capulet"});