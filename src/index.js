import './home-page.js'
import { contactInfo } from './contact.js'

const wipe = () => {
    content.innerHTML = "";
}

const contactTab = document.createElement('button');
contactTab.textContent = 'Contact Us';
contactTab.addEventListener('click', () => {
wipe();
contactInfo();
})

document.body.appendChild(contactTab);