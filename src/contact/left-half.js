export const contactLeft = () => {
    const content = document.getElementById('content');

    const leftSidePage = document.createElement('div');
    const formContainer = document.createElement('form');
    formContainer.className = 'form-container';

    content.appendChild(formContainer);

    //iterate through the array and build on the proper forms and the neccesarry content to make them work properly
    const formLabels = ['First Name', 'Last Name', 'Phone Number', 'Email', 'Message'];

    const formBuilder = ((arr) => {
        const createLabel = (label, type) => {
            const concat = label.toLowerCase().split(" ").join("");

            const form = document.createElement('label');
            const formInput = document.createElement('input');
            formInput.type = type;
            formInput.id = formInput.name = concat;

            const labelName = document.createElement('p');
            labelName.textContent = label;

            form.appendChild(labelName);
            form.appendChild(formInput);
            formContainer.append(form);
        }

        //use a for loop and switch statements to generate the DOM
        for (const label of arr) {
            switch (label) {
                case 'First Name':
                    createLabel(label, 'text');

                    break;

                case 'Last Name':
                    createLabel(label, 'text');

                    break;

                case 'Phone Number':
                    createLabel(label, 'tel');

                    break;

                case 'Email':
                    createLabel(label, 'email');

                    break;

                case 'Message':

                    const msgContainer = document.createElement('div');
                    msgContainer.className = 'msg-container';

                    const textarea = document.createElement('textarea');
                    textarea.id = 'message';
                    const labelName = document.createElement('p');
                    labelName.textContent = 'Message';

                    msgContainer.appendChild(labelName);
                    msgContainer.appendChild(textarea);
                    formContainer.appendChild(msgContainer);

                    break;

            }
        }

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        formContainer.appendChild(submitBtn);

        leftSidePage.appendChild(formContainer);
        leftSidePage.className = "left-of-page"
        content.appendChild(leftSidePage);
    })(formLabels);


};