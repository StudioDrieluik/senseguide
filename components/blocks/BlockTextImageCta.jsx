import Image from '@/components/Image';

export const BlockTextImageCta = ({ mainTitle, text, image }) => (
  <div className="flex flex-wrap">
    <div className="w-1/2">
      {mainTitle && <h2>{mainTitle}</h2>}
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
    <div className="w-1/2">
      <Image alt={mainTitle} image={image[0]} />
    </div>
  </div>
);
