
    var navlinks=document.getElementById("navlinks");
    
    function showmenu()
    {
        navlinks.style.right="0";
       
    }
    function hidemenu()
    {
        navlinks.style.right="-200px";
    }


     var  productimg=document.getElementById("productimg");
     var smallimg=document.getElementsByClassName("small-img");

     smallimg[0].onclick=function(){
         productimg.src=smallimg[0].src;
     }
     smallimg[1].onclick=function(){
         productimg.src=smallimg[1].src;
     }
     smallimg[2].onclick=function(){
         productimg.src=smallimg[2].src;
     }
     smallimg[3].onclick=function(){
         productimg.src=smallimg[3].src;
     }
