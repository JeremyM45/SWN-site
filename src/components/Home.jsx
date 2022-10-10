import React from "react";
import clsx from 'clsx';
import Layout from "@theme/Layout";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import RecentPosts from "./recent-posts";

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
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomepageFeatures />
      <RecentPosts recentPosts={recentPosts} />
    </Layout>
  );
}

export default Home;