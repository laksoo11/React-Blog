import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // const [name, setName] = useState('Diogo'); // initial state
    // const [num, setNum] =useState(20);

    const [blogs, setBlogs] = useState([
        {title: 'My new game', body: 'GPA 5', author: 'PopStars', id:'1'},
        {title: 'Celebrations', body: 'Party all night', author: 'Frank', id:'2'},
        {title: 'Top 10 skins 2025', body: 'Best skins to get now', author: 'COC', id:'3'}


    ]);

    const [name, setName] = useState('DIGGY');


    const handelDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);


    }



    const [changedstate, setChangedState] = useState('initialstate');

    const handleState= () => {
        setChangedState('newState');

    }

   
    // const handleClick = () => {

    //     setName('Jota'); 
    //     setNum(2020);
        
    // }

    useEffect(() => {
        console.log('use effect running');
        console.log(name);

    }, [name]);




  return (  
    <div className="home">
        <BlogList blogs= {blogs} title = "CHAMP20NS" handelDelete={handelDelete}/>
        {/* <p>{changedstate}</p> */}

        <button onClick={() => setName('Frosty')}>change name</button>

        <p> {name} </p>

        <BlogList blogs= {blogs.filter((blog) => 
            blog.author === 'Frank'
        )} title = "CHAMPEONS"/>
        




        {/* <h2>Homepage</h2>
        {<p>{name} is forever {num}</p> }
        <button onClick={handleClick}>Click Here</button> */}
        {/* <button onClick={(e) => handleClickAgain('Wizard', e)}>Click Here Again</button>  */}

        {/* <button onClick={handleState}>Button</button> */}

      
    </div>
    );
}   
 
 
export default Home;



