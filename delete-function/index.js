// render shopping list function

function renderShoppingList() {

  console.log('`renderShoppingList` ran');
}

// create new item on shopping list 

function handleNewItemSubmit() {

  console.log('`handleNewItemSubmit` ran');
}

// check off items on shopping list

function handleItemCheckClicked() {

  console.log('`handleItemCheckClicked` ran');
}

// delete items from shopping list

function handleDeleteItemClicked() {

  console.log('`handleDeleteItemClicked` ran');
}

// run all the functions

function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

handleShoppingList();