import Layout from "@/components/layout/Layout.jsx";
import "@/styles/globals.scss";

import MyProvider from "@/lib/CategoryContext";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    </Layout>
  );
}
