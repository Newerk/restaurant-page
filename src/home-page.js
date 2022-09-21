export const homePage = () => {
    const burger = document.createElement('img');
    burger.id = 'burger';
    burger.src = '../src/images/main-page-logo.svg';

    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Mangrove';

    const text = document.createElement('p');
    text.textContent = '"This is very good, so good delicious, best food, yum" -some random guy';

    const content = document.getElementById('content');

    content.appendChild(burger);
    content.appendChild(title);
    content.appendChild(text);

    const foodImgContainer = document.createElement('div');
    const largeImgContainer = document.createElement('div');//holds one large image of a meal
    const smallImgContainer = document.createElement('div');//hold 4 smaller images of different meals


    const tagUsContainer = document.createElement('div')//hold many small images of ppl with food or just pics of food they have taken

};