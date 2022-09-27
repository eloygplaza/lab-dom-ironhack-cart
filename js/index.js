// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // cogemos el objeto de precio, cantidad y subtotal
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  // calculamos el total
  let total = Number(price.innerText) * quantity.value;

  // inserto el total en HTML
  subtotal.innerHTML = total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let total = 0;
  let allProducts = document.querySelectorAll('.product');
  const spanTotal = document.querySelector('#total-value span');

  // actualizamos por cada producto para que me haga el subtotal
  allProducts.forEach((e) => updateSubtotal(e));

  // cogemos todos los productos y los guardamos en una variable
  allProducts = document.querySelectorAll('.product');

  // iteramos por cada producto
  // guardamos el subtotal de cada uno, lo sumamos y lo añadimos al span del precio total
  allProducts.forEach((e) => {
    const subtotal = e.querySelector('.subtotal span');
    total = Number(subtotal.innerText) + total;
    spanTotal.innerHTML = total;
  });
}

// BONUS
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  // eliminamos el producto
  target.parentElement.parentElement.remove();
  // calculamos todo otra vez
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;
  // seleccionamos los valores que nos porporciona el usuario
  const product =
    target.parentNode.parentNode.querySelector('.name input').value;
  console.log(product);
  const price =
    target.parentNode.parentNode.querySelector('.price input').value;

  // selecionamos la etiqueta tbody donde iran todos los productos
  const tbody = document.querySelector('tbody');

  // creamos el tr que necesitamos con los datos recogidos
  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');

  // creamos cada casilla con su contenido
  // primero el nombre del producto
  const tdName = document.createElement('td');
  tdName.classList.add('name');
  const tdNameSpan = document.createElement('span');
  const tdNameContent = document.createTextNode(product);
  tdNameSpan.appendChild(tdNameContent);
  tdName.appendChild(tdNameSpan);

  // segundo el precio del producto
  const tdPrice = document.createElement('td');
  tdPrice.classList.add('price');
  const tdPriceSpan = document.createElement('span');
  const tdPriceContent = document.createTextNode(`$${price}`);
  tdPriceSpan.appendChild(tdPriceContent);
  tdPrice.appendChild(tdPriceSpan);

  // tercero cantidad del producto
  let tdQuantity = document.createElement('td');
  let tdQuantityInput = document.createElement('input');
  tdQuantityInput.type = 'number';
  let tdQuantityContent = document.createTextNode(`$${price}`);
  tdQuantityInput.appendChild(tdQuantityContent);
  tdQuantity.appendChild(tdQuantityInput);

  // cuarto de subtotal
  let tdSubtotal = document.createElement('td');
  let tdSubtotalContent = document.createTextNode(`$${price}`);
  tdSubtotal.appendChild(tdSubtotalContent);

  // quinto del boton remove
  let tdRemove = document.createElement('td');
  let tdRemoveButton = document.createElement('button');
  tdRemoveButton.id = 'remove';
  tdRemoveButton.classList.add('btn');
  tdRemoveButton.classList.add('btn-remove');
  let tdRemoveContent = document.createTextNode(`Remove`);
  tdRemoveButton.appendChild(tdRemoveContent);
  tdRemove.appendChild(tdRemoveButton);

  // concatenamos todos los td dentro del tr principal
  newProduct.appendChild(tdName);
  newProduct.appendChild(tdPrice);
  newProduct.appendChild(tdQuantity);
  newProduct.appendChild(tdSubtotal);
  newProduct.appendChild(tdRemove);

  // anexamos el nuevo producto al tbody y aparecera al final
  tbody.appendChild(newProduct);
}

// cuando carga la pagina
window.addEventListener('load', () => {
  // cuando cargue todo que me calcule el precio de los productos
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // por todos los objetos con id #remove que me añade un evento de click
  const removeBtn = document.querySelectorAll('#remove');
  removeBtn.forEach((e) => e.addEventListener('click', removeProduct));

  // aplicar un evento al boton de crear un nuevo
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
