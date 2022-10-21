import { buildMenu } from "./build-menu";

export const fullMenu = () => {
    const content = document.querySelector('#content');
    const navbar = document.getElementsByClassName('menu-navbar');

    const menuSubCategory = {
        appetizers: {
            items: ['Sizzling Blue Crab Cakes', 'Mushroom Stuffed With Crabmeat', 'Spicy Shrimp', 'Shrimp Cocktail', 'Barbecued Shrimp', 'Goat Cheese & Artichoke Dip', 'Seared Ahi Tuna*'],
            prices: [28, 18, 24, 20, 20, 16, 21]
        },
        soups_salads: {
            items: ['Caesar Salad*', "Ruth's Chopped Salad", 'Lettuce Wedge', 'Steak House Salad'],
            prices: [13, 13, 13, 12]
        },
        steaks_chops: {
            items: ["Filet*", "Ribeye*", "New York Strip*", "Petite Filet & Shrimp", "Porterhouse For Two*", "T-bone*", "Bine-in New York Strip*", "Bone-in Filet*", "Cowboy-Ribeye*"],
            prices: [49, 62, 56, 57, 112, 62, 65, 71, 75]
        },
        seafood_specialties: {
            items: ["Garlic Crusted Sea Bass", "Sizzling Crab Cakes", "King Salmon & Shrimp"],
            prices: [45, 41, 41]
        },
        burger_sandwhiches: {
            items: ["Steak Sandwhich", "Prime Cheeseburger*"],
            prices: [18, 15]
        },
        sides: {
            items: ["Garlic Mashed", "Baked Potato", "Sweet Potato Casserole", "Potatoes Au Gratin", "Creamed Sandwhich", "Grilled Asparagus", "Brussels Sprouts", "Cremini Mushrooms", "Fresh Broccoli", "Mac & Cheese"],
            prices: [13, 12, 13, 13, 12, 13, 14, 14, 13, 14]
        },
        desserts: {
            items: ["Bread Pudding", "Classic Cheesecake", "Chocolate Sin Cake", "Berries & Cream"],
            prices: [11, 11, 11, 11]
        },
    }

    const appetizers = document.createElement('div');
    appetizers.setAttribute('style', 'margin-top: 10rem');
    appetizers.textContent = 'APPETIZERS';

    const soups_salads = document.createElement('div');
    soups_salads.setAttribute('style', 'margin-top: 5rem');
    soups_salads.textContent = 'SOUPS & SALADS';

    const steaks_chops = document.createElement('div');
    steaks_chops.setAttribute('style', 'margin-top: 5rem');
    steaks_chops.textContent = 'STEAK & CHOPS';

    const seafood_specialties = document.createElement('div');
    seafood_specialties.setAttribute('style', 'margin-top: 5rem');
    seafood_specialties.textContent = 'SEAFOOD & SPECIALTIES';

    const burger_sandwhiches = document.createElement('div');
    burger_sandwhiches.setAttribute('style', 'margin-top: 5rem');
    burger_sandwhiches.textContent = 'BURGERS & SANDWHICHES';

    const sides = document.createElement('div');
    sides.setAttribute('style', 'margin-top: 5rem');
    sides.textContent = 'SIDES';

    const desserts = document.createElement('div');
    desserts.setAttribute('style', 'margin-top: 5rem; padding-bottom: 5rem');
    desserts.textContent = 'DESSERTS';



    buildMenu(menuSubCategory.appetizers.items, menuSubCategory.appetizers.prices, appetizers);
    buildMenu(menuSubCategory.soups_salads.items, menuSubCategory.soups_salads.prices, soups_salads);
    buildMenu(menuSubCategory.steaks_chops.items, menuSubCategory.steaks_chops.prices, steaks_chops);
    buildMenu(menuSubCategory.seafood_specialties.items, menuSubCategory.seafood_specialties.prices, seafood_specialties);
    buildMenu(menuSubCategory.burger_sandwhiches.items, menuSubCategory.burger_sandwhiches.prices, burger_sandwhiches);
    buildMenu(menuSubCategory.sides.items, menuSubCategory.sides.prices, sides);
    buildMenu(menuSubCategory.desserts.items, menuSubCategory.desserts.prices, desserts);

}