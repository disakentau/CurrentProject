import React from 'react';

import './Footer.css';

class Footer extends React.Component {

  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title"><a href="/">2022 &copy; React</a></h1>
                <p>All Rights Reserved</p>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                  </ul>
                </div>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
              
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
