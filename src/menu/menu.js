import { fullMenu } from "./full-menu";
import { popular } from "./popular";
import { sides } from "./sides";
import { drinks } from "./drinks";
import { seafood } from "./seafood";
import './menu-navbar.css'




export const menuPage = () => {
    const content = document.querySelector('#content');
    content.setAttribute('style', 'background-color: rgb(41, 41, 41);')

    const wipe = () => {

        const defaultCss = document.querySelectorAll('.menu-nav-btn');

        // clears content of page w/o using innerHTML
        const node = document.getElementById('content');
        while (node.hasChildNodes()) {
            node.removeChild(node.firstChild);
        }

        defaultCss.forEach(element => {
            element.setAttribute('style', 'box-shadow: none; background-color: black;');
        });


    }

    const navbar = document.createElement('div');
    navbar.className = 'menu-navbar';

    const fullMenuBtn = document.createElement('button');
    fullMenuBtn.textContent = 'Full Menu';
    fullMenuBtn.id = 'full-menu-btn';
    fullMenuBtn.className = 'menu-nav-btn';
    fullMenuBtn.addEventListener('click', () => {
        wipe();
        content.appendChild(navbar);
        fullMenuBtn.setAttribute('style', 'background-color: rgb(41, 41, 41); box-shadow: 0px 2px 0px 0px inset rgb(250, 247, 63);')
        fullMenu();

    });

    const popularBtn = document.createElement('button');
    popularBtn.textContent = 'Popular';
    popularBtn.id = 'popular-btn';
    popularBtn.className = 'menu-nav-btn';

    popularBtn.setAttribute('style', 'background-color: rgb(41, 41, 41); box-shadow: 0px 2px 0px 0px inset rgb(250, 247, 63);')

    popularBtn.addEventListener('click', () => {
        wipe();
        content.appendChild(navbar);
        popularBtn.setAttribute('style', 'background-color: rgb(41, 41, 41); box-shadow: 0px 2px 0px 0px inset rgb(250, 247, 63);')
        popular();
    });

    const seafoodBtn = document.createElement('button');
    seafoodBtn.textContent = 'Seafood';
    seafoodBtn.id = 'seafood-btn';
    seafoodBtn.className = 'menu-nav-btn';


    seafoodBtn.addEventListener('click', () => {
        wipe();
        seafoodBtn.setAttribute('style', 'background-color: rgb(41, 41, 41); box-shadow: 0px 2px 0px 0px inset rgb(250, 247, 63);');
        content.appendChild(navbar);
        seafood();
    });

    const sidesBtn = document.createElement('button');
    sidesBtn.textContent = 'Sides';
    sidesBtn.id = 'sides-btn';
    sidesBtn.className = 'menu-nav-btn';


    sidesBtn.addEventListener('click', () => {
        wipe();
        sidesBtn.setAttribute('style', 'background-color: rgb(41, 41, 41); box-shadow: 0px 2px 0px 0px inset rgb(250, 247, 63);');
        content.appendChild(navbar);
        sides();
    });

    const drinksBtn = document.createElement('button');
    drinksBtn.textContent = 'Drinks';
    drinksBtn.id = 'drinks-btn';
    drinksBtn.className = 'menu-nav-btn';


    drinksBtn.addEventListener('click', () => {
        wipe();
        drinksBtn.setAttribute('style', 'background-color: rgb(41, 41, 41); box-shadow: 0px 2px 0px 0px inset rgb(250, 247, 63);');
        content.appendChild(navbar);
        drinks();
    });


    navbar.appendChild(fullMenuBtn);
    navbar.appendChild(popularBtn);
    navbar.appendChild(seafoodBtn);
    navbar.appendChild(sidesBtn);
    navbar.appendChild(drinksBtn);

    content.appendChild(navbar);



}
