document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product');

                productCard.innerHTML = `
                    <img src="${product.thumbnailUrl}" alt="${product.title}">
                    <div class="product-details">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-price">$${(Math.random() * 100).toFixed(2)}</p>
                        <button onclick="viewProduct(${product.id})">View Product</button>
                    </div>
                `;

                productList.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });

    window.viewProduct = function(productId) {
        window.open(`product.html?id=${productId}`, '_blank');
    };
});
