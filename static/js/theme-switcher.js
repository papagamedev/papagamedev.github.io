/**
 * Theme Switcher
 * Handles light/dark/system theme switching with persistence
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'theme-preference';
  const themeToggle = document.getElementById('theme-toggle');
  const themeMenu = document.getElementById('theme-menu');
  const themeOptions = document.querySelectorAll('.theme-option');

  // Get system preference
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Get saved preference or default to system
  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'system';
  }

  // Apply theme to document
  function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }

  // Update active state in menu
  function updateActiveOption(theme) {
    themeOptions.forEach(option => {
      if (option.dataset.theme === theme) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  // Set theme and save preference
  function setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
    updateActiveOption(theme);
  }

  // Initialize theme on page load
  function initTheme() {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);
    updateActiveOption(savedTheme);
  }

  // Toggle menu visibility
  function toggleMenu(event) {
    event.stopPropagation();
    themeMenu.classList.toggle('show');
  }

  // Close menu when clicking outside
  function closeMenu(event) {
    if (!themeToggle.contains(event.target) && !themeMenu.contains(event.target)) {
      themeMenu.classList.remove('show');
    }
  }

  // Handle theme option selection
  function handleThemeSelection(event) {
    const button = event.currentTarget;
    const theme = button.dataset.theme;
    setTheme(theme);
    themeMenu.classList.remove('show');
  }

  // Listen for system theme changes when using 'system' preference
  function watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      const savedTheme = getSavedTheme();
      if (savedTheme === 'system') {
        applyTheme('system');
      }
    });
  }

  // Event listeners
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleMenu);
  }

  document.addEventListener('click', closeMenu);

  themeOptions.forEach(option => {
    option.addEventListener('click', handleThemeSelection);
  });

  // Handle Escape key to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && themeMenu.classList.contains('show')) {
      themeMenu.classList.remove('show');
      themeToggle.focus();
    }
  });

  // Initialize
  initTheme();
  watchSystemTheme();
})();
