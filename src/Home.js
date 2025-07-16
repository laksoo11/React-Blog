const Home = () => {

    const handleClick = (e) => {
        console.log('Hello Guys', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello' + name, e.target);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Here</button>
            <button onClick={(e) => handleClickAgain('Wizard', e)}>Click Here Again</button>

        </div>
    );
}
 
export default Home;