const groceryItems =
  document.querySelectorAll(
    ".grocery-item"
  );

const basketItems =
  document.getElementById(
    "basketItems"
  );

const counter =
  document.getElementById(
    "counter"
  );

const totalItems =
  groceryItems.length;

let itemsInBasket = 0;



function updateCounter() {

  counter.textContent =
    `${itemsInBasket} / ${totalItems} items`;


  if (
    itemsInBasket === totalItems
  ) {

    counter.classList.add(
      "complete"
    );

  }

}



function addToBasket(item) {


  if (
    item.classList.contains(
      "added"
    )
  ) {

    return;

  }



  const itemName =
    item.dataset.item;

  const originalImage =
    item.querySelector("img");


  if (!originalImage) {

    return;

  }


  const basketImage =
    document.createElement(
      "img"
    );


  basketImage.src =
    originalImage.src;


  basketImage.alt =
    originalImage.alt;


  basketImage.dataset.item =
    itemName;


  basketImage.classList.add(
    "basket-item"
  );



  basketItems.appendChild(
    basketImage
  );


  item.classList.add(
    "added"
  );



  itemsInBasket += 1;


  updateCounter();

}



groceryItems.forEach(
  (item) => {

    item.addEventListener(
      "click",
      () => {

        addToBasket(item);

      }
    );

  }
);



updateCounter();