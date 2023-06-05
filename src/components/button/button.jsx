import { useState } from 'react';
import contador from './contador.css';
export default function Button(props) {
    const [count, setCount] = useState(0);
    const handlePlus = () => {
        setCount(count + 1);
    }
    const handleMinus = () => {
        setCount(count - 1);
    }

    return (
        <div className="contador">
            <button  className='btn btn-primary' onClick={handlePlus}> +   </button>
            <span>{count}</span>
            <button  className='btn btn-primary' onClick={handleMinus}> -  </button>
        </div>

    )
}
