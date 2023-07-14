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