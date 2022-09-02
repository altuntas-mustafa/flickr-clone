let login = document.querySelector(".log-in");
let signup = document.querySelector(".sign-up");
let q = document.getElementById("search");
let search = document.querySelector(".search")
let start = document.querySelector(".start-btn")

login.addEventListener("click", () => {
    window.open("https://identity.flickr.com/login?redir=https%3A%2F%2Fflickr.com%2F", '_blank');
})

signup.addEventListener("click", () => {
    window.open("https://identity.flickr.com/sign-up", '_blank');
})

search.addEventListener("click", () => {
    window.open('https://www.flickr.com/search?q='+ q.value ); 
})

start.addEventListener("click", () => {
    window.open("https://identity.flickr.com/sign-up", '_blank');
})

