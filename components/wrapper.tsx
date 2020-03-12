import Head from 'next/head';

const Wrapper = ({ children }) => {
  return (
    <>
    <Head>
      <meta name="description" content="Hi! I'm Maxi, a full stack engineer from Argentina, feel free to reach me out!" />
      <meta name="keywords" content="full stack, engineer, front end, developer, personal site, blog" />
      <meta name="robots" content="index, nofollow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="icon" href="/favicon.png" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?display=swap" rel="stylesheet" />
    </Head>
    <div className="wrapper">
      {children}
    </div>
    <style jsx global>{`
      :root {
        --green: #21bf73;
        --grey: rgba(0,0,0,.74);
      }

      body {
        margin: 0px;
        padding: 0px;
        font-family: Open Sans, sans-serif;
        color: var(--grey);
        font-weight: 400;
        font-size: 15px;
      }
      p {
        margin: 20px 0;
      }
      a {
        color: var(--grey);
        text-decoration: underline;
        text-decoration-style: dotted;
      }
      a:hover {
        color: var(--green);
      }
      h1, h2, h3, h4 {
        font-weight: 400;
      }
      h1 {
        font-size: 28px;
      }
      h2 {
        font-size: 22px;
        padding-bottom: 10px;
        position: relative;
      }
      h2:after {
        content: ' ';
        width: 10px;
        height: 4px;
        background-color: var(--green);
        position: absolute;
        bottom: 0;
        left: 0;
      }
      h3 {
        margin-bottom: 5px;
      }
      .wrapper {
        width: 600px;
        margin: 0 auto;
      }

      @media only screen and (max-width: 600px) {
        .wrapper {
          width: 100%;
          padding: 0 15px;
          box-sizing: border-box;
        }
      }
    `}</style>
    </>
  )
}

export default Wrapper;
