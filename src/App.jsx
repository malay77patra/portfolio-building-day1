import { Element } from 'react-scroll';
import Navigator from './components/Nagigator';
import SocialMedia from './components/SocialMedia';
import Progress from './components/Progress';
import heroJpg from './assets/hero.jpg'
import pr1Webp from './assets/pr1.webp'
import pr2Jpg from './assets/pr2.jpg'
import pr3Jpg from './assets/pr3.jpg'
import './styles/App.css';

export default function App() {
  return (
    <main>
      <div className='wrapper' id='wrapper'>
        <section className="profile-sec">
          <div>
            <div className='profile'>
              <img src={heroJpg} alt='Profile Picture' className='malay-img' />
              <span>
                <h1>Musfira Murtaza Korai</h1>
                <h4>12-year-old Software Engineer</h4>
              </span>
            </div>
            <p className='desc'>I develop outstanding Portfolio Websites for Businesses and Personal Use.</p>
            <Navigator />
            <SocialMedia />
          </div>
        </section>
        <section className="content">
          <Element name="about">
            <div className='heading'>ABOUT</div>
            <p>I began my coding journey at the age of 9, with the COVID-19 pandemic marking a significant turning point. Initially aspiring to be a scientist, I am now a 12-year-old software engineer from Pakistan, fueled by a passion for technology and continuous learning. In 2024, I completed a MERN stack course, embarked on diverse projects, joined LinkedIn to share my experiences, and began mentoring fellow developers.</p>
            <p>Since then, I've completed eight internships, developed over 100 projects, and built a substantial LinkedIn presence. My ambition is to become a machine learning engineer while remaining deeply immersed in the MERN stack. I am eager to connect with like-minded individuals and inspiring professionals on LinkedIn.</p>
            <p>Feel free to connect with me today. 😊</p>
            <a className='go-btn' href='https://drive.google.com/file/d/1SeHWLv_f2UishZONI587RHgelHmx3QQU/view?usp=sharing' target='blank'>RESUME</a>
          </Element>
          <Element name="experties">
            <div className='heading'>EXPERTIES</div>
            <p>My focus is on delivering high-quality front-end solutions that enhance user experiences and support business goals. My skills are mentioned below:</p>
            <Progress />
          </Element>
          <Element name="experience">
            <div className='heading'>EXPERIENCE</div>
            <div className='card-group'>

              <div className='card'>
                <div className="time">2024,Apr — Jun</div>
                <div className="desc">
                  <h3>Frontend Developer, Softhox</h3>
                  <p>Worked as a part-time frontend developer at Softhox, specializing in front-end design contributions.</p>
                  <div className="tags">
                    <span className="tag">Frontend</span>
                    <span className="tag">MERN</span>
                    <span className="tag">Contribution</span>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className="time">2023,Sep — Oct</div>
                <div className="desc">
                  <h3>Frontend Developer, Interns Pakistan</h3>
                  <p>Part-time Frontend Developer at Interns Pakistan, with contributions to projects involving PHP, React.js, and AngularJS.</p>
                  <div className="tags">
                    <span className="tag">PHP</span>
                    <span className="tag">Reactjs</span>
                    <span className="tag">Angularjs</span>
                  </div>
                </div>
              </div>

              <div className='card'>
                <div className="time">2023,Nov — Dec</div>
                <div className="desc">
                  <h3>
                    Frontend Developer, CodersCave</h3>
                  <p>Worked as a part-time frontend developer at CodersCave, focusing on contributing to front-end development projects.</p>
                  <div className="tags">
                    <span className="tag">Frontend</span>
                    <span className="tag">Contribution</span>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className="time">2023,Oct — Nov</div>
                <div className="desc">
                  <h3>Frontend Engineer, Growintern</h3>
                  <p>Part-time Frontend Developer at Growintern from October to November 2023, focusing on front-end development contributions.</p>
                  <div className="tags">
                    <span className="tag">MERN</span>
                    <span className="tag">Frontend</span>
                    <span className="tag">Internship</span>
                  </div>
                </div>
              </div>

            </div>
          </Element>
          <Element name="projects">
            <div className='heading'>PROJECTS</div>
            <p>Here are some of my recent projects highlighting expertise in web applications, automation software, and AI integration.</p>
            <div className="card-group">

              <a href="https://flameide.vercel.app/">
                <div className='card'>
                  <img src={pr1Webp} className='thmb' />
                  <div className="desc">
                    <h3>Instagram Clone</h3>
                    <p>Fully featured instagram clone created by Using MERN stack technologies.</p>
                    <div className="tags">
                      <span className="tag">ExpressJs</span>
                      <span className="tag">Mongodb</span>
                      <span className="tag">Ejs</span>
                      <span className="tag">JavaScript</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://flameide.vercel.app/">
                <div className='card'>
                  <img src={pr2Jpg} className='thmb' />
                  <div className="desc">
                    <h3>Facebook Clone</h3>
                    <p>Fully featured facebook clone created by Using front-end stack technologies.</p>
                    <div className="tags">
                      <span className="tag">Html</span>
                      <span className="tag">Css</span>
                      <span className="tag">JavsScript</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://flameide.vercel.app/">
                <div className='card'>
                  <img src={pr3Jpg} className='thmb' />
                  <div className="desc">
                    <h3>OLX Clone</h3>
                    <p>Fully featured OLX clone created by Using front-end stack technologies.</p>
                    <div className="tags">
                      <span className="tag">Html</span>
                      <span className="tag">Css</span>
                      <span className="tag">JavaScript</span>
                    </div>
                  </div>
                </div>
              </a>

            </div>
          </Element>
          <footer>made with ❤️ using (react+vite)</footer>
        </section>
      </div>
    </main >
  );
}
