import Counter from '../../../components/Counter';
import { useCounter } from '../../../hooks/useCounter';

const FunctionalCounterContainer = () => {
    const {count, handleDecrement, handleIncrement, handleReset} = useCounter(0);


    /* const[count, setCount] = useState(0);
    const[isClicked, setIsClicked] = useState(false); */

    // const handleIncrement = useCallback( () => {
    //     setCount(count + 1)
    // }, [count])

    /* const handleIncrement = useCallback(() => setCount((state) => state + 1), []); */
    
    // const handleDecrement = useCallback( () => {
    //     if (count > 0) {
    //         setCount(count - 1)
    //     }
    // }, [count])

    /* const handleDecrement = useCallback( () => {
        setCount((state) => {
            if (state > 0) {
                return state - 1
            }
        })
    }, []) */

    // const handleReset = useCallback( () => {
    //     setCount(0)
    // }, [count])

    return(
        <Counter 
            countValue = {count}
            onIncrement = {handleIncrement}
            onDecrement = {handleDecrement}
            onReset = {handleReset}
        />
    )
};

export default FunctionalCounterContainer;