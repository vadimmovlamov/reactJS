import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Router from "./router/Routes";

import './index.css';
import MainLayout from './components/Layouts';

// import CounterContainer from './pages/Counter/Containers/CounterContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <MainLayout>
            <Router />
        </MainLayout>
    </BrowserRouter>
);
