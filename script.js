let flashcards = [
{ question: "What is HTML?", answer: "HTML is HyperText Markup Language." },
{ question: "What is CSS?", answer: "CSS styles the HTML document." },
{ question: "What is JavaScript?", answer: "JavaScript makes web pages interactive." }
];
let current = 0;
const qEl = document.getElementById("question");
const aEl = document.getElementById("answer");
const counter = document.getElementById("counter");

function showCard(){
qEl.textContent = flashcards[current].question;
aEl.textContent = flashcards[current].answer;
aEl.style.display = "none";
counter.textContent = `Card ${current+1} / ${flashcards.length}`;
}
document.getElementById("showBtn").onclick = () => {
aEl.style.display = aEl.style.display=="none"? "block" : "none";
}
document.getElementById("nextBtn").onclick = () => {
current = (current+1) % flashcards.length; showCard();
}
document.getElementById("prevBtn").onclick = () => {
current = (current-1 + flashcards.length) % flashcards.length; showCard();
}
document.getElementById("deleteBtn").onclick = () => {
if(flashcards.length==1){alert("Atleast 1 card needed");return;}
flashcards.splice(current,1); current=0; showCard();
}
document.getElementById("editBtn").onclick = () => {
let q = prompt("Edit Question:", flashcards[current].question);
let a = prompt("Edit Answer:", flashcards[current].answer);
if(q && a){ flashcards[current]={question:q, answer:a}; showCard(); }
}
document.getElementById("addBtn").onclick = () => {
let q = document.getElementById("newQuestion").value;
let a = document.getElementById("newAnswer").value;
if(!q ||!a){alert("Fill both fields");return;}
flashcards.push({question:q, answer:a});
document.getElementById("newQuestion").value=""; document.getElementById("newAnswer").value="";
current = flashcards.length-1; showCard();
}
showCard();