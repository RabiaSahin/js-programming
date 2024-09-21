
async function findElement(locator){
    let element = new Promise( (resolve,reject) => {

        if(locator == 'valid'){
            resolve('Element found')
        }else{
            reject('Element not found')
        }

    } );
}


async function clickElement(locator){
    await findElement(locator)
    .then((message) => {
        console.log(message);
        console.log("Clicked element");
    })
    .catch((error) => {
        console.log(error);
        console.log('Unable to click element');
    });
}

function getTitle(){
    return 'Title'
}


async function runTest(){

    await clickElement('valid');
    getTitle(); // this function will not use the await keyword because it is not have an async keyword that returns a Promise 

    // await getTitle(); // if we use the await keyword here, it is not wrong but only give this message: "'await' has no effect on the type of this expression."

}


runTest();