import React from 'react';

function Logo({ className = 'h-8 w-auto' }) {
  return (
    <img
      className={className}
      src="/logo.png"
      alt="Your Notary Business"
    />
  );
}

export default Logo;