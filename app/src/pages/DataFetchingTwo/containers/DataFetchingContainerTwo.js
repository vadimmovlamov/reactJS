import PokemonCard from "../../../components/PokemonsCard";
import Spinner from "../../../components/Spinner";
import { useFetching } from "../../../hooks/useFetch";
import { getPokemons } from "../api";


const DataFetchingContainerTwo = () => {
    const { data, isLoading, error } = useFetching( getPokemons, [])
    return (
        <div>
            <h1>Something page - 2 вариант с использование hooks</h1>
            <div>
                {isLoading ? (
                    <Spinner />
                ) : (
                    data.map(({ id, name, image, experience}) => ( // начинай все здесь рисовать только тогда когда будет results
                        <PokemonCard 
                            key={id} 
                            name={name} 
                            image={image} 
                            experience={experience} 
                        />
                    ))
                )}

                {error && <div style={{color: 'red'}}>{error}</div>}
            </div>
        </div>
    )
}

export default DataFetchingContainerTwo;

