
const Home = () => {
    
    const handleClick = (e) => {
        console.log('clicked');
        console.log(e);
    }
    const handleAnotherClick = (name) => {
        console.log(`My name is ${name}`);
        
    }
    return (    
        <div>

            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleAnotherClick('John')}>Click Me</button>
        </div>
    )   
}

export default Home;