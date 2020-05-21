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
        <title>maxi gimenez - developer</title>
      </Head>

      <Wrapper>
        <Bio />
        <Projects />
        {/* <Posts posts={posts} /> */}
        <Footer />
      </Wrapper>
    </>
  )
}

// export const getStaticProps = async () => {
//   const service = new ContentFulService();
//   const posts = await service.getPosts();
//   return {
//     props: {
//       posts
//     }
//   };
// };

export default Home;
