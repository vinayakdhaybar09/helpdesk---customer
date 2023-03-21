// import { useRouter } from 'next/router'
// import { useEffect } from 'react'

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    // const router = useRouter()

    // useEffect(() => {
    //   const isAuthenticated = localStorage.getItem("loggedIn");
    //   console.log(isAuthenticated);
    //   if (isAuthenticated === "loggedout") {
    //     router.push('/auth/login');
    //   }
    // }, []);

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withAuth
