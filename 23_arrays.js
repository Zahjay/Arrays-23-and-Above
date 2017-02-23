
//Zahra Abd'Allah Arrays 23
var nums = [150, 35, 42, 64];// four values in array. Idex goes from zero to 3.
var num = 23;// regular variable 

function setup() {
  createCanvas (450,400);
  
}

function draw() {
  background (255,0,0);
  
  //rect 1
  fill(255);
  rect(150,45, num, num);// Variable is used for width and height of the elllipse. Width and height are drawn with 23 pixels.
   //rect 2
   fill(0,0,0);
   rect (175,45, nums[3], nums[3]);// Rect with a with and height of 64 due to the indexes third value.
   fill(255);
   rect (200, 85, nums[1], nums [1] );// Array's 1st index vaule is determining rectangles y value.
}