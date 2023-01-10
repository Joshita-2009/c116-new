lipX=0;
lipY=0;
function preload(){
lips=loadImage("lips.png");
}
function setup(){
          canvas=createCanvas(300, 300);
          canvas.center();
          video=createCapture(VIDEO);
          video.size(300, 300);
          video.hide();
          poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 300, 300);
image(lips, lipX-30, lipY+50, 50, 50);

}
function modelLoaded(){
          console.log("poseNet is initialized");
}

function take_snapshot(){
          save("myfilter.jpg");
}
function gotPoses(results){
          if(results.length > 0){
                    lipX=results[0].pose.nose.x;
                    lipY=results[0].pose.nose.y;
                    console.log(results);
                    console.log("lips x = " + lipX);
                    console.log("lips y = " + lipY);
          }
}