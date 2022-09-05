Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
webcam=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="captured_img" src ="'+data_uri+'">';
        
    });
}

console.log("Ml5 version : ",ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yWfQvllC3/model.json",modelLoaded);