export default RainyDay => {  

  RainyDay.prototype.handDraw = function() {

    var context = this.context;
    var pressedMouse = false; 
    var x;
    var y;
    var colorLine ="#00000001";

    document.addEventListener("mousedown", startMouseDrawing);
    document.addEventListener("touchstart", startMobileDrawing);
    document.addEventListener("mousemove", drawMouseLine);
    document.addEventListener("touchmove", drawMobileLine);
    document.addEventListener("mouseup", stopDrawing);
    document.addEventListener("touchend", stopDrawing);

    function startMouseDrawing(event){

      pressedMouse = true;
      x = event.offsetX;
      y = event.offsetY;
    }

    function startMobileDrawing(event){

      pressedMouse = true;
      x = event.changedTouches[0].offsetX;
      y = event.changedTouches[0].offsetY;
    }
    
    function drawMouseLine(event) {

      if (pressedMouse) {

        var xM = event.offsetX;
        var yM = event.offsetY;
        drawing_line(colorLine, x, y, xM, yM, context);
        x = xM;
        y = yM;
      }
    }
    
    function drawMobileLine(event) {

      if (pressedMouse) {

        var xM = event.changedTouches[0].offsetX;
        var yM = event.changedTouches[0].offsetY;
        drawing_line(colorLine, x, y, xM, yM, context);
        x = xM;
        y = yM;
      }
    }
    
    function stopDrawing(eventvs03) {

      pressedMouse = false;
    }

    function drawing_line(color, x_start, y_start, x_end, y_end, board){
      board.beginPath();
      board.strokeStyle = color;
      board.lineWidth = 20;
      board.moveTo(x_start,y_start);
      board.lineTo(x_end,y_end);
      board.stroke(); 
      board.closePath();
    }
  };
}