const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_Id = '07e48c42';
const APP_key = '32d915ce0f9751188c2d9e17b8bc41de'
const baseUrl = `https://api.edamam.com/search?q=pizza&app_id=${APP_Id}&app_key=${APP_key}`;

searchForm.addEventListener('submit', (e) => {
e.preventDefault();
searchQuery = e.target.querySelector('input').value;
fetchAPI();
});

async function fetchAPI (){
    const baseUrl =`https://api.edamam.com/search?q=pizza&app_id=${APP_Id}&app_key=${APP_key}`; 
    const response = await fetch(baseUrl);
    
    console.log(response);
}