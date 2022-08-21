import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Router from "./router/Routes";

import MainLayout from './components/Layouts';
import './index.css';
import { store } from './store/configureStore';

/* 
после появляения в коде redux toolkit ужен нет необходимости 
в configureStore
*/

// import { configureStore } from './store/configureStore';


// import CounterContainer from './pages/Counter/Containers/CounterContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = configureStore(); 

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <MainLayout>
                <Router />
            </MainLayout>
        </Provider>
    </BrowserRouter>
);

// BrowserRouter - обертка для всех страниц приложения
// Provider - 
// MainLayout - что бы header был всегда на виду на всех открываемых страницах
// Router - получает все адреса страниц которые есть