import React, { Component } from 'react'  

export class Team extends Component {

render(){
	return(
	<div>
	 <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <span>Team</span>
            <h2>Equipe</h2>
            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
              <div className="member">
                <img src="assets/img/team/team-1.jpg" alt="" />
                <h4>Lazhar Mahdhi</h4>Team
                <span>Gérant</span>
                <p>
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                </p>
                <div className="social">
                  <a href><i className="icofont-twitter" /></a>
                  <a href><i className="icofont-facebook" /></a>
                  <a href><i className="icofont-instagram" /></a>
                  <a href><i className="icofont-linkedin" /></a>
                </div>
              </div>
            </div>
          
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
              <div className="member">
                <img src="./assets/img/team/team-3.jpg" alt="" />
                <h4>Mohamed Mahdhi</h4>
                <span>CEO , Founder</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
                <div className="social">
                  <a href><i className="icofont-twitter" /></a>
                  <a href><i className="icofont-facebook" /></a>
                  <a href><i className="icofont-instagram" /></a>
                  <a href><i className="icofont-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
	);
}
}
export default  Team  ;