// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
body.classList.toggle('dark-theme', savedTheme === 'dark');

// Set initial icon visibility
if (savedTheme === 'dark') {
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
} else {
    lightIcon.classList.add('hidden');
    darkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Toggle icons
    lightIcon.classList.toggle('hidden');
    darkIcon.classList.toggle('hidden');
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Certificate Modal
const certModal = document.querySelector('.certificate-modal');
const certButtons = document.querySelectorAll('.view-cert-btn');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.querySelector('.modal-title');
const pdfViewer = document.querySelector('.pdf-viewer');
const downloadBtn = document.querySelector('.download-btn');

certButtons.forEach(button => {
    button.addEventListener('click', () => {
        const certName = button.getAttribute('data-cert');
        const certTitle = button.parentElement.parentElement.querySelector('h3').textContent;
        
        modalTitle.textContent = certTitle;
        pdfViewer.src = `certificates/${certName}`;
        downloadBtn.href = `certificates/${certName}`;
        downloadBtn.download = certName;
        
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    certModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

certModal.addEventListener('click', (e) => {
    if (e.target === certModal) {
        certModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Submission
const messageForm = document.getElementById('messageForm');
const messageModal = document.querySelector('.message-modal');
const closeMessageModal = document.querySelector('.close-message-modal');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For demo purposes, we'll just show the success message
    
    // Reset form
    messageForm.reset();
    
    // Show success modal
    messageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMessageModal.addEventListener('click', () => {
    messageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

messageModal.addEventListener('click', (e) => {
    if (e.target === messageModal) {
        messageModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Fullscreen functionality
const fullscreenBtn = document.getElementById('fullscreen-btn');

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

fullscreenBtn.addEventListener('click', toggleFullScreen);

// Auto-fullscreen on load (optional)
// window.addEventListener('load', () => {
//     toggleFullScreen();
// });

// Project buttons functionality (demo purposes)
document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Project details would be shown here in a real implementation');
    });
});

document.querySelectorAll('.btn-github').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This would link to the GitHub repository in a real implementation');
    });
});