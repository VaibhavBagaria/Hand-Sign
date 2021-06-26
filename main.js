
Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera')

function Take_Snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="' + data_uri + '">'
    })
}

console.log("ml5 version:", ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TYd2yVjNA/model.json", modelLoaded)

function model_Loaded() {
    console.log("model loaded!")
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The First Prediction Is " + Prediction_1;
    speak_data2 = "and The Second Prediction Is " + Prediction_2;
    utterthis = new SpeechSynthesisUtterance(speak_data1 + speak_data2)
    synth.speak(utterthis)
}