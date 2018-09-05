

function outer() {

    console.log("in outer");

    function inner() {
        console.log("in inner");
    }

    outer();//stackoverflow
    inner();

}

outer();
inner();