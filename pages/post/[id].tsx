import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import Wrapper from '../../components/wrapper';
import Footer from '../../components/footer';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const Post = () => {
  const [post, setPost] = useState();

  const client = createClient({
    space: SPACE,
    accessToken: TOKEN
  });
  const router = useRouter();

  useEffect(() => {
    const getPost = async () => {
      if (!router.query.id) {
        return;
      }
      const posts = await client.getEntries({
        'content_type': 'blogPost',
        'fields.slug[in]': router.query.id
      });
      setPost(posts.items[0]);
    };
    getPost();
  }, [router.query.id]);

  if (!post) {
    return <></>
  }

  console.log(post);

  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${post.fields.heroImage.fields.file.url})` }}></div>
      <Wrapper>
        <h1>{post.fields.title}</h1>
        <ReactMarkdown source={post.fields.body} />

        <Footer />
      </Wrapper>
      <style jsx>{`
      .hero {
        display: flex;
        width: 100%;
        height: 300px;
        background-size: cover;
        background-position: center center;
        margin-bottom: 40px;
      }
      `}</style>
    </>
  )
}

export default Post;
