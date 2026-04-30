import Link from 'next/link';

export default function Home() {
  return (
    <section className="home-area">
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
                  <p>Senior UX/UI Architect &amp; <span className="ai-badge">✦ AI Agentic</span> Design Strategist with <strong>18+ years</strong> of experience across <strong>14+ countries</strong>. Expert in Human-Computer Interaction, Behavioural UX Analysis, Generative AI product experiences &amp; Design Systems for B2B, B2C and enterprise platforms.</p>
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
                        <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                  {/* Stats Counters */}
                  <div className="stats-section">
                    <div className="stat-item">
                      <div className="stat-number">18+</div>
                      <div className="stat-label">Years Exp.</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">14+</div>
                      <div className="stat-label">Countries</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">286+</div>
                      <div className="stat-label">Projects</div>
                    </div>
                  </div>
                  <div className="social-media-icon">
                    <ul className="list-unstyled">
                      <li><a href="https://www.facebook.com/pranu21m" target="_blank"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/praveenkumarkanneganti/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                      <li><a href="https://www.behance.net/praveen-ui-ux" target="_blank"><i className="fab fa-behance"></i></a></li>
                      <li><a href="https://www.youtube.com/@praveenk9821" target="_blank"><i className="fab fa-youtube"></i></a></li>
                      <li><a href="https://wa.me/918884263999" target="_blank" title="WhatsApp"><i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i></a></li>
                      <li><a href="https://t.me/+918884263999" target="_blank" title="Telegram"><i className="fab fa-telegram" style={{ color: '#0088cc' }}></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="col-xl-4">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body work-experiance-card">
                    <h3 className="card-title">UX UI Work Experience</h3>
                    <div className="work-experiance-main">
                      <ul className="work-experiance-slider list-unstyled">
                        <li>
                          <div className="date"><p>2022-2023</p></div>
                          <div className="info">
                            <div className="icon"><img loading="lazy" src="/assets/img/brands/lowes.svg" alt="Lowes" /></div>
                            <div className="text">
                              <h4 className="title">Lowes</h4>
                              <h6 className="subtitle">Manager UX/UI</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="date"><p>2019-2021</p></div>
                          <div className="info">
                            <div className="icon"><img loading="lazy" src="/assets/img/brands/gtbank.svg" alt="gtbank" /></div>
                            <div className="text">
                              <h4 className="title">GTBank</h4>
                              <h6 className="subtitle">Technology Supervisor</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="date"><p>2018-2019</p></div>
                          <div className="info">
                            <div className="icon"><img loading="lazy" src="/assets/img/brands/SG-Logo.webp" alt="sociallygood" /></div>
                            <div className="text">
                              <h4 className="title">Soczen Technology</h4>
                              <h6 className="subtitle">SG- Associate Manager</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="date"><p>2014-2018</p></div>
                          <div className="info">
                            <div className="icon"><img loading="lazy" src="/assets/img/brands/Accenture.svg" alt="Accenture" /></div>
                            <div className="text">
                              <h4 className="title">Accenture</h4>
                              <h6 className="subtitle">Associate Manager</h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="col-xl-4">
            <div className="card card-projects">
              <div className="card-body">
                <h3 className="card-title">Recent Projects <Link className="link-btn" href="/portfolio">All Projects</Link></h3>
                <div className="projects-main mt-24">
                  <div className="row g-4 parent-container">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="col-lg-12">
                        <div className="project-item">
                          <div className="image">
                            <img loading="lazy" src={`/assets/img/projects/project-${i}.png`} alt={`project-${i}`} className="img-fluid w-100" />
                            <a href={`/assets/img/projects/project-${i}.png`} className="gallery-popup full-image-preview parent-container">
                              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                              </svg>
                            </a>
                            <div className="info">
                              <span className="category">Product Design</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
