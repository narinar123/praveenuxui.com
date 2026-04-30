'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, image: '/assets/img/projects/project-1.png', title: 'Lowes', subtitle: 'UI UX Design', url: 'https://www.lowes.com', category: 'ux-ui', detailImage: '/assets/img/projects/project-1.png' },
    { id: 2, image: '/assets/img/projects/project-3.png', title: 'Entain groups', subtitle: 'Product Design | Game App Design | Research | UX Audit', url: 'https://www.entaingroup.com/', category: 'product', detailImage: '/assets/img/projects/project-details-3.png' },
    { id: 3, image: '/assets/img/projects/alphastreet.png', title: 'Alphastreet', subtitle: 'UI UX Design | Development', url: 'https://www.alphastreet.com/home', category: 'ux-ui', detailImage: '/assets/img/projects/project11.png' },
    { id: 4, image: '/assets/img/projects/gt/gtbank1.png', title: 'Gtbank', subtitle: 'Mobile/Web UX/UI Tech-Supervisor, Business Solution Group', url: 'https://www.gtbank.com', category: 'mobile', detailImage: '/assets/img/projects/gt/gtbank.png' },
    { id: 5, image: '/assets/img/projects/gt/gpay.png', title: 'Gtbank-GPAY', subtitle: 'Mobile/Web UX/UI Tech-Supervisor, Business Solution Group', url: 'https://ibank.gtbank.com/GAPSNew/Default.aspx', category: 'mobile', detailImage: '/assets/img/projects/gt/gpay.png' },
    { id: 6, image: '/assets/img/projects/gt/gtm1.png', title: 'Gtbank Mobile App', subtitle: 'Mobile/Web UX/UI Tech-Supervisor, Business Solution Group', url: 'https://www.gtbank.com', category: 'mobile', detailImage: '/assets/img/projects/gt/gtm1.png' },
    { id: 7, image: '/assets/img/projects/gt/kd/01.png', title: 'Gtbank - Key Distributor', subtitle: 'UI UX Design | Development', url: 'https://www.gtbank.com', category: 'ux-ui', detailImage: '/assets/img/projects/gt/kd/01.png' },
    { id: 8, image: '/assets/img/projects/gt/gtresearch/02.png', title: 'Gtbank- Gtresearch', subtitle: 'UI UX Design | UX Testing | Research | Data Analysis | UX Audit | UI Development', url: 'https://www.gtbank.com', category: 'research', detailImage: '/assets/img/projects/gt/gtresearch/02.png' },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ux-ui', label: 'UX/UI Design' },
    { id: 'product', label: 'Product Design' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'research', label: 'Research' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
                  <p>Senior UX/UI Architect & <span className="ai-badge">✦ AI Agentic</span> Design Strategist with <strong>18+ years</strong> of experience across <strong>14+ countries</strong>. Expert in HCI, Behavioural UX, Generative AI & Enterprise Design Systems.</p>
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

          {/* Portfolio Content */}
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body portUXUI-card">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">Check Out My Latest <span>Projects Works</span></h1>
                    <p>I am a UX/UI Architect with over 16 years of end-to-end digital experience and 8+ years in leadership and delivery management roles, consistently translating complex business requirements into meaningful, intuitive, and scalable user experiences. I've directly led global design and development teams, conducted high-stakes client workshops, and delivered mission-critical digital solutions across industries including banking, retail, healthcare, travel, and SaaS platforms.</p>
                  </div>
                </div>
                
                <div className="portfolio-filter-nav mb-4">
                  <ul className="list-unstyled d-flex flex-wrap gap-2">
                    {filters.map(filter => (
                      <li key={filter.id}>
                        <button 
                          className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                          onClick={() => setActiveFilter(filter.id)}
                        >
                          {filter.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="portUXUI-area">
                  <div className="row g-4 parent-container">
                    {filteredProjects.map(project => (
                      <div key={project.id} className="col-lg-6 portfolio-item-wrapper">
                        <div className="portUXUI-item">
                          <div className="image">
                            <img loading="lazy" src={project.image} alt={project.title} className="img-fluid w-100" />
                            <a href={project.detailImage} className="gallery-popup full-image-preview parent-container">
                              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                              </svg>
                            </a>
                          </div>
                          <div className="text">
                            <div className="info">
                              <a href={project.url} target="_blank" className="title">{project.title}</a>
                              <p className="subtitle">{project.subtitle}</p>
                            </div>
                            <div className="visite-btn">
                              <a href={project.url} target="_blank">Visit Site
                                <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.91634 4.5835L4.08301 10.4168" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path d="M4.66699 4.5835H9.91699V9.8335" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="work-together-slider">
                  <div className="slider-main d-flex gap-4 align-items-center">
                    <div className="slider-item">
                      <Link href="/contact">Let's 👋 Work Together</Link>
                      <Link href="/contact">Let's 👋 Work Together</Link>
                    </div>
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
        <div className="threed-shape-1 move-with-cursor" data-value="1">
          <img loading="lazy" src="/assets/img/bg/object-3d-1.png" alt="object-3d-1" />
        </div>
        <div className="threed-shape-2 move-with-cursor" data-value="1">
          <img loading="lazy" src="/assets/img/bg/object-3d-2.png" alt="object-3d-2" />
        </div>
      </div>
    </section>
  );
}
