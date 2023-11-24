
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';


export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h2>Список користувачів</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <Link to={`/albums/${user.id}`}><button>Album</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


