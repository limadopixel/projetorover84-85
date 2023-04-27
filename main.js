canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeidt = 90;


roverX =300;
roverY =223;

backgroundImage = "mars.jpg";
roverImage = "rover.png";


function add(){
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploandbackground;
    backgroundImgTag.src = backgroundImage;



    roverImgTag = new Image();
    roverImgTag.onload = uploandrover;
    roverImgTag.src = roverImage;




}
function uploandbackground(){

    ctx.drawImage(backgroundImgTag, 0,0, canvas.width, canvas.height);
}
function uploandrover(){
        ctx.drawImage(roverImgTag, roverY , roverX ,roverHeidt,roverWidth);
}
//aula85
window.addEventListener("keydown", myKeyDown);

function myKeyDown (e)
{
    KeyPressed = e.keyCode;
    console.log(KeyPressed);

    //cima
    if (KeyPressed=="38")
    {
        up();
        console.log("cima");
    }


    //baixo
    if (KeyPressed=="40")
    {
        down();
        console.log("baixo");
    }

    //esquerda
    if (KeyPressed=="37")
    {
        left();
        console.log("esquerda");
    }


    //direita
    if (KeyPressed=="39")
    {
        right();
        console.log("direita");
    }
}



//movimentaçao

//subir
function up()
{
    if(roverY >=0)
    {  
        roverY = roverY - 10;
        console.log("Quando direcional cima for pressionada, x = " + roverX + " | y = " +roverY);
        uploandbackground();
        uploandrover();


    }
}

function down()
{
    if(roverY <= 500)
    {  
        roverY = roverY + 10;
        console.log("Quando direcional baixo for pressionada, x = " + roverX + " | y = " +roverY);
        uploandbackground();
        uploandrover();


    }
}
function right()
{
    if(roverX >=0)
    {  
        roverX = roverX + 10;
        console.log("Quando direcional direita for pressionada, x = " + roverX + " | y = " +roverY);
        uploandbackground();
        uploandrover();


    }
}
function left()
{
    if(roverY <= 700)
    {  
        roverX = roverX - 10;
        console.log("Quando direcional esquerda for pressionada, x = " + roverX + " | y = " +roverY);
        uploandbackground();
        uploandrover();


    }
}