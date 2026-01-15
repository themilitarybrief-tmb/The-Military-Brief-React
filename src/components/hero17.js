import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-thq-header78-elm">
      <div className="hero17-thq-column-elm thq-section-padding thq-section-max-width">
        <div className="hero17-thq-content-elm1">
          <h1 className="hero17-thq-text-elm1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text3">
                  Medium length hero headline goes here
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-thq-text-elm2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-thq-actions-elm">
          <button className="thq-button-filled hero17-thq-button-elm1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text2">Main action</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-thq-button-elm2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text1">Secondary action</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-thq-content-elm2">
        <div className="hero17-thq-row-container-elm1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-thq-placeholder-image-elm10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-thq-placeholder-image-elm11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-thq-placeholder-image-elm12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-thq-placeholder-image-elm13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-thq-placeholder-image-elm14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-thq-placeholder-image-elm15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-thq-placeholder-image-elm16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-thq-placeholder-image-elm17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-thq-placeholder-image-elm18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-thq-placeholder-image-elm19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-thq-placeholder-image-elm20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-thq-placeholder-image-elm21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-thq-row-container-elm2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-thq-placeholder-image-elm22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-thq-placeholder-image-elm23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-thq-placeholder-image-elm24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-thq-placeholder-image-elm25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-thq-placeholder-image-elm26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-thq-placeholder-image-elm27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-thq-placeholder-image-elm28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-thq-placeholder-image-elm29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-thq-placeholder-image-elm30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-thq-placeholder-image-elm31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-thq-placeholder-image-elm32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-thq-placeholder-image-elm33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1758686254493-d73c9c2a3049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image8Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1767081696883-a3c00cd4902d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image6Alt: 'Hero Image',
  image11Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image5Alt: 'Hero Image',
  image1Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1742413628280-8bfae633391b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image7Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1726916816277-0d96af850a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image12Src:
    'https://images.unsplash.com/photo-1571450777324-9633b5e5521a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1758204054993-6e11190bce9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image11Alt: 'Hero Image',
  action2: undefined,
  action1: undefined,
  image8Src:
    'https://images.unsplash.com/photo-1765824142326-8e9046b1f935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1763842693142-b9a4d0bf4586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1612245292651-227fe0acc094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image10Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  heading1: undefined,
  content1: undefined,
  image10Src:
    'https://images.unsplash.com/photo-1661113248125-ef191010f2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image9Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1612277794960-b45e89e37843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc2ODQ2NDk2Nnw&ixlib=rb-4.1.0&q=80&w=1080',
}

Hero17.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero17
