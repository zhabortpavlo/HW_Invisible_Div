let onMouseArea = document.querySelector('.textArea');
let invisArea = document.querySelector('.invisArea');

onMouseArea.addEventListener('mouseover' , function() {
   invisArea.style.display = 'block' ;
   onMouseArea.innerHTML = 'NOW MOVE MOUSE AWAY';
})

onMouseArea.addEventListener('mouseout' , function() {
    invisArea.style.display = 'none';
    onMouseArea.innerHTML = 'PUT MOUSE ON ME'
})