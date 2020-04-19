import '../styles/reset.css';
import '../styles/style.css';
import 'bootstrap.native/dist/bootstrap-native-v4';
import 'bootstrap/dist/css/bootstrap.min.css';

import RecipeList from './RecipeList';

export default class App {
  constructor() {
    this.startApp();
  }

  static recipesContainer = document.getElementById('recipesContainer');
  static recipeFormContainer = document.getElementById('recipeFormContainer');

  startApp() {
    const { element: recipes } = new RecipeList();

    recipesContainer.appendChild(recipes);
  }

}
