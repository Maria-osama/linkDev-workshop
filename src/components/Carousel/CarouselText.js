import React from 'react';
import scroll from '../../imgs/scrollDown.png';

const CarouselText = (props) => {
    return (
        <div className="carousel-caption">
            <p> <span className="name">Al Jalila Foundation</span> is focused on inspiring the next generation of Emirati <span>Healthcare</span> professionals in the UAE.</p>
            <div>
                <button className="btn readMore">READ MORE</button>
                <button className="btn donateNow">DONATE NOW</button>
            </div>
            <div className="scrollSection">
            <img className="scrollIcon" src={scroll}/>
            <h6>SCROLL DOWN</h6>
            </div>
        </div>

    )
}
export default CarouselText;