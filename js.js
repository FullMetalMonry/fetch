const button = document.getElementById('theme-btn');

const originalColor = 'rgba(31, 32, 34, 1)'; 
document.body.style.backgroundColor = originalColor; 

const colors = [
    'gold',            
    'deepskyblue',     
    'magenta',         
    'red'              
];

let currentColorIndex = 0; 


button.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    
    currentColorIndex = (currentColorIndex + 1) % colors.length; 
});
document.body.style.backgroundColor = originalColor;
