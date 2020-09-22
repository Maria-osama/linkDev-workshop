import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class post extends Component {

    render() {
        const month = new Date(this.props.date).toLocaleString('default', { month: 'long' });
        const day = new Date(this.props.date).toLocaleDateString('locale', { weekday: 'long' });

        return (
            <article className="Post" onClick={this.props.clicked} style={{ backgroundImage: "url(" + this.props.img + ")" }}>
                <div className="overlay"></div>
                <div className="date">
                    <h6 className="day">{new Date(this.props.date).getUTCDate()}</h6>
                   
                    <h6 className="month">{month}</h6>
                   
                    <span className="dayText">{day}</span>
                    <span className="year">{new Date(this.props.date).getUTCFullYear()}</span>


                </div>
                <p className="title">{this.props.title}</p>
                <Link to={'/' + this.props.id} className="btn btn-primary">
                   <button className="read-more" onClick={this.props.clicked}>Read More </button>
                </Link>
               
            </article>
        )
    }

};

export default post;