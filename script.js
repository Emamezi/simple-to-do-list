var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



//This creates a new list element when a new task is added
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    addDeleteButton(li); //automatically adds a delete button whenever a new list item is added
}

getListItems(); //Gets initial list items and adds toggle class and delete button to each
function getListItems() {
    var item = document.querySelectorAll("li");
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener('click', toggleDone); //adds toggle class
        addDeleteButton(item[i]); //adds delete button 
    }
}

function toggleDone() {
    this.classList.toggle("done");
}
//creates a delete button
function addDeleteButton(li) {
    var dltButton = document.createElement("button");
    var textNode = document.createTextNode("Delete Button");
    dltButton.appendChild(textNode);
    li.appendChild(dltButton);
    dltButton.addEventListener('click', deleteItem);
}

function deleteItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function inputLength() {
    return input.value.length;
}

function clickEvent() {
    if (inputLength() > 0) {
        createListElement();
    }
}


function keyPressEvent(Event) {
    if (inputLength() > 0 && Event.key === 'Enter') {
        createListElement();
    }
}

button.addEventListener("click", clickEvent);

input.addEventListener("keypress", keyPressEvent);






// list.addEventListener("click", function(list) {
//     for (var i = 0; i > list.length; i++) {
//         list.classList("done");
//     }

// });


// function multiply(a, b) {
//     return a * b;

// }

// var a = multiply(3, 6);
// alert(a);


// function checkDriverAge() {
//     var age = Number(prompt("Enter your age"));
//     if (age < 18) {
//         return alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (age === 18) {
//         return alert("Congratulations on your first year of driving. Enjoy the ride!");
//     } else {
//         return alert("Powering On. Enjoy the ride!");
//     }
// }
// checkDriverAge();

// var checkDriverAge2 = function() {
//     var age2 = Number(prompt("Enter age"))
//     if (age2 < 18) {
//         return alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (age2 === 18) {
//         return alert("Congratulations on your first year of driving. Enjoy the ride!");
//     } else {
//         return alert("Powering On. Enjoy the ride!");
//     }
// }
// checkDriverAge2();

// Bonus

// function checkDriverAge(age) {
//     // console.log(age)
//     if (age < 18) {
//         return alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (age === 18) {
//         return alert("Congratulations on your first year of driving. Enjoy the ride!");
//     } else {
//         return alert("Powering On. Enjoy the ride!");
//     }
// }
// var list = ["tiger", "lion", "cat", "dog"];
// // console.log(list[0]);
// // checkDriverAge(12);


// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]]


// var user = {
//     name: "Emamezi",
//     role:"Operations manager",
//     company:"FedEx",
//     ismarried:false,
//     age:26,
// };
// user.company;

// var database = [{
//         username: 'Emamezi',
//         password: "1234"
//     },
//     {
//         username: 'Goodness',
//         password: "777"
//     },
//     {
//         username: 'Sarah',
//         password: "321"
//     },
// ];

// var userFeeds = [{
//         user: "Sarah",
//         timeline: "I want tyou to eat me all up real good"
//     },
//     {
//         user: "Kimberly",
//         timeline: "What do you want for lunch?"
//     }
// ];

// function checkUser(username, password) {
//     for (var i = 0; i < database.length; i++) {
//         if (database[i].username === username && database[i].password === password) {
//             return true;
//         }
//     }
//     return false;
// }

// function signIn(userName, userPassword) {
//     if (checkUser(userName, userPassword)) {
//         console.log(userFeeds);
//     } else {
//         alert("sorry wrong user name and password");
//     }
// }

// var usernamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?");

// signIn(usernamePrompt, passwordPrompt);



// var todo = ["clean house", "pay bills", "apply for new roles", "eat dinner", "go to work"];
// var todoLength = todo.length;
// for (var i = 0; i < todoLength; i++) {
//     console.log(todo[i]);
// }
// todo.forEach(function(todos, i) {
//         console.log(todos + " done already?");
//     })
// var counter = 10;
// while (counter > 0) {
//     console.log(counter);
//     counter--
// }

// var counterTwo = 20;
// do {
//     console.log(counterTwo)
//     counterTwo--
// } while (counterTwo > 0)

// var database = [{
//         username: "gk",
//         password: "test"
//     },
//     {
//         username: "gk2",
//         password: "test2"
//     }
// ];

// function validateUser(usern, passw) {
//     database.forEach(function(data, i) {
//         if (data[i].username === usern && data[i].password === passw) {
//             console.log("logged in");
//         } else {
//             console.log("Sorry, wrong username and password");
//         }
//     })
// }

// function signIn(user, pass) {
//     if (validateUser(user, pass)) {
//         console.log(database);
//     } else alert("Can't log in");

// }

// var userNamePrompt = prompt("what's your username");
// var passwordPrompt = prompt("what's your password");

// signIn(userNamePrompt, passwordPrompt);

// getListItems(); // code to get each list item
// function getListItems() {
//     var item = document.querySelectorAll("li");
//     for (var i = 0; i < item.length; i++) {
//         item[i].addEventListener("click", toggleDone)
//         addDeleteButton(item[i]);
//     }
// }

// function toggleDone() {
//     this.classList.toggle("done");
// }

// function deleteItem() {
//     console.log('deleted');
//     this.parentNode.parentNode.removeChild(this.parentNode);
// }
// //adds a delete button to each list item 
// function addDeleteButton(li) {
//     var dltbutton = document.createElement("button");
//     var textNode = document.createTextNode("delete button");
//     dltbutton.appendChild(textNode);
//     li.appendChild(dltbutton);
//     dltbutton.addEventListener('click', deleteItem);
// }