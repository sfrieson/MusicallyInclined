function sum (a,b) {
    console.log(a+b); //the work
    return undefined; //or just empty
}
total = sum(5,7);
console.log(total);


//example of when you don't want to return
//depends on this specific environment;

age = 25;

function birthday () {
    age = age + 1;
    //notice no return
}

birthday ();//notice I'm not assigning the response to a variable
age; //26


function preincrement(num){ //++num
    return num + 1;
}
function postincrement(num){ //num++
    var old = num;
    num = num +1;
    return old;
}
