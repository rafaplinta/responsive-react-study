import React from 'react';
import MobileHeader from './MobileHeader';
import Body from '../components/Body';
import Footer from '../components/Footer';

function MobileSection() {
  return (
    <div className="mobile-section">
      <MobileHeader />
      <Body />
      <Footer />
  </div>
  )
}

export default MobileSection;