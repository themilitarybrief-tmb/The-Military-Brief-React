import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-thq-tabs-menu-elm">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-thq-tab-horizontal-elm1"
          >
            <div className="features25-thq-divider-container-elm1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-thq-content-elm1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text4">Expert Analysis</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2">
                      Get in-depth analysis of military policies from experts in
                      the field.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-thq-tab-horizontal-elm2"
          >
            <div className="features25-thq-divider-container-elm2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-thq-content-elm2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text3">Policy Updates</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text5">
                      Stay informed with the latest updates on military policies
                      that impact you.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-thq-tab-horizontal-elm3"
          >
            <div className="features25-thq-divider-container-elm3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-thq-content-elm3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text6">Family Impact</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text1">
                      Understand how policy changes affect your family and
                      household.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-thq-image-container-elm">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3Description: undefined,
  feature1ImgAlt: 'Expert Analysis Image Alt Text',
  feature1Description: undefined,
  feature3ImgAlt: 'Family Impact Image Alt Text',
  feature2Title: undefined,
  feature1Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1726916816277-0d96af850a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1767081696372-0dc922eb7bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description: undefined,
  feature3Title: undefined,
  feature2ImgAlt: 'Policy Updates Image Alt Text',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1609264598837-8da9d456dd2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NHw&ixlib=rb-4.1.0&q=80&w=1080',
}

Features25.propTypes = {
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features25
