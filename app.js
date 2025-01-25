const movies = document.getElementById("movies");
function fetchMovies(){
fetch("https://www.omdbapi.com/?i=tt3896198&apikey=769a234c&s=avengers")
.then((data)=>{
    return data.json();
})
.then((data)=>{

    data.Search.forEach((ele) => {
        const div = document.createElement("div");
    div.className = "movie-cards"
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    img.src = ele.Poster;
    h3.innerText = ele.Title
    div.append(img,h3);
    movies.appendChild(div);
    });
    
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
}

fetchMovies();