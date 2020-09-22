import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Attachment from './Attachment/Attachment';
import OtherAttachments from './otherAttachments/otherAttachments';
import Footer from '../../components/Footer/Footer';
import Aux from '../../hoc/Auxiliary';
import moreAttachment1 from '../../../src/imgs/moreAttachment1.png';
import moreAttachment2 from '../../../src/imgs/moreAttachment2.png';
import moreAttachment3 from '../../../src/imgs/moreAttachment3.png';



class FullPost extends Component {
    state = {
        fullpost: {}
    }
    componentDidMount() {
        const postID = this.props.match.params.id;
        axios.get('./newsapi.json')
            .then(response => {
                const postToShow = response.data.articles.filter(article => article.id == postID)
                this.setState({ fullpost: postToShow[0] });
            })
            .catch(error => console.error(error));
    }
    render() {
        const month = new Date(this.state.fullpost.publishedAt).toLocaleString('default', { month: 'long' });
        return (
            <Aux>
                <div className="fullpost">
                    <div className="subNav">
                        <div className="container">
                            <Link to="/" >Home</Link>
                            <span>{'>'}</span>
                            <Link to="/" >Media Center</Link>
                            <span>{'>'}</span>
                            <Link to="/press-release" >Press Release</Link>
                            <span>{'>'}</span>
                            <Link >{this.state.fullpost.title}</Link>
                        </div>
                    </div>

                    <div className="container">
                        <h1>PRESS RELEASE</h1>
                        <section>
                            <div>
                                <img className="articleImg" src={this.state.fullpost.urlToImage} alt="" />
                            </div>
                            <h5 className="title">{this.state.fullpost.title}</h5>
                            <h5 className="date">

                                <span>{new Date(this.state.fullpost.publishedAt).getUTCDate()}</span>
                                <span>{month}</span>
                                <span>{new Date(new Date(this.state.fullpost.publishedAt)).getUTCFullYear()}</span>

                                </h5>
                            <p className="content">{this.state.fullpost.content}</p>
                        </section>
                        <div id="attachments">
                            <h4 className="section-title">ATTACHMENTS</h4>
                            <div className="row">
                                <div className="col-md-4"><Attachment /></div>
                                <div className="col-md-4"><Attachment /></div>
                            </div>
                        </div>
                        <div id="other-attachments">
                            <h4 className="section-title">YOU MAY ALSO BE INTERESTED IN</h4>
                            <div className="row">
                                <div className="col-md-4">
                                    <OtherAttachments
                                        bgimg={moreAttachment1}
                                        title="About MRMI"
                                        content="Mohammed Bin Rashid Al Maktoum Global Initiatives was inaugurated on 4 October 2015. " />
                                </div>
                                <div className="col-md-4">
                                    <OtherAttachments
                                        bgimg={moreAttachment2}
                                        title="Our Message"
                                        content="As a young Foundation, we are inspired by our young nation whose achievements have surpassed." />
                                </div>
                                <div className="col-md-4">
                                    <OtherAttachments
                                        bgimg={moreAttachment3}
                                        title="Our Vision,Mission & Goals"
                                        content="VisionAl Jalila Foundation is a global philanthropic organisation." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Aux>
        );
    }

}

export default FullPost;