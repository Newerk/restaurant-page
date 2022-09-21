import { homePage } from './homepage/home-page.js'
import { contactInfo } from './contact/contact.js'
import { menuPage } from './menu/menu.js'
import { popular } from './menu/popular.js';

homePage();
const navbar = document.querySelector('#navbar');

export const wipe = () => {
    content.innerHTML = "";

}

const homeTab = document.createElement('button');
homeTab.textContent = 'Home';
homeTab.addEventListener('click', () => {
    wipe();
    homePage();
});

const menuTab = document.createElement('button');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', () => {
    wipe();
    menuPage();
    popular();
});

const contactTab = document.createElement('button');
contactTab.textContent = 'Contact Us';
contactTab.addEventListener('click', () => {
    wipe();
    contactInfo();
});


navbar.appendChild(homeTab);
navbar.appendChild(menuTab);
navbar.appendChild(contactTab);