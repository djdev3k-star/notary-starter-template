import React from 'react';

function Input({ label, id, type = 'text', className = '', ...props }) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold leading-6 text-gray-900">
          {label}
        </label>
      )}
      <div className="mt-2.5">
        <input
          type={type}
          id={id}
          className={`input-field ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}

export default Input;