
import React, { Component } from 'react'  
export class About extends Component{

render (){
	return(
    <div>
	 <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
              <h3>2M Renovation</h3>
    
              <p>
                2M renovation est un societe situe en France dans le domaine de construction de batiment
              </p>
            </div>
          </div>
        </div>
      </section>

      < /div>
	)
}

}
export default  About  