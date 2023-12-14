import React from 'react';
import DesktopHeader from './DesktopHeader';
import Body from '../components/Body';
import Footer from '../components/Footer';

function DesktopSection() {
  return (
    <div className="desktop-section">
      <DesktopHeader />
      <Body />
      <Footer />
    </div>
  )
}

export default DesktopSection;