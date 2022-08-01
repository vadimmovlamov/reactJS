import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from "./router/Routes";

import './index.css';
import MainLayout from './components/Layouts';
import { configureStore } from './store/configureStore';


// import CounterContainer from './pages/Counter/Containers/CounterContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <MainLayout>
                <Router />
            </MainLayout>
        </Provider>
    </BrowserRouter>
);
