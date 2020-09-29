"use strict"

let weekdayNum = Number (prompt ('Enter the number',  100) );

if (weekdayNum == 1 ){
    console.log ('Today is Monday');
}
else if (weekdayNum == 2 ){
    console.log ('Today is Tuesday');
}
else if (weekdayNum == 3 ){
    console.log ('Today is Wednesday');
}
else if (weekdayNum == 4 ){
    console.log ('Today is Thursday');
}
else if (weekdayNum == 5 ){
    console.log ('Today is Friday');
}
else if (weekdayNum == 6 ){
    console.log ('Today is Suturday');
}
else if (weekdayNum == 7){
    console.log ('Today is Sunday');
}
else if (weekdayNum < 1 || weekdayNum > 7) {
    console.log ('Error: Number not between 1-7');
}

let weekNum = Number (prompt ('Enter the number',  100) );
let result = "";
switch (weekNum) {
        case 1:
       result = 'Monday';
        break;
        case 2:
            result = 'Tuesday';
        break;
        case 3:
           result = 'Wednesday';
        break;
        case 4:
           result = 'Thursday';
        break;
        case 5:
            result = 'Friday';
        break;
        case 6:
           result = 'Suturday';
        break;
        case 7:
          result = 'Sunday';
        break;
        default: 
         result = 'Error: Number not between 1-7';

}
console.log ('Result is:', result);