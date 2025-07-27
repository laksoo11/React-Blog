// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    

  
   const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
   

    // const [changedstate, setChangedState] = useState('initialstate');

    // const handleState= () => {
    //     setChangedState('newState');

    // }

    
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



