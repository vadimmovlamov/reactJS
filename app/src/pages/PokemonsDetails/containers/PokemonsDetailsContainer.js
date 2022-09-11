import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadPokemonDetails} from "../reducers";

const PokemonsDetailsContainer = () => {
    const {id} = useParams(); // так как params это объект и у него одно поле id то можем сразу деструктуризировать по объекту (вместе params пишем {id}
    const dispatch = useDispatch();
    const {pokemonInfo} = useSelector((state) => state.pokemonDetail)
    useEffect(() =>{
        dispatch(loadPokemonDetails(id))
    }, [id])

    return (
        <div>
            <div>Hello {pokemonInfo?.name}</div>
            <h1>stats</h1>

            <div>
                {pokemonInfo.stats.map((stat) => {
                    return (
                        <div key={stat.stat.url}>{`${stat.stat.name} - ${stat.base_stat}`}</div>
                    )
                })}
            </div>
        </div>
    );
};

export default PokemonsDetailsContainer;