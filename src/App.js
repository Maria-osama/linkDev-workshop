import React from 'react';
import Layout from './components/Layout/Layout';
import './App.scss';
import './containers/homePage/HomePage.scss';
import './components/Carousel/Carousel.scss';
import './components/SuccessStroy/SuccessStory.scss';
import './components/Investment/Investment.scss';
import './containers/Post/Post.scss';
import './containers/NewsListing/NewsListing.scss';
import './containers/FullPost/FullPost.scss';
import './components/UI/Spinner/Spinner.scss';
import './components/Footer/Footer.scss';

function App() {
  return (
    <div className="App">
      <Layout/>   
    </div>
  );
}

export default App;
