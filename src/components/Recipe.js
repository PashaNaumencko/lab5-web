import Element from './Element';

export default class Recipe extends Element {
  constructor(recipe) {
    super();

    this.createRecipeCard(recipe);
  }

  createRecipeCard = ({ imgUrl, ...recipe }) => {
    this.element = this.createElement('div', { classNames: ['card', 'shadow'] });
    const image = this.createCardImage(imgUrl);
    const body = this.createCardBody(recipe);
    this.element.append(image, body);
  };

  createCardBody = ({ title, ingredients }) => {
    const cardBody = this.createElement('div', { classNames: ['card-body'] });
    const recipeTitle = this.createElement('h5');
    const recipeIngredients = this.createElement('p', { classNames: ['card-text', 'truncate-overflow'] });
    const button = this.createShowMoreButton('Show More');

    recipeTitle.innerText = title;
    recipeIngredients.innerText = ingredients;
    cardBody.append(recipeTitle, recipeIngredients, button);

    return cardBody;
  };

  createShowMoreButton = (text) => {
    const showMoreButton = this.createElement('button', { classNames: ['btn', 'btn-success'] });

    showMoreButton.innerText = text;
    return showMoreButton;
  };

  createCardImage = (imgUrl) => {
    const image = this.createElement('img', {
      classNames: ['card-img-top'],
      attributes: {
        src: imgUrl,
        alt: 'Recipe Image'
      }
    });

    return image;
  };
}
