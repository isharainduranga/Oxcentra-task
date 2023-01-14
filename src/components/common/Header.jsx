import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <>
               <div className="nav">
                    <input type="checkbox" id="nav-check"></input>
                    <div className="nav-header">
                    <div className="nav-title">
                        OXCENTRA
                    </div>
                    </div>
                    <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    </div>
                    
                    <div className="nav-links">
                    <a className="my-auto"  href="#news">News</a>
                    <a className="my-auto" href="#footer">Contact</a>
                    <a className="my-auto" href="#footer">About</a>
                    <a className="my-auto" href="#news">Give Us News</a>
                    </div>
                </div> 
            </>
        );
    }
}

export default Header;