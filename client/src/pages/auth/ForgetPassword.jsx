import React, { useState } from "react";
import Layout from "../../components/Layout";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:5000/api/v1/auth/forget-password",
                {
                    email,
                    newPassword,
                    answer
                }
            );
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
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
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating my-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Password"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">What is your Fav. sport</label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Reset Password
                        </button>
                    </form>
                </main>
            </div>
        </Layout>
    )
}

export default ForgetPassword