
for (let i = 0; i < 5; i++) {
    console.log('Hello CYDEO');
}

console.log('--------------------------');

for( let i = 1; i<11; i++){
    console.log(i);
    if (i == 5){
        break;
    }
}

console.log('--------------------------');

for( let i = 1; i<11; i++){
    if(i===3 || i===7 || i===9){
        continue
    }
    console.log(i);
}