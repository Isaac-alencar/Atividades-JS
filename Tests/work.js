
import { countries } from "./countries.js" ;

const input_text = document.getElementById('inputText').value,
input = document.getElementById('inputText') , 
imgs = document.getElementsByClassName('imgs') ;
const test = document.getElementById('teste') 

const IMGSHTML = countries.map((count , index) => {
    
    return `<div class="imgs">
    <img id="teste" class="img" src="${count.image}" alt="${count.name}">
    <button class="imgs-button" draggable="false">${count.name}-${index} </button>
    </div>`
})

const menuImgs = document.getElementById('imgs-menuJs')
menuImgs.innerHTML = IMGSHTML

input.addEventListener('input' , inputEventText) 
const imagens = []

for(let i = 0 ; i < imgs.length ; i++){
    imagens.push(imgs[i])
}

function inputEventText(e){

    imagens.filter((img) => {
        const nomePais = img.firstElementChild.alt.toLowerCase()

       if(!nomePais.includes(e.target.value.toLowerCase())){
                img.style.cssText = "display:none;"
       } else {
        img.style.cssText = "display: flex;"
        
       }
             
    
    });
    
}