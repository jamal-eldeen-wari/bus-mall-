'use strict';
function generateRandomNumber(){
  return Math.floor(Math.random() * Product.allProducts.length);
}
let productNames = [];


function Product(name, source){
  this.name = name;
  this.source = source;
  this.times = 0;
  this.votes = 0;
  productNames.push(this.name);
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
let button;
function render(){
  leftImgIndex = generateRandomNumber();
  middleImgIndex = generateRandomNumber();
  rightImgIndex = generateRandomNumber();
  // let index = 0;
  // let testArr = [leftImgIndex, middleImgIndex, rightImgIndex];
  while(leftImgIndex === middleImgIndex || leftImgIndex === rightImgIndex || rightImgIndex === middleImgIndex || rightImgIndex === leftImgIndex ){
    // if(testArr[0] === leftImgIndex || testArr[0] === middleImgIndex || testArr[0] === right)
    rightImgIndex = generateRandomNumber();
    middleImgIndex = generateRandomNumber();
    leftImgIndex = generateRandomNumber();
    // testArr.push(leftImgIndex, middleImgIndex, rightImgIndex);
    // console.log(testArr);
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
  // console.log(Product.allProducts);

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
    // console.log(Product.allProducts);
    render();
  }else{
    button =document.getElementById('btn');
    button.hidden=false;
    button.addEventListener('click',viewReasults);
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
  button.removeEventListener('click', viewReasults);
  button.hidden = true;

}







}
// let btn = document.getElementById('btn');
// btn.onclick(viewReasults());



// let ctx = document.getElementById('myChart').getContext('2d');
// let myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });


