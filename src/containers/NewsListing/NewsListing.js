import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Aux from '../../hoc/Auxiliary';
import Post from '../Post/Post';
import searcIcon from '../../imgs/Search.png';
import Spinner from '../../components/UI/Spinner/Spinner';
import Footer from '../../components/Footer/Footer';

class NewsListing extends Component {
    state = {
        data: [],
        showAtaTime: 8,
        Category: [],
        matchedArticles: [],
        loading: false
    }
    componentDidMount() {
        // Sort the Articles by date
        axios.get('./newsapi.json')
            .then(response => {
                const articles =
                    response.data.articles.sort(function (a, b) {
                        return new Date(b.publishedAt) - new Date(a.publishedAt);
                    })
                const Category = response.data.sourceCategory;
                this.setState({
                    data: articles,
                    Category: Category
                });
            })
            .catch(error => console.error(error));
    }
    loadMore = () => {
        this.setState((prevState) => {
            return { showAtaTime: prevState.showAtaTime + 4 }
        });

    }

    searchHandller = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);

        const optionID = document.getElementById("categories").selectedIndex;  // Get ID of selected category
        const enteredTitle = document.getElementById("articleTitle").value;    // Get value of entered title

        //Search for Articles that have same category ID and their titles include the entered title
        const matchedArticles = this.state.data.filter(article => article.sourceID == optionID)
            .filter(article => article.title.includes(enteredTitle));
        if (matchedArticles.length == 0) {
            alert("No articles found, please enter Another title or choose another category !")
        }
        this.setState({ matchedArticles: matchedArticles })

    }
    //on Enter press
    handle = (e) => {
        if (e.keyCode === 13) {
            this.searchHandller();
        }
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Loading ...</p>;
        let matchedArticles = <div></div>
        let categories = <option></option>

        if (this.state.matchedArticles.length > 0) {
            matchedArticles = this.state.matchedArticles.map(article => {
                return (
                    <div className="col-lg-4 col-md-3 col-sm-12">
                        <Post
                            key={article.id}
                            id={article.id}
                            img={article.urlToImage}
                            date={article.publishedAt}
                            title={article.title}
                        />
                    </div>
                )
            })
        }

        // Draw posts , at the begining posts from 0 : 8 are being shown ,
        //then show extra 4 posts on 'Load More' click

        if (!this.state.error) {
            posts = this.state.data.slice(0, this.state.showAtaTime).map(post => {
                return (
                    <div className="col-md-3 col-sm-12">
                        <Post
                            key={post.id}
                            id={post.id}
                            img={post.urlToImage}
                            date={post.publishedAt}
                            title={post.title}
                        />
                    </div>
                );
            });
            // Fill the category dropdown from state
            categories = this.state.Category.map(item => {
                return (
                    <option key={item.id} id={item.id}>{item.name}</option>
                )
            })

        }

        let spinner = <div></div>
        if (this.state.loading) {
            spinner = <Spinner />
        }
        return (
            <Aux>
                <div className="newsListing">
                    <div className="subNav">
                        <div className="container">
                            <Link to="/" >Home</Link>
                            <span>{'>'}</span>
                            <Link to="/" >Media Center</Link>
                            <span>{'>'}</span>
                            <Link to="/press-release" >Press Release</Link>
                        </div>
                    </div>
                    <div className="container">
                        <h1>PRESS RELEASE</h1>
                        <section className="searchSection">
                            <select id="categories">
                                <option value="" selected>Category</option>
                                {categories}

                            </select>
                            <input id="articleTitle" placeholder="Title" onKeyUp={this.handle} />
                            <button onClick={this.searchHandller}><img src={searcIcon} /></button>
                        </section>

                        <div className="row">
                            {this.state.loading ? spinner :
                                this.state.matchedArticles.length == 0 ? posts : matchedArticles}
                        </div>
                        <button
                            className="load-more"
                            onClick={this.loadMore}
                            disabled={this.state.matchedArticles.length == 0 ? false : true}>
                            Load more
                </button>
                    </div>
                </div>
                <Footer />
            </Aux>
        )
    }
}
export default NewsListing;