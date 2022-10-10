import React from "react";
import clsx from 'clsx';
import Layout from "@theme/Layout";
import HomepageFeatures from './homepage-features';
import styles from '../css/index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import RecentPosts from "./recent-posts";

// Banner
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

// Main
function Home({ recentPosts }) {
  return (
    
    <Layout description="Description will go into a meta tag in <head />">
      
      <HomepageHeader />
      <HomepageFeatures />
      <div className={styles.hover}>
        <RecentPosts recentPosts={recentPosts} />
      </div>
      
    </Layout>
  );
}

export default Home;