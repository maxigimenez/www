import Head from 'next/head';

const Wrapper = props => {
  return (
    <>
    <Head>
      <meta name="description" content="Hi! I'm Maxi, a full stack engineer from Argentina, feel free to reach me out!" />
      <meta name="keywords" content="full stack, engineer, front end, developer, personal site, blog" />
      <meta name="robots" content="index, nofollow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/joypixels/239/large-green-square_1f7e9.png" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?display=swap" rel="stylesheet" />
    </Head>
    <div className="wrapper">
      {props.children}
    </div>
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
        font-family: Open Sans, sans-serif;
        color: rgba(0,0,0,.74);
        font-weight: 400;
        font-size: 15px;
      }
      p {
        margin: 5px 0;
      }
      a {
        color: #21bf73;
        text-decoration: underline;
        text-decoration-style: wavy;
      }
      h1, h2, h3 {
        font-weight: 400;
      }
      h1 {
        font-size: 24px;
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
        background-color: #21bf73;
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
