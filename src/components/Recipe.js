import Element from './Element';

export default class Recipe extends Element {
  constructor(recipe) {
    super();

    this.createRecipeCard(recipe);
  }

  createRecipeCard = ({ title, imgUrl }) => {
    this.element = this.createElement('div', { classNames: ['col-4'] });
    const image = this.createCardImage(imgUrl);
    const body = this.createCardBody(title);

    body.prepend(image);
    this.element.append(image, body);
  };

  createCardBody = (title) => {
    const card = this.createElement('div', { classNames: ['recipe-card'] });
    const cardBody = this.createElement('div', { classNames: ['recipe-card-body'] });
    const cardTitle = this.createElement('h4');

    cardTitle.innerText = title;
    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);

    return card;
  };

  createCardImage = (imgUrl) => {
    const imageWrapper = this.createElement('div', { classNames: ['recipe-image'] });
    const image = this.createElement('img', {
      attributes: {
        src: imgUrl,
        alt: 'Recipe Image'
      }
    });

    imageWrapper.appendChild(image);

    return imageWrapper;
  };
}
