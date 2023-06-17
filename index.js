// [2,11,7,15];

function twoSum (nums, target) {
    
    let result = false;
    
    for (let i=0; i< nums.length ; i++){ 
  
        let firstCompare = nums[i]
  
        for (let j=i+1; j< nums.length; j++){
         
          let secondCompare = nums[j]
  
          if (firstCompare + secondCompare===target){
         
           console.log (`firstCompare; ${firstCompare}`);
           console.log (`secondCompare; ${secondCompare}`);
           result = true;
           } 
          }
      }

    return result;
  };

let numbersArray = [2,11,7,15];
let targetNumber = 27;

let answer = twoSum(numbersArray, targetNumber);

// console.log(answer)


function threeSum (nums, target) {
    
    for (let i=0; i< nums.length ; i++){ 
  
        let firstItem = nums[i]
  
        for (let j=i+1; j< nums.length; j++){
         
          let secondItem = nums[j]
        
          for (let k = j+1; k<nums.length; k++){

            let thirdItem = nums[k]

            if (firstItem + secondItem + thirdItem === target){
         
                console.log (`firstCompare; ${firstItem}`);
                console.log (`secondCompare; ${secondItem}`);
                console.log (`thirdCompare; ${thirdItem}`);
                
                return [i,j,k];
                }
          }
 
        }
      }

    return "No numbers found";
  };

let numbersArray2 = [2,11,7,15,10,16,15,1,3];
let targetNumber2 = 370;

let answer2 = threeSum(numbersArray2, targetNumber2);

console.log(answer2)


// #################################################
// #################################################
// #################################################
// ############### SECOND PROBLEM ##################
// #################################################
// #################################################
// #################################################

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



// #################################################
// #################################################
// #################################################
// ########### SWITCH STATEMENTS EXAMPLE ###########
// #################################################
// #################################################
// #################################################

// //switch statements

// let password = 12;

// if (password === 14){
//     console.log("The password is 14");
// } else if (password === 13){
//     console.log("The password is 13");
// } else if (password === 12){
//     console.log("The password is 12");
// } else{
//     console.log("Invalid password");
// } 

// switch (password) {

//     case 14: console.log("The password is 14");
//         break;
//     case 13: console.log("The password is 13");
//         break;
//     case 12: console.log("The password is 12");
//         break;
//     default: console.log("Invalid password");
//         break;
// }

