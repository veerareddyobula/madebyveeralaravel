// Master.js

import React, {Component}       from 'react';
import { Router, Route, Link }  from 'react-router';
import $                        from 'jquery/dist/jquery';
import M                        from "materialize-css/dist/js/materialize.min.js";

import HomeNav                  from './pages/HomeNav';
import AboutPage                from './pages/AboutPage';
import ContactPage              from './pages/ContactPage';
import ResumePage               from './pages/ResumePage';
import ProjectsLink             from './pages/ProjectsLink';

class Master extends Component {
  
  
  componentDidMount(){
    var instance = M.Tabs.init($('.tabs'), {});
  }
  
  render(){
    return (
      <div id="master-layout" className="container-on">
        <div className="navbar-fixed grey lighten-2">
          <nav>
            <div className="row">
              <HomeNav />
            </div>
          </nav>
        </div>
        <div className="row" style={{marginTop:'7rem', height:'100vh'}}>
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3 m3"><a href="#about-page">About</a></li>
              <li className="tab col s3 m3"><a className="active" href="#projects-page">Projects</a></li>
              <li className="tab col s3 m3"><a href="#resume-page">Resume</a></li>
              <li className="tab col s3 m3"><a href="#contact-page">Contact</a></li>
            </ul>
          </div>
          <div id="about-page"    className="col s12 grey lighten-5" style={{height:'100vh', paddingTop:'20px'}}><AboutPage /></div>
          <div id="projects-page" className="col s12 grey lighten-5" style={{height:'100vh', paddingTop:'20px'}}><ProjectsLink title="Own-Account" /></div>
          <div id="resume-page"   className="col s12 grey lighten-5" style={{height:'100vh', paddingTop:'20px'}}><ResumePage /></div>
          <div id="contact-page"  className="col s12 grey lighten-5" style={{height:'100vh', paddingTop:'20px'}}><ContactPage /></div>
        </div>
      </div>
    )
  }
}
export default Master;