function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Lin",
    lastName: "Li"
};
document.body.innerHTML = greeter(user);
