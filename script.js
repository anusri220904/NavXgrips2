// Data for all products, categorized
const allProducts = {
    affordable: [
        { id: 'eccentric', name: 'Eccentric Grip', price: 549.00, description: 'Strengthen your forearms and grip with adjustable resistance.', images: ['eccentric1.jpg', 'eccemtric2.jpg', 'eccentric3.jpg'] },
        { id: 'ultra', name: 'Ultra Grip', price: 649.00, description: 'Improves strength', images: ['ultra1.jpg', 'ultra2.jpg', 'ultra3.jpg'] },
        { id: 'cone_60mm', name: '60mm Cone Grip', price: 499.00, description: 'Versatile 60mm cone grip for diverse resistance workouts.', images: ['cone1.jpg', 'cone2.jpg'] },
        { id: 'cone_70mm', name: '70mm Cone Grip', price: 549.00, description: 'Larger 70mm cone grip for advanced grip training and endurance.', images: ['cone1.jpg', 'cone2.jpg'] },
        { id: 'cupping_50mm', name: '50mm Cupping Grip', price: 449.00, description: 'Cylindrical 50mm cupping grip to train forearms and fingers.', images: ['50cupping1.jpg', '50cupping2.jpg', '50cupping3.jpg'] },
        { id: 'cupping_60mm', name: '60mm Cupping Grip', price: 499.00, description: 'Standard 60mm cupping grip for balanced forearm and finger development.', images: ['50cupping1.jpg', '50cupping2.jpg', '50cupping3.jpg'] },
        { id: 'cupping_70mm', name: '70mm Cupping Grip', price: 549.00, description: 'Larger 70mm cupping grip for enhanced forearm and finger strength.', images: ['50cupping1.jpg', '50cupping2.jpg', '50cupping3.jpg'] },
        { id: 'offset_60mm', name: '60mm Offset Grip', price: 549.00, description: '60mm offset grip designed for maximum tension resistance.', images: ['of1.jpg', 'of2.jpg'] },
        { id: 'offset_70mm', name: '70mm Offset Grip', price: 649.00, description: '70mm offset grip for advanced resistance training and grip strength.', images: ['of1.jpg', 'of2.jpg'] },
        { id: 'pns', name: 'Pronation and Supination Grip', price: 399.00, description: 'Lightweight and portable grip trainer for rotation exercises.', images: ['ps1.jpg', 'ps2.jpg', 'ps3.jpg'] },
        { id: 'ygrip', name: 'Y-Grip', price: 449.00, description: 'Dynamic grip trainer for improving grip strength and endurance.', images: ['y1.jpg', 'y2.jpg', 'y3.jpg'] },
        { id: 'antitoproll', name: 'Anti-Toproll', price: 599.00, description: 'Strengthens Pronation and Wrist control.', images: ['at1.jpg', 'at2.jpg'] },
        { id: 'wristwrench', name: 'Wrist Wrench', price: 699.00, description: 'Improves Cupping.', images: ['wr1.jpg', 'wr2.jpg', 'wr3.jpg'] },
    ],
    premium: [
        { id: 'premium1', name: 'Premium Grips coming Soon',price: 0.00, description: 'for updates of premium grips follow us on instagram at NavXgrips', images: ['cm.png'] },
    ],
    combo: [
        {
        id: 'strength_trio_pack',
        name: 'Strength Trio Pack',
        price: 1499.00, // Placeholder
        originalPrice: 1700.00, // Placeholder
        description: 'Eccentric + Cone + Cupping', // Placeholder, you will list grips here
        images: ['st.jpg','eccentric1.jpg','cone1.jpg','50cupping1.jpg'] // Placeholder
    },
    {
        id: 'iron_hand_trio_pack',
        name: 'Iron Hand Trio Pack',
        price: 1799.00, // Placeholder
        originalPrice: 1950.00, // Placeholder
        description: 'Eccentric + Wrist-Wrench + Off-Set', // Placeholder, you will list grips here
        images: ['iron.jpg','eccentric1.jpg','wr1.jpg','of1.jpg'] // Placeholder
    },
    {
        id: 'ultimate_toproll',
        name: 'The Ultimate Toproll',
        price: 1999.00, // Placeholder
        originalPrice: 2150.00, // Placeholder
        description: 'Eccentric + Y-grip + Anti-Toproll + Cone', // Placeholder, you will list grips here
        images: ['top.jpg','eccentric1.jpg','cone1.jpg','at1.jpg','y1.jpg'] // Placeholder
    },
    {
        id: 'ultimate_hooker_pack',
        name: 'Ultimate Hooker Pack',
        price: 2299.00, // Placeholder
        originalPrice: 2500.00, // Placeholder
        description: 'Eccentric + Wrist-Wrench + Off-Set + Cone', // Placeholder, you will list grips here
        images: ['hooker.jpg','eccentric1.jpg','wr1.jpg','of1.jpg','cone1.jpg'] // Placeholder
    },
        { id: 'powerpack', name: 'NavX Power Pack', price: 2099.00, originalPrice: 2400, description: 'Unleash raw strength with the essential arsenal for every armwrestler. hello', images: ['pro.jpg','eccentric1.jpg','cone1.jpg','50cupping1.jpg','ultra1.jpg' ] },
        { id: 'propack', name: 'NavX Pro Pack', price: 2999.00, originalPrice: 3400, description: 'Engineered for competitors—built to elevate your grip game.', images: ['power.jpg', 'eccentric1.jpg','cone1.jpg','50cupping1.jpg','ultra1.jpg','of1.jpg','ps1.jpg'] },
        { id: 'ultimatepack', name: 'NavX Ultimate Pack', price: 3199.00, originalPrice: 3600, description: 'The complete domination kit—no compromises, Just Victory.', images: ['ultimate.jpg','eccentric1.jpg','cone1.jpg','ultra1.jpg','of1.jpg','wr1.jpg','y1.jpg'] },
    ],
    navxhandle: [ // New section for handles
    {
      id: 'affordable_navx_handle',
      name: 'Affordable NavX Handle',
      price: 0.00,
      description: 'An entry-level handle designed for beginners to build foundational grip strength.\n Load Capacity: 120kg',
      images: ['cm.png']
    },
    {
      id: 'pro_navx_handle',
      name: 'NavX Pro Handle',
      price: 0.00,
      description: 'Enhanced grip and durability for intermediate armwrestlers seeking to improve their technique.\n Load Capacity: 120kg',
      images: ['cm.png']
    },
    {
      id: 'power_navx_handle',
      name: 'NavX Power Handle',
      price: 899.00,
      description: 'Built for raw power and advanced training, offering superior feel and control.\n Load Capacity: 120kg',
      images: ['po1.jpg','po2.jpg']
    },
    {
      id: 'ultimate_navx_handle',
      name: 'NavX Ultimate Handle',
      price: 1399.00,
      description: 'The pinnacle of armwrestling handles, engineered for peak performance and elite athletes.\n Load Capacity: 120kg',
      images: ['ultimate1.jpg','ultimate2.jpg']
    },
  ]
};

