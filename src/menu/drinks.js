import { buildMenu } from "./build-menu";


export const drinks = () => {
    const content = document.querySelector('#content');

    const navbar = document.getElementsByClassName('menu-navbar');


    const drinks = document.createElement('div');
    drinks.setAttribute('style', 'margin-top: 10rem')

    const items = ['Fresh Blackberry Margarita', 'Fresh Strawberry Margarita', 'Platinum Swirl', 'Grand Swirl', 'Swirl', 'Tres Amigos', 'Beer', 'Mango Passion Lemonade', 'Strawberry Lemonade', 'Raspberry Tea', 'Soft Drinks'];

    const prices = [13, 13, 14.5, 14.5, 10, 13.5, 6, 4.5, 4.5, 4.5, 4.5];

    buildMenu(items, prices, drinks);

}