var wrist_x = 0;
var wrist_y = 0;


function preload() {

}

function setup() {

    video = createCapture(VIDEO);
    video.position(50,180);

    canvas = createCanvas(600,480);
    canvas.position(750,180);

    poseNet = ml5.poseNet(video, model_Loaded);
    poseNet.on("pose", gotPoses);
}

function draw(){

}

function model_Loaded() {
    console.log("Model Ready");
}

function gotPoses(results, error) {
    if(error){
        console.log(error);
    }
    if(results.length > 0) {
        console.log(results);
        wrist_x = results[0].pose.leftWrist.x;
        wrist_y = results[0].pose.rightWrist.y;
        console.log("value of x = "+wrist_x+" Value of y = "+wrist_y);
    }
}