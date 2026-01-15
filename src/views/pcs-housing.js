import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './pcs-housing.css'

const PCSHousing = (props) => {
  return (
    <div className="pcs-housing-container10">
      <Helmet>
        <title>PCS-Housing - The Military Brief</title>
        <meta property="og:title" content="PCS-Housing - The Military Brief" />
        <link
          rel="canonical"
          href="https://www.themilitarybrief.com/pcs-housing"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-bento-section">
        <div className="hero-bento-container">
          <div className="hero-main-cell">
            <img
              alt="Military family moving into new home"
              src="https://images.pexels.com/photos/7415121/pexels-photo-7415121.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-bg-image"
            />
            <div className="hero-scrim-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title pcs---housing-hero-title">
                PCS &amp; Housing: Your Relocation Briefing
              </h1>
              <p className="hero-subtitle">
                Navigating the complexities of Permanent Change of Station (PCS)
                with non-partisan clarity. From housing allowances to final
                inspections, we provide the status clarity military families
                need for a successful move.
              </p>
              <div className="pcs---housing-hero-actions">
                <a href="#checklist">
                  <div className="btn-lg btn-primary btn">
                    <span>View Checklist</span>
                  </div>
                </a>
                <a href="#allowances">
                  <div className="btn-lg btn-outline btn">
                    <span>Explore Allowances</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-bento-grid">
            <a href="#allowances">
              <div className="bento-cell">
                <div className="bento-icon-box">
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
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Allowances</h3>
                <p className="section-content">
                  Understanding BAH, BAS, and DLA calculations.
                </p>
              </div>
            </a>
            <a href="#housing-options">
              <div className="bento-cell">
                <div className="bento-icon-box">
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
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <h3 className="section-subtitle">Housing</h3>
                <p className="section-content">
                  On-base vs. Off-base and privatized options.
                </p>
              </div>
            </a>
            <a href="#rentals">
              <div className="bento-cell">
                <div className="bento-icon-box">
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" x2="8" y1="13" y2="13"></line>
                    <line x1="16" x2="8" y1="17" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="section-subtitle">Rentals</h3>
                <p className="section-content">
                  Lease clauses and SCRA protection guidance.
                </p>
              </div>
            </a>
            <a href="#checklist">
              <div className="bento-cell">
                <div className="bento-icon-box">
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
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Checklist</h3>
                <p className="section-content">
                  Step-by-step timeline for your relocation.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="allowances" className="allowance-accordion-section">
        <div className="allowance-container">
          <div className="text-center-wrapper">
            <h2 className="section-title pcs---housing-section-title">
              Military Pay &amp; Allowances Explained
            </h2>
            <p className="section-content">
              Clear, non-partisan breakdowns of the financial components that
              support your relocation and housing costs.
            </p>
          </div>
          <div className="accordion-group">
            <details open="true">
              <summary>
                <span className="summary-title">
                  BAH: Basic Allowance for Housing
                </span>
                <div className="accordion-icon">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="accordion-content">
                <p className="section-content">
                  BAH is a U.S. based allowance that provides uniformed service
                  members equitable housing compensation based on housing costs
                  in local civilian housing markets. It is calculated based on
                  geographic duty location, pay grade, and dependency status.
                </p>
                <ul className="allowance-list">
                  <li className="section-content">
                    <strong>Location:</strong>
                    <span>
                      {' '}
                      Rates are set by surveying local rental costs annually.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li className="section-content">
                    <strong>Rank:</strong>
                    <span>
                      {' '}
                      Higher ranks typically receive higher rates to reflect
                      increased responsibility.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li className="section-content">
                    <strong>Dependents:</strong>
                    <span>
                      {' '}
                      &quot;With-dependents&quot; rates are higher than
                      &quot;without-dependents&quot; rates.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </details>
            <details>
              <summary>
                <span className="summary-title">
                  BAS: Basic Allowance for Subsistence
                </span>
                <div className="accordion-icon">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="accordion-content">
                <p className="section-content">
                  BAS is meant to offset costs for a service member&apos;s
                  meals. This allowance is not intended to cover the meals of
                  family members. All officers receive the same monthly amount,
                  while enlisted rates are slightly higher and adjusted annually
                  based on food cost indices.
                </p>
              </div>
            </details>
            <details>
              <summary>
                <span className="summary-title">
                  DLA: Dislocation Allowance
                </span>
                <div className="accordion-icon">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="accordion-content">
                <p className="section-content">
                  DLA is partially intended to reimburse a service member for
                  the expenses incurred in relocating a household. It is
                  typically paid once per PCS move. Rates vary by rank and
                  dependency status and are updated at the start of each fiscal
                  year.
                </p>
              </div>
            </details>
            <details>
              <summary>
                <span className="summary-title">
                  OHA: Overseas Housing Allowance
                </span>
                <div className="accordion-icon">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="accordion-content">
                <p className="section-content">
                  For those stationed outside the United States, OHA replaces
                  BAH. It is a cost-reimbursement based allowance that includes
                  three components: rental ceiling, utility/recurring
                  maintenance allowance, and move-in housing allowance (MIHA).
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section id="checklist" className="pcs---housing-timeline-section">
        <div className="timeline-container">
          <div className="text-center-wrapper">
            <h2 className="section-title pcs---housing-section-title">
              Your PCS Journey Timeline
            </h2>
            <p className="section-content">
              A step-by-step roadmap from receiving orders to settling into your
              new community.
            </p>
          </div>
          <div className="timeline-vertical">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span>1</span>
              </div>
              <div className="pcs---housing-timeline-card">
                <h3 className="section-subtitle">
                  Initial Notification (D-Day - 90 Days)
                </h3>
                <p className="section-content">
                  Official orders are published. Contact your local
                  Transportation Office (TMO/PPO) immediately to schedule your
                  move. Start a &quot;PCS Binder&quot; for all critical
                  paperwork, including medical records and school transcripts.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span>2</span>
              </div>
              <div className="pcs---housing-timeline-card">
                <h3 className="section-subtitle">
                  The Planning Phase (D-Day - 60 Days)
                </h3>
                <p className="section-content">
                  Decide between a Government-Constructed Move or a Personally
                  Procured Move (PPM). Research your new duty station&apos;s
                  housing market and begin applying for on-base housing if
                  desired.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span>3</span>
              </div>
              <div className="pcs---housing-timeline-card">
                <h3 className="section-subtitle">
                  Logistics &amp; Sorting (D-Day - 30 Days)
                </h3>
                <p className="section-content">
                  Host a yard sale or donate items to stay within weight
                  allowances. Confirm packing dates with movers. Notify current
                  landlords and utility companies of your departure date.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span>4</span>
              </div>
              <div className="pcs---housing-timeline-card">
                <h3 className="section-subtitle">Moving Week &amp; Arrival</h3>
                <p className="section-content">
                  Supervise the packing process. Keep high-value items and
                  critical documents with you. Upon arrival, check into your new
                  unit and visit the Housing Office to finalize your living
                  arrangements.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-cta">
            <button className="btn-lg btn btn-accent">
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pcs-housing-icon32"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
              <span>
                {' '}
                Download Printable Checklist
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section id="housing-options" className="steps-section">
        <div className="steps-container">
          <div className="text-center-wrapper">
            <h2 className="section-title pcs---housing-section-title">
              Securing Your New Home
            </h2>
            <p className="section-content">
              Navigating the choice between on-base privatized housing and
              off-base private rentals.
            </p>
          </div>
          <div className="steps-vertical-wrapper">
            <div className="step-card">
              <div className="step-number">
                <span>01</span>
              </div>
              <div className="step-body">
                <h3 className="section-subtitle">Evaluate Housing Options</h3>
                <p className="section-content">
                  Compare the pros and cons of living on-base (community,
                  proximity, utilities included) versus off-base (BAH
                  flexibility, local integration, equity potential).
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">
                <span>02</span>
              </div>
              <div className="step-body">
                <h3 className="section-subtitle">Apply for On-Base Housing</h3>
                <p className="section-content">
                  Visit the Military Housing Office (MHO) website for your new
                  installation. Submit your application early, as waiting lists
                  can range from weeks to several months.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">
                <span>03</span>
              </div>
              <div className="step-body">
                <h3 className="section-subtitle">Conduct Off-Base Research</h3>
                <p className="section-content">
                  Use verified military-friendly rental search engines. Check
                  school districts, commute times, and ensure the monthly rent
                  aligns with your projected BAH.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">
                <span>04</span>
              </div>
              <div className="step-body">
                <h3 className="section-subtitle">
                  Finalize Lease &amp; Inspections
                </h3>
                <p className="section-content">
                  Before signing, ensure the Military Clause is included.
                  Conduct a thorough move-in inspection with photos to document
                  existing damage and protect your security deposit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="rentals" className="pcs---housing-resources-section">
        <div className="pcs---housing-resources-container">
          <div className="text-center-wrapper">
            <h2 className="section-title pcs---housing-section-title">
              Tenant Rights &amp; Rental Guidance
            </h2>
            <p className="section-content">
              Protecting your household during the rental process through legal
              safeguards and proactive negotiation.
            </p>
          </div>
          <div className="accordion-group">
            <details>
              <summary>
                <span className="summary-title">
                  The Servicemembers Civil Relief Act (SCRA)
                </span>
                <div className="accordion-icon">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="accordion-content">
                <p className="section-content">
                  The SCRA allows service members to terminate residential
                  leases early without penalty if they receive PCS orders or
                  deployment orders for 90 days or more. You must provide
                  written notice and a copy of your orders to the landlord.
                </p>
              </div>
            </details>
            <details>
              <summary>
                <span className="summary-title">The Military Clause</span>
                <div className="accordion-icon">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="accordion-content">
                <p className="section-content">
                  While the SCRA covers many scenarios, a specific
                  &quot;Military Clause&quot; in your lease can provide
                  additional protections, such as early termination for base
                  housing availability or changes in deployment status not
                  covered by federal law.
                </p>
              </div>
            </details>
            <details>
              <summary>
                <span className="summary-title">
                  Security Deposits &amp; Inspections
                </span>
                <div className="accordion-icon">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="accordion-content">
                <p className="section-content">
                  Never pay a deposit without a written receipt. Always perform
                  a walk-through with the landlord or property manager. Document
                  every scratch, stain, or malfunction with timestamped photos
                  to ensure a full refund upon departure.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="testimonials-rail-section">
        <div className="rail-header">
          <h2 className="section-title pcs---housing-section-title">
            Voices from the Field
          </h2>
          <p className="section-content">
            Real experiences and hard-won lessons from military families
            navigating the PCS process.
          </p>
        </div>
        <div className="card-rail-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="section-content">
                &quot;Don&apos;t wait for hard orders to start purging. We
                cleared out 500 lbs of weight we didn&apos;t need, which saved
                us from paying overages at our next stop.&quot;
              </p>
            </div>
            <div className="testimonial-author">
              <span className="author-name">Sarah M.</span>
              <span className="author-rank">Army Spouse</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="section-content">
                &quot;The SCRA is your best friend. Our landlord tried to charge
                us two months&apos; rent for leaving early, but a quick call to
                the base legal office sorted it out.&quot;
              </p>
            </div>
            <div className="testimonial-author">
              <span className="author-name">TSgt Robert K.</span>
              <span className="author-rank">US Air Force</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="section-content">
                &quot;Always visit the housing office before signing an off-base
                lease. They have a list of &apos;blacklisted&apos; properties
                that helps you avoid predatory landlords.&quot;
              </p>
            </div>
            <div className="testimonial-author">
              <span className="author-name">Lt. Commander James V.</span>
              <span className="author-rank">US Navy</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="section-content">
                &quot;We did a partial PPM (Personally Procured Move) for our
                essentials. It was more work, but having our beds and kitchen
                gear on Day 1 was worth every penny.&quot;
              </p>
            </div>
            <div className="testimonial-author">
              <span className="author-name">Megan D.</span>
              <span className="author-rank">Marine Corps Family</span>
            </div>
          </div>
        </div>
      </section>
      <section className="pcs---housing-updates-section">
        <div className="updates-container">
          <div className="text-center-wrapper">
            <h2 className="section-title pcs---housing-section-title">
              Policy Updates &amp; Briefings
            </h2>
            <p className="section-content">
              Stay informed on the latest DoD policy shifts and allowance rate
              adjustments.
            </p>
          </div>
          <div className="timeline-vertical">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span>NEW</span>
              </div>
              <div className="pcs---housing-timeline-card">
                <div className="update-date">
                  <span>January 2025</span>
                </div>
                <h3 className="section-subtitle">2025 BAH Rates Published</h3>
                <p className="section-content">
                  The Department of Defense has released 2025 Basic Allowance
                  for Housing rates, with an average increase of 4.2% nationwide
                  to combat rising rental costs in key military markets.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <svg
                  fill="none"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="pcs---housing-timeline-card">
                <div className="update-date">
                  <span>November 2024</span>
                </div>
                <h3 className="section-subtitle">
                  Privatized Housing Tenant Bill of Rights
                </h3>
                <p className="section-content">
                  Updated guidance on dispute resolution and maintenance
                  standards for families living in privatized base housing. All
                  18 rights are now fully implemented across all services.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <svg
                  fill="none"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <polyline points="16 11 18 13 22 9"></polyline>
                </svg>
              </div>
              <div className="pcs---housing-timeline-card">
                <div className="update-date">
                  <span>September 2024</span>
                </div>
                <h3 className="section-subtitle">New PCS Pet Reimbursement</h3>
                <p className="section-content">
                  The DoD now allows for the reimbursement of up to $2,000 for
                  overseas pet relocation and $550 for domestic moves. Claims
                  can be filed through the standard travel voucher system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-grid-section">
        <div className="contact-container">
          <div className="text-center-wrapper">
            <h2 className="section-title pcs---housing-section-title">
              Connect with The Military Brief
            </h2>
            <p className="section-content">
              Whether you have a tip, a correction, or a media inquiry, our team
              is here to ensure clarity for the military community.
            </p>
          </div>
          <div className="pcs---housing-contact-grid">
            <div className="pcs---housing-contact-card">
              <div className="contact-icon">
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Media Inquiries</h3>
              <p className="section-content">
                For press kits, interviews, and non-partisan commentary on
                military policy.
              </p>
              <a href="mailto:media@militarybrief.com?subject=">
                <div className="btn-link btn">
                  <span>media@militarybrief.com</span>
                </div>
              </a>
            </div>
            <div className="pcs---housing-contact-card">
              <div className="contact-icon">
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
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Corrections &amp; Tips</h3>
              <p className="section-content">
                Spotted an error? Have a policy update we missed? Let us know
                immediately.
              </p>
              <a href="mailto:tips@militarybrief.com?subject=">
                <div className="btn-link btn">
                  <span>tips@militarybrief.com</span>
                </div>
              </a>
            </div>
            <div className="pcs---housing-contact-card">
              <div className="contact-icon">
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
              <h3 className="section-subtitle">Partnerships</h3>
              <p className="section-content">
                Interested in collaborating on evergreen resources for military
                households?
              </p>
              <a href="mailto:partner@militarybrief.com?subject=">
                <div className="btn-link btn">
                  <span>partner@militarybrief.com</span>
                </div>
              </a>
            </div>
            <div className="pcs---housing-contact-card">
              <div className="contact-icon">
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
                  <line x1="12" x2="12" y1="16" y2="12"></line>
                  <line x1="12" x2="12.01" y1="8" y2="8"></line>
                </svg>
              </div>
              <h3 className="section-subtitle">Official Resources</h3>
              <p className="section-content">
                Direct links to DoD Move.mil and service-specific housing
                portals.
              </p>
              <a href="#">
                <div className="btn-link btn">
                  <span>Access Resource Hub</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="pcs-housing-container25">
        <div className="pcs-housing-container26">
          <Script
            html={`<style>
details {
  background: var(--color-surface-elevated);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all 0.3s ease;
}
summary {
  list-style: none;
  padding: var(--spacing-xl);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--font-weight-medium);
  font-family: var(--font-family-heading);
  color: var(--color-on-surface);
}
summary::-webkit-details-marker {
  display: none;
}
details[open] .accordion-icon {
  transform: rotate(180deg);
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="pcs-housing-container27">
        <div className="pcs-housing-container28">
          <Script
            html={`<script defer data-name="pcs-housing-interactions">
(function(){
  // Handle smooth scroll behavior for in-page links
  const bentoLinks = document.querySelectorAll(".bento-cell")
  bentoLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href")
      if (targetId.startsWith("#")) {
        e.preventDefault()
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    })
  })

  // Testimonial Rail - Simple hover pause (optional UX enhancement)
  const rail = document.querySelector(".card-rail-container")
  if (rail) {
    let isDown = false
    letstartX
    let scrollLeft

    rail.addEventListener("mousedown", (e) => {
      isDown = true
      rail.classList.add("active")
      startX = e.pageX - rail.offsetLeft
      scrollLeft = rail.scrollLeft
    })
    rail.addEventListener("mouseleave", () => {
      isDown = false
    })
    rail.addEventListener("mouseup", () => {
      isDown = false
    })
    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - rail.offsetLeft
      const walk = (x - startX) * 2
      rail.scrollLeft = scrollLeft - walk
    })
  }

  // Handle accordion logic to ensure only one remains open if desired (Standard <details> behavior is multi-open)
  // This is a progressive enhancement - the native behavior works without it.
  const accordions = document.querySelectorAll(".accordion-group details")
  accordions.forEach((targetDetail) => {
    targetDetail.addEventListener("toggle", () => {
      if (targetDetail.open) {
        accordions.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open")
          }
        })
      }
    })
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

export default PCSHousing
