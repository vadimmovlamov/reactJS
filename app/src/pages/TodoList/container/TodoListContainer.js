import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { COMPLETE_FORM, CREATE_FORM, DELETE_FORM, EDIT_FORM, TOGGLE_FORM } from "../actions";
import { todosSelector } from "../selectors";
import TodoReadMode from "../components/TodoReadMode";
import TodoEditMode from "../components/TodoEditMode/Index";

const TodoListContainer = () => {
    const dispatch = useDispatch();
    const todos = useSelector(todosSelector);

    const [form, handleFormChange, handleFormReset] = useForm({todoText:''}) //handleFormReset - очищение формы при submite

    const handleTodoCreate = useCallback((event) => {
        event.preventDefault(); //прописано для того что бы наша форма и страница не перезагружались. сообщает User agent, что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно

        const trimmedValue = form.todoText.trim();
        if (trimmedValue.length > 3) {
            dispatch(CREATE_FORM(form.todoText))
        }
        handleFormReset(); // очистит поле формы

    }, [form.todoText])


    const handleTodoModeToggle = useCallback((id) => {
        dispatch(TOGGLE_FORM(id))
    }, [])

    const handleSave = useCallback(({id, updateText}) => {
        if (updateText.trim().length > 3) {
            dispatch(EDIT_FORM({id, updateText}))
        }
    }, [])

    const handleComplete = useCallback((id) => {
        dispatch(COMPLETE_FORM(id))
    }, [])

    const handleDelete = useCallback((id) => {
        dispatch(DELETE_FORM(id))
    }, [])

    return (
        <>
            <form onSubmit={handleTodoCreate}>
                <input value={form.todoText} onChange={handleFormChange} name="todoText" />

                <button role='submit'>Create Todo</button>
            </form>

            <ol>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        { todo.isEditMode ? (<TodoEditMode id={todo.id} text={todo.text} handleDiscard={handleTodoModeToggle} handleSave={handleSave} />) : (
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

export default TodoListContainer;

//вызываем action и преедаем id, updateText, todoText. Описываем бизнес-логику компонента
//preventDefault() - что бы запретить по умолчанию презагрузку страниц после каждого действия 