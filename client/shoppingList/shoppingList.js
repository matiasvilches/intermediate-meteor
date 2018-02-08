Template.shoppingList.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});

Template.shoppingList.helpers({
  shoppingList: () => {
    return Recipes.find({ inMenu: true });
  }
});
