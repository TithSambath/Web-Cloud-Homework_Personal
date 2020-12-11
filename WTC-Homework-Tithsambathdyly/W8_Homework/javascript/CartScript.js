var itemOnCart = JSON.parse(localStorage.getItem("Carts"));
sessionStorage.setItem("TotalPayment",calTotal());
function displayCart(){
    if (itemOnCart.length !== 0){
        for (let i = 0; i < itemOnCart.length; i++){
            let product = JSON.parse(localStorage.getItem(itemOnCart[i]));
            let prototype = `
            <div id="${"col"+product._id}" class="col-xs-12 col-sm-6 col-md-4">
            <img src="${product._imgsrc}" width="120px" height="136px">
            <div class="pInfo">
                <h4>${product._name}</h4>
                <h6>Unit Price : $${product._price}</h6>
                <label for="pQty">Qty : </label>
                <input type="text" name="inputAmount" id="${product._id}" value="${product._quantity}" 
                    onchange="updateTotal(${product._id})" required><br>
                <button type="button" class="btn btn-danger btn-sm" onclick="Uncart(${product._id})">Uncart</button>
            </div>
            </div>`;
            document.getElementById("r").innerHTML += prototype;
        }
        displayTotalPayment(sessionStorage.getItem("TotalPayment"));
    }else{
        return;
    }
}

function Uncart(ProductId){
    // Update Total Payment First :
    let inputQty = document.getElementById(ProductId);
    inputQty.value = 0;// Because user no longer need it 
    console.log(document.getElementById(ProductId));
    updateTotal(ProductId); // 1 : update Total Payment

    // Start Perform Uncart
    itemOnCart.splice(itemOnCart.indexOf(parseInt(ProductId)),1);  
    localStorage.removeItem("Carts");
    localStorage.setItem("Carts",JSON.stringify(itemOnCart));
    console.log(ProductId);
    document.querySelector("#col"+ProductId).remove();
    // in case user remove all cart
    if (itemOnCart.length === 0)
        disableTotalPayment();
}

function displayTotalPayment(total){
    document.getElementById("TotalPayment").innerHTML = "Total : $" + total; 
}

function calTotal(){
    filterItemCart();
    let subtotal = 0;
    for (let i = 0; i < itemOnCart.length; i++){
        let product = JSON.parse(localStorage.getItem(JSON.stringify(itemOnCart[i])));
        subtotal += product._price * product._quantity;
    }
    subtotal = Math.round(subtotal*100)/100;
    console.log("Subtotal : $" + subtotal);
    return subtotal;
}

function updateTotal(productId){
    console.log(productId);
    let product = JSON.parse(localStorage.getItem(productId));
    console.log("2");
    let inputQty = document.getElementById(productId);
    console.log("3 "+inputQty.value);
    let Total = sessionStorage.getItem("TotalPayment");
    // incase user is not input yet and in case user input negative number
    if (inputQty.value !== "" && inputQty.value >= 0){
        Total = Total - (product._price * product._quantity) + (product._price * inputQty.value);
        Total = Math.round(Total*100)/100;
        // In case user input chars
            if (isNaN(Total)){
                Total = 0
                inputQty.value = 0;
            } 
            else 
                Total = Total; 
        product._quantity = inputQty.value; // init new qty to that particular product
        localStorage.setItem(productId,JSON.stringify(product)); // update the product that has change qty
        sessionStorage.setItem("TotalPayment",Total); // update total payment on session storage.
        displayTotalPayment(Total);
    }else {
        return;
    }
}
function disableTotalPayment(){
    document.getElementById("TotalPayment").innerHTML = "";
}
function filterItemCart(){
    itemOnCart = [...new Set(itemOnCart)];
}