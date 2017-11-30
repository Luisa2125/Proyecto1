import React from 'react'
import ReactDOM from 'react-dom'
import Parallax from 'react-springy-parallax'
import { BrowserRouter, Route, Link } from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isActive: false,
    }
  }

  render(){
    return(
      <BrowserRouter>
        <div id="site" className="fullpage-wrapper" style={{ height: "100%", position: "relative" }}>
          <Menu isActive={ this.state.isActive } close={ () =>  this.setState({ isActive: false })  }/>
          <IntroPage open={ () => this.setState({ isActive: true}) }/>
        </div>
      </BrowserRouter>
    )
  }
} 

const Menu = ({ isActive, close }) => ( 
  <nav className={ isActive ? "menu is-active" : "menu" }>
    <div className="menu_wrap" onClick={ () => close() }>
      <a className="close-toi">
        <span>MENU</span>
      </a>
    </div>
    <div className="half half70 half-black">
      <div className="links">
        <a href="">Home</a><br/>
        <a href="our-work">Our Work</a><br />
        <a href="about">About Us</a><br />
        <a href="contact">Contact Us</a>
      </div>
    </div>
    <div className="half half30 half-red">
      <div className="links">
        <span>Social</span>
        <a href="https://dribbble.com/toi" target="_blank">Dribbble</a>
        <a href="https://www.facebook.com/toishop" target="_blank">Facebook</a>
        <a href="https://twitter.com/toishop" target="_blank">Twitter</a>
        <a href="https://www.instagram.com/toishop/" target="_blank">Instagram</a>
        <div className="links-contact">
          <span>Contact</span>
            <li><a href="mailto:hello@toi.io">hello@toi.io</a></li>
            <li><a href="/contact">Email us</a></li>
            <li><a href="tel:+4158303010">415.830.3010</a></li>
            <li><a href="tel:+5128060305">512.806.0305</a></li>
        </div>
      </div>
    </div>
  </nav>
)

const Header = ({ open }) => (
  <header className="mainHeader headroom headroom--not-bottom headroom--pinned headroom--top">
    <div className="mainHeader__container">
      <div className="nav-trigger mainHeader__item" onClick={ () => open() }>
        <div className="desktop_">
          <span style={{ backgroundColor: "rgb(255, 255, 255)"}}></span>
          <span style={{ backgroundColor: "rgb(255, 255, 255)"}}></span>
          <span style={{ backgroundColor: "rgb(255, 255, 255)"}}></span>
        </div>
      </div>
      <div className="logo mainHeader__item">
        <img className="wh_ite" src="img/logo.svg" alt="Toi Logo" style={{opacity: "1"}} />
        <img className="bl_ack" src="img/logob.svg" alt="Toi Logo" style={{opacity: "0"}} />
      </div>
      <div className="mainHeader__item cta-desktop">
        <a href="#contact" className="btn-toi cta">Let's talk</a>
      </div>
      <div className="mainHeader__item cta-mobile">
        <a href="#contact">
          <img src="img/envelope.svg" alt="" />
        </a>
      </div>
    </div>
  </header>
)

const Intro = ({ open }) => (
  <section className="section hero fp-normal-scroll fp-section fp-table active fp-completely" style={{ height: "638px" }}>
    <div className="fp-tableCell" style={{ height: "638px" }}>
      <Header open={ open }/>
      <section>
        <div className="video-container">
          <video preload="auto" muted="" volume="0" id="videohero">
            <source type="video/mp4;codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" id="videosource" src="img/hero2.mp4" />
          </video>
          <div className="video-mobile" id="video-mobile" style={{ backgroundImage: "url(img/Hero-iMac.png)" }}/>
        </div>
        <div className="container">
          <div className="row">
            <div className="hero__text wow fadeIn" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeIn" }}>
              <object id="quote" />
              <img className="quote-b" src="img/quote-b.svg" alt="" />
              <h3>We believe great design can make a good idea even better.</h3>
              <h4>Toi is a full-service digital agency.</h4>
              <p className="p-cta">
                <a href="our-work" className="btn-toi wht-btn">View our Work</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="scroll animated fadeInUp">
              <a href="#we-listen"><span><img src="img/scroll.svg" alt=""/></span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
)

class IntroPage extends React.Component {
  render(){
    return(
      <Parallax ref='parallax' pages={4.5}>
        <Parallax.Layer
          offset={3.3}
          speed={0.5}>
            <Services />
        </Parallax.Layer>
        <Parallax.Layer
          offset={2.9}
          speed={0.5}>
            <Contact />
        </Parallax.Layer>
        <Parallax.Layer
          offset={2}
          speed={0.52}>
            <WeCreate />
        </Parallax.Layer>
        <Parallax.Layer
          offset={1.5}
          speed={0.45}>
            <WeLearn />
          </Parallax.Layer>
        <Parallax.Layer
          offset={0.99}
          speed={0.6}>
            <WeListen />
          </Parallax.Layer>
        <Parallax.Layer
          offset={0}
          speed={0.42}>
            <Intro open={ this.props.open }/>
        </Parallax.Layer>
      </Parallax>
    )
  }
}

