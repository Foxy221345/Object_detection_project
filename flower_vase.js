model_status="";
img="";
function preload()
{
    img=loadImage("flower_vase.jpg");
}

function setup()
{
    canvas=createCanvas(640,400);
    canvas.center();

    object_detector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";

}

function modelLoaded()
{ 
        console.log("model is loaded");
        load_status="true";
        object_detector.detect( img, gotResult);
}

function draw()
{
    
}