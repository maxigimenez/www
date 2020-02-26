import Head from 'next/head';

import { ContentFulService } from '../../core';
import Post from '../../components/post';
import Wrapper from '../../components/wrapper';
import Footer from '../../components/footer';

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>maxi gimenez - full stack engineer</title>
      </Head>
      <Wrapper>
        {posts.length > 0
          ? posts.map(p => (
              <Post
                alt={p.fields.heroImage ? p.fields.heroImage.title : ''}
                date={p.fields.publishDate}
                key={p.sys.id}
                image={p.fields.heroImage ? p.fields.heroImage.fields.file.url : ''}
                title={p.fields.title}
                url={p.fields.slug}
              />
            ))
          : null}
        <Footer />
      </Wrapper>
    </>
  )
}

Blog.getInitialProps = async () => {
  const contentFulService = new ContentFulService();
  const posts = await contentFulService.getPosts();
  return {
    posts
  };
}

export default Blog
