function makeIceCream(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("1. Making ice cream...");
            resolve();
        }, 3000);
    })
}

function addToppings(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("2. Adding toppings...");
            resolve();
        },3000);
    })

}

function serveIceCream(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("3. Serving ice cream...");
            resolve();
        }, 3000);
    })
}

makeIceCream().then(() => {
   addToppings().then(() => {
     serveIceCream().then(() => {
            console.log("All done");
     }).catch(error => {
            console.log(error);
     })
   })
})