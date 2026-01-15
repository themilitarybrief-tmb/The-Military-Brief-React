import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>The Military Brief</title>
        <meta property="og:title" content="The Military Brief" />
        <link rel="canonical" href="https://www.themilitarybrief.com/" />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-section">
        <div className="hero-media-container">
          <video
            src="https://videos.pexels.com/video-files/7980526/7980526-hd_1080_1920_24fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/7980526/pictures/preview-0.jpeg"
            autoPlay="true"
            playsInline="true"
            className="hero-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-card home-thq-hero-card-elm">
            <span className="hero-tag">
              how policy relates to military families
            </span>
            <h1 className="home-hero-title hero-title">
              Clear answers to military policy changes - for the families who
              live with them.
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              We track pay, housing, healthcare, and retirement changes - and
              explain what actually affects your household, your timeline, and
              your decisions. 
            </p>
            <div className="hero-actions">
              <a href="#">
                <div className="btn-lg btn-primary btn">
                  <span>About </span>
                </div>
              </a>
              <a href="#">
                <div className="btn-lg btn-outline btn">
                  <span>Browse by Situation</span>
                </div>
              </a>
            </div>
            <div className="hero-quick-links">
              <span className="section-content">I need help with:</span>
              <div className="hero-links-grid">
                <a href="#pay">
                  <div className="hero-link-item">
                    <span>Pay &amp; Allowances</span>
                  </div>
                </a>
                <a href="#health">
                  <div className="hero-link-item">
                    <span>TRICARE Updates</span>
                  </div>
                </a>
                <a href="#housing">
                  <div className="hero-link-item">
                    <span>PCS &amp; Housing</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resources-section">
        <div className="resources-container">
          <div className="resources-header">
            <h2 className="section-title">Policy Resource Centers</h2>
            <p className="section-content">
              Navigate directly to non-partisan explainers for your specific
              service situation.
            </p>
          </div>
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon-box">
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
                  <path d="M12 7v6m-8 6.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9 10h6"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Pay &amp; Allowances</h3>
              <p className="section-content">
                Basic pay scales, COLA adjustments, and special duty incentive
                pay briefings.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Explore Pay Guides</span>
                </div>
              </a>
            </div>
            <div className="resource-card">
              <div className="resource-icon-box">
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
                  <path d="M7 21s9.286-9.841 9.286-13.841a3.86 3.86 0 0 0-1.182-3.008A4.13 4.13 0 0 0 12 3.007A4.13 4.13 0 0 0 8.896 4.15a3.86 3.86 0 0 0-1.182 3.01C7.714 11.16 17 21 17 21"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Healthcare &amp; TRICARE</h3>
              <p className="section-content">
                Coverage changes, enrollment periods, and mental health resource
                availability.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>View Health Policy</span>
                </div>
              </a>
            </div>
            <div className="resource-card">
              <div className="resource-icon-box">
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
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">PCS &amp; Housing</h3>
              <p className="section-content">
                Moving allowances, TLE extensions, and Privatized Military
                Housing rights.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Housing Briefings</span>
                </div>
              </a>
            </div>
            <div className="resource-card">
              <div className="resource-icon-box">
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
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">VA &amp; Retirement</h3>
              <p className="section-content">
                PACT Act eligibility, GI Bill updates, and blended retirement
                system analysis.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Benefits Guide</span>
                </div>
              </a>
            </div>
            <div className="resource-card">
              <div className="resource-icon-box">
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
                  <path d="m11 19l-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12m-6-6.236V12m3 3v6m3-3h-6M9 3.236v15"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Guard &amp; Reserve</h3>
              <p className="section-content">
                Duty status reform, mobilization pay, and reserve-specific
                healthcare options.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Component Updates</span>
                </div>
              </a>
            </div>
            <div className="resource-card">
              <div className="resource-icon-box">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M19 8v6m3-3h-6"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Family Support</h3>
              <p className="section-content">
                Spouse employment initiatives, child care fee assistance, and
                MWR benefits.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Family Resources</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="updates-section">
        <div className="updates-header">
          <div className="updates-header-content">
            <h2 className="section-title">Recent Briefings</h2>
            <p className="section-content">
              Timely updates on legislative shifts and policy implementation.
            </p>
          </div>
          <div className="updates-nav">
            <button id="prevBriefing" className="btn-outline btn-sm btn">
              Prev
            </button>
            <button id="nextBriefing" className="btn-outline btn-sm btn">
              Next
            </button>
          </div>
        </div>
        <div id="briefingRail" className="updates-rail">
          <article className="briefing-card">
            <div className="briefing-meta">
              <span className="briefing-date">Oct 24, 2024</span>
              <span className="briefing-tag">Legislative</span>
            </div>
            <h3 className="section-subtitle">
              NDAA 2025: Key Personnel Provisions
            </h3>
            <p className="section-content">
              A breakdown of the proposed 19.5% pay raise for junior enlisted
              members and its current status in the Senate.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Read Briefing</span>
              </div>
            </a>
          </article>
          <article className="briefing-card">
            <div className="briefing-meta">
              <span className="briefing-date">Oct 22, 2024</span>
              <span className="briefing-tag">Health</span>
            </div>
            <h3 className="section-subtitle">TRICARE Open Season Checklist</h3>
            <p className="section-content">
              Critical dates for the 2024 enrollment period and a comparison of
              Select vs. Prime plan cost shifts.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Read Briefing</span>
              </div>
            </a>
          </article>
          <article className="briefing-card">
            <div className="briefing-meta">
              <span className="briefing-date">Oct 20, 2024</span>
              <span className="briefing-tag">Housing</span>
            </div>
            <h3 className="section-subtitle">
              New Tenant Bill of Rights Updates
            </h3>
            <p className="section-content">
              Enhanced dispute resolution processes for families in privatized
              housing are now active at 10 major installations.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Read Briefing</span>
              </div>
            </a>
          </article>
          <article className="briefing-card">
            <div className="briefing-meta">
              <span className="briefing-date">Oct 18, 2024</span>
              <span className="briefing-tag">VA Benefits</span>
            </div>
            <h3 className="section-subtitle">PACT Act: Year Two Expansion</h3>
            <p className="section-content">
              New presumptive conditions added for veterans of the Gulf War and
              post-9/11 eras starting this month.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Read Briefing</span>
              </div>
            </a>
          </article>
          <article className="briefing-card">
            <div className="briefing-meta">
              <span className="briefing-date">Oct 15, 2024</span>
              <span className="briefing-tag">Education</span>
            </div>
            <h3 className="section-subtitle">Post-9/11 GI Bill MHA Rates</h3>
            <p className="section-content">
              How the new academic year rates affect monthly housing stipends
              for full-time students.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Read Briefing</span>
              </div>
            </a>
          </article>
        </div>
      </section>
      <section className="evergreen-section">
        <div className="evergreen-container">
          <div className="evergreen-header">
            <h2 className="section-title">Policy Foundations</h2>
            <p className="section-content">
              In-depth explainers on recurring topics, maintained and updated as
              regulations shift.
            </p>
          </div>
          <div className="evergreen-grid">
            <div className="evergreen-card">
              <div className="evergreen-image-box">
                <img
                  alt="Military Policy"
                  src="https://images.pexels.com/photos/7467873/pexels-photo-7467873.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="evergreen-img"
                />
                <span className="update-stamp">Updated: Oct 2024</span>
              </div>
              <div className="evergreen-body">
                <h3 className="section-subtitle">
                  The Military Pay Scale Explained
                </h3>
                <p className="section-content">
                  How base pay, allowances, and tax advantages combine to form
                  your total compensation package.
                </p>
                <a href="#">
                  <div className="btn-outline btn-sm btn">
                    <span>Read Explainer</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="evergreen-card">
              <div className="evergreen-image-box">
                <img
                  alt="Healthcare Policy"
                  src="https://images.pexels.com/photos/7467847/pexels-photo-7467847.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="evergreen-img"
                />
                <span className="update-stamp">Updated: Sep 2024</span>
              </div>
              <div className="evergreen-body">
                <h3 className="section-subtitle">TRICARE Prime vs. Select</h3>
                <p className="section-content">
                  A detailed comparison of costs, provider networks, and
                  flexibility for active duty and retirees.
                </p>
                <a href="#">
                  <div className="btn-outline btn-sm btn">
                    <span>Read Explainer</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="evergreen-card">
              <div className="evergreen-image-box">
                <img
                  alt="Family Housing"
                  src="https://images.pexels.com/photos/7985496/pexels-photo-7985496.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="evergreen-img"
                />
                <span className="update-stamp">Updated: Oct 2024</span>
              </div>
              <div className="evergreen-body">
                <h3 className="section-subtitle">Navigating the PCS Move</h3>
                <p className="section-content">
                  Your rights during a household goods move and how to claim
                  damage or loss through the new system.
                </p>
                <a href="#">
                  <div className="btn-outline btn-sm btn">
                    <span>Read Explainer</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="evergreen-card">
              <div className="evergreen-image-box">
                <img
                  alt="Veterans Benefits"
                  src="https://images.pexels.com/photos/7467966/pexels-photo-7467966.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="evergreen-img"
                />
                <span className="update-stamp">Updated: Aug 2024</span>
              </div>
              <div className="evergreen-body">
                <h3 className="section-subtitle">VA Disability Rating Guide</h3>
                <p className="section-content">
                  Understanding the C&amp;P exam process and how secondary
                  conditions affect your total rating.
                </p>
                <a href="#">
                  <div className="btn-outline btn-sm btn">
                    <span>Read Explainer</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="evergreen-card">
              <div className="evergreen-image-box">
                <img
                  alt="Guard Reserve"
                  src="https://images.pexels.com/photos/7984332/pexels-photo-7984332.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="evergreen-img"
                />
                <span className="update-stamp">Updated: July 2024</span>
              </div>
              <div className="evergreen-body">
                <h3 className="section-subtitle">Guard/Reserve Pay Status</h3>
                <p className="section-content">
                  The difference between Title 10, Title 32, and State Active
                  Duty pay and benefits.
                </p>
                <a href="#">
                  <div className="btn-outline btn-sm btn">
                    <span>Read Explainer</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="evergreen-card">
              <div className="evergreen-image-box">
                <img
                  alt="Retirement"
                  src="https://images.pexels.com/photos/7985545/pexels-photo-7985545.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="evergreen-img"
                />
                <span className="update-stamp">Updated: Oct 2024</span>
              </div>
              <div className="evergreen-body">
                <h3 className="section-subtitle">
                  Blended Retirement System (BRS)
                </h3>
                <p className="section-content">
                  Maximizing your TSP match and understanding the mid-career
                  continuation pay bonus.
                </p>
                <a href="#">
                  <div className="btn-outline btn-sm btn">
                    <span>Read Explainer</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <h2 className="section-title">Our Non-Partisan Mission</h2>
            <p className="section-content">
              The Military Brief provides status clarity without political bias.
              We explain the &quot;what&quot; and &quot;how&quot; of policy,
              leaving the &quot;why&quot; to others.
            </p>
          </div>
          <div className="mission-steps">
            <div className="mission-step">
              <div className="step-indicator">
                <span>1</span>
              </div>
              <div className="step-content">
                <h3 className="section-subtitle">Policy Monitoring</h3>
                <p className="section-content">
                  Our team tracks legislative filings, DoD directives, and VA
                  regulatory changes daily.
                </p>
              </div>
            </div>
            <div className="mission-step">
              <div className="step-indicator">
                <span>2</span>
              </div>
              <div className="step-content">
                <h3 className="section-subtitle">
                  Plain Language Distillation
                </h3>
                <p className="section-content">
                  We strip away the &quot;mil-speak&quot; and legal jargon to
                  explain how changes affect your wallet and family.
                </p>
              </div>
            </div>
            <div className="mission-step">
              <div className="step-indicator">
                <span>3</span>
              </div>
              <div className="step-content">
                <h3 className="section-subtitle">Continuous Updates</h3>
                <p className="section-content">
                  When a policy moves from a proposal to a law, our explainers
                  are updated within 24 hours.
                </p>
              </div>
            </div>
            <div className="mission-step">
              <div className="step-indicator">
                <span>4</span>
              </div>
              <div className="step-content">
                <h3 className="section-subtitle">Community Feedback</h3>
                <p className="section-content">
                  We integrate questions and tips from our community to ensure
                  our coverage meets real-world needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">450+</span>
              <span className="stat-label">Active Policy Briefings</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">24hr</span>
              <span className="stat-label">Max Update Lag</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">12k+</span>
              <span className="stat-label">Monthly Active Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">0</span>
              <span className="stat-label">Partisan Affiliations</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">15</span>
              <span className="stat-label">Core Policy Areas</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Veteran/Family Focus</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-header">
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-content">
                Whether you&apos;re a journalist, a partner, or have a tip about
                a policy shift, we want to hear from you.
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <h4 className="section-subtitle">Media Inquiries</h4>
                  <p className="section-content">press@themilitarybrief.com</p>
                </div>
                <div className="contact-item">
                  <h4 className="section-subtitle">Partnerships</h4>
                  <p className="section-content">collab@themilitarybrief.com</p>
                </div>
                <div className="contact-item">
                  <h4 className="section-subtitle">Submit a Tip</h4>
                  <p className="section-content">
                    Use our secure tip line for policy alerts.
                  </p>
                </div>
              </div>
              <form
                action="/submit"
                method="POST"
                data-form-id="a8c14d4a-6bd2-42a4-b68a-928f38244c18"
                className="contact-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="thq_textinput_pCVe"
                    name="textinput"
                    required="true"
                    placeholder="Your Name"
                    data-form-field-id="thq_textinput_pCVe"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="thq_textinput_7syL"
                    name="textinput"
                    required="true"
                    placeholder="Email Address"
                    data-form-field-id="thq_textinput_7syL"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <select
                    id="thq_select_ooKK"
                    name="select"
                    required="true"
                    data-form-field-id="thq_select_ooKK"
                    className="form-input"
                  >
                    <option disabled="true" selected="true">
                      Inquiry Type
                    </option>
                    <option value="correction">Correction</option>
                    <option value="tip">Policy Tip</option>
                    <option value="media">Media Request</option>
                    <option value="other">General Question</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    id="thq_textarea_3UdC"
                    name="textarea"
                    rows="4"
                    required="true"
                    minlength="10"
                    placeholder="Your Message"
                    data-form-field-id="thq_textarea_3UdC"
                    className="form-input"
                  ></textarea>
                </div>
                <button
                  id="thq_button_fWkO"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_fWkO"
                  className="btn-lg btn-primary btn"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-alert-banner">
          <div className="cta-alert-content">
            <div className="cta-alert-icon">
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
                <path d="M10.268 21a2 2 0 0 0 3.464 0M15 8h6m-3-3v6m2.002 3.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"></path>
              </svg>
            </div>
            <div className="cta-alert-text">
              <h3 className="section-subtitle">
                Stay Informed on Policy Shifts
              </h3>
              <p className="section-content">
                Get weekly briefings on the legislative changes that impact your
                service and family.
              </p>
            </div>
          </div>
          <form
            action="/subscribe"
            method="POST"
            data-form-id="15359d96-07c1-4847-a910-cf6b3f533ea5"
            className="cta-subscription-form"
          >
            <input
              type="email"
              id="thq_textinput_lzwL"
              name="textinput"
              required="true"
              placeholder="Enter your email"
              data-form-field-id="thq_textinput_lzwL"
              className="cta-input"
            />
            <button
              id="thq_button_mwot"
              name="button"
              type="submit"
              data-form-field-id="thq_button_mwot"
              className="btn btn-accent"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
        @keyframes slideUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="military-brief-logic">
(function(){
  // Smooth scroll rail navigation
  const rail = document.getElementById("briefingRail")
  const prevBtn = document.getElementById("prevBriefing")
  const nextBtn = document.getElementById("nextBriefing")

  if (rail && prevBtn && nextBtn) {
    const scrollAmount = 370 // card width + gap

    nextBtn.addEventListener("click", () => {
      rail.scrollBy({ left: scrollAmount, behavior: "smooth" })
    })

    prevBtn.addEventListener("click", () => {
      rail.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    })
  }

  // Simple form feedback
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Let native validation handle the check
      if (contactForm.checkValidity()) {
        // Logic for success state would go here in a real app
        // For this demo, we let the native action proceed or show a log
        console.log("Form submitted successfully")
      }
    })
  }

  // Parallax effect for hero (subtle)
  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset
    const heroVideo = document.querySelector(".hero-video")
    if (heroVideo) {
      heroVideo.style.transform = \`translateY(\${scroll * 0.3}px)\`
    }
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

export default Home
