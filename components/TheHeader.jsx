import useTranslation from 'next-translate/useTranslation';
import { Link } from '@/components/Link';

export const TheHeader = () => {
  const { t } = useTranslation();
  const menu = t('common:menu', {}, { returnObjects: true });

  return <div>HEADER </div>;
};
