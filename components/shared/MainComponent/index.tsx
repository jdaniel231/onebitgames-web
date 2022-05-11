import React from 'react';
import Footer from '../Footer/StorefrontFooter';
import Header from '../Header/StoreFrontHeader'

const MainComponent: React.FC =  ({ children })  => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header />
      <div className="container flex-fill">
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default MainComponent;