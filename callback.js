// a callback is a function passed into another function as an argument

function getIceCream(flavour, callback){
    console.log(`Making ${flavour} ice cream...`);

    setTimeout(()=>{
        callback(`Here is your ${flavour} ice cream!`);
    },3000)
}

getIceCream('chocolate' , function(result){
    console.log("callback : " , result);
});


// function result(result){
//     console.log("callback : " , result);
// }


// ()=>{}

    // this is will led to callback hell

    // make ice cream 
    // add toppings
    // server ice cream