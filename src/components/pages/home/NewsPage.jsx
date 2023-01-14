import React, { Component } from 'react';
import BannerArea from "./BannerArea";
import NewsArea from "./NewsArea";

class NewsPage extends Component {
    render() {
        return (
            <>
              <BannerArea/>  
              <NewsArea/>
            </>
        );
    }
}

export default NewsPage;