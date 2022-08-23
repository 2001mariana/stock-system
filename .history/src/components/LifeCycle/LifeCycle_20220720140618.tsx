import { useState } from "react"

const LifeCycle = () => {
    const [age, setAge] = useState(20)

    return (
      <div>
        I'm component for understand life cycle with useeffect.
      </div>  
    )
    
}

export default LifeCycle