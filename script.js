const products = [
    { id: 1, name: "Cinnamorol Design", price: 25.00, image: "products/cinnamorol.png" },
    { id: 2, name: "Hello Kitty Design", price: 25.00, image: "products/hellokitty.png" },
    { id: 3, name: "Kuromi Design", price: 25.00, image: "products/kuromi.png" },
    { id: 4, name: "My Melody Design", price: 25.00, image: "products/mymelody.png" },
    { id: 5, name: "Pompompurin Design", price: 25.00, image: "products/pompompurin.png" },
    { id: 6, name: "Cake Design", price: 20.00, image: "products/cake.png" },
    { id: 7, name: "Lily Design", price: 25.00, image: "products/lily.png" },
    { id: 8, name: "Personalized Initials Design", price: 30.00, image: "products/initials.png" },
    { id: 9, name: "Personalized Pens Design", price: 35.00, image: "products/personalizedpen.png" },
    { id: 10, name: "Personalized Mirrors Design", price: 50.00, image: "products/mirror.png" },
    { id: 11, name: "Ribbon Design", price: 15.00, image: "products/ribbon.png" },
    { id: 12, name: "Tulip Design", price: 20.00, image: "products/tulip.png" },
    { id: 13, name: "Tulip v2 Design", price: 25.00, image: "products/tulipv2.png" },
    { id: 14, name: "Cherry Design", price: 20.00, image: "products/cherry.png" },
    { id: 15, name: "Lollipop Design", price: 25.00, image: "products/lollipop.png" },
    { id: 16, name: "Ice Cream Design", price: 35.00, image: "products/icecream.png" },
    { id: 17, name: "Daisy Flower Design", price: 20.00, image: "products/daisyflower.png" },
    { id: 18, name: "Pup Design", price: 20.00, image: "products/pup.png" },
];

const recommendedProducts = [
    products[0], // Cinnamorol Design
    products[1], // Hello Kitty Design
    products[2], // Kuromi Design
    products[12],
    products[13],
    products[14],
];

// Search and Sort Functions
function searchProducts(query) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    displayProducts(filteredProducts);
}

function sortProducts(criteria) {
    const sortedProducts = [...products];
    if (criteria === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'price') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }
    displayProducts(sortedProducts);
}

let selectedProducts = [];

function displayRecommendedProducts() {
    const recommendedList = document.getElementById('recommended-products');
    recommendedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>Price: ₱${product.price.toFixed(2)}</p>
        `;
        recommendedList.appendChild(productDiv);
    });
}

function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing products
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>Price: ₱${product.price.toFixed(2)}</p>
            <button class="select-button" onclick="toggleSelection(${product.id})">Select</button>
            <span class="checkmark" id="checkmark-${product.id}" style="display: none;">✔️</span>
        `;
        productList.appendChild(productDiv);
    });
}

function toggleSelection(productId) {
    const product = products.find(p => p.id === productId);
    if (selectedProducts.includes(product)) {
        selectedProducts = selectedProducts.filter(p => p.id !== productId);
        document.getElementById(`checkmark-${product.id}`).style.display = 'none';
    } else {
        document.getElementById(`checkmark-${product.id}`).style.display = 'block';
        selectedProducts.push(product);
    }
    document.getElementById('checkout-button').style.display = selectedProducts.length > 0 ? 'block' : 'none';
}

document.getElementById('checkout-button').addEventListener('click', function() {
    const productNames = selectedProducts.map(p => p.name).join(', ');
    const message = `Hello! I would like to purchase: ${productNames}`;
    const url = `http://m.me/xiacraftsonline?text=${encodeURIComponent(message)}`;
    window.location.href = url;
});

document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    displayRecommendedProducts();

    document.getElementById('search-input').addEventListener('input', function() {
        searchProducts(this.value);
    });

    document.getElementById('sort-select').addEventListener('change', function() {
        sortProducts(this.value);
    });
});

function searchProducts(query) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    displayProducts(filteredProducts);
}

function sortProducts(criteria) {
    const sortedProducts = [...products];
    if (criteria === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'price') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }
    displayProducts(sortedProducts);
}

document.getElementById('search-input').addEventListener('input', function() {
    searchProducts(this.value);
});

document.getElementById('sort-select').addEventListener('change', function() {
    sortProducts(this.value);
});
