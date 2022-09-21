import { MenuItem, Select } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
// import { COMPLETE_FORM, CREATE_FORM, DELETE_FORM, EDIT_FORM, TOGGLE_FORM } from "../actions";
import TodoEditMode from "../components/TodoEditMode/Index";
import TodoReadMode from "../components/TodoReadMode";
import { FILTER_BY_OPTIONS, FILTER_BY_SCENARIO, SORT_OPTIONS, SORT_SCENARIO } from "../config";
import { todosSelector } from "../selectors";
import { createTodo, toggleTodo, editTodo, completeTodo, deleteTodo } from "../reducers";

const TodoListContainerSearch = () => {
    const dispatch = useDispatch();
    const todos = useSelector(todosSelector);

    const [form, handleFormChange, handleFormReset] = useForm({ todoText: '' }) //handleFormReset - очищение формы при submite

    const [sortOption, setSortOption] = useState(SORT_OPTIONS.DEFAULT); // state for Sort by

    const [filterOption, setFilterOption] = useState(FILTER_BY_OPTIONS.DEFAULT); // state for filter

    const handleTodoCreate = useCallback((event) => {
        event.preventDefault(); //прописано для того что бы наша форма и страница не перезагружались. сообщает User agent, что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно

        const trimmedValue = form.todoText.trim();
        if (trimmedValue.length > 3) {
            dispatch(createTodo(form.todoText))
        }
        handleFormReset(); // очистит поле формы

    }, [form.todoText])

    const handleTodoModeToggle = useCallback((id) => {
        dispatch(toggleTodo(id))
    }, [])

    const handleSave = useCallback(({ id, updateText }) => {
        if (updateText.trim().length > 3) {
            dispatch(editTodo({ id, updateText }))
        }
    }, [])

    const handleComplete = useCallback((id) => {
        dispatch(completeTodo(id))
    }, [])

    const handleDelete = useCallback((id) => {
        dispatch(deleteTodo(id))
    }, [])

    const handleSortOptionChange = useCallback((event) => {
        setSortOption(event.target.value)
    }, [])

    const todosToRender = useMemo(() => {
        const copy = [...todos]

        /* если у нас есть сортировка, то мы берем и сортируем const copy = [...todos] */
        if (SORT_SCENARIO[sortOption]) {
            copy.sort(SORT_SCENARIO[sortOption]) // что здесь происходит?
        }

        /* если у нас есть еще и фильтер, то мы применяем фильтер к const copy = [...todos] и возвращаем отфильтрованный результат */       
        if (FILTER_BY_SCENARIO[filterOption]) {
            return copy.filter(FILTER_BY_SCENARIO[filterOption])
        }
        /* возращаем наше состояние todos */
        return todos;

    }, [todos, sortOption, filterOption])

    const handleFilterOptionChange = useCallback((event) => {
        setFilterOption(event.target.value)
    }, [])


    return (
        <>
            <form onSubmit={handleTodoCreate}>

                <input
                    value={form.todoText}
                    onChange={handleFormChange}
                    name="todoText"

                />
                <button role='submit'>Create Todo</button>
            </form>

            <div>
                <h2>Sort by:</h2>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortOption}
                    defaultValue={SORT_OPTIONS.DEFAULT}
                    onChange={handleSortOptionChange}
                >
                    <MenuItem value={SORT_OPTIONS.ASC}>Ascending</MenuItem>
                    <MenuItem value={SORT_OPTIONS.DESC}>Descending</MenuItem>
                    <MenuItem value={SORT_OPTIONS.DEFAULT}>Default</MenuItem>
                </Select>

                <h2>Filter by:</h2>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filterOption}
                    defaultValue={FILTER_BY_OPTIONS.DEFAULT}
                    onChange={handleFilterOptionChange}
                >
                    <MenuItem value={FILTER_BY_OPTIONS.COMPLETED}>Completed</MenuItem>
                    <MenuItem value={FILTER_BY_OPTIONS.DEFAULT}>Default</MenuItem>
                </Select>
            </div>
            
            <ol>
                {todosToRender.map((todo) => (
                    <li key={todo.id}>
                        {todo.isEditMode ? (<TodoEditMode id={todo.id} text={todo.text} handleDiscard={handleTodoModeToggle} handleSave={handleSave} />) : (
                            <TodoReadMode
                                id={todo.id}
                                text={todo.text}
                                handleEdit={handleTodoModeToggle}
                                isCompleted={todo.isCompleted}
                                handleComplete={handleComplete}
                                handleDelete={handleDelete}
                            />)
                        }
                    </li>
                ))}
            </ol>


        </>
    )
}

/*  */
export default TodoListContainerSearch;

//вызываем action и преедаем id, updateText, todoText. Описываем бизнес-логику компонента
//preventDefault() - что бы запретить по умолчанию презагрузку страниц после каждого действия 