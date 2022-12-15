import './Home.css';
import Me from "../img/me.jpg";

function Home() {
  return (
    <div className="Home" id="home">
        <h3>Hello I'm</h3>
        <h1>Estrellita Lastra</h1>
        <img src={Me} alt="me"/>
    </div>
  );
}

export default Home;