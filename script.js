/**
 * Function to toggle the mobile navigation menu open and closed.
 */
function toggleMenu() {
    // Select the menu and icon elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    // Toggle the "open" class on the menu and icon elements
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  