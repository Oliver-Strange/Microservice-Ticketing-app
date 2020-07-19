import buildClient from "../api/build-client";
import Header from "../components/header";

// adds global css to project
import "bootstrap/dist/css/bootstrap.css";
// global css needs to be used in the app file, but nextjs doesn't use one

// this wraps page as components passing in the pageProps
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component currentUser={currentUser} {...pageProps} />
    </div>
  );
};
// nextjs passes each page to this app file as the component, allowing the global css to work

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  // git initial props for landing page
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
