import React from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/Auth";
import UserMenu from "./UserMenu";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <UserMenu />
          </div>
          <div className="col-md-8">
            <h1>Name:{auth?.user.name}</h1>
            <p>
              <b>email:</b>
              {auth?.user.email}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
