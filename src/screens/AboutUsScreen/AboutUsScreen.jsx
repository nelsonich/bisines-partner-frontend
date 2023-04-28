import React from 'react';
import PageHero from '~components/PageHero';
//import useTranslation from '~hooks/useTranslation';
import MainLayout from '~layouts/MainLayout';
import HomeAboutUs from '~screens/HomePageScreen/HomeAboutUs';
function AboutUsScreen() {
  // const { t } = useTranslation();

  return (
    <MainLayout>
      <PageHero
        title="nav-items@about-us"
        image="https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />

      <HomeAboutUs />
    </MainLayout>
  );
}

export default AboutUsScreen;
