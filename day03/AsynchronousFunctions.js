
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
    findElement(locator)
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
    await getTitle();


}


runTest();