import React, { Component } from 'react'  

export class Portfolio extends Component {

render(){
	return(
	 <div>

	  <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <span>Nos Projets</span>
            <h2>Nos Projets</h2>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={150}>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img src="assets/img/portfolio/image15.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a href="assets/img/portfolio/image15.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="assets/img/portfolio/image8.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a href="assets/img/portfolio/image8.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img src="assets/img/portfolio/image12.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a href="assets/img/portfolio/image12.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img src="assets/img/portfolio/image5.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a href="assets/img/portfolio/image5.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="assets/img/portfolio/image6.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a href="assets/img/portfolio/image6.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img src="assets/img/portfolio/image9.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a href="assets/img/portfolio/image9.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img src="assets/img/portfolio/image9.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a href="assets/img/portfolio/image613.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img src="./assets/img/portfolio/image613.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a href="./assets/img/portfolio/image2.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img src="./assets/img/portfolio/image2.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a href="./assets/img/portfolio/image2.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
	  </div>
	);
}
}
export default  Portfolio  ;