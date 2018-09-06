function add() {

    var result = 0;
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(add());
console.log(add(1));
console.log(add(1, 2, 3));
//0
//1
//6



function _add() {
    let a = [];
    for (let i=0; i < arguments.length; i++) {
        a.push(arguments[i]);
    }
    console.log(a);

    return a.reduce((sum, next)=>sum+next);
}
console.log(_add(1, 3, 4));