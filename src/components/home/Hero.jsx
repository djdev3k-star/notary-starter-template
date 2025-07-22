import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <div className="relative isolate px-6 pt-1 lg:px-8" id="home">
      <div className="mx-auto max-w-2xl pt-5 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Trusted Mobile Notary Services — On Time, Every Time
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We bring professional notarization to your door. Flexible, secure,
            and always reliable. Serving individuals, businesses, and legal
            professionals with care and precision.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-primary cursor-pointer"
            >
              Our Services
            </ScrollLink>
            <a
              href="tel:+15551234567"
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
            >
              📞 Call Now: (555) 123‑4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
