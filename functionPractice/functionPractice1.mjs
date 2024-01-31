// import PromptSync from "prompt-sync";
// import {promt} from PromptSync
// const prompt = PromptSync();
// Practice Question No 1

// let numbers = [];
// for (let i = 50; i <= 110; i++){

//        numbers.push(i);
// }
// console.log(numbers);
// let studentPercentage = numbers.filter((value)=>{

//     return value > 90 && value < 100;

// })

// console.log(studentPercentage);

//Practice Question No 2

let userInput = Number(prompt("Enter Your Number" + " "));
// console.log(userInput);

while (!userInput) {
  console.log("Please Enter Number Only");
  userInput = Number(prompt("Enter Your Number" + " "));
}
let userNumbers = [];
for (let i = 1; i <= userInput; i++) {
  userNumbers.push(i);
}
console.log(userNumbers);

let sum = userNumbers.reduce((pre, cur)=>{
    return pre + cur;

})
console.log("sum ==>",sum);
let factorial = userNumbers.reduce((pre, cur)=>{
    return pre * cur;

})

console.log(factorial);