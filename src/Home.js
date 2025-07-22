import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // const [name, setName] = useState('Diogo'); // initial state
    // const [num, setNum] =useState(20);

    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('DIGGY');


   



    const [changedstate, setChangedState] = useState('initialstate');

    const handleState= () => {
        setChangedState('newState');

    }

   
    // const handleClick = () => {

    //     setName('Jota'); 
    //     setNum(2020);
        
    // }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data)


            });

    }, []);




  return (  
    <div className="home">
        {blogs && <BlogList blogs= {blogs} title = "CHAMP20NS"/>}
        {/* <p>{changedstate}</p> */}

        {/* <button onClick={() => setName('Frosty')}>change name</button>

        <p> {name} </p>

        <BlogList blogs= {blogs.filter((blog) => 
            blog.author === 'Frank'
        )} title = "CHAMPEONS"/> */}
        




        {/* <h2>Homepage</h2>
        {<p>{name} is forever {num}</p> }
        <button onClick={handleClick}>Click Here</button> */}
        {/* <button onClick={(e) => handleClickAgain('Wizard', e)}>Click Here Again</button>  */}

        {/* <button onClick={handleState}>Button</button> */}

      
    </div>
    );
}   
 
 
export default Home;



