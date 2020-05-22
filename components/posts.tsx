import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Post } from '../core';

const Posts = ({ posts }: { posts: Post[] }) => (
  <div className="my-12">
    <h2 className="text-2xl mb-8">
      <span className="w-2 h-1 bg-green-400 inline-block mr-1"></span>
      Blog
    </h2>

    {posts && posts.map(post => {
      return <div key={post.slug} className="my-6">
        <Link href="/post/[id]" as={`/post/${post.slug}`}>
          <h3 className="text-xl mb-2 cursor-pointer hover:text-green-400">{post.title} <span className="text-gray-600 text-sm ml-1">{post.createdAt}</span></h3>
        </Link>
        <ReactMarkdown source={post.introBody} />
      </div>
    })}
  </div>
)

export default Posts;
