function makeIceCream(callback){
    setTimeout(() => {
        console.log("1. Making ice cream...");
        callback();
    }, 3000); 

}

function addToppings(callback){
    setTimeout(() => {
        console.log("2. Adding toppings...");
        callback();
    }, 2000);
    
}

function serveIceCream(callback){   
    setTimeout(() => {
        console.log("3. Serving ice cream...");
        callback();
    }, 3000);
}

//callback hell
makeIceCream(() => {
    addToppings(() => {
        serveIceCream(() => {
            console.log("Ice cream is ready to be enjoyed!");
        });
    });
});