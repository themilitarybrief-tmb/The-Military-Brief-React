import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './healthcare-tricare.css'

const HealthcareTRICARE = (props) => {
  return (
    <div className="healthcare-tricare-container1">
      <Helmet>
        <title>Healthcare-TRICARE - The Military Brief</title>
        <meta
          property="og:title"
          content="Healthcare-TRICARE - The Military Brief"
        />
        <link
          rel="canonical"
          href="https://www.themilitarybrief.com/healthcare-tricare"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-healthcare">
        <div className="hero-healthcare__bg">
          <img
            alt="Professional healthcare team"
            src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-healthcare__image"
          />
          <div className="hero-healthcare__overlay"></div>
        </div>
        <div className="hero-healthcare__container">
          <div className="hero-healthcare__content">
            <span className="hero-healthcare__tag">MILITARY BRIEFING</span>
            <h1 className="hero-title">
              Healthcare &amp; TRICARE: Clarity for Your Care
            </h1>
            <p className="hero-subtitle">
              Understanding your military healthcare benefits shouldn&apos;t be
              a battle. We provide plain-language guides to TRICARE options,
              eligibility, and costs for service members, veterans, and
              families.
            </p>
            <div className="hero-healthcare__actions">
              <a href="#plans">
                <div className="btn-lg btn-primary btn">
                  <span>Compare Plans</span>
                </div>
              </a>
              <a href="#enrollment">
                <div className="btn-lg btn-outline btn">
                  <span>How to Enroll</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="plans" className="plans-comparison">
        <div className="plans-comparison__container">
          <div className="plans-comparison__header">
            <h2 className="section-title">TRICARE Plan Comparison</h2>
            <p className="section-content">
              Find the plan that fits your status and your family&apos;s needs.
              Coverage varies based on your location and duty status.
            </p>
          </div>
          <div className="plans-comparison__table-wrapper">
            <table className="plans-comparison__table">
              <thead>
                <tr>
                  <th>
                    <span>Plan Name</span>
                  </th>
                  <th>
                    <span>Primary Audience</span>
                  </th>
                  <th>
                    <span>Key Features</span>
                  </th>
                  <th>
                    <span>Enrollment Fee</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>TRICARE Prime</strong>
                  </td>
                  <td>
                    <span>Active Duty &amp; Families</span>
                  </td>
                  <td>
                    <span>HMO-style, managed care with a PCM</span>
                  </td>
                  <td>
                    <span>$0 for Active Duty</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>TRICARE Select</strong>
                  </td>
                  <td>
                    <span>Active Duty Families &amp; Retirees</span>
                  </td>
                  <td>
                    <span>PPO-style, flexible provider choice</span>
                  </td>
                  <td>
                    <span>Varies by Group</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Reserve Select (TRS)</strong>
                  </td>
                  <td>
                    <span>Selected Reserve &amp; Families</span>
                  </td>
                  <td>
                    <span>Premium-based health plan</span>
                  </td>
                  <td>
                    <span>Monthly Premiums</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>TRICARE For Life</strong>
                  </td>
                  <td>
                    <span>Medicare-Eligible Retirees</span>
                  </td>
                  <td>
                    <span>Secondary payer to Medicare</span>
                  </td>
                  <td>
                    <span>$0 (Must have Part B)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="enrollment" className="enrollment-process">
        <div className="enrollment-process__container">
          <div className="enrollment-process__grid">
            <div className="enrollment-process__info">
              <h2 className="section-title">
                Navigating Enrollment &amp; Costs
              </h2>
              <p className="section-content">
                Follow these critical steps to secure your coverage and manage
                your out-of-pocket expenses effectively.
              </p>
              <div className="enrollment-process__visual">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="var(--color-primary)"
                  viewbox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
            </div>
            <div className="enrollment-process__steps">
              <div className="step-item">
                <div className="step-item__number">
                  <span>01</span>
                </div>
                <div className="step-item__content">
                  <h3 className="section-subtitle">Verify DEERS Eligibility</h3>
                  <p className="section-content">
                    Your eligibility for TRICARE is managed through the Defense
                    Enrollment Eligibility Reporting System. Ensure your
                    information is current.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-item__number">
                  <span>02</span>
                </div>
                <div className="step-item__content">
                  <h3 className="section-subtitle">Choose Your Plan</h3>
                  <p className="section-content">
                    Select between Prime (managed care) or Select (preferred
                    provider) based on your location and preference for
                    flexibility.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-item__number">
                  <span>03</span>
                </div>
                <div className="step-item__content">
                  <h3 className="section-subtitle">Enroll via BENE Online</h3>
                  <p className="section-content">
                    Use the Beneficiary Web Enrollment (BENE) portal to submit
                    your application or change your plan during Open Season.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-item__number">
                  <span>04</span>
                </div>
                <div className="step-item__content">
                  <h3 className="section-subtitle">
                    Monitor Catastrophic Caps
                  </h3>
                  <p className="section-content">
                    Understand your maximum out-of-pocket limit. Once reached,
                    TRICARE pays 100% of covered services for the remainder of
                    the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="life-scenarios">
        <div className="life-scenarios__container">
          <div className="life-scenarios__header">
            <h2 className="section-title">Healthcare During Life Events</h2>
            <p className="section-content">
              Major life changes impact your coverage. Here is how to handle
              common transitions.
            </p>
          </div>
          <div className="life-scenarios__timeline-wrapper">
            <div className="life-scenarios__timeline">
              <div className="timeline-card">
                <div className="timeline-card__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">PCS Move</h3>
                <p className="section-content">
                  You must transfer your enrollment to your new region. Contact
                  your new regional contractor within 90 days.
                </p>
              </div>
              <div className="timeline-card">
                <div className="timeline-card__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 7v4m2 10v-3a2 2 0 0 0-4 0v3m4-12h-4"></path>
                    <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
                    <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Deployment</h3>
                <p className="section-content">
                  Families may have more flexibility. Active duty members remain
                  on Prime; families can switch plans if needed.
                </p>
              </div>
              <div className="timeline-card">
                <div className="timeline-card__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Retirement</h3>
                <p className="section-content">
                  Transition to TRICARE Select or Prime as a retiree. Enrollment
                  fees apply. Dental coverage shifts to FEDVIP.
                </p>
              </div>
              <div className="timeline-card">
                <div className="timeline-card__icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 16v-4m0-4h.01"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">VA Transition</h3>
                <p className="section-content">
                  Learn how VA healthcare and TRICARE work together. Some
                  services may overlap while others are distinct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="healthcare-resources">
        <div className="healthcare-resources__container">
          <div className="healthcare-resources__header">
            <h2 className="section-title">Guides &amp; Checklists</h2>
            <p className="section-content">
              Downloadable tools and official links to help you manage your
              healthcare status.
            </p>
          </div>
          <div className="healthcare-resources__rail">
            <div className="healthcare---tricare-resource-card">
              <div className="resource-card__type">
                <span>CHECKLIST</span>
              </div>
              <h3 className="section-subtitle">Newborn Enrollment Guide</h3>
              <p className="section-content">
                A 5-step checklist for adding a child to DEERS and TRICARE
                coverage.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Download PDF</span>
                </div>
              </a>
            </div>
            <div className="healthcare---tricare-resource-card">
              <div className="resource-card__type">
                <span>OFFICIAL LINK</span>
              </div>
              <h3 className="section-subtitle">Provider Search Tool</h3>
              <p className="section-content">
                Find authorized network providers in your current or upcoming
                duty station.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Visit Site</span>
                </div>
              </a>
            </div>
            <div className="healthcare---tricare-resource-card">
              <div className="resource-card__type">
                <span>EXPLAINER</span>
              </div>
              <h3 className="section-subtitle">Claims &amp; Appeals</h3>
              <p className="section-content">
                How to dispute a denied claim or find the status of an existing
                medical bill.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Read More</span>
                </div>
              </a>
            </div>
            <div className="healthcare---tricare-resource-card">
              <div className="resource-card__type">
                <span>FORM</span>
              </div>
              <h3 className="section-subtitle">Medical Records Request</h3>
              <p className="section-content">
                Standard forms for requesting or transferring your military
                health records.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>View Form</span>
                </div>
              </a>
            </div>
            <div className="healthcare---tricare-resource-card">
              <div className="resource-card__type">
                <span>GUIDE</span>
              </div>
              <h3 className="section-subtitle">Dental &amp; Vision</h3>
              <p className="section-content">
                Understanding your supplemental coverage options through FEDVIP.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Read Guide</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="healthcare-updates">
        <div className="healthcare-updates__container">
          <div className="healthcare-updates__header">
            <h2 className="section-title">Recent Policy Changes</h2>
            <p className="section-content">
              Stay informed about the latest alerts and status changes affecting
              military healthcare.
            </p>
          </div>
          <div className="healthcare-updates__accordion">
            <details open="true" className="healthcare---tricare-update-item">
              <summary className="update-item__summary">
                <div className="update-item__meta">
                  <span className="update-item__date">JAN 2025</span>
                  <span className="update-item__title">
                    TRICARE Pharmacy Network Changes
                  </span>
                </div>
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="update-item__icon"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="update-item__content">
                <p className="section-content">
                  New pharmacy network adjustments have taken effect. Some
                  retail pharmacies may no longer be in-network. Check the
                  updated list to avoid higher co-pays for prescriptions filled
                  at non-network locations.
                </p>
              </div>
            </details>
            <details className="healthcare---tricare-update-item">
              <summary className="update-item__summary">
                <div className="update-item__meta">
                  <span className="update-item__date">DEC 2024</span>
                  <span className="update-item__title">
                    2025 Enrollment Fees Update
                  </span>
                </div>
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="update-item__icon"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="update-item__content">
                <p className="section-content">
                  Annual enrollment fees for TRICARE Select Group A and B
                  retirees have been adjusted for the new calendar year. Ensure
                  your allotments are updated to prevent coverage lapse.
                </p>
              </div>
            </details>
            <details className="healthcare---tricare-update-item">
              <summary className="update-item__summary">
                <div className="update-item__meta">
                  <span className="update-item__date">OCT 2024</span>
                  <span className="update-item__title">
                    Mental Health Access Expansion
                  </span>
                </div>
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="update-item__icon"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="update-item__content">
                <p className="section-content">
                  New pilot programs are expanding telehealth mental health
                  services for Guard and Reserve members. No referral is
                  required for the first eight sessions with a network provider.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="healthcare-contact">
        <div className="healthcare-contact__container">
          <div className="healthcare-contact__header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-content">
              Have questions about a briefing or need to report a policy change?
              Our team is here to help.
            </p>
          </div>
          <div className="healthcare-contact__grid">
            <div className="healthcare---tricare-contact-col">
              <div className="contact-col__icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="var(--color-primary)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                </svg>
              </div>
              <h3 className="section-subtitle">Briefing Clarifications</h3>
              <p className="section-content">
                Need more detail on a specific healthcare policy we covered?
                Reach out for a clearer explanation.
              </p>
              <a href="mailto:clarify@militarybrief.com?subject=">
                <div className="btn-outline btn-sm btn">
                  <span>Email Us</span>
                </div>
              </a>
            </div>
            <div className="healthcare---tricare-contact-col">
              <div className="contact-col__icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="var(--color-primary)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Corrections &amp; Tips</h3>
              <p className="section-content">
                Help us keep our briefings accurate. Submit corrections or
                policy tips directly to our editors.
              </p>
              <a href="mailto:tips@militarybrief.com?subject=">
                <div className="btn-outline btn-sm btn">
                  <span>Submit Tip</span>
                </div>
              </a>
            </div>
            <div className="healthcare---tricare-contact-col">
              <div className="contact-col__icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="var(--color-primary)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" x2="12" y1="3" y2="15"></line>
                </svg>
              </div>
              <h3 className="section-subtitle">Media &amp; Partnerships</h3>
              <p className="section-content">
                For press inquiries or partnership opportunities regarding
                military family health advocacy.
              </p>
              <a href="mailto:media@militarybrief.com?subject=">
                <div className="btn-outline btn-sm btn">
                  <span>Inquiry</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="healthcare-tricare-container2">
        <div className="healthcare-tricare-container3">
          <Script
            html={`<style>
details[open] .update-item__icon {
  transform: rotate(180deg);
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="healthcare-tricare-container4">
        <div className="healthcare-tricare-container5">
          <Script
            html={`<script defer data-name="healthcare-interactions">
(function(){
  // Handle smooth horizontal scroll for the life scenarios timeline
  const timelineWrapper = document.querySelector(".life-scenarios__timeline-wrapper")
  if (timelineWrapper) {
    let isDown = false
    let startX
    let scrollLeft

    timelineWrapper.addEventListener("mousedown", (e) => {
      isDown = true
      timelineWrapper.classList.add("active")
      startX = e.pageX - timelineWrapper.offsetLeft
      scrollLeft = timelineWrapper.scrollLeft
    })
    timelineWrapper.addEventListener("mouseleave", () => {
      isDown = false
    })
    timelineWrapper.addEventListener("mouseup", () => {
      isDown = false
    })
    timelineWrapper.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - timelineWrapper.offsetLeft
      const walk = (x - startX) * 2
      timelineWrapper.scrollLeft = scrollLeft - walk
    })
  }

  // Simple scroll animation for step items
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".step-item").forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = "all 0.6s ease-out"
    observer.observe(item)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default HealthcareTRICARE
