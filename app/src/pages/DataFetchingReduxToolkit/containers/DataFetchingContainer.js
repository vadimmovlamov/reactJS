import Spinner from '../../../components/Spinner';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPokemons } from '../reducers';

const DataFetchingContainerToolkit = () => {
    const dispatch = useDispatch();
    // const {pokemons, isLoading, error} = useFetching(getPokemons, []);
    

    // useEffect с помощью async await
    useEffect( () => {
        dispatch(loadPokemons())
    }, [])


    return(
        <div>
            <h1>Something page</h1>

            {/* <div>
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
            </div> */}
        </div>
    )
}

export default DataFetchingContainerToolkit;