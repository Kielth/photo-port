import { useState } from "react";

function ClickCounter() {
    const [count, setCouont] = useState(0);

    function increment() {
        setCouont((prevState) => prevState + 1)
    }


    return(
        <div>
            I've been clicke {count} times
            <button onClick={increment}> Add One</button>
        </div>
    )
}

export default ClickCounter;