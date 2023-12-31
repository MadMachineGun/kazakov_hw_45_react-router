import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';

// ...

export default function PhotosList() {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => setPhotos(response.data))
            .catch(error => console.error('Error fetching photos:', error));
    }, [albumId]);

    return (
        <div className='photos'>
            <h2>Фотографии из альбома</h2>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.url} alt={photo.title} />
                        <p>{photo.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
