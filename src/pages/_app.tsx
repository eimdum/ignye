import React from "react";
import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "../global.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

export default App;
