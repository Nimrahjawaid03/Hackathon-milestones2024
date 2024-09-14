// Get references to buttons and sections
const personalInfoBtn = document.getElementById('personal-info-btn') as HTMLButtonElement;
const educationBtn = document.getElementById('education-btn') as HTMLButtonElement;
const skillsBtn = document.getElementById('skills-btn') as HTMLButtonElement;
const experienceBtn = document.getElementById('experience-btn') as HTMLButtonElement;
const showAllBtn = document.getElementById('show-all-btn') as HTMLButtonElement; // New Show All button

const personalInfoSection = document.getElementById('personal-info') as HTMLDivElement;
const educationSection = document.getElementById('education') as HTMLDivElement;
const skillsSection = document.getElementById('skills') as HTMLDivElement;
const experienceSection = document.getElementById('experience') as HTMLDivElement;

// Function to hide all sections
function hideAllSections(): void {
  personalInfoSection.style.display = 'none';
  educationSection.style.display = 'none';
  skillsSection.style.display = 'none'; // Hide skills when other sections are shown
  experienceSection.style.display = 'none';
}

// Toggle Skills Section logic
let skillsVisible: boolean = false;
skillsBtn.addEventListener('click', (): void => {
  hideAllSections(); // Hide other sections first
  if (skillsVisible) {
    skillsSection.style.display = 'none'; // Hide skills if already visible
  } else {
    skillsSection.style.display = 'block'; // Show skills if hidden
  }
  skillsVisible = !skillsVisible; // Toggle the skillsVisible flag
});

// Show Personal Information Section
personalInfoBtn.addEventListener('click', (): void => {
  hideAllSections();
  skillsSection.style.display = 'none'; // Hide skills separately on other section click
  personalInfoSection.style.display = 'block';
  skillsVisible = false; // Reset skills toggle when switching sections
});

educationBtn.addEventListener('click', (): void => {
  hideAllSections();
  skillsSection.style.display = 'none'; // Hide skills separately on other section click
  educationSection.style.display = 'block';
  skillsVisible = false; // Reset skills toggle when switching sections
});

experienceBtn.addEventListener('click', (): void => {
  hideAllSections();
  skillsSection.style.display = 'none'; // Hide skills separately on other section click
  experienceSection.style.display = 'block';
  skillsVisible = false; // Reset skills toggle when switching sections
});

// Show All Content
showAllBtn.addEventListener('click', (): void => {
  personalInfoSection.style.display = 'block';
  educationSection.style.display = 'block';
  skillsSection.style.display = 'block';
  experienceSection.style.display = 'block';
  skillsVisible = true; // Ensure skills are visible when showing all
});

// Initial display setup: Show Personal Info by default
hideAllSections();
personalInfoSection.style.display = 'block';  // Show Personal Info by default
