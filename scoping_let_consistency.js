let name = "Luke";
const func = function () { // without name?
   let name = 'Phil';
   console.log(name);
}
func();
console.log(name);
//Phil
//Luke