import React, { useState, useEffect } from "react";
import { NextFC } from "next";

import Blog from "components/Blog";
import NotFoundPage from "components/NotFoundPage";
import { qsToString } from "utils/routes";

export interface BlogProps {
  blogId: string;
  blog: string | null;
}

const BlogPage: NextFC<BlogProps> = ({ blog: propBlog, blogId }) => {
  let blog = propBlog;
  if (process.env.NODE_ENV !== "production") {
    // This is a hacky way to allow hot reloading for the guide in dev mode
    // since the getInitialProps isn't re-run for hot reloads...
    /* eslint-disable react-hooks/rules-of-hooks */
    const [devBlog, setDevBlog] = useState(blog);
    blog = devBlog;

    useEffect(() => {
      let cancelled = false;
      (async function load() {
        const blog = await import("../../blogs/index.md")
          .then((mod) => mod.default)
          .catch(() => null);

        if (!cancelled) {
          setDevBlog(blog);
        }
      })();

      return () => {
        cancelled = true;
      };
    }, [blogId]);
  }

  if (blog === null) {
    return <NotFoundPage />;
  }

  return <Blog>{blog}</Blog>;
};

BlogPage.getInitialProps = async ({ query }): Promise<BlogProps> => {
  const blogId = qsToString(query.id);
  const blog = await import("../../blogs/index.md")
    .then((mod) => mod.default)
    .catch(() => null);

  return { blogId, blog };
};

export default BlogPage;
