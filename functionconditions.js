
//Create a function that takes in one argument that is passed through a conditional statement.
//(For example, something like our haunted house door() function.)
//Print some resulting text to the console.
//Test all of your conditions to make sure you can receive all of your results back.

var door = Math.floor(Math.random() * 3)

function door(){
  if (door === 1){
    return "You have escaped"
  }
  else if (door === 2){
    return "You found a room full of gold"
  }
  else{
    return "You fell into a black hole"

  }
}

console.log(door(door));
