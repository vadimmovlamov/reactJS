import React, {
    Component
} from 'react'

import Counter from "../components/Counter";

class CounterContainer extends Component {
    constructor(props) { // для чего мы создаем конструктор
        super(props)
    
        this.state = {
        countValue: 0,
        countEven: true,
        }
    }

    isEven = (number) => (number % 2 === 0)

    handleIncrement = () => {
        this.setState(            // можно не применять this.state а воспользоваться функцией
            (prevState) => {
                const result = prevState.countValue  + 1;
                return {
                    countValue: result, 
                    isEven: this.isEven(result)
                }
            }
        )
    }

    handleDecrement = () => {
        this.setState(            // можно не применять this.state а воспользоваться функцией
            (prevState) => {
                const result = prevState.countValue > 0 ? prevState.countValue - 1 : 0;
                return {
                    countValue: result, 
                    isEven: this.isEven(result)
                }
            }
        )
// как сделать , если я кликаю более 10 раз по кнопке, то выскакивает сообщение - Да задолбал ты! Ща покажу ответ
    }

    handleReset = () => {
        this.setState({
            countValue: 0,
        })
    }

    render() {

/*         let SomeComponent = () => {
            return <div>component</div>
        }

        let SomeComponent = ({ data }) => {
            return <div>{ data }</div>
        } // почему мы тут в фигурные скобки записываем { data }
 */


        return <Counter 
        countValue={this.state.countValue}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
        countEven={this.state.isEven}
        />

        
    }
}

export default CounterContainer;