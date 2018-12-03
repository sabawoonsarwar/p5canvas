function setup() {
    // create canvas
    createCanvas(800,500);
    }
  function draw () {
    // set background color
    background('orange');
    triangle(width/2,height/2,500,400,300,400);
    triangle(width/2,height/2,500,100,300,100);
  }