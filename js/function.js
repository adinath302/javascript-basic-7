// normal function
function greetings() {
  console.log("welcome to our app");
  console.log("thanks for using our app");
}
greetings();
// greetings();
// greetings();
// greetings();
// greetings();

// function with return
function getPrime() {
  return 3;
}
let prime = getPrime();
console.log(prime);

//function with return and parameter
function sum(first, secound) {
  let add = first + secound;
  return add;
}

let result = sum(3, 2);
console.log(result);

function trade(f, s) {
  let trade = f - s;
  return trade;
}
// 3,2 are arguments
let resulttrade = trade(3, 2); 
console.log(resulttrade);
