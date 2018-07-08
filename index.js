var recipes = {key:"value"};
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value} );
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value; 
  return recipes;
}
function deleteFromObjectByKey(recipes, key){
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes[key];
  return recipes;
}
function destructivelyDeleteFromObjectByKey(recipes, key){
  return Object.assign(recipes, { [key]: value });
}