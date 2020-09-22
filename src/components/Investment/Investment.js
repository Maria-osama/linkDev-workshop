import React from 'react';
import invest1 from '../../imgs/invest1.png';
import invest2 from '../../imgs/invest2.png';
import invest3 from '../../imgs/invest3.png';
import invest4 from '../../imgs/invest4.png';
import invest5 from '../../imgs/invest5.png';
import invest6 from '../../imgs/invest6.png';
import invest7 from '../../imgs/invest7.png';

const Investment = () => {
    return (
        <section className="investmentSection">
            <div className="overlay"></div>

            <header>
                <h3>Today’s Investments, Tomorrow’s Cures</h3>
                <h6>Support the different programs we have below</h6>
            </header>

            <div className="shape">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-xs-12">
                            <div className="square">
                                <div className="square-content">
                                    <img src={invest1} />
                                    <h5>Ta’alouf</h5>
                                    <h6>+</h6>
                                </div>
                            </div>
                            <div className="square">
                                <div className="square-content">
                                    <img src={invest2} />
                                    <h5>Zakat</h5>
                                    <h6>+</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="square">
                                <div className="square-content">
                                    <img src={invest3} />
                                    <h5>A’awen</h5>
                                    <h6>+</h6>
                                </div>
                            </div>
                            <div className="square">
                                <div className="square-content">
                                    <img src={invest4} />
                                    <h5>Fundraising</h5>
                                    <h6>+</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="square">
                                <div className="square-content">
                                    <img src={invest5} />
                                    <h5>Scholarships</h5>
                                    <h6>+</h6>
                                </div>
                            </div>
                            <div className="square">
                                <div className="square-content">
                                    <img src={invest6} />
                                    <h5>Omniyat Dania</h5>
                                    <h6>+</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="square">
                                <div className="square-content">
                                    <img src={invest7} />
                                    <h5>Medical Research</h5>
                                    <h6>+</h6>
                                </div>
                            </div>
                            <div></div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}
export default Investment;