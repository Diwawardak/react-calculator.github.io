import React, { useState} from 'react';
import Button from './Button';

import './App.css';

const App = () => {
    const [time, setTime] = useState(new Date());
    const [value, setValue] = useState('0'); 
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

    const buttonPress = (content) => () => {
        const num = parseFloat(value);

        if (content === 'AC') {
            setValue('0');
            setMemory(null);
            setOperator(null);
            return;
        }
        if (content === '±') {
            setValue((num * -1).toString());
            return;
        } 

        if (content === '%') {
            setValue((num / 100).toString());
            setMemory(null);
            setOperator(null);
            return;
        }

        if (content === '.') {
            if (value.includes('.')) return;

            setValue(value + '.');
            return;
        }



        if (content === '+') {
            if (operator !== null) {

            if (operator === '+') {
                setMemory(memory + parseFloat(value));
            } else if (operator === '−') {
                setMemory(memory - parseFloat(value));
            } else if (operator === '×') {
                setMemory(memory * parseFloat(value));
            } else if (operator === '÷') {
                setMemory(memory / parseFloat(value));
            }
        } else {
            setMemory(parseFloat(value));
        }
            setValue('0');
            setOperator('+');
            return;

        }



        if (content === '−') {
            if (operator !== null) {

                if (operator === '+') {
                    setMemory(memory + parseFloat(value));
                } else if (operator === '−') {
                    setMemory(memory - parseFloat(value));
                } else if (operator === '×') {
                    setMemory(memory * parseFloat(value));
                } else if (operator === '÷') {
                    setMemory(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setValue('0');
            setOperator('−');
            return;

        }



        if (content === '×') {
            if (operator !== null) {

                if (operator === '+') {
                    setMemory(memory + parseFloat(value));
                } else if (operator === '−') {
                    setMemory(memory - parseFloat(value));
                } else if (operator === '×') {
                    setMemory(memory * parseFloat(value));
                } else if (operator === '÷') {
                    setMemory(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setValue('0');
            setOperator('×');
            return;

        }




        if (content === '÷') {
            if (operator !== null) {

                if (operator === '+') {
                    setMemory(memory + parseFloat(value));
                } else if (operator === '−') {
                    setMemory(memory - parseFloat(value));
                } else if (operator === '×') {
                    setMemory(memory * parseFloat(value));
                } else if (operator === '÷') {
                    setMemory(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setValue('0');
            setOperator('÷');
            return;

        }



        if (content === '=') {
            if (!operator) return;

            if (operator === '+') {
                setValue((memory + parseFloat(value)).toString());
            } else if (operator === '−') {
                setValue((memory - parseFloat(value)).toString());
            } else if (operator === '×') {
                setValue((memory * parseFloat(value)).toString());
            } else if (operator === '÷') {
                setValue((memory / parseFloat(value)).toString());
            }
            setMemory(null);
            setOperator(null);
            return;
        }

            if (value[value.length - 1] === '.') {
                setValue(value + content);
            } else {
                setValue(parseFloat(num + content).toString());
            }
 };


    return <div className="container">
    
    <div className="App">
        <div className="top"></div>
        <div className="time">
            {time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}
            </div>
        <div className="display">{value}</div>
        <div className="buttons">
        <Button onButtonClick={buttonPress} content="AC" type="function" />
        <Button onButtonClick={buttonPress} content="±" type="function"/>
        <Button onButtonClick={buttonPress} content="%" type="function"/>
        <Button onButtonClick={buttonPress} content="÷" type="operator"/>
        <Button onButtonClick={buttonPress} content="7"/>
        <Button onButtonClick={buttonPress} content="8"/>
        <Button onButtonClick={buttonPress} content="9"/>
        <Button onButtonClick={buttonPress} content="×" type="operator"/>
        <Button onButtonClick={buttonPress} content="4"/>
        <Button onButtonClick={buttonPress} content="5"/>
        <Button onButtonClick={buttonPress} content="6"/>
        <Button onButtonClick={buttonPress} content="−" type="operator"/>
        <Button onButtonClick={buttonPress} content="1"/>
        <Button onButtonClick={buttonPress} content="2"/>
        <Button onButtonClick={buttonPress} content="3"/>
        <Button onButtonClick={buttonPress} content="+" type="operator"/>
        <Button onButtonClick={buttonPress} content="0"/>
        <Button onButtonClick={buttonPress} content="."/>
        <Button onButtonClick={buttonPress} content="=" type="operator"/>
        </div>
        
        <div className="bottom"></div>
    </div>
    </div>


};

export default App;