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
    const baseUrl =`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_Id}&app_key=${APP_key}&to=18`; 
    const response = await fetch(baseUrl);
    const data = await response.json();
    generateHTML(data.hits)
    console.log(data);
}
function generateHTML(results){
    let generatedHTML = '';
    results.map(result =>{
        generatedHTML +=
        `
         <div class="item">
        <img
          src="${result.recipe.image}"
          alt=""
        />
        <div class="flex-cont">
          <h1 class="title">${result.recipe.label}</h1>
          <a
            class="btn"
            style="
              text-decoration: none;
              text-align: center;
              width: 130px;
              background-color: brown;
              padding: 10px 0;
              color: aliceblue;
              font-size: 1.5rem;
              margin-top: 20px;
              align-self: flex-start;"
            
            href="${result.recipe.url}" target="_blank">View Recipe</a>
          
        </div>
        <p class="data-item">Calories: ${result.recipe.calories.toFixed(2)}</p>
         <p class="data-item">Cuisine Type: ${result.recipe.cuisineType}</p>
        <p class="data-item">Meal Type: ${result.recipe.mealType}</p>
        <p class="data-item">Total Time: ${result.recipe.totalTime}</p>
          </div>  
        `

    })
    searchResultDiv.innerHTML = generatedHTML;
}