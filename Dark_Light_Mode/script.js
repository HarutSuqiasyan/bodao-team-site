const circle = document.querySelector('.circle');
const box = document.querySelector('.container__2')
const container = document.querySelector('.container');

box.addEventListener('click',()=>{
    box.classList.toggle('bg2');
    container.classList.toggle('bg');
    circle.classList.toggle('active');
})