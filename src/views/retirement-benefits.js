import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './retirement-benefits.css'

const RetirementBenefits = (props) => {
  return (
    <div className="retirement-benefits-container10">
      <Helmet>
        <title>Retirement-Benefits - The Military Brief</title>
        <meta
          property="og:title"
          content="Retirement-Benefits - The Military Brief"
        />
        <link
          rel="canonical"
          href="https://www.themilitarybrief.com/retirement-benefits"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="retirement-benefits-container11">
        <div className="retirement-benefits-container12">
          <Script
            html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  overflow: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>
      <section className="retirement---benefits-hero-section">
        <div className="hero-media-container">
          <img
            alt="Happy retired couple on beach"
            src="https://images.pexels.com/photos/7233084/pexels-photo-7233084.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="retirement---benefits-hero-bg-image"
          />
          <div className="retirement---benefits-hero-overlay"></div>
        </div>
        <div className="retirement---benefits-hero-content-wrapper">
          <div className="hero-content-inner">
            <h1 className="retirement---benefits-hero-title hero-title">
              Securing Your Future After Service
            </h1>
            <p className="hero-subtitle retirement---benefits-hero-subtitle">
              Clear, non-partisan guidance on military retirement, healthcare,
              and VA benefits. We cut through the red tape so you can focus on
              what&apos;s next.
            </p>
            <div className="retirement---benefits-hero-cta-group">
              <a href="#checklist">
                <div className="btn-xl btn btn-accent">
                  <span>Start Your Benefits Checklist</span>
                </div>
              </a>
              <a href="#programs">
                <div className="btn-xl btn-outline btn">
                  <span>Explore Programs</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="programs" className="programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title retirement---benefits-section-title">
              The Pillars of Your Retirement
            </h2>
            <p className="section-content">
              Understanding how your core benefits interact is the first step
              toward a stable transition.
            </p>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
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
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="section-subtitle">Retirement Income</h3>
              <p className="section-content">
                Whether you&apos;re High-3 or BRS, we explain how your pension,
                TSP, and social security work together to provide long-term
                stability.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
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
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    <path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path>
                  </g>
                </svg>
              </div>
              <h3 className="section-subtitle">TRICARE &amp; Healthcare</h3>
              <p className="section-content">
                Navigate the shift from active duty care to TRICARE Select or
                Prime. Understand premiums, catastrophic caps, and family
                coverage options.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
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
              <h3 className="section-subtitle">VA Benefits &amp; Housing</h3>
              <p className="section-content">
                From disability ratings to the VA Home Loan, learn how to
                maximize your earned benefits for a smooth transition to
                civilian life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="retirement---benefits-timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title retirement---benefits-section-title">
              Transition Timeline
            </h2>
            <p className="section-content">
              The road to retirement starts long before your final formation.
              Follow these critical milestones.
            </p>
          </div>
          <div className="retirement---benefits-timeline-container">
            <div className="retirement---benefits-timeline-item">
              <div className="retirement---benefits-timeline-marker">
                <span>24</span>
              </div>
              <div className="retirement---benefits-timeline-content">
                <h3 className="section-subtitle">
                  24 Months: Initial Planning
                </h3>
                <p className="section-content">
                  Attend your first TAP briefing. Start researching civilian
                  career paths and evaluate your financial readiness for life
                  after the military.
                </p>
              </div>
            </div>
            <div className="retirement---benefits-timeline-item">
              <div className="retirement---benefits-timeline-marker">
                <span>12</span>
              </div>
              <div className="retirement---benefits-timeline-content">
                <h3 className="section-subtitle">
                  12 Months: Medical &amp; VA
                </h3>
                <p className="section-content">
                  Begin the Separation History and Physical Examination (SHPE).
                  Start compiling your medical records for the VA disability
                  claim process.
                </p>
              </div>
            </div>
            <div className="retirement---benefits-timeline-item">
              <div className="retirement---benefits-timeline-marker">
                <span>6</span>
              </div>
              <div className="retirement---benefits-timeline-content">
                <h3 className="section-subtitle">6 Months: Final Decisions</h3>
                <p className="section-content">
                  File your BDD (Benefits Delivery at Discharge) claim. Finalize
                  your terminal leave plans and submit your retirement
                  application.
                </p>
              </div>
            </div>
            <div className="retirement---benefits-timeline-item">
              <div className="retirement---benefits-timeline-marker">
                <span>0</span>
              </div>
              <div className="retirement---benefits-timeline-content">
                <h3 className="section-subtitle">Day 0: Retirement</h3>
                <p className="section-content">
                  Transition to retiree status. Ensure your DEERS information is
                  updated and your TRICARE enrollment is active in your new
                  status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="traps-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title retirement---benefits-section-title">
              Eligibility &amp; Common Pitfalls
            </h2>
            <p className="section-content">
              Avoid these frequent mistakes that can delay your benefits or cost
              you thousands in lost income.
            </p>
          </div>
          <div className="traps-accordion">
            <details className="trap-item">
              <summary>
                <span className="section-subtitle">
                  The &quot;Concurrent Receipt&quot; Trap
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="trap-icon"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="trap-content">
                <p className="section-content">
                  Many retirees don&apos;t realize that VA disability pay can
                  offset military retirement pay. We explain CRDP and CRSC rules
                  so you know exactly what to expect in your bank account.
                </p>
              </div>
            </details>
            <details className="trap-item">
              <summary>
                <span className="section-subtitle">
                  SBP Enrollment Deadlines
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="trap-icon"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="trap-content">
                <p className="section-content">
                  Missing the Survivor Benefit Plan (SBP) election window can
                  leave your family without protection. Learn the costs,
                  benefits, and the strict timelines for making this irrevocable
                  decision.
                </p>
              </div>
            </details>
            <details className="trap-item">
              <summary>
                <span className="section-subtitle">
                  TRICARE Enrollment Gaps
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="trap-icon"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="trap-content">
                <p className="section-content">
                  Assuming your TRICARE coverage automatically rolls over is a
                  major mistake. You must actively enroll as a retiree within 90
                  days of separation to avoid a coverage gap.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section id="checklist" className="checklist-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title retirement---benefits-section-title">
              Interactive Checklists
            </h2>
            <p className="section-content">
              Select your status to see a tailored list of required actions and
              critical decision points.
            </p>
          </div>
          <div className="tabs-container">
            <div role="tablist" className="tabs-list">
              <button
                role="tab"
                data-target="retiree-tab"
                className="tab-trigger active"
              >
                Service Member
              </button>
              <button
                role="tab"
                data-target="spouse-tab"
                className="tab-trigger"
              >
                Military Spouse
              </button>
              <button
                role="tab"
                data-target="guard-tab"
                className="tab-trigger"
              >
                Guard &amp; Reserve
              </button>
            </div>
            <div className="tabs-content">
              <div
                id="retiree-tab"
                role="tabpanel"
                className="active tab-panel"
              >
                <ul className="checklist-items">
                  <li className="checklist-item">
                    <input type="checkbox" id="item1" />
                    <label htmlFor="item1" className="section-content">
                      Complete TAP (Transition Assistance Program) Capstone
                    </label>
                  </li>
                  <li className="checklist-item">
                    <input type="checkbox" id="item2" />
                    <label htmlFor="item2" className="section-content">
                      Obtain certified copy of medical and dental records
                    </label>
                  </li>
                  <li className="checklist-item">
                    <input type="checkbox" id="item3" />
                    <label htmlFor="item3" className="section-content">
                      Submit VA Form 21-526EZ for BDD claim (180-90 days out)
                    </label>
                  </li>
                  <li className="checklist-item">
                    <input type="checkbox" id="item4" />
                    <label htmlFor="item4" className="section-content">
                      Review and sign DD Form 2656 for retirement pay &amp; SBP
                    </label>
                  </li>
                </ul>
              </div>
              <div id="spouse-tab" role="tabpanel" className="tab-panel">
                <ul className="checklist-items">
                  <li className="checklist-item">
                    <input type="checkbox" id="s-item1" />
                    <label htmlFor="s-item1" className="section-content">
                      Verify DEERS eligibility for retiree spouse ID card
                    </label>
                  </li>
                  <li className="checklist-item">
                    <input type="checkbox" id="s-item2" />
                    <label htmlFor="s-item2" className="section-content">
                      Attend Spousal TAP briefing for benefit overview
                    </label>
                  </li>
                  <li className="checklist-item">
                    <input type="checkbox" id="s-item3" />
                    <label htmlFor="s-item3" className="section-content">
                      Review TRICARE Select vs Prime options for the family
                    </label>
                  </li>
                </ul>
              </div>
              <div id="guard-tab" role="tabpanel" className="tab-panel">
                <ul className="checklist-items">
                  <li className="checklist-item">
                    <input type="checkbox" id="g-item1" />
                    <label htmlFor="g-item1" className="section-content">
                      Calculate &quot;Gray Area&quot; retirement points and
                      timeline
                    </label>
                  </li>
                  <li className="checklist-item">
                    <input type="checkbox" id="g-item2" />
                    <label htmlFor="g-item2" className="section-content">
                      Verify eligibility for Reduced Age Retirement (if
                      applicable)
                    </label>
                  </li>
                  <li className="checklist-item">
                    <input type="checkbox" id="g-item3" />
                    <label htmlFor="g-item3" className="section-content">
                      Enroll in TRICARE Retired Reserve until age 60
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title retirement---benefits-section-title">
              Official Resources &amp; Portals
            </h2>
            <p className="section-content">
              Verified links to federal and state programs. Last updated:
              October 2023.
            </p>
          </div>
          <div className="retirement---benefits-resources-grid">
            <div className="retirement---benefits-resource-card">
              <h3 className="section-subtitle">VA.gov Portal</h3>
              <p className="section-content">
                The central hub for disability claims, education benefits (GI
                Bill), and healthcare management.
              </p>
              <a href="https://www.va.gov">
                <div className="btn-link btn">
                  <span>
                    {' '}
                    Visit VA.gov
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="retirement---benefits-resource-card">
              <h3 className="section-subtitle">TRICARE Retiree Site</h3>
              <p className="section-content">
                Compare plans, check costs, and find providers in your new
                civilian location.
              </p>
              <a href="https://tricare.mil/retirees">
                <div className="btn-link btn">
                  <span>
                    {' '}
                    View TRICARE
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="retirement---benefits-resource-card">
              <h3 className="section-subtitle">MilConnect (DEERS)</h3>
              <p className="section-content">
                Update your contact information and manage your family&apos;s
                benefits eligibility.
              </p>
              <a href="https://milconnect.dmdc.osd.mil">
                <div className="btn-link btn">
                  <span>
                    {' '}
                    Go to MilConnect
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="retirement---benefits-resource-card">
              <h3 className="section-subtitle">DFAS Retiree Pay</h3>
              <p className="section-content">
                Manage your allotments, view 1099-R forms, and update your SBP
                beneficiaries.
              </p>
              <a href="https://www.dfas.mil">
                <div className="btn-link btn">
                  <span>
                    {' '}
                    Access DFAS
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title retirement---benefits-section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-content">
              Plain-language answers to common transition concerns.
            </p>
          </div>
          <div className="faq-accordion">
            <details className="faq-item">
              <summary>
                <span className="section-subtitle">
                  When will I receive my first retirement check?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-content">
                <p className="section-content">
                  Retirement pay is paid in arrears. Your first check typically
                  arrives on the first business day of the month following your
                  first full month of retirement. For example, if you retire
                  June 1, your first check is August 1.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span className="section-subtitle">
                  Can I keep my Dental and Vision coverage?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-content">
                <p className="section-content">
                  Yes, retirees are eligible for the Federal Employees Dental
                  and Vision Insurance Program (FEDVIP). Enrollment is handled
                  through BENEFEDS and is separate from your TRICARE health
                  enrollment.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span className="section-subtitle">
                  How does VA disability affect my retirement pay?
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-content">
                <p className="section-content">
                  If your disability rating is 50% or higher, you are typically
                  eligible for Concurrent Retirement and Disability Pay (CRDP),
                  allowing you to receive both full payments. Below 50%, there
                  is usually a dollar-for-dollar offset unless you qualify for
                  CRSC.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="container section-header">
          <h2 className="section-title retirement---benefits-section-title">
            Voices from the Community
          </h2>
          <p className="section-content">
            Real stories from veterans and families who have walked the path
            before you.
          </p>
        </div>
        <div className="card-rail">
          <div className="retirement---benefits-testimonial-card">
            <p className="section-content">
              &quot;The Military Brief&apos;s timeline was my bible during my
              last year in the Army. I would have missed my BDD window without
              it.&quot;
            </p>
            <div className="retirement---benefits-testimonial-author">
              <span className="section-subtitle">SFC(R) Marcus J.</span>
              <span className="section-content">Retired 2022</span>
            </div>
          </div>
          <div className="retirement---benefits-testimonial-card">
            <p className="section-content">
              &quot;As a spouse, I felt lost during the transition. Having a
              clear checklist for my own benefits made a world of difference for
              our family.&quot;
            </p>
            <div className="retirement---benefits-testimonial-author">
              <span className="section-subtitle">Sarah T.</span>
              <span className="section-content">Military Spouse</span>
            </div>
          </div>
          <div className="retirement---benefits-testimonial-card">
            <p className="section-content">
              &quot;The explanation of CRDP vs CRSC finally made sense. No one
              at my unit could explain it this clearly. Highly
              recommended.&quot;
            </p>
            <div className="retirement---benefits-testimonial-author">
              <span className="section-subtitle">LCDR(R) Elena V.</span>
              <span className="section-content">Navy Veteran</span>
            </div>
          </div>
          <div className="retirement---benefits-testimonial-card">
            <p className="section-content">
              &quot;I was in the &apos;Gray Area&apos; for three years. This
              site helped me navigate the TRICARE Retired Reserve options
              perfectly.&quot;
            </p>
            <div className="retirement---benefits-testimonial-author">
              <span className="section-subtitle">MSG(R) David K.</span>
              <span className="section-content">National Guard</span>
            </div>
          </div>
        </div>
      </section>
      <div className="retirement-benefits-container19">
        <div className="retirement-benefits-container20">
          <Script
            html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="retirement-benefits-container21">
        <div className="retirement-benefits-container22">
          <Script
            html={`<script defer data-name="benefits-page-logic">
(function(){
  // Tab Switching Logic
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabPanels = document.querySelectorAll(".tab-panel")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const target = trigger.getAttribute("data-target")

      // Update triggers
      tabTriggers.forEach((t) => t.classList.remove("active"))
      trigger.classList.add("active")

      // Update panels
      tabPanels.forEach((p) => {
        p.classList.remove("active")
        if (p.id === target) {
          p.classList.add("active")
        }
      })
    })
  })

  // Simple Scroll Reveal for Testimonials
  const rail = document.querySelector(".card-rail")
  let isDown = false
  let startX
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

  // Accordion Mutually Exclusive Behavior (Optional enhancement)
  const allDetails = document.querySelectorAll("details")
  allDetails.forEach((details) => {
    details.addEventListener("toggle", (e) => {
      if (details.open) {
        allDetails.forEach((d) => {
          if (d !== details && d.parentElement === details.parentElement) {
            d.removeAttribute("open")
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

export default RetirementBenefits
