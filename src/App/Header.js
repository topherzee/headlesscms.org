import React from 'react'
import { Link, RouteData, Head } from 'react-static'
import styled from 'styled-components'
import {
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'
import GitHubCorner from 'react-github-corner'
import logo from 'Images/headless-logo.svg'

const ShareButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin: 0 4px;
  }
`

const ShareButton = styled(({
  type, url, className, text,
}) => {
  const components = {
    twitter: { Button: TwitterShareButton, Icon: TwitterIcon },
    reddit: { Button: RedditShareButton, Icon: RedditIcon },
  }
  const { Button, Icon } = components[type]

  return (
    <Button url={url} title={text} className={className}>
      <Icon size={40} round iconBgStyle={{ fill: '#313d3e' }} />
    </Button>
  )
})`
  cursor: pointer;

  &:hover {
    circle {
      transition: fill 0.1s ease;
      fill: ${({ color }) => color} !important;
    }
  }
`

const AnnouncementBar = ({ className }) => (
  <div className={className}>
    <p>
      Share your JAMstack technology decisions and experiences. <a href="https://www.surveymonkey.com/r/DH9KZZT" target="_blank" rel="noopener noreferrer">Take&nbsp;the&nbsp;survey&nbsp;by&nbsp;April&nbsp;19</a>
    </p>
  </div>
)
const AnnouncementBarStyled = styled(AnnouncementBar)`
  background-color: #000;
  color: #fff;
  display: block;
  text-align: center;
  z-index: 200;
  margin: 0;
  padding: 0;
  width: 100%;
  p {
    margin: 0;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
  }
  a:link,
  a:visited {
    color: #00c7b7;
  }
`

const Header = () => (
  <RouteData
    render={({ title, shareUrl, shareText }) => (
      <div>
        <Head>
          <title>
            {`${
              title
                ? `${title} | headlessCMS`
                : 'headlessCMS | Top Content Management Systems for JAMstack sites'
            }`}
          </title>
        </Head>
        <AnnouncementBarStyled />
        <div className="hero">
          <h1>
            <Link to="/" title="headlessCMS">
              <img alt="headlessCMS" src={logo} />
            </Link>
          </h1>
          <h2>A List of Content Management Systems for JAMstack Sites</h2>

          <ShareButtonWrapper>
            <ShareButton
              type="twitter"
              url={shareUrl}
              color="#1da1f2"
              text={shareText}
            />
            <ShareButton
              type="reddit"
              url={shareUrl}
              color="#ff4500"
              text={shareText}
            />
          </ShareButtonWrapper>

          <GitHubCorner
            href="https://github.com/netlify/headlesscms.org"
            bannerColor="#24292e"
            size="90"
            svgStyle={{ zIndex: 300 }}
          />
        </div>
        <div className="navbar">
          <div className="container">
            <div className="menu left">
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contribute">Contribute</Link>
                </li>
                <li>
                  <a
                    href="https://jamstack.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    What is JAMstack?
                  </a>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default Header
