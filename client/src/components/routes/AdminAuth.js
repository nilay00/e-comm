import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Snppiner from "../Snppiner";

export default function AdminAuth() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/v1/auth/admin-auth",
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );
      if (auth?.user.role === 1) {
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Snppiner path="" />;
}
