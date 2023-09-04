import React from 'react'
import Layout from '../../components/Layout'
import AdminMenu from './AdminMenu'

const Users = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <AdminMenu />
                    </div>
                    <div className="col-md-8">
                        <h1>Users</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Users