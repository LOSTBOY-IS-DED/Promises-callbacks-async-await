// promise is a guarantee that something will happen in the future

function getIceCream(flavour){
    return new Promise ((resolve , reject) => {
        console.log(`Making ${flavour} ice cream...`);

        setTimeout(()=>{
            reject(`Sorry, we are out of ${flavour} ice cream!`);
        },3000)
    });
}

getIceCream('vanilla').then(result => {
    console.log("promise resolved: ", result);
}).catch(error => {
    console.log("promise rejected: ", error);
})

// cleaner , easier to read and chain task
// .then().then().then((result) => {
//     console.log("promise resolved: ", result);
// }).then((gf) => {
//     console.log("promise resolved: ", gf);
// }).then((parameter)=>{krna kya hai ?? }).catch(error => {
// })  
