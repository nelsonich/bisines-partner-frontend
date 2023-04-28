import React from 'react';
import Header from '~layouts/_partial/Header';
import Footer from '~layouts/_partial/Footer';
import TopBar from '~layouts/_partial/TopBar';

function MainLayout({ children }) {
  return (
    <>
      <TopBar />
      <Header />

      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
