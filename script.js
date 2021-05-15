
//getr element top position
const getElementTopPosition = (element) => {
    return element.getBoundingClientRect().top;
}

//scroll to the top of a section
const scrollToSection = (section) => {
    const sectionTop = getElementTopPosition(section); //get projects-element offset from viewport top, botom, left, right
    window.scrollTo({
        top: sectionTop,
        left: 0,
        behavior: 'smooth'
    });
};

const scrollToProjects = () => {
    const projects = document.querySelector('#projects');
    scrollToSection(projects);
};

document.querySelector('.project-link').addEventListener('click', scrollToProjects);