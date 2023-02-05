// Path: js\main.js
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');
const button = document.createElement('button');
const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);


function createLi(text) {
    
    function createElement (elementName, property, value) {
        const element = document.createElement(elementName);
        element[property] = value;
        return element;
    };

    function appendToLi (elementName, property, value) {
        const element = createElement(elementName, property, value);
        li.appendChild(element);
        return element;
    };

    const li = document.createElement('li');
    appendToLi('span', 'textContent', text);
    appendToLi('label', 'textContent', 'confirmed')
        .appendChild(createElement('input', 'type', 'checkbox'));
    appendToLi('button', 'textContent', 'edit');
    appendToLi('button', 'textContent', 'remove');

    return li;

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const li = createLi(text);
    ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
    const checkbox = event.target
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    if (checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if (button.textContent === 'remove') {
            ul.removeChild(li);
        } else if (button.textContent === 'edit') {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'save';
        } else if (button.textContent === 'save') {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'edit';
        }

    }
});

filterCheckbox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children;
    if (isChecked) {
        for (let i = 0; i < lis.length; i += 1) {
            let li = lis[i];
            if (li.className === 'responded') {
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        }
    } else {
        for (let i = 0; i < lis.length; i += 1) {
            let li = lis[i];
            li.style.display = '';
        }
    }
});