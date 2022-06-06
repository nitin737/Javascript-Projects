document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.querySelector('.grid');
    let squares=Array.from(document.querySelectorAll('.grid div'));
    const scoreDisplay=document.querySelector('#score');
    const startBtn=document.querySelector('#start-button')
    const width=10;
    
    const lTetomino = [
        [1,width+1,width*2+1,2],
        [1,width+1,width*2+1,width*3+1,width*3],
        [0,1,2,3,width+2]
    ]
})