import React, { Component } from 'react';
import slideOne from '../../imgs/carousel1.png';
import slideTwo from '../../imgs/carousel2.png';
import slideThree from '../../imgs/carousel3.png';
import slideFour from '../../imgs/carousel4.png';
import slideFive from '../../imgs/carousel5.png';
import slideSix from '../../imgs/carousel6.png';
import slideSeven from '../../imgs/carousel7.png';
import slideEight from '../../imgs/carousel8.png';

import rightArrow from '../../imgs/right-arrow.png';
import leftArrow from '../../imgs/left-arrow.png';
import CarouselText from './CarouselText';


class Carousel extends Component {
    state = {
        slideIndex: 1
    }

    showSlides = (n) => {
        let slideIndex = this.state.slideIndex;

        if ((slideIndex + n) <= 8 && (slideIndex + n) != 0) {
            this.setState((prevState) => {
                return { slideIndex: prevState.slideIndex + n }
            })
        }
        if ((slideIndex + n) == 0) {
            this.setState(() => {
                return { slideIndex: 8 }
            })
        }
        if (slideIndex + n > 8) {
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
                        <div className="overlay"></div>
                        <img className="d-block w-100" src={slideOne} alt="slide 1" />
                        <CarouselText />
                    </div>

                    <div className={this.state.slideIndex == 2 ? "carousel-item active fade" : "carousel-item fade"}>
                        <div className="overlay"></div>
                        <img className="d-block w-100" src={slideTwo} alt="slide 2" />
                        <CarouselText />
                    </div>
                    <div className={this.state.slideIndex == 3 ? "carousel-item active fade" : "carousel-item fade"}>
                        <div className="overlay"></div>
                        <img className="d-block w-100" src={slideThree} alt="slide 3" />
                        <CarouselText />
                    </div>
                    <div className={this.state.slideIndex == 4 ? "carousel-item active fade" : "carousel-item fade"}>
                        <div className="overlay"></div>
                        <img className="d-block w-100" src={slideFour} alt="slide 4" />
                        <CarouselText />
                    </div>
                    <div className={this.state.slideIndex == 5 ? "carousel-item active fade" : "carousel-item fade"}>
                        <div className="overlay"></div>
                        <img className="d-block w-100" src={slideFive} alt="slide 5" />
                        <CarouselText />
                    </div>
                    <div className={this.state.slideIndex == 6 ? "carousel-item active fade" : "carousel-item fade"}>
                        <div className="overlay"></div>
                        <img className="d-block w-100" src={slideSix} alt="slide 6" />
                        <CarouselText />
                    </div>
                    <div className={this.state.slideIndex == 7 ? "carousel-item active fade" : "carousel-item fade"}>
                        <div className="overlay"></div>
                        <img className="d-block w-100" src={slideSeven} alt="slide 7" />
                        <CarouselText />
                    </div>
                    <div className={this.state.slideIndex == 8 ? "carousel-item active fade" : "carousel-item fade"}>
                        <div className="overlay"></div>
                        <img className="d-block w-100" src={slideEight} alt="slide 8" />
                        <CarouselText />
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

        )
    }
}
export default Carousel;