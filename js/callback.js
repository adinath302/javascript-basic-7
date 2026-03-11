function greeting(name) {
  console.log(`hello ${name}`);
}

function getuserinput(callback) {
  let name = prompt("enter your name");
  callback(name);
}
