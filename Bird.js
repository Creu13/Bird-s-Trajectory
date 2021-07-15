class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.pathway = [];
    this.pathwayImage = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var position = [this.body.position.x, this.body.position.y]; //store x & y positions here
    if(this.body.position.x > 205 && this.body.speed > 10)
    // when object collides, the object looses kinetic energy
    {
      this.pathway.push(position);
      //when these two conditions are true, then only it pushes the position of the bird to pathway
    }
    for(var i = 0; i < this.pathway.length; i++) {
      // i is the index of pathway array (starts from 0 to 99, if length is 100)
      image(this.pathwayImage, this.pathway[i][0], this.pathway[i][1]);
    }
    super.display();
  }
}
