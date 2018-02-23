'use strict';

const STORE =[
  {name:"apples",checked:false},
  {name:"oranges",checked:false},
  {name:"milk",checked:true},
  {name:"bread",checked:false}

];

// dynamically create items for shopping list

function generateItemElement(item, itemIndex, template) {
  return `
    <li>${item.name}</li>
  `;
}

// make a string of shopping list items

function generateShoppingItemsString(shoppingList){
  console.log("Generating Shopping list element");
  
  const items = shoppingList.map((item, index) => generateItemElement(item, index));

  return items.join('');
}


// render shopping list function to the DOM

function renderShoppingList() {

  console.log('`renderShoppingList` ran');

  const shoppingListItemsString = generateShoppingItemsString(STORE);
  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
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