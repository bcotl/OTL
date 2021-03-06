import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.jpg'
// import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        style={{backgroundColor: "#FAF3E7"}}
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div style={{color: "#EDE6CD", fontSize: "18px", padding: "2rem"}}>
            <Link to="/" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
              Our Traces Logged
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              {/* <Link className="navbar-item" to="/products">
                Products
              </Link> */}
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              {/* <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            <div className="has-text-centered unicorn">
              {/* <a 
                // className="navbar-item"
                // href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              //   target="_blank"
              //   rel="noopener noreferrer"
              // >*/}
                
                  <img src={github} alt="Github" />
                
              {/* </a> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
