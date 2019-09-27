var arr1 = [1,2,3];
var arr2 = [2,4,9];

var Person = {
    name: "Richard"
}

console.log(Person.name);

for (var i = 0; i <= arr1.length; i++) {
    Person[i] = 0 + i;
    console.log(Person);
}