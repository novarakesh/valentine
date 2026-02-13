const rejectionMessages = [
    "No","Are you sure?","Really?","Think again!","Please? 🥺","Don't be mean!","Just say Yes!","I'll be sad 😢","Give me a chance!","Pretty please?",
    "You'll regret it!","Reconsider?","No way!","Come on!","Final answer?","You're breaking my heart 💔","Why not? 😭","One more try?","Please please please!",
    "I won't give up! 💪","But why? 😿","Change your mind!","Don't do this!","Last chance!","You don't mean that!","Say yes instead!","My heart is breaking 💔",
    "I believe in us! 💕","Give love a chance!","Okay but actually yes? 😊"
];


const yesbtn = document.getElementById("yesButton");
const nobtn = document.getElementById("noButton");
let yesWidth = 120;
let yesHeight = 50;

yesbtn.style.width = yesWidth + "px";
yesbtn.style.height = yesHeight + "px";
yesbtn.style.transition = "all 0.3s ease";


function accept() {
    alert("Yay! 💖🥰 You made my day!");
}

function reject() {
    
    yesWidth += 25;
    yesHeight += 12;
      
    random_word = rejectionMessages[Math.floor(Math.random() * rejectionMessages.length)];
    nobtn.textContent = random_word;

    yesbtn.style.width = yesWidth + "px";
    yesbtn.style.height = yesHeight + "px";

    yesbtn.style.fontSize = (yesWidth / 6) + "px";

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    nobtn.style.transform = `translate(${x}px, ${y}px)`;
}
