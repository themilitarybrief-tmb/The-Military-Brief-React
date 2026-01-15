import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-thq-max-width-elm thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-thq-section-header-elm">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-thq-actions-elm">
              <button className="thq-button-animated thq-button-filled steps2-thq-button-elm">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text26">
                      Explore Military Policies
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text11 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text22">
                      Browse through our evergreen briefings to gain clarity on
                      important military policies affecting service members,
                      veterans, and families.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text12 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text24">Stay Informed</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text14 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      Receive regular updates on policy changes related to
                      healthcare, TRICARE, PCS, housing, VA benefits, and
                      retirement to stay informed and prepared.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text27">Access Resources</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text17 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text23">
                      Find resources tailored to different service situations to
                      help navigate through policy changes that impact
                      households and military life.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      Connect with Community
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text20 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Join a community of service members, veterans, and
                      families to share insights, ask questions, and support
                      each other through the complexities of military policies.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description: undefined,
  step3Description: undefined,
  step2Title: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step4Title: undefined,
}

Steps2.propTypes = {
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step4Title: PropTypes.element,
}

export default Steps2
