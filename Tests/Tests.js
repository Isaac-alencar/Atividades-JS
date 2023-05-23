/*Next Image button */
const array = ['images/Pratice.jpg', 'images/image2.jpg' , 'images/image3.jpg']
const arrow_left = document.getElementById('Left')
const arrow_rigth = document.getElementById('Right')
const image = document.getElementById('image')
let count = 0
let length = array.length-1
arrow_rigth.addEventListener('click' , ()=>{
    if(length > count){
        count++
        image.src = array[0+count];
    }
})
 arrow_left.addEventListener('click',()=>{
    if(count <= length){
        count--
        image.src = array[count]
    }
    if(count <= 0){
        count = 0
        image.src = array[0]
    }
 })
 /*End of the Effect*/
 /*left Arrow´s Effect Title*/
 const title = document.getElementById('text')
 arrow_left.addEventListener('mouseenter' , () => {
    title.style.cssText = 'margin-left:5px;'+'transition:0.6s ease-in-out;'
 })
 arrow_left.addEventListener('mouseleave' , () => {
    title.style.cssText = 'margin-left:5px'+'transition:0.6s ease-in-out;'
 })
/*End of the Effect*/
/*Right Arrow´s Effect Title*/
arrow_rigth.addEventListener('mouseenter' , () => {
   title.style.cssText = 'margin-right:5px;'+'transition:0.6s ease-in-out;'
})
arrow_rigth.addEventListener('mouseleave' , () => {
   title.style.cssText = 'margin-right:5px;'+'transition:0.6s ease-in-out;'
})
/*End of the Effect*/

