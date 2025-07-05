import React from 'react';
import './skeleton.css';

export const SkeletonList: React.FC<{ count: number }> = ({ count }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full shimmer-bg" />
            <div className="space-y-2 flex-1">
              <div className="h-4 w-1/3 shimmer-bg rounded" />
              <div className="h-3 w-full shimmer-bg rounded" />
              <div className="h-3 w-5/6 shimmer-bg rounded" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
