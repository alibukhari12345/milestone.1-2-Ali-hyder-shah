// main.ts
// Get references to the necessary DOM elements
var toggleButton = document.getElementById('toggleButton');
var skillFieldset = document.getElementById('skillFieldset');
// Initialize state to determine whether the skills section is visible or not
var isSkillVisible = true;
// Function to toggle the visibility of the skills section
function toggleSkillVisibility() {
    if (isSkillVisible) {
        skillFieldset.style.display = 'none'; // Hide the skills section
    }
    else {
        skillFieldset.style.display = 'block'; // Show the skills section
    }
    isSkillVisible = !isSkillVisible; // Toggle the state
}
// Attach the toggleSkillVisibility function to the button's click event
toggleButton.addEventListener('click', toggleSkillVisibility);
