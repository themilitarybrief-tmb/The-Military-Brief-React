import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-thq-navigation-container-elm navigation-container">
          <a href="/">
            <div
              aria-label="The Military Brief Home"
              className="navigation-logo-link navigation-thq-navigation-logo-link-elm1"
            >
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navigation-image"
              />
            </div>
          </a>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links-list">
              <li className="navigation-link-item">
                <a href="/pay-allowances">
                  <div className="navigation-link">
                    <span>Pay &amp; Allowances</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="/healthcare-tricare">
                  <div className="navigation-link">
                    <span>Healthcare</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="/pcs-housing">
                  <div className="navigation-link">
                    <span>PCS &amp; Housing</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="/va-benefits-retirement">
                  <div className="navigation-link">
                    <span>VA &amp; Retirement</span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="/contact">
              <div className="btn-primary btn-sm btn">
                <span>Get Briefed</span>
              </div>
            </a>
          </div>
          <button
            id="mobileMenuToggle"
            aria-label="Toggle navigation menu"
            aria-controls="mobileOverlay"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="icon-menu"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobileOverlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <a href="/">
            <div
              aria-label="The Military Brief Home"
              className="navigation-logo-link"
            >
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="navigation-brand-name section-subtitle">
                The Military Brief
              </span>
            </div>
          </a>
          <button
            id="mobileMenuClose"
            aria-label="Close navigation menu"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-overlay-links">
            <li className="navigation-overlay-item">
              <a href="/pay-allowances">
                <div className="navigation-overlay-link hero-subtitle">
                  <span>Pay &amp; Allowances</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/healthcare-tricare">
                <div className="navigation-overlay-link hero-subtitle">
                  <span>Healthcare &amp; TRICARE</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/pcs-housing">
                <div className="navigation-overlay-link hero-subtitle">
                  <span>PCS &amp; Housing</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/va-benefits-retirement">
                <div className="navigation-overlay-link hero-subtitle">
                  <span>VA &amp; Retirement</span>
                </div>
              </a>
            </li>
            <li className="navigation-overlay-item">
              <a href="/contact">
                <div className="navigation-overlay-link hero-subtitle">
                  <span>Contact Us</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-overlay-footer">
            <a href="/contact">
              <div className="btn-lg btn-primary btn">
                <span>Subscribe to Briefings</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-wrapper, .navigation-link::after, .navigation-overlay-link, .navigation-mobile-overlay.is-active {
  transition: none;
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("mobileMenuToggle")
  const closeBtn = document.getElementById("mobileMenuClose")
  const overlay = document.getElementById("mobileOverlay")

  const openMenu = () => {
    overlay.classList.add("is-active")
    toggleBtn.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    overlay.classList.remove("is-active")
    toggleBtn.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  // Close menu if a link is clicked
  const overlayLinks = document.querySelectorAll(".navigation-overlay-link")
  overlayLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Close menu on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Navigation.defaultProps = {
  imageSrc: '/Homepage/the%20military%20brief-200w.png',
  imageAlt: 'image',
}

Navigation.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Navigation
