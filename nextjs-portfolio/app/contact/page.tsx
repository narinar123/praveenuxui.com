'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', budget: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                    <a className="btn btn-call" href="#booking-section">
                      <svg className="icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 4H9.5L11.5 9L9 10.5C10.071 12.6715 11.8285 14.429 14 15.5L15.5 13L20.5 15V19C20.5 19.5304 20.2893 20.0391 19.9142 20.4142C19.5391 20.7893 19.0304 21 18.5 21C14.5993 20.763 10.9202 19.1065 8.15683 16.3432C5.3935 13.5798 3.73705 9.90074 3.5 6C3.5 5.46957 3.71071 4.96086 4.08579 4.58579C4.46086 4.21071 4.96957 4 5.5 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5 7C16.0304 7 16.5391 7.21071 16.9142 7.58579C17.2893 7.96086 17.5 8.46957 17.5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5 3C17.0913 3 18.6174 3.63214 19.7426 4.75736C20.8679 5.88258 21.5 7.4087 21.5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Book A call
                    </a>
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
                  <div className="social-media-icon">
                    <ul className="list-unstyled">
                      <li><a href="https://www.facebook.com/pranu21m/" target="_blank"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/praveenkumarkanneganti/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                      <li><a href="https://www.behance.net/praveen-ui-ux" target="_blank"><i className="fab fa-behance"></i></a></li>
                      <li><a href="https://wa.me/918884263999" target="_blank" title="WhatsApp"><i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i></a></li>
                      <li><a href="https://t.me/+918884263999" target="_blank" title="Telegram"><i className="fab fa-telegram" style={{ color: '#0088cc' }}></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Content */}
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body portUXUI-card contact-card">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">Let's 👋 <span>Work</span> Together</h1>
                    <p>I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
                  </div>
                </div>

                <div className="contact-area">
                  <div className="leave-comments-area">
                    <div className="comments-box">
                      <form onSubmit={handleSubmit}>
                        <div className="row gx-3">
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Name</label>
                              <input
                                name="name"
                                required
                                type="text"
                                className="form-control shadow-none"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Email</label>
                              <input
                                name="email"
                                required
                                type="email"
                                className="form-control shadow-none"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Subject</label>
                              <input
                                name="subject"
                                required
                                type="text"
                                className="form-control shadow-none"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Budget</label>
                              <select
                                name="budget"
                                required
                                className="form-select shadow-none"
                                value={formData.budget}
                                onChange={handleChange}
                              >
                                <option disabled value="">Select budget...</option>
                                <option value="$5000">$5000</option>
                                <option value="$5000 - $10000">$5000 - $10000</option>
                                <option value="$10000 - $20000">$10000 - $20000</option>
                                <option value="$20000">$20000+</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-4">
                              <label className="form-label">Comment</label>
                              <textarea
                                name="message"
                                className="form-control shadow-none"
                                rows={4}
                                placeholder="Type details about your inquiry"
                                value={formData.message}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button className="submit-btn" type="submit" disabled={isSubmitting}>
                              {isSubmitting ? 'Sending...' : 'Send Message'}
                              <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 11.6665V6.6665H12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Booking System */}
                  <div className="booking-section" id="booking-section">
                    <div className="booking-header">
                      <h4>📅 Book a Discovery Call</h4>
                      <p>Pick a time slot — I'll confirm within 2 hours.</p>
                    </div>
                    <div className="booking-slots">
                      {['Mon 10:00 AM IST', 'Mon 3:00 PM IST', 'Tue 11:00 AM IST', 'Wed 10:00 AM IST', 'Wed 4:00 PM IST', 'Thu 2:00 PM IST', 'Fri 11:00 AM IST', 'Fri 5:00 PM IST'].map((slot, i) => (
                        <button key={i} className="slot-btn">{slot}</button>
                      ))}
                    </div>
                    <button className="slot-confirm-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"></path>
                      </svg>
                      Confirm Booking
                    </button>
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

      {/* Success Modal */}
      {showSuccess && (
        <div id="thankYouModal" style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', zIndex: 9999 }}>
          <div style={{ background: '#fff', maxWidth: '400px', margin: '100px auto', padding: '30px', textAlign: 'center', borderRadius: '8px' }}>
            <h3>Thank you!</h3>
            <p>Your message has been sent successfully.</p>
            <button onClick={() => setShowSuccess(false)} style={{ marginTop: 15, padding: '8px 20px' }}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
