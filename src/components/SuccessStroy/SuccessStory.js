import React, { Component } from 'react';
import img from '../../imgs/invest5.png';

class SuccessStory extends Component {
    render() {
        return (        
            <div className="story-container">
                <div className="overlay"></div>
            <div className="circle"></div>
                <div className="story-text">
                   
                    <h6 className="story-title">{this.props.title}</h6>
                    <div className="desc">
                        <h2 className="story-year">{this.props.year}</h2>
                        <h4 className="story-subtitle">{this.props.subTitle}</h4>
                        <p className="story-desc">{this.props.desc}</p>
                    </div>
                </div>
            </div>          
        )
    }
}
export default SuccessStory;