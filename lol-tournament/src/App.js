// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BasicExample from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Teams from './pages/Teams';
import PlayerStats from './pages/PlayerStats';
import Matches from './pages/Matches';
import TeamsStats from './pages/TeamStats';

function App() {
    return (
        <Router>
            <BasicExample/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/matches" element={<Matches />} />
                    <Route path="/playerstats"  element ={<PlayerStats/>} />
                    <Route path="/teamstats"  element ={<TeamsStats/>} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
