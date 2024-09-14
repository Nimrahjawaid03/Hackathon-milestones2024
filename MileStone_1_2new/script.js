// Get references to buttons and sections
var personalInfoBtn = document.getElementById('personal-info-btn');
var educationBtn = document.getElementById('education-btn');
var skillsBtn = document.getElementById('skills-btn');
var experienceBtn = document.getElementById('experience-btn');
var showAllBtn = document.getElementById('show-all-btn'); // New Show All button
var personalInfoSection = document.getElementById('personal-info');
var educationSection = document.getElementById('education');
var skillsSection = document.getElementById('skills');
var experienceSection = document.getElementById('experience');
// Function to hide all sections
function hideAllSections() {
    personalInfoSection.style.display = 'none';
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none'; // Hide skills when other sections are shown
    experienceSection.style.display = 'none';
}
// Toggle Skills Section logic
var skillsVisible = false;
skillsBtn.addEventListener('click', function () {
    hideAllSections(); // Hide other sections first
    if (skillsVisible) {
        skillsSection.style.display = 'none'; // Hide skills if already visible
    }
    else {
        skillsSection.style.display = 'block'; // Show skills if hidden
    }
    skillsVisible = !skillsVisible; // Toggle the skillsVisible flag
});
// Show Personal Information Section
personalInfoBtn.addEventListener('click', function () {
    hideAllSections();
    skillsSection.style.display = 'none'; // Hide skills separately on other section click
    personalInfoSection.style.display = 'block';
    skillsVisible = false; // Reset skills toggle when switching sections
});
educationBtn.addEventListener('click', function () {
    hideAllSections();
    skillsSection.style.display = 'none'; // Hide skills separately on other section click
    educationSection.style.display = 'block';
    skillsVisible = false; // Reset skills toggle when switching sections
});
experienceBtn.addEventListener('click', function () {
    hideAllSections();
    skillsSection.style.display = 'none'; // Hide skills separately on other section click
    experienceSection.style.display = 'block';
    skillsVisible = false; // Reset skills toggle when switching sections
});
// Show All Content
showAllBtn.addEventListener('click', function () {
    personalInfoSection.style.display = 'block';
    educationSection.style.display = 'block';
    skillsSection.style.display = 'block';
    experienceSection.style.display = 'block';
    skillsVisible = true; // Ensure skills are visible when showing all
});
// Initial display setup: Show Personal Info by default
hideAllSections();
personalInfoSection.style.display = 'block'; // Show Personal Info by default
