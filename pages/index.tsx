import Head from 'next/head';
import Wrapper from '../components/wrapper';

import Bio from '../components/bio';
import Projects from '../components/projects';
import Footer from '../components/footer';
import Posts from '../components/posts';

import { ContentFulService } from '../core';

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>maxi gimenez - full stack engineer</title>
      </Head>

      <Wrapper>
        <Bio />
        <Projects />
        <Posts posts={posts} />
        <Footer />
      </Wrapper>
    </>
  )
}

Home.getInitialProps = async () => {
  const service = new ContentFulService();
  const posts = await service.getPosts();
  return {
    posts
  };
};

export default Home;
