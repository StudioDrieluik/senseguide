// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Container } from '../../components/Container/Container.styles';
import { Hero } from '../../components/Hero/Hero';
import Story from '../../components/Story/Story';
import { Content, Filter, Wrapper } from './StoriesTemplate.styles';
import { useRouter, query } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const StoriesTemplate = ({ title, stories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredStories, setFilteredStories] = useState(stories);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const meta = {
    seoTitle: data.seo_title?.[0]?.text || title,
    seoDescription: data.seo_description?.[0]?.text || `${intro?.[0]?.text}`,
    ogImage: image?.url,
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

  useEffect(() => {
    if (!router.isReady) return;
    if (router.asPath.includes('?type=')) {
      const queryCapitalized = query.type.charAt(0).toUpperCase() + query.type.slice(1);
      setSelectedCategory(queryCapitalized);
    } else {
      setSelectedCategory(null);
    }
  }, [router.isReady]);

  useEffect(() => {
    const newResults = stories.filter(story => {
      if (selectedCategory !== null) {
        return story.node.category === selectedCategory;
      }
      return stories;
    });
    setIsLoading(false);
    setFilteredStories(newResults);
  }, [selectedCategory]);

  const handleClick = category => {
    setIsLoading(true);
    setSelectedCategory(category);
    if (category !== null) {
      router.push(`/verhalen?type=${category.toLowerCase()}`);
    } else {
      router.push('/verhalen');
    }
  };

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero title={title} />

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
              {categories.map(({ category, title }, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleClick(category)}
                    aria-current={selectedCategory === category ? true : false}
                    data-filter={title}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </Filter>
          {filteredStories && (
            <Content>
              {!isLoading &&
                filteredStories.map(({ node: group }) => (
                  <motion.div
                    key={group._meta.uid}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 0.2 }}
                  >
                    <Story compact data={group} />
                  </motion.div>
                ))}
            </Content>
          )}
        </Wrapper>
      </Container>
    </Layout>
  );
};
