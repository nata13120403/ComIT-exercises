'use strist'

let siblings = ['Sasha', 'Margo', 'Lisa'];
let parents = ['Valya', 'Leon'];

console.log(siblings);
console.log(parents);

let arr = (siblings.concat(parents));
console.log(arr);

arr.push('Subrina');
console.log(arr);

arr.reverse();
console.log(arr);

console.log(arr[2]);
arr[1] = 'Leonid';

for (let element of arr){
    console.log('Show arr with for..of loop', element);
}

for (let i = 0; i < arr.length; i++){
    console.log('Show arr with for loop', arr[i])
}




