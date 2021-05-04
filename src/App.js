import React from 'react';
import './App.css';
import WebfileStream from "./components/webfilesstream/WebfileStream";

import {BrowserRouter} from 'react-router-dom'
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router";
import Configuration from "./components/configuration/Configuration";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <div className="App">
                <Routes>
                    <Route path="/" element={<WebfileStream />} />
                    <Route path="/webfilestream" element={<WebfileStream />} />
                    <Route path="/webfileconfiguration" element={<Configuration />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