// --- IMPORTANT: Initialize cart from localStorage IMMEDIATELY ---
// This ensures 'cart' always has the correct items when the script runs.
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
console.log("Initial cart load:", cart);

// --- Constants for delivery charges ---
const COD_DELIVERY_CHARGE = 150.00;
const PREPAID_DELIVERY_CHARGE = 100.00;

/**
 * Renders product cards for a given category into their respective grid.
 * This function will be called by the individual HTML pages.
 * @param {string} category - The category of products to render ('affordable', 'premium', 'combo').
 */
window.renderProducts = function(category) {
    const productsToRender = allProducts[category]; // Get products for the specified category
    const targetGrid = document.getElementById(`${category}-products-grid`);

    // Ensure the targetGrid exists before trying to clear/add content
    if (!targetGrid) {
        console.error(`Target grid for category '${category}' not found.`);
        return;
    }

    targetGrid.innerHTML = ''; // Clear any existing products in the grid

    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const sliderId = product.id; // Use product ID as slider ID for uniqueness
        let imageHtml = '';
        // Generate HTML for all product images, marking the first one as active
        product.images.forEach((imgSrc, idx) => {
            imageHtml += `<img src="${imgSrc}" alt="${product.name} ${idx + 1}" class="${idx === 0 ? 'active' : ''}" onerror="this.onerror=null;this.src='https://placehold.co/400x375/CCCCCC/666666?text=Image+Missing';">`;
        });

        // Populate the product card HTML
        productElement.innerHTML = `
            <div class="product-slider" data-slider-id="${sliderId}">
                ${imageHtml}
                <div class="slider-controls">
                    <button class="prev-btn">&lt;</button>
                    <button class="next-btn">&gt;</button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price-info">
                    ${product.originalPrice ? `<span style="text-decoration: line-through; color: #888;">₹${product.originalPrice.toFixed(2)}</span>` : ''}
                    <strong>₹${product.price.toFixed(2)}</strong>
                </p>
                <button class="btn-add" onclick="addToCart('${product.name}', ${product.price.toFixed(2)})">Add to Cart</button>
            </div>
        `;
        targetGrid.appendChild(productElement);
    });

    // Re-initialize image sliders for the newly added products
    initializeProductSliders(targetGrid);
}

