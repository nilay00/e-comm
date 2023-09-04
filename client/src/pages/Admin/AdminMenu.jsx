import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <div class="list-group">

            <Link to="/dashboard" class="list-group-item list-group-item-action active">
                Dashboard
            </Link>
            <Link to="/dashboard/admin/category" class="list-group-item list-group-item-action">Category</Link>
            <Link to="/dashboard/admin/product" class="list-group-item list-group-item-action">Product</Link>
            <Link to="/dashboard/admin/users" class="list-group-item list-group-item-action">Users</Link>

        </div>
    )
}

export default AdminMenu