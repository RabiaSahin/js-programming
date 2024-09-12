console.log('Test1 Started');

try{
    console.log(result);
}catch(error){
    console.error('An error occurred ==> ' + error);
}

console.log('Test1 Finished');

console.log('--------------------------------');

console.log('Test2 Started');

let browser = 'cydeo';

switch(browser.toLowerCase()){
    case 'firefox':
        console.log('You are using Firefox');
        break;
    case 'chrome':
        console.log('You are using Chrome');
        break;
    case 'safari':
        console.log('You are using Safari');
        break;
    default:
        throw new Error('Invalid browser');
}


console.log('Test2 Finished');