import { Image } from '@/components/Image';

export const BlockImage = ({ block }) => (
  <div className="container">{block.image && <Image image={block.image[0]} />}</div>
);
