// import "../styles/globals.css";
// import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Loader from "../components/Loader";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />;
    </>
  );
}

export default App;
