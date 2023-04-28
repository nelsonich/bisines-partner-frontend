import React from 'react';
import PageSeo from '~components/PageSeo';
import ContactUsScreen from '~screens/ContactUs';

function ContactUs(props) {
  return (
    <>
      <PageSeo title="Contact Us" />

      <ContactUsScreen {...props} />
    </>
  );
}

export default ContactUs;
