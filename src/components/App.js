import '../styles/reset.css';
import '../styles/style.css';
import 'bootstrap.native/dist/bootstrap-native-v4';
import 'bootstrap/dist/css/bootstrap.min.css';

import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

export default class App {
  constructor() {
    this.appContainer = document.getElementById('appContainer');
    this.recipesListLink = document.getElementById('recipeListLink');
    this.recipeFormLink = document.getElementById('recipeFormLink');

    this.bindNavigationHandlers();
    this.showPage(new RecipeList());
  }

  bindNavigationHandlers = () => {
    let previousTargetLink = this.recipesListLink;
    this.recipesListLink.addEventListener('click', ({ target }) => {
      previousTargetLink.parentNode.classList.remove('active');
      target.parentNode.classList.add('active');
      previousTargetLink = target;
      this.showPage(new RecipeList());
    });
    this.recipeFormLink.addEventListener('click', ({ target }) => {
      previousTargetLink.parentNode.classList.remove('active');
      target.parentNode.classList.add('active');
      previousTargetLink = target;
      this.showPage(new RecipeForm());
    });
  };

  showPage = ({ element: page }) => {
    while (this.appContainer.firstChild) {
      this.appContainer.removeChild(this.appContainer.firstChild);
    }
    this.appContainer.appendChild(page);
  };
}
