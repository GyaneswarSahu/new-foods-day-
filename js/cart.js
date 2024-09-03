$(document).ready(function() {
    var styles = `
        .card.mb-3 {
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .card-body {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .card-body img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 8px;
            margin-right: 20px;
        }
        .card-title {
            font-size: 1.2rem;
            margin-bottom: 10px;
        }
        .btn-outline-secondary.btn-sm {
            margin: 0 5px;
        }
        .card-text {
            margin-bottom: 5px;
        }
        .d-flex.justify-content-between.align-items-center {
            margin-top: 10px;
        }
        .d-flex.justify-content-between.align-items-center .btn {
            margin-right: 10px;
        }
        .mt-2 {
            font-weight: bold;
            color: #555;

        }
            .price{
            border:2px solid green;
            background: green;
            }

 




.incdcm{
 color: #007bff;
 margin-right: 350px;
    
    
} 
    `;

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    function loadCartItems() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        var cartItemsContainer = $("#cartItems");
        var totalAmount = 0;

        cartItemsContainer.empty();
        cartItems.forEach(function(item, index) {
            var itemTotal = parseFloat(item.price) * item.quantity;
            var cartItem = `
         
    <div class="card mb-3 cartjs ">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${item.photo}" class="card-img" alt="${item.dish}">
            </div>
            <div class="col-md-8">
            
                <div class="card-body">


     
                
        



                
                 <div class="d-flex justify-content-between dishname">
                    <h5 class="card-title ">${item.dish}</h5>
                       </div>
                     <div>
                        
                        </div>
                 
                    <div class="d-flex justify-content-between align-items-center">
                       
                        <button class="btn btn-danger remove-from-cart btn-sm" data-index="${index}"><i class="fa-solid fa-trash-can" style="color: #fafcff;"></i></button>
                           <p class="card-text price total"><i class="fa-solid fa-indian-rupee-sign" style="color: #ffffff;"></i>${item.price}</p>
                    </div>
                  
                </div>
                           
       
            </div>
            <div class="d-flex justify-content-between xyz">        <div class=" d-flex justify-content-between incdcm ">   
                <button class="btn btn-outline-secondary btn-sm decrement-quantity" data-index="${index}">-</button>
                            <span class="mx-2 ">${item.quantity}</span>
                            <button class="btn btn-outline-secondary btn-sm increment-quantity" data-index="${index}">+</button></div></div>
        </div>
    </div>
   
            `;
            cartItemsContainer.append(cartItem);
            totalAmount += itemTotal;
        });

        $("#totalAmount").text(totalAmount.toFixed(2));
    }

    function updateCartCount() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        $("#cartCount").text(cartItems.length);
    }

    $(document).on("click", ".increment-quantity", function() {
        var index = $(this).data("index");
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        cartItems[index].quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        loadCartItems();
    });

    $(document).on("click", ".decrement-quantity", function() {
        var index = $(this).data("index");
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity -= 1;
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            loadCartItems();
        }
    });

    $(document).on("click", ".remove-from-cart", function() {
        var index = $(this).data("index");
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        loadCartItems();
        updateCartCount();
    });

    $("#addMoreDishes").click(function() {
        window.location.href = "index.html";
    });

    $("#proceedToOrders").click(function() {
        alert("Proceeding to orders...");
    });

    loadCartItems();
});
$(document).ready(function() {
    // Existing code...
    
    $("#proceedToOrders").click(function() {
        window.location.href = "order.html";
    });

    loadCartItems();
});
//for dish wise total
//<p class="mt-2">Total: $${itemTotal.toFixed(2)}</p>