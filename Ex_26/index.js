'use strict'
function evenNum (num){
    for (let num = 0; num <= 100; num ++){
        if( num % 2 == 0){
            console.log ('Even number:', num);
        }
    }
}

function showUser () {
    let name = 'Natali';
    let age = 30;
    let phone = 43120512317868;
    let street = 'Clearwater';
    let postalCod = 'R5GS7';
    let married = true;
    console.log ('User:', name, 'Age:', age, 'Phone:', phone, 'Street:', street, 'Postal code:', postalCod, 'Married:',married);
}

let evenNumb = function (){
    for (let n = 0; n <= 100; n ++){
        if( n % 2 == 0){
            console.log ('Even', n);
        }
    }
}

let evenNumb2 = function (){
    let nm = Number(prompt ('Enter a number', 100));{
        if( nm % 2 == 0){
            console.log ('Even number:', nm);
        }
        else {
            console.log ('This is not even number')
        }
    }
}

let fibonacci = function (){
    let n;
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    console.log('First number fibonacci:', fib[0]);
    console.log('Second number fibonacci:', fib[1])
    for (n =2; n <= 5; n ++){
        fib[n] = fib[n-2] +fib [n-1];
        console.log('Next number fibonacci:', fib[n])
    }
}

let showName = function(){
    console.log ('==========')
    console.log ('= Natali =')
    console.log ('==========')
}

evenNum  ();
showUser ();
for (let q = 0; q < 5; q ++) {evenNumb ();}
evenNumb2();
fibonacci();
for (let q = 0; q < 2; q ++) {showName();}

