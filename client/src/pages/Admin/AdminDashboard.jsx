import React from 'react'
import Layout from '../../components/Layout'
import AdminMenu from './AdminMenu'
import { useAuth } from '../../context/Auth';

const AdminDashboard = () => {
    const [auth, setAuth] = useAuth();
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <AdminMenu />
                    </div>
                    <div className="col-md-8">
                        <h1>Name:{auth?.user.name}</h1>
                        <p><b>email:</b>{auth?.user.email}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard