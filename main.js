canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_x=10;
rover_y=20;
rover_height=100;
rover_width=80;
background_image="mars.jpg";
rover_image="rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover();
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keyPressed = e.keycode;

    if (keyPressed == "37"){
        up();
    }

    if (keyPressed == "38"){
        down();
    }

    if (keyPressed == "39"){
        left();
    }

    if (keyPressed == "40"){
        right();
    }
}

function up(){
    if(rover_y >=0){
         uploadBackground();
         uploadrover();
    }
}

function down(){
    if(rover_y <=500){
        rover_y =+10;
         uploadBackground();
         uploadrover();
    }
}

function left(){
    if(rover_x >=0){
        rover_x =-10;
         uploadBackground();
         uploadrover();
    }
}

function right(){
    if(rover_x <=700){
        rover_x =+10;
         uploadBackground();
         uploadrover();
    }
}