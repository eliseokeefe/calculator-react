import styles from './App.css';
import React, {useReducer} from 'react';

const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    CHOSE_OPERATION: 'chose-operation',
    EVALUATE: 'evaluate'
}
function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            return { ...state, currentOperand: '${state.currentOperand}${payload.digit}'}
    }
}

function App(){
    const[{currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})
    return (
        <div className="calculator-grid">
            <div className="output">
                // Operand & Previous Value
                <div className="previous-operand">{previousOperand} {operation} </div>
                <div className="current-operand">{currentOperand}</div>
        </div>
        // Buttons, top to bottom represents reading from left to right on the UI calculator 
        <button className="span-two">AC</button>
        <button>DEL</button>
        <button>÷</button>
        //new row
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        //new row 
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        //new row
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        //new row
        <button>.</button>
        <button>0</button>
        <button className="span-two">=</button>
        </div>
    )
}

