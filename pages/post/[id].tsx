import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { ContentFulService } from '../../core';

import Wrapper from '../../components/wrapper';
import Footer from '../../components/footer';

const Post = () => {
  const contentFulService = new ContentFulService();
  const [post, setPost] = useState();
  const router = useRouter();

  useEffect(() => {
    const getPost = async () => {
      if (!router.query.id) {
        return;
      }
      const post = await contentFulService.getPostBySlug(router.query.id as string);
      setPost(post);
    };
    getPost();
  }, [ContentFulService, router]);

  if (!post) {
    return <></>
  }

  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${post.image})` }}></div>
      <Wrapper>
        <h1>{post.title}</h1>
        <ReactMarkdown source={post.body} />
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
