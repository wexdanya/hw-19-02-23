"use strict";

// 1)написати фукцію стрілку, яка приймає джерельний масив
// і повертає масив з двох значень,
// які є мінімальним і максимальним значенням джерельного масиву
// якщо джерельний масив порожній, то функція повертає порожній масив
const numbers = [1, 2, 3, 4, 5];
const getNewArr = (rest) =>
  rest.length > 0 ? [Math.min(...rest), Math.max(...rest)] : [];

// 2)написати функцію стрілку, яка приймає безліч аргументів
// і повертає результат їх множення, якщо аргументів не має - повертає null
const getMultiplication = (rest) =>
  rest.length > 0 ? rest.reduce((acc, cur) => acc * cur) : null;

// 3)переписати функцію, що нижче на функцію стрілку
// function askUser(quetion){
// const userInput = confirm(quetion);
// if(userInput){
// return 'ok';
// }
// return 'error';
const askQuestion = (question) => (confirm(question) ? "ok" : "error");
console.log(askQuestion("Are you adult?"));
