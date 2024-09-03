// $(document).ready(function() {
//     // Example function to generate a random order number
//     function generateOrderNo() {
//         return 'ORD' + Math.floor(Math.random() * 1000000);
//     }

//     // Function to calculate the total amount
//     function calculateTotalAmount() {
//         var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         var totalAmount = 0;

//         cartItems.forEach(function(item) {
//             totalAmount += item.price * item.quantity;
//         });

//         return totalAmount.toFixed(2);
//     }

//     // Set the order number and total amount
//     $("#orderNo").val(generateOrderNo());
//     $("#totalAmount").val('$' + calculateTotalAmount());

//     $("#orderForm").submit(function(e) {
//         e.preventDefault();

//         var orderDetails = {
//             orderNo: $("#orderNo").val(),
//             totalAmount: $("#totalAmount").val(),
//             name: $("#name").val(),
//             email: $("#email").val(),
//             mobileNo: $("#mobileNo").val(),
//             location: $("#location").val(),
//             deliveryAddress: $("#deliveryAddress").val(),
//             street: $("#street").val(),
//             landmark: $("#landmark").val(),
//             deliveryDate: $("#deliveryDate").val(),
//             deliveryTime: $("#deliveryTime").val()
//         };

//         // Save order details to local storage or send it to the server
//         console.log(orderDetails);

//         alert("Order submitted successfully!");

//         // Clear cart items after order is placed
//         localStorage.removeItem("cartItems");

//         // Redirect to home page
//         window.location.href = "index.html";
//     });
// });
// $("#backtocart").click(function() {
//     window.location.href = "cart.html";
// });

$(document).ready(function() {
    function generateOrderNo() {
        return 'ORD' + Math.floor(Math.random() * 1000000);
    }

    function calculateTotalAmount() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        var totalAmount = 0;

        cartItems.forEach(function(item) {
            totalAmount += item.price * item.quantity;
        });

        return totalAmount.toFixed(2);
    }

    function getCartItems() {
        return JSON.parse(localStorage.getItem("cartItems")) || [];
    }

    $("#orderNo").val(generateOrderNo());
    $("#totalAmount").val('$' + calculateTotalAmount());
    $("#cartItems").val(JSON.stringify(getCartItems()));

    $("#orderForm").submit(function(e) {
        e.preventDefault();

        var orderDetails = {
            orderNo: $("#orderNo").val(),
            totalAmount: $("#totalAmount").val(),
            name: $("#name").val(),
            email: $("#email").val(),
            mobileNo: $("#mobileNo").val(),
            location: $("#location").val(),
            deliveryAddress: $("#deliveryAddress").val(),
            street: $("#street").val(),
            landmark: $("#landmark").val(),
            deliveryDate: $("#deliveryDate").val(),
            deliveryTime: $("#deliveryTime").val(),
            cartItems: getCartItems()
        };

        $.post("submit_order.php", orderDetails, function(response) {
            alert(response);
            localStorage.removeItem("cartItems");
            window.location.href = "index.html";
        });
    });
});
$("#backtocart").click(function() {
    window.location.href = "cart.html";
});