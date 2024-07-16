import React from 'react';
import {ellipsize} from '@/utils/ellipsize';
const SubFeatureNews = ({name, date, text, category, readTime}) => {
  return (
    <div className="flex gap-4 w-full max-w-[25.5rem]">
      <div className="flex flex-col gap-4">
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
          <p className="text-white 1.25rem break-words">
            {ellipsize(text, 90)}
          </p>
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

export default SubFeatureNews;
