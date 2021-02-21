canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var background_img= "racing.jpg";
var car1_img= "car1.png";
car1_width= 120;
car1_height= 70;
car1_x= 10;
car1_y= 10;

var car2_img="car2.png";
car2_width= 120;
car2_height= 70;
car2_x= 10;
car2_y= 100;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= upload_background;
    background_imgTag.src= background_img;

    car1_Tag= new Image();
    car1_Tag.onload= upload_car1;
    car1_Tag.src= car1_img;

    car2_Tag= new Image();
    car2_Tag.onload= upload_car2;
    car2_Tag.src= car2_img;
  }

  function upload_background(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
  }

  function upload_car1(){
      ctx.drawImage(car1_Tag,car1_x,car1_y,car1_width,car1_height);
  }

  function upload_car2(){
    ctx.drawImage(car2_Tag,car2_x,car2_y,car2_width,car2_height);
}

  window.addEventListener("keydown", my_keydown);
  function my_keydown(e){
      key_pressed= e.keyCode;
      console.log(key_pressed);

      if(key_pressed=="39"){
          //car1 right();
          console.log("right arrow is pressed");
      }
      if(key_pressed=="37"){
        //car1 left();
        console.log("left arrow is pressed");
    }
    if(key_pressed=="38"){
        //car1 up();
        console.log("up arrow is pressed");
    }
    if(key_pressed=="40"){
        //car1 down();
        console.log("down arrow is pressed");
    }

        if(key_pressed=="87"){
            //car2 up();
            console.log("W key is pressed");
        }
        if(key_pressed=="83"){
          //car2 down();
          console.log("S key is pressed");
      }
      if(key_pressed=="65"){
          //car2 left();
          console.log("A key is pressed");
      }
      if(key_pressed=="68"){
          //car2 right();
          console.log("D key is pressed");
     
        }
    } 