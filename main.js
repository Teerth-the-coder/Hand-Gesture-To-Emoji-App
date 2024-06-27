function check() {
   speak() 
}

function capture() {
    Webcam.snap((data_url) => document.getElementById("result").innerHTML = "<img id=snap src=" + data_url + ">")
}

function speak() {
    synth = window.speechSynthesis;
    speakData1 = "The First Prediction Is " + p1;
    speakData2 = "And The Second Prediction Is " + p2;
    utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
}

p1 = "";
p2 = "";

function gotResults() {
    
}

Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

classifier = ml5.imageClassifier("", () => console.log("model has loaded"))