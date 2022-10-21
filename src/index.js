import { homePage } from './homepage/home-page.js'
import { contactInfo } from './contact/contact.js'
import { menuPage } from './menu/menu.js'
import { popular } from './menu/popular.js'
import './navbar-styling.css'

homePage();
const navbar = document.querySelector('#navbar');
navbar.setAttribute('style', 'display: flex; width: 100%; justify-content: center; background-color: black;')


export const wipe = () => {
    content.innerHTML = "";
    const defaultCss = document.querySelectorAll('button');
    defaultCss.forEach((e) => {
        e.setAttribute('style', 'box-shadow: none;')
    })

}

const homeTab = document.createElement('button');
homeTab.setAttribute('style', 'box-shadow: 0px -2px 0px 0px inset rgb(250, 247, 63)')

homeTab.textContent = 'Home';
homeTab.addEventListener('click', () => {
    wipe();

    homeTab.setAttribute('style', 'box-shadow: 0px -2px 0px 0px inset rgb(250, 247, 63)')
    homePage();
});

const menuTab = document.createElement('button');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', () => {
    wipe();

    menuTab.setAttribute('style', 'box-shadow: 0px -2px 0px 0px inset rgb(250, 247, 63)')

    menuPage();
    popular();
});

const contactTab = document.createElement('button');
contactTab.textContent = 'Contact Us';
contactTab.addEventListener('click', () => {
    wipe();
    
    contactTab.setAttribute('style', 'box-shadow: 0px -2px 0px 0px inset rgb(250, 247, 63)')
    contactInfo();
});


navbar.appendChild(homeTab);
navbar.appendChild(menuTab);
navbar.appendChild(contactTab);