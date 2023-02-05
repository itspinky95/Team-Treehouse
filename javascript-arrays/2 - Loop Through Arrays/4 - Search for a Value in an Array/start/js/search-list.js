const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.').toLowerCase();
let message;

if (inStock.includes(search)) {
    message = `Yes, We have <strong>${search}</strong> It is in position #${inStock.indexOf(search) +1} in the list.`;
} else {
    message = `Sorr, We do not have ${search} in stock :(`
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;