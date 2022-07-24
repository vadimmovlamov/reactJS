import Task from "../components";
import { useCounter } from "../../../hooks/useCounter";


const TaskCounterContainer = () => { 
    const {count, handleDecrement, handleIncrement, handleReset} = useCounter(0);

    return(
        <>
            <Task 
                countValue = {count}
                onIncrement = {handleIncrement}
                onDecrement = {handleDecrement}
                onReset = {handleReset}
            />
        </>
    )
}

export default TaskCounterContainer;



// десь я прописываю бизнес логику работы контейнера