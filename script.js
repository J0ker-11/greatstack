// let text = document.getElementById("text");
// console.log(text);

// function displayMsg() {
//     console.log(`Button Clicked from Function`);
// }

// let btn = document.getElementById("btn");

// btn.addEventListener('click', function(){console.log('I have been clicked');})



// One event handler
// let  Rashida = document.querySelector("#btns");
// Rashida.onclick = function() {
//     console.log("Run First Handler");
// }

//  Rashida.onclick = function () {
//     console.log("Run Second Handler");
// }

// Two or more event handler

// let  cooker = document.querySelector("#btns");
// cooker.addEventListener('click',function() {
//     console.log("Run First Handler");
// })

// cooker.addEventListener('click',function() {
//     console.log("Run Second Handler");
// })

// let giftBoxElement = document.getElementById("gift-box");
// let buttonElement = document.getElementById("click-btn");

// buttonElement.addEventListener('click', function() {
//     giftBoxElement.classList.remove('hide');
// });


//   //  FREECODECAMP DOM TUTORIALS
// const heading = document.getElementById("main-heading");
// heading.style.color = "red";
// console.log(heading);

// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

// const listItems1 = document.getElementsByTagName("li");
// console.log(listItems1);

// const listItems2 = document.querySelector(".containers");
// console.log(listItems2);

// const listItems3 = document.querySelectorAll("li");
// for (let l = 0; l < listItems3.length; l++) {
//     listItems3[l].style.fontSize = "1.5rem";
// }
// console.log(listItems3);


// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// ul.append(li);
// li.innerText = "X-Men";
// li.remove();


// EVENT LISTENER 

const buttonTwo = document.querySelector('.btn-2');
function alertBtn () {
    alert('I also Love Javascript');
}
buttonTwo.addEventListener('click', alertBtn)

const newBackground = document.querySelector('.box-3');
function changeBackground () {
    newBackground.style.backgroundColor = "blue";
}
newBackground.addEventListener('mouseover', changeBackground)



const revealBtn = document.querySelector(".reveal-btn");
const hiddenCotent = document.querySelector(".hidden-content");

function revealContent () {
    if(hiddenCotent.classList.contains('reveal-btn')) {
        hiddenCotent.classList.toggle('reveal-btn')
    }else{
        hiddenCotent.classList.toggle('reveal-btn')
    }
}
revealBtn.addEventListener('click', revealContent);

let head = document.querySelector("#container");
let second = head.querySelectorAll(".second");
console.log(second);



// GETTING PARENT NODE OR ELEMENT...
let sec = document.querySelector(".second");
console.log(sec.parentElement);

// GETTING CHILD ELEMENT...

let little = document.querySelector(".tittle");
console.log(little.firstElementChild)

let seconds = document.querySelector(".seconds");
console.log(seconds.nextElementSibling)

// MANIPULATING DOM 

// 1. CREATING ELEMENT 

let fish = document.createElement("div");
fish.innerHTML = ("<h1>Home Sweet Home</h1>");
document.body.appendChild(fish);
fish.className = ("fish-pie");
console.log(fish);


// 2. APPENDCHILD

let navList = document.querySelector(".nav-list");
let list = document.createElement("li");
list.innerHTML = ("Blog");
navList.appendChild(list);
navList.setAttribute("class", "new-class")
console.log(navList);
console.log(navList.classList);
navList.classList.add("user", "user2");
console.log(navList);


// 3. INNERHTML, TEXTCONTENT, INNERTEXT

let menu = document.createElement("article");
menu.innerHTML = ("<h1>My Name Is Tijani Hassan</h1>");
//menu.innerText = ("<h2>My Name Is Tijani Hassan</h2>");
//menu.textContent = ("<h3>My Name Is Tijani Hassan</h3>");
document.body.appendChild(menu);


// AFTER() METHOD

list.after("Products");

// APPEND() METHOD

let app = document.querySelector("#app");
let langs = ["TYPESCRIPT", "HTML", "CSS"];

let nodes = langs.map(langs => {
    let li = document.createElement("li");
        li.innerHTML = langs;
        return li;
})

app.append(...nodes)
console.log(app.innerText);


// ATTRIBUTES  

// GETING ATTRIBUTES
let inputBox = document.querySelector("#username");
console.log(inputBox.getAttribute("placeholder"));


// SET ATTRIBUTES

inputBox.setAttribute("class", "user");
console.log(inputBox);

// HAS ATTRIBUTES
console.log(inputBox.hasAttribute("id"));

