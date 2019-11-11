
//Create an array of strings and use random() to select random entries and add them to a sentence,
//printing the result to the console.

var array2 = ["I ", "You ", "My Professor ", "Trump"]
var array3 = ["loves ", "hates ", "kills", "eats"]
var array4 = ["pizza", "people", "animals", "students"]
var randomNum = Math.floor(Math.random() * array2.length);
var str3 = array2[randomNum]
var str4 = array3[randomNum]
var str5 = array4[randomNum]


function randomWords(){
  return str3.concat(str4, str5);
}

console.log(randomWords(str3, str4, str5));
