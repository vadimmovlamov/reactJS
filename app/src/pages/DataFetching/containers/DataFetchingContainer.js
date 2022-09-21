import Spinner from '../../../components/Spinner';

import { useEffect, useState } from 'react';
import { delay } from '../../../utils/slowFetch';
import { BASE_URL } from '../Api/config';

const DataFetchingContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setLoading] = useState(false); //сразу состояние загрузки не идет
    const [error, setError] = useState(null) // по умолчанию у нас ошибок нет
    

    /*useEffect простой и плохой метод
    useEffect(() => {
        setLoading(true) // идет состояние загрузки если пошел запрос fetch
        delay(2000).then(()=> {
            fetch(`${BASE_URL}/pokemon`).then(response => response.json()).then(data => {
                setPokemons(data.results)
    
                //setLoading(false) // загрузка останавливается после получения запроса
            }).catch(error => {
                setError(error.message)
            }).finally(() => {
                setLoading(false)
            })
        })
    }, [])
    */


    // useEffect с помощью async await
    useEffect( () => {
        
        (async () => {
            try {
                setLoading(true)
                await delay(2000);
                const data = await fetch(`${BASE_URL}/pokemon`).then((response) => response.json());
                setPokemons(data.results)
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
        })()
    }, [])


    return(
        <div>
            <h1>Something page</h1>

            <div>
                {isLoading ? (
                    <Spinner />
                ) : (
                    pokemons.map(({url, name}) => (
                        <div key={url}>
                            <a href={url} target='_blank'>{name}</a>
                        </div>
                    ))
                )}

                {error && <div style={{color: 'red'}}>{error}</div>}
            </div>
        </div>
    )
}

export default DataFetchingContainer;