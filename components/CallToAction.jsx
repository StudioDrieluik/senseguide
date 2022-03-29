import Image from './Image';

export const CallToAction = ({ mainTitle, text, image }) => (
  <div>
    <div>
      <h2>{mainTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
    <div>
      <Image alt={mainTitle} image={image[0]} />
    </div>
  </div>
);
