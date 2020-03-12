import Link from 'next/link';

const Post = ({ alt, date, image, title, url }) => {
  return (
    <>
      <div className="container">
        <div className="text">
          <Link href="/post/[id]" as={`/post/${url}`}>
            <h2>{title}</h2>
          </Link>
          <h4>Published on: {date}</h4>
        </div>
      </div>
      <style jsx>{`
      h2 {
        cursor: pointer;
        margin-bottom: 10px;
      }
      h4 {
        margin: 0;
      }
      .container {
        margin-bottom: 40px;
      }
      `}</style>
    </>
  )
}

export default Post
