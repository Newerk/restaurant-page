import { wipe } from "..";
import { fullMenu } from "./full-menu";
import { popular } from "./popular";
import { sides } from "./sides";
import { drinks } from "./drinks";
import { specials } from "./specials";

export const menuPage = () => {
    const content = document.querySelector('#content');

    const navbar = document.createElement('div');
    navbar.className = 'menu-navbar';

    const fullMenuBtn = document.createElement('button');
    fullMenuBtn.textContent = 'Full Menu';
    fullMenuBtn.addEventListener('click', () => {
        wipe();
        content.appendChild(navbar);
        fullMenu();
    })

    const popularBtn = document.createElement('button');
    popularBtn.textContent = 'Popular';
    popularBtn.addEventListener('click', () => {
        wipe();
        content.appendChild(navbar);
        popular();
    })

    const sidesBtn = document.createElement('button');
    sidesBtn.textContent = 'Sides';
    sidesBtn.addEventListener('click', () => {
        wipe();
        content.appendChild(navbar);
        sides();
    })

    const drinksBtn = document.createElement('button');
    drinksBtn.textContent = 'Drinks';
    drinksBtn.addEventListener('click', () => {
        wipe();
        content.appendChild(navbar);
        drinks();
    })

    const specialsBtn = document.createElement('button');
    specialsBtn.textContent = 'Specials';
    specialsBtn.addEventListener('click', () => {
        wipe();
        content.appendChild(navbar);
        specials();
    })


    navbar.appendChild(fullMenuBtn);
    navbar.appendChild(popularBtn);
    navbar.appendChild(sidesBtn);
    navbar.appendChild(drinksBtn);
    navbar.appendChild(specialsBtn);

    content.appendChild(navbar);



}