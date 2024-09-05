


































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
countDown(10);