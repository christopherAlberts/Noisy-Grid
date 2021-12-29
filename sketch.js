var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);
    
  colorGrid();
  
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
    numOfRows = 25 
    numOfColumns = 25 
    
    startPointX = 0
    startPointY = 0
    
    width = stepSize
    height = stepSize
    
    for (var i=0; i<numOfRows; i++){
        for (var j=0; j<numOfColumns; j++){
            
        var n = noise(i/10, j/10, frameCount/mouseX);
            
        let from = color(255, 0, 0);
        let to = color(0, 255, 255); // CHANGED COLOUR FROM GREEN TO BLUE TO MAKE IT MY OWN
        colorMode(RGB); 
        let interA = lerpColor(from, to,n);
        fill(interA);
        stroke(0,0,0)
        rect(startPointX + (j * width), startPointY + (i * height) ,width, height);

        } 
    }

}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
    numOfRows = 25 
    numOfColumns = 25 
    x1 = 0
    y1 = 0
    x2 = 0
    y2 = 0
    r=-stepSize
    
    x3 = width/2    // 10
    y3 = height/2   // 10
//    
//    x3 
//    y3



    translate(-stepSize/2,y3) 

     for (var i=0; i<numOfRows; i++){
         for (var j=0; j<numOfColumns; j++){
             
            translate(stepSize,0)
            push()
   
            var n = noise(x1+j/10, y1+i/10, frameCount/mouseX);
            var secAngle = map(n,0,1,0,720)
            rotate(radians(secAngle))
            
            // IMPLEMENT COLOUR CHANGE
            let from = color(150, 100, 0);
            let to = color(0, 255, 0);
            colorMode(RGB); // Try changing to HSB.
            let interB = lerpColor(from, to,n);
            stroke(interB);
 
            // IMPLEMENT COMPASS LENGTH CHANGE
            line(0,0,0, r+secAngle/10)  
            pop()
        }

         translate(-j*stepSize,stepSize)
     }
    

  
}
