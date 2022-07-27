import { memo } from "react";

import styles from "./user.module.css"

const User =( { name, age, onDelete, id } )=> {

    return(
        <div className={styles.wrapper}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>

            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default memo(User);