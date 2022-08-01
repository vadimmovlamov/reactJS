import { useDispatch, useSelector } from "react-redux";

import TodoList from "../components";
import { CREATE_FORM, DELETE_FORM, EDIT_FORM } from "../actions";

const TodoListContainer = () => {
    const dispatch = useDispatch();

    const forms = useSelector((state) => state.formManager.forms);

    const handleListCreate = () => {
        dispatch(CREATE_FORM())
    }

    const handleListEdit = (id) => {
        dispatch(EDIT_FORM(id))
    } 

    const handleListDelete = (id) => {
        dispatch(DELETE_FORM(id))
    } 

    return (
        <>
            <div>
                {forms.map(({ item }) => (
                    <div key={item.id}>
                        <div>{ item.title }</div>
                        <button onClick={ () => handleListEdit(item.id) }>Edit</button>
                        <button onClick={ () => handleListDelete(item.id) }>Delete</button>
                    </div>

                    <TodoList
                        todoValue={value}
                        onCreate={handleListCreate}
                        onEdit={handleListEdit}
                        onDelete={handleListDelete}
                        key={id}
                        id={id}
                    />
                ))}
            </div>
        </>
    )
}

export default TodoListContainer;