let addBtns = document.getElementsByClassName("add-btn");
let totalAmount = document.getElementById("totalAmount");
let totalPrice = document.getElementById("totalPrice");
let removeBtns = document.getElementsByClassName("remove-btn");
let book = document.getElementById("products");

let products = [];
let uniqueProducts = [];

for (const addBtn of addBtns) {
  addBtn.addEventListener("click", function () {
    let price = parseFloat(this.previousElementSibling.textContent);

    products.push(this.parentElement.previousElementSibling.textContent);

    uniqueProducts = [...new Set(products)];

    book.textContent = uniqueProducts.join(", ");

    totalPrice.textContent = parseFloat(totalPrice.textContent) + price;
    totalPrice.textContent = parseFloat(totalPrice.textContent).toFixed(2);
    totalPrice.innerHTML += "<span class='text-primary small'> TMT</span>";

    totalAmount.textContent++;
    this.nextElementSibling.textContent++;

    if (this.nextElementSibling.textContent >= 0) {
      this.nextElementSibling.nextElementSibling.classList.remove("disabled");
    }
  });
}

for (const removeBtn of removeBtns) {
  removeBtn.addEventListener("click", function () {
    let price = parseFloat(
      this.previousElementSibling.previousElementSibling.previousElementSibling
        .textContent
    );

    let index = products.indexOf(
      this.parentElement.previousElementSibling.textContent
    );
    products.splice(index, 1);

    uniqueProducts = [...new Set(products)];

    if (products.length == 0) {
      book.textContent = "Not found";
    } else {
      book.textContent = uniqueProducts.join(", ");
    }

    totalPrice.textContent = parseFloat(totalPrice.textContent) - price;
    totalPrice.textContent = parseFloat(totalPrice.textContent).toFixed(2);
    totalPrice.innerHTML += "<span class='text-primary small'> TMT</span>";

    totalAmount.textContent--;
    this.previousElementSibling.textContent--;

    if (this.previousElementSibling.textContent == 0) {
      this.classList.add("disabled");
    }
  });
}