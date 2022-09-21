import { homePage } from './home-page.js'
import { contactInfo } from './contact/contact.js'

homePage();
const navbar = document.querySelector('#navbar');

const wipe = () => {
    content.innerHTML = "";
}

const homeTab = document.createElement('button');
homeTab.textContent = 'Home';
homeTab.addEventListener('click', () => {
    wipe();
    return homePage();
});

const menuTab = document.createElement('button');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', () => {
    wipe();

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