import React from 'react';
import $ from 'jquery/dist/jquery';
import M from "materialize-css/dist/js/materialize.min.js";

class HomeNav extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="homeNav" className="card" style={{backgroundImage: 'url(./../../../images/user-profile-bg.jpg)', backgroundRepeat:'no-repeat'}}>
          <div className="card-image waves-effect waves-block waves-light"></div>
          <div className="card-content">
            <div className="row sm-height">
              <div className="col s12 m2">
                <div className="card-profile-image">
                  <img src="./../../../images/avatar.jpg" alt="profile image" className="circle z-depth-2 responsive-img activator" />
                </div>
              </div>
              <div className="col s12 m5">
                <div className="card-title grey-text text-darken-4 name-position">
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex'}}>
                        <i className="fa fa-angle-left fa-3x" aria-hidden="true" />
                        <span className="made-title">Made</span>
                        <i className="fa fa-angle-right fa-3x" aria-hidden="true" />
                    </div>
                    <div>
                        <span className="made-sub-title">By Veera</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m5 right-align">
                <a className="btn-floating activator waves-effect waves-light yellow darken-4 right">
                    <i className="fa fa-user"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card-reveal black-text">
              <div className="row">
                <div className="col s12 m3">
                  <p><i className="mdi-communication-email cyan-text text-darken-2"></i> Veera Reddy ObulaReddy</p>
                </div>
                <div className="col s12 m3">
                  <p><i className="mdi-communication-email cyan-text text-darken-2"></i> veerareddy.obula@gmail.com</p>
                </div>
                <div className="col s12 m3">
                <p><i className="mdi-action-perm-phone-msg cyan-text text-darken-2"></i> +91-8105555322, +91-9440949111</p>
                </div>
                <div className="col s12 m3">
                  <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <span className="card-title" style={{fontSize: "16px", fontWeight: "200"}}><i className="fa fa-times"></i></span>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default HomeNav;