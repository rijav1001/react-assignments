import React from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Postview from './Postview';
import './landing_page.css';

function LandingPage() {
    return (
        <>
        <div className='main-landing'>
            <img src='https://thumbs-prod.si-cdn.com/zonBWw2E-iVJ8sHIiY5UXUe-DDc=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/c7/b9/c7b9e461-84fb-47b7-8d59-48442e20bb8a/34i_dj2019_spacexdragonart_live.jpg' alt='landing-img' style={{"transform": "scale(0.5)"}}/>
            <div className='heading'>
                <h2>Landing Page</h2>
                <Link to="/postview" className='go-to'>Enter</Link>
            </div>
        </div>
            <Routes>
                <Route exact path="/postview" element={<Postview/>}>
                </Route>
            </Routes>
        </>
    )
}

export default LandingPage
