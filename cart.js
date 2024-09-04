document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');
    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }
    cartItems.forEach(item => {
        const incrementButton = item.querySelector('.increment');
        const decrementButton = item.querySelector('.decrement');
        const quantityElement = item.querySelector('.item-quantity');

        incrementButton.addEventListener('click', () => {
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        });

        decrementButton.addEventListener('click', () => {
            const currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotalPrice();
            }
        });
    });
    cartItems.forEach(item => {
        const deleteButton = item.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });
    });
    cartItems.forEach(item => {
        const likeButton = item.querySelector('.like-btn');
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });
});