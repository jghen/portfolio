/* 
window.onload = () => {
    this.scroll(0,0);
}; */


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

//___________function for scrolling to a specific section___________


const scrollToProjects = () => {
    const projects = document.querySelector('#projects');
    scrollToSection(projects);
};

//event listener for scrolling to a section
document.querySelector('.project-link').addEventListener('click', scrollToProjects);
