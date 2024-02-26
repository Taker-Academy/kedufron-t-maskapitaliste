/*
** EPITECH PROJECT, 2023
** kedufron-t-maskapitaliste
** File description:
** script.js
*/

async function fetchAndDisplayItems() {
    try {
        const response = await fetch('https://api.kedufront.juniortaker.com/item/');
        const items = await response.json();
        const container = document.getElementById('items-container');
        if (items.length === 0) {
            container.innerHTML = '<p>Aucun item n\'a été trouvé.</p>';
            return;
        }

        items.forEach(item => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('item');
            const itemHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Description: ${item.description}</p>
                <p>Prix: ${item.price}€</p>
                <p>Date de création: ${item.createdIn}</p>
            `;
            itemContainer.innerHTML = itemHTML;

            container.appendChild(itemContainer);
        });
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des items :', error);
    }
}