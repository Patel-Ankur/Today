console.log("Hello all");

// const name = "Ankur Patel";
// const age = 21;
// const sport = "cricket";

// let html;
// html = "Ankur Patel Here...";

//html = html.concat("Hello", " ", "css");

//console.log(html);

//console.log(html.length);
//console.log(html.toLowerCase());
//console.log(html.toUpperCase());

//console.log(html.indexOf("Here"));
//console.log(html.LastIndexOf("e"));

// console.log(html.endsWith("..."));
// console.log(html.includes("Here"));

// console.log(html.substring(0, 5));
// console.log(html.slice(0, 5));
// console.log(html.slice(-5));

// console.log(html.split(" "));

// console.log(html.replace("Here", "is back"));

/*document.getElementById("demo").innerHTML = "\"Ankur\" Patel Here...";
document.getElementById("demo1").innerHTML = `"Ankur" Patel here`;

document.body.innerHTML = `AKP Here...
                            <h1>I am ${age} year old...</h1>
                            <p>I like to play ${sport}</p>
                            <strong>hello</strong>`;*/

/* ----- CODE FOR STRINGS -----
console.log("i am patel...");

function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    document.getElementById("demo").innerHTML = `Hello ${name}
    <p>Your email address is ${email}</p>`;
}*/

// ----- code for arrays -----
// console.log("This is for arrays");

// const arr = [20, 30, 40, 50];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);

// let array = new Array(20, 30, 40, 50);
// console.log(array.length); //array property: length
// console.log(Array.isArray(array)); //array method: isArray

// array[0] = 60;
// let arrayelement = array[0];
// console.log("FIRST ARRAY ELEMENT IS ", arrayelement);
// console.log(array);

// --- Mutating or modifing arrays ---
// array.push(70);
// array.pop();
// array.shift();
// array.unshift(10);
// array.reverse();
// let array2 = new Array(1, 2, 3, 4);
// array = array.concat(array2);
// console.log(array);

// ----- OBJECTS -----

// let student = {
//     fname: "ankur",
//     lname: "patel",
//     age: 21,
//     full: {
//         "full name": "Ankur Patel"
//     }
// };

// // let details = `Good Evening ${student.fname}
// // <p>You are ${student.age} year old!!!</p>`;

// // document.getElementById("fid").innerHTML = details;

// console.log(student.full["full name"]);

// console.log(student.fname);
// console.log(student["lname"]);

// ----- if-else STATEMENT -----

// const age = 330;
// const canDrive = true;

// if (canDrive && age > 18) {
//     console.log("You have LICENCE");
// } else if (canDrive && age < 18) {
//     console.log("YOU CAN NOT DRIVE");
// } else {
//     console.log("You didn't have LICENCE");
// }

// console.log(age == 20 ? "Age is 20" : "Age is not 20"); //ternary operator

// ----- SWITCH STATEMENT -----

// switch (age) {
//     case 20:
//         console.log("You are 20");
//         break;

//     case 30:
//         console.log("You are 30");
//         break;

//     default:
//         console.log("You are unknown");
//         break;
// }

// ----- LOOPs : for, while, do-while -----

// console.log('hello all');

// let sum = 0;
// for (let i = 1; i < 6; i++) {
//     sum = sum + i;
// }

// let i = 1;
// while (i < 6) {
//     sum = sum + i;
//     i += 1;
// }

// let i = 1;
// do {
//     sum = sum + i;
//     i += 1;
// } while (i < 6)
// console.log(sum);

// let arr = [2, 3, 4, 5, 6, 7];
// arr.forEach(function(element, index, array) {
//     console.log(element, index, array);
// });

// Aerrow Function
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(element => {
//     console.log(element);
// });

// let obj = {
//     fname: "Ankur",
//     lname: "Patel",
//     age: 21
// }

// for (let key in obj) {
//     console.log(`The ${key} has value ${obj[key]}`);
// }

// ----- FUNCTIONs -----

// let sum = function(a, b) {
//     let sum;
//     sum = a + b;
//     return sum;
// }

// let ans = sum(25, 25);
// let finalAnswer = ans;
// console.log(`Sum = ${finalAnswer}`);

// let minusFive = function(a, b) {
//     let val1 = a - 5;
//     let val2 = b - 5;
//     return [val1, val2];
// }

// let [result1, result2] = minusFive();
// console.log(result1);

// console.log(minusFive(55, 55));

// const detail = {
//     fname: "Ankur",
//     game: function() {
//         return "CS:GO"
//     }
// }

// console.log(detail.game())

// ----- EXTRA -----

// function getNames() {

//     let firstName = 'Ankur',
//         lastName = 'Patel';

//     return { firstName, lastName };
// }

// let { firstName, lastName } = getNames();

// document.getElementById("fid").innerHTML = `Hey everyone... <h4>${firstName + " " + lastName} Here</h4>`;

// function getScore() {
//     return [50, 60, 70];
// }

// let [x, y, z] = getScore();
// console.log(x); //50
// console.log(y); //60
// console.log(z); //70

// ----- WINDOW object -----

// let a = window.document;
// alert('Ankur Patel Here...');
// a = prompt('Enter your name:');
// a = confirm('Are you sure?');

// a = innerHeight;
// a = innerWidth;

// a = scrollX;
// a = scrollY;
// a = location;
// a = location.href;
// a = location.toString();

// a = history;
// a = history.go(1); //go to next page
// a = history.go(-1); //go to previous page
// a = history.back(1); //go to previous page
// console.log(a);

// ----- DOM(Document Object Model) IT IS STRUCTURAL REPRESENTATION OF HTML DOCUMENT -----

// let a = document;
// a = document.all; //HTML ALL COLLECTIONS
// a = document.body;
// a = document.forms;

//LINKS in HTML Document
// a = document.links; //all links
// a = document.links[0];
// a = document.links[0].href; //href of link

//IMAGES in HTML DOCUMENT
// a = document.images[0].src;

//SCRIPTS in HTML DOCUMENT
// a = document.scripts[0].src;
// console.log(a);

// ----- HTML ELEMENT SELECTOR -----

/* 
     1. Single Element Selector 
     2. Multi Element Selector
*/

//1. Single Element Selector

// let element = document.getElementById('fid');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.innerText = "Ankur Patel Here..."; 
// element.innerHTML = "<h1>Once Again...</h1>";
// console.log(element);

// ----- Query Selector -----

// let selector = document.querySelector('#fid');
// selector = document.querySelector('.class1');
// selector = document.querySelector('p'); //Return first occurance
// console.log(selector);

// 1. Multi Element Selector

// let sel = document.getElementsByClassName('container');
// console.log(sel[0].getElementsByClassName('class1'));
// -----select p tags from html document and change their color to red -----
// sel = document.getElementsByTagName('p');
// Array.from(sel).forEach(element => {
//     console.log(element);
//     element.style.color = 'red';
// })

// ----- Child, Parent & Traversing the DOM -----

let cont = document.querySelector('.container');
// cont = cont.childNodes; // Include Text and Comments as well...
// cont = cont.children; // Only HTML elements
// console.log(cont);

// let nodeName = cont.childNodes[1].nodeName; // Return HTMl Element name
// console.log(nodeName);

// let nodeName = cont.children[0].nodeName;
// console.log(nodeName);

// let nodeType = cont.childNodes[1].nodeType; // Return Node Types
// console.log(nodeType);

// Node Types
// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Commemt
// 9 - Document
// 10 - Doctype