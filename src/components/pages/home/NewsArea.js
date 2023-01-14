import React, { Component } from 'react';
import newsImg1 from "../../../assets/images/news-a.jpg";
import newsImg2 from "../../../assets/images/news-b.jpg";

class NewsArea extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 card-center">
                            <div className="card banner-card">
                            
                                <div className="card-body p-body">
                                <h5 className="card-title card-topic-main">Lorem ipsum dolor sit amet</h5>
                                <p className="card-text mt-4 card-para-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row mt-5" id="news">
                        <div className="col-md-9 col-sm-12">
                            <h3 className="topic">Latest News</h3>
                            <div className="card card-sm mb-3 mt-4">
                                <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={newsImg1} className="img-fluid rounded-start" alt="card img"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="card-space">
                                            <h5 className="card-title card-topic">Lorem ipsum dolor sit amet</h5>
                                            <p className="card-text card-para mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            
                                        </div>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card card-sm mb-3 mt-4">
                                <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={newsImg2}  className="img-fluid rounded-start" alt="card img"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="card-space">
                                            <h5 className="card-title card-topic">Lorem ipsum dolor sit amet</h5>
                                            <p className="card-text card-para mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            
                                        </div>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 mb-5">
                            <h3 className="topic">Recent News</h3>
                            <div className="card col-12 mt-4">
                                <img src={newsImg1}  className="card-img-top" alt="card img"/>
                                <div className="card-body">
                                    <h5 className="card-title card-topic">Lorem ipsum dolor sit amet</h5>
                                
                                </div>
                            </div>
                            <div className="card col-12 mt-4">
                                <img src={newsImg2}  className="card-img-top" alt="card img"/>
                                <div className="card-body">
                                    <h5 className="card-title card-topic">Lorem ipsum dolor sit amet</h5>
                                
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default NewsArea;