//  fetch
URL = "https://jsonplaceholder.typicode.com/posts"

// let ftc = fetch(URL);
// console.log(ftc);

// fetch(URL)
//     .then(response => response.json())
//     .then(data=> console.log(data))


async function getpost(){
    let reponse = await fetch(URL);
    let data = await reponse.json();
    return data;
}

getpost()
    .then(data=>console.log(data))
