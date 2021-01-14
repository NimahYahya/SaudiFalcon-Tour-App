import React from 'react';
import Trip from './Trip';
import ContactUsForm from '../component/ContactUsForm';
import OpenStreetMap from '../component/OpenStreetMap';
import '../style/ContactUs.css';

function ContactUs() {
  return (
    <section className="section">
      <div className="cotactUs-grid">
        <div className="contactUs-right">
          <ContactUsForm />
        </div>
        <div className="contactUs-left">
          <OpenStreetMap />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
