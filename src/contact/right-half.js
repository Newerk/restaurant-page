export const contactRight = () => {
    const content = document.getElementById('content');

    //left side of page
    const rightSidePage = document.createElement('div');
    rightSidePage.className = 'right-of-page';
    const map = document.createElement('img');
    map.id = 'map';

    rightSidePage.appendChild(map);

    const address = document.createElement('h4');
    address.textContent = 'address here'

    const hours = document.createElement('h4');
    hours.textContent = 'store hours here'

    const number = document.createElement('h4');
    number.textContent = 'phone number here'


    rightSidePage.appendChild(address);
    rightSidePage.appendChild(hours);
    rightSidePage.appendChild(number);



    content.appendChild(rightSidePage);

}