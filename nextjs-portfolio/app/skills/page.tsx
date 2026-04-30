import Link from 'next/link';

export default function Skills() {
  const skillCategories = [
    {
      title: '🎨 Design & Creative Ecosystem',
      description: 'With over 18 years of experience, I specialize in crafting visually stunning, user-centric interfaces. My expertise spans wireframing, prototyping, and high-fidelity design using industry-standard tools to deliver intuitive and accessible digital experiences.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/figma.svg', name: 'Figma' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/framer.svg', name: 'Framer' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/webflow.svg', name: 'Webflow' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/notion.svg', name: 'Notion' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/adobe-photoshop.svg', name: 'Photoshop' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/adobe-illustrator.svg', name: 'Illustrator' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/sketch.svg', name: 'Sketch' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/storybook.svg', name: 'Storybook' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/canva.svg', name: 'Canva' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/miro.svg', name: 'Miro' },
      ]
    },
    {
      title: '✦ AI Agentic & GenAI Stack',
      description: 'Pioneering the intersection of design and artificial intelligence, I leverage cutting-edge GenAI models and agentic workflows to automate processes, enhance user experiences, and build intelligent, context-aware products.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/openai.svg', name: 'OpenAI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/claude-ai.svg', name: 'Claude AI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/gemini.svg', name: 'Gemini' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/langchain.svg', name: 'LangChain' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/hugging-face.svg', name: 'HuggingFace' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/mistral.svg', name: 'Mistral' },
      ]
    },
    {
      title: '💻 Frontend & UI Development',
      description: 'Bridging the gap between design and engineering, I possess deep technical knowledge of modern frontend frameworks. I build responsive, pixel-perfect, and highly performant web applications that bring complex designs to life.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/html5.svg', name: 'HTML5' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/css.svg', name: 'CSS3' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/javascript.svg', name: 'JavaScript' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/react.svg', name: 'React' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/nextjs_icon_dark.svg', name: 'Next.js' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/typescript.svg', name: 'TypeScript' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/tailwindcss.svg', name: 'Tailwind' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/bootstrap.svg', name: 'Bootstrap' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/sass.svg', name: 'SASS' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/nodejs.svg', name: 'Node.js' },
      ]
    },
    {
      title: '☁️ Cloud & Infrastructure',
      description: 'Experienced in deploying and managing robust, scalable architectures. I utilize modern cloud platforms and containerization to ensure seamless deployment pipelines and high availability for enterprise-grade applications.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/amazon-web-services.svg', name: 'AWS' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/docker.svg', name: 'Docker' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/kubernetes.svg', name: 'Kubernetes' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/github.svg', name: 'GitHub' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/vercel.svg', name: 'Vercel' },
      ]
    },
    {
      title: '📋 Testing & Project Management',
      description: 'Committed to delivering flawless products, I employ rigorous testing methodologies and agile project management tools to streamline collaboration, track progress, and ensure every release meets the highest quality standards.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/playwright.svg', name: 'Playwright' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/jira.svg', name: 'Jira' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/slack.svg', name: 'Slack' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/postman.svg', name: 'Postman' },
      ]
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
                  <p>Senior UX/UI Architect &amp; <span className="ai-badge">✦ AI Agentic</span> Design Strategist with <strong>18+ years</strong> of experience across <strong>14+ countries</strong>.</p>
                  <div className="common-button-groups">
                    <Link className="btn btn-call" href="/contact">Book A call</Link>
                    <a className="btn btn-call" href="/assets/Praveen_Kumar_K_Resume.pdf" target="_blank">Download CV</a>
                    <button className="btn btn-copy" data-clipboard-text="praveenkumar.kanneganti@gmail.com">Copy Email</button>
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
                    <h1 className="main-title">Specialized <span>Skills</span></h1>
                  </div>
                  <div className="available-btn"><span><i className="fas fa-circle"></i> Available For Hire</span></div>
                </div>

                {/* SKILLS SECTION */}
                <div className="skills-page" id="skills-page">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category reveal-up">
                      <h2 className="main-common-title skill-cat-title">{category.title}</h2>
                      <p className="skill-cat-desc" style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6}}>
                        {category.description}
                      </p>
                      <div className="row g-3">
                        {category.skills.map((skill, i) => (
                          <div key={i} className="col-xl-2 col-md-3 col-sm-4 col-4">
                            <div className="skill-card reveal-up">
                              <div className="skill-icon">
                                <img loading="lazy" src={skill.icon} alt={skill.name} />
                              </div>
                              <span>{skill.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* CTA Slider */}
                  <div className="work-together-slider mt-4">
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
      </div>

      {/* Background shapes */}
      <div className="background-shapes">
        <div className="shape-1 common-shape">
          <img loading="lazy" src="/assets/img/bg/banner-shape-1.png" alt="shape" />
        </div>
        <div className="shape-2 common-shape">
          <img loading="lazy" src="/assets/img/bg/banner-shape-1.png" alt="shape" />
        </div>
        <div className="threed-shape-1 move-with-cursor" data-value="1">
          <img loading="lazy" src="/assets/img/bg/object-3d-1.png" alt="3d-1" />
        </div>
        <div className="threed-shape-2 move-with-cursor" data-value="1">
          <img loading="lazy" src="/assets/img/bg/object-3d-2.png" alt="3d-2" />
        </div>
      </div>
    </section>
  );
}
