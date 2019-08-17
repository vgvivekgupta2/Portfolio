import React from 'react'

function Home() {
    return (<>
    <nav className="hide-on-small-only">
          <ul className="side-nav fixed section table-of-contents">
            <li className="logo"><a id="logo-container" aria-label="Navigate to the beginning of the page" href="#intro" className="brand-logo teal-text">
                <h1>Vivek Gupta<span className="brown-text light">Full Stack Developer</span></h1></a></li>
            <li className="bold"><a aria-label="Navigate to the About section" href="#about" className="waves-effect waves-dark teal-text"><i className="mdi-social-person small" /><span>About</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Experience section" href="#experience" className="waves-effect waves-dark cyan-text"><i className="mdi-action-trending-up small" /><span>Experience</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Projects section" href="#projects" className="waves-effect waves-dark indigo-text"><i className="mdi-av-web small" /><span>Projects</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Skills section" href="#skills" className="waves-effect waves-dark purple-text"><i className="mdi-av-equalizer small" /><span>Skills</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Awards section" href="#awards" className="waves-effect waves-dark red-text"><i className="mdi-action-grade small" /><span>Awards</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Education section" href="#education" className="waves-effect waves-dark orange-text"><i className="mdi-social-school small" /><span>Education</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Contact section" href="#contact" className="waves-effect waves-dark brown-text"><i className="mdi-content-mail small" /><span>Contact</span></a></li>
            <li className="bold"><a aria-label="Open Vivek's resume in a new tab" href="#" target="_blank" className="waves-effect waves-dark grey-text text-darken-3"><i className="mdi-action-description small" /><span>Resume</span></a></li>
          </ul>
        </nav>
        <nav className="hide-on-large only trigger z-depth-1"><a aria-label="Toggle visibility of the mobile navbar" href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu" /></a>
          <div className="name-title"><a id="name" aria-label="Navigate to the beginning of the page" href="#main" className="teal-text">Vivek Gupta</a><span className="brown-text light">Full Stack Developer</span></div>
        </nav>
        <nav className="hide-on-large only">
          <ul id="slide-out" className="side-nav">
            <li className="bold"><a aria-label="Navigate to the About section" href="#about" className="waves-effect waves-dark teal-text"><i className="mdi-social-person small" /><span>About</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Experience section" href="#experience" className="waves-effect waves-dark cyan-text"><i className="mdi-action-trending-up small" /><span>Experience</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Projects section" href="#projects" className="waves-effect waves-dark indigo-text"><i className="mdi-av-web small" /><span>Projects</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Skills section" href="#skills" className="waves-effect waves-dark purple-text"><i className="mdi-av-equalizer small" /><span>Skills</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Awards section" href="#awards" className="waves-effect waves-dark red-text"><i className="mdi-action-grade small" /><span>Awards</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Education section" href="#education" className="waves-effect waves-dark orange-text"><i className="mdi-social-school small" /><span>Education</span></a></li>
            <li className="bold"><a aria-label="Navigate to the Contact section" href="#contact" className="waves-effect waves-dark brown-text"><i className="mdi-content-mail small" /><span>Contact</span></a></li>
            <li className="bold"><a aria-label="Open Vivek's Resume in a new tab" href="#" target="_blank" className="waves-effect waves-dark grey-text text-darken-3"><i className="mdi-action-description small" /><span>Resume</span></a></li>
          </ul>
        </nav>
        {/* Main Content*/}
        <main>
          <section id="intro" className="section scrollspy full-height">
            <div className="overlay" />
            <div className="container">
              <h2>Not Your Average <span className="teal">Software Engineer</span><br /> <span className="underline">Get ready to turn your ideas into reality</span>.</h2>
            </div>
          </section>
          <section id="about" className="section scrollspy">
            <h3 className="page-title white-text teal">About</h3>
            <div className="container flow-text">
              <blockquote>
                <h2>Mission-driven full stack developer with a passion for thoughtful UI design, collaboration,.</h2>
              </blockquote>
              <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
              <p>As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.</p>
              {/* <p><strong>Current Focus</strong>:&nbsp;<a aria-label="Navigate to the Inclusive Design Patterns homepage" href="https://www.smashingmagazine.com/inclusive-design-patterns/">Accessibility</a>&nbsp;//&nbsp;<a aria-label="Navigate to the Full Stack React homepage" href="https://www.fullstackreact.com/">React</a>&nbsp;//&nbsp;<a aria-label="Navigate to the article &quot;Scalable CSS&quot;" href="https://mrmrs.github.io/writing/2016/03/24/scalable-css/">Design Systems</a></p> */}
            </div>
          </section>
          <section id="experience" className="section scrollspy">
            <h3 className="page-title white-text teal">Experience</h3>
            <div className="container">
              <div className="card">
                <div className="card-content">
                  <div className="row">
                    <div className="col s12 m2"><a href="https://www.spraxa.com/" target="_blank"><img alt="Spraxa logo" src="https://www.spraxa.com/spraxa/logo.png" className="responsive-img center-block" /></a></div>
                    <div className="col s12 m10">
                      <p><span className="card-title"><a href="https://www.spraxa.com/" target="_blank" className="teal-text hoverline">Spraxa</a></span></p>
                    </div>
                  </div>
                  <div className="role brown-text">Full-Stack Software Developer</div>
                  <p><em className="grey-text">Platform that enables enterprise companies to build, run, and measure their positive impact campaigns</em></p>
                  <h6>Develop Product</h6>
                  <ul>
                    <li>Contribute core features across entire stack (20k+ lines of code, 250+ pulls)</li>
                    <li>Lead front-end development, creating and documenting app-wide design system</li>
                    <li>Oversee transition from page-based styles to modular component styles</li>
                    <li>Guide best practices around accessible, semantic UI/UX</li>
                    <li>Tools: SQL,MongoDB // React, JS, jQuery // HTML, JSX</li>
                  </ul>
                  <h6>Accomplishments</h6>
                  <ul>
                    <li>Dramatically increased speed of UI development using atomic, scalable CSS</li>
                    <li>Built tool to convert HRIS data into user accounts to simplify onboarding</li>
                    <li>Implemented inline @tagging feature to increase app share-ability</li>
                  </ul>
                </div>
                <div className="card-action"><span>Jan 2015 - Present  |  Delhi, IN</span></div>
              </div>
            </div>
          </section>
          <section id="projects" className="section scrollspy">
            <h3 className="page-title white-text teal">Projects</h3>
            <div className="container">
              <div className="row">
                <div className="col s12 m6 l4">
                  <div className="card medium">
                    <div className="card-image waves-effect waves-block waves-light"><img alt="Screenshot of Realwave web app" src="./realwave.PNG" className="activator" /></div>
                    <div className="card-content"><span className="card-title activator teal-text hoverline">Realwave<i className="mdi-navigation-more-vert right" /></span>
                      <p>Video recording and live view of stores.</p>
                    </div>
                    <div className="card-reveal"><span className="card-title brown-text">Accomplishments<i className="mdi-navigation-close right" /></span>
                      <ul>
                        <li><strong>Node</strong> backend</li>
                        <li><strong>React js</strong> frontend</li>
                      </ul>
                      <div className="card-action"><a aria-label="Visit Realwave web app" href="http://demo.realwave.io/" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-external-link" /></a><a aria-label="Visit the GitHub repo for Realwave project" href="#" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-github" /></a></div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6 l4">
                  <div className="card medium">
                    <div className="card-image waves-effect waves-block waves-light"><img alt="Screenshot of Integra web app" src="https://dev-integracloudconnect-dev2.azurewebsites.net/Images/MainLogo.png" className="activator" /></div>
                    <div className="card-content"><span className="card-title activator teal-text hoverline">Integra<i className="mdi-navigation-more-vert right" /></span>
                      <p>Hospital management system</p>
                    </div>
                    <div className="card-reveal"><span className="card-title brown-text">Accomplishments<i className="mdi-navigation-close right" /></span>
                      <ul>
                        <li><strong>SQL</strong> backend</li>
                        <li><strong>ASP</strong> frontend</li>
                      </ul>
                      <div className="card-action"><a aria-label="Visit Integra web app" href="http://integracloudconnect.azurewebsites.net" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-external-link" /></a><a aria-label="Visit the GitHub repo for Integra project" href="#" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-github" /></a></div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </section>
          <section id="skills" className="section scrollspy">
            <h3 className="page-title white-text teal">Skills</h3>
            <div className="container">
              <div className="card">
                <div className="card-content">
                  <h4 className="brown-text light">HTML</h4>
                  <div className="row text-center">
                    <div className="col s4 m2"><img alt="" src="static/img/html5.png" className="responsive-img" />HTML5</div>
                    <div className="col s4 m2"><img alt="" src="static/img/react.png" className="responsive-img" />JSX</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h4 className="brown-text light">CSS</h4>
                  <div className="row text-center">
                    <div className="col s4 m2"><img alt="" src="static/img/css3.png" className="responsive-img" />CSS3</div>
                    <div className="col s4 m2"><img alt="" src="static/img/bootstrap.png" className="responsive-img" />Bootstrap</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h4 className="brown-text light">Javascript</h4>
                  <div className="row text-center">
                    <div className="col s4 m2"><img alt="" src="static/img/react.png" className="responsive-img" />React</div>
                    <div className="col s4 m2"><img alt="" src="static/img/javascript.png" className="responsive-img" />Javascript</div>
                    <div className="col s4 m2"><img alt="" src="static/img/jquery.png" className="responsive-img" />jQuery</div>
                    <div className="col s4 m2"><img alt="" src="static/img/angular.png" className="responsive-img" />Angular</div>
                    <div className="col s4 m2"><img alt="" src="static/img/nodejs.png" className="responsive-img" />Node</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h4 className="brown-text light">Back-End</h4>
                  <div className="row text-center">
                    <div className="col s4 m2"><img alt="" src="static/img/minitest.png" className="responsive-img" />Elastic</div>
                    <div className="col s4 m2"><img alt="" src="static/img/postgresql.png" className="responsive-img" />MS SQL</div>
                    <div className="col s4 m2"><img alt="" src="static/img/mongodb.png" className="responsive-img" />MongoDB</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h4 className="brown-text light">Build Tools</h4>
                  <div className="row text-center">
                    <div className="col s4 m2"><img alt="" src="static/img/webpack.png" className="responsive-img" />Webpack</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h4 className="brown-text light">Other</h4>
                  <div className="row text-center">
                    <div className="col s4 m2"><img alt="" src="static/img/github.png" className="responsive-img" />Github</div>
                    <div className="col s4 m2"><img alt="" src="static/img/heroku.png" className="responsive-img" />Heroku</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="awards" className="section scrollspy">
            <h3 className="page-title white-text teal">Awards</h3>
            <div className="container">
            <div className="row">
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-content">
                      <p><span className="card-title"><a href="https://www.spraxa.com/" className="teal-text hoverline">Employee of the Year</a></span></p>
                      <p className="brown-text">IT | JUL 2019</p>
                      <ul>
                        <li>Nominated by management and coworkers for exceptional work ethic and dedication to clients.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-content">
                      <p><span className="card-title"><a href="https://www.spraxa.com/" className="teal-text hoverline">Most Valuable Staff</a></span></p>
                      <p className="brown-text">IT | Dec 2017</p>
                      <ul>
                      <li>Nominated by management and coworkers for exceptional work ethic and dedication to clients.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="education" className="section scrollspy">
            <h3 className="page-title white-text teal">Education</h3>
            <div className="container">
              <div className="row">
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-content">
                      <p><span className="card-title"><a href="https://aktu.ac.in/" className="teal-text hoverline">Utter Pradesh Technical University</a></span></p>
                      <p className="brown-text">Uttar Pradesh, IN</p>
                      <ul>
                        <li>B.Tech in Computer Science and Engineering</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-content">
                      <p><span className="card-title"><a href="http://cbse.nic.in/newsite/index.html" className="teal-text hoverline">Central Board of Secondary Education</a></span></p>
                      <p className="brown-text">Uttar Pradesh, IN</p>
                      <ul>
                        <li>Intermediate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="section scrollspy full-height">
            <h3 className="page-title white-text teal">Contact</h3>
            <div className="container">
              <p><a aria-label="Email Vivek" href="mailto:vivek@viivek.com" data-position="top" data-tooltip="Email Vivek" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-envelope" /></a><a alt="" href="mailto:vivek@viivek.com" className="hoverline">vivek@viivek.com</a></p>
              <p><a aria-label="View Vivek on GitHub" href="http://github.com/vgvivekgupta2" target="_blank" data-position="top" data-tooltip="View Vivek on GitHub" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-github" /></a><a alt="" href="http://github.com/vgvivekgupta2" className="hoverline">github.com/vgvivekgupta2</a></p>
              <p><a aria-label="View Vivek on LinkedIn" href="https://www.linkedin.com/in/vivek-gupta-7a650933/" target="_blank" data-position="top" data-tooltip="View Vivek on LinkedIn" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-linkedin" /></a><a alt="" href="https://www.linkedin.com/in/vivek-gupta-7a650933/" className="hoverline">linkedin.com/in/vivek-gupta-7a650933/</a></p>
            </div>
          </section>
        </main>
        </>
    );
}

export default Home;
