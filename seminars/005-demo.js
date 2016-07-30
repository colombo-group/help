<script>
  //slide 6
  var Comment = {
    info : {
      title : "",
      content : "",
      email : "",
      fullname : ""
    }
  };
  var Comment = [{
    title : "",
    content : "", 
    email : "",
    fullname: ""
  }];
  Comment[0].title = "Tiêu đề";
  alert(Comment[0].title);
  //slide 6
  //slide 10
  function Person(name) {

    this.name = name;
    this.sayName = function() {

    console.log(this.name);

    };
  }
  var person1 = new Person("Nicholas");
  var person2 = new Person("Greg");
  console.log(person1.name); // "Nicholas"
  console.log(person2.name); // "Greg"
  person1.sayName(); // outputs "Nicholas"
  person2.sayName(); // outputs "Greg"
  //slide 10
  //slide 11
function Person(name) {
Object.defineProperty(this, "name", {
get: function() {
return name;
},
set: function(newName) {
name = newName;
},
enumerable: true,
configurable: true
});
this.sayName = function() {
console.log(this.name);
};
}

var person1 = Person("Nicholas"); // note: missing "new"
console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"
  //slide 11
  //slide 12
  var book = {
title: "The Principles of Object-Oriented JavaScript"
};
console.log("title" in book); // true
console.log(book.hasOwnProperty("title")); // true
console.log("hasOwnProperty" in book); // true
console.log(book.hasOwnProperty("hasOwnProperty")); // false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true
  //slide 12
  //slide 14
var object = {};
 console.log(object.toString()); // "[object Object]"
object.toString = function() {
return "[object Custom]";
};
 console.log(object.toString()); // "[object Custom]"
// delete own property
delete object.toString;
console.log(object.toString()); // "[object Object]"
// no effect - delete only works on own properties
delete object.toString;
console.log(object.toString()); // "[object Object]"

  //slide 14
  //slide15
    function Person(name) {
this.name = name;
}
 Person.prototype.sayName = function() {
console.log(this.name);
};
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log(person1.name); // "Nicholas"
console.log(person2.name); // "Greg"
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"
  //slide15
  //slide16
  function Person(name) {
this.name = name;
}
Person.prototype.sayName = function() {
console.log(this.name);
};
Person.prototype.favorites = [];
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
person1.favorites.push("pizza");
person2.favorites.push("quinoa");
console.log(person1.favorites); // "pizza,quinoa"
console.log(person2.favorites); // "pizza,quinoa"
 
 function Person(name) {
this.name = name;
}
Person.prototype = {
sayName: function() {
console.log(this.name);
},
toString: function() {
return "[Person " + this.name + "]";
}
};

  //slide16
  //slide17
 var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log("sayHi" in person1); // false
console.log("sayHi" in person2); // false
// add a new method
Person.prototype.sayHi = function() {
console.log("Hi");
};
person1.sayHi(); // outputs "Hi"
person2.sayHi(); // outputs "Hi"

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
Object.freeze(person1);
Person.prototype.sayHi = function() {
console.log("Hi");
};
person1.sayHi(); // outputs "Hi"
person2.sayHi(); // outputs "Hi"

  //slide17
  //slide18
 Array.prototype.sum = function() {
return this.reduce(function(previous, current) {
return previous + current;
});
};
var numbers = [ 1, 2, 3, 4, 5, 6 ];
var result = numbers.sum();
console.log(result); // 21

String.prototype.capitalize = function() {
return this.charAt(0).toUpperCase() + this.substring(1);
};
var message = "hello world!";
console.log(message.capitalize()); // "Hello world!"
 
  //slide18



</script>