import { Link } from 'react-scroll';


export default function Navigator() {
    return (
        <div className='navigator'>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                ABOUT
            </Link>
            <Link activeClass="active" to="education" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                EDUCATION
            </Link>
            <Link activeClass="active" to="experties" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                EXPERTIES
            </Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                PROJECTS
            </Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                CONTACT
            </Link>
        </div>
    )
}