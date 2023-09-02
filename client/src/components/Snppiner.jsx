import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Snppiner = ({ path = "login" }) => {
    const [count, setCount] = useState(5);
    const nagivate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => --prev)
        }, 1000)
        count === 0 && nagivate(`/${path}`, {
            state: location.pathname,
        })
        return () => clearInterval(interval)
    }, [count, nagivate, location])
    return (
        <div className="text-center d-flex align-content-center" style={{ height: 100 + "vh" }}>
            <h1>you will navigate to in {count}</h1>
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>


    )
}

export default Snppiner