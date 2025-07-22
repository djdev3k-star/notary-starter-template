import React from 'react';
import SectionTitle from '../sections/SectionTitle';
import ContactForm from '../forms/ContactForm';

function Contact() {
  return (
    <section className="bg-indigo-50 py-24 px-6" id="contact">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Let's Work Together"
          description="Questions? Ready to notarize your documents? Send us a message and we’ll get back to you ASAP."
        />
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
