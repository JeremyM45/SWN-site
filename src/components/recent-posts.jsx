import React from "react";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import BlogPostItem from "@theme/BlogPostItem";
import styles from "../css/recent-posts.module.css";

export default function RecentPosts({ recentPosts }){
  return (
      <div className="container margin-top--xl margin-bottom--lg">
        <h2 className={styles.title}>Recent Posts</h2>
        <div className={styles.grid}>
          {recentPosts.map(({ content: BlogPostContent }) => (
            <div className={styles.card}>
                <BlogPostProvider
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
                >
                  {console.log(BlogPostItem)}
                    <BlogPostItem>
                      <BlogPostContent />
                    </BlogPostItem>
                </BlogPostProvider>
              </div>
            
          ))}
          </div>
      </div>
  )
}
