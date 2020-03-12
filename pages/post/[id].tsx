import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import { ContentFulService } from '../../core';
import { CodeBlock } from '../../helpers';
import Wrapper from '../../components/wrapper';
import Footer from '../../components/footer';

const Post = ({ title, image, body, introBody }) => {
  return (
    <>
      <Head>
        <title>{title} - maxi gimenez</title>
        <meta name="description" content={introBody} />
        <meta property="og:image" content={image} />
        <meta name="twitter:title" content={`${title} - maxi gimenez`} />
        <meta name="twitter:description" content={introBody} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="hero" style={{ backgroundImage: `url(${image})` }}></div>
      <Wrapper>
        <h1>{title}</h1>
        <ReactMarkdown source={body} renderers={{ code: CodeBlock }} />
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
  return { ...post };
}

export default Post;
