import React from 'react';

type FeedItemLayoutProps = {
  avatarUrl?: string;
  header: React.ReactNode;
  content: React.ReactNode;
};

export const FeedItemLayout: React.FC<FeedItemLayoutProps> = ({
  avatarUrl,
  header,
  content,
}) => {
  return (
    <div
      className="flex items-start gap-3 px-4 py-3 border border-gray-200 dark:border-neutral-700
                 -mb-px animate-fade-in hover:bg-gray-100 dark:hover:bg-[#16181c] transition-colors duration-200"
    >
      <img
        src={avatarUrl}
        alt=""
        className="w-10 h-10 rounded-full bg-gray-300 dark:bg-neutral-700 object-cover"
      />
      <div className="flex-1">
        {header}
        <div className="mt-1">{content}</div>
      </div>
    </div>
  );
};
