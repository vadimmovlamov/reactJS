import PokemonCard from "../../../components/PokemonsCard";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {loadPokemons} from "../reducers";
import {ROUTE_NAMES} from "../../../router/routeNames";


const DataFetchingContainerToolkit = () => {
    const dispatch = useDispatch();

    const  navigate = useNavigate();

    const { data } = useSelector((state) => state.pokemons)

    // useEffect с помощью async await
    useEffect( () => {
        dispatch(loadPokemons())
    }, []);

    const  handleNavigateToPokemonDetail = (pokemonId) => {
        navigate(`${ROUTE_NAMES.DATA_FETCH_TOOLKIT}/${pokemonId}`);
    }

    return(
        <div>
            <h1>Something page - DATA_FETCH_TOOLKIT </h1>

            <div>
                {data.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        experience={pokemon.experience}
                        handleClick={() => handleNavigateToPokemonDetail(pokemon.id)}
                    />    
                ))}
            </div>
        </div>
    )
}

export default DataFetchingContainerToolkit;