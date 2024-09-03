 




$(document).ready(function () {
    const menuItems = [
        {
            category: "Appetizers",
            items: [
                { name: "Spring Rolls", image: "./images/dish(1).jpeg", price: 5.99, description: "Delicious crispy spring rolls." },
                { name: "Garlic Bread", image: "./images/dish(2).jpeg", price: 3.99, description: "Garlic-flavored bread sticks." }
            ]
        },
        {
            category: "Main Course",
            items: [
                { name: "Grilled Chicken", image: "./images/dish(3).jpeg", price: 12.99, description: "Juicy grilled chicken." },
                { name: "Pasta", image: "./images/dish(4).jpeg", price: 10.99, description: "Creamy Alfredo pasta." }
            ]
        }
        , {
            category: "Main Course",
            items: [
                { name: "Grilled Chicken", image: "./images/dish(3).jpeg", price: 12.99, description: "Juicy grilled chicken." },
                { name: "Pasta", image: "./images/dish(4).jpeg", price: 10.99, description: "Creamy Alfredo pasta." }
            ]
        }
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function loadMenuItems() {
        let menuHtml = '';
        menuItems.forEach((category, index) => {
            menuHtml += `
                <div class="menu-category" data-toggle="collapse" href="#collapse${index}" role="button" aria-expanded="false" aria-controls="collapse${index}">
                    <h3>${category.category}</h3>
                </div>
                <div class="collapse" id="collapse${index}">
                    <div class="row">
            `;
            category.items.forEach(item => {
                menuHtml += `
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <img src="${item.image}" class="card-img-top" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                                <p class="card-text">$${item.price}</p>
                                <button class="btn btn-primary add-to-cart" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            menuHtml += `</div></div>`;
        });
        $('#menu-items').html(menuHtml);
    }

    function updateCartCount() {
        $('#cart-count').text(cart.length);
    }

    function updateCartPage() {
        let cartItemsHtml = '';
        let totalAmount = 0;
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            totalAmount += itemTotal;
            cartItemsHtml += `
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${item.image}" class="img-fluid" alt="${item.name}">
                            </div>
                            <div class="col-md-9">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">Price: $${item.price}</p>
                                <p class="card-text">Quantity: 
                                    <select class="quantity-select" data-index="${index}">
                                        ${Array.from({ length: 10 }, (_, i) => i + 1).map(i => `<option value="${i}" ${i === item.quantity ? 'selected' : ''}>${i}</option>`).join('')}
                                    </select>
                                </p>
                                <p class="card-text">Total: $${itemTotal.toFixed(2)}</p>
                                <button class="btn btn-danger remove-from-cart" data-index="${index}">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        $('#cart-items').html(cartItemsHtml);
        $('#total-amount').text(totalAmount.toFixed(2));
    }

    function generateOrderNumber() {
        return 'ORD-' + Math.floor(Math.random() * 1000000);
    }

    $(document).on('click', '.add-to-cart', function () {
        const name = $(this).data('name');
        const price = parseFloat($(this).data('price'));
        const image = $(this).data('image');
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, image, quantity: 1 });
            alert ('item added to cart');
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartPage();
    });

    $(document).on('change', '.quantity-select', function () {
        const index = $(this).data('index');
        const quantity = parseInt($(this).val());
        cart[index].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartPage();
    });

    $(document).on('click', '.remove-from-cart', function () {
        const index = $(this).data('index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartPage();
    });

    $('#menu-toggle').click(function () {
        $('#sidebar-wrapper').toggleClass('active');
        $('#wrapper').toggleClass('active');
    });

    $('.sidebar-menu').click(function () {
        const target = $(this).data('target');
        $(target).collapse('toggle');
    });

    $('.menu-category').click(function () {
        const target = $(this).attr('href');
        $(target).collapse('toggle');
    });

    $('#clear-cart').click(function () {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartPage();
    });

    $('#proceed-order').click(function () {
        window.location.href = 'order.html';
    });

    if (window.location.pathname.endsWith('order.html')) {
        $('#order-number').val(generateOrderNumber());
        $('#total-amount').val(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2) : '0.00');
    }

    $('#order-form').submit(function (e) {
        e.preventDefault();
        alert('Order submitted successfully!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });

    loadMenuItems();
    updateCartPage();
    updateCartCount();
});

