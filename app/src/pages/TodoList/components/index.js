import {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import styles from '../components/index.module.scss';

function TodoList ({id, value, onCreate, onEdit, onDelete}) {

    return(
        <div className={styles.wrapper}>
            <input 
            placeholder='Enter somthing'
            onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={onCreate(id)}>Add Form</button>
        </div>
    )
}
//тут я создаю все что увижу на экране 
export default TodoList;