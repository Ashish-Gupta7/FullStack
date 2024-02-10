function page8First(){
    let h1 = document.querySelector("#p8-first > #rig > h1")
    let textH1 = h1.textContent;
    let textSplit = textH1.split("")
    console.log(textSplit);
    let clatter= "";
    textSplit.forEach(function(e){
     clatter+=<span>${e}</span>
    })
     h1.innerHTML=clatter;
 
     document.querySelector("#p8-first > #rig > h1").addEventListener("mouseenter", function(){
         let t = document.querySelectorAll("#p8-first > #rig > h1 span")
         let tl = gsap.timeline()
         gsap.to(t,{
             opacity:0,
             duration:0.2,
             stagger:{
                 amount:0.5
             }
         })
         gsap.to(t,{
             opacity:1,
             fontFamily:"Arial",
             duration:1,
             webkitTextStroke: "1px white",
             color: "transparent",
             fontStyle:"italic",
             stagger:{
                 amount:0.5
             },
             delay:0.3
         })
         gsap.to("#rig > i",{
             x:50,
             duration:1,
             delay:0.1
              
         })
         
     })
 
     document.querySelector("#p8-first > #rig > h1").addEventListener("mouseleave", function(){
         let t = document.querySelectorAll("#p8-first > #rig > h1 span")
         let tl = gsap.timeline()
         gsap.to(t,{
             opacity:0,
             duration:0.2,
             stagger:{
                 amount:0.5
             }
         })
         gsap.to(t,{
             opacity:1,
             fontFamily:"gilroy",
             duration:1,
             color: "white",
             stagger:{
                 amount:0.5
             },
             delay:0.3
         })
         
     })
 
 }
 page8First()