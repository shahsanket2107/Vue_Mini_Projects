export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals;
}

export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals;
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIng = meals;
}

export function setIngredient(state, meals) {
  state.ingredient = meals;
}

export function displayMeals(state,meals) {
  state.dispMeal = meals;
}
