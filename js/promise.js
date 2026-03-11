// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(Response =>{
//     if(!Response.ok){
//         throw new Error('NetWork response is not ok'+Response.statusText);
//     }
//     return Response.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.text()).then(data=>console.log(data))

// using async/await

// const fetchapi = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   return data;
// };

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("error", error);
  }
}
