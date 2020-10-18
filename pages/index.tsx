import Head from 'next/head';

import Bio from '../components/bio';
import Projects from '../components/projects';
import Footer from '../components/footer';
import Posts from '../components/posts';

import { ContentFulService } from '../core';

const Home = ({ posts }) => (
  <>
    <Head>
      <title>maxi gimenez - developer</title>
      <meta name="description" content="Hi! I'm Maxi, a developer from Argentina, feel free reach out!" />
      <meta name="keywords" content="full stack, engineer, front end, developer, personal site, blog" />
      <meta name="robots" content="index, nofollow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="icon" href="/favicon.png" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?display=swap" rel="stylesheet" />
    </Head>

    <div className="container mx-auto max-w-screen-sm px-4 md:px-0">
      <Bio />
      {!!posts.length && <Posts posts={posts} />}
      <Projects />
      <Projects />
      <Projects />
      <Footer />
    </div>
  </>
)

export const getStaticProps = async () => {
  const service = new ContentFulService();
  const posts = await service.getPosts();
  return {
    props: {
      posts
    }
  };
};

export default Home;
