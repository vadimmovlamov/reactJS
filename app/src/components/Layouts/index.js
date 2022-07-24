import React from 'react';
import Header from '../Header';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default MainLayout;

// мы создаем компонент обертку MainLayout который всегда рисует <Header /> и все остальное {children} что туда передадим