import React from 'react';
import sampleImage from '@/assets/images/sample.png';
import {ellipsize} from '@/utils/ellipsize';

const NewsCard = ({image, mainText, subText, category, readTime}) => {
  return (
    <div className="w-full max-w-[19.75rem] flex flex-col gap-2">
      <img src={sampleImage} className="w-[19.75rem] h-[17.5rem]" />
      <div>
        <p className="break-words text-[1.25rem] leading-6">
          {ellipsize(mainText, 80)}
        </p>
      </div>
      <div>
        <p className="font-light text-[0.875rem]">{ellipsize(subText, 80)}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-[0.75rem] font-light">{category}</p>
        <p className="text-[0.75rem] font-light">|</p>
        <p className="text-[0.75rem] font-light">{readTime}mins read</p>
      </div>
    </div>
  );
};

export default NewsCard;
