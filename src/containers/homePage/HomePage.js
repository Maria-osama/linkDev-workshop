import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Carousel from '../../components/Carousel/Carousel';
import Aux from '../../hoc/Auxiliary';
import axios from 'axios';
import SuccessStory from '../../components/SuccessStroy/SuccessStory';
import Investment from '../../components/Investment/Investment';
import SuccessStoryCarousel from '../../components/SuccessStroy/SuccessStoryCarousel';
import Post from '../Post/Post';
import Footer from '../../components/Footer/Footer';

class HomePage extends Component {
    state = {
        data: [],
        selectedPost: null
    }
    componentDidMount() {
      
    //Get All data from Json file, then fillter the data to get Articles that only allowed to be shown
    //on home page (showOnHomepage === true), then sort it by date , then show only 4 of them (to match design).

        axios.get('./newsapi.json')
            .then(response => {
                const articleToShowOnHomePage =
                    response.data.articles.filter(article => article.showOnHomepage === true)
                        .sort(function (a, b) {
                            return new Date(b.publishedAt) - new Date(a.publishedAt);
                        }).slice(0, 4)

                this.setState({ data: articleToShowOnHomePage });
            })
            .catch(error => console.error(error));
    }

    postSelectedHandler = (id) => {
        // Update URL with id of selected post
        
        this.props.history.push('/' + id);
        this.setState({ selectedPost: id })
    }
    render() {
        let posts = <p style={{ textAlign: 'center' }}>Loading ...</p>;
        if (!this.state.error) {
            posts = this.state.data.map(post => {
                return (
                    <div className="col-md-3 col-sm-12">
                    <Post
                        key={post.id}
                        id={post.id}
                        img={post.urlToImage}
                        date={post.publishedAt}
                        title={post.title}
                        clicked={() => this.postSelectedHandler(post.id)} />
                        </div>
                );
            });
        }
        return (
            <Aux>
                <Carousel />

                <div className="successStoryCarousel container">
                    <header className="middle-text">
                        <h3>How we have helped</h3>
                        <h6>See how Al Jalila Foundation have promoted change locally and to the world</h6>
                    </header>
                    <SuccessStoryCarousel />
                </div>

                <Investment />

                <section className="release-section container">
                    <header className="middle-text">
                        <h6>Our latest</h6>
                        <h3><Link to="/press-release">Press Release</Link></h3>
                    </header>
                    <div className="posts row">
                        {posts}
                    </div>
                    
                </section>

                <Footer />
                
            </Aux>
        )
    }
}
export default HomePage;