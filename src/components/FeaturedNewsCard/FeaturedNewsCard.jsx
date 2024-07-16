import React from 'react';
import sampleImage from '@/assets/images/sample2.png';
import {ellipsize} from '@/utils/ellipsize';

const FeaturedNewsCard = ({image, name, date, text, category, readTime}) => {
  return (
    <div className="flex gap-4 w-full max-w-[25.5rem]">
      <div>
        <img src={sampleImage} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2">
          <p className="text-[0.75rem] text-white font-light opacity-80">
            {name}
          </p>
          <p className="text-[0.75rem] text-white font-light opacity-80">|</p>
          <p className="text-[0.75rem] text-white font-light opacity-80">
            {date}
          </p>
        </div>
        <div>
          <p className="text-white  break-words">{ellipsize(text, 80)}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-[0.75rem] text-white font-light opacity-80">
            {category}
          </p>
          <p className="text-[0.75rem] text-white font-light opacity-80">|</p>
          <p className="text-[0.75rem] text-white font-light opacity-80">
            {readTime}mins read
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewsCard;