/**
 * Initializes image slider functionality for products within a given container.
 * @param {HTMLElement} container - The HTML element containing the product sliders.
 */
function initializeProductSliders(container) {
    const productSliders = container.querySelectorAll('.product-slider');

    productSliders.forEach(slider => {
        const sliderId = slider.dataset.sliderId;
        const images = slider.querySelectorAll('img');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        let currentIndex = 0;

        /**
         * Displays the image at the given index in the slider.
         * @param {number} index - The index of the image to display.
         */
        function showImage(index) {
            images.forEach(img => img.classList.remove('active')); // Hide all images
            images[index].classList.add('active'); // Show the active image
        }

        showImage(currentIndex); // Show the first image initially

        // Add event listeners for previous/next buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });
        }
    });
}

/**
 * Shows a temporary notification popup.
 * @param {string} message - The message to display in the popup.
 */
function showNotification(message) {
    const notificationPopup = document.getElementById('notification-popup');
    if (notificationPopup) {
        notificationPopup.textContent = message;
        notificationPopup.classList.add('show');

        // Hide the popup after 3 seconds
        setTimeout(() => {
            notificationPopup.classList.remove('show');
        }, 3000);
    } else {
        console.warn("Notification popup element with ID 'notification-popup' not found.");
    }
}

/**
 * Adds an item to the shopping cart.
 * @param {string} name - The name of the product.
 * @param {number} price - The price of the product.
 */
window.addToCart = function(name, price) {
    cart.push({ name, price });
    // Save cart to local storage immediately after adding
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    console.log("Item added to cart. New cart:", cart); // Debugging log
    updateCartDisplay(); // Update display after changes
    showNotification(`${name} added to cart!`); // Show popup message
}

/**
 * Clears all items from the shopping cart.
 */
window.clearCart = function() {
    cart = [];
    // Clear cart from local storage immediately
    localStorage.removeItem('shoppingCart');
    console.log("Cart cleared. Cart:", cart); // Debugging log
    updateCartDisplay(); // Update display after changes
    showNotification("Cart cleared!"); // Show popup message
}

/**
 * Updates the display of the shopping cart, including items, subtotal, delivery charge, total, and WhatsApp link.
 */
