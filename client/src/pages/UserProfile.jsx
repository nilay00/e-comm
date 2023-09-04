import React from 'react'
import UserMenu from './users/UserMenu'
import Layout from '../components/Layout'

const UserProfile = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <UserMenu />
                    </div>
                    <div className="col-md-8">
                        <h1>Profile</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserProfile