import React, { Fragment } from 'react'
import Head from 'next/head'

import Footer1 from '../components/footer1'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>dyoid</title>
          <meta property="og:title" content="dyoid" />
      <meta content="Upplev hur fantasi och expertis smälter samman med våra kvalitetsprodukter och moddar. Alltid med den personliga stil du vill ha." name="description" />
    <link rel="icon" href="/favicon.png" />
    <link href="/webclip.png" rel="apple-touch-icon" />
        </Head>
        <section className="home-section">
          <header className="home-navbar">
            <a
              href="https://dyoid.se/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <h1 className="home-text1">dyoid</h1>
            </a>
          </header>
          <div className="home-hero">
            <h1 className="home-heading">.bydesign</h1>
            <main className="home-main"></main>
            <div className="home-image1">
              <a
                href="https://tjanstapp.webflow.io/carusel-gallery"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <img
                  alt="image"
                  src="/xboxalienscribe800800-800w.png"
                  className="home-image2"
                />
              </a>
            </div>
          </div>
          <div className="home-container2">
            <div className="home-buttons">
              <a
                href="https://shop.dyoid.se/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <div className="home-get-started1 button">
                  <span className="home-text2">In English</span>
                </div>
              </a>
              <a
                href="https://tjanstapp.webflow.io/carusel-gallery"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <div className="home-get-started2 button">
                  <span className="home-text3">Spelkontroller</span>
                </div>
              </a>
              <a
                href="https://dyoid.wuaze.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <div className="home-get-started3 button">
                  <span className="home-text4">Våra projekt</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <Footer1
          heading1={
            <Fragment>
              <span className="home-text5">Villkor</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="home-text6">Kontakt</span>
            </Fragment>
          }
          heading12={
            <Fragment>
              <span className="home-text7">Frakt</span>
            </Fragment>
          }
          heading111={
            <Fragment>
              <span className="home-text8">EN</span>
            </Fragment>
          }
          rootClassName="footer1root-class-name"
        ></Footer1>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #0f0f0f;
          }
          .home-section {
            width: 100%;
            height: 750px;
            display: flex;
            align-items: center;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: 100%;
            align-self: flex-start;
            align-items: center;
            flex-shrink: 1;
            margin-left: 0px;
            padding-top: 0px;
            padding-left: 250px;
            padding-right: 0px;
            padding-bottom: 0px;
            justify-content: flex-start;
            background-color: #3f3f3f;
          }
          .home-link1 {
            display: contents;
          }
          .home-text1 {
            color: #ffffff;
            padding-left: 200px;
            padding-right: var(--dl-space-space-sixunits);
            text-decoration: none;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            height: 88px;
            z-index: 100;
            font-size: 64px;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            height: 325px;
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 0px;
            flex-direction: column;
          }
          .home-image1 {
            top: 150px;
            right: 0px;
            width: 650px;
            height: 900px;
            margin: auto;
            display: flex;
            z-index: 50;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link2 {
            display: contents;
          }
          .home-image2 {
            top: -115px;
            left: -405px;
            width: 731px;
            height: 620px;
            margin: auto;
            z-index: 50;
            position: absolute;
            margin-top: auto;
            object-fit: cover;
            margin-bottom: auto;
            text-decoration: none;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            z-index: 200;
            align-items: center;
            flex-direction: row;
          }
          .home-link3 {
            display: contents;
          }
          .home-get-started1 {
            display: flex;
            z-index: 200;
            padding-top: 20px;
            border-color: #8a8a8a;
            border-width: 1px;
            padding-bottom: 20px;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0);
          }
          .home-text2 {
            color: #f3f3f3;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 900;
            line-height: 24px;
          }
          .home-link4 {
            display: contents;
          }
          .home-get-started2 {
            z-index: 200;
            padding-top: 20px;
            border-color: #8a8a8a;
            border-width: 1px;
            padding-bottom: 20px;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0);
          }
          .home-text3 {
            color: #dadada;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 900;
            line-height: 24px;
          }
          .home-link5 {
            display: contents;
          }
          .home-get-started3 {
            z-index: 200;
            padding-top: 20px;
            border-color: #8a8a8a;
            border-width: 1px;
            padding-bottom: 20px;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0);
          }
          .home-text4 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 900;
            line-height: 24px;
          }
          .home-text5 {
            color: #ffffff;
            display: inline-block;
            font-size: 14px;
            font-family: 'Poppins';
          }
          .home-text6 {
            color: #ffffff;
            display: inline-block;
            font-size: 14px;
            font-family: 'Poppins';
          }
          .home-text7 {
            color: #ffffff;
            display: inline-block;
            font-size: 14px;
            font-family: 'Poppins';
          }
          .home-text8 {
            color: #ffffff;
            display: inline-block;
            font-size: 14px;
            font-family: 'Poppins';
          }
          @media (max-width: 1600px) {
            .home-container1 {
              justify-content: center;
            }
            .home-section {
              height: 832px;
            }
            .home-navbar {
              width: 1486px;
              max-width: 100%;
              align-self: flex-start;
              margin-top: 0px;
              align-items: center;
              margin-left: 0px;
              padding-top: 0px;
              margin-right: 0px;
              padding-left: 200px;
              margin-bottom: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
              justify-content: flex-start;
              background-color: #3f3f3f;
            }
            .home-text1 {
              color: #eaeaea;
              padding-left: var(--dl-space-space-halfunit);
            }
            .home-hero {
              z-index: 100;
            }
            .home-heading {
              color: rgb(255, 255, 255);
              width: 744px;
              height: 73px;
              font-size: 64px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              text-transform: uppercase;
            }
            .home-main {
              width: 695px;
              border-style: solid;
              border-width: 0px;
            }
            .home-image2 {
              top: 1px;
              left: -240px;
              width: 704px;
              height: 428px;
              z-index: 30;
              margin-left: 0px;
            }
            .home-container2 {
              z-index: 200;
            }
            .home-buttons {
              z-index: 200;
            }
            .home-get-started1 {
              padding-top: 20px;
              border-color: #a8a8a8;
              border-width: 1px;
              padding-bottom: 20px;
              background-color: rgba(0, 0, 0, 0);
            }
            .home-text2 {
              font-style: normal;
              font-weight: 900;
            }
            .home-get-started2 {
              padding-top: 20px;
              border-width: 1px;
              padding-bottom: 20px;
            }
            .home-get-started3 {
              z-index: 100;
              padding-top: 20px;
              border-color: #8a8a8a;
              border-width: 1px;
              padding-bottom: 20px;
              background-color: rgba(0, 0, 0, 0);
            }
            .home-text4 {
              font-style: normal;
              font-weight: 900;
            }
            .home-text5 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
            }
            .home-text6 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
            }
            .home-text7 {
              color: #ffffff;
              font-size: 14px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 700;
            }
            .home-text8 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
            }
          }
          @media (max-width: 1200px) {
            .home-container1 {
              justify-content: center;
            }
            .home-section {
              height: 648px;
              position: relative;
            }
            .home-navbar {
              width: auto;
              margin-top: 0px;
              align-items: center;
              margin-left: 0px;
              padding-top: 0px;
              margin-right: 0px;
              padding-left: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
              justify-content: flex-start;
              background-color: #3f3f3f;
            }
            .home-text1 {
              color: rgb(255, 255, 255);
              width: var(--dl-size-size-maxwidth);
              padding-left: 250px;
              padding-right: 0px;
              text-decoration: none;
            }
            .home-heading {
              color: #ffffff;
              width: 774px;
              font-size: 64px;
              align-self: flex-start;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              padding-left: 136px;
            }
            .home-main {
              height: 281px;
              align-self: center;
            }
            .home-image1 {
              height: 417px;
            }
            .home-image2 {
              top: -172px;
              left: -44px;
              width: 666px;
              height: 684px;
            }
            .home-container2 {
              top: 421px;
              left: 0px;
              height: 142px;
              position: absolute;
            }
            .home-buttons {
              width: 1200px;
              height: 100%;
              justify-content: center;
            }
            .home-get-started1 {
              padding-top: 20px;
              border-color: #8a8a8a;
              border-width: 1px;
              padding-bottom: 20px;
              background-color: rgba(0, 0, 0, 0);
            }
            .home-text2 {
              color: #ffffff;
            }
            .home-get-started2 {
              padding-top: 20px;
              border-color: #8a8a8a;
              border-width: 1px;
              padding-bottom: 20px;
              background-color: rgba(0, 0, 0, 0);
            }
            .home-text3 {
              color: #ffffff;
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 900;
              line-height: 24px;
            }
            .home-get-started3 {
              z-index: 200;
              padding-top: 20px;
              border-color: #8a8a8a;
              border-width: 1px;
              padding-bottom: 20px;
              background-color: rgba(0, 0, 0, 0);
            }
            .home-text4 {
              color: #ffffff;
            }
            .home-text5 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
              letter-spacing: 2px;
            }
            .home-text6 {
              color: #ffffff;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text7 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
            }
            .home-text8 {
              color: #ffffff;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 991px) {
            .home-container1 {
              align-items: center;
              justify-content: center;
            }
            .home-section {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-navbar {
              height: 26px;
              align-items: center;
              margin-left: 0px;
              margin-top:60px;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .home-text1 {
              color: rgb(255, 255, 255);
              text-decoration: none;
            }
            .home-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              height: 677px;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-heading {
              width: 779px;
              height: 89px;
              align-self: center;
              text-align: left;
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-main {
              width: 991px;
              height: 484px;
              align-self: stretch;
              align-items: center;
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image1 {
              right: 0px;
              display: none;
              position: absolute;
              flex-direction: column;
            }
            .home-container2 {
              top: 0px;
              left: 0px;
              right: 0px;
              bottom: 0px;
              height: 109px;
              margin: auto;
            }
            .home-buttons {
              width: 736px;
            }
            .home-get-started1 {
              flex: 1;
            }
            .home-get-started2 {
              flex: 1;
            }
            .home-get-started3 {
              flex: 1;
            }
            .home-text6 {
              font-style: normal;
              font-weight: 700;
            }
            .home-text8 {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 767px) {
            .home-container1 {
              align-items: center;
              justify-content: center;
            }
            .home-navbar {
              width: 767px;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-top:60px;
              padding-top: var(--dl-space-space-halfunit);
              margin-right: 0px;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .home-text1 {
              align-self: center;
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-hero {
              height: 1160px;
              align-items: center;
              padding-top: 0px;
              justify-content: center;
            }
            .home-heading {
              width: 760px;
              height: 51px;
              font-size: 40px;
              align-self: center;
              text-align: center;
              padding-bottom: 0px;
            }
            .home-main {
              width: 767px;
              height: 411px;
              align-self: center;
              padding-top: 0px;
              margin-right: 0px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-buttons {
              flex-direction: column;
              margin-top:80px;
            }
            .home-get-started1 {
              width: 205px;
              padding-top: 20px;
              padding-bottom: 20px;
            }
            .home-get-started2 {
              width: 205px;
              margin: 0px;
            }
            .home-get-started3 {
              width: 210px;
            }
            .home-text6 {
              font-style: normal;
              font-weight: 700;
            }
            .home-text8 {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              width: 479px;
              height: 30px;
              padding: 0px;
              margin-top:60px;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .home-text1 {
              align-self: center;
              text-align: center;
              border-color: var(--dl-color-gray-black);
              border-width: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-hero {
              height: 785px;
            }
            .home-heading {
              height: 52px;
              max-width: 280px;
            }
            .home-main {
              width: 479px;
              height: 401px;
              margin-top: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-buttons {
              width: 100%;
              margin-top:80px;
            }
            .home-get-started1 {
              padding-top: 20px;
              padding-bottom: 20px;
            }
            .home-get-started2 {
              width: 205px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-text6 {
              font-style: normal;
              font-weight: 700;
            }
            .home-text8 {
              font-style: normal;
              font-weight: 700;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
