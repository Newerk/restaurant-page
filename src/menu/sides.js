import { buildMenu } from "./build-menu";

export const sides = () => {
    const content = document.querySelector('#content');

    const navbar = document.getElementsByClassName('menu-navbar');


    const sides = document.createElement('div');
    sides.setAttribute('style', 'margin-top: 10rem')
    
    const items = ['Garlic Mashed','Baked Potato','Sweet Potato Casserole','Potatoes Au Gratin','Creamed Spinash','Grilled Asparagus','Brussels Sprouts','Cremini Mushrooms','Fresh Broccoli','Mac & Cheese'];

    const prices = [13,12,13,13,12,13,14,14,13,14];

    buildMenu(items, prices, sides);


    content.appendChild(sides);

}