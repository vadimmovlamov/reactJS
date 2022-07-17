import styles from "./index.module.scss"
import PropTypes from "prop-types";

const Counter = ({ countValue, countEven,  onIncrement, onDecrement, onReset }) => {
  return (
    <div className={styles.wrapper}>

      <div className={`${styles.screen} ${countValue === 0 ? styles.bagroundRed : null}`}>
        {countValue}
      </div>
      
      <div className={styles.screen}>
        {countEven ? 'Введено четное число': countValue === 0 ? null : 'Введено нечетное число'}
      </div>
      

      {countValue % 2 !== 0 ? <div className={styles.screenDouble}>Введено нечетное число</div> : countValue === 0 ? null : <div className={styles.screenDouble}>Введено четное число</div>}

      <div className={styles.buttonsArea}>
        <button onClick={onIncrement} className={styles.controlButton}>+</button>
        <button onClick={onReset} className={styles.controlButton}>🗘</button>
        <button onClick={onDecrement} className={styles.controlButton}>-</button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  countEven: PropTypes.bool,
}

export default Counter;