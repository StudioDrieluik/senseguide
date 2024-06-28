import React from 'react';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';
import DownloadForm from './DownloadForm';

const DownloadCard = ({ title, text, linkTitle, link }) => {
  return (
    <div className="max-w-[990px] mx-auto">
      <div className="bg-[--color-blue-light] text-[--color-dark] rounded-[--border-radius] p-[2.4rem] md:py-[4.8rem] md:px-[6.4rem]">
        <h2 className="text-[24px] md:text-[32px] mb-[1.6rem]">{title}</h2>
        {text && <RichText render={text} htmlSerializer={htmlSerializer} />}
        <div className="mt-[4rem]">
          <DownloadForm />
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
