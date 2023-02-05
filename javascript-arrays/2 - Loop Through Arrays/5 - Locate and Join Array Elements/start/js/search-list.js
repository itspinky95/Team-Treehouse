const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if ( !search ) {
  message = `<strong>Sorry</strong>, You didnt search anything please try again but in list is ${inStock.join(', ')}`
} else if (inStock.includes(search.toLowerCase())) {
    message = `Yes, We have <strong>${search}</strong> It is in position #${inStock.indexOf(search) +1} in the list.`;
} else {
    message = `Sorr, We do not have ${search} in stock :(`
}


document.querySelector('main').innerHTML = `<p>${message}</p>`;