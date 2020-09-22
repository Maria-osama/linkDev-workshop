import React, { Component } from 'react';
import img from '../../imgs/carousel2.png';
import SuccessStory from './SuccessStory';

class SuccessStoryCarousel extends Component {
    state = {
        slideIndex: 1
    }

    showSlides = (n) => {
        let slideIndex = this.state.slideIndex;

        if ((slideIndex + n) <= 2 && (slideIndex + n) != 0) {
            this.setState((prevState) => {
                return { slideIndex: prevState.slideIndex + n }
            })
        }
        if ((slideIndex + n) == 0) {
            this.setState(() => {
                return { slideIndex: 2 }
            })
        }
        if (slideIndex + n > 2) {
            this.setState({
                slideIndex: 1
            })
        }


    }
render() {

    return (

    <div className="carousel slide" data-ride="carousel">

        <div className="carousel-inner">

            <div className={this.state.slideIndex == 1 ? "carousel-item active fade" : "carousel-item fade"}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <SuccessStory
                                title="TA’ALOUF PROGRAM"
                                year="200"
                                subTitle="GRADUATES TO DATE"
                                 desc="Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country." />
                         </div>
                        <div className="col-md-6 d-none d-lg-block">
                              <SuccessStory
                                 title="TA’ALOUF PROGRAM"
                                 year="200"
                                        subTitle="GRADUATES TO DATE"
                                        desc="Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country." />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={this.state.slideIndex == 2 ? "carousel-item active fade" : "carousel-item fade"}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <SuccessStory
                                        title="TA’ALOUF PROGRAM"
                                        year="200"
                                        subTitle="GRADUATES TO DATE"
                                        desc="Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country." />
                                </div>
                                <div className="col-md-6 d-none d-lg-block">
                                    <SuccessStory
                                        title="TA’ALOUF PROGRAM"
                                        year="200"
                                        subTitle="GRADUATES TO DATE"
                                        desc="Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country." />
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
                <a className="carousel-control-prev" onClick={() => { this.showSlides(-1) }} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" onClick={() => { this.showSlides(1) }} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>





            /*<div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div id="imageCarousel" className="carousel slide" data-interval="2000" data-ride="carousel" data-wrap="true">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <img src={img} className="img-responsive"/>
                                            <div className="carousel-caption">
                                                <h6 className="story-title">{this.props.title}</h6>
                                                <div className="desc">
                                                    <h2 className="story-year">{this.props.year}</h2>
                                                    <h4 className="story-subtitle">{this.props.subTitle}</h4>
                                                    <p className="story-desc">{this.props.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <img src={img} className="img-responsive"/>
                                            <div className="carousel-caption">
                                                <h6 className="story-title">{this.props.title}</h6>
                                                <div className="desc">
                                                    <h2 className="story-year">{this.props.year}</h2>
                                                    <h4 className="story-subtitle">{this.props.subTitle}</h4>
                                                    <p className="story-desc">{this.props.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" onClick={() => { this.showSlides(-1) }}  role="button" data-slide="prev">
                       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span className="sr-only">Previous</span>
                   </a>
                   <a className="carousel-control-next" onClick={() => { this.showSlides(1) }} role="button" data-slide="next">
                       <span className="carousel-control-next-icon" aria-hidden="true"></span>
                       <span className="sr-only">Next</span>
                   </a>
            </div>*/
        )
    }
}
export default SuccessStoryCarousel;