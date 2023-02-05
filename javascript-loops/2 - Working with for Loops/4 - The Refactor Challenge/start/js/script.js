let html = '';
const randomValue = () => Math.floor(Math.random() * 256 );

function randomRGB(Value) {
    const color = `rgb( ${Value()}, ${Value()}, ${Value()} )`;
    return color;
};

for (let i = 1; i <= 10; i++) {
    html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;




