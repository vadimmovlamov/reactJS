import { useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import Task from '../components'; //импортируем Task т.к. передаем наши методы для отрисовки в task

const TaskCounterContainer = () => { 
    const [count, setCount] = useState([]); 
// должны запушить объект в массив useState([]) c одним единственным полем countValue

    const addCounter = () => {
        const newCounter = {  //создаем новый счетчик по id
            id: uuid(),
            countValue: 0, 
        }
        //setCount([...count, newCounter]) // передаем все скопированные счетчики count, и добавляем новые
        
        setCount((state) => { // при добавлении нового счётчика всего счётчики с чётными значениями должны получить + 1 к текущему их значению
            const update = state.map((counter) => {
                return {
                    ...counter,
                    countValue: counter.countValue % 2 === 0 ? counter.countValue + 1 : counter.countValue,
                }
            })
            return [...update, newCounter]
        })
    }

    const resetCount = useCallback(() => {
        setCount([])
    }, [])

    const handleIncrement = useCallback((id) => {
        setCount((state) => {
            const countCopy = [...state]  // делаем сначала копию
            const findElement = countCopy.find( // находим в копии countCopy элемент по которому кликнули
                (counter) => counter.id === id
            )
            findElement.countValue += 1 // и по найденному элементу мы презаписываем поле countValue и так как мы мутируем это свойство то д.б. += 1

            return countCopy // возвращаем обновленную копию
        })
    }, [])

    const handleDecrement = useCallback((id) => {
        setCount((state) => {
            const countCopy = [...state]
            const findElement = countCopy.find(
                (counter) => counter.id === id
            )

            if (findElement.countValue > 0) {findElement.countValue -= 1};

            return countCopy // возвращаем обновленную копию
        })
    }, [])

    const handleDelete = useCallback((id) => {
        setCount((state) => {
            const countCopy = [...state]
            const deleteElement = countCopy.findIndex( // findIndex потому что удаляем по индексу
                (counter) => counter.id === id
            )

            countCopy.splice(deleteElement, 1)
            
            // возвращаем обновленную копию
            return countCopy.map(({id, countValue}) => {
                return{
                    id,
                    countValue: countValue % 2 !== 0 ? countValue - 1 : countValue
                }
            })
        })
    }, [])

    const handleReset = useCallback( (id) => {
        setCount((state) => {
            const countCopy = [...state]
            const findElement = countCopy.find(
                (counter) => counter.id === id
            )
            findElement.countValue = 0
            return countCopy
        })
    }, [])

    const totalSum = count.reduce( ( sum, {countValue} ) => { // {countValue} - деструктуризация массива по объекту, т.к. есть массив счетчиков
            return sum + countValue
        }, 0)

    return(
        <Task 
            count= {count}
            addCounter = {addCounter}
            resetCount = {resetCount}
            handleIncrement = {handleIncrement}
            handleDecrement = {handleDecrement}
            handleDelete = {handleDelete}
            handleReset = {handleReset}
            totalSum = {totalSum}
        />
    )
}

export default TaskCounterContainer;



// здесь я прописываю бизнес логику работы контейнера