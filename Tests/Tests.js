
const array = ['images/Pratice.jpg', 'images/image2.jpg' ,'images/image3.jpg']
const arrow_left = document.getElementById('Left')
const arrow_rigth = document.getElementById('Right')
//const arrow = document.querySelectorAll('.Arrows') 
const image = document.getElementById('image')
let count = 0
/* Move images */
function moveRight(){
      if(count === array.length-1){
         count = 0
         image.src = array[count]
      } else {
         count++
         image.src = array[count]
      }
   }
   
function moveLeft(){
   
      if(count === 0){
         count = array.length-1
         image.src = array[count]
      } else {
         count--
         image.src = array[count]
      }
   }
 //End of the Effect

 //left Arrow´s Effect Title
 const title = document.getElementById('text')
 arrow_left.addEventListener('mouseenter' , () => {
    title.style.cssText = 'margin-left:5px;'+'transition:0.6s ease-in-out;'
 })
 arrow_left.addEventListener('mouseleave' , () => {
    title.style.cssText = 'margin-left:5px'+'transition:0.6s ease-in-out;'
 })
//End of the Effect
//Right Arrow´s Effect Title
arrow_rigth.addEventListener('mouseenter' , () => {
   title.style.cssText = 'margin-right:5px;'+'transition:0.6s ease-in-out;'
})
arrow_rigth.addEventListener('mouseleave' , () => {
   title.style.cssText = 'margin-right:5px;'+'transition:0.6s ease-in-out;'
})
//End of the Effect
