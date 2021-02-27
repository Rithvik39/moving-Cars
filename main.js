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
            car1_right();
          console.log("right arrow is pressed");
      }
      if(key_pressed=="37"){
          car1_left();
        console.log("left arrow is pressed");
    }
    if(key_pressed=="38"){
          car1_up();
        console.log("up arrow is pressed");
    }
    if(key_pressed=="40"){
          car1_down();
        console.log("down arrow is pressed");
    }

        if(key_pressed=="87"){
              car2_up();
            console.log("W key is pressed");
        }
        if(key_pressed=="83"){
            car2_down();
          console.log("S key is pressed");
      }
      if(key_pressed=="65"){
            car2_left();
          console.log("A key is pressed");
      }
      if(key_pressed=="68"){
            car2_right();
          console.log("D key is pressed");
     
        }
        if(car1_x > 700){
            console.log("car1 won !!!");
            document.getElementById("game_status").innerHTML= "Car1 won !!!";

            if(car2_x > 700){
              console.log("car2 won !!!");
              document.getElementById("game_status").innerHTML= "Car2 won !!!";
            }
        }
        
    } 
    
    function car1_right(){
        if( car1_x<= 700){
            car1_x= car1_x + 10;
            console.log("When right arrow key is preesed, x=" + car1_x + "y=" + car1_y);
            upload_background();
            upload_car1();
            upload_car2();
        }
    }
  
    function car1_left(){
      if(car1_x >= 0){
        car1_x= car1_x - 10;
          console.log("When left arrow key is preesed, x=" + car1_x + "y=" + car1_y);
          upload_background();
          upload_car1();
          upload_car2();
      }
  }
  
  function car1_up(){
      if(car1_y >= 0){
        car1_y= car1_y - 10;
          console.log("When up arrow key is preesed, x=" + car1_x + "y=" + car1_y);
          upload_background();
          upload_car1();
          upload_car2();
      }
  }
  
  function car1_down(){
      if(car1_y <= 500){
        car1_y= car1_y + 10;
          console.log("When down arrow key is preesed, x=" + car1_x + "y=" + car1_y);
          upload_background();
          upload_car1();
          upload_car2();
      }
  }


  function car2_right(){
    if(car2_x<= 700){
        car2_x= car2_x + 10;
        console.log("When D key is preesed, x=" + car2_x + "y=" + car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_left(){
  if(car2_x >= 0){
    car2_x= car2_x - 10;
      console.log("When A key is preesed, x=" + car2_x + "y=" + car2_y);
      upload_background();
      upload_car1();
      upload_car2();
  }
}

function car2_up(){
  if(car2_y >= 0){
    car2_y= car2_y - 10;
      console.log("When W key is preesed, x=" + car2_x + "y=" + car2_y);
      upload_background();
      upload_car1();
      upload_car2();
  }
}

function car2_down(){
  if(car2_y <= 500){
    car2_y= car2_y + 10;
      console.log("When S key is preesed, x=" + car2_x + "y=" + car2_y);
      upload_background();
      upload_car1();
      upload_car2();
  }
}


