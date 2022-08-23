import { useEffect, useState } from "react"

const LifeCycle = () => {
    const [age, setAge] = useState(20)

    useEffect(() => {
        
    })

    return (
      <div>
        <p>I'm component for understand life cycle with useeffect.</p>
        <p>{age}</p>
        <button onClick={() => setAge((oldState) => oldState + 1)}>+</button>
      </div>  
    )
    
}

export default LifeCycle