window.updateCartDisplay = function() {
    console.log("updateCartDisplay is running!"); // Debugging log
    console.log("Current cart array state in updateCartDisplay:", cart); // Debugging log

    const cartItemsList = document.getElementById('cartItems');
    const cartSubtotalElement = document.getElementById('cartSubtotal');
    const deliveryChargeDisplay = document.getElementById('deliveryChargeDisplay');
    const cartTotalElement = document.getElementById('cartTotal');
    const whatsappLink = document.getElementById('whatsappLink');
    const referralCodeInput = document.getElementById('referralInput');
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');

    // Check if all essential elements are found
    if (!cartItemsList || !cartSubtotalElement || !deliveryChargeDisplay || !cartTotalElement || !whatsappLink || !referralCodeInput || paymentMethodRadios.length === 0) {
        console.warn("One or more essential cart display HTML elements not found. Please ensure your HTML has the correct IDs: 'cartItems', 'cartSubtotal', 'deliveryChargeDisplay', 'cartTotal', 'whatsappLink', 'referralInput', and payment method radios with name 'paymentMethod'. Skipping cart update.");
        return; // Exit if elements are missing
    }
    console.log("All essential HTML elements found."); // Debugging log

    cartItemsList.innerHTML = ''; // Clear current cart items display
    let subtotal = 0; // Initialize subtotal

    // Populate cart items or show empty message
    if (cart.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'Your cart is empty.';
        emptyMessage.style.textAlign = 'center';
        emptyMessage.style.color = '#B3B3B3'; // Medium grey
        cartItemsList.appendChild(emptyMessage);
        console.log("Cart is empty. Displaying empty message."); // Debugging log
    } else {
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${item.name} - ₹${item.price.toFixed(2)}</span>
                <button class="remove-item" data-index="${index}">&times;</button>
            `;
            cartItemsList.appendChild(listItem);
            subtotal += item.price;
            console.log(`Added item to display: ${item.name}`); // Debugging log
        });

        // Add event listeners for remove buttons after items are added to DOM
        cartItemsList.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const indexToRemove = parseInt(event.target.dataset.index);
                const removedItemName = cart[indexToRemove].name;
                cart.splice(indexToRemove, 1);
                localStorage.setItem('shoppingCart', JSON.stringify(cart));
                console.log(`Item removed: ${removedItemName}. New cart:`, cart); // Debugging log
                updateCartDisplay(); // Re-render cart display
                showNotification(`${removedItemName} removed from cart.`);
            });
        });
    }

    // --- Dynamic Delivery Charge Logic ---
    let currentDeliveryCharge = 0;
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (selectedPaymentMethod) {
        if (selectedPaymentMethod.value === 'cod') {
            currentDeliveryCharge = COD_DELIVERY_CHARGE; // ₹150 for COD
            console.log("Payment method: COD. Delivery charge:", currentDeliveryCharge); // Debugging log
        } else if (selectedPaymentMethod.value === 'prepaid') {
            currentDeliveryCharge = PREPAID_DELIVERY_CHARGE; // ₹100 for Prepaid
            console.log("Payment method: Prepaid. Delivery charge:", currentDeliveryCharge); // Debugging log
        }
    } else {
        // Default to COD if no payment method is selected initially (e.g., first page load)
        currentDeliveryCharge = COD_DELIVERY_CHARGE;
        const codRadio = document.querySelector('input[name="paymentMethod"][value="cod"]');
        if (codRadio) codRadio.checked = true; // Programmatically check COD radio
        console.log("No payment method selected, defaulting to COD. Delivery charge:", currentDeliveryCharge); // Debugging log
    }

    let finalTotal = subtotal + currentDeliveryCharge;

    // Update the display elements
    cartSubtotalElement.textContent = subtotal.toFixed(2);
    deliveryChargeDisplay.textContent = currentDeliveryCharge.toFixed(2);
    cartTotalElement.textContent = `Total: ₹${finalTotal.toFixed(2)}`;
    console.log(`Subtotal: ${subtotal.toFixed(2)}, Delivery: ${currentDeliveryCharge.toFixed(2)}, Final Total: ${finalTotal.toFixed(2)}`); // Debugging log


    // Prepare WhatsApp message
    const phoneNumber = "9235698833"; // Your actual WhatsApp number
    let message = "Hello, I would like to order the following items from NavXgrips:\n";

    if (cart.length === 0) {
        message = "Hello, I'm interested in products from NavXgrips.";
    } else {
        cart.forEach(item => {
            message += `- ${item.name} - ₹${item.price.toFixed(2)}\n`;
        });
        message += `Subtotal: ₹${subtotal.toFixed(2)}\n`;
        message += `Delivery Charge: ₹${currentDeliveryCharge.toFixed(2)}\n`;
        message += `Total: ₹${finalTotal.toFixed(2)}\n`;
        message += `Payment Method: ${selectedPaymentMethod ? (selectedPaymentMethod.value === 'cod' ? 'Cash on Delivery' : 'Prepaid') : 'Cash on Delivery (Default)'}`; // Added default for WhatsApp message
    }

    const referralCode = referralCodeInput.value;
    if (referralCode) {
        message += `\nReferral Code: ${referralCode}`;
    }
    const encodedMessage = encodeURIComponent(message);
    whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    console.log("WhatsApp message link updated."); // Debugging log
}

// --- Event Listeners for Page Load and User Interaction ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded. Initializing cart display and listeners."); // Debugging log

    // This will initially load the cart from localStorage and display it
    updateCartDisplay();

    // Attach event listeners to payment method radios only once on page load
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', updateCartDisplay); // Recalculate everything on change
    });
    console.log("Payment method radio listeners attached."); // Debugging log


    // Also update WhatsApp link when referral code changes
    const referralCodeInput = document.getElementById('referralInput');
    if (referralCodeInput) {
        referralCodeInput.addEventListener('input', updateCartDisplay);
        console.log("Referral input listener attached."); // Debugging log
    }

    // Event listener for the clear cart button (assuming it exists in your HTML)
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', window.clearCart); // Call the clearCart function
        console.log("Clear cart button listener attached."); // Debugging log
    }
});
