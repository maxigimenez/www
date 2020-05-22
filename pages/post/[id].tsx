import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { ContentFulService } from '../../core';
import { CodeBlock } from '../../helpers';

import Footer from '../../components/footer';

const Post = ({ post }) => (
  <>
    <Head>
      <title>{post.title} - maxi gimenez</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="icon" href="/favicon.png" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?display=swap" rel="stylesheet" />
      <meta name="description" content={post.introBody} />
      <meta property="og:image" content={post.image} />
      <meta name="twitter:title" content={`${post.title} - maxi gimenez`} />
      <meta name="twitter:description" content={post.introBody} />
      <meta name="twitter:image" content={post.image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <div className="container mx-auto max-w-screen-sm px-4 md:px-0 mt-12">
      <Link href="/" as="/">
        <a className="text-sm"><i className="fa fa-long-arrow-left"></i> Go back</a>
      </Link>

      <h1 className="text-2xl mt-3">{post.title}</h1>
      <div className="text-gray-600 text-sm">Published {post.createdAt}</div>

      <article className="mb-10">
        <ReactMarkdown source={post.body} renderers={{ code: CodeBlock }} />
      </article>

      <Footer />
    </div>
  </>
)

export const getStaticPaths = async () => {
  const contentFulService = new ContentFulService();
  const slugs = await contentFulService.getPostsSlugs();
  return {
    paths: slugs.map(slug => `/post/${slug}`),
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
