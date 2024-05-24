let left=document.querySelector(".fa-angle-double-right") 
let right=document.querySelector(".fa-angle-double-left")
let width_giver=document.querySelector(".Context")
left.addEventListener("click",()=>{
    width_giver.scroll({
        left:width_giver.offsetWidth,
        behavior:'smooth'
        
    })  
    console.log(width_giver)
  
})  
right.addEventListener("click",()=>{
    width_giver.scroll({
        left: -width_giver.offsetWidth,
        behavior:'smooth'
    })
})