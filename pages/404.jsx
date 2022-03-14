import { PageHead } from '@/components/PageHead';

const Page404 = () => (
  <div>
    <PageHead
      meta={{
        title: 'Page not found',
      }}
    />
    <h1>404</h1>
  </div>
);

export default Page404;
