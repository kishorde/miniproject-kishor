$(document).ready(function(){
    $("#prod1").click(function(){
        $("#prod1").text("Added");
    })
})

fetch("http://localhost:3000/itemdetails").then(Response=>Response.json()).then(productArray=>renderAllProducts(productsArray));

function renderAllProducts(productArray){
    productArray.forEach(product => renderAllProducts(product))
}

const findDiv =document.querySelector("#product1")
function renderOneProduct(product){
    const newElement =document.createElement("div")
    newElement.className="content"
    newElement.innerHTML=`
    <div>
    <h2>${product.item_name}</h2>
    <p>${product.item_price}</p>
    </div>`
    findDiv.append(newElement)
}

fetch("http://localhost:3000/cart_items").then(Response=>Response.json()).then(cartItemsArray=>cartArray(cartArray));


function renderAllCartItems(cartItemsArray){
    cartItemsArray.forEach(cartItem=>renderCartItem(cartItem))

}

function renderCartItem(cartItem)
{
    const newLi = document.createElement("li")
    newLi.innerHTML=`
    <p id="pTag"> ${cartItem.product.item_name}: $$(cartItem.product.price)}</p>`

    findListOfItems.append(newLi);
}