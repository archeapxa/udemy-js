// Global app controller
//const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
//https://forkify-api.herokuapp.com/api/search

import Search from './models/Search'

/** Global state of the app 
 * - search Object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */
const state = {};

const controlSearch = async () => {
  // 1) Get query from the view
  const query = 'pizza' //TODO

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for result

    // 4) Search for recipers
    await state.search.getResults();

    // 5) render result on UI
    console.log(state.search.result);
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

// const search = new Search('pizza');

