class Monkey {
    constructor(type,characteristics, name) {
      this.type = type;
      this.characteristics =  characteristics;
      this.name = name;
    }
    move() {
      console.log("Monkey is moving...");
    }
  }
  let monkey = new Monkey('old World Monkey', 'weight -75 pounds', 'African colobus monkey');
  console.log("Monkey Name is " + monkey.name);
  monkey.move();   
 
  monkey.jump = function() {
    console.log("Jumping Mokey...");
  }
  monkey.jump();   