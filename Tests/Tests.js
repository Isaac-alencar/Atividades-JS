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
    //length > count ? image.src = array[count++] : false;
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