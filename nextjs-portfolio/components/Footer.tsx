'use client';

import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById('back-to-top');
      if (backToTopButton) {
        if (window.scrollY > 300) {
          backToTopButton.classList.add('show');
        } else {
          backToTopButton.classList.remove('show');
        }
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
      backToTopButton.addEventListener('click', scrollToTop);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (backToTopButton) {
        backToTopButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <>
      {/* back to top part start */}
      <button id="back-to-top" title="Back to Top">
        <i className="fas fa-arrow-up"></i>
      </button>
      {/* back to top part end */}

      {/* footer part start */}
      <footer className="footer-area">
        <div className="container">
          <div className="text text-center">
            <p>© Praveen Kumar K &nbsp;2026 &nbsp;·&nbsp; UX/UI Architect &amp; AI Agentic Design Strategist</p>
          </div>
        </div>
      </footer>
      {/* footer part end */}
    </>
  );
}
