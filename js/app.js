// to make shure the content is loaded before creating the nav bar elements
document.addEventListener('DOMContentLoaded', () => {
    const navlist = document.querySelector('#navbar__list');
    // getting all the sections
    const sections = document.querySelectorAll('[data-nav]');
    // looping in the sections
    for (let section of sections) {
        // creating li element and append it to the document
        const listitem = document.createElement('li');
        listitem.innerHTML = `<a href="#${section.id}" id="nav${section.id}" class="menu__link" data-sec="${section.id}">${section.dataset.nav}</a>`;
        navlist.append(listitem);
    }
    const navLinks = document.querySelectorAll('#navbar__list a');
    // looping over links to listen to clicks
    for (let navLink of navLinks) {
        navLink.addEventListener('click', activeSection);
    }
});

// a var to set timers for hiding the nav bar while not scrolling 
var scrollTimer;
document.addEventListener('scroll', () => {
    // clearing previous timers
    clearTimeout(scrollTimer);
    const Header = document.querySelector('header');
    // making the nav bar visible while scrolling 
    Header.style.visibility = 'visible';
    // sets a timer to hide it again after 5 secs after stopping scrolling 
    scrollTimer = setTimeout(function returnVisible() {
        // checking if the user is at the top of the page the nav bar will not disappear 
        if (window.pageYOffset > 52) {
            Header.style.visibility = 'hidden';
        }
    }, 5000);

    // getting all the sections to check wich one is in the view port 
    const sections = document.querySelectorAll('[data-nav]');
    for (let section of sections) {
        var bounding = section.getBoundingClientRect();
        if (
            bounding.top >= bounding.height / -2 &&
            bounding.left >= 0 &&
            bounding.right <=
                (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.top <= bounding.height / 2
        ) {
            // adding active theme to the section in the viewport
            section.classList.add('your-active-class');
            // adding active class to the link in the nav bar 
            document
                .querySelector(`[data-sec='${section.id}']`)
                .classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            document
                .querySelector(`[data-sec='${section.id}']`)
                .classList.remove('active');
        }
    }
});

function activeSection(event) {
    // prevent the default action of clicking the link
    event.preventDefault();
    const sections = document.querySelectorAll('[data-nav]');
    // looping over the sections and check if it's the wanted one to add a active theme to it and scroll to it 
    for (let section of sections) {
        if (this.dataset.sec == section.id) {
            section.classList.add('your-active-class');
            section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        } else {
            section.classList.remove('your-active-class');
        }
    }
}



// scroll up if the user clicked the butt 
let butt = document.querySelector('.toTopbutt');
butt.addEventListener('click', () => {
    window.scrollTo(500, 0);
});





// making elements collapsible 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activeButt");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}