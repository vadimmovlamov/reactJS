import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTE_NAMES } from "../../router/routeNames";

const Counter = ({ countValue, countEven, onIncrement, onDecrement, onReset }) => {
  countEven = countValue % 2 === 0
  return (

    <div className={styles.wrapper} >
      
      <button><Link to={ROUTE_NAMES.HOME}>HOME</Link></button>

      <div className={styles.wrapperCount}>
        <div className={`${styles.screen} ${countEven ? styles.bagroundEven : styles.bagroundOdd}`}>
          {countValue}
        </div>
        
        {countValue > 0 && (
          <div className={styles.screen}>
            {countEven ? 'Введено четное число': countValue === 0 ? null : 'Введено нечетное число'}
          </div>
        )}
        
        <div className={styles.buttonsArea}>
          <button onClick={onIncrement} className={styles.controlButton}>+</button>
          <button onClick={onReset} className={styles.controlButton}>🗘</button>
          <button onClick={onDecrement} className={styles.controlButton}>-</button>
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  countEven: PropTypes.func.isRequired
}

export default Counter;