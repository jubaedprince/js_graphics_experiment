var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    painting = false,
    lastX = 0,
    lastY = 0,
    lineThickness = 1,
    stack_of_input = [],
    stack_of_steps = [];

var canvas2 = document.getElementById("canvas2"),
    ctx2 = canvas2.getContext("2d"),
    painting = false,
    lastX = 0,
    lastY = 0,
    lineThickness = 1;

canvas2.width = canvas2.height = 600;
ctx2.fillRect(0, 0, 600, 600);


canvas.width = canvas.height = 600;
ctx.fillRect(0, 0, 600, 600);

canvas.onmousedown = function(e) {
    
    painting = true;
    ctx.fillStyle = "#ffffff";
    lastX = e.pageX - this.offsetLeft;
    lastY = e.pageY - this.offsetTop;
};

canvas.onmouseup = function(e){
    stack_of_steps.push(stack_of_input);
    stack_of_input = [];
    painting = false;

}

canvas.onmousemove = function(e) {
    if (painting) {
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop;

        ctx.fillRect(mouseX, mouseY, 5, 5 );

         stack_of_input.push({
                    "x" : mouseY,
                    "y" : mouseX,
                    "lineThickness" : 5
                });

    }
}


function buttonClicked(){

    // console.log(stack_of_steps.length);
    ctx2.fillStyle = "#ffffff";
    for(c=0; c<stack_of_steps.length; c++){
        document.getElementById('steps').innerHTML += '<button onclick="draw('+c+')">' + c +'</button>';
    }
}

function draw(i){
    var input = stack_of_steps[i];
    // console.log(input);
    var counter = 0;
    var i = setInterval(function(){
        // do your thing
        // console.log(input[counter]);
        ctx2.fillRect(input[counter].y, input[counter].x, input[counter].lineThickness , input[counter].lineThickness );

        counter++;
        if(counter === input.length) {
            clearInterval(i);
        }
    }, 10);
}
