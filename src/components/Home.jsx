import React from "react";
import clsx from 'clsx';
import Layout from "@theme/Layout";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import RecentPosts from "./recent-posts";


// const [width, setWidth] = useState<number>(window.innerWidth);

// function handleWindowSizeChange() {
//     setWidth(window.innerWidth);
// }

// useEffect(() => {
//     window.addEventListener('resize', handleWindowSizeChange);
//     return () => {
//         window.removeEventListener('resize', handleWindowSizeChange);
//     }
// }, []);

// const isMobile = width <= 768;

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