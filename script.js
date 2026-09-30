// Page elements

const groceries = document.querySelectorAll(".grocery");
const counter = document.querySelector("#counter");
const instruction = document.querySelector("#instruction");
const resetButton = document.querySelector("#resetButton");
const screenMessage = document.querySelector("#screenMessage");

const totalItems = groceries.length;
let itemsInBasket = 0;


// Update the counter and instructions

function updateInterface() {
  counter.textContent = `${itemsInBasket} / ${totalItems} items`;

  if (itemsInBasket === 0) {
    instruction.textContent = "What are we getting today?";
    document.body.classList.remove("complete");
    resetButton.classList.remove("visible");
  }

  else if (itemsInBasket < totalItems) {
    const itemsLeft = totalItems - itemsInBasket;

    if (itemsLeft === 1) {
      instruction.textContent = "Just one more item!";
    }

    else {
      instruction.textContent = `${itemsLeft} items left`;
    }

    document.body.classList.remove("complete");
    resetButton.classList.add("visible");
  }

  else {
    instruction.textContent = "Your grocery run is complete!";
    counter.textContent =
      `${itemsInBasket} / ${totalItems} items · complete`;

    document.body.classList.add("complete");
    resetButton.classList.add("visible");
  }
}


// Add groceries to the basket

groceries.forEach(function (grocery) {
  grocery.addEventListener("click", function () {

    if (grocery.classList.contains("in-basket")) {
      return;
    }

    grocery.classList.add("in-basket");
    itemsInBasket++;

    updateInterface();
  });
});


// Reset the grocery run

function resetGroceryRun() {
  groceries.forEach(function (grocery) {
    grocery.classList.remove("in-basket");
  });

  itemsInBasket = 0;
  updateInterface();
}

resetButton.addEventListener("click", function () {
  resetGroceryRun();
});


// Press R to reset

document.addEventListener("keydown", function (event) {
  if (event.key === "r" || event.key === "R") {
    resetGroceryRun();
  }
});


// Show viewport information

function updateViewportMessage() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  let viewType;

  if (width < 650) {
    viewType = "Compact view";
  }

  else if (width < 1000) {
    viewType = "Medium view";
  }

  else {
    viewType = "Wide view";
  }

  screenMessage.textContent =
    `${viewType} · ${width} × ${height}`;
}

window.addEventListener("resize", function () {
  updateViewportMessage();
});


// Initial setup

updateInterface();
updateViewportMessage();