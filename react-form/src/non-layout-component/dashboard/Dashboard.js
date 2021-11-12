import React from 'react'
import { useSelector } from 'react-redux';

function Dashboard() {

    const { isLoggedIn } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.auth);

    console.log('data is: ', isLoggedIn)
    console.log('user data is: ', user)

    return (
        <div>
            This is Dashboard
        </div>
    )
}

export default Dashboard
