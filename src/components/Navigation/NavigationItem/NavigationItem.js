import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationItem extends Component {
  state = {
    dropdownToggle : false
  }

  dropdownToggle = () => {
    this.setState((prevstate) => {
      return {
        dropdownToggle: !prevstate.dropdownToggle
      }

    })
  }
  render() {
    let item = <div></div>

    // render nav link or dropdown list according to "type" in props
    switch (this.props.type) {
      case 'link':
        item =
          <li className="nav-item">
            <NavLink
              to={this.props.link} className="nav-link" exact>{this.props.children}</NavLink>
          </li>
        break;
      case 'dropdown':
        item = <li className="nav-item dropdown" onClick={this.dropdownToggle}>
          <a  className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.children}
          </a>
          <div className={this.state.dropdownToggle ? "dropdown-menu d-block" : "dropdown-menu d-none"} aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/">Photo Gallery</a>
            <a className="dropdown-item" href="/">Video Gallery</a>
            <a className="dropdown-item" href="/press-release">Press Release</a>
          </div>
        </li>
        break;
    }
    return (
      item
    );
  }
}



export default NavigationItem;