function setup() {
  createCanvas(windowWidth, windowHeight);
  background("gold");
  fill(0);
}



function mouseClicked() {
  let x = 0; x <= width; x = x + 1;
  fill(random(0,500),0,0);
  stroke(0);
  randomlength = random(5,300);
  ellipse(mouseX, mouseY,randomlength, randomlength);

}

function mouseMoved(){
  stroke(0);
  line (mouseX, mouseY, width / 2,height / 2);

}

function keyPressed(){
  if(key == "s"){
    saveCanvas("my canvas","jpg");
  } else if(key == "r"){
    background("gold");
  }

}
