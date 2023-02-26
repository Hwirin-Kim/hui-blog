import Layout from "@/components/layout/Layout.jsx";
import "@/styles/globals.scss";

import MyProvider from "@/lib/CategoryContext";
import { DefaultSEO } from "@/components/seo/DefaultSeo";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <MyProvider>
        <DefaultSEO />
        <Component {...pageProps} />
      </MyProvider>
    </Layout>
  );
}
