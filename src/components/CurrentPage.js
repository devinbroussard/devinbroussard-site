import React, { Component } from 'react';
import HomePage from '../pages/HomePage';
import Navbar from './Navbar';
import '../styles/Pages.css';

function CurrentPage() {
    return (
        <div>
            <Navbar />
            <HomePage />
        </div>
    )
}

export default CurrentPage;