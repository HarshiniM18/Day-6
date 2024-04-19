//3.Write a “person” class to hold all the details

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setAge(age) {
        this.age = age;
    }

    setEmail(email) {
        this.email = email;
    }

    getDetails() {
        return `Name: ${this.getFullName()}, Age: ${this.age}, Email: ${this.email}`;
    }
}

// Example usage:
const person1 = new Person("Harshini", "Developer", 23, "harshuharshini516@gmail.com");
console.log(person1.getDetails()); // Display person details

// Modifying person properties
person1.setAge(22);
person1.setEmail("harshinimano04@gmail.com");
console.log(person1.getDetails()); // Display updated person details

//Output:

Name: Harshini Developer, Age: 23, Email: harshuharshini516@gmail.com
Name: Harshini Developer, Age: 22, Email: harshinimano04@gmail.com
