
import{ init } from 'emailjs-com';
import { useState } from 'react';
import { emailjs } from 'emailjs-com';
import { send } from 'emailjs-com';
import {Alert} from 'reactstrap'
init("user_jJWJVxdXnQ6n5MDFFrQnm");

function ContactFunction (){

  const [toSend, setToSend] = useState({
    //user_name: '',
    from_name :'',
    to_name: 'oussama.amari045@gmail.com',
    message: '',
   // reply_to: '',
    //subject:''
  });


  const onSubmit = (e) => {

    e.preventDefault();
      send(
      'service_rxxj0s9',
      'template_45dqby9',
      toSend,
      'user_jJWJVxdXnQ6n5MDFFrQnm'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
       <Alert color="primary"> Merci pour votre confiance</Alert>
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
	return(
	   <div>
	    <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <span>Contact</span>
            <h2>Contact</h2>
        
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map" />
                <h3>Notre  Address</h3>
                <p>20 bis route de mont de marson Captieux 33840</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope" />
                <h3>Envoyez-nous un email</h3>
                <p>2m.renovation33@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call" />
                <h3>
Appelez-nous</h3>
                <p>+33 5589 55488 55</p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-6 ">
              <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border: 0, width: '100%', height: '384px'}} allowFullScreen />
            </div>
            <div className="col-lg-6">
              <form onSubmit={onSubmit} method="post" role="form" className="php-email-form">
               
               <div className="form-group">
                    <input type="email" className="form-control" name="from_name"  id="email" value={toSend.from_name} onChange={handleChange} placeholder="Votre Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate" />
                  </div>
                

              
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} data-rule="required" value={toSend.message} onChange={handleChange} data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Envoyer</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
        </div>
	);

}
export default  ContactFunction  ;