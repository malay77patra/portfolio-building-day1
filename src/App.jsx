import { Element } from 'react-scroll';
import Navigator from './components/Nagigator';
import SocialMedia from './components/SocialMedia';
import Progress from './components/Progress';
import malayPng from './assets/malay.png'
import flameidePng from './assets/flameide.png'
import './styles/App.css';

export default function App() {
  return (
    <main>
      <div className='wrapper' id='wrapper'>
        <section className="profile-sec">
          <div>
            <div className='profile'>
              <img src={malayPng} alt='Profile Picture' className='malay-img' />
              <span>
                <h1>Malay Patra</h1>
                <h4>Full Stack Web Developer</h4>
              </span>
            </div>
            <p className='desc'>Seamlessly integrate web & AI for efficient business solutions.</p>
            <Navigator />
            <SocialMedia />
          </div>
        </section>
        <section className="content">
          <Element name="about">
            <div className='heading'>ABOUT</div>
            <p>I'm a <span className='h'>Python expert</span>. I build web apps and automation software using the <span className="h">MERN stack</span> & Python. I also integrate <span className="h">AI & GPT</span> like LLm or APIs into prebuilt softwarews, focusing on solving problems that businesses face. Over the past two years, I have been working as a freelancer, including a notable stint with Vino AI. I possess strong skills in mathematics and physics, which complement my technical expertise. I am actively seeking new opportunities to leverage my skills and help more businesses overcome their challenges.</p>
            <p>Get your issues solved now ✨</p>
            <a className='go-btn' href='https://drive.google.com/file/d/1SeHWLv_f2UishZONI587RHgelHmx3QQU/view?usp=sharing' target='blank'>RESUME</a>
          </Element>
          <Element name="experties">
            <div className='heading'>EXPERTIES</div>
            <p>My focus is on building software that simplifies and grows your business. Whether you need a landing page, a complex dashboard, or task automation, I am here to help. My skills are:</p>
            <Progress />
          </Element>
          <Element name="experience">
            <div className='heading'>EXPERIENCE</div>
            <div className='card-group'>
              <div className='card'>
                <div className="time">2021 — Present</div>
                <div className="desc">
                  <h3>Web & AI Development Freelancer, Fiverr</h3>
                  <p>Develop and maintain web applications and automation software using the MERN stack and Python. Collaborate with clients, designers, and developers to deliver scalable solutions. Specialize in integrating GPT and AI models to enhance functionality.</p>
                  <div className="tags">
                    <span className="tag">Python</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">MERN</span>
                    <span className="tag">GPT</span>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className="time">2023 — Present</div>
                <div className="desc">
                  <h3>Tech Content Writer, Gitconnect</h3>
                  <p>I write about new tech topics on GitConnect, Medium. One of my articles, <span className="h">"How to Run a Python Script 24/7"</span> successfully achieved the #1 Google search rank.</p>
                  <div className="tags">
                    <span className="tag">Python</span>
                    <span className="tag">Medium</span>
                    <span className="tag">Content Writing</span>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className="time">2022 — 2022</div>
                <div className="desc">
                  <h3>AI Integration Engineer, Vino.ai</h3>
                  <p>Built an automated document generator leveraging GPT-4 API. Received a 5-star review from the client for exceptional performance and results.</p>
                  <div className="tags">
                    <span className="tag">Python</span>
                    <span className="tag">GPT-3/4-o</span>
                    <span className="tag">LLM</span>
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
                  <img src={flameidePng} className='thmb' />
                  <div className="desc">
                    <h3>Flameide</h3>
                    <p>A lightweight browser-based IDE for competitive programming. No installation required!</p>
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
