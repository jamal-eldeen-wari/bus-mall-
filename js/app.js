'use strict';
function generateRandomNumber(){
  return Math.floor(Math.random() * Product.allProducts.length);
}

function Product(name, source){
  this.name = name;
  this.source = source;
  this.times = 0;
  this.votes = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');
// For indexes
let leftImgIndex ;
let middleImgIndex;
let rightImgIndex ;
// getting imgs from HTML by there IDs
let leftImg = document.getElementById('leftImage');
let middleImg = document.getElementById('middleImage');
let rightImg = document.getElementById('rightImage');

let maxAttemps = 25;
let count = 0;
// leftImgIndex = generateRandomNumber();
// console.log( 'left',leftImgIndex);
// rightImgIndex = generateRandomNumber();
// console.log('right',rightImgIndex);
function render(){
  leftImgIndex = generateRandomNumber();
  middleImgIndex = generateRandomNumber();
  rightImgIndex = generateRandomNumber();

  while(leftImgIndex === middleImgIndex || leftImgIndex === rightImgIndex || rightImgIndex === middleImgIndex || rightImgIndex === leftImgIndex ){
    rightImgIndex = generateRandomNumber();
    middleImgIndex = generateRandomNumber();
  }
  //   console.log(Product.allProducts[leftImgIndex].name);
  //   console.log(Product.allProducts[middleImgIndex].name);
  //   console.log(Product.allProducts[rightImgIndex].name);
  leftImg.src = Product.allProducts[leftImgIndex].source;
  middleImg.src = Product.allProducts[middleImgIndex].source;
  rightImg.src = Product.allProducts[rightImgIndex].source;

  if(Product.allProducts[leftImgIndex].source){
    Product.allProducts[leftImgIndex].times++;
    // console.log(Product.allProducts[leftImgIndex].times);
  }
  if(Product.allProducts[middleImgIndex].source){
    Product.allProducts[middleImgIndex].times++;
    // console.log(Product.allProducts[middleImgIndex].times);
  }
  if(Product.allProducts[rightImgIndex].source){
    Product.allProducts[rightImgIndex].times++;
    // console.log(Product.allProducts[rightImgIndex].times);
  }
  console.log(Product.allProducts);

}
render();

let container = document.getElementById('container');
container.addEventListener('click', clickAction);

function clickAction(event){
  console.log(event.target.id);
  count++;
  //   console.log(count);

  if(count <= maxAttemps){
    if(event.target.id === 'leftImage'){
      Product.allProducts[leftImgIndex].votes++;
    }else if(event.target.id === 'rightImage'){
      Product.allProducts[rightImgIndex].votes++;
    }else{
      Product.allProducts[middleImgIndex].votes++;
    }
    console.log(Product.allProducts);
    render();
  }else{
    // let productList = document.getElementById('list');

    // for(let i =0; i<Product.allProducts.length; i++){
    //   let list = document.createElement('li');
    //   productList.append(list);
    //   list.textContent = `${Product.allProducts[i].name} has been shown for ${Product.allProducts[i].times} times and it has been voted for ${Product.allProducts[i].votes}`;
    // }
    // to stop
    container.removeEventListener('click', clickAction);


  }
}
function viewReasults(){
  let productList = document.getElementById('list');

  for(let i =0; i<Product.allProducts.length; i++){
    let list = document.createElement('li');
    productList.append(list);
    list.textContent = `${Product.allProducts[i].name} has been shown for ${Product.allProducts[i].times} times and it has been voted for ${Product.allProducts[i].votes}`;
  }

}
let btn = document.getElementById('btn');
btn.onclick(viewReasults());





