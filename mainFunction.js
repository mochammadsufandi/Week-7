class PlaneFigure {
  
  constructor(name = '2 dimensi') {
    this.name = name
  }

  hyPlane () {
    console.log(`halo aku bangun ${this.name}`);
  }

  squareArea(side = 0) {
    return side**2;
  }

  squareAround(side = 0) {
    return 4*side;
  }

  rectangleArea(length=0,width=0) {
    return length*width;
  }

  rectangleAround(length=0,width=0) {
    return 2*(length+width);
  }

}



module.exports = PlaneFigure

