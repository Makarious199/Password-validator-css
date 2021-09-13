
 	var is_visible = false;

  function len(){

   var keyz = document.getElementById('key').value;

   var key = document.getElementById('key').value.length;

   document.getElementById('num').innerText = key; 

   var span1 = document.getElementById('span1');

   var span2 = document.getElementById('span2');

   if(key>=5){
    span1.style.color = "lime";    
             }

   else{
   	span1.style.color = "red";
   }

   if(key>=10){
   	span2.style.color = "red";
   }

   else{
   	span2.style.color = "lime";
   }

   var span3 = document.getElementById('span3');

   if (keyz.match(' ')) {
    span3.style.color = "red";
   }

   else{
   	span3.style.color = "lime";
   }

   var span4 = document.getElementById('span4');

    if(keyz.match(/[0-9]/g)){
      span4.style.color = "lime";
    }

    else{
      span4.style.color = "red";
    }

   var span5 = document.getElementById('span5');

    if(keyz.match(/[!,@,#,$,%,^,&,*,_]/g)){
     span5.style.color = "lime";
    }

    else{
     span5.style.color = "red";
    }

    var span6 = document.getElementById('span6');

     if(keyz.match(/[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]/g)){
     	span6.style.color  = "lime";
     }

     else{
      span6.style.color = "red";
     }

  }

  $('#key').attr("placeholder", "ENTER");