let particles = [];
let particles_num = 1000;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB,360,100,100,100)

  for(i = 0; i < particles_num;i++){
    particles[i] = new Particle();
  }

    background(220);
}

function draw() {


  for(i=0;i<particles.length;i++){
    particles[i].display();
    particles[i].move();
  }
}