//import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to the new blog guys';
  const likes = 20;
  const link = "http://www.google.com";


  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
