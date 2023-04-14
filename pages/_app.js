// import "../styles/globals.css";
// import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Loader from "../components/Loader";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from "react";

function App({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);

  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  return (
    <>
      {/* {loading && <Loader />} */}
      <TawkMessengerReact
        propertyId="643663194247f20fefeb2808"
        widgetId="1gtq767j4"
        // propertyId={process.env.NEXT_PUBLIC_TWAKTO_PROPERTY_ID}
        // widgetId={process.env.NEXT_PUBLIC_TWAKTO_WIDGET_ID}
        useRef={tawkMessengerRef}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default App;
