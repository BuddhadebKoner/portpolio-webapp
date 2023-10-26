const toggle = document.getElementById('modeToggle');
    
const light = document.getElementsByClassName('fa-sun')[0];
const dark = document.getElementsByClassName('fa-moon')[0];
const navLinks = document.querySelectorAll('.navbar');

const navBg = document.getElementById('mode');

toggle.addEventListener("click", function () {
    if (dark.style.display === 'block' || dark.style.display === '') {
        dark.style.display = 'none';
        light.style.display = 'block';

    } else {
        dark.style.display = 'block';   
        light.style.display = 'none';
    }
});


