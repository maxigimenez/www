import Head from 'next/head';
import Wrapper from './wrapper';
import Link from 'next/link';

const Error404 = () => {
  return (
    <>
      <Head>
        <title>maxi gimenez - full stack engineer</title>
      </Head>
      <Wrapper>
        <div className="error">
          <img src="/404.svg" />
          <p>
            <Link href="/">
              <a><i className="fa fa-long-arrow-left"></i> Go back</a>
            </Link>
          </p>
        </div>
      </Wrapper>
      <style jsx>{`
        .error {
          text-align: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        img {
          width: 400px;
          display: flex;
          align-self: center;
        }
        @media only screen and (max-width: 400px) {
          img {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default Error404;
