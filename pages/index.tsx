import Head from 'next/head';
import Wrapper from '../components/wrapper';

import Bio from '../components/bio';
import Projects from '../components/projects';
import OSProjects from '../components/os-projects';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>maxi gimenez - full stack engineer</title>
      </Head>

      <Wrapper>
        <Bio />
        <Projects />
        <OSProjects />
        <Footer />
      </Wrapper>
    </>
  )
}

export default Home;
