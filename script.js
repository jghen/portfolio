
//method - get an elements top position
const getElementTopPosition = (element) => {
    return element.getBoundingClientRect().top;
}

//method - scroll to the top of any section
const scrollToSection = (section) => {
    const sectionTop = getElementTopPosition(section); //get projects-element offset from viewport top, botom, left, right
    window.scrollTo({
        top: sectionTop,
        left: 0,
        behavior: 'smooth'
    });
};

//___________function for scrolling to a specific section, i.e. CV, projects etc.___________
const scrollToProjects = (e) => {
    const projects = document.querySelector('#projects');
    scrollToSection(projects);
};

const scrollToContact = () => {
    const projects = document.querySelector('#contact');
    scrollToSection(projects);
};


//event listener for scrolling to a section
document.querySelector('.project-link').addEventListener('click', scrollToProjects);
document.querySelector('.cta-btn').addEventListener('click', scrollToProjects);
document.querySelector('.contact-link').addEventListener('click', scrollToContact);