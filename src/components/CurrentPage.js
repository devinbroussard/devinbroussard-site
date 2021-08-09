import React, { Component } from 'react';
import HomePage from '../pages/HomePage';
import Navbar from './Navbar';

function CurrentPage() {
    return (
        <div>
            <Navbar />
            <HomePage />
        </div>
    )
}

export default CurrentPage;