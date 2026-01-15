import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-thq-image-container-elm">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-thq-tabs-menu-elm">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-thq-tab-horizontal-elm1"
          >
            <div className="features24-thq-divider-container-elm1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-thq-content-elm1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text4">Policy Briefings</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text5">
                      Access concise and clear briefings on military policies
                      that matter to you.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-thq-tab-horizontal-elm2"
          >
            <div className="features24-thq-divider-container-elm2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-thq-content-elm2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features24-text6">TRICARE Changes</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text3">
                      Understand the changes in TRICARE coverage and how they
                      affect your healthcare options.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-thq-tab-horizontal-elm3"
          >
            <div className="features24-thq-divider-container-elm3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-thq-content-elm3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features24-text2">
                      VA Benefits Updates
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text1">
                      Stay informed about the latest updates on VA benefits and
                      how they impact you and your family.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature1ImgAlt: 'Military personnel discussing policy changes',
  feature3Description: undefined,
  feature3Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1765939946894-67680f87b8cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1675019645853-129e134b3c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'Veteran receiving medical care at a VA facility',
  feature1Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1641945512394-f710ce49b33e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImgAlt: 'TRICARE logo with a stethoscope',
  feature2Title: undefined,
}

Features24.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features24
