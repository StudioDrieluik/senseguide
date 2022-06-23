// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Container } from '../../components/Container/Container.styles';
import { Hero } from '../../components/Hero/Hero';
import Story from '../../components/Story/Story';
import { Content, Filter, Wrapper } from './StoriesTemplate.styles';
import { useRouter } from 'next/router';

export const StoriesTemplate = ({ stories, selectedCategory, setSelectedCategory }) => {
  const router = useRouter()
  const meta = {
    seoTitle: 'Verhalen',
  };

  const categories = [
    {
      category: 'Project',
      title: 'Projecten',
    },
    {
      category: 'Zienswijze',
      title: 'Zienswijzen',
    },
    {
      category: 'Nieuws',
      title: 'Nieuws',
    },
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
    if (category !== null) {
      router.push(`/verhalen?type=${category.toLowerCase()}`);
    } else {
      router.push('/verhalen')
    }
  }

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero title="Senseguide verhalen" />

      <Container>
        <Wrapper>
          <Filter className="sticky">
            <h3>Filter op</h3>
            <ul aria-controls="filter-stories">
              <li>
                <button
                  onClick={() => handleClick(null)}
                  aria-current={selectedCategory === null ? true : false}
                  data-filter="*"
                >
                  Alles
                </button>
              </li>
              {categories.map(({category, title}, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleClick(category)}
                    aria-current={selectedCategory === category ? true : false}
                    data-filter={title}
                  >
                    {title}
                  </button>
                  {/* <Route path={`/verhalen?type=${category}`}>{title}</Route> */}
                </li>
              ))}
            </ul>
          </Filter>
          <Content>
            {stories.map(({ node: group }) => (
              <Story compact key={group._meta.uid} data={group} />
            ))}
          </Content>
        </Wrapper>
      </Container>
    </Layout>
  );
};
