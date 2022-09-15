(() => {
    const burger = document.createElement('img');
    burger.id = 'burger';
    burger.src ='../src/images/main-page-logo.svg';
    
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Mangrove';
    
    const text = document.createElement('p');
    text.textContent = '"This is very good, so good delicious, best food, yum" -some random guy';
    
    const content = document.getElementById('content');
    
    content.appendChild(burger);
    content.appendChild(title);
    content.appendChild(text);    
    })();

    