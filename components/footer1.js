import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Footer1 = (props) => {
  return (
    <>
      <footer
        className={`footer1-footer1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer1-container">
          <a
            href="https://dyoid.wuaze.com/kopvillkor-fran-privat-verksamhet/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer1-link1"
          >
            <h3 className="footer1-text1">
              {props.heading1 ?? (
                <Fragment>
                  <h3 className="footer1-text7">Villkor</h3>
                </Fragment>
              )}
            </h3>
          </a>
          <a
            href="https://dyoid.wuaze.com/fraktvillkor/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer1-link2"
          >
            <h3 className="footer1-text2">
              {props.heading12 ?? (
                <Fragment>
                  <h3 className="footer1-text8">Frakt</h3>
                </Fragment>
              )}
            </h3>
          </a>
          <a
            href="https://dyoid.wuaze.com/kontakt/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer1-link3"
          >
            <h3 className="footer1-text3">
              {props.heading11 ?? (
                <Fragment>
                  <h3 className="footer1-text6">Kontakt</h3>
                </Fragment>
              )}
            </h3>
          </a>
          <a
            href="https://shop.dyoid.se/collections/all"
            target="_blank"
            rel="noreferrer noopener"
            className="footer1-link4"
          >
            <h3 className="footer1-text4">
              {props.heading111 ?? (
                <Fragment>
                  <h3 className="footer1-text5">EN</h3>
                </Fragment>
              )}
            </h3>
          </a>
        </div>
      </footer>
      <style jsx>
        {`
          .footer1-footer1 {
            width: 100%;
            height: 420px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            padding-top: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            background-color: #232323;
          }
          .footer1-container {
            gap: var(--dl-space-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .footer1-link1 {
            display: contents;
          }
          .footer1-text1 {
            text-decoration: none;
          }
          .footer1-link2 {
            display: contents;
          }
          .footer1-text2 {
            text-decoration: none;
          }
          .footer1-link3 {
            display: contents;
          }
          .footer1-text3 {
            text-decoration: none;
          }
          .footer1-link4 {
            display: contents;
          }
          .footer1-text4 {
            text-decoration: none;
          }
          .footer1-text5 {
            color: #ffffff;
            display: inline-block;
            font-size: 14px;
            font-family: 'Poppins';
          }
          .footer1-text6 {
            color: #ffffff;
            display: inline-block;
            font-size: 14px;
            font-family: 'Poppins';
          }
          .footer1-text7 {
            color: #ffffff;
            display: inline-block;
            font-size: 14px;
            font-family: 'Poppins';
          }
          .footer1-text8 {
            color: #ffffff;
            display: inline-block;
            font-size: 14px;
            font-family: 'Poppins';
          }

          @media (max-width: 1600px) {
            .footer1-footer1 {
              height: 373px;
              align-items: center;
              padding-bottom: 0px;
              justify-content: flex-start;
              background-color: #232323;
            }
            .footer1-container {
              gap: var(--dl-space-space-threeunits);
              height: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer1-text5 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
            }
            .footer1-text6 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
            }
            .footer1-text7 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
            }
            .footer1-text8 {
              color: #ffffff;
              font-size: 14px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 700;
            }
          }
          @media (max-width: 1200px) {
            .footer1-footer1 {
              width: 1200px;
              height: 356px;
              flex-direction: row;
              justify-content: center;
              background-color: #232323;
            }
            .footer1-container {
              gap: var(--dl-space-space-twounits);
            }
            .footer1-text5 {
              color: #ffffff;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
            }
            .footer1-text6 {
              color: #ffffff;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
            }
            .footer1-text7 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
              letter-spacing: 2px;
            }
            .footer1-text8 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
            }
            .footer1root-class-name {
              background-color: #232323;
            }
          }
          @media (max-width: 991px) {
            .footer1-footer1 {
              width: 991px;
              margin-right: 0px;
            }
            .footer1-text5 {
              font-style: normal;
              font-weight: 700;
            }
            .footer1-text6 {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 767px) {
            .footer1-footer1 {
              width: 767px;
            }
            .footer1-container {
              flex-direction: column;
            }
            .footer1-text5 {
              font-style: normal;
              font-weight: 700;
            }
            .footer1-text6 {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 479px) {
            .footer1-footer1 {
              width: 479px;
            }
            .footer1-container {
              flex-direction: column;
            }
            .footer1-text5 {
              font-style: normal;
              font-weight: 700;
            }
            .footer1-text6 {
              font-style: normal;
              font-weight: 700;
            }
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  heading111: undefined,
  rootClassName: '',
  heading11: undefined,
  heading1: undefined,
  heading12: undefined,
}

Footer1.propTypes = {
  heading111: PropTypes.element,
  rootClassName: PropTypes.string,
  heading11: PropTypes.element,
  heading1: PropTypes.element,
  heading12: PropTypes.element,
}

export default Footer1
