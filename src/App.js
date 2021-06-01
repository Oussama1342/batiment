import logo from './logo.svg';
import './App.css';

import Header from './Component/Header'
import About from './Component/About'
import Footer from './Component/Footer'
import Team from './Component/Team'
import Portfolio from './Component/Portfolio'
import Service from './Component/Service'
import Contact from './Component/Contact'
import Acceuil from './Component/Acceuil'
import ScrollToTop from './Component/ScrollToTop'
import ContactFunction from './Component/ContactFunction'

import {   BrowserRouter as Router
,HashRouter, Route, Switch } from 'react-router-dom';  

function App() {
  return (
   <Router>
   <ScrollToTop />
   <Header />
     <Switch>
  <Route path="/" component={Acceuil} />
  <Route path="/about" component={About} />
  <Route path="/team" component={Team} />
  <Route path="/sortfolio" component={Portfolio} />
  <Route path="/service" component={Service} />
  <Route path="/service" component={Contact} />
  <Route path="/contact" component={Service} />
  <Route path="/contactfunction" component={ContactFunction} />
   

     </Switch>

      </Router>
  );
}

export default App;
