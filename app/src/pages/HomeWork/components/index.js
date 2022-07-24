import React from 'react';
import styles from './index.module.scss'
import PropTypes from 'prop-types';

const Task = ({ countValue,  onIncrement, onDecrement, onReset, addCounter, resetCounter }) => {
  return(
    <div className={styles.wrapper}>

      <div>
        <button onClick={addCounter} className={styles.mainButtons}>Add Counter</button>
        <button onClick={resetCounter} className={styles.mainButtons}>Reset</button>
      </div>
      
      <div className={styles.wrapperCount}>
        <div className={`${styles.screen} ${countValue % 2 === 0 ? styles.bagroundEven : styles.bagroundOdd}`}>
          {countValue}
        </div>
      
        {
          countValue > 0 && (
            <div className={styles.screen}>
              {countValue % 2 === 0 ? 'Введено четное число' : 'Введено нечетное число'}
            </div>
          )
        }
      
        <div className={styles.buttonsArea}>
          <button onClick={onIncrement} className={styles.controlButton}>+</button>
          <button onClick={onReset} className={styles.controlButton}>🗘</button>
          <button onClick={onDecrement} className={styles.controlButton}>-</button>
        </div>
      </div>
      
    </div>  
  )
}
Task.propTypes = {
  countValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  countEven: PropTypes.func.isRequired
}

export default Task;