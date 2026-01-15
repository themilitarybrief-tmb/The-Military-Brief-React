import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-wrapper-container">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand-col">
              <div className="footer-logo-group">
                <div className="footer-logo-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m12.555 2.168l6 4A1 1 0 0 1 19 7v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7a1 1 0 0 1 .445-.832l6-4a1 1 0 0 1 1.11 0m-.108 12.938a1 1 0 0 0-.894 0l-2 1a1 1 0 0 0-.447 1.341l.058.102a1 1 0 0 0 1.283.345L12 17.118l1.553.776a1 1 0 0 0 .894-1.788zm0-4a1 1 0 0 0-.894 0l-2 1a1 1 0 0 0-.447 1.341l.058.102a1 1 0 0 0 1.283.345L12 13.118l1.553.776a1 1 0 0 0 .894-1.788zm0-4a1 1 0 0 0-.894 0l-2 1a1 1 0 0 0-.447 1.341l.058.102a1 1 0 0 0 1.283.345L12 9.118l1.553.776a1 1 0 0 0 .894-1.788z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="footer-logo-text">The Military Brief</span>
              </div>
              <p className="footer-mission">
                Providing non-partisan clarity on military policies for service
                members, veterans, and families. Evergreen briefings on the
                decisions that matter most.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Twitter" className="footer-social-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Policy Briefings</h3>
              <nav className="footer-nav">
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="/pay-allowances">
                      <div className="footer-nav-link">
                        <span>Pay &amp; Allowances</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="/healthcare-tricare">
                      <div className="footer-nav-link">
                        <span>Healthcare &amp; TRICARE</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="/pcs-housing">
                      <div className="footer-nav-link">
                        <span>PCS &amp; Housing</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="/va-benefits">
                      <div className="footer-nav-link">
                        <span>VA Benefits &amp; Retirement</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="/guard-reserve">
                      <div className="footer-nav-link">
                        <span>Guard &amp; Reserve Policies</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Stay Informed</h3>
              <p className="footer-nav-text">
                Get critical policy updates delivered to your inbox.
              </p>
              <form
                action="/subscribe"
                method="POST"
                data-form-id="ce46f415-ef27-42ff-b256-6bf17f3554f6"
                className="footer-newsletter"
              >
                <div className="footer-input-group">
                  <input
                    type="email"
                    id="thq_textinput_iwgV"
                    name="textinput"
                    required="true"
                    aria-label="Email address"
                    placeholder="Email address"
                    data-form-field-id="thq_textinput_iwgV"
                    className="footer-input"
                  />
                  <button
                    id="thq_button_5NRl"
                    name="button"
                    type="submit"
                    aria-label="Subscribe"
                    data-form-field-id="thq_button_5NRl"
                    className="footer-submit-btn"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12a9 9 0 0 0-9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5m-5 4a9 9 0 0 0 9 9a9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                        <path d="M16 16h5v5"></path>
                        <circle r="1" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="footer-contact-links">
                <a href="/contact">
                  <div className="footer-nav-link">
                    <span>Media Inquiries</span>
                  </div>
                </a>
                <a href="/contact">
                  <div className="footer-nav-link">
                    <span>Submit a Correction</span>
                  </div>
                </a>
                <a href="/contact">
                  <div className="footer-nav-link">
                    <span>Partnerships &amp; Tips</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>
                &amp;copy; 2025 The Military Brief. All rights reserved.
                Non-partisan reporting.
              </span>
            </div>
            <div className="footer-legal">
              <a href="/privacy">
                <div className="footer-legal-link">
                  <span>Privacy Policy</span>
                </div>
              </a>
              <a href="/terms">
                <div className="footer-legal-link">
                  <span>Terms of Service</span>
                </div>
              </a>
              <a href="/accessibility">
                <div className="footer-legal-link">
                  <span>Accessibility</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-newsletter-handler">
(function(){
  const newsletterForm = document.querySelector(".footer-newsletter")
  const emailInput = document.querySelector(".footer-input")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      // Native validation is handled by HTML5 'required' and 'type="email"'
      // This script provides visual feedback
      const btn = newsletterForm.querySelector(".footer-submit-btn")
      const originalIcon = btn.innerHTML

      // Temporary visual state for submission
      btn.style.backgroundColor = "var(--color-accent)"
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L20 7"/></svg>'

      // In a real scenario, the form action would handle the POST
      // We reset the button after a delay for UX demo purposes
      setTimeout(() => {
        btn.innerHTML = originalIcon
        emailInput.value = ""
      }, 3000)
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
