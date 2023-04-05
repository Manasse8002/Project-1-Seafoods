
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  .then(response => response.json())
  .then(data => {
      let recipesDiv = document.getElementById("recipes");
      data.meals.forEach(meal => {
          let recipeDiv = document.createElement("div");
          recipeDiv.className = "recipe";
          recipeDiv.innerHTML = `
              <h2>${meal.strMeal}</h2>
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <p>Category: ${meal.strMeal}</p>
              <p>Area: ${meal.idMeal}</p>
              <p><a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a></p>
          `;
          recipesDiv.appendChild(recipeDiv);
      });
  })
  .catch(error => console.log(error));
