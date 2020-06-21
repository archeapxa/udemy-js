// Global app controller
//const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
//https://forkify-api.herokuapp.com/api/search

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app 
 * - search Object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */
const state = {};
window.state = state;

// SEARCH CONTROLLER
const controlSearch = async () => {
  // 1) Get query from the view
  const query = searchView.getInput();
  // console.log(query)

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for result
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
      // 4) Search for recipers
      await state.search.getResults();
  
      // 5) render result on UI
      clearLoader();
      searchView.renderResults(state.search.result)
    } catch (error) {
      clearLoader();
      alert('Something wrong with the search.')
    }

  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});



elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

//RECIPE CONTROLLER
const controlRecipe = async () => {
  // get ID from the url
  const id = window.location.hash.replace('#', '');

  if (id) {
    // prepare UI for changes
    recipeView.cleanRecipe();
    renderLoader(elements.recipe);

    // highlight selected search item
    if (state.search) {
      searchView.highlightSelected(id);
    };

    // create new recipe object
    state.recipe = new Recipe(id);

    try {

      // get recipe data and parse ingridients
      await state.recipe.getRecipe();
      // console.log(state.recipe.ingredients);
      // console.log(state.recipe);
      state.recipe.parseIngredients();
  
      // calc servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();
  
      // render recipe
      clearLoader();
      recipeView.renderRecipe(
        state.recipe,
        state.likes.isLiked(id)
      );

    } catch (error) {
      console.log(error)
      alert('Error processing recipe!');
    }
  }
} 


['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


// LIST CONTROLLER
const controlList = () => {
  // Create a new list if there is none yet
  if (!state.list) state.list = new List();
  
  // Add each ingred to the list
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });

}

// Handler delete and update list item events
elements.shopping.addEventListener('click', e => {
  const id = e.target.closest('.shopping__item').dataset.itemid;
  
  // Handle the delete button
  if (e.target.matches('.shopping__delete, .shopping__delete *')) {
    // delete from state
    state.list.deleteItem(id);

    // delete from UI
    listView.deleteItem(id);

    // handle count update
  } else if (e.target.matches('.shopping__count-value')) {
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});


// LIKE CONTROLLER
state.likes = new Likes(); //TESTING
likesView.toggleLikeMenu(state.likes.getNumLikes()); //TESTING
const controlLike = () => {
  if (!state.likes) state.likes = new Likes();
  const currentID = state.recipe.id;

  // User has not yet liked cur recipe
  if (!state.likes.isLiked(currentID)) {
    // add like to the state
    const newLike = state.likes.addLike(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );
    // toggle like button
    likesView.toggleLikeButton(true);

    //add like to the UI
    likesView.renderLike(newLike);
    

  } else {
    // User has not yet liked cur recipe
    // remove like to the state
    state.likes.deleteLike(currentID);

    // toggle like button
    likesView.toggleLikeButton(false);
    // remove like from UI list
    likesView.deleteLike(currentID);
    
  }
  likesView.toggleLikeMenu(state.likes.getNumLikes());
};


// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
  if (e.target.matches('.btn-decrease, .btn-decrease *')) {
    // decrease button clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches('.btn-increase, .btn-increase *')) {
    // increase button clicked
    state.recipe.updateServings('inc');
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
    //add ingred to shopping list
    controlList();
  } else if (e.target.matches('.recipe__love, .recipe__love *')) {
    // Like controller
    controlLike();
  }
  // console.log(state.recipe);
});

