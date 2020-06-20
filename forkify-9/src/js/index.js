// Global app controller
//const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
//https://forkify-api.herokuapp.com/api/search

import Search from './models/Search'
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base'

/** Global state of the app 
 * - search Object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */
const state = {};

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

    // 4) Search for recipers
    await state.search.getResults();

    // 5) render result on UI
    clearLoader();
    searchView.renderResults(state.search.result)
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

// const search = new Search('pizza');

