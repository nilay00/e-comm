import React from "react";
import Layout from "../components/Layout";
import { useAuth } from "../context/Auth";
const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div>Home</div>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Home;
