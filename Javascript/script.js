// console.log("Hello this is idmtechpark...!");
// alert("Demo")
// confirm("demo")
// document.write("<h1> Welcome to IDM Techpark..!");

console.log(prompt("enter ur name"))

/* 
    var_name = value;

    declaration :
    1. let
    2. var
    3. const
*/

// a=10;

// a=35;
// console.log(a);

//global scope
// let a = 30;
{
    // local scope
    // const a = 30;
    {
        var a = 100;
        var a = 35;
        console.log(a);
        // a=100
    }

    console.log(a);
}
console.log(a);