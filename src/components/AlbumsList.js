import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './users-list.scss';

export default function AlbumsList() {
    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => setAlbums(response.data))
            .catch(error => console.error('Error fetching albums:', error));
    }, [userId]);

    return (
        <div>
            <h2>Альбоми користувача</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title}
                        <Link to={`/photos/${album.id}`}><button>Photos</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

