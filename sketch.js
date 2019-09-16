var veryHungry = false;
var number = 1

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Billy's After School Ordeal!"; // title

  document.getElementById('author').innerHTML="The Coreys"; // author


  
  // All of your code goes under here
  

  var story = beginning() + ' Billy got home from school one day and decided to play a game. ' + game() // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function game() {
  let hours = Math.floor(random(1, 6)); // Random number rounded down
  if(hours > 3) {
    veryHungry = true;
    return 'Billy begans to play Fortnite when all of the sudden he quit. ' + mad()
 } else { 
   return"Billy began to play Minecraft when suddenly he got thirsty. " + thirsty()
  }
}

function beginning() {
  intro = Math.floor(random(1, 6));
  if(intro > 3) {
  return 'Billy is your typical 10 year old boy.'
} else {return 'Billy is a crazy 10 year old boy who is always high on Redbull. '}
}
  
  


function mad() {
  let mads = Math.floor(random(1, 6))
  if(mads > 3) {
    return ' Billy calmly turns of his xbox and goes to do some homework. '
  } else { return ' Billy got so mad that he smashed his xbox and controller.' + destroyed()
    

  }
}

function thirsty() {
  let insp = Math.floor(random(1, 6));
  if(insp > 3) {
    return "Billy drank some of his fresh made tea, but got sleepy from the erbs and passed out on the floor. "
  } else {
    if(number == 1) {
    number = 2
      return "Billy drinks his Redbull and decides he has the energy to choose a different game. " + game()
  } else { return 'Billy passes out due to being over whemled by his drink options!'}
  }
}

function destroyed() {
  let slaped = Math.floor(random(1, 6)); 
  if(slaped > 3) {
    return " When Billy's mom got home from work she did not hesitate to scoled him."
  } else { return " When Billy's mom got home from work she passed out from the horrbile mess she saw before her eyes."}
}

//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    