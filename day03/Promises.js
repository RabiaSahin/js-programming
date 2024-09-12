let checkEligibility = (age) => {
    return new Promise( (resolve, reject) => {
        
        if(age >= 18){
            resolve("Eligible to vote");
        }else{
            reject("Not eligible to vote");
        }

    } );
}


checkEligibility(21)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Voting process completed');
        })