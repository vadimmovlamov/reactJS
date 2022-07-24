import { useCallback, useState } from "react";

import {v4 as uuid} from 'uuid'
import ListsLayout from "../components/ListLayout";

const ListsContainer = () => {
    const [users, setUsers] = useState([]);
    const handleUserDelete = useCallback((id) => {
        setUsers((state) => {
            const usersCopy = [...state] // сделали копию users, что бы сохранить их и в случае какого-либо изменения, он проверял если кто меняется то изменить но оставить остальные без изменения
            const itemIndexToRemove = usersCopy.findIndex((user) => user.id === id)
            usersCopy.splice(itemIndexToRemove, 1)

            return usersCopy
        })
    }, [])

    const handleUsersCreate = useCallback(() => {
        setUsers((state) => {
            const usersCopy = [...state];

            const id = uuid();

            const newUser ={
                id,
                name: `User-${id}`,
                age:18,
            }
        
            usersCopy.push(newUser);
            return usersCopy;
        });
    },[]);

    return (
    <ListsLayout 
        users={users} 
        handleUserDelete={handleUserDelete}
        handleUsersCreate={handleUsersCreate}
    />)
}

export default ListsContainer;