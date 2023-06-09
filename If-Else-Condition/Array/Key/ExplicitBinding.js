function greet() {
    console.log("Hello! ", this);

}
const user = {
    name: "Agastha",
    age: 27,
};
greet.call(user);