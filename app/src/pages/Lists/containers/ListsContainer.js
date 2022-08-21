import { useCallback, useState } from "react";

import { v4 as uuid } from 'uuid'
import ListsLayout from "../components/ListLayout";
import { mockUsers } from "../mock";

const ListsContainer = () => {
    //const [users, setUsers] = useState(mockUsers); 
    //useState(mockUsers) применялся в том случае, когда мы хотели получить список из import { mockUsers } from "../mock"; НО так как мы хотим показать далее в задании как происходит измерение id при удалении мы не ссылаемся на этот список и используем следующее
    const [users, setUsers] = useState([]);

    const handleUsersCreate = useCallback(() => {
        setUsers((state) => {
            const usersCopy = [...state];

            const id = uuid();

            const newUser = {
                id,
                name: `User-${id}`,
                age: 18,
            }

            usersCopy.push(newUser);

            return usersCopy;
        });
    }, []);

    const handleUserDelete = useCallback((id) => {
        setUsers((state) => {
            const usersCopy = [...state] // сделали копию users, что бы сохранить их и в случае какого-либо изменения, он проверял если кто меняется то изменить но оставить остальные без изменения
            const itemIndexToRemove = usersCopy.findIndex((user) => user.id === id)
            usersCopy.splice(itemIndexToRemove, 1)

            return usersCopy
        })
    }, [])

    return (
        <ListsLayout
            users={users}
            handleUserDelete={handleUserDelete}
            handleUsersCreate={handleUsersCreate}
        />
    )
}

export default ListsContainer;