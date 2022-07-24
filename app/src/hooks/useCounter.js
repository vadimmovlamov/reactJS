import { useState, useCallback } from "react"

export const useCounter = (defaultValue, allowNegative = false) => {
    const [count, setCount] = useState(defaultValue)


    const handleIncrement = useCallback(() => {
        setCount((state) => state + 1)
    }, [])

    // const handleDecrement = useCallback(() => {
    //     setCount((state) => state - 1)
    // }, [])

    const handleDecrement = useCallback(() => {
        setCount((state) => {
            const value = state <= 0 && allowNegative ? 1 : 0;

            return state > 0 ? state - 1 : state - value;
        });
    }, []);

    const handleReset = useCallback(() => {
        setCount(defaultValue);
    }, []);

    return {
        count,
        handleIncrement,
        handleDecrement,
        handleReset,
    }
}