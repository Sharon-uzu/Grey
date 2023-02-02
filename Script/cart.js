let select_cart_item = {name: "fried rice", price: 2000, water: 150};
var inputc = document.getElementById('inputc');
let quantity = 1;
const quantity_value = document.getElementById("quantity");
const price = document.getElementById("price");
quantity_value.textContent = quantity;


function refresh(){
    if(inputc.checked == true){
        return inputc.checked = false
    }
}
function check1(){
    if(inputc.checked == true){
        price.textContent = quantity * (select_cart_item.price + select_cart_item.water);
    }
    else{
        price.textContent = quantity * select_cart_item.price
    }
}


const decrement_button = document.getElementById("decrement");
const increment_button = document.getElementById("increment");
increment_button.addEventListener("click", (e) => {
    e.preventDefault()
    if(inputc.checked == true){
        quantity = quantity + 1
        quantity_value.textContent = quantity 
        price.textContent = quantity * (select_cart_item.price + select_cart_item.water);
    }
    else{
        quantity = quantity + 1
        quantity_value.textContent = quantity 
        price.textContent = quantity * select_cart_item.price
    }
    
})

decrement_button.addEventListener("click", (e) => {
    e.preventDefault()
    if( quantity > 1){
        quantity = quantity - 1
        quantity_value.textContent = quantity 
        price.textContent = quantity * (select_cart_item.price + select_cart_item.water);
        // if(inputc.checked == false)
        // price.textContent = quantity * (select_cart_item.price + select_cart_item.water);
        if(inputc.checked == false){
            price.textContent = quantity * select_cart_item.price ;
           }
    }
        
    
})

    

