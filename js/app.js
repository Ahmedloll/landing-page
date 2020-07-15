






/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
document.addEventListener(
    "DOMContentLoaded", () => {
        const navlist = document.querySelector( "#navbar__list" );
        const sections = document.querySelectorAll("[data-nav]");
        for (const i of sections) {
            const listitem = document.createElement( "li" );
            listitem.innerHTML = `<a href="#${i.id}" class="menu__link">${i.dataset.nav}</a>`;
            console.log(listitem);
            navlist.append( listitem );
        }
    }
);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


