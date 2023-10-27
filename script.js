const eduBtn = document.getElementById('edu');
const skillBtn = document.getElementById('Skill');

const eduDetails = document.getElementById('edu-details');
const skillDetails = document.getElementById('skill-details');



eduBtn.addEventListener('click', () => {
    eduDetails.style.display = 'block';
    skillDetails.style.display = 'none';
});

skillBtn.addEventListener('click', () => {
    eduDetails.style.display = 'none';
    skillDetails.style.display = 'block';
});

 // for deopdwon btn in the nav bar. --- only for 672px width divices.. 

 const dropdownBtn = document.getElementById('burger');
 const dropdownArea = document.getElementById('dropdown');
 const navLinks = document.querySelectorAll('.mobile-nav-links');
 
 dropdownBtn.addEventListener('click', () => {
     if (dropdownBtn.checked) {
         dropdownArea.style.display = 'block';
 
         // Loop through each nav link and set its display to 'block'
         navLinks.forEach(link => {
             link.style.display = 'block';
         });
     } else {
         dropdownArea.style.display = 'none';
 
         // Loop through each nav link and set its display to 'none'
         navLinks.forEach(link => {
             link.style.display = 'none';
         });
     }
 });
 