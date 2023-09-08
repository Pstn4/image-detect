img="";
status="";
objects=[];
function preload()
{
    img=loadImage("iphone.jpg");
}
function draw()
{
    image(img,0,0,640,420); 
    if (status != "")
    {
        for (i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="status:objects Detected";
            document.getElementById("number_of_objects").innerHTML="Number of Objects detected are: "+objects.length;
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
}
function modelloaded()
{
    console.log("model loaded!");
    status=true;
    objectdetector.detect(img,gotresults);
}
function gotresults(error,result)
{
    if (error)
    {
        console.log(error);
    }
    else 
    {
        console.log(result);
        objects=result;

    }
}
function back()
{
    window.location="index.html";
}