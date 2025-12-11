import React from 'react';

interface SectionLabelProps {
  text: string;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text, className = '' }) => {
  return (
    <div className={`inline-block px-4 py-1.5 rounded-full bg-orange-100 text-hector-primary font-bold text-sm tracking-wide uppercase mb-4 ${className}`}>
      {text}
    </div>
  );
};

export default SectionLabel;