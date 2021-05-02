canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var NasaMars=["Nasa_mars1.jpg","Nasa_mars3.jpg","Nasa_mars2.jpg","Nasa_mars4real.jpg","Nasa_mars5","Nasa_mars6","Nasa_mars7"];
var randomGuy=Math.floor(Math.random()*7)

var rover_width=100;
var rover_height=100;
var rover_x=10;
var rover_y=10;

var background_img=NasaMars[randomGuy];
var rover_img="rover.png";

function add(){
    bac_imgTag=new Image();
    bac_imgTag.onload=uploadbackground;
    bac_imgTag.src=background_img;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_img;
}

function uploadbackground(){
    ctx.drawImage(bac_imgTag, 0, 0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x, rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_Keydown);

function my_Keydown(e){
    console.log("test");
    keypress=e.keyCode;
    console.log(keypress);
    if (keypress=='38'){
        up();
        console.log("up");
    }
    if (keypress=='40'){
        down();
        console.log("down");
    }
    if (keypress=='39'){
        right();
        console.log("right");
    }
    if (keypress=='37'){
        left();
        console.log("left");
    }
   }

   function up(){
       if(rover_y >= 0){
           rover_y = rover_y - 10 ;
           uploadbackground();
           uploadrover();
       }
   }
   function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10 ;
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10 ;
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10 ;
        uploadbackground();
        uploadrover();
    }
}