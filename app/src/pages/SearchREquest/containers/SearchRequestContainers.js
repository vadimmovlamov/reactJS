import { useEffect, useState } from "react";
import FreeSolo from "../../../components/Searcher";
import { BASE_URL } from "../api";

import styles from "../containers/index.module.scss"

const SearchRequest = () => {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null)

    useEffect( () => {
        
        (async () => {
            try {
                const data = await fetch(`${BASE_URL}/pokemon`).then((response) => response.json());
                setPokemons(data.results)
            } catch (error) {
                setError(error.message)
            } 
        })()
    }, [])

    return <div className={styles.wrapper}>
        <h2>Search Pokemon for fight :</h2>
        <FreeSolo 
            pokemons = {pokemons}
            
        />
    </div>
}

export default SearchRequest;