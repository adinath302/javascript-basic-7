let phone = {
  brand: "samsung",
  size: 6.2,
  price: 5000,
};
// dot notation
// console.log(phone.size);
// console.log(phone.price);
// console.log(phone.brand);
// //bracet notation
// console.log(phone["size"]);
// console.log(phone["price"]);
// console.log(phone["brand"]);

// console.log(typeof phone);
// console.log(typeof phone.size);

// // add\remove

// delete phone.brand;
// console.log(phone);

// phone.brand = "iphone";
// console.log(phone);

// delete phone.price;
// phone.price = 3500;
// console.log(phone);

let phone2 = phone;
phone.brand = "apple";jjj
delete phone2.brand;
console.log(phone, "phone");
console.log(phone2, "phone2");

let num = 10;
let num2 = num;

num2 = 2;
// console.log(num, "num");
console.log(num2, "num2");
