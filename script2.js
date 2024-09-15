
let reveal = document.querySelector(".reveal");
let hidden = document.querySelector(".hidden-text");
 
function reveals() {
    if(hidden.classList.contains("reveal")){
        hidden.classList.toggle("reveal")
    }else{
        hidden.classList.toggle("reveal")
    }
}
reveal.addEventListener("click", reveals);     


// EVENT PROBAGATION

 window.addEventListener("click", function() {
    console.log("window");
 },false);

 document.addEventListener("click", function() {
    console.log("document");
 },false);

 document.querySelector(".div2").addEventListener("click", function() {
    console.log("DIV 2");
 },false),

 document.querySelector(".div1").addEventListener("click", function() {
    console.log("DIV 1");
 },false);

 document.querySelector(".btn").addEventListener("click", function(age) {
    console.log(age.target.innerText = "Clicked");
 },false);


 // EVENT DELEGATION

//  document.querySelector("#football").addEventListener("click",function(change){
//     console.log("football is clicked");

//     let targets = change.target;
//     if(targets.matches("li")) {
//         targets.style.backgroundColor = "blue"
//     }
//  })
//  document.querySelector("#basketball").addEventListener("click",function(change){
//     console.log("basketball is clicked");

//     let targets = change.target;
//     if(targets.matches("li")) {
//         targets.style.backgroundColor = "yellow"
//     }
//  })
//  document.querySelector("#boxing").addEventListener("click",function(change){
//     console.log("boxing is clicked");

//     let targets = change.target;
//     if(targets.matches("li")) {
//         targets.style.backgroundColor = "red"
//     }
//  })
//  document.querySelector("#tennis").addEventListener("click",function(change){
//     console.log("tennis is clicked");

//     let targets = change.target;
//     if(targets.matches("li")) {
//         targets.style.backgroundColor = "green"
//     }
//  })
//  document.querySelector("#golf").addEventListener("click",function(change){
//     console.log("golf is clicked");

//     let targets = change.target;
//     if(targets.matches("li")) {
//         targets.style.backgroundColor = "purple"
//     }
//  })


document.querySelector("#sports").addEventListener("click", function(delegation) {
    console.log(delegation.target.id + " is clicked");

    let target = delegation.target;
    if(target.matches("li")) {
        target.style.backgroundColor = "yellow";
    }
})



//                            DOM PART 2

// QUOTE GENERATOR 

let bttns = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

let quotes = [
    {
    quote: '"To live is the rarest thing in the world. Most people exist, that is all."',
    person: 'Oscar Wilde'
    },

    {
    quote: '"That it will never come again is what makes life so sweet."',  
    person: 'Emily Dickinson'
    },
 
    {
    quote: '"It is never too late to be what you might have been."', 
    person: 'George Eliot'
    },
 
    {
    quote:'"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."', 
    person: 'Ralph Waldo Emerson'
    },
 
    {
    quote:'"Pain is inevitable. Suffering is optional."',
    person: 'Haruki Murakami'
    },
 
    {
    quote:'"All the worlds a stage, and all the men and women merely players."', 
    person: 'William Shakespeare'
    },
 
    {
    quote:'"Be kind, for everyone you meet is fighting a hard battle."', 
    person: 'Plato'
    },
 
    {
    quote:'"Unable are the loved to die for love is immortality."', 
    person: 'Emily Dickinson'
    },
 
    {
    quote:'"Let me live, love, and say it well in good sentences."',
    person: 'Sylvia Plath'
    },
 
    {
    quote:'"Dont let your happiness depend on something you may lose."', 
    person: 'C.S. Lewis'
    },
 
    {
    quote:'"We are all broken, thats how the light gets in."', 
    person: 'Ernest Hemingway'
    },
 
    {
    quote:'"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well."', 
    person: 'Voltaire'
    },
 
    {
    quote:'"Life is tough my darling, but so are you."', 
    person: 'Stephanie Bennett Henry'
    },
 
    {
    quote:'"Self-awareness and self-love matter. Who we are is how we lead."', 
    person: 'Brene Brown'
    },
 
    {
    quote:'"Amateurs sit and wait for inspiration, the rest of us just get up and go to work."', 
    person: 'Stephen King'
    },
];

bttns.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person; 
})