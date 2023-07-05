function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#5196e3");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#00ff0a");
    text('Manan',50,400);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
    if(results.length > 0)
    {
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;
        difference = floor(leftWrist_x - rightWrist_x);
    }
}

function modelLoaded()
{
    console.log("PoseNet is Initialized!");
}