import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 animate-spin text-gray-400 dark:text-gray-600">
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
    </div>
  );
};