const WeListen = () => (
  <section id="we-listen" className="section we-section we-listen fp-section fp-table active fp-completely" style={{ height: "638px" }} >
    <div className="fp-tableCell" style={{ height: "638px" }}>
      <div className="elements">
        <div className="we-listen-01" style={{ top: "-60px" }}><img src="img/we-listen-01.png" srcSet="img/we-listen-01.png 1x, img/we-listen-01@2x.png 2x" alt=""/></div>
        <div className="we-listen-02" style={{ left: "-40px" }}><img src="img/we-listen-02.png" srcSet="img/we-listen-02.png 1x, img/we-listen-02@2x.png 2x" alt=""/></div>
        <div className="we-listen-03" style={{ top: "-50px" }}><img src="img/we-listen-03.png" srcSet="img/we-listen-03.png 1x, img/we-listen-03@2x.png 2x" alt=""/></div>
        <div className="we-listen-04" style={{ right: "-30px" }}><img src="img/we-listen-04.png" srcSet="img/we-listen-04.png 1x, img/we-listen-04@2x.png 2x" alt=""/></div>
        <div className="we-listen-05" style={{ right: "0px" }}><img src="img/we-listen-05.png" srcSet="img/we-listen-05.png 1x, img/we-listen-05@2x.png 2x" alt=""/></div>
        <div className="we-listen-06" style={{ bottom: "0px" }}><img src="img/we-listen-06.png" srcSet="img/we-listen-06.png 1x, img/we-listen-06@2x.png 2x" alt=""/></div>
        <div className="we-listen-07"><img src="img/we-listen-07.png" srcSet="img/we-listen-07.png 1x, img/we-listen-07@2x.png 2x" alt=""/></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="we-col">
            <img src="img/red-bull-listen.png" srcSet="img/red-bull-listen.png 1x, img/red-bull-listen@2x.png 2x" alt="" />
            <h1>We Listen</h1>
            <a href="red-bull" className="btn-toi we-btn">View Case Study</a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const WeLearn = () => (
  <section id="we-learn" className="section we-section we-learn fp-section fp-table active fp-completely" style={{ height: "638px" }} >
    <div className="fp-tableCell" style={{ height: "638px" }}>
      <div className="elements">
        <div className="we-learn-01" style={{ left: "-180px" }}><img src="img/we-learn-01.png" srcSet="img/we-learn-01.png 1x, img/we-learn-01@2x.png 2x" alt="" /></div>
        <div className="we-learn-02" style={{ top: "-50px" }}><img src="img/we-learn-02.png" srcSet="img/we-learn-02.png 1x, img/we-learn-02@2x.png 2x" alt="" /></div>
        <div className="we-learn-03" style={{ bottom: "30%" }}><img src="img/we-learn-03.png" srcSet="img/we-learn-03.png 1x, img/we-learn-03@2x.png 2x" alt="" /></div>
        <div className="we-learn-04" style={{ right: "0px" }} ><img src="img/we-learn-04.png" srcSet="img/we-learn-04.png 1x, img/we-learn-04@2x.png 2x" alt="" /></div>
        <div className="we-learn-05" style={{ top: "0px" }}><img src="img/we-learn-05.png" srcSet="img/we-learn-05.png 1x, img/we-learn-05@2x.png 2x" alt="" /></div>
        <div className="we-learn-06"><img src="img/we-learn-06.png" srcSet="img/we-learn-06.png 1x, img/we-learn-06@2x.png 2x" alt="" /></div>
        <div className="we-learn-svg-01"><object id="figures" data="img/figures.svg"></object></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="we-col">
            <img src="img/graduate-learn.png" srcSet="img/graduate-learn.png 1x, img/graduate-learn@2x.png 2x" alt="" />
            <h1>We Learn</h1>
            <a href="berkeley" className="btn-toi we-btn">View Case Study</a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const WeCreate = () => (
  <section id="we-plan" className="section we-section we-plan fp-section fp-table active fp-completely" style={{ height: "638px" }} >
    <div className="fp-tableCell" style={{ height: "638px" }}>
      <div className="elements">
        <div className="we-plan-svg-01"><object id="logotype" data="img/logotype.svg"></object></div>
        <div className="we-plan-svg-02"><object id="iphone" data="img/iphone.svg"></object></div>
        <div className="we-plan-01" style={{ top: "-12%" }}><img src="img/we-plan-01.png" srcSet="img/we-plan-01.png 1x, img/we-plan-01@2x.png 2x" alt=""/></div>
        <div className="we-plan-02" style={{ left: "-1%" }}><img src="img/we-plan-02.png" srcSet="img/we-plan-02.png 1x, img/we-plan-02@2x.png 2x" alt=""/></div>
        <div className="we-plan-03" style={{ right: "-12%" }}><img src="img/we-plan-03.png" srcSet="img/we-plan-03.png 1x, img/we-plan-03@2x.png 2x" alt=""/></div>
        <div className="we-plan-04" style={{ bottom: "0px" }}><img src="img/we-plan-04.png" srcSet="img/we-plan-04.png 1x, img/we-plan-04@2x.png 2x" alt=""/></div>
        <div className="we-plan-05"><img src="img/we-plan-05.png" srcSet="img/we-plan-05.png 1x, img/we-plan-05@2x.png 2x" alt=""/></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="we-col">
            <img src="img/genee.png" srcSet="img/genee.png 1x, img/genee@2x.png 2x" alt="" />
            <h1>We Create</h1>
            <a href="genee" className="btn-toi we-btn">View Case Study</a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section className="section contact fp-normal-scroll fp-section fp-table active fp-completely" style={{ height: "638px" }}>
    <div className="fp-tableCell" style={{ height: "638px" }}>
      <div id="contact" className="container">
        <div className="row">
          <div className="contact__main">
            <object id="drop" data="img/drop.svg"></object>
            <div className="contact__main-text">
              <h2>Drop us <br/> a line.</h2>
              <p>Prepare for a quick response :)<br/>SF/Bay: 415.830.3010<br/>Austin: 512.806.0305</p></div>
          </div>
          <div className="contact__form">
            <form id="form1" name="form1" className="wufoo topLabel page" acceptCharset="UTF-8" autoComplete="off" encType="multipart/form-data" method="post" noValidate=""  siq_id="autopick_668">
              <input id="idstamp" name="idstamp" value="Xr/YBSwwjG2ipKPhbPUUWn4FqrmmM97/wB1R8uRB4bo=" type="hidden" />
              <div className="field_container">
               <input id="Field1" name="Field1" placeholder="First Name" type="text" />
              </div>
              <div className="field_container">
                <input id="Field2" name="Field2" placeholder="Last Name" type="text" />
              </div>
                <div className="field_container">
                <input id="Field4" name="Field4" placeholder="Company" type="text" />
              </div>
              <div className="field_container">
                <input id="Field3" name="Field3" placeholder="Email Address" type="email" />
              </div>
              <div className="field_container">
                <textarea id="Field6" name="Field6" placeholder="Description" className="description"></textarea>
              </div>
              <input id="saveForm" name="saveForm" value="Submit" className="button" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Services = () => (
  <section id="services" className="section services fp-normal-scroll fp-section fp-table active fp-completely" style={{ height: "638px" }}>
    <div className="fp-tableCell" style={{ height: "638px" }}>
      <div className="container">
        <div className="row">
          <header>
            <h2>Services</h2>
          </header>
        </div>
        <section>
          <div className="row">
            <div className="services__item services__item--design wow fadeInLeft" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
              <object id="design" data="img/design.svg"></object>
              <h4 className="wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible" , animationDelay: "0.1s", animationName: "fadeIn" }}>UI/UX Design</h4>
            </div>
          </div>
          <div className="row">
            <div className="services__item services__item--web wow fadeInRight" style={{ visibility: "visible", animationName: "fadeInRight" }}>
              <object id="web" data="img/web.svg"></object>
              <h4 className="wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>Web Development</h4>
            </div>
          </div>
          <div className="row">
            <div className="services__item services__item--wp wow fadeInLeft" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
              <object id="wp" data="img/wp.svg"></object>
              <h4 className="wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>Wordpress Development</h4>
            </div>
          </div>
          <div className="row">
            <div className="services__item services__item--marketing wow fadeInRight" style={{ visibility: "visible", animationName: "fadeInRight" }}>
              <object id="marketing" data="img/marketing.svg"></object>
              <h4 className="wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>Digital Marketing</h4>
            </div>
          </div>
          <div className="row">
            <div className="services__item services__item--brand wow fadeInLeft" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
              <object id="brand" data="img/brand.svg"></object>
              <h4 className="wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>Brand/Identity Strategy &amp; Design</h4>
            </div>
          </div>
          <div className="row">
            <div className="services__item services__item--photo wow fadeInRight" style={{ visibility: "visible", animationName: "fadeInRight" }}>
            <object id="photo" data="img/photo.svg"></object>
            <h4 className="wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>Photo and Film Production</h4>
          </div>
        </div>
        </section>
      </div>
    </div>
  </section>
)

ReactDOM.render(
  <App />,
  document.getElementById('main')
)