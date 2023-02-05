function sayhi() {
    console.log(`Hello`)    
};

function hiAndBye(func) {
    func();
    console.log(`Bye`);   
};

hiAndBye(sayhi)