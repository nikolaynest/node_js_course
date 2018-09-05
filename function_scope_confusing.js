var name = 'Luke';
const func = () => {
    var name = 'Phil';
    console.log(name);
}
func();
console.log(name);
//Phil
//Luke

console.log("if clause:");
if (true) {
    var name = 'Phil';
    console.log(name);
}
console.log(name);
//Phil
//Phil