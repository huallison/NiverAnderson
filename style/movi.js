var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tmp;



function iniciar(){
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 10;
    obj=document.getElementById("Personagem")
    tmp = setInterval(enterFrame, 20);

    document.addEventListener("keydown", teclaDw)
    document.addEventListener("keyup", teclaUP)

}

function teclaDw(){
    var tecla = document.body.addEventListener("keypress", function (event) {
        code = event.keyCode;
    });
    if(tecla == 65){
        dx -= 1
    }else if (tecla == 87){
        dy -= 1
    }else if(tecla == 68){
        dx = 1
    }else if (tecla == 83){
        dy = 1
    }
}

function teclaUP(){
    var tecla = document.body.addEventListener("keypress", function (event) {
        code = event.keyCode;
        console.log(code)
    });
    if(tecla == 65){
        dx = 0
    }else if (tecla == 87){
        dy = 0
    }else if(tecla == 68){
        dx = 0
    }else if (tecla == 83){
        dy = 0
    }
}

function enterFrame(){
    px += dx*vel;
    py += dy*vel
    obj.style.left = `${px}px`
    obj.style.top = `${py}px`
 
}

function teclaPressionada(event) {
    return event.keyCode
  }


window.addEventListener("load", iniciar)