import './homepage.css'

export const homePage = () => {
    const content = document.getElementById('content');

    const foodImgContainer = document.createElement('div');
    foodImgContainer.className = 'food-img-container';

    const largeImgContainer = document.createElement('div');//holds one large image of a meal
    largeImgContainer.id = 'large-pic-container';

    const smallImgContainer = document.createElement('div');//hold 4 smaller images of different meals
    smallImgContainer.id = 'small-pic-container';
    const imgOne = document.createElement('div')
    imgOne.className = 'small';
    smallImgContainer.appendChild(imgOne);
    const imgTwo = document.createElement('div');
    imgTwo.className = 'small';
    smallImgContainer.appendChild(imgTwo);
    const imgThree = document.createElement('div');
    imgThree.className = 'small';
    smallImgContainer.appendChild(imgThree);
    const imgFour = document.createElement('div');
    imgFour.className = 'small';
    smallImgContainer.appendChild(imgFour);



    const tagUsContainer = document.createElement('div');//hold many small images of ppl with food or just pics of food they have taken

    foodImgContainer.appendChild(largeImgContainer);
    foodImgContainer.appendChild(smallImgContainer);


    content.appendChild(foodImgContainer);

};