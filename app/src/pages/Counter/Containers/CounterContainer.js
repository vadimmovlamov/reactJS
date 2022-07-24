import React, { PureComponent } from 'react'

import Counter from "../../../components/Counter";

class CounterContainer extends PureComponent {
    constructor(props) {
        // Вызов конструктора
        // Родительский класс React.Component
        super(props)
        
        // процесс инициализации
        this.state = {
            countValue: 0,
            countEven: true
        }
    }

    isEven = (number) => (number % 2 === 0)

    handleIncrement = () => {
        this.setState( 
            (state) => {
                const incrementValue = state.countValue + 1;
                return {
                    countValue: incrementValue,
                    countEven: this.isEven(incrementValue)
                }
            }
        )
    }

    handleDecrement = () => {
        if (this.state.countValue > 0) {
            this.setState((state) => {
                const nextCount = state.countValue - 1
                return{
                    countValue: nextCount,
                    countEven: this.isEven(nextCount)
                }
            })
        }
    }

    handleReset = () => {
        this.setState({
            countValue: 0, countEven: true
        })
    }

    render() {
        return (
            <>
                <Counter
                    countValue = {this.state.countValue}
                    onIncrement = {this.handleIncrement}
                    onDecrement = {this.handleDecrement}
                    onReset = {this.handleReset}
                    countEven = {this.state.countEven}
                />
            </>
        )
    }
}

export default CounterContainer;