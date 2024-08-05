const PlaneFigure = require('./mainFunction');

const persegi = new PlaneFigure('persegi');

const squareArea = persegi.squareArea(2);
const squareAround = persegi.squareAround(2);
console.log('luas persegi :', squareArea);
console.log('keliling persegi :', squareAround);


const persegiPanjang = new PlaneFigure('persegi panjang');
const rectangleAround = persegiPanjang.rectangleAround(2,3);
const rectangleArea = persegiPanjang.rectangleArea(2,3);
console.log('luas persegi panjang :', rectangleArea);
console.log('keliling persegi panjang:', rectangleAround);


