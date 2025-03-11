const products = [
    { id: 1, name: "Cinnamorol Design", price: 25.00, image: "products/cinnamorol.png" },
    { id: 2, name: "Hello Kitty Design", price: 25.00, image: "products/hellokitty.png" },
    { id: 3, name: "Kuromi Design", price: 25.00, image: "products/kuromi.png" },
    { id: 4, name: "My Melody Design", price: 25.00, image: "products/mymelody.png" },
    { id: 5, name: "Pompompurin Design", price: 25.00, image: "products/pompompurin.png" },
    { id: 6, name: "Cake Design", price: 20.00, image: "products/.png" },
    { id: 7, name: "Lily Design", price: 25.00, image: "products/.png" },
    { id: 8, name: "Personalized Initials Design", price: 30.00, image: "products/.png" },
    { id: 9, name: "Personalized Pens Design", price: 35.00, image: "products/.png" },
    { id: 10, name: "Personalized Mirrors Design", price: 50.00, image: "products/.png" },
    { id: 11, name: "Ribbon Design", price: 15.00, image: "products/.png" },
    { id: 12, name: "Tulip Design", price: 20.00, image: "products/.png" },
    { id: 13, name: "Tulip v2 Design", price: 25.00, image: "products/.png" },
    { id: 14, name: "Cherry Design", price: 20.00, image: "products/.png" },
    { id: 15, name: "Lollipop Design", price: 25.00, image: "products/.png" },
];












let selectedProducts = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
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
        document.getElementById(`checkmark-${product.id}`).style.display = 'block';
    } else {
        document.getElementById(`checkmark-${product.id}`).style.display = 'none';
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

document.addEventListener('DOMContentLoaded', displayProducts);
