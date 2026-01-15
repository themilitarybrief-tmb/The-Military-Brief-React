import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './pay-allowances-explainers.css'

const PayAllowancesExplainers = (props) => {
  return (
    <div className="pay-allowances-explainers-container1">
      <Helmet>
        <title>Pay-Allowances-Explainers - The Military Brief</title>
        <meta
          property="og:title"
          content="Pay-Allowances-Explainers - The Military Brief"
        />
        <link
          rel="canonical"
          href="https://www.themilitarybrief.com/pay-allowances-explainers"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="pay---allowances-explainers-hero-section">
        <div className="hero-media-container">
          <video
            src="https://videos.pexels.com/video-files/6581397/6581397-hd_1920_1080_24fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/6581397/pictures/preview-0.jpg"
            autoPlay="true"
            playsInline="true"
            className="hero-video"
          ></video>
          <div className="hero-scrim-overlay"></div>
        </div>
        <div className="pay---allowances-explainers-hero-content-wrapper">
          <div className="hero-text-block">
            <h1 className="pay---allowances-explainers-hero-title hero-title">
              <span>
                {' '}
                Pay &amp; Allowances
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Status Briefings
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <p className="hero-subtitle pay---allowances-explainers-hero-subtitle">
              Non-partisan, evergreen explanations of active duty and reserve
              compensation, special pays, and how policy changes impact your
              family&apos;s financial stability.
            </p>
            <div className="pay---allowances-explainers-hero-actions">
              <a href="#pay-breakdown">
                <div className="btn-lg btn-primary btn">
                  <span>Explore Pay Types</span>
                </div>
              </a>
              <a href="#resources">
                <div className="btn-lg btn-outline btn">
                  <span>Official Resources</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="pay-breakdown" className="breakdown-section">
        <div className="container-wrapper">
          <h2 className="section-title">Core Compensation Breakdown</h2>
          <p className="breakdown-intro section-content">
            Understanding the components of your LES is critical for financial
            planning. We clarify the rules behind the most common pay types.
          </p>
          <div className="breakdown-grid">
            <div className="breakdown-card">
              <div className="card-icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4v3.803A6.02 6.02 0 0 1 18.658 11h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 0 1-3 0v-.583a6 6 0 0 1-1 .083h-4a6 6 0 0 1-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027A6 6 0 0 1 8.999 7h2.5z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Base Pay</h3>
              <p className="section-content">
                Determined by rank and years of service. Taxable income that
                serves as the foundation for retirement calculations and annual
                raises.
              </p>
            </div>
            <div className="breakdown-card">
              <div className="card-icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Housing (BAH)</h3>
              <p className="section-content">
                Non-taxable allowance to offset the cost of housing when not in
                government quarters. Rates vary by location, rank, and
                dependency status.
              </p>
            </div>
            <div className="breakdown-card">
              <div className="card-icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Subsistence (BAS)</h3>
              <p className="section-content">
                A non-taxable allowance meant to offset costs for a service
                member&apos;s meals. Adjusted annually based on food cost
                indices.
              </p>
            </div>
            <div className="breakdown-card">
              <div className="card-icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Family Separation</h3>
              <p className="section-content">
                FSA is paid when members are away from their dependents for more
                than 30 days due to military orders ($250/month).
              </p>
            </div>
            <div className="breakdown-card">
              <div className="card-icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Hazardous Duty</h3>
              <p className="section-content">
                Special pays for members performing dangerous duties such as
                flight, jump, or demolition work. Eligibility requires active
                certification.
              </p>
            </div>
            <div className="breakdown-card">
              <div className="card-icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 16v-4m0-4h.01"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Cost of Living (COLA)</h3>
              <p className="section-content">
                Designed to maintain purchasing power in high-cost areas, both
                CONUS and OCONUS. Subject to frequent adjustments based on local
                data.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="comparison-section">
        <div className="container-wrapper">
          <div className="comparison-header">
            <h2 className="section-title">
              Guard &amp; Reserve vs. Active Duty
            </h2>
            <p className="section-content">
              Compensation rules change significantly when transitioning between
              drill status and active duty orders.
            </p>
          </div>
          <div className="table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>
                    <span>Pay Component</span>
                  </th>
                  <th>
                    <span>Active Duty</span>
                  </th>
                  <th>
                    <span>Guard / Reserve (Drill)</span>
                  </th>
                  <th>
                    <span>Guard / Reserve (Mobilized)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Base Pay</strong>
                  </td>
                  <td>
                    <span>Full monthly salary</span>
                  </td>
                  <td>
                    <span>1/30th per drill period</span>
                  </td>
                  <td>
                    <span>Full monthly salary</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Housing (BAH)</strong>
                  </td>
                  <td>
                    <span>Full monthly rate</span>
                  </td>
                  <td>
                    <span>None (unless on orders &gt;30 days)</span>
                  </td>
                  <td>
                    <span>Full rate based on home of record</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Healthcare</strong>
                  </td>
                  <td>
                    <span>TRICARE Prime (No cost)</span>
                  </td>
                  <td>
                    <span>TRICARE Reserve Select (Premium)</span>
                  </td>
                  <td>
                    <span>TRICARE Prime/Standard</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Special Pays</strong>
                  </td>
                  <td>
                    <span>Continuous eligibility</span>
                  </td>
                  <td>
                    <span>Prorated by duty days</span>
                  </td>
                  <td>
                    <span>Full eligibility</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="timeline-section">
        <div className="timeline-outer">
          <div className="timeline-header-block">
            <h2 className="section-title">Special Pay Lifecycle</h2>
            <p className="section-content">
              When incentives start and stop during common career transitions.
            </p>
          </div>
          <div className="timeline-scroll-container">
            <div className="timeline-track">
              <div className="timeline-event">
                <div className="event-marker">
                  <span>1</span>
                </div>
                <div className="event-content">
                  <h4 className="section-subtitle">Pre-Deployment</h4>
                  <p className="section-content">
                    Certification of hazardous duty skills. Hostile Fire Pay
                    (HFP) eligibility begins upon entry into designated zone.
                  </p>
                </div>
              </div>
              <div className="timeline-event">
                <div className="event-marker">
                  <span>2</span>
                </div>
                <div className="event-content">
                  <h4 className="section-subtitle">Day 31 of Separation</h4>
                  <p className="section-content">
                    Family Separation Allowance (FSA) begins accruing
                    retroactively to Day 1 of the separation period.
                  </p>
                </div>
              </div>
              <div className="timeline-event">
                <div className="event-marker">
                  <span>3</span>
                </div>
                <div className="event-content">
                  <h4 className="section-subtitle">PCS Transition</h4>
                  <p className="section-content">
                    Dislocation Allowance (DLA) is typically paid once per PCS
                    to offset moving costs. Old BAH stops, new BAH starts.
                  </p>
                </div>
              </div>
              <div className="timeline-event">
                <div className="event-marker">
                  <span>4</span>
                </div>
                <div className="event-content">
                  <h4 className="section-subtitle">End of Tour</h4>
                  <p className="section-content">
                    Special pays cease on the date of departure from the
                    qualifying area or loss of certification status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pay---allowances-explainers-updates-section">
        <div className="container-wrapper">
          <h2 className="section-title">Latest Policy Updates</h2>
          <div className="accordion-container">
            <details open="true" className="update-item">
              <summary className="update-summary">
                <span className="update-label">2025 Pay Table</span>
                <h3 className="section-subtitle">4.5% Basic Pay Increase</h3>
                <svg
                  fill="none"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  className="chevron"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </summary>
              <div className="update-content">
                <p className="section-content">
                  The latest NDAA has approved a 4.5% increase in basic pay for
                  all service members. This is the largest increase in over two
                  decades, aimed at addressing inflation and housing costs.
                  Effective January 1st, 2025.
                </p>
                <a href="#">
                  <div className="btn-link btn">
                    <span>View Full 2025 Pay Table</span>
                  </div>
                </a>
              </div>
            </details>
            <details className="update-item">
              <summary className="update-summary">
                <span className="update-label">Housing Policy</span>
                <h3 className="section-subtitle">
                  BAH Rate Adjustments for High-Cost Areas
                </h3>
                <svg
                  fill="none"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  className="chevron"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </summary>
              <div className="update-content">
                <p className="section-content">
                  The DoD has announced targeted BAH increases for 15
                  high-growth markets where rental costs have outpaced current
                  allowances. Affected members will see automatic adjustments in
                  their February mid-month pay.
                </p>
              </div>
            </details>
            <details className="update-item">
              <summary className="update-summary">
                <span className="update-label">Reserve Component</span>
                <h3 className="section-subtitle">
                  New Incentive Pay for Cyber Specialties
                </h3>
                <svg
                  fill="none"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  className="chevron"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </summary>
              <div className="update-content">
                <p className="section-content">
                  Guard and Reserve members in designated Cyber Mission Force
                  roles are now eligible for increased monthly incentive pay,
                  matching active duty counterparts for the first time.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section
        id="resources"
        className="pay---allowances-explainers-resources-section"
      >
        <div className="container-wrapper">
          <h2 className="section-title">Official Resources &amp; Tools</h2>
          <div className="pay---allowances-explainers-resources-grid">
            <div className="pay---allowances-explainers-resource-card">
              <div className="resource-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </div>
              <h4 className="section-subtitle">DFAS MyPay</h4>
              <p className="section-content">
                The primary portal for viewing LES, tax documents, and managing
                allotments.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Visit MyPay</span>
                </div>
              </a>
            </div>
            <div className="pay---allowances-explainers-resource-card">
              <div className="resource-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <h4 className="section-subtitle">BAH Calculator</h4>
              <p className="section-content">
                Official DoD tool to calculate your housing allowance by zip
                code and rank.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Calculate Rates</span>
                </div>
              </a>
            </div>
            <div className="pay---allowances-explainers-resource-card">
              <div className="resource-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <h4 className="section-subtitle">Pay Tables (PDF)</h4>
              <p className="section-content">
                Downloadable and printable versions of the current year&apos;s
                basic pay tables.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Download PDF</span>
                </div>
              </a>
            </div>
            <div className="pay---allowances-explainers-resource-card">
              <div className="resource-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 16v-4m0-4h.01"></path>
                </svg>
              </div>
              <h4 className="section-subtitle">Pay Policy FAQ</h4>
              <p className="section-content">
                Answers to common questions about back pay, taxes, and
                eligibility.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Read FAQs</span>
                </div>
              </a>
            </div>
            <div className="pay---allowances-explainers-resource-card">
              <div className="resource-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                </svg>
              </div>
              <h4 className="section-subtitle">TRICARE Rates</h4>
              <p className="section-content">
                Compare premiums and out-of-pocket costs for various TRICARE
                plans.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>View Healthcare</span>
                </div>
              </a>
            </div>
            <div className="pay---allowances-explainers-resource-card">
              <div className="resource-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
              </div>
              <h4 className="section-subtitle">Corrections Portal</h4>
              <p className="section-content">
                How to report and fix errors on your LES through your finance
                office.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Fix My Pay</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pay---allowances-explainers-cta-section">
        <div className="container-wrapper">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="section-title">Stay Informed on Pay Changes</h2>
              <p className="section-content">
                Get non-partisan briefings on NDAA decisions and pay table
                updates delivered directly to your inbox.
              </p>
              <form
                action="/subscribe"
                method="POST"
                data-form-id="1ca2d0e1-2c2e-4e9b-9ad8-5e694f5b2da7"
                className="cta-form"
              >
                <input
                  type="email"
                  id="thq_textinput_g2xW"
                  name="textinput"
                  required="true"
                  placeholder="Enter your email"
                  data-form-field-id="thq_textinput_g2xW"
                  className="pay---allowances-explainers-cta-input"
                />
                <button
                  id="thq_button_I0eZ"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_I0eZ"
                  className="btn-lg btn btn-accent"
                >
                  Subscribe for Updates
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="pay---allowances-explainers-contact-section">
        <div className="container-wrapper">
          <div className="pay---allowances-explainers-contact-grid">
            <div className="contact-col">
              <h3 className="section-subtitle">Media Inquiries</h3>
              <p className="section-content">
                Journalists seeking clarification on military pay policy or
                non-partisan analysis can reach our media desk.
              </p>
              <a href="mailto:media@militarybrief.com?subject=">
                <div className="btn-outline btn-sm btn">
                  <span>Contact Media Desk</span>
                </div>
              </a>
            </div>
            <div className="contact-col">
              <h3 className="section-subtitle">Corrections &amp; Tips</h3>
              <p className="section-content">
                Notice an error in our briefings? Have a tip about a pending
                policy change? We value accuracy above all.
              </p>
              <a href="mailto:tips@militarybrief.com?subject=">
                <div className="btn-outline btn-sm btn">
                  <span>Submit a Tip</span>
                </div>
              </a>
            </div>
            <div className="contact-col">
              <h3 className="section-subtitle">Partnerships</h3>
              <p className="section-content">
                Interested in collaborating on evergreen educational content for
                service members and their families?
              </p>
              <a href="mailto:partners@militarybrief.com?subject=">
                <div className="btn-outline btn-sm btn">
                  <span>Partner With Us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="pay-allowances-explainers-container2">
        <div className="pay-allowances-explainers-container3">
          <Script
            html={`<script defer data-name="pay-explainers-logic">
(function(){
  // Handle smooth scroll for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]')
  internalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Simple animation for timeline on scroll
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

  document.querySelectorAll(".breakdown-card, .resource-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.5s ease-out"
    observer.observe(el)
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

export default PayAllowancesExplainers
