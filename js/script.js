
// $(document).ready(function(){
//     // Function to update the cart count
//     function updateCartCount() {
//         var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         $("#cartCount").text(cartItems.length);
//     }

//     // Add to cart button click handler
//     $(".add-to-cart").click(function(event){
//         event.preventDefault();
//         var dish = $(this).data("dish");
//         var price = $(this).data("price");
//         var cartItem = { dish: dish, price: price };
//         var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         cartItems.push(cartItem);
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//         updateCartCount();
//     });

//     // Update cart count on page load
//     updateCartCount();
// });
$(document).ready(function() {
    // Toggle category items
    $(".toggle-category").click(function() {
        var category = $(this).parent().parent().attr("data-category");
        $("#collapseCategory" + category).collapse('toggle');
    });

    // Add to cart functionality
    $(".add-to-cart").click(function() {
        var dish = $(this).data("dish");
        var price = $(this).data("price");
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push({ dish: dish, price: price });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateCartCount();
    });

    // Update cart count            
    function updateCartCount() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        $("#cartCount").text(cartItems.length);
    }

    // Initialize cart count on page load
    updateCartCount();
});

$(document).ready(function() {
    $(".toggle-category").click(function() {
        var category = $(this).parent().parent().attr("data-category");
        $("#collapseCategory" + category).collapse('toggle');
    });

    $(".add-to-cart").click(function() {
        var dish = $(this).data("dish");
        var price = $(this).data("price");
        var photo = $(this).data("photo");
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        var itemExists = false;

        cartItems.forEach(function(item) {
            if (item.dish === dish) {
                item.quantity += 1;
                itemExists = true;
            }
        });

        if (!itemExists) {
            cartItems.push({ dish: dish, price: price, photo: photo, quantity: 1 });
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateCartCount();
    });

    function updateCartCount() {
        var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        $("#cartCount").text(cartItems.length);
    }

    function updateCategoryCounts() {
        var categories = $(".category");
        var totalDishes = 0;

        categories.each(function() {
            var categoryCount = $(this).find(".add-to-cart").length;
            var categoryId = $(this).attr("data-category");
            $("#category" + categoryId + "Count").text(categoryCount);
            totalDishes += categoryCount;
        });

        $("#totalDishes").text(totalDishes);
    }

    // Initialize cart count and category counts on page load
    updateCartCount();
    updateCategoryCounts();
});


$(document).ready(function() {
    // Toggle side menu
    $('#menuToggle').click(function() {
        $('#sidebar').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times'); // Change the icon when toggled
    });

   

    // Add to cart functionality and other scripts (as previously defined)
});
