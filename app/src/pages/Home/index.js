import React from 'react';
import { useSelector } from 'react-redux';
import { countersSelectors } from '../ReduxCounters/selectors';

const Home = () => {
    const counters = useSelector(countersSelectors)       // получаем доступ
    return(
        <div>
            <h1>Home</h1>
            <h2>Counters Amount : {counters.length}</h2>
        </div>
    )
}

export default Home;