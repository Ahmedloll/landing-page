
document.addEventListener('DOMContentLoaded', () => {
    const navlist = document.querySelector('#navbar__list');
    const sections = document.querySelectorAll('[data-nav]');
    for (let section of sections) {
        const listitem = document.createElement('li');
        listitem.innerHTML = `<a href="#${section.id}" id="nav${section.id}" class="menu__link" data-sec="${section.id}">${section.dataset.nav}</a>`;
        navlist.append(listitem);
    }
    const navLinks = document.querySelectorAll('#navbar__list a');
    for (let navLink of navLinks) {
        navLink.addEventListener('click', activeSection);
    }
});


var scrollTimer;
document.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    const Header = document.querySelector('header');
    Header.style.visibility = 'visible';
    scrollTimer = setTimeout(function returnVisible() {
        if (window.pageYOffset > 52) {
            Header.style.visibility = 'hidden';
        }
    }, 5000);

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
            section.classList.add('your-active-class');
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
    const sections = document.querySelectorAll('[data-nav]');
    for (let section of sections) {
        if (this.dataset.sec == section.id) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}




let butt = document.querySelector('.toTopbutt');
butt.addEventListener('click', () => {
    window.scrollTo(500, 0);
});






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