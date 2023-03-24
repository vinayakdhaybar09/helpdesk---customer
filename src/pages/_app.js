import Layout from "@/components/layout/Layout";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import "@/styles/layout.css";
import { Spin } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {

  const router = useRouter();

  // console.log(router?.route);

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("loggedIn");
    if (isAuthenticated === "loggedout" || !isAuthenticated) {
      router.push('/auth/login');
    }
    setIsLoading(false)
    setIsAuthenticated(localStorage.getItem("loggedIn"))
  }, [router?.route]);

  return (
    <>
      {
        isLoading ? <Spin /> : isAuthenticated === "loggedIn" ?

          <Layout>
            <Component {...pageProps} />
          </Layout>
          :
          <Component {...pageProps} />
      }
    </>

  );
}

export default wrapper.withRedux(App)
