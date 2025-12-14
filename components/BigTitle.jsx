import React from 'react';
import Image from 'next/image';

const isImagePath = (maintitle) => {
  return typeof maintitle === 'string' && (
    maintitle.includes('/') ||
    maintitle.endsWith('.png') ||
    maintitle.endsWith('.jpg')
  );
};

function BigTitle({ subtitle, maintitle }) {

  const isImageCta = isImagePath(maintitle);

  return (
    <div className="text-center py-24 lg:py-36 max-w-2xl mx-auto px-4"> 
      
      {!isImageCta && subtitle && (
        <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-2">
          {subtitle}
        </h3>
      )}

      {isImageCta ? (
        <div className="w-full relative mx-auto" style={{ height: 'auto' }}>
          <Image
            src={maintitle}
            alt="Call to Action: TOGETHER"
            width={600}
            height={180}
            className="w-full h-auto"
            priority
          />
        </div>
      ) : (
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          {maintitle}
        </h2>
      )}
    </div>
  );
}

export default BigTitle;
