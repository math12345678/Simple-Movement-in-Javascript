let earth_x = 500
let earth_y = 400
//this variable will store an image
let earth_img

function preload()
{
  earth_img = loadImage("care.png")
}


function setup() {
  createCanvas(1000, 800);
  
  
  earth_img.resize(100,100)
}


function draw() {
  background(0,0,128);
  
  
image(earth_img,earth_x,earth_y)
  
  
  if(keyIsPressed==true)
    {
     if(keyCode==38) 
      {
      earth_y = earth_y - 1  
        
      }
      if(keyCode==40)
       {
         earth_y = earth_y + 1
       }
      if(keyCode==37)
        {
         earth_x = earth_x - 1  
        }
        if(keyCode==39)
          {
            earth_x = earth_x + 1
          }
    }
  
}
