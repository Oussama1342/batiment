
import React, { Component } from 'react'  
import {



} from "react-router-dom";
import {Link} from 'react-scroll'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
export class Header extends Component {

render(){
	return(
	 
    
    <div  >
 <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top ">
        <div className="container d-flex">
          <div className="contact-info mr-auto">
            <i className="icofont-envelope" /> <a href="2m.renovation33@gmail.com">2m.renovation33@cmail.com
</a>
            <i className="icofont-phone" /> +33 453 765 23
          </div>
          <div className="social-links">
            <a href="#" className="twitter"><i className="icofont-twitter" /></a>
            <a href="#" className="facebook"><i className="icofont-facebook" /></a>
            <a href="#" className="instagram"><i className="icofont-instagram" /></a>
            <a href="#" className="skype"><i className="icofont-skype" /></a>
            <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
          </div>
        </div>
      </div>
    <header id="header" class="fixed-top ">
	  <div className="container d-flex align-items-center">
        <h1 className="logo mr-auto"><a href="index.html">2M </a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo mr-auto"><img src="./assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li ><a href="index.html">Home</a></li>
            <li><Link  to="about" spy={true} smooth={true}>Qui Somme Nous</Link></li>
            <li><Link  to="services" spy={true} smooth={true}>Services</Link></li>
            <li><Link  to="portfolio" spy={true} smooth={true}>Nos projets</Link></li>
         {/*     <li><a <a href="#portfolio">href="#pricing">Pricing</a></li>*/}
            <li><Link  to="team" spy={true} smooth={true}>Equipe</Link></li>
       
      {/*      <li className="drop-down"><a href>Drop Down</a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="drop-down"><a href="#">Deep Drop Down</a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>*/}
            <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
          </ul>
        </nav>{/* .nav-menu */}
      </div>
         </header>
            <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay={500}>
          <h1>
Bienvenue a 2M Renovoation</h1>
         
        </div>
      </section>

      {/* ======= About Section ======= */}
        {/* End About Section */}
     
        {/* ======= Service Section ======= */}
       {/* End Services Section */}

      {/*  Cta Section */}
      {/* End Cta Section */}


      {/* ======= Portfolio Section ======= */}
      {/* End Portfolio Section */}

       {/* ======= Team Section ======= */}
     {/* End Team Section */}

       {/* ======= Contact Section ======= */}
     {/* End Contact Section */}

        {/* ======= Footer ======= */}
    {/* End Footer */}


               </div>


	);
}

}

export default  Header  ;