import React from "react";
import clsx from 'clsx';
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import PaginatorNavLink from "@theme/PaginatorNavLink";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function Home({ recentPosts }) {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomepageFeatures />
      <div className="container margin-top--xl margin-bottom--lg">
        <div className="row">
          <div className="col col--9 col--offset-1">
            {recentPosts.map(({ content: BlogPostContent }) => (
              <BlogPostProvider
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
              >
                <BlogPostItem>
                  <BlogPostContent />
                </BlogPostItem>
              </BlogPostProvider>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;