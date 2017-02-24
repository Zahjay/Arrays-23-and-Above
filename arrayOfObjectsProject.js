// Arrays of Objects Project  

var bubbles = [];
var g = 0

function setup() {
  createCanvas(600, 400);
  for (var g = 0; g < 100; g++) {// This shows modularity. It controls how many objects are on he screen. idex will go up to 100 here.
    bubbles[g] = { // This code is being defined 
      x: random(-8, width),//random starting value 
      y: random(0, height),//random strating height 
      display: function() {
        stroke(255, 125, 35);
        noFill();
        line (this.x, this.y, 38, 38);//this is referring to numer value in bubbles container
        stroke(255);
        strokeWeight(random(1));//Makes the stroke blink
        ellipse(this.x, this.y , 93,23);//refferring to bubble container
        rect(this.x, this.y, 63, 13);//reffering to bubble container.
      },
      move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }
  }

}
//Executed in this step
function draw() {
  background(10, 10, 10);
  for (var i = 0; i < bubbles.length; i++) {//no matter how many buubles go through each one up by one
    bubbles[i].move();
    bubbles[i].display();
  }
}
console.log(g);// It keep showing [] instead of number of circles so had to change i to g to show up on console.

