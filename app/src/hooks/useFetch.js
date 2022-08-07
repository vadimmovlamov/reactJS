import { useEffect, useState } from 'react';
import { delay } from '../utils/slowFetch';

export const useFetching = (asyncCallback, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [isLoading, setLoading] = useState(false); //сразу состояние загрузки не идет
    const [error, setError] = useState(null) // по умолчанию у нас ошибок нет

    useEffect( () => {
        
        (async () => {
            setLoading(true)
            try {
                await delay(2000)
                const response = await asyncCallback()
                setData(response)
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
        })()
    }, [])

    return{
        data, isLoading, error
    }
}