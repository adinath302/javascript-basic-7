console.log("before");

setTimeout(function () {
  console.log("called");
}, 2000);
console.log("after");

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4,3));

