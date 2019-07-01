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

 // Lets find the Parent-node of pressed button and delete it.
let currentNode = "";

function eventClick() { 
  parentNode =  event.currentTarget.parentNode.parentNode.parentNode;
  parentNodeChild = event.currentTarget.parentNode.parentNode;
  parentNode.removeChild(parentNodeChild);
}

// Lets create New Items
function addItem() {
  // Creating all the items
  let listWrapper = document.createElement("div");
  let productName = document.createElement("span");
  let productPrice = document.createElement("span");
  let productAmount = document.createElement("div");
      let productlabel = document.createElement("label");
      let productInput = document.createElement("input");
  let productTotal = document.createElement("div");
      let subTotal = document.createElement("label");
      let subTotalValue = document.createElement("span");  
  let productDelete = document.createElement("div");
      let deleteButton = document.createElement("button"); 


  // Getting the values from New Items input
  let createName = document.getElementById("create-name");
  let createPrice = document.getElementById("create-price");
  productName.innerHTML = createName.value;
  createPrice.innerHTML = createPrice.value;


  // Setting classes, IDs and Values to the items
  listWrapper.className = "list-wrapper";
  listWrapper.id = "list-wrapper";
  productName.className = "product-name";
  productPrice.className = "product-price";
  productAmount.className = "product-amount";
      productlabel.innerHTML = "Qty";
      productInput.innerHTML = 0;
  productTotal.className = "produt-total";
      subTotal.innerHTML = "Subtotal:";
      subTotalValue.className = "sub-total";
      subTotalValue.value = 0;
      
  productDelete.className = "product-delete"
      deleteButton.className = "btn btn-delete"
      deleteButton.innerHTML = "Delete Row";
    

  // Adding the structure
  document.getElementById("shopping-wrapper").appendChild(listWrapper);
  listWrapper.appendChild(productName);
  listWrapper.appendChild(productPrice);
  listWrapper.appendChild(productAmount);
      productAmount.appendChild(productlabel);
      productAmount.appendChild(productInput);
  listWrapper.appendChild(productTotal);
      productTotal.appendChild(subTotal);
      productTotal.appendChild(subTotalValue);
  listWrapper.appendChild(productDelete);
      productDelete.appendChild(deleteButton);

}

// Everything that needs to happen after Load
window.onload = function() {
  calcPrice();

  const calcButton = document.getElementById("calc-button");
  calcButton.addEventListener('click', function (event) {
      calcPrice();
  });

  const addItemButton = document.getElementById("add-item");
  addItemButton.addEventListener('click', function (event) {
    addItem();
  });



// here we add eventlistener to all deletebuttons
  let deleteButtons = document.getElementsByClassName("btn-delete");
  for (let j = 0; j < deleteButtons.length; j++) {
      deleteButtons[j].addEventListener('click', function (event){
        eventClick();
    });
  }

};