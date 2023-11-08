<script type="text/javascript">
    const menubtn=document.querySelector(".menu-btn");
     const topmaincentre=document.querySelector("main-top-centre");

    menubtn.addEventListener('click',() =>{
     menubtn.classList.toggle("active");
     topmaincentre .classList.toggle("active");
    });

   const bnts=document.querySelectorAll(".boulle-btn");
   var lesboules = function(manual){
    bnts.forEach((btn) =>{
        btn.classList.remove("active");
    })
    bnts[manual].classList.add("active");
   
    
   }

   bnts.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        lesboules(i);
    })
   })
  