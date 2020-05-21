import '../styles.scss';

const CustomApp = ({ Component, pageProps }) => {
  return <>
    <Component {...pageProps} />
  </>;
};

export default CustomApp;
