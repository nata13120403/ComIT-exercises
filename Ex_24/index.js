'use strict'
let sum = 0;
for (let number = 0; number <= 1000; number ++){
    console.log("number is", number);
sum = sum + number;
if (sum > 400){
    break}
}

for(let lineNumber = 1; lineNumber <= 13; lineNumber ++) {
let stars = "";

for(let starCount=1; starCount <= lineNumber; starCount ++){
    stars = stars + "*";
}
    console.log(stars);
}

let point=1;
let plus = "";
while ( point <= 13){
    plus = plus + "+";
    console.log (plus);
    point ++;
}

let i = 0
do {console.log ('Number from 0-10:', i);
i ++}
while (i <= 10);

let g = 100
do {console.log ('Number from 100 - 0:', g);
g --}
while (g >= 0);



for (let m = 2; m <= 100; m ++){
if (m % 2 == 0)
    console.log ('Even numbers:', m);}
    
