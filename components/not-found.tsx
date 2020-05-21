import Head from 'next/head';

export const NotFound = () => (
  <>
    <Head>
      <title>maxi gimenez - full stack engineer</title>
    </Head>
    <div className="container">
      <h1>404</h1>
      <div className="text">
        <h2>The page you requested was not found.</h2>
      </div>
    </div>
    <style jsx>{`
    .container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container h1 {
      padding-right: 1rem;
      margin-right: 1rem;
      align-content: center;
      vertical-align: top;
      border-right: 1px solid #e8f3ec;
    }
    .container .text {
      vertical-align: middle;
    }
    .container h2 {
      padding: 0;
    }
    .container h2:after {
      height: 0;
    }
    `}</style>
  </>
);
