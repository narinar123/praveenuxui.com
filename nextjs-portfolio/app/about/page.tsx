import Link from 'next/link';

export default function About() {
  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          {/* Profile Card */}
          <div className="col-xl-4">
            <div className="card profile-card">
              <div className="card-body">
                <div className="image text-center">
                  <img loading="lazy" src="/assets/img/images/profile.png" alt="profile" />
                </div>
                <div className="text">
                  <h3 className="card-title">Praveen Kumar K 👋</h3>
                  <p>Senior UX/UI Architect & <span className="ai-badge">✦ AI Agentic</span> Development Lead — <strong>18+ years</strong> spanning UX strategy, Multi-Agent orchestration (LangGraph, CrewAI, AutoGen), Human-in-the-Loop UX design, RAG systems, and AI CoE leadership across <strong>14+ countries</strong>.</p>
                  <p>I am Praveen Kumar K, a seasoned UX/UI professional with 18+ years of experience, including 8 years in leadership roles driving user-centric design solutions. I specialize in AI-driven UX research, user persona creation, user testing, and designing seamless digital experiences that bridge business objectives with user needs.</p>
                  <p>With a proven track record in enterprise UX strategy, Agile methodologies, and front-end development, I have successfully led cross-functional teams to deliver intuitive, scalable, and high-performing solutions. My expertise extends to architecting Single-Page Responsive Web Applications, optimizing Information Architecture (IA), and ensuring a unified UX across enterprise applications.</p>
                  <p>As a UX/UI Manager, I have mentored and guided teams of 50+ designers and developers, establishing best practices, defining UX SDLC strategies, and ensuring first-time-right delivery with zero defects. I have also been instrumental in pre-sales activities, stakeholder engagement, requirement analysis, and driving AI-powered innovation in design.</p>
                  <p>Throughout my career, I have worked with top 10 clients across diverse industries, delivering tailored, cutting-edge design solutions that exceed client expectations. Passionate about continuous improvement, AI adoption in UX, and fostering design excellence, I am committed to creating engaging, functional, and aesthetically superior digital experiences.</p>
                  
                  <div className="hiring-strengths mt-4">
                    <h4 className="mb-3" style={{color: '#4770FF'}}><span className="ai-badge">✦ AI Agentic</span>&nbsp; Development Lead — Core Competencies</h4>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <ul className="list-unstyled hiring-list" style={{fontSize: '0.88rem', lineHeight: 2}}>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>Multi-Agent Systems:</b> LangGraph, CrewAI, AutoGen, LlamaIndex</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>RAG &amp; Memory Design:</b> Context engineering, long-term agent memory</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>Human-in-the-Loop UX:</b> Confidence threshold handoffs &amp; autonomous UX patterns</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>Azure AI Foundry:</b> Cloud AI deployment &amp; AI-native full-stack SDLC</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>MCP Protocol:</b> Standardised agent-to-tool secure connectivity</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>Vector DBs:</b> Pinecone, Weaviate — semantic search &amp; retrieval design</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled hiring-list" style={{fontSize: '0.88rem', lineHeight: 2}}>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>Observability &amp; Eval:</b> LangSmith, Arize Phoenix — agent success metrics</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>AI CoE Leadership:</b> Mentoring AI engineers on RAG &amp; prompt orchestration</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>Design Operations:</b> Scaling cross-functional AI pods (50+ engineers)</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>Product Strategy:</b> Goals-over-Tasks agentic thinking &amp; OKR alignment</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>Stakeholder Influence:</b> Pre-sales leadership &amp; technical articulation to C-suite</li>
                          <li><i className="fas fa-check-circle me-2" style={{color:'#4770FF'}}></i><b>Agile / DevOps:</b> CI/CD-aware delivery, Scrum Master (GTBank Technology Division)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="common-button-groups">
                    <Link className="btn btn-call" href="/contact">
                      <svg className="icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 4H9.5L11.5 9L9 10.5C10.071 12.6715 11.8285 14.429 14 15.5L15.5 13L20.5 15V19C20.5 19.5304 20.2893 20.0391 19.9142 20.4142C19.5391 20.7893 19.0304 21 18.5 21C14.5993 20.763 10.9202 19.1065 8.15683 16.3432C5.3935 13.5798 3.73705 9.90074 3.5 6C3.5 5.46957 3.71071 4.96086 4.08579 4.58579C4.46086 4.21071 4.96957 4 5.5 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5 7C16.0304 7 16.5391 7.21071 16.9142 7.58579C17.2893 7.96086 17.5 8.46957 17.5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5 3C17.0913 3 18.6174 3.63214 19.7426 4.75736C20.8679 5.88258 21.5 7.4087 21.5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Book A call
                    </Link>
                    <a className="btn btn-call" href="/assets/Praveen_Kumar_K_Resume.pdf" target="_blank">
                      <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Download CV
                    </a>
                    <button className="btn btn-copy" data-clipboard-text="praveenkumar.kanneganti@gmail.com">
                      <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Copy Email
                    </button>
                  </div>
                  <div className="social-media-icon">
                    <ul className="list-unstyled">
                      <li><a href="https://www.facebook.com/pranu21m/" target="_blank"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/praveenkumarkanneganti/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                      <li><a href="https://www.behance.net/praveen-ui-ux" target="_blank"><i className="fab fa-behance"></i></a></li>
                      <li><a href="https://wa.me/918884263999" target="_blank" title="WhatsApp"><i className="fab fa-whatsapp" style={{color:'#25D366'}}></i></a></li>
                      <li><a href="https://t.me/+918884263999" target="_blank" title="Telegram"><i className="fab fa-telegram" style={{color:'#0088cc'}}></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Box */}
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title"><span>Praveen Kumar K</span> 👋</h1>
                    <p>
                      <b>Agentic AI Development Lead</b> &amp; <b>Senior UX/UI Architect</b> 🖥️ —
                      <b>18+ years</b> in enterprise design, AI orchestration (LangGraph · CrewAI · AutoGen), Human-in-the-Loop UX, RAG systems, and AI CoE leadership across 14+ countries.
                    </p>
                  </div>
                  <div className="available-btn">
                    <span><i className="fas fa-circle"></i> Available For Hire</span>
                  </div>
                </div>
                <div className="counter-area">
                  <div className="counter">
                    <div className="counter-item">
                      <h3 className="number">18+</h3>
                      <p className="subtitle">Years of Experience</p>
                    </div>
                    <div className="counter-item">
                      <h3 className="number">286+</h3>
                      <p className="subtitle">Project Completed</p>
                    </div>
                    <div className="counter-item">
                      <h3 className="number">120+</h3>
                      <p className="subtitle">Happy Client</p>
                    </div>
                    <div className="counter-item">
                      <h3 className="number">3200+</h3>
                      <p className="subtitle">corporate trained</p>
                    </div>
                  </div>
                </div>
                
                <div className="working-with-area">
                  <h2 className="main-common-title">Worked With 120+ Clients &amp; Brands ✨ Worldwide — 18 Years of Global Impact</h2>
                  <div className="working-with-main">
                    {[
                      'figma.svg', 'framer.svg', 'mico.svg', 'zeplin.svg', 'notion.svg', 'ui-ux.svg', 'google.svg',
                      'Accenture.svg', 'gtbank.svg', 'lowes.svg', 'itc.png', 'purple.jpg', 'SG-Logo.webp', 'xl.jpg', 'ui5.png',
                      'alpha.svg', 'sap.jpg', 'lowes.png', 'angular.png', 'Aws.svg', 'azure.svg', 'css3.svg',
                      'Frontenddev.svg', 'html5.svg', 'id.svg', 'Javascript.svg', 'photoshop.svg', 'react.svg',
                      'reactJS.svg', 'salesforce.svg', 'scrum.svg', 'x.svg', 'node.png'
                    ].map((img, i) => (
                      <div key={i} className="items">
                        <img loading="lazy" src={`/assets/img/${img.startsWith('http') ? '' : img.startsWith('alpha') ? 'clients/' : 'brands/'}${img}`} alt={img} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="client-feedback">
                  <h2 className="main-common-title">Serving 82+ Satisfied Clients Worldwide</h2>
                  <div className="row client-feedback-slider">
                    {[
                      { name: 'Ashuthosh Gupta', role: 'Product Manager', company: 'thomascook.com', text: '"Praveen is a highly skilled UX designer who quickly understood our requirements and translated them into intuitive and engaging designs. His attention to detail and focus on the end-user were impressive. We look forward to working with him again."' },
                      { name: 'Venu Majii', role: 'Manager Product Designer Accenture', company: 'Accenture', text: '"Praveen Excellent UX designer. Delivered high-quality work on time, with great communication throughout. The user feedback on the new design has been overwhelmingly positive."' },
                      { name: 'Bhasker Innaganti', role: 'Founder, CEO', company: 'Sociallygood - Startup', text: '"As a startup founder, I needed someone who could wear multiple hats—research, prototyping, and UI design. Praveen delivered beyond expectations. His design thinking approach helped us shape our MVP and secure investor interest."' },
                      { name: 'BalaKrishnan', role: 'DHL Project Manager, Accenture', company: 'Accenture.com', text: '"Working with Praveen was a fantastic experience. He brought clarity to our product vision through user research, wireframes, and high-fidelity designs. Our conversion rates have improved significantly since the redesign!"' }
                    ].map((feedback, i) => (
                      <div key={i} className="col-lg-6">
                        <div className="feedback-item">
                          <div className="feedback-top-info">
                            <div className="rating">
                              {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                            </div>
                            <div className="website">
                              <a href="#">{feedback.company}</a>
                            </div>
                          </div>
                          <div className="details">
                            <p>{feedback.text}</p>
                          </div>
                          <div className="designation">
                            <p><span>{feedback.name}</span> {feedback.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="awards-recognitions">
                  <h2 className="main-common-title">Awards and Recognitions</h2>
                  <div className="awards-recognitions-main">
                    <ul className="list-unstyled">
                      <li>
                        <div className="awards-item">
                          <div className="award-name">
                            <div className="icon">
                              <img loading="lazy" src="/assets/img/icons/ui-ux.svg" alt="adobe" />
                            </div>
                            <div className="text">
                              <h4 className="title">HCI (Human-Computer Interaction)</h4>
                              <p className="year">2016 - 2017</p>
                            </div>
                          </div>
                          <div className="winner-tag">
                            <h4 className="title">Certified</h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="awards-item">
                          <div className="award-name">
                            <div className="icon">
                              <img loading="lazy" src="/assets/img/clients/accenture.svg" alt="accenture" />
                            </div>
                            <div className="text">
                              <h4 className="title">Accenture Design Contest</h4>
                              <p className="year">2017 - 2018</p>
                            </div>
                          </div>
                          <div className="winner-tag">
                            <h4 className="title">Winner</h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="work-together-slider">
                  <div className="slider-main d-flex gap-4 align-items-center">
                    <div className="slider-item">
                      <Link href="/contact">Let's 👋 Work Together</Link>
                      <Link href="/contact">Let's 👋 Work Together</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <div className="background-shapes">
        <div className="shape-1 common-shape">
          <img loading="lazy" src="/assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
        <div className="shape-2 common-shape">
          <img loading="lazy" src="/assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
      </div>
    </section>
  );
}