// REMOVE ATTRIBUTES

// inputBox.removeAttribute("placeholder");
console.log(inputBox);


//MANIPULATING ELEMENT STYLES

// STYLING PROPERTIES

inputBox.style.backgroundColor = "blue";
inputBox.style.padding = "10px";


// CSS TEXT 
inputBox.style.cssText += "width: 300px; height: 200px"


// GETTING COMPUTED STYLE() METHOD



// CLASSNAME PROPERTY

// EVENT HANDLER

function displayTxt () {
    console.log("Button Clicked from function");
}

let btns2 = document.querySelector(".btn-5");
btns2.onclick = function right() {
    console.log("Buttion was clicked");
}


let btns4 = document.querySelector(".btn-5");
function displayMsgs() {
    console.log("Button was clicked again");
}
btns4.addEventListener("click", displayMsgs)
















































/* 
let number = 10; //prompt(`Please Enter Any Number`);

for (let count = 1; count <= 12; count++) {
    result = number * count;
    console.log(`${number} x ${count} = ${result}`);
}


let grade = `A`;
switch (grade) {
    case `A`:
        console.log(`Excelent`);
        break;
    case `B`:
        console.log(`Good`);
        break;
    case `C`:
        console.log(`Average`);
        break;
    case `D`:
        console.log(`Poor`);
        break;
    case `E`:
        console.log(`Very Poor`);
        break;
    case `F`:
        console.log(`Fail`);
    default:
        console.log(`You did not participate`);
}


let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let k = 2;
do {
    console.log(k);
    k++;
}while( k <= 5);


let greet = function  (num1, num2) {
    
    return num1 * num2;

};
console.log(greet(5,3));


function add (num1,num2) {
    let sum = num1 + num2;
    console.log(`sum: ${sum}`);
};
add(7,7);



let x = prompt(`Please Enter any number`);
let y = fact(x);
function fact(numFact) {
    if(numFact > 1) {
        return numFact * fact(numFact - 1);
    }
        return 1;
};
console.log(`The factorial of ${x} is ${y}`);


let counting = 0;
function printHello() {
    console.log(`hello`);
    

    if(counting > 5){
        return;
    }
    counting++;
    console.log(counting);

    printHello()
}
printHello();


 let multi = prompt(`Please Enter any Number`);
let multiplier = 1;

function multix() {
    if(multiplier > 12) {
        return;
    }
    let results = multi * multiplier;
    console.log(`${multi} x ${multiplier} = ${results}`);
    multiplier++;
    multix();
}

multix();



let person = {
    firstName: "Tijani",
    lastName: "Hassan",
    Age: 30,
    occupation: "Student",
    
    welcome : function () {
        console.log(`Mr ${this.firstName} is saying Hi`);
    }
}
person.welcome();


function person1 () {
    this.name = "John",
    this.age = 23,
    this.color = "black"
}
const person2 = new person1();
console.log(person2.name);


function gender (person_names,person_Ages,person_levels) {
    this.name = person_names,
    this.Age = person_Ages,
    this.level = person_levels

    this.studentDetails = function () {
        return (`My name is ${this.name}, i am ${this.Age} yeras old. I am in ${this.level} computer science`);
    }
}

const _student = new gender("Hassan", 23, "HND2");
console.log(_student.studentDetails());





for (let note = 1; note <= 20; note++) {
    console.log("I will not do it again big brother");
}



function _Tom (_studentName,_studentAge,_studentLevel) {
    this.name = _studentName,
    this.Age = _studentAge,
    this.level = _studentLevel,

    this.stud = function () {
        return (`My name is ${this.name}, i am ${this.Age} yeras old. I am in ${this.level} computer science`);
    }
    this.stud1 = function () {
        return (`My name is ${this.name}, i am ${this.Age} yeras old. I am in ${this.level} computer science`);
    }
}

const _real = new _Tom( "prime", 30, "HND1");
const _reals = new _Tom( "greet", 28, "HNDII");
console.log(_real.stud());
console.log(_reals.stud1());   

document.write("Welcome TIJANI HASSAN");


 let kettle = 6;
 let meg = (kettle > 18) ? "you are old" : "you are young";
 document.write(meg);



 function display (output) {
    console.log(output);
 }

 function adds (num1, num2, callbacks) {
    let sums = num1 + num2;
    callbacks(sums);
 }
 adds(10,20, display);



 function countDown(joke) {
    console.log(joke);
    joke--;
    if (joke >= 1){
        countDown(joke);
    }
 }
countDown(10); */