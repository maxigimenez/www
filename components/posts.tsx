import Link from 'next/link';
// import ReactMarkdown from 'react-markdown';
import { Post } from '../core';

const Posts = ({ posts }) => {
  return (
    <>
      <div className="posts">
        <h2>Posts</h2>

        {posts.map((post: Post) => {
          return <div key={post.slug}>
            <Link href={`/post/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>
            {/* <ReactMarkdown source={post.introBody} /> */}
          </div>
        })}
      </div>

      <style jsx>{`
        .posts {
          margin-top: 60px;
        }
        h2 {
          margin-bottom: 35px;
        }
        h3 {
          margin-bottom: 0;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Posts;
