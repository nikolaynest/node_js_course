
let myObj = {foo: "bar"};

function returnFoo() {
    return this.foo;
}

console.log(returnFoo());

let bounded = returnFoo.bind(myObj);// blya, returnFoo.bind works, but not returnFoo().bind

console.log(bounded);   //fuck my brain
console.log(bounded()); //