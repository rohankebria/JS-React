/*
import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
console.log(element);

ReactDOM.render(element, document.getElementById("root"));
*/
class Person {
  // PascalNotation naming!
  constructor(name) {
    this.name = this; // this return reference to the containing object
  }
  walk() {
    console.log("Walk");
  }
}
class Teacher extends Person {
  constructor(name, subject) {
    super(name); // as we have added a custom constructor in child class, so have to call parent constructor first
    this.subject = subject;
  }
  teach() {
    console.log("Teach");
  }
}

const teacher = new Teacher("Mosh", "JavaScript");
console.log(teacher.name);
