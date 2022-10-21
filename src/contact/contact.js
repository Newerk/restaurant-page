import './contact-page.css'
import { contactLeft } from './left-half.js';
import { contactRight } from './right-half.js';

//populates page with contact information page elements
export const contactInfo = () => {
    const content = document.querySelector('#content');
    content.setAttribute('style', `display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: none; background-color: white; height: 100%;`)

    contactLeft();
    contactRight();
};



