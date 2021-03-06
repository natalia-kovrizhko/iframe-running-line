const frame1 = document.getElementById("frame1");
const frame2 = document.getElementById("frame2");

const TARGET_ID = "text1";
const COUNT_FRAMES = 2;

const frameDocuments = [];

let text;
let runString = document.querySelector("runString");

function onLoadFrame(currentFrame) {
    frameDocuments.push(currentFrame.contentDocument);

    if(frameDocuments.length === COUNT_FRAMES) {
        frameLoaded(frameDocuments);
    }
}

function frameLoaded(documents) {
    text = "";
    documents.forEach(document => {
        text += parseDocumentText(document) + " ";
    });

    console.log(text.slice(0, -1));
}

function parseDocumentText(document) {
    return document.getElementById(TARGET_ID).innerText;
}

frame1.onload = () => onLoadFrame(frame1);
frame2.onload = () => onLoadFrame(frame2);


let pos = 0;
const runningLineElem = document.getElementById("string");
const runningLineElem2 = document.getElementById("runString");

function runLine()  {
    pos++;
    if(pos >= text.length) {
        pos =  0;
    }

    let textWithoutLast = text.slice(0, pos);
    let lastText = text.slice(pos);

    runningLineElem.innerHTML = lastText + textWithoutLast;
    runningLineElem2.innerHTML = lastText + textWithoutLast;
}

setInterval(runLine, 100);