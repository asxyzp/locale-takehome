// IMPORTING PACKAGES/MODULES
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContext from './Context/AppContext';
import { BrowserRouter } from 'react-router-dom';

// ROOT ON WHICH IT WILL BE RENDERED
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContext>
                <App />
            </AppContext>
        </BrowserRouter>
    </React.StrictMode>
);
