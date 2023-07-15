// Problem #1 :

// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time Complexity: O(N)

// Sample Input:
    // sameFrequency(182,281) true
    // sameFrequency(34,14) false
    // sameFrequency(3589578, 5879385) true
    // sameFrequency(22,222) false

function sameFrequency(num1, num2){
    const obj1 = {}
    const strArr1 = num1.toString().split('')
    const strArr2 = num2.toString().split('')

    if(strArr1.length !== strArr2.length) return false
    
    for(let num of strArr1){
        obj1[num] = ++obj1[num] || 1
    }

    for(let num of strArr2){
        if(!obj1[num]){
            return false
        }
        obj1[num]--
    }

    for(let num of strArr1){
        if(obj1[num]){
            return false
        }
        return true
    }
  }

// Problem #2

// Frequency Counter - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time Complexity - O(n)
// Space Complexity - O(n)

  function areThereDuplicates1(...args) {
   const obj = {}

   for(let item of args){
       obj[item] = ++obj[item] || 1
   }
   for(let key in obj){
       if(obj[key] > 1) return true
   }
       return false
  }

//   Same problem as above, this time using Multiple Pointers :

function areThereDuplicates2(...args) {
    args.sort();
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  // Problem #3

//   Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time Complexity: O(N)

// Space Complexity: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, target){
    if(arr.length < 2) return false
    
    let start = 0;
    let end = arr.length - 1;
    
    while(start < end){
        let sum = arr[start] + arr[end] / 2
        if(sum < target) {
            start++
        } else if( sum > target){
            end--
        } else return true
    }
    return false
  }