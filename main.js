function check() {
    img = document.getElementById("snap");
    classifier.classify(img, gotResults);
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

function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        p1 = result[0].label;
        p2 = result[1].label;


        if (p1 == "Rockstar") {
            document.getElementById("emoji1").innerHTML = "🤟"
        } else if (p1 == "Thumbs Up") {
            document.getElementById("emoji1").innerHTML = "👍"
        } else if (p1 == "Thumbs down") {
            document.getElementById("emoji1").innerHTML = "👎"
        } else if (p1 == "Peace") {
            document.getElementById("emoji1").innerHTML = "✌️"
        }

        if (p2 == "Rockstar") {
            document.getElementById("emoji2").innerHTML = "🤟"
        } else if (p2 == "Thumbs Up") {
            document.getElementById("emoji2").innerHTML = "👍"
        } else if (p2 == "Thumbs down") {
            document.getElementById("emoji2").innerHTML = "👎"
        } else if (p2 == "Peace") {
            document.getElementById("emoji2").innerHTML = "✌️"
        }

        speak()
    }


}

//https://teachablemachine.withgoogle.com/models/pNfju-wZz3/json

Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pNfju-wZz3/model.json", () => console.log("model has loaded"))

//https://teachablemachine.withgoogle.com/models/x5HFYkpHo/json