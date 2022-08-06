import { memo } from 'react';
import styles from './styles.module.scss';

const TodoReadMode = ({id, text, handleComplete, handleDelete, handleEdit, isCompleted}) => {
    return (
        <ol className={styles.wrapper}>
            <p style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>{text}</p>

            <div className={styles.buttonArea}>
                {!isCompleted && (
                    <>
                        <button className={styles.controlButton} onClick={() => handleComplete(id)}>Complete</button>
                        <button className={styles.controlButton} onClick={() => handleEdit(id)}>Edit</button>
                    </>
                )}
                <button className={styles.controlButton} onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </ol>
    )
}

export default memo(TodoReadMode);