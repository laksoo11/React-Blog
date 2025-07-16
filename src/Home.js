import { useState } from "react";
const Home = () => {
    const [name, setName] = useState('Diogo');
    const [num, setNum] =useState(20);


   
    const handleClick = () => {

        setName('Jota');
        setNum(2020);
        
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('Hello' + name, e.target);
    // }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is forever {num}</p>
            <button onClick={handleClick}>Click Here</button>
            {/* <button onClick={(e) => handleClickAgain('Wizard', e)}>Click Here Again</button> */}

        </div>
    );
}
 
export default Home;