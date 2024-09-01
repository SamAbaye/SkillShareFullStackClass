import { useState } from "react"; 
const Home = () => {
        const [name, setName] = useState("Rahul")
        const [age, setAge] = useState(20)
    
    const handleClick = () => {
        setName("Samson")
        setAge(30)    
    }
    return (
        <div>
            <h1>Home</h1>
            <p>My name is {name} and I am {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Home;