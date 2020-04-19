import { getRecipeList } from "../services";
import Element from './Element';
import Recipe from './Recipe';

export default class RecipeList extends Element {
  constructor() {
    super();

    this.fillCards();
  }

  fillCards = () => {
    const recipes = getRecipeList();
    const cards = recipes.map(recipe => {
      const { element: recipeElement } = new Recipe(recipe);
      return recipeElement;
    });

    this.element = this.createElement('div', { classNames: ['row'] });
    this.element.append(...cards);
  };


}
