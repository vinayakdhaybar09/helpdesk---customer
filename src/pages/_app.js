import Layout from "@/components/layout/Layout";
import store from "@/redux/store";
import "@/styles/globals.css";
import "@/styles/layout.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
