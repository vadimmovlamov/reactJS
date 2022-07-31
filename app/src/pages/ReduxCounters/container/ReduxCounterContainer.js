import { useDispatch, useSelector } from "react-redux";

import Counter from "../../../components/Counter";
import { CREATE_COUNTER, DECREMET_COUNTER, DELETE_COUNTER, INCREMET_COUNTER, REMOVE_ALL, RESET_COUNTER } from "../actions";
import { countersSelectors } from "../selectors/index.js";

const ReduxCounterContainer = () => {
    const dispatch = useDispatch();

    const counters = useSelector(countersSelectors);

    const handleCounterCreate = () => {
        dispatch(CREATE_COUNTER())
    }

    const handleCounterRemoveALL = () => {
        dispatch(REMOVE_ALL())
    } 

    const handleCounterIncrement = (id) =>{ // принимаем id что бы найти элемент
        dispatch(INCREMET_COUNTER(id))
    }
    
    const handleCounterDecrement = (id) => {
        dispatch(DECREMET_COUNTER(id))
    }
    
    const handleCounterReset = (id) => {
        dispatch(RESET_COUNTER(id))
    } 
    
    const handleCounterRemove = (id) => {
        dispatch(DELETE_COUNTER(id))
    } 

    return (
        <>
            <button onClick={handleCounterCreate}>Create Counter</button>
            <button onClick={handleCounterRemoveALL}>Delete All Counters</button>

            <div>
                {counters.map(({ id, countValue }) => (
                    <Counter
                        countValue={countValue}
                        onDelete={handleCounterRemove}
                        onIncrement={handleCounterIncrement}
                        onDecrement={handleCounterDecrement}
                        onReset={handleCounterReset}
                        
                        key={id}
                        id={id}
                    />
                ))}
            </div>
        </>
    )
}

export default ReduxCounterContainer;