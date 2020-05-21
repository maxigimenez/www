import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { ContentFulService } from '../../core';
import { CodeBlock } from '../../helpers';
import Footer from '../../components/footer';
import { NotFound } from '../../components/not-found';

const Post = ({ title, image, body, introBody, error, imageAlt }) => {
  if (error) {
    return <NotFound />;
  }

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
      <img src={image} className="hero" alt={imageAlt} />
      <Link href="/">
        <a><i className="fa fa-long-arrow-left"></i> Go back</a>
      </Link>
      <h1>{title}</h1>
      <ReactMarkdown source={body} renderers={{ code: CodeBlock }} />
      <Footer />
      <style jsx>{`
      .hero {
        display: flex;
        width: 100%;
        height: 300px;
        object-fit: cover;
        margin-bottom: 40px;
      }
      `}</style>
    </>
  )
}

Post.getInitialProps = async context => {
  const contentFulService = new ContentFulService();
  try {
    const post = await contentFulService.getPostBySlug(context.query.id);
    return { ...post };
  } catch (e) {
    return { error: true };
  }
}

export default Post;
