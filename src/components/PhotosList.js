
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import users-list.scss from

export default function PhotosList() {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => setPhotos(response.data))
            .catch(error => console.error('Error fetching photos:', error));
    }, [albumId]);

    return (
        <div>
            <h2>Фотографії з альбому</h2>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p>{photo.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

