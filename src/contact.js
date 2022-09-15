//exports a div element that builds the contact page


//populates page with contact information page elements
export const contactInfo = () => {
    const content = document.getElementById('content');

    const contactUs = document.createElement('div');
    contactUs.id = contactUs.textContent = 'Contact Us:';

    const phoneNum = document.createElement('p');
    phoneNum.id = 'phone-num';
    phoneNum.textContent = '(016) 702-3140';

    const apps = document.createElement('div');
    const uberEats = document.createElement('div');
    uberEats.textContent = 'ubereats:filler text'
    const grubHub = document.createElement('div');
    grubHub.textContent = 'grubhub:filler text'
    const doorDash = document.createElement('div');
    doorDash.textContent = 'doordash:filler text'


    apps.appendChild(uberEats);
    apps.appendChild(grubHub);
    apps.appendChild(doorDash);


    content.appendChild(contactUs);
    content.appendChild(phoneNum);
    content.appendChild(apps);
};