// main.ts

// Get references to the necessary DOM elements
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const skillFieldset = document.getElementById('skillFieldset') as HTMLFieldSetElement;

// Initialize state to determine whether the skills section is visible or not
let isSkillVisible = true;

// Function to toggle the visibility of the skills section
function toggleSkillVisibility(): void {
    if (isSkillVisible) {
        skillFieldset.style.display = 'none'; // Hide the skills section
    } else {
        skillFieldset.style.display = 'block'; // Show the skills section
    }
    isSkillVisible = !isSkillVisible; // Toggle the state
}

// Attach the toggleSkillVisibility function to the button's click event
toggleButton.addEventListener('click', toggleSkillVisibility);
