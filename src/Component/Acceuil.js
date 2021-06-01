
import React, { Component } from 'react'  

import Header from './Header'
import About from './About'
import Service from './Service'
import Cta from './Cta'
import Portfolio from './Portfolio'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import ContactFunction from './ContactFunction'
export class Acceuil extends Component {

render(){
 

return(
 <div>

 < Header />
  < About />
  < Service />
  < Cta />
  < Portfolio />
  < Team />

  < ContactFunction />
  < Footer />

  </div>
);
}

}
export default Acceuil