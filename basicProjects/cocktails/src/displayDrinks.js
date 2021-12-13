import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  const section = getElement(".section-center");
  const title = getElement(".title");
  if (!drinks) {
    hideLoading();
    title.textContent = "there is no cocktail";
    section.innerHTML = null;
    return;
  }
  const result = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  hideLoading();
  title.textContent = "";
  section.innerHTML = result;
  return section;
};

export default displayDrinks;
