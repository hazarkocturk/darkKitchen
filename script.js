let darkmood = document.querySelector("#darkmood");
let body = document.body;
let card = document.querySelectorAll(".card");
let littlecircle = document.querySelector(".littlecircle");
let ul = document.querySelector('ul')
let total = document.querySelector('span')
total.textContent = 0
let productQuantities = {};
let basket = document.querySelector('#basket');
let secretBasket = document.querySelector('.secretbasket');
let header = document.querySelector('header');
darkmood.addEventListener("click", function() {
   body.classList.toggle('dark-background');
   header.classList.toggle('dark-background');
});

card.forEach(function(e){
    e.addEventListener("click", function(e){
        littlecircle.textContent++;
        let product = this.querySelector("h4").innerText;
        let price = this.querySelector("p").innerText;
        let netPrice = parseInt(price.substring(0, 2)); 
        let totalPrice = parseInt(total.textContent);  
        if (productQuantities[product]) {
            productQuantities[product] += 1;
        } else {
            productQuantities[product] = 1;
        }
        total.textContent = `${totalPrice + netPrice} $`;

        let quantityText = '';
        if (productQuantities[product] > 1) {
            quantityText = `${productQuantities[product]}X`;
        }
        let existingLi = ul.querySelector(`li[data-product="${product}"]`);
        if (existingLi) {
            existingLi.remove();
        }
        
        let li = document.createElement("li");
        li.textContent = `${quantityText} ${product} ${price}`;
        li.setAttribute("data-product", product); 
        ul.appendChild(li);
    });
    });

    basket.addEventListener("click", function(e){
        secretBasket.classList.toggle("vanish");
    })
