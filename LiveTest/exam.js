//Q1
// const input = 'Hi';

// function remove(X) {
//     let splitStr = input.split('');
//     let lastIndex = splitStr.length-1
//     if (splitStr[lastIndex] === '!') {
//         splitStr.pop()
//     }
//     return splitStr.join('')
// }
// console.log(remove(input));

//Q2
// const input = 123;
// function sum(num) {
//     let splitNum = num.toString().split('')
//     let sumNum = 0
//     for (let i = 0; i < splitNum.length; i++) {
//         let total = splitNum[i] ** (i+1) 
//         sumNum += total
//     }
//     return sumNum
// }
// console.log(sum(input));

//Q3
const input1 = [1, 2, 3]
const input2 = [100, 2, 1, 10];
let ans = [];

input1.forEach(x =>{
    if (input2.includes(x)) {
        
    }
    else{
        ans.push(x)
    }
})
input2.forEach(y => {
    if (input1.includes(y)){

    }
    else{
        ans.push(y)
    }
})
ans.sort((a, b) => a - b);
console.log(ans);
//Ans2. Q3
// function diffArray(array1, array2) {
// //   const longestArray = array1.length - array2.length > 0 ? array1 : array2;

// //   const longestArray2 = [];
// //   if (array1.length - array2.length > 0) {
// //     longestArray2 = array1;
// //   } else {
// //     longestArray2 = result2;
// //   }

//   const result1 = array1.filter((i) => !array2.includes(i));
//   const result2 = array2.filter((i) => !array1.includes(i));
//   const output = result1.concat(result2);
//   return output.sort((a, b) => a - b);
// }

// diffArray([1, 2, 3],[100, 2, 1, 10]);
