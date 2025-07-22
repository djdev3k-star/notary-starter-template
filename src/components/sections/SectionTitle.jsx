import React from 'react';

function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="mx-auto max-w-2xl lg:text-center">
      {subtitle && (
        <h2 className="text-base font-semibold leading-7 text-primary-600">{subtitle}</h2>
      )}
      {title && (
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </p>
      )}
      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;