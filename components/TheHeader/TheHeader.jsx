import useTranslation from 'next-translate/useTranslation';
import { Link } from '@/components/Link';
import { Wrapper } from './TheHeader.styles';

export const TheHeader = () => {
  const { t } = useTranslation();
  const menu = t('common:menu', {}, { returnObjects: true });

  return <Wrapper> </Wrapper>;
};
