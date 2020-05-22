import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { ContentFulService } from '../../core';
import { CodeBlock } from '../../helpers';

import Footer from '../../components/footer';

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - maxi gimenez</title>
        <meta name="description" content={post.introBody} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:title" content={`${post.title} - maxi gimenez`} />
        <meta name="twitter:description" content={post.introBody} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <img src={post.image} className="hero" alt={post.imageAlt} />
      <Link href="/" as="/">
        <a><i className="fa fa-long-arrow-left"></i> Go back</a>
      </Link>
      <h1>{post.title}</h1>
      <article className="article-post">
        <ReactMarkdown source={post.body} renderers={{ code: CodeBlock }} />
      </article>
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

export const getStaticPaths = async () => {
  return {
    paths: ['/post/moving-skuap-to-nextjs'],
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const contentFulService = new ContentFulService();
  const post = await contentFulService.getPostBySlug(params.id);
  return {
    props: {
      post
    }
  }
}

export default Post;
