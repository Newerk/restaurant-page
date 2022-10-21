export const contactRight = () => {
    const content = document.getElementById('content');

    //left side of page
    const rightSidePage = document.createElement('div');
    rightSidePage.className = 'right-of-page';
    const map = document.createElement('img');
    map.id = 'map';

    rightSidePage.appendChild(map);

    const address = document.createElement('h4');
    address.textContent = '795 Kingston Lacy Blvd, Plungerville, TX 78445'
    address.id = 'address';

    const hours = document.createElement('h4');
    hours.textContent = '11AM - 12AM'
    hours.id = 'hours';

    const number = document.createElement('h4');
    number.textContent = '(531) 027-6339'
    number.id = 'number';


    rightSidePage.appendChild(address);
    rightSidePage.appendChild(hours);
    rightSidePage.appendChild(number);



    content.appendChild(rightSidePage);

}