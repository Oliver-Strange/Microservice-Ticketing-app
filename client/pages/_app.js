// adds global css to project
import 'bootstrap/dist/css/bootstrap.css';
// global css needs to be used in the app file, but nextjs doesn't use one

// this wraps page as components passing in the pageProps
export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
// nextjs passes each page to this app file as the component, allowing the global css to work
