function setup() {
    // create canvas
    createCanvas(800, 500);
    // set background color
    background('orange');
}
function draw() {
    push();
    fill('red');
    stroke('#f12e78');
    ellipse(width / 2, height / 2, 50);
    pop();
    ellipse(width / 2, height / 3, 50);
    rect(width / 2, height / 6, 50, 50);
    ellipse(width / 4, height / 2, 50);
}