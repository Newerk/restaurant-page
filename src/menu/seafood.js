import { buildMenu } from "./build-menu";


export const seafood = () => {
    const content = document.querySelector('#content');

    const navbar = document.getElementsByClassName('menu-navbar');


    const seafood = document.createElement('div');
    seafood.setAttribute('style', 'margin-top: 10rem')


    const items = ['Garlic Crusted Sea Bass', 'Sizzling Crab Cakes', 'King Salmon & Shrimp'];

    const prices = [45, 41, 41];

    buildMenu(items, prices, seafood);



}