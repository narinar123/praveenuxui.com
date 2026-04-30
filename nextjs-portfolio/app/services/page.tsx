import Link from 'next/link';

export default function Services() {
  const services = [
    { icon: 'strategy.svg', title: 'Strategic Design Leadership' },
    { icon: 'team.svg', title: 'Team Leadership & Mentorship' },
    { icon: 'workflow.svg', title: 'Workflow Management' },
    { icon: 'operations.svg', title: 'Design Operations' },
    { icon: 'collaboration.svg', title: 'Cross-Functional Collaboration' },
    { icon: 'Designsystem.svg', title: 'Design System Governance' },
    { icon: 'research.svg', title: 'UX Research & Validation Leadership' },
    { icon: 'agile.svg', title: 'Agile & Product Lifecycle Alignment' },
    { icon: 'stack.svg', title: 'Communication & Stakeholder Influence' },
    { icon: 'projects.svg', title: 'Project & Resource Management' },
    { icon: 'hiring.svg', title: 'Hiring & Scaling Teams' },
    { icon: 'review.svg', title: 'Quality & Design Review' },
    { icon: 'business.svg', title: 'Business Acumen & Data Fluency' },
    { icon: 'ui-ux.svg', title: 'UI UX Design' },
    { icon: 'app.svg', title: 'Mobile App' },
    { icon: 'prd-design.svg', title: 'Product Design' },
    { icon: 'branding.svg', title: 'Branding' },
    { icon: 'camera.svg', title: 'Photography' },
    { icon: 'youtube.svg', title: 'Motion Design' },
    { icon: 'web-development.svg', title: 'Web Development' },
    { icon: 'view.svg', title: 'Visualization' },
  ];

  const aiServices = [
    { icon: 'https://svgl.app/library/openai.svg', title: 'Multi-Agent Orchestration' },
    { icon: 'https://svgl.app/library/claude-ai.svg', title: 'LangGraph / CrewAI' },
    { icon: 'https://svgl.app/library/openai.svg', title: 'RAG & Context Engineering' },
    { icon: 'ui-ux.svg', title: 'Human-in-the-Loop UX' },
    { icon: 'azure.svg', title: 'Azure AI Foundry', path: 'brands/' },
    { icon: 'https://svgl.app/library/openai.svg', title: 'Prompt Orchestration' },
    { icon: 'research.svg', title: 'Agent Observability' },
    { icon: 'Designsystem.svg', title: 'MCP Protocol Design' },
    { icon: 'branding.svg', title: 'Behavioural UX / HCI' },
    { icon: 'stack.svg', title: 'Vector DB (Pinecone / Weaviate)' },
    { icon: 'workflow.svg', title: 'AI-Native SDLC Ownership' },
    { icon: 'team.svg', title: 'AI CoE & Pod Leadership' },
  ];

  const faqs = [
    {
      question: 'What does a product designer need to know?',
      answer: 'A Product Designer needs a broad yet deep skill set that spans design, user experience, business strategy, and technical collaboration. This includes user-centered design, UI/UX skills, product thinking, design systems, cross-functional collaboration, technical awareness, agile methodologies, communication, analytics, and soft skills.'
    },
    {
      question: 'What is UX Design?',
      answer: 'UX (User Experience) Design is the process of creating products that provide meaningful and relevant experiences to users. This involves understanding user behavior through research and usability testing, defining user personas and flows, designing wireframes and prototypes, and ensuring that the final product is both useful and usable.'
    },
    {
      question: "What's the difference between UX and UI?",
      answer: 'UX is about the overall experience a user has with a product — how intuitive, accessible, and enjoyable it is. UI (User Interface) focuses on the look and feel — buttons, typography, color, layout. UX is the journey; UI is the visuals along the way.'
    },
    {
      question: 'Walk us through your UX design process?',
      answer: 'My process usually includes: Research – stakeholder interviews, user research, competitive analysis. Define – personas, user stories, problem statements. Ideate – brainstorming, wireframes, information architecture. Prototype – low- to high-fidelity prototypes. Test – usability testing, iteration based on feedback. Deliver – final handoff with dev specs and documentation.'
    },
    {
      question: 'How do you approach user research?',
      answer: 'I start by defining clear research goals. Then I choose the right method — interviews, surveys, or contextual inquiry. After gathering data, I synthesize it into insights using tools like affinity mapping and personas. The findings guide the design direction and decisions.'
    },
    {
      question: 'How do you measure the success of your UX design?',
      answer: 'I use both qualitative (user feedback, usability testing) and quantitative (task success rate, time on task, conversion rate, NPS) methods. I also collaborate with product teams to track metrics post-launch and iterate based on data.'
    },
  ];

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

          {/* Content Box */}
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">Expert <span>In</span></h1>
                  </div>
                  <div className="available-btn">
                    <span><i className="fas fa-circle"></i> Available For Hire</span>
                  </div>
                </div>
                
                <div className="services">
                  <div className="row g-4">
                    {services.map((service, i) => (
                      <div key={i} className="col-md-3 col-sm-6 col-6">
                        <div className="services-item text-center">
                          <div className="image">
                            <img loading="lazy" src={`/assets/img/icons/${service.icon}`} alt={service.title} />
                          </div>
                          <div className="text">
                            <h3 className="title">{service.title}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* AI Agentic Development Stack */}
                  <div className="row g-4 mt-2">
                    <div className="col-12">
                      <p className="main-common-title" style={{fontSize:'1rem', marginBottom:'0.25rem'}}>
                        <span className="ai-badge">✦ AI Agentic</span> &nbsp;Development &amp; Orchestration Stack
                      </p>
                    </div>
                    {aiServices.map((service, i) => (
                      <div key={i} className="col-md-3 col-sm-6 col-6">
                        <div className="services-item text-center">
                          <div className="image">
                            <img loading="lazy" src={service.icon.startsWith('http') ? service.icon : `/assets/img/${service.path || 'icons/'}${service.icon}`} alt={service.title} style={{width:'44px',height:'44px',objectFit:'contain'}} />
                          </div>
                          <div className="text"><h3 className="title">{service.title}</h3></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="block-image">
                    <img loading="lazy" src="/assets/img/blog/blog-img-1.jpg" alt="blog-img-1" className="img-fluid w-100" />
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="frequently-asked-questions">
                  <h2 className="main-common-title">Frequently Asked Questions</h2>
                  <div className="frequently-asked-questions-main">
                    <div className="accordion" id="accordionExample">
                      {faqs.map((faq, i) => (
                        <div key={i} className="accordion-item">
                          <h4 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded={i === 0} aria-controls={`collapse${i}`}>
                              {faq.question}
                              <span className="ms-auto">
                                <span className="icon ms-4">
                                  <img loading="lazy" className="icon-plus" src="/assets/img/icons/plus.svg" alt="plus" />
                                  <img loading="lazy" className="icon-minus d-none" src="/assets/img/icons/minus.svg" alt="minus" />
                                </span>
                              </span>
                            </button>
                          </h4>
                          <div id={`collapse${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
