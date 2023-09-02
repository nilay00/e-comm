import React, { useState } from "react";
import Layout from "../../components/Layout";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/Auth";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:5000/api/v1/auth/login",
                {
                    email,
                    password,
                }
            );
            if (res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })

                localStorage.setItem("auth", JSON.stringify(res.data))
                navigate("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error("error: ", error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout>
            <div className="container">
                <main className="form-signin w-40 m-auto">
                    <form onSubmit={handleSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating my-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating my-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Log In
                        </button>
                    </form>
                </main>
            </div>
        </Layout>
    )
}

export default Login