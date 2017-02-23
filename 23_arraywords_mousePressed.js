
var words = ["Week two", "Is", " Through..."," Yaiow!!!!" ]//hardcore
var index = 0; // Global Variable
function setup() {
  createCanvas(500,400);
}

function draw() {
  background(35,9,46);
  
  fill(212);//Color of words
  textSize(random(70)); // Determines size of words. Random cause the text size to go through a range of number up to 70.
  text(words[index], 40, 250);//This is declaring the words. It shows where location will be.
}

function mousePressed() {//This fuction will enable you to click on the screen and see one word at a time 
  index = index + 1 // Goes through index list in array and increments.
  
  if (index ==  words.length){//This is checking the length of the array to make sure it's true.
  //if (index == 3 ) {// The list in array equals 4.
    index = 0;//rests list back to zero
  }
}