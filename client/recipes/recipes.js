Template.recipes.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});

Template.recipes.helpers({
  recipes: () => {
    return Recipes.find({});
  }
});

Template.recipes.events({
  'click .new-recipe': () => {
    Session.set('newRecipe', true);
  }
});
