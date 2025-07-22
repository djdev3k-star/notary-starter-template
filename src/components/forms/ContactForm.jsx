import React from 'react';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import Button from '../common/Button';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="lg:flex-auto">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <Input
          label="First name"
          id="first-name"
          name="first-name"
          autoComplete="given-name"
        />
        <Input
          label="Last name"
          id="last-name"
          name="last-name"
          autoComplete="family-name"
        />
        <div className="sm:col-span-2">
          <Input
            type="email"
            label="Email"
            id="email"
            name="email"
            autoComplete="email"
          />
        </div>
        <div className="sm:col-span-2">
          <TextArea
            label="Message"
            id="message"
            name="message"
            rows={4}
          />
        </div>
      </div>
      <div className="mt-10">
        <Button type="submit" className="w-full">
          Let's talk
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;