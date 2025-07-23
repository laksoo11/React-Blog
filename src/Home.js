import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // const [name, setName] = useState('Diogo'); // initial state
    // const [num, setNum] =useState(20);

    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('DIGGY');

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);


   



    const [changedstate, setChangedState] = useState('initialstate');

    const handleState= () => {
        setChangedState('newState');

    }

   
    // const handleClick = () => {

    //     setName('Jota'); 
    //     setNum(2020);
        
    // }

    useEffect(() => {
      setTimeout(() => {
          fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res);

                if(!res.ok) {
                    throw Error('could not fetch the data');

                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                
            })
      },500);

      

    }, []);




  return (  
    <div className="home">
        { error && <div> {error} </div>}
        { isPending && <div>Loading ....</div>}
        {blogs && <BlogList blogs= {blogs} title = "CHAMP20NS"/>}
        {/* <p>{changedstate}</p> */}

        {/* <button onClick={() => setName('Frosty')}>change name</button>

        <p> {name} </p>

        <BlogList blogs= {blogs.filter((blog) => 
            blog.author === 'Frank'
        )} title = "CHAMPEONS"/> */}
        




     

      
    </div>
    );
}   
 
 
export default Home;



