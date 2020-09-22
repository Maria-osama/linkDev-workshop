import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import { Switch, Route } from "react-router-dom";
import HomePage from '../../../containers/homePage/HomePage';
import NavigationItem from '../NavigationItem/NavigationItem';
import searchIcon from '../../../../src/imgs/Search.png';
import NewsListing from '../../../containers/NewsListing/NewsListing';
import FullPost from '../../../containers/FullPost/FullPost';
import linkDevLogo from '../../../imgs/linkdevlogo.png';

class NavigationItems extends Component {
  state = {
    openNav: false
  }
  toggleNav = () => {
    this.setState((prevState) => {
      return { openNav: !prevState.openNav }
    })
  }
  render() {
    return (
      <Aux>

        <nav className="navbar navbar-expand-lg navbar-light fixed-top first-nav">
          <div className={this.state.openNav ? "navbar-collapse container" : "collapse navbar-collapse container"} id="navbarNavDropdown">
            <a class="navbar-brand" href="#">
              <img src={linkDevLogo} />
            </a>
          </div>
        </nav>


        <nav className="navbar navbar-expand-lg navbar-light fixed-top second-nav">

          <button className="navbar-toggler" onClick={this.toggleNav} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <img className="d-lg-none smLogo" src={linkDevLogo} />
         
          <div className={this.state.openNav ? "navbar-collapse container" : "collapse navbar-collapse container"} id="navbarNavDropdown">
            <ul className="navbar-nav">
              <NavigationItem link="/" type="link">Home</NavigationItem>
              <NavigationItem link="/" type="link">Who We Are</NavigationItem>
              <NavigationItem link="/" type="link">What We Do</NavigationItem>
              <NavigationItem link="/" type="link">Get Involved</NavigationItem>
              <NavigationItem link="/" type="dropdown">Media Centre</NavigationItem>

              <NavigationItem link="/" type="link">Contact Us</NavigationItem>
              <form className="form-inline my-2 my-lg-0 navbar-right searchIcon" >
              <img src={searchIcon} />
            </form>
            </ul>
            
          </div>
        </nav>

        <Switch>
          <Route path="/press-release" exact component={NewsListing} />
          <Route path="/:id" component={FullPost} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Aux>
    )
  }


}
export default NavigationItems;