document.addEventListener("DOMContentLoaded", function () {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const quantityValues = document.querySelectorAll('.quantity-value');
    const trashIcons = document.querySelectorAll('.trash');
    const totalElement = document.getElementById('total-value');

    let total = 0;

    // Event listener for increment buttons
    incrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentValue = parseInt(quantityValues[index].textContent);
            quantityValues[index].textContent = currentValue + 1;
            updateTotal();
        });
    });

    // Event listener for decrement buttons
    decrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentValue = parseInt(quantityValues[index].textContent);
            if (currentValue > 1) {
                quantityValues[index].textContent = currentValue - 1;
                updateTotal();
            }
        });
    });

    // Event listener for trash icons
    trashIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const cartItem = icon.closest('.cart-item');
            cartItem.remove();
            updateTotal();
        });
    });

    function updateTotal() {
        total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity-value').textContent);
            total += quantity;
        });
        totalElement.textContent = total;
    }
});
