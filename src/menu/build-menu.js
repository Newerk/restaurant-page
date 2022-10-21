export const buildMenu = (foodArr, priceArr, parentEl) => {
    const content = document.querySelector('#content');

    for (let i = 0; i < foodArr.length; i++) {
        const item = document.createElement('div');
        item.className = 'menu-item';

        const food = document.createElement('span');
        food.className = 'food';
        food.textContent = `${foodArr[i]} `;
        food.setAttribute('style', 'color: white; font-size: 25px')

        const price = document.createElement('span');
        price.className = 'price';
        price.textContent = priceArr[i].toFixed(2);
        price.setAttribute('style', 'color: rgb(204, 1, 1)');


        item.appendChild(food);
        item.appendChild(price)

        parentEl.className = 'menu-container';
        parentEl.appendChild(item);

    }
    content.appendChild(parentEl);
}