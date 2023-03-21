import withAuth from "@/hooks/useAuth";
import React from "react";


function Home() {
  return <>In Home page</>
}

export default withAuth(Home);