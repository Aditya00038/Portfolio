const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

if (dropdown) {
    dropdown.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
}

// Basic smooth scrolling for navigation links (both desktop and dropdown)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Close the dropdown after clicking a link (if it's open)
            if (dropdownContent && dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (dropdownContent && dropdown.contains(event.target) === false) {
        dropdownContent.classList.remove('show');
    }
});

// ... existing script ...

const progressBars = document.querySelectorAll('.progress-bar');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const progress = bar.dataset.progress;
        const fill = bar.querySelector('.progress-fill');
        fill.style.width = progress + '%';
    });
}

// Trigger the animation when the about section is in view using Intersection Observer
const aboutSection = document.getElementById('about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(aboutSection); // Animate only once
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

if (aboutSection) {
    observer.observe(aboutSection);
}

// ... (Your existing script) ...

// const viewMoreButtons = document.querySelectorAll('.view-more-btn');

// viewMoreButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         const projectCard = this.closest('.project-card');
//         const projectName = projectCard.querySelector('h3').textContent;
//         alert(`View more details for: ${projectName}`);
//     });
// });

// My Projects Pages

function viewMore1(){
    location.href="https://github.com/AadityaHande/Chem3"
}

function viewMore2(){
    location.href="Projects/chemical_track.html"
}

function viewMore3(){
    location.href="Projects/chemical_track.html"
}