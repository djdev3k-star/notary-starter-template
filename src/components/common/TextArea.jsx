import React from 'react';

function TextArea({ label, id, rows = 4, className = '', ...props }) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold leading-6 text-gray-900">
          {label}
        </label>
      )}
      <div className="mt-2.5">
        <textarea
          id={id}
          rows={rows}
          className={`input-field ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}

export default TextArea;