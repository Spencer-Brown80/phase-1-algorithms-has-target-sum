


function hasTargetSum(array, target) {
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = i + 1; j <= array.length; j++) {
       if (array[i] + array[j] === target) {
        return true;
       }
    }
  }    

      return false
      
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/ 
// (1,2,3,4,5)
// 1 = 1:2, 1:3, 1:4, 1:5
// 2 = 2:3, 2:4, 2:5
// 3 = 3:4, 3:5
// 4 = 4:5

// i = 0, i < array.length, i++
// j = i + 1, j < array.length, j++

// Return sums into another array
// compare sums to target 


// create variables to make function work
    //first number to add
    //second number to add
    //target number

// create function to iterate over array and select numbers a and b regardless of array size
// function cannot add two of the same number
// return an if then at end of the function

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
