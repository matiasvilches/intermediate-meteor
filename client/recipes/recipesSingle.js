Template.recipeSingle.onCreated(function() {
  this.autorun(() => {
    var id = FlowRouter.getParam('id');
    this.subscribe('singleRecipe', id);
  });
});

Template.recipeSingle.helpers({
  recipe: () => {
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({ _id: id });
  }
});
