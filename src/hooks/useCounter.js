import { useState } from "react"

export const useCounter = (defaultValue = 0) => {

    const [counter, setCounter] = useState(defaultValue);

    const increment = () => setCounter(counter + 1);

    const decrement = () => setCounter(counter - 1);

    const reset = () => setCounter(defaultValue);

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
