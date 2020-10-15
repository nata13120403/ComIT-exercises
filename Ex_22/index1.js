'use striect'
let curHour = Number(prompt ('Please, enter wtat hour is it (from 0-23)', 100));
if (curHour < 0 || curHour > 23) {
    alert ("Your input incorrect");
}
else if (curHour < 8 || curHour == 18 || curHour > 18) {
    alert ('It is not working hours');
}
else 
{
    alert ('We are open!!!');
}
