import styles from "../components/index.module.scss"
import PropTypes from "prop-types";
import Counter from "../../../components/Counter";

const Task = ({ 
  count, 
  addCounter, 
  resetCount,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleReset,
  totalSum,
}) => {

  return(
    <div className={styles.wrapperCount}>
      
      <div className={styles.buttonsArea}>
        <button onClick={addCounter} className={styles.mainButtons}>Add Counter</button>
        <button onClick={resetCount} className={styles.mainButtons}>Reset Counter</button> 
      </div>
      
      <h2>
        <p>Количество счётчиков на экране : {count.length}</p>
        <p>Сумма значений всех счётчиков : {totalSum}</p>
      </h2>

      <div>  {/* зона где будут рисоваться наши счетчики */}
        {
          count.map(({ id, countValue }) => (
            <Counter 
              id = {id}
              key = {id}  /* у каждого элемента в списке должен быть уникальный ключ */
              countValue = {countValue} 
              onIncrement = {handleIncrement}
              onDecrement = {handleDecrement}
              onDelete = {handleDelete}
              handleReset = {handleReset}
            />
          ))
        }
      </div>
    </div>
  )
}

Task.propTypes = {
  count: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.string, countValue: PropTypes.number}) // shape - почему приписываем?
  ).isRequired,
}

export default Task;

// тут прописываю то , что будет отображено на экране