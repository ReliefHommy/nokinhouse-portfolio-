import React from 'react';

export interface DirectConnectBandProps {
  title: string;
  body: string;
}

export const DirectConnectBand: React.FC<DirectConnectBandProps> = ({
  title,
  body,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#422646]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Trust & Connection Icon (Lightning/Flash for instant, direct connection) */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d876ac] dark:bg-gray-900 shadow-sm mb-8 text violet-400 dark:text-violet-400">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white tracking-tight mb-6">
          {title}
        </h2>

        {/* Body Text */}
        <p className="text-lg md:text-xl text-white dark:text-white leading-relaxed">
          {body}
        </p>

      </div>
    </section>
  );
};

export default DirectConnectBand;