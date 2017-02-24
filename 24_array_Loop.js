/* 
6.2 p5.js Arrays and loops
1. Code below is from https://vimeo.com/channels/learningp5js/141211394
2. Video Referenced at 1:55 is For Loops, https://vimeo.com/channels/learningp5js/139013336 
*/ //modified by Zahra A.

var nums = [175, 47, 100, 68, 100];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

//original work
  //for (var i = 0; i < 4; i++) {
    //stroke(255);
   // fill(51);
   // ellipse(i * 100 + 100, 200, nums[i], nums[i]);
  //}
 
 stroke(255);//Colors the outside of ellipses.
 //noFill();
 fill(0,155,0);//Gives inside the ellipses color.
 //stroke(170);//
 //fill(255,0,0);
 for (var i = 0; i < random(5); i++){//For loop states that variable index equals 0 it increments as long as it is less than 5.Chose random ellipse to blink if less than 5. 
  ellipse( i * 80+80,250,nums[i], nums [i]);// For loop - multiplied the index value by 80 then added to 80 to give wanted values.
 }
 //Verbose version wrote out value of index
 
 //ellipse(80, 250, nums[1], nums[1]);
 //ellipse( 100, 250, nums[2], nums[2]);
// ellipse(120, 250, nums[3], nums[3]);
 //ellipse(140, 250,  nums [0], nums [0] );
 //ellipse( 160, 250, nums [4], nums [4]);
 
  
//}

}