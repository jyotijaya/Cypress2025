
function sayHello()
{
    console.log("Hello")
}

function sayHi()
{
    console.log("Hi");
}

function add(num1, num2, callback)
{
    callback();
    console.log(num1+num2)
}

function sub(num1, num2, ()=>
{
    console.log("Anonym function")
}

    console.log(num1+num2);

);

add(3,2,sayHi);