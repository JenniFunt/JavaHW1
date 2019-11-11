
//Create a function that takes in two arguments and returns a concatenated string in the console.

var str1 = "My favorite FOOD is "
var array1 = ["Pizza", "Sushi", "Tacos", "Hamburgers", "Cheese", "Avocados"];
var indexNum = Math.floor(Math.random() * array1.length);
var str2 = array1[indexNum];

function Food(){
  return str1.concat(str2);
}

console.log(Food(str1, str2));
