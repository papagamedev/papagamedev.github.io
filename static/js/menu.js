// Mobile hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const siteNav = document.getElementById('site-nav');
  
  if (hamburger && siteNav) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      siteNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!siteNav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        siteNav.classList.remove('active');
      }
    });

    // Close menu when clicking on any link
    const navLinks = siteNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        siteNav.classList.remove('active');
      });
    });
  }

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        siteNav.classList.remove('active');
      }
    }, 250);
  });
});
