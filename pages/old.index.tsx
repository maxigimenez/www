import { useEffect, useState } from 'react';
import Head from 'next/head';
import Post from '../components/post';
import { createClient } from 'contentful';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const HomePage = () => {
  const client = createClient({
    space: SPACE,
    accessToken: TOKEN
  });

  async function fetchEntries() {
    const entries = await client.getEntries({
      'content_type': 'blogPost'
    });
    if (entries.items) {
      return entries.items;
    }
    console.log(`Error getting Entries.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
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
    </>
  )
}

export default HomePage
