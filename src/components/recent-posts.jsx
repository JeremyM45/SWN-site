import React from "react";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import BlogPostItem from "@theme/BlogPostItem";
import styles from "../css/recent-posts.module.css";
import useCheckMobile from "./mobile-check"

export default function RecentPosts({ recentPosts }){
  return (
      <div className="container margin-top--xl margin-bottom--lg">
        <h2 className={styles.title}>Recent Posts</h2>
        <div className={useCheckMobile() ? '' : styles.grid}>
          {recentPosts.map(({ content: BlogPostContent }) => (
            
                <BlogPostProvider
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
                >
                  <div className={styles.card}>
                    <BlogPostItem>
                      <BlogPostContent />
                    </BlogPostItem>
                  </div>
                </BlogPostProvider>
              
            
          ))}
          </div>
      </div>
  )
}
