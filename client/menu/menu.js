Template.menu.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});

Template.menu.helpers({
  recipes: () => {
    return Recipes.find({ inMenu: true });
  }
});
