const arrow = document.querySelector(".arrow-one");
const arrowTwo = document.querySelector(".arrow-two");
const boxes = document.querySelector(".boxes");
const box = document.querySelector(".box");
const boxOne = document.querySelector(".box-one");
const p = document.querySelectorAll("p");
const h = document.querySelectorAll("h1");
const text = document.querySelector(".text");
const boxTwo = document.querySelector(".box-two");


function clientWidth() {
    // Get the dimensions of the viewport
    let okno = 500;
    let width = window.innerWidth;


    if (width <= okno) {
        text.classList.toggle("text-none");
        boxOne.classList.toggle("move");
        boxTwo.classList.toggle("text-none");
    }

    console.log(width)
};





function SollX() {
    boxes.classList.toggle("move");
    arrowTwo.classList.toggle("text-p");
    arrow.classList.toggle("text-none");
    // h.classList.toggle('textH');
    // let okno = window.innerWidth;
    // if (okno < 400 + "px") {
    //     text.classList.toggle("text-none");
    //     boxOne.style.backgroundColor = "red";
    // }
    // console.log(okno);
    clientWidth()

}

function Soll() {

    p.forEach(p => {
        p.classList.remove('text-none')
        p.classList.add('text-p');
        p.style.fontSize = 25 + "px";

    });
    boxOne.classList.toggle('boxne');

}

function SollP() {
    p.forEach(p => {
        p.classList.add('text-none')
        p.classList.remove('text-p')
        p.style.fontSize = 0 + "px";
    });
    boxOne.classList.toggle('boxne');


}

function powieksz() {
    h.style.fontSize = 0 + "px";
}

arrow.addEventListener('click',
    Soll);
arrow.addEventListener('click',
    SollX);
arrowTwo.addEventListener('click',
    SollX);
arrowTwo.addEventListener('click',
    SollP);
// h.addEventListener('mouseover', powieksz);