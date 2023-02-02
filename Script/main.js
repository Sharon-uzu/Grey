



var slideimg = document.getElementById("slideimg");
var image = new Array(
    "./Asset/image/chicken-and-rice-recipes-chicken-fried-rice-1661887790-removebg-preview.png",
    "./Asset/image/Famous-food-in-Nice-France-pic-removebg-preview (1).png",
    "./Asset/image/White-Chocolate-Cake-2040c48-removebg-preview.png",
    
);
var len = image.length;
var i = 0;
console.log(len);
function slider(){
    if(i > len-1){
        i = 0;
    }
    slideimg.src = image[i];
    i++;
    setTimeout('slider()',3000);
}



// $(document).ready(function () {
//     var slideNum = $('.page').length,
//         wrapperWidth = 100 * slideNum,
//         slideWidth = 100/slideNum;
//     $('.wrapper').width(wrapperWidth + '%'); 
//     $('.page').width(slideWidth + '%');
    
//     $('a.scrollitem').click(function(){
//         $('a.scrollitem').removeClass('selected');
//         $(this).addClass('selected');
        
//         var slideNumber = $($(this).attr('href')).index('.page'),
//             margin = slideNumber * -100 + '%';
    
//         $('.wrapper').animate({marginLeft: margin},1000);
//         return false;
//     });
// });






// cart.js
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Jollof Rice",
        tag: "Rice",
        price: 15,
        inCart:0
    },

    {
        name: "Fried Rice",
        tag: "Rice",
        price: 25,
        inCart:0
    },

    {
        name: "Porridge Beans",
        tag: "Beans",
        price: 10,
        inCart:0
    },

    {
        name: "Sphaghetti",
        tag: "Noodles",
        price: 15,
        inCart:0
    },

    {
        name: "Burger",
        tag: "Snacks",
        price: 25,
        inCart:0
    },

    {
        name: "Eba and Soup",
        tag: "Swallow",
        price: 35,
        inCart:0
    },

    {
        name: "Genesis Family Bread",
        tag: "Bread",
        price: 15,
        inCart:0
    },

    {
        name: "Butter Bread",
        tag: "Bread",
        price: 20,
        inCart:0
    },

    {
        name: "Vanilla Cake",
        tag: "Cake",
        price: 15,
        inCart:0
    },

    {
        name: "Sponge Cake",
        tag: "Cake",
        price: 25,
        inCart:0
    },

    {
        name: "Chocolate Cake",
        tag: "Cake",
        price: 17,
        inCart:0
    },

    {
        name: "Chicken Burger",
        tag: "Burger",
        price: 30,
        inCart:0
    },

    {
        name: "white Rice",
        tag: "Rice",
        price: 45,
        inCart:0
    },

    {
        name: "Sardine Bread",
        tag: "Bread",
        price: 22,
        inCart:0
    },

    {
        name: "Milk Cake",
        tag: "Cake",
        price: 12,
        inCart:0
    },

    {
        name: "Chinese Rice",
        tag: "Rice",
        price: 40,
        inCart:0
    },

    {
        name: "Mini Bread",
        tag: "Bread",
        price: 25,
        inCart:0
    }

];




for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
  setItems(products);
  
}

function setItems(products){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[products.name] == undefined){
            cartItems = {
                ...cartItems,
                [products.name]: products
            }
        }
        cartItems[products.name].inCart += 1; 
    } else{
        products.inCart = 1;
        cartItems = {
        [products.name]: products
    }
    
    }
   
    localStorage.setItem("productsInCart",JSON.stringify (cartItems));
}

function totalCost(products) {
    // console.log("The product price is", products.price);

    let cartCost = localStorage.getItem("totalCost");
    
    console.log("My CartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + products.price);
    }else{
        localStorage.setItem("totalCost", products.price);
    }
    
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector("products-container");
    if(cartItems && productContainer ){
        console.log('running')
    }
}

// onLoadCartNumbers();
// displayCart();


      // VENDORS

      var opens = document.getElementById('opens');
      var closes = document.getElementById('closes');
      var dark= document.getElementById('dark');
      var dashb = document.getElementById('dashb')

      opens.addEventListener('click', function(){
        closes.style.display = 'block';
        opens.style.display = 'none';
        dashb.style.display = 'block';
        dark.style.display = 'block'
      })

      closes.addEventListener('click', function(){
        closes.style.display = 'none';
        opens.style.display = 'block';
        dashb.style.display = 'none';
        dark.style.display = 'none'
      })
