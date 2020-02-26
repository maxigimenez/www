import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import { ContentFulService } from '../../core';
import Wrapper from '../../components/wrapper';
import Footer from '../../components/footer';

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - maxi gimenez - full stack engineer</title>
      </Head>
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

Post.getInitialProps = async context => {
  const contentFulService = new ContentFulService();
  const post = await contentFulService.getPostBySlug(context.query.id);
  return {
    post
  };
}

export default Post;
