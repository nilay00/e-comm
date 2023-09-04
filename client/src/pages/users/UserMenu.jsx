import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
    return (
        <div class="list-group">
            <Link to="/dashboard/user" class="list-group-item list-group-item-action active">
                Dashboard
            </Link>
            <Link to="/dashboard/user/profile" class="list-group-item list-group-item-action">Profile</Link>
            <Link to="/dashboard/user/orders" class="list-group-item list-group-item-action">Orders</Link>
        </div>
    )
}

export default UserMenu