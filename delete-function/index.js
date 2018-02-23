const STORE =[
  {name:"apples",checked:false},
  {name:"oranges",checked:false},
  {name:"milk",checked:true},
  {name:"bread",checked:false}

];
//okay

function generateShoppingItemsString(shoppingList){
  console.log("Generating Shopping list element");
  return `
  <li>apples</li>
  <li>oranges</li>
  <li>milk</li>
  <li>bread</li>
  `;
}


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