import { buildMenu } from "./build-menu";

export const popular = () => {
    const content = document.querySelector('#content');

    const navbar = document.getElementsByClassName('menu-navbar');


    const test = document.createElement('div');
    test.setAttribute('style', 'margin-top: 10rem');

    const items = ['Filet', 'Ribeye', 'Stuffed Chicken Breast',
        'Garlic Mashed', 'Baked Potato', 'Caesar Salad', 'Potatoes Au Gratin',
        'Classic Cheesecake', 'Creamed Spinash', 'Sweet Potato Casserole'];

    const prices = [54, 62, 37, 13, 12, 13, 13, 11, 13, 13];

    buildMenu(items, prices, test);


}