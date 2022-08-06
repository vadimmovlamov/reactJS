import { memo } from 'react';
import { useForm } from '../../../../hooks/useForm';
import styles from './styles.module.scss';

const TodoEditMode = ({ id, text, handleSave, handleDiscard }) => {
    const [formValues, handleFormChange] = useForm({editText:''})
    
    return (
        <div className={styles.wrapper}>
            <input name='editText' value={formValues.editText} type="text" onChange={handleFormChange} />

            <div>
                <button onClick={ () => handleSave({ id, updateText: formValues.editText }) }>Save</button>
                <button onClick={ () => handleDiscard({ id })}>Discard</button>
            </div>
        </div>
    )
}

export default memo(TodoEditMode);