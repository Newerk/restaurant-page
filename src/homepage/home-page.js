import './homepage.css'




export const homePage = () => {
    const orderNowBtn = (querySelector) => {
        const btn = document.createElement('button');
        btn.textContent = 'ORDER NOW';

        btn.className = `order-now-btn`;

        querySelector.appendChild(btn);

    };

    const content = document.getElementById('content');
    content.setAttribute('style', 'display: grid; grid-template-columns: 1fr; grid-template-rows: auto auto auto; border: 2px solid black; background-color: black; height: 100%;')


    const promotionContainer = document.createElement('div');
    promotionContainer.className = 'promotion-container';

    const largeImg = document.createElement('div');//holds one large image of a meal
    largeImg.id = 'large-pic';
    orderNowBtn(largeImg);


    const smallImgContainer = document.createElement('div');//hold 4 smaller images of different meals
    smallImgContainer.className = 'small-pic-container';
    const imgOne = document.createElement('div')
    imgOne.className = 'small one';
    smallImgContainer.appendChild(imgOne);
    orderNowBtn(imgOne);


    const imgTwo = document.createElement('div');
    imgTwo.className = 'small two';
    smallImgContainer.appendChild(imgTwo);
    orderNowBtn(imgTwo);


    const imgThree = document.createElement('div');
    imgThree.className = 'small three';
    smallImgContainer.appendChild(imgThree);
    orderNowBtn(imgThree);


    const imgFour = document.createElement('div');
    imgFour.className = 'small four';
    smallImgContainer.appendChild(imgFour);
    orderNowBtn(imgFour);

    const discountContainer = document.createElement('div');
    discountContainer.id = 'discount-msg';
    const save = document.createElement('span');
    save.className = 'boldtext';
    save.textContent = 'SAVE';

    const money = document.createElement('span');
    money.textContent = ' money on orders over ';

    const fourT = document.createElement('span');
    fourT.className = 'boldtext';
    fourT.textContent = '$40';

    // save.append(money);
    // save.append(fourT);

    discountContainer.appendChild(save)
    discountContainer.appendChild(money);
    discountContainer.appendChild(fourT)




    const tagUsContainer = document.createElement('div');//hold many small images of ppl with food or just pics of food they have taken
    tagUsContainer.className = 'tag-us-container';

    const tagUsText = document.createElement('div');
    tagUsText.textContent = '#TagUs';
    tagUsText.id = 'tag-us-text';


    const tagUsContent = (() => {
        const count = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        for (let index = 0; index < 9; index++) {
            const tagImg = document.createElement('div');
            tagImg.className = `tag-img-${count[index]}`;
            tagImg.setAttribute('style', 'background-size: cover; background-repeat: no-repeat;')
            tagUsContainer.appendChild(tagImg)
        }
    })();


    const rowTwoContainer = document.createElement('div');
    rowTwoContainer.className = "row-two";

    const headChefContainer = document.createElement('div');
    headChefContainer.className = 'head-chef-container';
    const chefImg = document.createElement('div');
    chefImg.id = 'chef-img';

    const chefTitle = document.createElement('h2');
    chefTitle.id = 'chef-title';
    chefTitle.textContent = "Meet the head of the kitchen, Chef Nakamura"


    const chefText = document.createElement('p');
    chefText.id = 'chef-text';
    chefText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.`;

    headChefContainer.appendChild(chefImg);
    headChefContainer.appendChild(chefTitle);
    headChefContainer.appendChild(chefText);




    promotionContainer.appendChild(largeImg);
    promotionContainer.appendChild(smallImgContainer);
    promotionContainer.appendChild(discountContainer);

    rowTwoContainer.appendChild(tagUsText);
    rowTwoContainer.appendChild(tagUsContainer);
    rowTwoContainer.appendChild(headChefContainer);


    content.appendChild(promotionContainer);
    content.appendChild(rowTwoContainer);

};