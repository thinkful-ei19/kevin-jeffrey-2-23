
'use strict';

const STORE =[
  {name:"apples",checked:false},
  {name:"oranges",checked:false},
  {name:"milk",checked:true},
  {name:"bread",checked:false},

]

// test comment

// render shopping list function

function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = '<li>apples</li>';

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