var myArray = [];

for (let i = 0; i < 3; i++) {
    myArray.push(
        function () {
            return console.log(i);
            // return "hello";
        }
    )
}


myArray.forEach(
    function (item) {
        item();//what is item? - take element of the array, which is item and invoke it as item() - means that we call function of the array
    })

myArray.forEach(console.log);// interesting!!!

for (let i = 0; i < 3; i++) {
    console.log(myArray[i]());
}