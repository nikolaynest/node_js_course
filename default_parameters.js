
function req() {
    throw new Error('missing argument');
}

function foo(p1=req(), p2=req(), p3=undefined) {


}

console.log(foo());