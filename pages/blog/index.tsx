import { useEffect, useState } from 'react';
import Head from 'next/head';

import Post from '../../components/post';
import { ContentFulService } from '../../core';
import Wrapper from '../../components/wrapper';
import Footer from '../../components/footer';

const Blog = () => {
  const contentFulService = new ContentFulService();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const posts = await contentFulService.getPosts();
      setPosts(posts);
    }
    getPosts();
  }, [ContentFulService]);

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
      </Head>
      <Wrapper>
        {posts.length > 0
          ? posts.map(p => (
              <Post
                alt={p.fields.heroImage ? p.fields.heroImage.title : ''}
                date={p.fields.publishDate}
                key={p.sys.id}
                image={p.fields.heroImage ? p.fields.heroImage.fields.file.url : ''}
                title={p.fields.title}
                url={p.fields.slug}
              />
            ))
          : null}
        <Footer />
      </Wrapper>
    </>
  )
}

export default Blog
