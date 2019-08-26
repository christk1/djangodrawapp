var canvas = document.getElementById("myCanvas");

var context = canvas.getContext("2d");

$("#pic_share_form").submit(function( event ) {
  // Stop form from submitting normally
  event.preventDefault();

  var image_data = canvas.toDataURL('image/jpeg');

  $.post({
    url:'postpic/',
    data:{
      image:image_data,
      csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
    },
    success:function(){
      alert("drawing posted!");
    }
  });
});


$('#myCanvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

$('#myCanvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$('#myCanvas').mouseup(function(e){
  paint = false;
});

$('#myCanvas').mouseleave(function(e){
  paint = false;
});


var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function clearcanv()
{
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  clickX = new Array();
  clickY = new Array();
  clickDrag = new Array();
}

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

  context.lineJoin = "round";
  context.lineWidth = 5;

  for(var i=0; i < clickX.length; i++) {
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.strokeStyle = '#dbd00a';
     context.stroke();
  }
}
