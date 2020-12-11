class product {
    constructor(id,name,imgsrc,price,quantity,discount){
        this._id = id;
        this._name = name;
        this._imgsrc = imgsrc;
        this._price = price;
        this._quantity = quantity;
        this._discount = discount;
    }
    get Id(){
        return this._id;
    }
    get Name(){
        return this._name;
    }
    get ImageSrc(){
        return this._imgsrc;
    }
    get Price(){
        return this._price;
    }
    get Quantity(){
        return this._quantity;
    }
    get Discount(){
        return this._discount;
    }
    set SetQty(quantity){
        this._quantity = quantity;
    }
}
/*   Create Product Container    */
var pContainer = new Array(15);
var cart = new Array();
/*   Predefine Product    */
pContainer[0] = new product(1,"Casual Sweater","https://images-na.ssl-images-amazon.com/images/I/51wMWCPZf3L._AC_UX342_.jpg",22.99,1,0);
pContainer[1] = new product(2,"Sweat shirt","https://m.media-amazon.com/images/I/91Uze8Ig3GL._AC_UL320_.jpg",12.99,1,0);
pContainer[2] = new product(3,"V-neck Sweater","https://images-na.ssl-images-amazon.com/images/I/A1oll9SrNYL._AC_UX342_.jpg",16.80,1,0);
pContainer[3] = new product(4,"Sweat shirt","https://m.media-amazon.com/images/I/51-+rFGMjNL._AC_UL320_.jpg",16.99,1,0);
pContainer[4] = new product(5,"Knit Sweat","https://m.media-amazon.com/images/I/31r-khL+bnL._AC_SR160,200_.jpg",22.99,1,0);
pContainer[5] = new product(6,"Red-Black Shirt","https://m.media-amazon.com/images/I/51CuFXVxReL._AC_SR160,200_.jpg",16.00,1,0);
pContainer[6] = new product(7,"Flannel Shirt","https://images-na.ssl-images-amazon.com/images/I/81fhNvX58vL._AC_UX342_.jpg",19.99,1,0);
pContainer[7] = new product(8,"Plaid Shirt","https://images-na.ssl-images-amazon.com/images/I/716nmRyYmNL._AC_UX466_.jpg",17.95,1,0);
pContainer[8] = new product(9,"Short-Sleeve shirt","https://images-na.ssl-images-amazon.com/images/I/81HxYYENhGL._AC_UX342_.jpg",16.0,1,0);
pContainer[9] = new product(10,"Hawaiian Shirts","https://images-na.ssl-images-amazon.com/images/I/81v11iKGuKL._AC_UX342_.jpg",23.99,1,0);
pContainer[10] = new product(11,"Classic Jacket","https://m.media-amazon.com/images/I/71GCiWSSCLL._AC_UL320_.jpg",54.89,1,0);
pContainer[11] = new product(12,"Military Jacket","https://m.media-amazon.com/images/I/71X5Dv-bwyL._AC_UL320_.jpg",62.98,1,0);
pContainer[12] = new product(13,"Rain Jacket","https://m.media-amazon.com/images/I/61kIfg4TqwL._AC_UL320_.jpg",65.98,1,0);
pContainer[13] = new product(14,"Shirt Jacket","https://m.media-amazon.com/images/I/71MDJ2AP+0L._AC_UL320_.jpg",79.99,1,0);
pContainer[14] = new product(15,"Slim fit Jacket","https://m.media-amazon.com/images/I/512TE0Tr35L._AC_UL320_.jpg",31.99,1,0);

function addToCart(productId){
    if (localStorage.getItem("Carts") === null){
        cart.push(productId);
        console.log(cart.length);
        localStorage.setItem("Carts",JSON.stringify(cart));
    }else{
        let tmpCart = JSON.parse(localStorage.getItem("Carts"));
        tmpCart.push(productId);
        localStorage.setItem("Carts",JSON.stringify(tmpCart));
    }
    localStorage.setItem(productId,JSON.stringify(pContainer[productId-1]));
}
function test(){
    localStorage.clear();
}