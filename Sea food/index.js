let likes = 0;
document.addEventListener("DOMContentLoaded", () => {
  const recipesDiv = document.getElementById("recipes");
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(response => response.json())
    .then(data => {
      data.meals.forEach(meal => {
        const recipeDiv = document.createElement("div");
        recipeDiv.className = "recipe";
        const h2 = document.createElement("h2");
        h2.textContent = meal.strMeal;
        recipeDiv.appendChild(h2);
        const img = document.createElement("img");
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        recipeDiv.appendChild(img);
        const categoryP = document.createElement("p");
        categoryP.textContent = `Category: ${meal.strCategory}`;
        recipeDiv.appendChild(categoryP);
        const areaP = document.createElement("p");
        areaP.textContent = `Area: ${meal.strArea}`;
        recipeDiv.appendChild(areaP);
        const button = document.createElement("button");
        button.textContent = `Like ${likes}`;
        button.addEventListener("click", () => {
          likes++;
          button.textContent = `Like ${likes}`;
          console.log(likes);
        });
        recipeDiv.appendChild(button);
        recipesDiv.appendChild(recipeDiv);
      });
    })
    .catch(error => console.log(error));
});
