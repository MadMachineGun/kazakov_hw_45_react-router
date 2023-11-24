import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './components/UsersList';
import AlbumsList from './components/AlbumsList';
import PhotosList from './components/PhotosList';

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<UsersList />} />
                    <Route path="/albums/:userId" element={<AlbumsList />} />
                    <Route path="/photos/:albumId" element={<PhotosList />} />
                </Routes>
            </div>
        </Router>
    );
}

