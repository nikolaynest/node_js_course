let x = "foo";
console.log(x); // output foo
if(true) {
    let x = "bar";
    console.log(x);// will be bar
}
console.log(x);//will be foo

//result:
//foo
//bar
//foo