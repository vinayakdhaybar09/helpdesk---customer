import Layout from "@/components/layout/Layout";
import store from "@/redux/store";
import "@/styles/globals.css";
import "@/styles/layout.css";
import { Spin } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {

  const router = useRouter()

  // console.log(router?.route);

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("loggedIn");
    if (isAuthenticated === "loggedout") {
      router.push('/auth/login');
    }
    setIsLoading(false)
    setIsAuthenticated(localStorage.getItem("loggedIn"))
  }, [router?.route]);

  return (
    <>
      {
        isLoading ? <Spin /> : isAuthenticated === "loggedIn" ?
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider> :
          <Component {...pageProps} />
      }
    </>

  );
}
