const fetchTextFile = () => {
    fetch("./plain.txt")
    .then((response) => response.text())
    .then((data) => {
        console.log(data); // here we console log the content of the file
        //then we push the data to the HTML elem
        document.querySelector(".result").innerHTML = data;
    })
    //in case of errors
    .catch((error) => console.log(error));
};

const fetchJsonFile = () => {
    fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let userCard = "<h2> All Users </h2>";
        data.forEach((user) => {
            userCard += `
            <div class = 'card' id = ${user.id}>
            <div class = 'avatar'> ${user.photo} </div>
            ${user.name}, <span>${user.age} </span> old, and lives in 
            <span> ${user.city}</span>
            </div>`; 
        });
        document.querySelector(".result").innerHTML = userCard;
    })
    .catch((error) => console.log(error))
    document.querySelector(".result").innerHTML = "There was something wrong";
}

// https://jsonplaceholder.typicode.com/

const fetchApi = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
       let imgCard = "<h2> Images </h2>";
       data.forEach(img => {
           imgCard+= `
           <div id=${img.id}>
            <img src=${img.thumbnailUrl} alt=${img.title}>
            <h3>${img.title}</h3>
            <img src=${img.url} alt=${img.title}>
          </div>`
           
       });
       document.querySelector(".result").innerHTML = imgCard;
    })
}