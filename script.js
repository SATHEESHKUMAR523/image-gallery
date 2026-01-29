const slides=document.querySelector('.slides');
const img=document.querySelectorAll('.slides img')

let index=0;
let slidewidth=600

function showslide(){
    slides.style.transform=`translateX(${-index*slidewidth}px)`;
}
document.getElementById("next").addEventListener("click",()=>{
    index=(index+1)%img.length;
    showslide();
});
document.getElementById("prev").addEventListener("click",()=>{
    index=(index-1+img.length)% img.length;
    showslide();
});