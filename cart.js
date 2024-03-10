/*
** EPITECH PROJECT, 2023
** kedufron-t-maskapitaliste
** File description:
** cart.js
*/

function getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function displayCartItems() {
    const cart = getCartFromLocalStorage();
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
        return;
    }
    const itemCounts = {};
    cart.forEach(item => {
        const itemId = item._id;
        if (!itemCounts[itemId]) {
            itemCounts[itemId] = 1;
        } else {
            itemCounts[itemId]++;
        }
    });
    for (const itemId in itemCounts) {
        const itemCount = itemCounts[itemId];
        const item = cart.find(item => item._id === itemId);
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('cart-item');
        const itemHTML = `
            <h3>${item.name}</h3>
            <p>Prix: ${item.price}€</p>
            <p>Quantité: ${itemCount}</p>
        `;
        itemContainer.innerHTML = itemHTML;
        cartContainer.appendChild(itemContainer);
    }
}

displayCartItems());
