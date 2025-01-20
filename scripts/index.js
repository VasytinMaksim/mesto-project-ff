// @todo: Темплейт карточки

const cards = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки

function cardCreate(card, deleteCard) {
  const cardElement = cards.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = card.link;
  cardImage.alt = card.alt;
  cardElement.querySelector('.card__title').textContent = card.name;
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => deleteCard(cardElement));
  return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard(cardDelete) {
  cardDelete.remove(); 
}

// @todo: Вывести карточки на страницу

function addCard(cardElement, cardContainer) {
  cardContainer.append(cardElement);
}

initialCards.forEach((card) => {
    const cardCreated = cardCreate(card, deleteCard);
    addCard(cardCreated, cardContainer);
});

