import { Link, Element } from 'react-scroll';
import SocialMedia from './components/SocialMedia';
import Progress from './components/Progress';
import Malay from './assets/malay.png'
import './styles/App.css';

export default function App() {

  return (
    <main>
      <div className='wrapper' id='wrapper'>
        <section className="profile-sec">
          <div>
            <div className='profile'>
              <img src={Malay} alt='Profile Picture' className='malay-img' />
              <span>
                <h1>Malay Patra</h1>
                <h4>Full Stack Web Developer</h4>
              </span>
            </div>
            <p className='desc'>Seamlessly integrate web & AI for efficient business solutions</p>
            <div className='navigator'>
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                ABOUT
              </Link>
              <Link activeClass="active" to="experties" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                EXPERTIES
              </Link>
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={250} containerId="wrapper">
                <span className='bar'></span>
                PROJECTS
              </Link>
            </div>
            <SocialMedia />
          </div>
        </section>
        <section className="content">
          <Element name="about">
            <div className='heading'>ABOUT</div>
            <p>I'm a <span className='h'>Python expert</span>. I build web apps and automation software using the <span className="h">MERN stack</span> & Python. I also integrate <span className="h">AI & GPT</span> like LLm or APIs into prebuilt softwarews, focusing on solving problems that businesses face. Over the past two years, I have been working as a freelancer, including a notable stint with Vino AI. I possess strong skills in mathematics and physics, which complement my technical expertise. I am actively seeking new opportunities to leverage my skills and help more businesses overcome their challenges.</p>
            <p>Get your issues solved now ✨</p>
            <button className='go-btn'>LET'S GO</button>
          </Element>
          <Element name="experties">
            <div className='heading'>EXPERTIES</div>
            <p>My focus is on building software that simplifies and grows your business. Whether you need a landing page, a complex dashboard, or task automation, I am here to help. My skills are:</p>
            <Progress />
          </Element>
          <Element name="projects">
            <div className='heading'>ABOUT</div>
            <p>Back in 2020, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I have had the privilege of building software for start-up, for Local Buinsesses, also helped multiple clients working as a Freelancer</p>
            <p>My main focus these days is building products and leading projects for our clients at Upwork. In my free time I have also like to contribue Open-source projects and learning new skills.</p>
          </Element>
        </section>
      </div>
    </main>
  );
}
