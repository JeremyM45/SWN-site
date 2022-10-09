import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ul>
          {recentPosts.items.slice(0, 5).map((item, index) => (
            <li key={index}>
              <a href={`${item.permalink}`}>{item.title}</a>{" "}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
