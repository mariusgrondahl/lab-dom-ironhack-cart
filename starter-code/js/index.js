// Lets calculate the sum of quantity and the price
let productPrice = document.getElementsByClassName("product-price");
let subTotal = document.getElementsByClassName("sub-total");


function calcPrice () {
    let quantity = document.getElementsByClassName("quantity");
    let total = document.getElementById("total");
    let totalArr = [];

    for (let i = 0; i < quantity.length; i++) {
        subTotal.value = quantity[i].value * productPrice[i].innerHTML;
        subTotal[i].innerHTML = subTotal.value;
        
        totalArr.push(subTotal.value);
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(totalArr.reduce(reducer));

    let totalSum = 0;
    totalSum = totalArr.reduce(reducer);
    
    total.innerHTML = totalSum;
}

 // Letss find the Parent-node of pressed button and delete it.
let currentNode = "";

function eventClick() { 
  parentNode =  event.currentTarget.parentNode.parentNode.parentNode;
  parentNodeChild = event.currentTarget.parentNode.parentNode;
  parentNode.removeChild(parentNodeChild);
}

// Everything that needs to happen after Load
window.onload = function() {
  calcPrice();

  const calcButton = document.getElementById("calc-button");
  calcButton.addEventListener('click', function (event) {
    calcPrice();
  });



// here we add eventlistener to all deletebuttons
  let deleteButtons = document.getElementsByClassName("btn-delete");
  for (let j = 0; j < deleteButtons.length; j++) {
      deleteButtons[j].addEventListener('click', function (event){
        eventClick();
    });
  }

};