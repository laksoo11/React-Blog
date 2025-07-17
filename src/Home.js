import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Diogo'); // initial state
    const [num, setNum] =useState(20);

    const [blogs, setBlogs] = useState([
        {title: 'My new game', body: 'GPA 5', author: 'PopStars', id:'1'},
        {title: 'Celebrations', body: 'Party all night', author: 'Frank', id:'2'},
        {title: 'Top 10 skins 2025', body: 'Best skins to get now', author: 'COC', id:'3'}


    ]);


   
    const handleClick = () => {

        setName('Jota'); 
        setNum(2020);
        
    }


  return (  
    <div className="home">
        <h2>Homepage</h2>
        {<p>{name} is forever {num}</p> }
        <button onClick={handleClick}>Click Here</button>
        {/* <button onClick={(e) => handleClickAgain('Wizard', e)}>Click Here Again</button>  */}

        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
        ))}
    </div>
    );
}   
 
 
export default Home;