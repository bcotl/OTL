import React from 'react'
import ReactPlayer from 'react-player'

import logo from '../img/logo.jpg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer footerBG has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="B <3 C"
            style={{ width: '35em', height: '15em', borderRadius: '2%'}}
          />
        </div>
        {/* <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4"> */}
                <ReactPlayer url="https://soundcloud.com/birna-dam/sets/bcotl" width="100%" height="0%" playing />
              {/* </div>
            </div>
          </div>
        </div> */}
      </footer>
    )
  }
}

export default Footer
