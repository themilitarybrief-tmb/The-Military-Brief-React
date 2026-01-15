import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing14.css'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing14-thq-pricing23-elm thq-section-padding">
      <div className="pricing14-thq-max-width-elm thq-section-max-width">
        <div className="pricing14-thq-section-title-elm">
          <span className="pricing14-thq-text-elm10 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="pricing14-text33">
                  Choose the perfect plan for you
                </span>
              </Fragment>
            )}
          </span>
          <div className="pricing14-thq-content-elm">
            <h2 className="pricing14-thq-text-elm11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="pricing14-text35">Pricing plan</span>
                </Fragment>
              )}
            </h2>
            <p className="pricing14-thq-text-elm12 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="pricing14-text57">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="pricing14-thq-tabs-elm">
          {isMonthly === true && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing14-button1 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing14-button2 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing14-button3 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly === true && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing14-button4 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly === true && (
          <div className="pricing14-container1">
            <div className="pricing14-thq-column-elm1 thq-card">
              <div className="pricing14-thq-price-elm10">
                <div className="pricing14-thq-price-elm11">
                  <p className="pricing14-thq-text-elm17 thq-body-large">
                    {props.plan1 ?? (
                      <Fragment>
                        <span className="pricing14-text37">Basic Plan</span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing14-thq-text-elm18 thq-heading-3">
                    {props.plan1Price ?? (
                      <Fragment>
                        <span className="pricing14-text59">$9.99/month</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-large">
                    {props.plan1Yearly ?? (
                      <Fragment>
                        <span className="pricing14-text54">$99/year</span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing14-thq-list-elm1">
                  <div className="pricing14-thq-list-item-elm10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text55">
                            Access to all evergreen briefings
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text16">
                            Policy updates directly to your inbox
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text53">
                            Exclusive Q&amp;A sessions with military experts
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-thq-button-elm1 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action ?? (
                    <Fragment>
                      <span className="pricing14-text13">Sign Up Now</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-thq-column-elm2 thq-card">
              <div className="pricing14-thq-price-elm12">
                <div className="pricing14-thq-price-elm13">
                  <p className="pricing14-thq-text-elm24 thq-body-large">
                    {props.plan2 ?? (
                      <Fragment>
                        <span className="pricing14-text29">Business plan</span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing14-thq-text-elm25 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="pricing14-text43">$29/mo</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-large">
                    {props.plan2Yearly ?? (
                      <Fragment>
                        <span className="pricing14-text23">or $299 yearly</span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing14-thq-list-elm2">
                  <div className="pricing14-thq-list-item-elm13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text34">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text20">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text27">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4 ?? (
                        <Fragment>
                          <span className="pricing14-text22">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-thq-button-elm2 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan2Action ?? (
                    <Fragment>
                      <span className="pricing14-text25">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-thq-column-elm3 thq-card">
              <div className="pricing14-thq-price-elm14">
                <div className="pricing14-thq-price-elm15">
                  <p className="pricing14-thq-text-elm32 thq-body-large">
                    {props.plan3 ?? (
                      <Fragment>
                        <span className="pricing14-text60">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="pricing14-thq-text-elm33 thq-heading-3">
                    {props.plan3Price ?? (
                      <Fragment>
                        <span className="pricing14-text10">$49/mo</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-large">
                    {props.plan3Yearly ?? (
                      <Fragment>
                        <span className="pricing14-text49">or $499 yearly</span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing14-thq-list-elm3">
                  <div className="pricing14-thq-list-item-elm17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text26">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text32">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text56">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4 ?? (
                        <Fragment>
                          <span className="pricing14-text50">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5 ?? (
                        <Fragment>
                          <span className="pricing14-text41">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-thq-button-elm3 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan3Action ?? (
                    <Fragment>
                      <span className="pricing14-text11">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
        {isMonthly === false && (
          <div className="pricing14-container2">
            <div className="pricing14-thq-column-elm4 thq-card">
              <div className="pricing14-thq-price-elm16">
                <div className="pricing14-thq-price-elm17">
                  <span className="pricing14-thq-text-elm41 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="pricing14-text12">Basic plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing14-thq-text-elm42 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="pricing14-text28">$19.99/month</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text47">$199/year</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-thq-list-elm4">
                  <div className="pricing14-thq-list-item-elm22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text39">
                            Priority customer support
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text40">
                            Early access to new features
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text52">
                            Customized policy recommendations
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-thq-button-elm4 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text24">
                        Sign Up Now for Premium Features
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-thq-column-elm5 thq-card">
              <div className="pricing14-thq-price-elm18">
                <div className="pricing14-thq-price-elm19">
                  <span className="pricing14-thq-text-elm48 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="pricing14-text38">Business plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing14-thq-text-elm49 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="pricing14-text48">$299/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text42">or $29 monthly</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-thq-list-elm5">
                  <div className="pricing14-thq-list-item-elm25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text17">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text30">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text45">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="pricing14-text19">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-thq-button-elm5 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text31">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-thq-column-elm6 thq-card">
              <div className="pricing14-thq-price-elm20">
                <div className="pricing14-thq-price-elm21">
                  <span className="pricing14-thq-text-elm56 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="pricing14-text14">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="pricing14-thq-text-elm57 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="pricing14-text51">$499/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text44">or $49 monthly</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-thq-list-elm6">
                  <div className="pricing14-thq-list-item-elm29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text46">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text21">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text36">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="pricing14-text15">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-item-elm33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="pricing14-text18">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-thq-button-elm6 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text58">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing14.defaultProps = {
  plan3Price: undefined,
  plan3Action: undefined,
  plan11: undefined,
  plan1Action: undefined,
  plan31: undefined,
  plan3Feature41: undefined,
  plan1Feature2: undefined,
  plan2Feature11: undefined,
  plan3Feature51: undefined,
  plan2Feature41: undefined,
  plan2Feature2: undefined,
  plan3Feature21: undefined,
  plan2Feature4: undefined,
  plan2Yearly: undefined,
  plan1Action1: undefined,
  plan2Action: undefined,
  plan3Feature1: undefined,
  plan2Feature3: undefined,
  plan1Price1: undefined,
  plan2: undefined,
  plan2Feature21: undefined,
  plan2Action1: undefined,
  plan3Feature2: undefined,
  content1: undefined,
  plan2Feature1: undefined,
  heading1: undefined,
  plan3Feature31: undefined,
  plan1: undefined,
  plan21: undefined,
  plan1Feature11: undefined,
  plan1Feature21: undefined,
  plan3Feature5: undefined,
  plan2Yearly1: undefined,
  plan2Price: undefined,
  plan3Yearly1: undefined,
  plan2Feature31: undefined,
  plan3Feature11: undefined,
  plan1Yearly1: undefined,
  plan2Price1: undefined,
  plan3Yearly: undefined,
  plan3Feature4: undefined,
  plan3Price1: undefined,
  plan1Feature31: undefined,
  plan1Feature3: undefined,
  plan1Yearly: undefined,
  plan1Feature1: undefined,
  plan3Feature3: undefined,
  content2: undefined,
  plan3Action1: undefined,
  plan1Price: undefined,
  plan3: undefined,
}

Pricing14.propTypes = {
  plan3Price: PropTypes.element,
  plan3Action: PropTypes.element,
  plan11: PropTypes.element,
  plan1Action: PropTypes.element,
  plan31: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Action: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan2: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  content1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  heading1: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan1: PropTypes.element,
  plan21: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan3Feature3: PropTypes.element,
  content2: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3: PropTypes.element,
}

export default Pricing14
