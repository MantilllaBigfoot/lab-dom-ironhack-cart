// ITERATION 1

function updateSubtotal(product) {
  let price = 0;
  let quantity = 0;
  let totalPrice = 0;

  for (let i = 0; i < product.length; i++) {
    let priceClass = product[i].getElementsByClassName('price');
    price = priceClass[0].getElementsByTagName('span')[0].innerText;

    let quantityClass = product[i].getElementsByClassName('quantity');
    quantity = quantityClass[0].getElementsByTagName('input')[0].value;

    let totalColumnPrice = price * quantity;
    //Display the price
    product[i].querySelector(
      '.subtotal span'
    ).innerText = `${totalColumnPrice}`;
    totalPrice += totalColumnPrice;
  }
  return totalPrice;
}

function calculateAll() {
  const singleProduct = document.getElementsByClassName('product');
  let totalPrice = 0;
  totalPrice = updateSubtotal(singleProduct);
  document.querySelector('#total-value span').innerText = totalPrice;
}

// ITERATION 4

function removeProduct(product) {
  product.parentNode.removeChild(product);
}

// ITERATION 5

function createProduct() {
  console.log('hello');
  const productName = document.getElementById('input-name').value;
  const productPrice = document.getElementById('input-price').value;

  document.getElementById('input-name').value = '';
  document.getElementById('input-price').value = '';

  const productClass = document.createElement('tr');
  productClass.className = 'product';
  console.log(productClass);

  const nameTd = document.createElement('td');
  nameTd.className = 'name';
  const nameSpan = document.createElement('span');
  nameSpan.innerText = productName;
  nameTd.appendChild(nameSpan);
  productClass.appendChild(nameTd);
  const priceTd = document.createElement('td');
  priceTd.className = 'price';
  priceTd.innerText = '$';
  const priceSpan = document.createElement('span');
  priceSpan.innerText = productPrice;
  priceTd.appendChild(priceSpan);
  productClass.appendChild(priceTd);
  const quantityTd = document.createElement('td');
  quantityTd.className = 'quantity';
  const quanInput = document.createElement('input');
  quanInput.placeholder = 'Quantity';
  quanInput.type = 'number';
  quanInput.value = '0';
  quantityTd.appendChild(quanInput);
  productClass.appendChild(quantityTd);
  const subtotalTd = document.createElement('td');
  subtotalTd.className = 'subtotal';
  subtotalTd.innerText = '$';
  const subtotalSpan = document.createElement('span');
  subtotalSpan.innerText = '0';
  subtotalTd.appendChild(subtotalSpan);
  productClass.appendChild(subtotalTd);

  const actionTd = document.createElement('td');
  actionTd.className = 'action';
  const actionButton = document.createElement('button');
  actionButton.className = 'btn btn-remove';
  actionButton.innerText = 'Remove';
  actionButton.addEventListener('click', () => {
    removeProduct(productClass);
  });
  actionTd.appendChild(actionButton);
  productClass.appendChild(actionTd);

  const body = document.getElementsByTagName('tbody');
  console.log(body);
  body[0].appendChild(productClass);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const addButton = document.getElementById('create');
  addButton.addEventListener('click', () => {
    createProduct();
  });

  const products = document.getElementsByClassName('product');
  for (const product of products) {
    const button = product.querySelector('.btn-remove');
    button.addEventListener('click', () => {
      console.log('removeMe');
      removeProduct(product);
    });
  }
});
