// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                let offsetPosition = targetElement.offsetTop;
                
                // Special handling for footer contact section
                if (targetId === '#contact') {
                    offsetPosition = document.body.scrollHeight - window.innerHeight;
                } else {
                    offsetPosition -= 100; // Normal offset adjustment for other sections
                }
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar Animation on Scroll
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.padding = '5px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Contact Form Submission (Demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // You would typically send this data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message (in a real app, you'd show this after server confirmation)
            alert('Thanks for your message! I\'ll get back to you soon.');
            
            // Clear form
            contactForm.reset();
        });
    }
    
    // Download Resume Button
    const downloadButton = document.getElementById('download-resume');
    if (downloadButton) {
        downloadButton.addEventListener('click', function(e) {
            // No need to prevent default - let the browser handle the direct link
            // The href in the HTML now points directly to the PDF file
            console.log('Resume download clicked');
            
            // We don't need the blob creation code since we're using a direct link
            // The browser will handle the download automatically
        });
    }
}); 