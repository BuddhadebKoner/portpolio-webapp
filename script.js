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
