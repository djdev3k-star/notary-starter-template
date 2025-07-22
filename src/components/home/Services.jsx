import React from 'react';
import { services } from '../../constants/services';
import SectionTitle from '../sections/SectionTitle';

function ServiceCard({ service }) {
  const { name, description, icon: Icon } = service;
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <dt className="flex items-center gap-x-3 text-lg font-semibold text-gray-900">
        <Icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
        {name}
      </dt>
      <dd className="mt-3 text-gray-600 text-base">{description}</dd>
    </div>
  );
}

function Services() {
  return (
    <section className="bg-gray-50 py-20 px-6" id="services">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          subtitle="Our Services"
          title="Reliable Notary Services"
          description="From real estate signings to personal affidavits, we offer a full suite of mobile and remote notarizations."
        />
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
