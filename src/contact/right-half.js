export const contactRight = () => {
    const content = document.getElementById('content');

    //left side of page
    const rightSidePage = document.createElement('div');
    rightSidePage.className = 'right-of-page';
    const map = document.createElement('img');
    map.id = 'map';

    rightSidePage.appendChild(map);
    content.appendChild(rightSidePage);

}